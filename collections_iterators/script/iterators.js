export function iterators() {
    const library = [
        { title: "1984", author: "George Orwell" },
        { title: "Brave new world", author: "Aldous Huxley" },
        { title: "Fahrenheit 451", author: "Ray Bradbury" }
    ];

    library[Symbol.iterator] = function () {
        return {
            current: 0,
            to: this.length,
            next() {
                return this.current < this.to
                    ? { done: false, value: library[this.current++] }
                    : { done: true };
            }
        }
    };

    for (let book of library) {
        console.log(`Название: ${book.title}, автор: ${book.author}`);
    };
}