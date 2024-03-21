"use client";
import { useEffect, useRef } from "react";
import {
    handleAboutMe,
    handlePortfolio,
    handleExperience,
} from "@/app/handleText";
import "../../styles/style.css";
import styled from "styled-components";

import TopBar from "@/components/home/TopBar";
import Home from "@/components/home/Home";
import About from "@/components/home/About";
import Portfolio from "@/components/home/Portfolio";
import Experience from "@/components/home/Experience";
import Skills from "@/components/home/Skills";
import Profile from "@/components/home/Profile";
import Banner from "@/components/home/Banner";
import Footer from "@/components/home/Footer";

const MobilePage = styled.div`
    @media only screen and (max-width: 800px) {
        .topbar {
            display: none;
        }

        .hello {
            font-size: 1.6em;
        }

        .kinn {
            font-size: 6em;
        }

        .introduce {
            font-size: 1.8em;
        }

        .wave {
            margin-top: -1em;
        }

        .aboutme-text {
            font-size: 20px;
        }

        .list {
            font-size: 2.7em;
            margin-left: 0.75em;
            margin-bottom: 2em;
        }

        .spec {
            margin-top: 1em;
            margin-bottom: 1em;
        }

        .card-container {
            height: 5em;
            width: 8em;
            margin-top: -1.5em;
        }

        .card-container2 {
            margin: -0.7em;
        }

        .card-title {
            font-size: 21px;
        }

        .card-text {
            font-size: 0.45em;
        }

        .card-footer {
            font-size: 14px;
        }
    }
`;

function Page() {
    useEffect(() => {
        const handleResize = () => {
            handleAboutMe();
            handlePortfolio();
            handleExperience();
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
        <div>
            <TopBar />

            <MobilePage>
                <Home />
                <About />
                <Portfolio />
                <Experience />
                <Skills />
                <Profile />
            </MobilePage>

            <Banner />
            <Footer />
        </div>
    );
}

export default Page;
