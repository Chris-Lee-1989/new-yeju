import React, { useState } from 'react'

interface Props {
    hoverClass: string[];
    mouseEvent: any;
}

export default function Mouse({hoverClass, mouseEvent}: Props) {

    // 마우스 위치
    const [x, y] = mouseEvent ? [mouseEvent.clientX, mouseEvent.clientY] : [0, 0];

    const pageY = mouseEvent ? mouseEvent.pageY : 0;

    // 특정 클래스에 호버
    const isHover = (() => {
        if (mouseEvent) {
            for (let hClass of hoverClass) {
                for (let tClass of mouseEvent.target.classList) {
                    if (hClass === tClass) {
                        return true;
                    }
                }
                for (let tClass of mouseEvent.target.parentElement.classList) {
                    if (hClass === tClass) {
                        return true;
                    }
                }
            }
        }
        return false;
    })();

    // 원 색상
    const CircleColor = pageY < 1000 ? 'rgba(0,0,0,0.5)'
    : pageY < 2000 ? 'rgba(255,0,0,0.5)'
    : pageY < 3000 ? 'rgba(0,255,0,0.5)'
    : pageY < 4000 ? 'rgba(0,0,255,0.5)'
    : pageY < 5000 ? 'rgba(255,0,255,0.5)'
    : 'rgba(0,255,255,0.5)'

    return (
        <>
            <div className="mouse">
                <div className="size">

                </div>
            </div>
            <style jsx>{`
            .mouse {
                position: fixed; top: ${y}px; left: ${x}px; border-radius: 100%; background: ${CircleColor}; z-index: 999;
                transform: translate(-50%,-50%); pointer-events: none; 
            }
            .size {
                transition: 300ms;
                width: ${isHover ? 60 : 16}px; height: ${isHover ? 60 : 16}px;
            }
            `}</style>
        </>
    )
}
