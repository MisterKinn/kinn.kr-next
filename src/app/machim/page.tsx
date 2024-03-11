"use client";
import "../../styles/machim.css";

import Head from "next/head";
import TopBar from "../../components/machim/TopBar";
import Home from "../../components/machim/Home";
import About from "../../components/machim/AboutMachim";
import Manage from "../../components/machim/Manage";
import Utility from "../../components/machim/Utility";
import Support from "../../components/machim/Support";
import Banner from "../../components/home/Banner";
import Footer from "../../components/home/Footer";

function Page() {
    return (
        <div>
            <Head>
                <div />
            </Head>
            <TopBar />
            <Home />
            <About />
            <Manage />
            <Utility />
            <Support />
            <Banner />
            <Footer />
        </div>
    );
}

export default Page;
