import "../styles/style.css";

function AboutMe() {
    return (
        <div id="AboutMe" className="body">
            <h1 className="AboutMe ">About Me</h1>
            <p className="">
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
                .
            </p>
        </div>
    );
}

export default AboutMe;
