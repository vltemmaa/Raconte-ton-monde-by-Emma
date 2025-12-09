// Bouton retour en arrière
function retour() {
    window.history.back();
}

// Menu actif
const liens = document.querySelectorAll("nav a");
liens.forEach(lien => {
    if (lien.href === window.location.href) {
        lien.style.color = "#ff7b00";
    }
});
