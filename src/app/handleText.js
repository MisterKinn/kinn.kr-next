function handleAboutMe() {
    const mottoElement = document.querySelector(".motto-text");
    const usaElement = document.querySelector(".usa-element");

    if (window.innerWidth < 850) {
        mottoElement.innerHTML =
            '<strong>"The best way to<br />predict the future is to create it."</strong>';
        usaElement.innerHTML =
            "<strong>the United States<br />of America.</strong>";
    }
}

function handlePortfolio() {
    const ileonangElement = document.querySelector(".ileonang-element");
    const qrElement = document.querySelector(".qr-element");
    const converterElement = document.querySelector(".converter-element");
    const promiseElement = document.querySelector(".promise-element");

    if (window.innerWidth < 850) {
        ileonangElement.innerHTML =
            "Made an <strong>Alarm App</strong>, which<br />wakes up user by sending<br />risky message to someone.";
        qrElement.innerHTML =
            "Making a <strong>QR Code Generate<br />Service</strong>, which generates<br />& downloads QR Code.";
        converterElement.innerHTML =
            "Making an <strong>Exchange Rate Conversion Service</strong>, which<br />calculates by actual exchange rate.";
        promiseElement.innerHTML =
            "Making official Web Page of <strong>Promise</strong>, which is club<br />of my high school.";
    }
}

function handleExperience() {
    const highthonElement = document.querySelector(".highthon-element");

    if (window.innerWidth < 850) {
        highthonElement.innerHTML =
            "Got a <strong>Grand Prize</strong> at <strong>Highthon</strong>,<br />which is hackathon<br />of high school student.";
    }
}
// 포폴.tsx에 resize나 load 감지해서 handlePortfolio() 실행시키는 코드 넣기
export { handleAboutMe, handlePortfolio, handleExperience };
