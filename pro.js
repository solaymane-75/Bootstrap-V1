var movie;
var listes = new XMLHttpRequest();
listes.open("GET", "movies.json");
listes.onload = function () {
    movie = JSON.parse(this.responseText);
    afficher(movie);
};
listes.send();
document.getElementById("select").onchange = function () {
    let valueSelect = document.getElementById("select").value;
    if (valueSelect == "titre") {
        movie.sort((a, b) => a.titre.localeCompare(b.titre));
        afficher(movie);
    }
    else if (valueSelect == "réalisateur") {
        movie.sort((a, b) => a.réalisateur.localeCompare(b.réalisateur));
        afficher(movie);
    }
    else if (valueSelect == "durée") {
        movie.sort((a, b) => a.durée - b.durée);
        afficher(movie);
    }
    else if (valueSelect == "production") {
        movie.sort((a, b) => a.production - b.production);
        afficher(movie);
    }
    else if (valueSelect == "-réalisateur") {
        movie.sort((a, b) => b.réalisateur.localeCompare(a.réalisateur));
        afficher(movie);
    }
    else if (valueSelect == "-durée") {
        movie.sort((a, b) => b.durée - a.durée);
        afficher(movie);
    }
    else if (valueSelect == "-titre") {
        movie.sort((a, b) => b.titre.localeCompare(a.titre));
        afficher(movie);
    }
    else {
        afficher(movie);
    }
}
document.getElementById('cherche').onkeyup = function () {
    var value = document.getElementById('cherche').value;
    if (value == "") {
        afficher(movie);
    }
    else {
        for (var l = 0; l < value.length; l++) {
            var valuechercher = movie.filter(function (item) {
                return item.titre.toLowerCase()[l] == value.toLowerCase()[l];
            });
        }
        afficher(valuechercher);
    }
}

