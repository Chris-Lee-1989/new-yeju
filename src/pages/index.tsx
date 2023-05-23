import React, { useLayoutEffect, useMemo, useRef, useState } from 'react'
import Headers from '@/components/layout/Header';
import Main from '@/components/main/Main'
import About from '@/components/about/About'
import Work from '@/components/work/Work';
import Contact from '@/components/contact/Contact';
import Mouse from '@/components/layout/Mouse';

export default function Page() {

    // 마우스 포인터 위치
    const [mouseEvent, setMouseEvent] = useState(undefined);

    const handleMouseMove=(e: any) => {
        setMouseEvent(e);
    }

    // 각 컴포넌트의 높이 구하기
    const heights = useMemo(() => {
        let height1 = 0, height2 = 0, height3 = 0, height4 = 0;
        if (typeof window !== 'undefined') {
            const target1 = window.document.querySelector('#main-container');
            const target2 = window.document.querySelector('#about-container');
            const target3 = window.document.querySelector('#work-container');
            const target4 = window.document.querySelector('#contact-container');
            height1 = target1 ? target1.clientHeight : 0;
            height2 = target2 ? target2.clientHeight : 0;
            height3 = target3 ? target3.clientHeight : 0;
            height4 = target4 ? target4.clientHeight : 0;
        }
        return [height1, height2, height3, height4];
    }, [typeof window]);

    return (
        <>
            <div className="page" onMouseMove={(e)=>handleMouseMove(e)}>
                <Mouse
                    hoverClass={['menu', 'ham-menu']}
                    mouseEvent={mouseEvent}
                />
                <Headers heights={heights} />
                <Main />
                <About />
                <Work heights={heights} />
                <Contact />
            </div>
            <style jsx>{`
            .page {
                cursor: url(https://images.unsplash.com/photo-1575572540637-4d117eea104f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ);
            }
            `}</style>
        </>
    )
}
