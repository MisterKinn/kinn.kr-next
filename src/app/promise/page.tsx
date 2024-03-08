"use client";
import React, { useState, useEffect } from "react";
import { handleRoadMap } from "../handleText.js";
import AOS from "aos";
import "../../styles/aos.css";
import "../../styles/roadmap.css";
import Banner from "../../components/home/Banner";
import Footer from "../../components/home/Footer";

function RoadMap() {
    const [imgSrc, setImgSrc] = useState("img/gmsh.png");

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });

        const handleResize = () => {
            if (window.innerWidth < 850) {
                setImgSrc("img/gmsh-mobile.png");
            } else {
                setImgSrc("img/gmsh.png");
            }
            handleRoadMap();
        };

        if (window.performance) {
            if (performance.navigation.type === 1) {
                // Detect Refresh
                handleResize();
            }
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            <header className="header">
                <img src={imgSrc} alt="GMSH RoadMap" className="header-img" />
                <div className="text-container">
                    <h1 className="title" data-aos="fade-up">
                        당신도 무언가를
                        <br />
                        상상해본 적이 있나요?
                    </h1>
                    <h2 className="sub-title" data-aos="fade-up">
                        우리는 상상을 현실로 구현합니다.
                        <br />
                        <strong>RoadMap</strong>은 교내 유일 웹 개발
                        동아리입니다. <br />
                        <strong>RoadMap</strong>과 함께라면 당신의 상상은 현실이
                        됩니다.
                    </h2>
                    <button className="join" data-aos="fade-up">
                        동아리 지원하기
                    </button>
                </div>
            </header>

            <h2 className="introduce" data-aos="fade-up">
                소개
            </h2>
            <p className="intro-text" data-aos="fade-up">
                <strong>RoadMap</strong>은 교내 유일 웹 개발 동아리이며, <br />
                웹과 서버 개발을 배우고 함께 실습하며 <br />웹 개발자로서의
                역량을 쌓아나가는 동아리입니다.
            </p>

            <h2 className="introduce" data-aos="fade-up">
                커리큘럼
            </h2>
            <div data-aos="fade-up">
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
                </div>
                <div className="container">
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
                </div>
                <div className="container">
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
            </div>

            <h2 className="introduce" data-aos="fade-up">
                프로젝트
            </h2>
            <p data-aos="fade-up">
                아직까지 개발된 프로젝트가 없습니다.
                <br />
                동아리에 가입하셔서 첫 프로젝트를 함께 만들어보세요!
            </p>

            <h2 className="introduce" data-aos="fade-up">
                문의
            </h2>
            <div data-aos="fade-up">
                <div className="container">
                    <a
                        href="mailto:RoadMap@kinn.kr"
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
                            <div className="card-footer">roadmap@kinn.kr</div>
                        </div>
                    </a>
                </div>

                <div className="container">
                    <a
                        href="https://www.instagram.com/gmsh_RoadMap"
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
                            <div className="card-footer">gmsh_roadmap</div>
                        </div>
                    </a>
                </div>
            </div>

            <Banner />

            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
}

export default RoadMap;
