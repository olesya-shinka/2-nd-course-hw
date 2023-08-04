import { arrCardsImage } from "./arrCardsImage.js";

export function renderLevel(level, appEl) {

    let gameLevel = level.value;
    const arrCards = [];

    function getImages(gameLevel) {
        for (let i = 0; i < gameLevel; i++) {
            arrCards.push(`<img class="suit-card" src="./img/рубашка.png" alt="рубашка">`)
        }
        return arrCards;
    }
    getImages(gameLevel);
    
    const appHTML = `
        <header class="cards-new center">
        <div class="time">
            <div class="min-sec">
                <p class="min">min</p>
                <p class="sec">sec</p>
            </div>
            <div class="time-two">
                <p class="timer">00.00</p>
                <button type="submit" class="button-again">Начать заново</button>
            </div></div></header>
        <div class="cards-top center" id="suits"> ${arrCards} </div>`;

    appEl.innerHTML = appHTML;

    const reversalCards = document.querySelectorAll(".suit-card");
    

    for (const reversalCard of reversalCards) {
        reversalCard.addEventListener("click", () => {
            let arrCardsSort = arrCardsImage.sort(() => Math.random() - 0.3);
            document.getElementById("suits").innerHTML = `${arrCardsSort.slice(0, level.value)}`;

            setTimeout(() => {
                renderLevel(level, appEl);
               }, 5000);
        })
    }
}