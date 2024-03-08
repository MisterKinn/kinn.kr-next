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

                    <a
                        href="kjs/5.pdf"
                        download="김진성 IMPACTHON 노근"
                        target="_blank"
                        title="김진성 IMPACTHON 노근"
                        className="spec"
                    >
                        <div className="card-container">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/no-gun.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong>실버세대를 위한 커뮤니티</strong>
                                </span>
                            </div>
                            <div className="card-text">
                                외출을 잘 안하시는 노인분들, 독거노인 분들의
                                문제를 해결하기 위해 실버타운이라는 방안이
                                있지만 이용하시기엔 월 100만원이 넘는 금액을
                                지불해야 했다 또한 노인들 마다도 외출의 양극화가
                                심하기에 외출빈도가 낮은 노인들이 쉽게 접근할 수
                                있는, 심리적인 허들을 없앨 수 있도록 서비스를
                                만들었다. 초반엔 오프라인으로 탑골공원, 지하철역
                                같은 노인들이 많은 곳에 가서 외출빈도가 높은
                                노인들을 상대로 하여 그들의 1차 바이럴로
                                외출빈도가 낮은 노인분들을 끌어들일 수 있을
                                것이다. 노인의 자녀분들의 도움을 받아 하는
                                방법도 있을 것이다. BM은 핀광고나, 데이터 판매로
                                잡았는데 피드백 후에 보험관련 상품을 연결하는
                                플랫폼 역할을 해서 수수료를 받는 BM도
                                좋아보였다. 처음 실버시장을 공략해서 프로덕트를
                                만들었는데 나름 성공적이었던거 같고 새로운
                                시야를 얻은 것 같다.
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
