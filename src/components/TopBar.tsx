import { useState, useEffect } from "react";
import Link from "next/link";
import "../styles/topbar.css";

function TopBar() {
    const [topbarHeight, setTopbarHeight] = useState("3em");

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 900) {
                setTopbarHeight("3em");
            } else {
                setTopbarHeight("5em");
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

    return (
        <div className="topbar">
            <ul>
                <Link href="/#Home" className="topbar-link" scroll={true}>
                    <strong>Home</strong>
                </Link>
            </ul>
            <ul>
                <Link href="/#AboutMe" className="topbar-link" scroll={true}>
                    <strong>AboutMe</strong>
                </Link>
            </ul>
            <ul>
                <Link href="/#Portfolio" className="topbar-link" scroll={true}>
                    <strong>Portfolio</strong>
                </Link>
            </ul>
            <ul>
                <Link href="/#Skills" className="topbar-link" scroll={true}>
                    <strong>Skills</strong>
                </Link>
            </ul>
            <ul>
                <Link href="/#Profile" className="topbar-link" scroll={true}>
                    <strong>Profile</strong>
                </Link>
            </ul>
        </div>
    );
}

export default TopBar;
