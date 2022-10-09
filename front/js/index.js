//Sélection de la section:  
let section = document.querySelector("#items");

//Requête: récupération des données:
fetch("http://localhost:3000/api/products")
    .then(async (response) => {//console.log(response);
        try{
            let data = await response.json();
            console.log(data);    
            data.forEach((objets) => {
                console.log(objets);
                //Création d'une balise "a" + attribut:
                let url = `http://127.0.0.1:5500/front/html/product.html?id=${objets._id}`;
                let lien = document.createElement("a");
                lien.setAttribute("href", url);

                //Création d'une balise "article":
                let article = document.createElement("article");

                //Création d'une balise "image" + attributs:
                let image = document.createElement("img");
                image.setAttribute("src", objets.imageUrl);
                image.setAttribute("alt", objets.altTxt);

                //Création d'une balise "h3" + attribut:
                let titreH3 = document.createElement("h3");
                titreH3.innerHTML = objets.name;
                titreH3.setAttribute("class", "productName");

                //Création d'une balise "p" + attribut:
                let paragraphe = document.createElement("p");
                paragraphe.innerHTML = objets.description;
                paragraphe.setAttribute("class", "productDescription");

                //Assemblage des balises entre elles:
                let sectionAppend = section.appendChild(lien);
                sectionAppend.appendChild(article);
                article.appendChild(image);
                article.appendChild(titreH3);
                article.appendChild(paragraphe);

                console.log(sectionAppend);
            });
        }catch{(erreur) => console.log(erreur)};
    }).catch((erreur) => {console.log(erreur)});