export function bom() {

    window.onresize = function () {
        console.log(`Высота браузера ${window.innerHeight}.
        Ширина окна браузера ${window.innerWidth}.`);
    };

    window.addEventListener('beforeunload', (event) => {
        event.preventDefault();
        event.returnValue = '';
    });

    function historyUsing() {
        const forwardBtn = document.querySelector(".forward");
        const backBtn = document.querySelector(".back");
        forwardBtn.addEventListener("click", () => {
            history.forward();
            console.log(history);
        });
        backBtn.addEventListener("click", () => {
            history.back();
            console.log(history);
        })
    };
    historyUsing();
}