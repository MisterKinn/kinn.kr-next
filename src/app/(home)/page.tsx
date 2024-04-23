"use client";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import "../../styles/style.css";
import AOS from "aos";
import "../../styles/aos.css";

import TopBar from "@/components/home/TopBar";
import Home from "@/components/home/Home";
import About from "@/components/home/About";
import Portfolio from "@/components/home/Portfolio";
import Experience from "@/components/home/Experience";
import Skills from "@/components/home/Skills";
import Profile from "@/components/home/Profile";
import Banner from "@/components/home/Banner";
import Footer from "@/components/home/Footer";

import MobileHome from "@/components/home/mobile/Home";
import MobileAbout from "@/components/home/mobile/About";
import MobilePortfolio from "@/components/home/mobile/Portfolio";
import MobileExperience from "@/components/home/mobile/Experience";
import MobileSkills from "@/components/home/mobile/Skills";
import MobileProfile from "@/components/home/mobile/Profile";
import MobileBanner from "@/components/home/mobile/Banner";
import MobileFooter from "@/components/home/mobile/Footer";


function Page() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

    if (isMobile) {
        return (
            <div id="page">
                <MobileHome />
                <MobileAbout />
                <MobilePortfolio />
                <MobileExperience />
                <MobileSkills />
                <MobileProfile />
                <MobileBanner />
                <MobileFooter />
            </div>
        );
    } else {
        return (
            <div id="page">
                <TopBar />
                <Home />
                <About />
                <Portfolio />
                <Experience />
                <Skills />
                <Profile />
                <Banner />
                <Footer />
            </div>
        );
    }
}

export default Page;
