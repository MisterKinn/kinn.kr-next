"use client";
import React, { useEffect } from 'react';
import "../../styles/style.css";
import AOS from "aos";
import "../../styles/aos.css";

import Head from "next/head";
import TopBar from "../../components/home/TopBar";
import Home from "../../components/home/Home";
import AboutMe from "../../components/home/AboutMe";
import Portfolio from "../../components/home/Portfolio";
import Experience from "../../components/home/Experience";
import Skills from "../../components/home/Skills";
import Profile from "../../components/home/Profile";
import Banner from "../../components/home/Banner";
import Footer from "../../components/home/Footer";

function Page() {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);
    
    return (
        <div>
            <Head>
                <div />
            </Head>
            <TopBar />
            <Home />
            <AboutMe />
            <Portfolio />
            <Experience />
            <Skills />
            <Profile />
            <Banner />
            <Footer />
        </div>
    );
}

export default Page;
