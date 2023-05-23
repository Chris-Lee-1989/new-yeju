import React, { useEffect, useRef, useState } from 'react'
import { useInterval, useTimeout } from 'ahooks';

export default React.forwardRef(function Main(props, ref: any) {

    // 슬라이드 시간
    const slideTime = 2000;
    const slideDelay = 10;
    const autoPlayTime = 5000;

    // 3초 마다 실행
    useInterval(() => {
        onNextSlide();
    }, autoPlayTime);
    
    // 동작중 플래그
    const [isLoading, setLoading] = useState(false);

    // 현재 슬라이드 인덱스
    const [slideIndex, setSlideIndex] = useState(0);
    // 다음 슬라이드 인덱스
    const [nextSlideIndex, setNextSlideIndex] = useState(1);
    // 빈 화면 여부
    const [isEmpty, setEmpty] = useState(false);
    // 이미지 리스트
    const images = [ '/images/main_banner01.jpg', '/images/main_banner02.jpg', '/images/main_banner03.jpg' ];
    // 텍스트 리스트
    const text1 = [ 'Discover new value', 'Deep blue sky', 'Melody' ];
    const text2 = [ 'Serendipity', 'Azure', 'Lyrical' ];

    // 이전 슬라이드
    const onPrevSlide = () => {
        if (isLoading) {
            return false;
        }
        setLoading(true);
        setNextSlideIndex(Number(slideIndex) === 0 ? Number(images.length-1) : Number(slideIndex) - 1);
        setSlideIndex(images.length);
        setTimeout(() => {
            setEmpty(true);
            setTimeout(() => {
                const target: any = document.querySelector('#slide-index');
                const nextSlideIndex = Number(target.value);
                setSlideIndex(nextSlideIndex);
                setTimeout(() => setEmpty(false),slideTime);
                setLoading(false);
            }, slideDelay);
        }, slideTime);
    }

    // 다음 슬라이드
    const onNextSlide = () => {
        if (isLoading) {
            return false;
        }
        setLoading(true);
        setNextSlideIndex(Number(slideIndex) === Number(images.length-1) ? 0 : Number(slideIndex) + 1);
        setSlideIndex(images.length);
        setTimeout(() => {
            setEmpty(true);
            setTimeout(() => {
                const target: any = document.querySelector('#slide-index');
                const nextSlideIndex = Number(target.value);
                setSlideIndex(nextSlideIndex);
                setTimeout(() => setEmpty(false),slideTime);
                setLoading(false);
            }, slideDelay);
        }, slideTime);
    }
    
    return (
        <>
            <div id="main-container" className="container" ref={ref}>
                <div className="content">
                    <input id="slide-index" type="hidden" value={nextSlideIndex} />
                    <div className="text-part">
                        <TextPart  
                            isLoading={isLoading}
                            slideTime={slideTime}
                            title={text2[slideIndex]}    
                            description={text1[slideIndex]}    
                        />
                    </div>
                    {images.map((image: string, idx: number) => {
                        return (
                            <div key={idx} className={`image-part image-${idx+1} ${idx===slideIndex ? 'selected' : ''}`}>

                            </div>
                        )
                    })}
                    {isEmpty && <div className={`empty ${images.length > slideIndex ? 'small' : ''}`}></div>}
                </div>
                <div className="background">
                    <div className="part-1">
                        <img src={"/images/logo.png"} width={48} />
                    </div>
                    <div className="part-2">
                        <div className="part-3" />
                        <div className="part-4">
                            <div className="slide-buttons">
                                <div onClick={onPrevSlide}>
                                    <img src="/images/arrow_prev.png" />
                                </div>
                                <div onClick={onNextSlide}>
                                    <img src="/images/arrow_next.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
            .container {}

            .content {width: calc(100vw - 168px); height: calc(100vh - 97px); position: absolute; z-index: 10; display: flex; flex-direction: row;}
            .content .text-part {transition: ${slideTime}ms; flex: 1; display: flex; flex-direction: column; justify-content: center; padding-left: 96px;}
            .content .text-part span {
                font-family: 'Daehan-Bold';
				font-family: 'IBM Plex Sans KR', sans-serif;
				letter-spacing: 5px;
			    color: #eee;
            }
            .content .text-part h1 {
                font-size: 10vh;
				font-family: 'Nanum Myeongjo', serif;
			    color: #eee;
				margin-top: 40px;
            }
            .content .text-part {}
            .content .image-part {transition: ${slideTime}ms; flex-basis: 0px; opacity: 0;}
            .content .image-part.image-1 {background: url('/images/main_banner01.jpg') no-repeat; background-attachment: fixed; background-position: right; background-size: contain;}
            .content .image-part.image-2 {background: url('/images/main_banner02.jpg') no-repeat; background-attachment: fixed; background-position: right; background-size: contain;}
            .content .image-part.image-3 {background: url('/images/main_banner03.jpg') no-repeat; background-attachment: fixed; background-position: right; background-size: contain;}
            .content .image-part.selected {transition: ${slideTime}ms; flex-basis: 700px; opacity: 1;}
            .content .empty {transition: ${slideTime}ms; background: black; flex-basis: 700px;}
            .content .empty.small {transition: ${slideTime}ms; background: black; flex-basis: 0px;}

            .container > .background {width: 100vw; height: 100vh; background: black; display: flex; flex-direction: column;}
            .container > .background > .part-1 {font-size: 0; width: 100vw; flex-basis: 112px; padding: 48px 0px 48px 48px;}
            .container > .background > .part-2 {flex: 1; width: 100vw; display: flex; flex-direction: row; padding: 0px 48px 48px 48px;}
            .container > .background > .part-2 > .part-3 {flex:1; border-left: 0.5px solid #eee; border-bottom: 0.5px solid #eee;}
            .container > .background > .part-2 > .part-4 {flex-basis: 120px; display: flex; align-items: flex-end;}
            .container > .background > .part-2 > .part-4 > .slide-buttons {display: flex; align-items: center;}
            .container > .background > .part-2 > .part-4 > .slide-buttons > div {width: 60px; display: flex; justify-content: center; cursor: pointer;}
            `}</style>
        </>
    )
})































interface TextPartProps {
    isLoading: boolean;
    slideTime: number;
    title: string;
    description: string;
}
const TextPart = ({ isLoading, slideTime, title, description }: TextPartProps) => {

    useEffect(() => {
        title && setTitle(title);
        description && setDescription(description);
    }, [isLoading])

    const [_title, setTitle] = useState(title);
    const [_description, setDescription] = useState(description);

    return (
        <>
            <div className={`content ${isLoading && 'loading'}`}>
                <div className="text-part">
                    <span>{_description}</span>
                    <h1>{_title}</h1>
                </div>
            </div>

            <style jsx>{`
            .content .text-part {transition: ${slideTime}ms; flex: 1; display: flex; flex-direction: column; justify-content: center; padding-left: 96px; opacity: 1;}
            .content.loading .text-part {transition: ${slideTime}ms; opacity: 0;}
            .content .text-part span {
                font-family: 'Daehan-Bold';
				font-family: 'IBM Plex Sans KR', sans-serif;
				letter-spacing: 5px;
			    color: #eee;
                transition: ${slideTime}ms;
                transform: translateX(0%);
            }
            .content.loading .text-part span {transition: ${slideTime}ms; transform: translateX(5%);}
            .content .text-part h1 {
                font-size: 10vh;
				font-family: 'Nanum Myeongjo', serif;
			    color: #eee;
				margin-top: 40px;
                transition: ${slideTime}ms;
                transform: translateY(0%);
            }
            .content.loading .text-part h1 {transition: ${slideTime}ms; transform: translateY(10%);}

            `}</style>
        </>
    )
}