import { films } from './films.js'
import { people } from './people.js';

films.sort(function (a,b) {
    return a.episode_id - b.episode_id;
});

let html = "";
for (let film of films) {
    html += `<h2> ${film.title}</h2>`;
}

document.getElementById("films").innerHTML = html;




let newTitle = films[0]


document.querySelector("#display-button").onclick = function () {
document.querySelector("#title").innerHTML = films[0].title;
}


console.log(films[0])




