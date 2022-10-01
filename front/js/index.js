//Sélection de la section:  
let section = document.querySelector("#items");

//Création d'une balise "a" + attribut:
let lien = document.createElement("a");
lien.setAttribute("id", "à renseigner");

//Création d'une balise "article":
let article = document.createElement("article");

//Création d'une balise "image" + attributs:
let image = document.createElement("img");
image.setAttribute("src", "");
image.setAttribute("alt", "description");

//Création d'une balise "h3" + attribut:
let titreH3 = document.createElement("h3");
titreH3.setAttribute("class", "productName");

//Création d'une balise "p" + attribut:
let paragraphe = document.createElement("p");
paragraphe.setAttribute("class", "productDescription");

//Assemblage des balises entre elles:
let Section = section.appendChild(lien);
Section.appendChild(article);
article.appendChild(image);
article.appendChild(titreH3);
article.appendChild(paragraphe);

//Contrôle:
console.log(Section);

//Requête: récupération des données:
async function fetchusers() {
    const data = await fetch("http://localhost:3000/api/products");
    const response = await data.json();
    console.log(response);
    return response;
};
fetchusers();

//Utilisation de la méthode forEach: