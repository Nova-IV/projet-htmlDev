document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded ok !");

    /*   elTitre = document.querySelector("title")
      elTitre.innerText = "Développement WEB"
      mainTitle = document.querySelector("header h1")
      mainTitle.innerText += " et développement PHP" */

    const mainTitle = document.querySelectorAll("title, h1");
    mainTitle.forEach(el => el.innerText = "Développeur PHP");
});

/* let age, ville, nombre, version, chiffre

const user = 5.4
age = 15
ville = "Paris"
nombre = null
version = (1.55555555555555555555555555)

console.log(parseFloat(version).toFixed(3).length)

const tabLang = ["html", 1.5, true]
console.log(typeof tabLang) */