const monFormulaire = document.getElementById('monFormulaire');

monFormulaire.addEventListener('submit', function(event) {
    event.preventDefault();

    const nom = document.getElementById('nom');
    const email = document.getElementById('email');
    const age = document.getElementById('age');
    const zoneErreur = document.getElementById('zoneErreur');

    let erreurs = [];
    zoneErreur.innerHTML = "";
    
    nom.style.border = "1px solid #ccc";
    email.style.border = "1px solid #ccc";
    age.style.border = "1px solid #ccc";

    if (nom.value.trim() === "") {
        erreurs.push("Le nom est obligatoire.");
        nom.style.border = "2px solid red";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        erreurs.push("L'email n'est pas valide.");
        email.style.border = "2px solid red";
    }

    if (age.value === "" || parseInt(age.value) < 18) {
        erreurs.push("Vous devez avoir au moins 18 ans.");
        age.style.border = "2px solid red";
    }

    if (erreurs.length > 0) {
        zoneErreur.innerHTML = erreurs.join("<br>");
    } else {
        alert("Bravo ! Formulaire validé et envoyé.");
    }
});
