document.getElementById("vision_switch").innerHTML = "Switch theme"

function switchTheme() {

    const body = document.getElementsByTagName("body");
    const article = document.getElementsByTagName("article");
    const content__para = document.getElementsByClassName("content__para");
    const header__subtitles = document.getElementsByClassName("header__subtitles");
    const anchors = document.getElementsByTagName("a");
    const anchor__menu = document.getElementsByClassName("menu");

    if (body[0].style.cssText === "") {
        Array.from(body)
            .map(body => body.style.backgroundColor = "#2c2a38");

        Array.from(article)
            .map(article => article.style.color = "#d7d5e0");

        Array.from(content__para)
            .map(content__para => content__para.style.backgroundColor = "#767294");

        Array.from(header__subtitles)
            .map(header__subtitle => header__subtitle.style.backgroundColor = "#767294");

        Array.from(anchors)
            .map(a => a.style.color = "#8c98ed");

        Array.from(anchor__menu)
            .map(m => m.style.color = "black") 
    }
    else {
        location.reload()
    }
}