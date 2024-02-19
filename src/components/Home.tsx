"use client";
import { useState, useEffect, useRef } from "react";
import "../styles/style.css";

function Home() {
    const [imageSrc, setImageSrc] = useState("img/kinn-banner.png");

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 1000) {
                setImageSrc("img/kinn-banner-mobile.jpg");
            } else {
                setImageSrc("img/kinn-banner.png");
            }
        };
        handleResize();

        if (window.performance) {
            if (performance.navigation.type === 1) {
                // Detect Refresh
                handleResize();
            }
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const arrowRef = useRef<HTMLImageElement>(null);

    const scrollDown = () => {
        window.scrollTo({ top: 1000, behavior: "smooth" });
    };

    useEffect(() => {
        if (arrowRef.current) {
            arrowRef.current.addEventListener("click", scrollDown);
        }

        return () => {
            if (arrowRef.current) {
                arrowRef.current.removeEventListener("click", scrollDown);
            }
        };
    }, [arrowRef, scrollDown]);

    return (
        <div id="home" className="body">
            <img src={imageSrc} className="header-img" />
            <div className="header-container">
                <h2 className="hello">Hello, I'm</h2>
                <h1 className="kinn">Kinn</h1>
                <div>
                    <div className="introduce">
                        Nice to meet you!
                        <img
                            loading="lazy"
                            draggable="false"
                            src="img/wave.png"
                            className="wave"
                        />
                    </div>
                </div>
                <img
                    loading="lazy"
                    src="img/arrow.png"
                    className="arrow"
                    ref={arrowRef}
                />
            </div>
        </div>
    );
}

export default Home;
