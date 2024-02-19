"use client";
import "../../styles/style.css";

import Head from "next/head";
import TopBar from "../../components/TopBar";
import Home from "../../components/Home";
import AboutMe from "../../components/AboutMe";
import Portfolio from "../../components/Portfolio";
import Skills from "../../components/Skills";
import Profile from "../../components/Profile";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";

function Page() {
    return (
        <div>
            <Head>
                <div></div>
            </Head>
            <TopBar />
            <Home />
            <AboutMe />
            <Portfolio />
            <Skills />
            <Profile />
            <Banner />
            <Footer />
        </div>
    );
}

export default Page;
