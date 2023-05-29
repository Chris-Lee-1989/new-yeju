import React, { useMemo, useRef, useState } from 'react'
import works from '@/components/work/works';
import { useMount, useScroll } from 'ahooks';

let refs: any[] = [];
export default function NewWork() {

    // 화면 높이
    const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 1000;

    // 스크롤
    const scroll = useScroll();

    // 엘리먼트 시작점
    const ref: any = useRef();

    const scrollIndex = useMemo(() => {
        if (scroll && ref.current) {
            for (let i=0; i < works.length; i++) {
                if ((ref.current.offsetTop + screenHeight * (i)) < scroll.top && scroll.top < ref.current.offsetTop + screenHeight * (i+1)) return i + 1;
                if (scroll.top > ref.current.offsetTop + screenHeight * (works.length)) return 999
            }
        }
        return 0
    }, [ref, scroll]);

    const itemTop = (() => {
        if (!ref.current || !scroll ) return  undefined
        if (scrollIndex > 0 && scrollIndex < 7 ) {
            if (scrollIndex > 0) {
                return '50%';
            } else {
                return ref.current.offsetTop + (screenHeight/2);
            }
        } else {    
            const height = (ref.current.offsetTop + (screenHeight / 2) - scroll.top)
            return height
        }
    })();

    console.log(scrollIndex)

    return (
        <>
            <div id="work-container" ref={ref}>
                {
                    works.map((item, idx) => {
                        if (ref.current) {
                            return (
                                <div
                                    className={`box box-${idx} ${scrollIndex > (idx + 1) ? '' : 'un-view'}`} 
                                    key={idx}
                                    style={{
                                        top: idx+1 < scrollIndex ? '100vw' : itemTop,
                                        transform: `translate(-${50 + (scrollIndex - idx + 1) }%, -${50 - (scrollIndex - idx + 1) * 2}%)`,
                                        zIndex: works.length + 1 - idx,
                                    }}
                                >
                                    <div className="count">
                                        <div>
                                            <h2>{String(idx + 1).padStart(2, '0')}</h2>
                                            <h3>/ {String(works.length).padStart(2, '0')}</h3>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h1>{item.title}</h1>
                                        <pre>{item.description}</pre>
                                    </div>
                                    <div className="image" 
                                        style={{
                                            backgroundRepeat: 'no-repeat',
                                            backgroundImage: `url('${item.imageUrl}')`,
                                            // backgroundPositionX: '10vw',
                                            backgroundSize: 'cover',
                                        }}
                                    />
                                </div>
                            )
                        }
                    })
                }
            </div>
            <style jsx>{`
            #work-container {transition: 800ms; height: calc(100vh * ${works.length + 1}); background: ${works[scrollIndex - 1] ? works[scrollIndex - 1]?.background : scrollIndex === 0 ? works[0].background : works[works.length - 1].background}}
            #work-container > .box {
                border: 1px solid #222; border-radius: 4px; background: #fff;
                box-shadow: 10px 10px 10px rgba(0,0,0,0.1);
                transition: ${scrollIndex > 0 ? 800 : 0}ms;
                display: flex; align-items: center; justify-content: center;
                width: 90vw; height: 80vh; position: fixed; left: 50%; background-position-x: 14vw; background-szie: 100%;
            }
            #work-container > .box > .count {height: calc(80vh - 2px); display: flex; align-items: flex-end;}
            #work-container > .box > .count > div {position: absolute; display: flex; align-items: flex-end; transform: translate(2vw, -1vw)}
            #work-container > .box > .count > div > h2 {
                font-size:7rem;
                font-weight: bold;
            }
            #work-container > .box > .count > div > h3 {
                font-weight: 400;
                font-size: 1.5rem;
                line-height: 6rem;
            }
            #work-container > .box > .content {
                display: flex; flex-direction: column; align-items: center; justify-content: center;
                height: calc(80vh - 2px); flex-basis: 40vw; padding: 0 5vw 0 10vw; 
            }
            #work-container > .box > .content > h1 {
                font-family: "Gowun Batang",serif; width: 100%; font-size: 3rem; margin: 0;
            }
            #work-container > .box > .content > pre {
                font-family: 'Pretendard-Regular';
                margin-top: 50px;
                color: #6c6c6c;
                line-height: 1.3;
                white-space: pre-wrap;
                font-size: 15px;
                line-height: 24px;
            }
            #work-container > .box > .image {flex: 1; height: calc(80vh - 2px);}
            `}</style>
        </>
    )
}
