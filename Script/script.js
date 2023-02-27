let gallery = [
    {
        file: "red.jpg",
        title: "Красный костёл",
        link: "https://msj.by/katolicheskie-xramy/krasnyj-kostel-v-minske/",
        description: "В храме святого Симеона и святой Елены находится полномасштабная копия Туринской Плащаницы.",
    },
    {
        file: "troi.jpg",
        title: "Троицкое предместье",
        link: "https://www.belarus.by/ru/travel/belarus-life/trinity-suburb",
        description: "Троицкое предместье — исторический район города Минска, расположенный в северо-восточной части исторического центра на левом берегу реки Свислочь.",
    },
    {
        file: "mir.jpg",
        title: "Мирский замок",
        link: "https://mirzamak.by/",
        description: "Построенный в начале XVI в. магнатом Ю. И. Ильиничем замок стал первым частнособственническим замком на землях Белоруссии",
    }


];

for (i=0; i<gallery.length; i++) {
    picturesHere.innerHTML += `
                            <div> 
                                <img src="Images/${gallery[i].file}" alt="${gallery[i].title}" onclick="showImg('${gallery[i].file}','${gallery[i].description}')">
                                <p><a href='${gallery[i].link}'>${gallery[i].title}</a></p> 
                            </div>
                            `;

}
function removeImg(event) {
        console.log(event.target);
        bigImg.innerHTML = "";
}

function showImg(f,d) {
    bigImg.innerHTML = `
    <img src="images/${f}" alt="">
        <p>${d}</p>
    `;
    bigImg.addEventListener("click", removeImg);
}