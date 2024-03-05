"use client"
import React, { useEffect } from "react";
import "../styles/style.css";
import AOS from "aos";
import "../styles/aos.css";

function AboutMe() {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    return (
        <div id="AboutMe" className="body">
            <h1 className="AboutMe" data-aos="fade-up">About Me</h1>
            <p data-aos="fade-up">
                I'm <strong>SeongYeon Kim</strong> (a.k.a.
                <strong>Kinn</strong>),
                <br />
                and I'm a student FrontEnd Developer.
                <br />I develop Website & Discord Bot. <br />
                My motto is
                <strong>
                    "The best way to predict
                    <br />
                    the future is to create it."
                </strong>
                <br />
                I'm Junior of high school, and <br />
                I'm dreaming of working at
                <a
                    href="https://toss.im"
                    target="_blank"
                    title="TOSS"
                    className="link"
                >
                    <img loading="lazy" src="img/toss.png" className="toss" />
                </a>
            </p>
        </div>
    );
}

export default AboutMe;
