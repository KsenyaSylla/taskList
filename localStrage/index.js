const userText = document.querySelector(".userText");
const saveBtn = document.querySelector(".buttonSave");
const loadBtn = document.querySelector(".buttonLoad");
const clearBtn = document.querySelector(".buttonClear");
const divForTextToShow = document.querySelector(".showText");
const keyForLocalStorage = "userText";

saveBtn.addEventListener("click", () => {
    localStorage.setItem(keyForLocalStorage, userText.value);
    userText.value = "";
});

loadBtn.addEventListener("click", () => {
    const text = localStorage.getItem(keyForLocalStorage);
    text ?
        divForTextToShow.textContent = text :
        divForTextToShow.textContent = "Введие текст!";
});

clearBtn.addEventListener("click", () => {
    localStorage.removeItem(keyForLocalStorage);
    divForTextToShow.textContent = "Текст удален из LocalStorage.";
});

