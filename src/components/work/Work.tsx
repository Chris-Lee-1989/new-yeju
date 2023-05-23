import React, { useLayoutEffect, useMemo, useState } from 'react'
import WorkPage from './WorkPage'
import { useScroll } from 'ahooks';

export interface WorkerType {
    imageUrl: string;
    title: string;
    description: string;
    background: string;
}

let isScroll = false;
let bottomOffset = 0;
export default function Work({heights}: {heights: number[]}) {

    const [index, setIndex] = useState<number>(0);

    const [background, setBackground] = useState<string>('white');

    const workers = [
        {
            imageUrl: '/images/apple.jpg',
            background: 'red',
            title: 'Apple',
            description: `모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다.\n헌법재판소에서 법률의 위헌결정, 탄핵의 결정, 정당해산의 결정 또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의 찬성이 있어야 한다.\n국정감사 및 조사에 관한 절차 기타 필요한 사항은 법률로 정한다.`,
        }, 
        {
            imageUrl: '/images/msync.jpg',
            background: 'orange',
            title: 'm-sync',
            description: `모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다.\n헌법재판소에서 법률의 위헌결정, 탄핵의 결정, 정당해산의 결정 또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의 찬성이 있어야 한다.\n국정감사 및 조사에 관한 절차 기타 필요한 사항은 법률로 정한다.`,
        },
        {
            imageUrl: '/images/apple.jpg',
            background: 'yellow',
            title: 'Apple',
            description: `모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다.\n헌법재판소에서 법률의 위헌결정, 탄핵의 결정, 정당해산의 결정 또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의 찬성이 있어야 한다.\n국정감사 및 조사에 관한 절차 기타 필요한 사항은 법률로 정한다.`,
        }, 
        {
            imageUrl: '/images/msync.jpg',
            background: 'green',
            title: 'm-sync',
            description: `모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다.\n헌법재판소에서 법률의 위헌결정, 탄핵의 결정, 정당해산의 결정 또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의 찬성이 있어야 한다.\n국정감사 및 조사에 관한 절차 기타 필요한 사항은 법률로 정한다.`,
        },
        {
            imageUrl: '/images/apple.jpg',
            background: 'blue',
            title: 'Apple',
            description: `모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다.\n헌법재판소에서 법률의 위헌결정, 탄핵의 결정, 정당해산의 결정 또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의 찬성이 있어야 한다.\n국정감사 및 조사에 관한 절차 기타 필요한 사항은 법률로 정한다.`,
        }, 
        {
            imageUrl: '/images/msync.jpg',
            background: 'purple',
            title: 'm-sync',
            description: `모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다.\n헌법재판소에서 법률의 위헌결정, 탄핵의 결정, 정당해산의 결정 또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의 찬성이 있어야 한다.\n국정감사 및 조사에 관한 절차 기타 필요한 사항은 법률로 정한다.`,
        },
    ];

    const offsetTops = useMemo(() => {
        if (typeof window !== 'undefined') {
            let _offsetTops = workers.map((worker, idx: number) => {
                const target: any = window.document.querySelector(`#work-${idx}`);
                const offsetTop = target ? target.offsetTop : 0;
                if (idx === workers.length-1) {
                    bottomOffset = target.offsetTop + (window.innerHeight * 2);
                }
                return offsetTop;
            });
            return _offsetTops;
        }
        return [];
    }, [typeof window]);

    const [isView, setView] = useState(false); 

    const move = (e: any) => {
        const scrollTop = window.document.querySelector('html')?.scrollTop;
        if (scrollTop) {

            if (scrollTop < (offsetTops[0]-window.innerHeight)) {
                if(scrollTop < (offsetTops[0]-300)) setView(false);
            }
            else if (scrollTop > (offsetTops[0]-(window.innerHeight*1.5))) {

                if (scrollTop > (offsetTops[workers.length - 1])) {
                    setIndex(workers.length + 1);
                    setView(false);
                } else {
                    setView(true);
                }

                e.preventDefault();
                e.stopPropagation();
                const _indexTarget: any = document.querySelector('#index');
                const _index = Number(_indexTarget.value);

                if (isScroll) return false;

                // down
                if (e.deltaY > 0) {
                    isScroll = true;
                    window.scroll({top : _index >= workers.length ? bottomOffset : offsetTops[_index]-140, behavior: 'smooth'});
                    setTimeout(() => {
                        isScroll = false;
                    }, 1500);
                // up
                } else {
                    isScroll = true;
                    window.scroll({top : _index > 1 ? offsetTops[_index - 2]-140 : offsetTops[0] - (window.innerHeight*1.5), behavior: 'smooth'});
                    setTimeout(() => {
                        isScroll = false;
                    }, 1500);
                }
            } 

        }
    }
    useLayoutEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener("wheel", move, {passive: false});
            window.addEventListener("scroll", (e) => {
                const scrollTop = window.document.querySelector('html')?.scrollTop;
                if (scrollTop) {
                    if (scrollTop < (offsetTops[0]-window.innerHeight)) {
                        if(scrollTop < (offsetTops[0]-300)) setView(false);
                    }
                    else if (scrollTop > (offsetTops[0]-(window.innerHeight*1.5))) {
                        if (scrollTop > (offsetTops[workers.length - 1])) {
                            setIndex(workers.length + 1);
                            setView(false);
                        } else {
                            setView(true);
                        }
                    }
                }
            }, {passive: false});
        }
    }, [move]);

    return (
        <>
            <input id="index" type="hidden" value={index} />
            <div id="work-container" className="container">
                {workers.map((worker: WorkerType, idx: number) => {
                    return (
                        <WorkPage 
                            key={idx}
                            index={idx}
                            dataLength={workers.length}
                            data={worker}
                            onChange={(index: number, color: string) => {
                                setIndex(index);
                                setBackground(color);
                            }}
                        />
                    )
                })}
            </div>
            <div className="index-box">
                <span>
                    <span>{String(index).padStart(2, '0')}</span>
                    <span>/</span>
                    <span>{String(workers.length).padStart(2, '0')}</span>
                </span>
            </div>

            <style jsx>{`
            .container {padding: 48px 48px 128px 48px; background: white; display: flex; flex-direction: column; gap: 48px; transition: 300ms; background: ${background};}
            .index-box {transition: 300ms; position: fixed; bottom: 120px; left: 70px; opacity: ${isView ? 1 : 0};}
            .index-box > span { font-size: 1.1rem; font-family: 'SBAggroM';}
            .index-box > span > span:nth-of-type(1) {font-size: 150px;}
            .index-box > span > span:nth-of-type(2) {margin: 0px 10px;}
            .index-box > span > span:nth-of-type(3) {}
            `}</style>
        </>
    )
}
