let queue = ["Марія", "Олександра", "Влад", "Іван", "Павло"];

queue.push("Влада");
queue.unshift("Всеволод");
queue.pop();
queue[2] = "Єгор";

for (let i = 0; i < queue.length; i++) {
    console.log(`${i + 1}. ${queue[i]}`);
}

for (let name of queue) {
    console.log(name);
}

queue.forEach(name => {
    console.log(`${name}: ${name.length} букв`);
});