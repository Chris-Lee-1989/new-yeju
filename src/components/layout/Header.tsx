import { ArrowRightOutlined } from '@ant-design/icons';
import { useScroll } from 'ahooks'
import React, { useLayoutEffect, useState } from 'react'

let isScroll = false;
export default function Header({heights}: {heights: number[]}) {

    // 햄버거 매뉴 오픈 여부
    const [isOpen, setOpen] = useState(false);

    const scroll = useScroll();
    const color = (() => {
        if (scroll && typeof window !== 'undefined') {
            let mainBottom = heights[0];
            let aboutBottom = mainBottom + heights[1];
            let workBottom = aboutBottom + heights[2];
            let contactBottom = workBottom + heights[3];
            
            // 1페이지
            // 2페이지
            if (scroll.top < aboutBottom - 48) return '#f5f5f5';
            // 3페이지
            if (aboutBottom - 48 < scroll.top && scroll.top < workBottom - 48) return '#222';
            // 4페이지
            if (workBottom - 48 < scroll.top) return '#f5f5f5';
        }
        return '#f5f5f5'
    })();

    // 스크롤 이벤트
    const move = (e: any) => {
        const scrollTop = window.document.querySelector('html')?.scrollTop;
        if (scrollTop) {
            if (scrollTop >= heights[0]) return false;
        }
        e.preventDefault();
        e.stopPropagation();		
        // down
        if (e.deltaY > 0) {
            if (isScroll) return false;
            isScroll = true;
            window.scroll({top : heights[0] , behavior: 'smooth'});
            setTimeout(() => {
                isScroll = false;
            }, 1000);
        // up
        } else {
            if (isScroll) return false;
            isScroll = true;
            window.scroll({top : 0 , behavior: 'smooth'});
            setTimeout(() => {
                isScroll = false;
            }, 1000);
        }
    }

    useLayoutEffect(() => {
        window.addEventListener("wheel", move, {passive: false});
    }, []);

    const moveScroll = (id: string) => {
        if (typeof window !== 'undefined') {
            const target: any = document.querySelector(`#${id}-container`);
            let offset = id === "work" ? target.offsetTop-100  : target.offsetTop;
            window.scroll({top : offset , behavior: 'smooth'});
        }
    }

    return (
        <>
            <div className="container">
                <div className="menu" id="menu-1" onClick={() => { moveScroll('main') }}>MAIN</div>
                <div className="menu" id="menu-2" onClick={() => { moveScroll('about') }}>ABOUT</div>
                <div className="menu" id="menu-3" onClick={() => { moveScroll('work') }}>WORK</div>
                <div className="menu" id="menu-4" onClick={() => { moveScroll('contact') }}>CONTACT</div>
                
            </div>

            <div className={`ham-menu ${isOpen ? 'open' : 'close'}`} onClick={() => setOpen(!isOpen)}>
                <div />
                <div />
                <div />
            </div>

            <div className={`popup-menu ${isOpen ? 'open' : 'close'}`}>
                <div className="popup-body">
                    <div onClick={() => { setOpen(false); moveScroll('main')}} className="menu">MAIN<span><ArrowRightOutlined /></span></div>
                    <div onClick={() => { setOpen(false); moveScroll('about')}} className="menu">ABOUT<span><ArrowRightOutlined /></span></div>
                    <div onClick={() => { setOpen(false); moveScroll('work')}} className="menu">WORK<span><ArrowRightOutlined /></span></div>
                    <div onClick={() => { setOpen(false); moveScroll('contact')}} className="menu">CONTACT<span><ArrowRightOutlined /></span></div>
                </div>
            </div>
            <div className={`popup-bg ${isOpen ? 'open' : 'close'}`} />
            <style jsx>{`
            .container {position: absolute; top: 0; left: 0; width: 100vw; padding: 48px; display: flex; flex-direction: row; align-items: center; justify-content: flex-end; z-index: 20;}
            .container > .menu {transition: 200ms;  color: ${color}; cursor: pointer; font-family: 'Gowun Batang', serif; margin-right: 96px; font-weight: 500;}
            .container > .menu:nth-of-type(4) {margin-right: 96px;}

            .ham-menu {position: fixed; top: 52px; right: 52px; transition: 500ms; display: flex; flex-direction: column; width: 35px; gap: 5px; justify-content: center; align-items: flex-end; cursor: pointer; z-index: 999;}
            .ham-menu > div {transition: 200ms; background: ${color}; height: 3px; width: 32px; opacity: 1;}
            .ham-menu > div:last-of-type {background: ${color}; width: 22px;}

            .ham-menu.open div {background: #222;}
            .ham-menu.open div:nth-of-type(1) {transition: 500ms; background: #222; transform: rotate(45deg);}
            .ham-menu.open div:nth-of-type(2) {transition: 500ms; background: #222; transform: rotate(-45deg) translate(6px, -6px);}
            .ham-menu.open div:nth-of-type(3) {opacity: 0; background: #222; }
            
            .popup-menu{ position: fixed;}
            .popup-menu.open{transition: 800ms; top: 0; right: 0; width: 100vw; height: 100vh; opacity: 1; z-index: 500; overflow: hidden;}
            .popup-menu.close{transition: 100ms; top: 0px; right: 0px; width: 100vw; height: 100vh; opacity: 0; display: none; overflow: hidden;}
            .popup-menu > .popup-body {display: flex; width: 100vw; height: 100vh; align-items: center; justify-content: center; flex-direction: column; gap: 48px;}
            .popup-menu > .popup-body > .menu {font-size: 40px; width: 300px; display: flex; align-items: center; justify-content: center;font-family: 'Gowun Batang', serif; }
            .popup-menu > .popup-body > .menu span {transition: 200ms; flex: 1; text-align: right; opacity: 0;}
            .popup-menu > .popup-body > .menu:hover span {flex: 1; text-align: right; opacity: 1;}
            .popup-bg.open{transition: 1000ms; position: fixed; top: -100vw;  right: -100vw; width: 300vw; height: 300vw; z-index: 499; background: white; border-radius: 100%;}
            .popup-bg.close{transition: 300ms; position: fixed; top: 60px; right: 60px; width: 0vw; height: 0vw; z-index: 499; background: white; border-radius: 100%;}
            `}</style>
        </>
    )
}
