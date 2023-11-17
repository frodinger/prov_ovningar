// Hämta todo-data från denna url: https://jsonplaceholder.typicode.com/todos/
// Skriv ut med html på skärmen titeln på alla todo-objekt som har
// completed: true

const parentEl = document.getElementById("todos");

async function getTodos(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data = await response.json();

    const filteredData = data.filter((todo) => todo.completed == true);

    filteredData.forEach((todo) => {
        const todoEl = document.createElement("div");

        todoEl.innerHTML = `<h2>${todo.title}</h2>`;

        parentEl.appendChild(todoEl);
    });
}

getTodos();