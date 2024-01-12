export function mapAndSet() {
    const lessons = new Map();
    lessons.set("math", "Smirnov");
    lessons.set("history", "Ivanov");

    const ivansLessons = new Set();
    ivansLessons.add("math")
        .add("history");

    const students = new Map();
    students.set("Ivan", ivansLessons);

    console.log(`Препод по матеше ${lessons.get("math")}`);
    console.log(`Уроки Ивана: ${[...students.get("Ivan")]}`);
};