const searchbarDiv = document.querySelector('.search__div');
const pagesContainer = document.querySelector('.pages__container');
const navbarContainer = document.querySelector('.navbar__container');
const backButton = document.querySelector('.backbutton');

function insertASearchBar() {
    navbarContainer.style.justifyContent = "stretch";
    console.log(navbarContainer.style.justifyContent);
    pagesContainer.style.display = "none";
    backButton.style.display = "flex";
    navbarContainer.style.gridTemplateColumns = "max-content auto  0px max-content";
    searchbarDiv.style.gridColumn = "2";
    searchbarDiv.style.display = "flex";
    searchbarDiv.style.width = "100%";
};

function openPagesContainer() {
    pagesContainer.style.display = "flex";
    searchbarDiv.style.display = "none";
    backButton.style.display = "none";
    navbarContainer.style.justifyContent = "space-between";
    navbarContainer.style.gridTemplateColumns = "max-content max-content max-content";
};

// --------------------------------------------------------------
// SEARCH BAR FUNCTIONALITY

let userAnswer = "";
const searchResultsContainer = document.querySelector('.search__results__container');

const matrixCaps = document.querySelector('.matrix__caps__div');
const tupleCaps = document.querySelector('.tuple__caps__div');
const hashCaps = document.querySelector('.hash__caps__div');

function addProducts(userSearch) {

    console.log("User search is: ", userSearch);

    switch (userSearch) {
        case 'Matrix Caps':
        case 'matrix caps':
            matrixCaps.style.display = "flex";
            break;
        case 'Tuple Caps':
            tupleCaps.style.display = "flex";
            break;
        case 'Hash Caps':
            hashCaps.style.display = "flex";
            break;

        default: 
            matrixCaps.style.display = "none";
            tupleCaps.style.display = "none";
            hashCaps.style.display = "none";

    }

}

function bringToSearchPage() {
    location.replace("/Websites/Website 3/search.html");
}

const searchInput = document.querySelector('.search__input');
let searchValue = document.querySelector('.search__input');
console.log(searchValue);

searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        searchValue = document.querySelector('.search__input').value;
        console.log("The value when enter was pressed is: ", searchValue);
        userAnswer = searchValue;
        if (location.pathname !== "/Websites/Website%203/search.html") {
            bringToSearchPage();
        }
        console.log("User Answer is: ", userAnswer);
        addProducts(userAnswer);
    }
});



const bigSearchInput = document.querySelector('.big__search__input');
let bigSearchValue = document.querySelector('.big__search__input');
console.log(bigSearchValue);

bigSearchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        bigSearchValue = document.querySelector('.big__search__input').value;
        console.log("The value when enter was pressed is: ", bigSearchValue);
        alert(bigSearchValue);
        bringToSearchPage(bigSearchValue);
        bigSearchInput.value = "";
    }
});




// ----------------------------------------------------------------
// ENLARGING IMAGES

// const productImages = document.querySelector('.product__img');
const productImage1 = document.querySelector('#p__img1');
const productImage2 = document.querySelector('#p__img2');
const productImage3 = document.querySelector('#p__img3');


// function getId(item) {
//     let itemClass = item.style.class;
//     const id = document.querySelector(`#${itemClass}`);
//     return id;
// }

function makeThingBigger(thing) {

    if (thing.hasAttribute("position") === true) {

        thing.style.position = "absolute";
        console.log(thing.hasAttribute("position"));

    } else if (thing.hasAttribute("position") === false) {

        thing.setAttribute("position", "absolute");

        if (thing.hasAttribute("position") === true) {
            console.log(thing.hasAttribute("It worked i guess"));
        }

        console.log(thing.hasAttribute("position"));

    }   else {
        console.log(thing.hasAttribute("position"));
    }

    thing.style.width = "150%";
    thing.style.height = "150%";

    if ((thing.style.width === "150%") && (thing.style.height === "150%")) {
        thing.style.width = "100%";
        thing.style.height = "100%"
    }

};









