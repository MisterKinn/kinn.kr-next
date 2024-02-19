"use client";
import React, { useState, useEffect, useRef } from "react";
import QRCode from "qrcode.react";
import Footer from "../../components/Footer";
import "../../styles/qr.css";

interface HTMLCanvasElementWithToDataURL extends HTMLCanvasElement {
    toDataURL(): string;
}

function QR() {
    const [qrCodeData, setQrCodeData] = useState("");
    const textInputRef = useRef<HTMLInputElement>(null);

    const generateQR = () => {
        const textInputValue = textInputRef.current?.value.trim();
        if (textInputValue) {
            setQrCodeData(textInputValue);
        }
    };

    useEffect(() => {
        generateQR();
    }, []);

    const downloadQR = () => {
        const qrCodeCanvas = document.querySelector(
            "#result canvas"
        ) as HTMLCanvasElementWithToDataURL;
        if (qrCodeCanvas) {
            const downloadLink = document.createElement("a");
            downloadLink.href = qrCodeCanvas.toDataURL();
            downloadLink.download = "qr.png";
            downloadLink.click();
        }
    };

    return (
        <div className="page-container">
            <header className="header">
                <a
                    href="https://kinn.kr/"
                    target="_blank"
                    title="Kinn's Lounge"
                >
                    <img
                        loading="lazy"
                        src="img/kinn-banner.png"
                        alt="Kinn's Lounge"
                        className="banner"
                    />
                </a>
            </header>

            <main className="main">
                <div className="qr-container">
                    <h1 className="title">QR Crafter</h1>
                    <label htmlFor="text-input">Enter Text or URL:</label>
                    <input
                        type="text"
                        id="text-input"
                        ref={textInputRef}
                        className="text-input"
                        placeholder="Type here"
                        onInput={generateQR}
                    />
                    <div id="result">
                        {qrCodeData && <QRCode value={qrCodeData} size={128} />}
                    </div>
                    <button className="download-button" onClick={downloadQR}>
                        Download
                    </button>
                </div>
            </main>

            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
}

export default QR;
