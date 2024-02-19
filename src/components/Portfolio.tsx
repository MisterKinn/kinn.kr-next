import "../styles/style.css";

function Portfolio() {
    return (
        <div id="Portfolio" className="body">
            <h2 className="list">Portfolio</h2>

            <div className="container">
                <a href=" " target="_blank" title="Ileonang" className="spec">
                    <div className="card-container">
                        <div>
                            <img
                                loading="lazy"
                                src="img/ileonang.png"
                                className="card-img"
                            />
                            <span className="card-title">
                                <strong>Ileonang</strong>
                            </span>
                        </div>
                        <div className="card-text">
                            Made an <strong>Alarm App</strong>, which wakes up
                            user
                            <br /> by sending risky message to someone.
                            <div className="card-footer">
                                <strong>
                                    <br />
                                    24. 02. 17~24. 02. 18.
                                </strong>
                            </div>
                        </div>
                    </div>
                </a>

                <a
                    href="/qr"
                    target="_blank"
                    title="QR Crafter"
                    className="spec"
                >
                    <div className="card-container">
                        <div>
                            <img
                                loading="lazy"
                                src="img/link.png"
                                className="card-img"
                            />
                            <span className="card-title">
                                <strong>QR Crafter</strong>
                            </span>
                        </div>
                        <div className="card-text">
                            Making a<strong>QR Code Generate Service</strong>,
                            <br />
                            which generates & downloads QR Code.
                            <div className="card-footer">
                                <strong>
                                    <br />
                                    23. 12. 08~
                                </strong>
                            </div>
                        </div>
                    </div>
                </a>

                <a
                    href="/converter"
                    target="_blank"
                    title="Dynamic Converter"
                    className="spec"
                >
                    <div className="card-container">
                        <div>
                            <img
                                loading="lazy"
                                src="img/converter.png"
                                className="card-img"
                            />
                            <span className="card-title">
                                <strong>Dynamic Converter</strong>
                            </span>
                        </div>
                        <div className="card-text">
                            Making an
                            <strong>Exchange Rate Conversion Service</strong>,
                            <br />
                            which calculates by the actual exchange rate.
                            <div className="card-footer">
                                <strong>
                                    <br />
                                    23. 12. 02~
                                </strong>
                            </div>
                        </div>
                    </div>
                </a>

                <a
                    href="/promise"
                    target="_blank"
                    title="Promise"
                    className="spec"
                >
                    <div className="card-container">
                        <div>
                            <img
                                loading="lazy"
                                src="img/Promise.webp"
                                className="card-img"
                            />
                            <span className="card-title">
                                <strong>Promise</strong>
                            </span>
                        </div>
                        <div className="card-text">
                            Making official Web Page of
                            <strong>Promise</strong>,
                            <br />
                            which is club of my high school.
                            <div className="card-footer">
                                <strong>
                                    <br />
                                    23. 11. 06~
                                </strong>
                            </div>
                        </div>
                    </div>
                </a>

                <a
                    href="/machim"
                    target="_blank"
                    title=".마침이"
                    className="spec"
                >
                    <div className="card-container">
                        <div>
                            <img
                                loading="lazy"
                                src="img/Machim.png"
                                className="card-img"
                            />
                            <span className="card-title">
                                <strong>.마침이</strong>
                            </span>
                        </div>
                        <div className="card-text">
                            Making My Own <strong>Discord Bot</strong>,
                            <br />
                            <strong>[ .마침이 ]</strong>.
                            <div className="card-footer">
                                <strong>
                                    <br />
                                    21. 02. 07~
                                </strong>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Portfolio;
