import React, { useEffect, useRef, useState } from 'react'
import { useInterval, useTimeout } from 'ahooks';
import { motion } from "framer-motion";

export default function Main() {

    // 슬라이드 시간
    const slideTime = 500;
    const slideDelay = 10;
    const autoPlayTime = 2000;

    // 3초 마다 실행
    useInterval(() => {
        onNextSlide();
    }, autoPlayTime);
    
    // 동작중 플래그
    const [isLoading, setLoading] = useState(false);

    // 슬라이드 인덱스
    const [slideIndex, setSlideIndex] = useState(0);
    const [nextSlideIndex, setNextSlideIndex] = useState(1);
    const [isEmpty, setEmpty] = useState(false);
    const images = [
        '/images/main_banner01.jpg',
        '/images/main_banner02.jpg',
        '/images/main_banner03.jpg',
    ];

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
            <div className="container">
                <div className="content">
                    <input id="slide-index" type="hidden" value={nextSlideIndex} />
                    <div className="text-part">

                    </div>
                    {images.map((image: string, idx: number) => {
                        return (
                            <div className={`image-part image-${idx+1} ${idx===slideIndex ? 'selected' : ''}`}>

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
            .content .text-part {transition: ${slideTime}ms; flex: 1;}
            .content .image-part {transition: ${slideTime}ms; flex-basis: 0px; opacity: 0;}
            .content .image-part.image-1 {background: url('/images/main_banner01.jpg') no-repeat center; background-attachment: fixed; background-size: cover;}
            .content .image-part.image-2 {background: url('/images/main_banner02.jpg') no-repeat center; background-attachment: fixed; background-size: cover;}
            .content .image-part.image-3 {background: url('/images/main_banner03.jpg') no-repeat center; background-attachment: fixed; background-size: cover;}
            .content .image-part.selected {transition: ${slideTime}ms; flex-basis: 700px; opacity: 1;}
            .content .empty {transition: ${slideTime}ms; background: black; flex-basis: 700px;}
            .content .empty.small {transition: ${slideTime}ms; background: black; flex-basis: 0px;}

            .container > .background {width: 100vw; height: 100vh; background: black; display: flex; flex-direction: column;}
            .container > .background > .part-1 {font-size: 0; width: 100vw; flex-basis: 112px; padding: 48px 0px 48px 48px;}
            .container > .background > .part-2 {flex: 1; width: 100vw; display: flex; flex-direction: row; padding: 0px 48px 48px 48px;}
            .container > .background > .part-2 > .part-3 {flex:1; border-left: 1px solid #fff; border-bottom: 1px solid #fff;}
            .container > .background > .part-2 > .part-4 {flex-basis: 120px; display: flex; align-items: flex-end;}
            .container > .background > .part-2 > .part-4 > .slide-buttons {display: flex; align-items: center;}
            .container > .background > .part-2 > .part-4 > .slide-buttons > div {width: 60px; display: flex; justify-content: center; cursor: pointer;}
            `}</style>
        </>
    )
}
