"use client";
import React, { useState, useEffect } from "react";
import "../../styles/promise.css";
import Footer from "../../components/Footer";

function Promise() {
    const [imgSrc, setImgSrc] = useState("img/gmsh.png");
    const [title, setTitle] = useState(
        "당신도 무언가를\n상상해본 적이 있나요?"
    );

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 850) {
                setImgSrc("img/gmsh-mobile.png");
            } else {
                setImgSrc("img/gmsh.png");
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            <header className="header">
                <img src={imgSrc} alt="GMSH Promise" className="header-img" />
                <div className="text-container">
                    <h1 className="title">{title}</h1>
                    <h2 className="sub-title">
                        우리는 상상을 현실로 구현합니다.
                        <br />
                        <strong>Promise</strong>는 교내 유일 웹 개발
                        동아리입니다. <br />
                        <strong>Promise</strong>와 함께라면 당신의 상상은 현실이
                        됩니다.
                    </h2>
                    <button className="join">동아리 지원하기</button>
                </div>
            </header>

            <h2 className="introduce">소개</h2>
            <p className="">
                <strong>Promise</strong>는 교내 유일 웹 개발 동아리이며, <br />
                웹과 서버 개발을 배우고 함께 실습하며 <br />웹 개발자로서의
                역량을 쌓아나가는 동아리입니다.
            </p>

            <h2 className="introduce">커리큘럼</h2>
            <div className="container">
                <div className="card-container">
                    <div>
                        <img
                            src="img/html.png"
                            alt="HTML"
                            className="card-img"
                        />
                        <span className="card-title">
                            <strong>웹 개발 기초</strong>
                        </span>
                    </div>
                    <div className="card-text">
                        웹의 작동 방식과 웹을 이루는 언어인
                        <br />
                        HTML, CSS 등을 학습합니다.
                    </div>
                </div>

                <div className="card-container">
                    <div>
                        <img
                            src="img/js.png"
                            alt="JavaScript"
                            className="card-img"
                        />
                        <span className="card-title">
                            <strong>프론트엔드 기초</strong>
                        </span>
                    </div>
                    <div className="card-text">
                        프론트엔드 웹 개발의 기반인
                        <br />
                        JavaScript를 통해 동적 웹을 만듭니다.
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="card-container">
                    <div>
                        <img
                            src="img/React.png"
                            alt="React"
                            className="card-img"
                        />
                        <span className="card-title">
                            <strong>프론트엔드 심화</strong>
                        </span>
                    </div>
                    <div className="card-text">
                        ReactJS를 통해 더욱
                        <br />
                        효율적으로 웹을 개발합니다.
                    </div>
                </div>

                <div className="card-container">
                    <div>
                        <img
                            src="img/ts.png"
                            alt="TypeScript"
                            className="card-img"
                        />
                        <span className="card-title">
                            <strong>서버 개발</strong>
                        </span>
                    </div>
                    <div className="card-text">
                        TypeScript를 통한 백엔드 개발을 배워
                        <br />웹 서버를 구현합니다.
                    </div>
                </div>
            </div>

            <h2 className="introduce">프로젝트</h2>
            <p className="">
                아직까지 개발된 프로젝트가 없습니다.
                <br />
                동아리에 가입하셔서 첫 프로젝트를 함께 만들어보세요!
            </p>

            <h2 className="introduce">문의</h2>
            <div className="container">
                <a
                    href="mailto:promise@kinn.kr"
                    target="_blank"
                    title="Mail"
                    className="no-deco"
                >
                    <div className="card-container profile">
                        <div>
                            <img
                                src="img/mail.png"
                                alt="Mail"
                                className="card-img"
                            />
                            <span className="card-title">
                                <strong>Mail</strong>
                            </span>
                        </div>
                        <div className="card-footer">promise@kinn.kr</div>
                    </div>
                </a>

                <a
                    href="https://www.instagram.com/gmsh_promise"
                    target="_blank"
                    title="Instagram"
                    className="no-deco"
                >
                    <div className="card-container profile">
                        <div>
                            <img
                                src="img/instagram.png"
                                alt="Instagram"
                                className="card-img"
                            />
                            <span className="card-title">
                                <strong>Instagram</strong>
                            </span>
                        </div>
                        <div className="card-footer">gmsh_promise</div>
                    </div>
                </a>
            </div>

            <a href="https://kinn.kr/" target="_blank" title="Kinn's Lounge">
                <img
                    src="img/kinn-banner.png"
                    alt="Kinn's Lounge"
                    className="banner margin10"
                />
            </a>

            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
}

export default Promise;
