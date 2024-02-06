export function ex2() {
    const container = document.querySelector(".container");
    const addElBtn = document.querySelector(".addEl");
    const delElBtn = document.querySelector(".delEl");
    const cloneElBtn = document.querySelector(".cloneEl");
    let id = 0;

    function makeEl(id) {
        const el = document.createElement("div");
        el.classList.add("box");
        el.id = id;
        el.textContent = id;
        return el;
    };


    addElBtn.addEventListener("click", () => {
        if (container.lastChild) {
            id = +container.lastChild.textContent + 1;
            const el = makeEl(id);
            container.insertAdjacentElement("beforeend", el);
        } else {
            const el = makeEl(1);
            container.insertAdjacentElement("beforeend", el);
        }
    });

    delElBtn.addEventListener("click", () => {
        if (container.lastChild) {
            container.lastChild.remove();
        }
    });

    cloneElBtn.addEventListener("click", () => {
        const clonedEl = container.lastChild.cloneNode();
        id = +container.lastChild.textContent + 1;
        clonedEl.id = id;
        clonedEl.textContent = id;
        container.insertAdjacentElement("beforeend", clonedEl);
    });
}
//Пофиксить баги с ID!!!