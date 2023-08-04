import { renderLevel } from "./components/renderLevel.js";

function renderGameLevels() {

    let appEl = document.getElementById('app');

    const appHTML = `<div class="square center">
    <div class="top">
        <h1 class="top-text">Выбери сложность</h1>
        <form class="levels" action="#" id="form">
            <input type="radio" name="level" class="input-levels" id="input-lev1" value="6">
            <label for="input-lev1">1</label>
            <input type="radio" name="level" class="input-levels" id="input-lev2" value="12">
            <label for="input-lev2">2</label>
            <input type="radio" name="level" class="input-levels" id="input-lev3" value="18">
            <label for="input-lev3">3</label>
            <button type="submit" class="button-start" id="start-button">Старт</button>
        </form> 
    </div>
</div>`

    appEl.innerHTML = appHTML;

    // function scrollTo(element) {
    //     window.scroll({
    //         left: 0,
    //         top: element.offsetTop,
    //         behavior: "smooth"
    //     })
    // }

    //const buttonStart = document.querySelector(".button-start");
    // buttonStart.addEventListener("click", () => {
    //     scrollTo();
    // })

    document.getElementById("form").addEventListener("submit", (elem) => {
        elem.preventDefault();

        let levels = document.querySelectorAll(".input-levels");

        for (const level of levels) {
            if (level.checked) {
                renderLevel(level, appEl);
            }
        }
    })

    // arrShirts.forEach(src => {
    //     const img = document.createElement('img');
    //     img.src = src;

    //     document.querySelector(".shirts-top").append(img);
    // })

    // arrCards.forEach(src => {
    //     const img = document.createElement('img');
    //     img.src = src;

    //     document.querySelector(".cards-top").append(img);
    // })


    // function showShirts () {
    //     arrayImageShirts.forEach(i => {
    //         let imgs = document.createElement("img");
    //         imgs.setAttribute("src", i);
    //         shirtsBox.appendChild(imgs);
    //     })
    // }
    // showShirts();

    // function showCards () {
    //     arrayImageCards.forEach(i => {
    //         let imgs2 = document.createElement("img");
    //         imgs2.setAttribute("src", i);
    //         shirtsBox.appendChild(imgs2);
    //     })
    // }
    // showCards();
}
renderGameLevels();