export function usageArrayFrom() {
    const elems = document.querySelectorAll("div");
    const elemsArr = Array.from(elems);
    const elemsActive = elemsArr.filter(elem => elem.dataset.active);
    console.log(elemsActive);
}