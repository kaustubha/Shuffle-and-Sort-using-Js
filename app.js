var numData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var shuffleButton = document.querySelector('.shuffle-cards');
var sortCardsButton = document.querySelector('.sort-cards');
//  Fetch data from array
numData.forEach(fetchData);
function fetchData(item, index) {
    document.querySelector('.cards-grid').innerHTML += '<div class="card" data-card="' + item + '">' + item + '</div>';
}
// shuffling array
function shuffleArray(targetArray) {
    var cardItem = targetArray.length, temp, index;
    while (cardItem > 0) {
        index = Math.floor(Math.random() * cardItem);
        cardItem--;
        temp = targetArray[cardItem];
        targetArray[cardItem] = targetArray[index];
        targetArray[index] = temp;
    }
    return targetArray;
}
// Suffle on click
shuffleButton.addEventListener('click', function () {
    shuffleArray(numData);
    document.querySelector('.cards-grid').innerHTML = "";
    numData.forEach(fetchData);
});
// Sort on click
sortCardsButton.addEventListener('click', function () {
    numData.sort();
    document.querySelector('.cards-grid').innerHTML = "";
    numData.forEach(fetchData);
});