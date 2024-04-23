import Link from "next/link";
import "../../styles/topbar.css";

function TopBar() {
    return (
        <div className="body">
            <div className="topbar">
                <ul>
                    <Link
                        href="//#Home"
                        className="topbar-link"
                        scroll={true}
                    >
                        <strong>Home</strong>
                    </Link>
                </ul>
                <ul>
                    <Link
                        href="//#About"
                        className="topbar-link"
                        scroll={true}
                    >
                        <strong>About</strong>
                    </Link>
                </ul>
                <ul>
                    <Link
                        href="//#Portfolio"
                        className="topbar-link"
                        scroll={true}
                    >
                        <strong>Portfolio</strong>
                    </Link>
                </ul>
                <ul>
                    <Link
                        href="//#Experience"
                        className="topbar-link"
                        scroll={true}
                    >
                        <strong>Experience</strong>
                    </Link>
                </ul>
                <ul>
                    <Link
                        href="//#Skills"
                        className="topbar-link"
                        scroll={true}
                    >
                        <strong>Skills</strong>
                    </Link>
                </ul>
                <ul>
                    <Link
                        href="//#Profile"
                        className="topbar-link"
                        scroll={true}
                    >
                        <strong>Profile</strong>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default TopBar;
