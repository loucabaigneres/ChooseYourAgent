//Commande servant à transformer le texte du h1 "#title" en majuscule
const title = document.querySelector("#title");

title.innerHTML = title.innerHTML.toUpperCase();


//Commande servant à créer un span entre les lettres du h1 "#nav_title"
const navTitle = document.querySelector("#nav_title");
const navTitleText = navTitle.innerHTML;
const navTitleLetters = navTitleText.split(""); // ["V", "A", "L" ...]
navTitle.innerHTML = "";


//Commande servant à intégrer le span entre chaque lettre du h1 "#nav_title", puis à changer la couleur des lettres quand la souris passe au dessus
navTitleLetters.forEach((navTitleLetter) => {
    const span = document.createElement("span"); // <span></span>
    span.innerHTML = navTitleLetter; // <span>V</span>
    navTitle.appendChild(span);

    span.addEventListener("mouseover", () => {
        span.style.color = "#f2a964";
    });

    span.addEventListener("mouseout", () => {
        span.style.color = "";
    });
});


//Commande servant à faire flotter les cartes de haut en bas, mais avec un décalage, pour créer un effet de vague
const floatingCards = document.querySelectorAll("#agents img");

floatingCards.forEach((floatingCard) => {
    floatingCard.classList.remove("floating");
});

for (
    let floatingIndex = 0; // Definition
    floatingIndex < floatingCards.length; // Condition
    floatingIndex++ // Iterateur
) {
    setTimeout(() => {
        floatingCards[floatingIndex].classList.add("floating");
    }, floatingIndex * 200);
};