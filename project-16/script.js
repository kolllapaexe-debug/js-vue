let news = [
    {   category: "JavaScript",
        title: "JavaScript for child",
        description:"JS lib for JS",
        date:"20.11.2026"},
    {   category: "Design",
        title: "Design for child",
        description:"Design for kids",
        date:"13.11.2026"},
]
let newsList = document.querySelector("#news-list");
let newsCount = document.querySelector("#news-count");



function renderNews(items){
    let card = document.createElement("article");
    card.classList.add("news-card");

    let tag = document.createElement("span");
    tag.classList.add("tag");
    tag.textContent = items.category;

    let title = document.createElement("h2");
    title.textContent = items.title;
    let description = document.createElement("p");
    description.textContent = items.description;
    let date = document.createElement("small");
    date.textContent = items.date;

    card.append(tag, description, date);
    newsList.append(card);
}
renderNews(news);