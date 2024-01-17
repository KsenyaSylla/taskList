const button = document.querySelector(".loadNews");
const newsContainer = document.querySelector(".showNews");
const news = [
    {
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        id: Symbol("id"),
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    },
    {
        body:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        id: Symbol("id"),
        title: "qui est esse"
    },
    {
        body:
            "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
        id: Symbol("id"),
        title: "eum et est occaecati"
    },
    {
        body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
        id: Symbol("id"),
        title: "dolorem eum magni eos aperiam quia"
    }
];
function random(max) {
    return Math.floor(Math.random() * max);
};
function showItem(news) {
    const item = news[random(news.length)];
    const h2 = document.createElement("h2");
    h2.innerText = item.title;
    const bodyNews = document.createElement("p");
    bodyNews.innerText = item.body;
    const itemDiv = document.createElement("div");
    itemDiv.insertAdjacentElement("beforeend", h2);
    itemDiv.insertAdjacentElement("beforeend", bodyNews);
    console.log(itemDiv);
    return itemDiv;
}

function fetchNews() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                res(news);
            } else { rej("Ошибка загрузки"); }
        }, 2000);
    });
};

button.addEventListener("click", () => {
    fetchNews()
        .then((result) => {
            newsContainer.insertAdjacentElement("beforeend", showItem(result));
        }).catch((err) => {
            console.log(err);
        });
})
