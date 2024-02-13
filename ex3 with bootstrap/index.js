const url = "https://jsonplaceholder.typicode.com/posts";
const startListNumber = 5;
const container = document.querySelector(".container");
let lastId = startListNumber;
const addBtn = document.querySelector(".add");
fetch(url)
  .then(response => response.json())
  .then(result => {
    for (let i = 0; i < startListNumber; i++) {
      let article = result[i];
      const articleHTML = `<article class="card" id="${article.id}">
<div class="card-body">
  <h2 class="card-title">${article.title}</h2>
  <p class="card-text">${article.body}</p>
  <button class="del btn btn-danger" onclick = "delPost(${article.id})">Удалить статью</button>
  <button class="redact btn btn-warning" onclick = "redactPost(${article.id})">Редактировать стат
</div>
</article>`;
      container.insertAdjacentHTML("beforeend", articleHTML);
      localStorage.setItem(i, JSON.stringify(article));
    }
  }); //result - это 100 новостей, которые можно сохранить в local Storage?

addBtn.addEventListener("click", () => {
  if (container.childElementCount == 0) {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        let i = 1;
        let article = result[i];
        const articleHTML = `<article class="card" id="${article.id}">
<div class="card-body">
  <h2 class="card-title">${article.title}</h2>
  <p class="card-text">${article.body}</p>
  <button class="del btn btn-danger" onclick = "delPost(${article.id})">Удалить статью</button>
  <button class="redact btn btn-warning" onclick = "redactPost(${article.id})">Редактировать стат
</div>
</article>`;
        container.insertAdjacentHTML("beforeend", articleHTML);
        localStorage.setItem(i, JSON.stringify(article));
      });
  } else {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        let i = ++container.lastChild.id;
        let article = result[i];
        const articleHTML = `<article class="card" id="${article.id}">
<div class="card-body">
  <h2 class="card-title">${article.title}</h2>
  <p class="card-text">${article.body}</p>
  <button class="del btn btn-danger" onclick = "delPost(${article.id})">Удалить статью</button>
  <button class="redact btn btn-warning" onclick = "redactPost(${article.id})">Редактировать статью</button>
</div>
</article>`;
        container.insertAdjacentHTML("beforeend", articleHTML);
        localStorage.setItem(i, JSON.stringify(article));
      })
  }
});

function delPost(id) {
  const articleToDel = document.getElementById(id);
  articleToDel.remove();
  localStorage.removeItem(id);
};
function redactPost(id) {
  const articleToRedact = document.getElementById(id);
  let redactedText = articleToRedact.childNodes[1].childNodes[3];
  redactedText.textContent = prompt("Введите текст статьи");
}