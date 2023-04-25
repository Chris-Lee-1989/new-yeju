import React, { useEffect, useState } from 'react'

export default function test() {

    const [status, setStatus] = useState([true, true, true, true, true]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('wheel', () => {
                const target: any = document.querySelector('html');
                const scrollTop = target.scrollTop;
                if (scrollTop < 500) {
                    setStatus([true, true, true, true, true]);
                } else if (scrollTop > 500 && scrollTop < 1000) {
                    setStatus([true, true, true, true, false]);
                } else if (scrollTop > 1000) {
                    setStatus([true, true, true, false, false]);
                } else if (scrollTop > 1500) {
                    setStatus([true, true, false, false, false]);
                } else if (scrollTop > 2000) {
                    setStatus([true, false, false, false, false]);
                } else if (scrollTop > 2500) {
                    setStatus([false, false, false, false, false]);
                } 
            })
        }
    }, [])

    const sections = [
        {

        },
        {
            
        },
        {
            
        },
        {
            
        },
        {
            
        },
    ]

    return (
        <>
            <div className="page">
                {
                    sections.map((section, idx) => {
                        return <Section 
                            isShow={status[idx]}
                            index={idx} 
                        />
                    })
                }
            </div>
            <style jsx>{`
            .page {min-height: 2000vh; background: green;}
            `}</style>
        </>
    )
}


const Section = ({ index, isShow }: any) => {
    console.log(index, isShow);
    const backgrounds = ['red', 'blue', 'orange', 'purple', 'black', 'cyan', 'pink'];
    // console.log(index, backgrounds[index]);
    return (
        <>
            <div className={`section ${isShow ? 'open' : 'close'}`}>
                <div>{index}</div>
            </div>
            <style jsx>{`
            .section {
                transition: 500ms;
                position: fixed; top: 50%; left: 50%; transform: translate(-${50 + (index)}%,-${50 - (index * 5)}%); width: 1000px; height: 300px; background: ${backgrounds[index]};
            }
            .section.close {
                transition: 500ms;
                top: 120%; transform: translate(-${50 + (index)}%,-${50 - (index * 5)}%); 
            }
            `}</style>
        </>
    )
}