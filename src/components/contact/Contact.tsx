import { Typography } from 'antd'
import React from 'react'

export default function Contact() {
    return (
        <>
            <div id="contact-container" className="container">
                <div style={{border: '2px solid #999', padding: '0.3vw'}}>
                <div className="content">
                    <div className="content-container">
                        <h1>Contact</h1>
                        <p>Name</p>
                        <input />
                        <p>Email</p>
                        <input />
                        <p>Message</p>
                        <textarea>

                        </textarea>

                        <div className='button'>SEND</div>
                    </div>
                </div>
                </div>
            </div>
            <style jsx>{`
            .container {height: 100vh; background: #222; display: flex; align-items: center; justify-content: center;}
            .content > .content-container {width: 50vw; min-height: 10vh; border: 1px solid #999; padding: 3vw 5vw;}
            .content > .content-container > h1 {font-size: 5rem; color: #fff; font-family: "Gowun Batang",serif; margin-bottom: 5vh;}
            .content > .content-container > p {font-size: 1rem; color: #ccc; font-family: "Gowun Batang",serif; margin-bottom: 0.5rem;}
            .content > .content-container > input {
                margin-bottom: 1rem; font-size: 1.5rem; color: #ccc; font-family: "Gowun Batang",serif; border: 0; outline: 0; padding: 1rem; width: 100%;
                border-radius: 0px;
                border-bottom: 2px solid #666;
                background: rgba(0,0,0,0);
            }
            .content > .content-container > input:focus { transition: 300ms; border-color: #ccc; background: rgba(255,255,255, 0.05);}

            .content > .content-container  > textarea {
                margin-bottom: 1rem; font-size: 1.5rem; color: #ccc; font-family: "Gowun Batang",serif; border: 0; outline: 0; padding: 1rem; width: 100%;
                resize: none; height: 20vh; border-radius: 0px;
                background: rgba( 255, 255, 255, 0.05);
                background: rgba(0,0,0,0);
            }
            .content > .content-container > textarea:focus { transition: 300ms; background: rgba(255,255,255, 0.05);}

            .content > .content-container > .button {
                transition: 300ms;
                display: flex; align-items: center; justify-content: center;
                width: 100%; height: 6vh; border: 0; font-family: "Gowun Batang",serif; border-radius: 4px;
                font-size; 36px; background: #666; font-weight: bold;
                color: white; cursor: pointer;
                border-bottom: 2px solid #666;;
            }
            .content > .content-container > .button:active { transition: 300ms; background: #444}
            `}</style>
        </>
    )
}
