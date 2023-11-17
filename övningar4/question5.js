// 5. Responsive Users 3p
// Ladda ner users från denna url: https://jsonplaceholder.typicode.com/users
// För varje user ska name, email och city visas i en div och placeras under varandra.
// I desktop-vy ska divarna för varje user visas i 3 kolumner.
// I mobil-vy ska divarna för varje user visas i en kolumn med 100% width.

const usersEl = document.getElementById("users");

async function getUsers(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    data.forEach((user) => {
        const userContainer = document.createElement("div");
        userContainer.className = "userContainer";
        usersEl.appendChild(userContainer);

        const nameEl = document.createElement("div");
        nameEl.className = "userColumn";
        nameEl.innerHTML = `<p>${user.name}</p>`;

        const emailEl = document.createElement("div");
        emailEl.className = "userColumn";
        emailEl.innerHTML = `<p>${user.email}</p>`;

        const cityEl = document.createElement("div");
        cityEl.className = "userColumn";
        cityEl.innerHTML = `<p>${user.address.city}</p>`;

        userContainer.appendChild(nameEl);
        userContainer.appendChild(emailEl);
        userContainer.appendChild(cityEl);
    });
}

getUsers();