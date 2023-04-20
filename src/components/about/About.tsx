import React, { useEffect, useRef } from 'react'
// import AOS from "aos";
// import "aos/dist/aos.css";
import { useScroll, useMouse } from 'ahooks';

const About = React.forwardRef((props, ref: any) => {

    const mouse = useMouse();
    const scroll = useScroll();
    const position = scroll ? scroll.top : 0;

    return (
        <>
            <div id="about-container" className="wrap" ref={ref}>
                
                <div className="about_title">

                    <span>what is essential is invisible to the eye.</span>
                    {/* <p>Spread <br />
                        My power
                    </p> */}
                    {/* 시각적으로 아름답고 화려한 디자인만을 만드는 것이 전부가 아닌,
                    최적의 사용자 경험을 제공하는 것을 목표로 하는
                    웹 퍼블리셔가 되겠습니다. */}
            
                    
                    새로운 도전과 성장하는 즐거움,<br />
                    디자인 너머 그 이상을 생각합니다.

                </div>
                <div className="imgBox">
                    <div className="imgArea pic01"><img src="/images/pic01.jpg" /></div>
                    <div className="imgArea pic02"><img src="/images/pic02.jpg" /></div>
                    <div className="imgArea pic03"><img src="/images/pic03.jpg" /></div>
                    <div className="imgArea pic04"><img src="/images/pic04.jpg" /></div>
                    <div className="imgArea pic05"><img src="/images/pic05.jpg" /></div>
                    <div className="imgArea pic06"><img src="/images/pic06.jpg" /></div>
                </div>

                {/* <div id="mouse-cursor"></div> */}
            </div>

            <style jsx>{`

            .wrap { 
                height: 270vh; 
                // background: url('../images/fixed_background.jpg')no-repeat center/cover; 
                background: #111;
                background: url('../images/stars_bg04.jpg')no-repeat center/cover; 
                background-attachment: fixed; 
                padding: 48px; 
                position: relative;
                overflow: hidden;
            }
            .about_title { 
                color: rgba(255, 255, 255, 0.8);
                width: 100%;
                font-size: 4.5vmin; 
                text-align: right;
                bottom: 7%;
                right: 96px;
                // left: 0;
                // text-align: center; 
                // transform: translateY(-50%); 
                opacity: ${position > 2400 ? 1 : 0};
                // transform: translateY(calc(50% + ${((position - 310) / 30)}%)); 
                letter-spacing: -0.8px; 
                position: absolute; 
                transition: 2s;
                // font-family: "Nanum Myeongjo",serif;
                font-family: "Pretendard-Regular";
                line-height: 1.5;
            }
            .about_title span{ 
                font-size: 3.5vmin;
                line-height: 1.1;
                font-family: "Nanum Myeongjo",serif;
                display: block;
                margin-bottom: 8vmin;
                color: rgba(255, 255, 255, 0.8);

            }
            .about_title p{ 
                font-size: 12vmin;
                line-height: 1.1;
                font-family: "Nanum Myeongjo",serif;
            }
            .imgBox{ overflow: hidden; height: 100%; margin: 0 auto; text-align: center; position: relative;}
            .imgArea{ position: absolute; transition: 1s; }
            .imgArea img{ width: 100%;}
            .pic01 {
                left: 50%;
                transform: translate(-50%, ${((position - 300) / 30)}%); 
                opacity: ${position > 300 ? 1 : 0};
                // height: 460px;
                // width: 325px;   
                width: 23vw;
            }
            .pic02 {
                left: 7vw;
                width: 26vw;
                top: 10%;
                transform: translateY(${((position - 310) / 30)}%); 
                opacity: ${position > 500 ? 1 : 0}
            }
            .pic03 {
                right: 5vw;
                width: 29vw;       
                top: 11%;   
                transform: translateY(${((position - 820) / 30)}%); 
                opacity: ${position > 800 ? 1 : 0}
            }
            .pic04 {
                left: 2vw;
                width: 27vw;
                top: 48%;
                z-index: 1;
                transform: translateY(${((position - 630) / 30)}%); 
                opacity: ${position > 1300 ? 1 : 0}
            }
            .pic05 {
                right: 1.5vw;
                width: 26vw;
                top: 40%;
                transform: translateY(${((position - 400) / 30)}%); 
                opacity: ${position > 1400 ? 1 : 0}
            }
            .pic06 {
                left: 37%;
                width: 30vw;
                top: 30%;
                transform: translateY(${((position - 200) / 30)}%); 
                opacity: ${position > 1100 ? 1 : 0}
            }
            .pic07 {
                right: 27vw;
                width: 26vw;
                top: 100%;
                transform: translateY(${((position - 70) / 30)}%); 
                opacity: ${position > 2000 ? 1 : 0}
            }

            #mouse-cursor {
                pointer-events: none;
                position: fixed; 
                top: ${mouse.clientY}px; 
                left: ${mouse.clientX}px; 
                width: 23px; 
                height: 23px; 
                border-radius: 50%; 
                // background: rgba(255, 255, 255, .4);   
                background: #fff;
                transform: translate(-50%, -50%);
                transition: all .1s ease-out;
                mix-blend-mode: difference;
                backface-visibility: hidden;
                z-index: 999;
            }

            `}</style>
        </>
    )
})

export default About;
