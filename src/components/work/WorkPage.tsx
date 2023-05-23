import React, { useEffect } from 'react'
import {WorkerType} from './Work';
import { useInViewport, useScroll } from 'ahooks';

interface Props {
    index: number;
    dataLength: number;
    data: WorkerType;
    onChange: (index: number, color: string) => void;
}
export default function WorkPage({index, dataLength, data, onChange}: Props) {

    // 배경 설정
    const backgroundString = index === 0 ? `url('${data.imageUrl}') no-repeat 18% 100%` 
    : index === 1 ? `#000 url("${data.imageUrl}")no-repeat center bottom/135%` 
    : index === 2 ? `url('${data.imageUrl}') no-repeat 18% 100%` 
    : index === 3 ? `#000 url("${data.imageUrl}")no-repeat center bottom/135%` 
    : index === 4 ? `url('${data.imageUrl}') no-repeat 18% 100%` 
    : index === 5 ? `#000 url("${data.imageUrl}")no-repeat center bottom/135%` 
    :`url('${data.imageUrl}') no-repeat 18% 100%`;

    const [inViewport, ratio] = useInViewport(() => document.getElementById(`work-${index}`), {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        root: () => document.getElementById('parent'),
    });
    
    useEffect(() => {
        if (Number(ratio) >= 0.75) {
            onChange(index + 1, data.background);
        }
    }, [ratio, index]);

    return (
        <>
            <div className="container" id={`work-${index}`}>
                <div className="info-box">
                    <h1>{data.title}</h1>
                    <pre>{data.description}</pre>
                    
                </div>
                <div className="image-box">

                </div>
            </div>
            <style jsx>{`
            .container {height: 700px; border: 1px solid #222; display: flex;}
            .container > .info-box {flex-basis: 45%; padding: 48px 48px 48px 180px; display: flex; flex-direction: column; justify-content: center;}
            .container > .info-box h1 {
                font-family: "Gowun Batang",serif;
                width: 100%;
                font-size: 3rem;
                margin: 0;
            }
            .container > .info-box pre {
                font-family: 'Pretendard-Regular';
                margin-top: 50px;
                color: #6c6c6c;
                line-height: 1.3;
                white-space: pre-wrap;
                font-size: 15px;
                line-height: 24px;
            }
            .container > .image-box {flex: 1; background: ${backgroundString}; padding: 48px;}
            
            
            `}</style>
        </>
    )
}
