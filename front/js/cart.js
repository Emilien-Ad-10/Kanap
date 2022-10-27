let sectionCartItems = document.getElementById("cart__items");

let produit = JSON.parse(localStorage.getItem("produit"));

console.log(produit);

//Creation d'une baliseArticle classe "cart__item":
let baliseArticle = document.createElement("article");
baliseArticle.setAttribute("class", "cart__item");

//Insérer la baliseArticle dans la section "cart__items":
sectionCartItems.appendChild(baliseArticle);

//Creation d'une baliseDivImg classe "cart__item__img":
let baliseDivImg = document.createElement("div");
baliseDivImg.setAttribute("class", "cart__item__img");

//Inserer la baliseDivImg dans la baliseArticle:
baliseArticle.appendChild(baliseDivImg);

//Creation d'une baliseImage + attributs:
let baliseImage = document.createElement("img");
baliseImage.setAttribute("src", "");
baliseImage.setAttribute("alt", "");

//Inserer la baliseImage dans la baliseDivImg:
baliseDivImg.appendChild(baliseImage);

//Creation d'une div classe "cart__item__content":
let baliseDivContent = document.createElement("div");
baliseDivContent.setAttribute("class", "cart__item__content");

//Inserer la div classe "cart__item__content" dans la balise article:
baliseArticle.appendChild(baliseDivContent);

//Creation d'une balise div classe "cart__item__content__description":
let baliseDivContentDescription = document.createElement("div");
baliseDivContentDescription.setAttribute("class", "cart__item__content__description");

//Inserer la div classe "baliseDivContentDescription" dans la balise div classe "baliseDivContent":
baliseDivContent.appendChild(baliseDivContentDescription);

//Creation d'une balise h2 et deux balises p + attribut:
let titreH2 = document.createElement("h2");
let paragrapheCouleur = document.createElement("p");
paragrapheCouleur.setAttribute("class", "couleurProduit");
let paragraphePrix = document.createElement("p");
paragraphePrix.setAttribute("class", "prixProduit");

//Inserer la balise h2 et les deux paragraphes à la balise div classe "baliseDivContentDescription": 
baliseDivContentDescription.appendChild(titreH2);
baliseDivContentDescription.appendChild(paragrapheCouleur);
baliseDivContentDescription.appendChild(paragraphePrix);

//Creation d'une balise div classe "cart__item__content__settings":
let baliseDivContentSettings = document.createElement("div");
baliseDivContentSettings.setAttribute("class", "cart__item__content__settings");

//Inserer la DivContentSettings dans la DivContent:
baliseDivContent.appendChild(baliseDivContentSettings);

//Creation d'une div classe "cart__item__content__settings__quantity":
let baliseDivContentSettingsQuantity = document.createElement("div");
baliseDivContentSettingsQuantity.setAttribute("class", "cart__item__content__settings__quantity");

//Inserer la baliseDivContentSettingsQuantity dans la baliseDivContentSettings:
baliseDivContentSettings.appendChild(baliseDivContentSettingsQuantity);

//Création d'un paragraphe classe "produitQuantité":
let paragrapheProduitQuantité = document.createElement("p");
paragrapheProduitQuantité.setAttribute("class", "produitQuantité");

//Inserer paragrapheProduitQuantité dans la baliseDivContentSettingsQuantity:
baliseDivContentSettingsQuantity.appendChild(paragrapheProduitQuantité);

//Creation d'un input + attributs:
let baliseInput = document.createElement("input");
baliseInput.setAttribute("type", "number");
baliseInput.setAttribute("class", "itemQuantity");
baliseInput.setAttribute("name", "itemQuantity");
baliseInput.setAttribute("min", "1");
baliseInput.setAttribute("max", "100");
baliseInput.setAttribute("value", "");

//Inserer la baliseInput dans la baliseDivContentSettingsQuantity:
baliseDivContentSettingsQuantity.appendChild(baliseInput);

//Creation d'une div classe "cart__item__content__settings__delete":
let baliseDivContentSettingsDelete = document.createElement("div");
baliseDivContentSettingsDelete.setAttribute("class", "cart__item__content__settings__delete");

//Inserer la baliseDivContentSettingsDelete dans la baliseDivContentSettings:
baliseDivContentSettings.appendChild(baliseDivContentSettingsDelete);

//Creation d'un paragraphe classe "deleteItem":
let paragrapheDeleteItem = document.createElement("p");
paragrapheDeleteItem.setAttribute("class", "deleteItem");
paragrapheDeleteItem.innerHTML = "Supprimer";

//Inserer le paragrapheDeleteItem dans la baliseDivContentSettingsDelete:
baliseDivContentSettingsDelete.appendChild(paragrapheDeleteItem);

console.log(baliseArticle);

// fetch("http://localhost:3000/api/products")
// .then(async (response) => {console.log(response)
//     try{
//     let data = await response.json();
//     console.log(data);

//     }catch{(erreur) => console.log(erreur)};
// }).catch((erreur) => console.log(erreur));