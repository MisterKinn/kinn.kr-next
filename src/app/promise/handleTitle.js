function handleTitle() {
    const titleElement = document.querySelector(".title");

    if (window.innerWidth < 850) {
        titleElement.innerText = "당신도 무언가를\n상상해본 적이\n있나요?";
    } else {
        titleElement.innerText = "당신도 무언가를\n상상해본 적이 있나요?";
    }
}

export { handleTitle };
