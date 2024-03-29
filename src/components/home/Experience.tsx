import { useEffect } from "react";
import "../../styles/style.css";
import { handleExperience } from "../../app/handleText.js";
import AOS from "aos";
import "../../styles/aos.css";

function Experience() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    useEffect(() => {
        handleExperience();

        if (window.performance) {
            if (performance.navigation.type === 1) {
                // Detect Refresh
                handleExperience();
            }
        }
        window.addEventListener("resize", handleExperience);

        return () => {
            window.removeEventListener("resize", handleExperience);
        };
    });

    return (
        <div id="Experience" className="body" data-aos="fade-up">
            <h2 className="list">Experience</h2>

            <div className="container">
                <a href=" " target="_blank" title="Ileonang" className="spec">
                    <div className="card-container">
                        <div>
                            <img
                                loading="lazy"
                                src="img/trophy.png"
                                className="card-img"
                            />
                            <span className="card-title">
                                <strong>Highthon</strong>
                            </span>
                        </div>
                        <div className="card-text">
                            <span className="highthon-element">
                                Got a <strong>Grand Prize</strong> at{" "}
                                <strong>Highthon</strong>,
                                <br />
                                which is hackathon of high school student.
                            </span>
                            <div className="card-footer">
                                <strong>
                                    <br />
                                    24. 02. 17~24. 02. 18.
                                </strong>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Experience;
