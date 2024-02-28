"use client";
import "../../styles/kjs.css";
import Footer from "../../components/home/Footer";

function Kjs() {
    return (
        <div>
            <div id="home">
                <img src="img/kjs-title.jpeg" className="header-img" />
                <div className="header-container">
                    <h1 className="name">JinSeong Kim</h1>
                    <h2 className="introduce">Project Manager</h2>
                    <img loading="lazy" src="img/arrow.png" className="arrow" />
                </div>
            </div>

            <div id="AboutMe">
                <h1 className="AboutMe">About Me</h1>
                <p className="about-me">
                    저는 <strong>김진성</strong>이고, 학생{" "}
                    <strong>Prouct Manager</strong>입니다.
                    <br />
                    저는 미래 세상의 패러다임에 혁신을 주는 프로덕트를 만들
                    것이고,
                    <br />제 프로덕트를 발전시키기 위해 많은 노력을 기울이고
                    있습니다.
                </p>
            </div>

            <div className="blank"></div>

            <div id="Portfolio">
                <div>
                    <h2 className="list">Portfolio</h2>
                    <div className="click-guide">
                        *카드 클릭 시 관련 파일이 다운로드됩니다.
                    </div>
                </div>

                <div className="container">
                    <a
                        href="kjs/1.pdf"
                        download="김진성 2023 디미고 실적설명서(자기추천전형)"
                        target="_blank"
                        title="김진성 2023 디미고 실적설명서(자기추천전형)"
                        className="spec"
                    >
                        <div className="card-container">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/dimi.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong>휠 데이지 방지 센서</strong>
                                </span>
                            </div>
                            <div className="card-text">
                                <strong>휠 데미지 방지 센서</strong>를 구상하며
                                느낀 점을
                                <br />
                                한국디지털미디어고등학교 진로적성특별전형
                                <br />
                                실적설명서에 작성한 자료입니다.
                            </div>
                        </div>
                    </a>

                    <a
                        href="kjs/2.zip"
                        download="김진성 KSCY 똑똑한 농장"
                        target="_blank"
                        title="김진성 KSCY 똑똑한 농장"
                        className="spec"
                    >
                        <div className="card-container">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/kscy.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong>똑똑한 농장</strong>
                                </span>
                            </div>
                            <div className="card-text">
                                KSCY 데모데이 컨퍼런스에서 발표한,
                                <br />
                                팀 프로젝트로 진행한 스마트팜인
                                <br />
                                <strong>똑똑한 농장</strong>을 만들며 작성한
                                <br />
                                비즈니스 툴킷과 발표 자료입니다.
                            </div>
                        </div>
                    </a>

                    <a
                        href="kjs/3.zip"
                        download="김진성 한국 벤처투자 활성화 및 다양화 주제 탐구"
                        target="_blank"
                        title="김진성 한국 벤처투자 활성화 및 다양화 주제 탐구"
                        className="spec"
                    >
                        <div className="card-container">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/investment.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong>벤처투자 활성화</strong>
                                </span>
                            </div>
                            <div className="card-text">
                                교내 탐구 프로젝트로
                                <strong>벤처투자 활성화</strong>를<br />
                                주제로 탐구하고 발표한 자료입니다.
                            </div>
                        </div>
                    </a>

                    <a
                        href="kjs/4.pdf"
                        download="김진성 ML을 이용한 미술품 발표 자료"
                        target="_blank"
                        title="김진성 ML을 이용한 미술품 발표 자료"
                        className="spec"
                    >
                        <div className="card-container">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/ai-paint.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong>ML 미술품 탐구</strong>
                                </span>
                            </div>
                            <div className="card-text">
                                Google I/O Extended에서 영감을 얻어
                                <br />
                                추가로 탐구한{" "}
                                <strong>ML을 활용한 미술품 탐구</strong>
                                <br />
                                발표 자료입니다.
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div id="Profile">
                <h2 id="Profile" className="list">
                    Profile
                </h2>
                <div className="container">
                    <a
                        href="mailto:jinsung5712@naver.com"
                        target="_blank"
                        title="Mail"
                        className="spec"
                    >
                        <div className="card-container spec3">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/mail.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong>Mail</strong>
                                </span>
                                <div className="card-footer">
                                    <strong>
                                        <br />
                                        jinsung5712@naver.com
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a
                        href="tel:01030165991"
                        target="_blank"
                        title="Phone"
                        className="spec"
                    >
                        <div className="card-container spec3">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/tel.png"
                                    className="card-img discord"
                                />
                                <span className="card-title">
                                    <strong>Phone</strong>
                                </span>
                                <div className="card-footer">
                                    <strong>
                                        <br />
                                        +82 10-3016-5991
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a
                        href="https://www.instagram.com/jinsungkim_y.k.b/"
                        target="_blank"
                        title="Instagram"
                        className="spec"
                    >
                        <div className="card-container spec3">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/instagram.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong>Instagram</strong>
                                </span>
                                <div className="card-footer">
                                    <strong>
                                        <br />
                                        jinsungkim_y.k.b
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
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

export default Kjs;
