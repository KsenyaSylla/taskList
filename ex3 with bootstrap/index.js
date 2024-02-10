const url = "https://jsonplaceholder.typicode.com/posts";
const startListNumber = 5;
const container = document.querySelector(".container");
let lastId = startListNumber;
const addBtn = document.querySelector(".add");
const delBtn = document.querySelector(".del");
const redactBtn = document.querySelector(".redact");
fetch(url)
  .then(response => response.json())
  .then(result => {
    for (let i = 0; i < startListNumber; i++) {
      let article = result[i];
      const articleHTML = `<article class="card" id="${article.id}">
<div class="card-body">
  <h2 class="card-title">${article.title}</h2>
  <p class="card-text">${article.body}</p>
</div>
</article>`;
      container.insertAdjacentHTML("beforeend", articleHTML);
      localStorage.setItem(i, JSON.stringify(article));
    }
  }); //result - это 100 новостей, которые можно сохранить в local Storage?

/*const article = `<article class="card" style="width: 18rem;" id="${id}">
<div class="card-body">
  <h2 class="card-title">${title}</h2>
  <p class="card-text">${text}</p>
</div>
</article>`;**/

