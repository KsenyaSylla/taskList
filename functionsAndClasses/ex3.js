export function ex3() {
    const button = document.querySelector("button");
    const input = document.querySelector("input");
    const showNumber = document.querySelector(".show");

    button.addEventListener("click", () => {
        try {
            if (isNaN(input.value)) {
                throw new Error("Нужно число");
            }
            showNumber.innerHTML = input.value;
        } catch (error) {
            console.log(error.message);
            showNumber.innerHTML = "Это не число!";
            input.value = "";
        }

    });
}