function afficher(movie) {
    document.querySelector("table").innerHTML = "";
    document.getElementById("movies").innerHTML = "";
    if (window.matchMedia("(max-width:500px)").matches) {
        for (var i = 0; i < movie.length; i++) {
            var dr = document.createElement("div");
            dr.className = "card container w-75 mt-4"
            var cr = document.createElement("div");
            cr.className = "card-body"
            var ur = document.createElement("ul");
            ur.className = "list-group list-group-flush"
            document.getElementById("movies").appendChild(dr);
            var rows = document.createElement("img");
            rows.src = movie[i].Poster
            rows.className = "card-img-top"
            rows.style.height = "200px";
            dr.appendChild(rows);
            dr.appendChild(cr);
            cr.appendChild(ur);
            var rows1 = document.createElement("li");
            rows1.className = "list-group-item"
            var rows2 = document.createElement("li");
            rows2.className = "list-group-item"
            var rows3 = document.createElement("li");
            rows3.className = "list-group-item"
            var rows4 = document.createElement("li");
            rows4.className = "list-group-item"
            var rows5 = document.createElement("li");
            rows5.className = "list-group-item"
            var rows6 = document.createElement("li");
            rows6.className = "list-group-item"
            var rows7 = document.createElement("li");
            rows7.className = "list-group-item"
            ur.appendChild(rows1);
            ur.appendChild(rows2);
            ur.appendChild(rows3);
            ur.appendChild(rows4);
            ur.appendChild(rows5);
            ur.appendChild(rows6);
            ur.appendChild(rows7);
            var rows8 = document.createTextNode("Titre : " + movie[i].titre);
            var rows9 = document.createTextNode("Réalisateur : " + movie[i].réalisateur);
            var rows10 = document.createTextNode("Durée : " + movie[i].durée);
            var rows11 = document.createTextNode("Date : " + movie[i].production);
            var rows13 = document.createTextNode("Festivals : " + movie[i].Festivals);
            var rows14 = document.createTextNode(movie[i].Acteurs[0].Nom + " " + movie[i].Acteurs[0].Prenom + " " + movie[i].Acteurs[0].Nationalité);
            var rows17 = document.createTextNode(movie[i].Acteurs[1].Nom + " " + movie[i].Acteurs[1].Prenom + " " + movie[i].Acteurs[1].Nationalité);
            var rows16 = document.createTextNode(movie[i].Acteurs[2].Nom + " " + movie[i].Acteurs[2].Prenom + " " + movie[i].Acteurs[2].Nationalité);
            rows1.appendChild(rows8);
            rows2.appendChild(rows9);
            rows3.appendChild(rows10);
            rows4.appendChild(rows11);
            rows5.appendChild(rows13);
            rows6.appendChild(rows14);
            rows6.appendChild(rows17)
            rows6.appendChild(rows16)
        }
    }
    else {
        var first = document.createElement("thead");
        var third = document.createElement("tbody");
        document.querySelector("table").appendChild(first);
        document.querySelector("table").appendChild(third);
        var second = document.createElement("tr");
        var row1 = document.createElement("th");
        var row2 = document.createElement("th");
        var row3 = document.createElement("th");
        var row4 = document.createElement("th");
        var row5 = document.createElement("th");
        var row6 = document.createElement("th");
        var row7 = document.createElement("th");
        var rows1 = document.createElement("td");
        var ROW1 = document.createTextNode("Poster");
        var ROW2 = document.createTextNode("Titre");
        var ROW3 = document.createTextNode("Réalisateur");
        var ROW4 = document.createTextNode("Durée");
        var ROW5 = document.createTextNode("L'année de production");
        var ROW6 = document.createTextNode("Festivals");
        var ROW7 = document.createTextNode("Acteurs");
        row1.appendChild(ROW1);
        row2.appendChild(ROW2);
        row3.appendChild(ROW3);
        row4.appendChild(ROW4);
        row5.appendChild(ROW5);
        row6.appendChild(ROW6);
        row7.appendChild(ROW7);
        second.appendChild(row1);
        second.appendChild(row2);
        second.appendChild(row3);
        second.appendChild(row4);
        second.appendChild(row5);
        second.appendChild(row6);
        second.appendChild(row7);
        first.appendChild(second);
        for (var i = 0; i < movie.length; i++) {
            var rows = document.createElement("tr");
            document.querySelector("tbody").appendChild(rows);
            var rows1 = document.createElement("td");
            var rows2 = document.createElement("td");
            var rows3 = document.createElement("td");
            var rows4 = document.createElement("td");
            var rows5 = document.createElement("td");
            var rows6 = document.createElement("td");
            var rows7 = document.createElement("td");
            var rows8 = document.createTextNode(movie[i].titre);
            var rows9 = document.createTextNode(movie[i].réalisateur);
            var rows10 = document.createTextNode(movie[i].durée);
            var rows11 = document.createTextNode(movie[i].production);
            var rows13 = document.createTextNode(movie[i].Festivals);
            var rows14 = document.createTextNode(movie[i].Acteurs[0].Nom + " " + movie[i].Acteurs[0].Prenom + " " + movie[i].Acteurs[0].Nationalité);
            var rows17 = document.createTextNode(movie[i].Acteurs[1].Nom + " " + movie[i].Acteurs[1].Prenom + " " + movie[i].Acteurs[1].Nationalité);
            var rows16 = document.createTextNode(movie[i].Acteurs[2].Nom + " " + movie[i].Acteurs[2].Prenom + " " + movie[i].Acteurs[2].Nationalité);
            var rows15 = document.createElement("img");
            var p1 = document.createElement("p");
            var p2 = document.createElement("p");
            var p3 = document.createElement("p");
            p1.appendChild(rows14);
            p2.appendChild(rows16);
            p3.appendChild(rows17);
            rows15.src = movie[i].Poster
            rows15.style.width = "150px";
            rows15.style.height = "200px";
            rows1.appendChild(rows15);
            rows2.appendChild(rows8);
            rows3.appendChild(rows9);
            rows4.appendChild(rows10);
            rows5.appendChild(rows11);
            rows6.appendChild(rows13);
            rows7.appendChild(p1);
            rows7.appendChild(p2);
            rows7.appendChild(p3);
            rows.appendChild(rows1);
            rows.appendChild(rows2);
            rows.appendChild(rows3);
            rows.appendChild(rows4);
            rows.appendChild(rows5);
            rows.appendChild(rows6);
            rows.appendChild(rows7);
        }
    };
}
