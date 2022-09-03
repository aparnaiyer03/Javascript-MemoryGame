const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.jpeg'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseBurger.jpeg'
    },
    {
        name: 'hotdog',
        img: 'images/hotdo.jpeg'
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpeg'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.jpeg'
    },
    {
        name: 'icecream',
        img: 'images/icecream.jpeg'
    },
    {
        name: 'fries',
        img: 'images/fries.jpeg'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseBurger.jpeg'
    },
    {
        name: 'hotdog',
        img: 'images/hotdo.jpeg'
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpeg'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.jpeg'
    },
    {
        name: 'icecream',
        img: 'images/icecream.jpeg'
    }
]
//shuffle array randomly
cardArray.sort(()=>0.5-Math.random())
console.log(cardArray)
const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardChosen = []
let cardChosenIds = []
let cardsWon = []


//create the board
function createBoard(){
for (i=0;i<cardArray.length;i++){
    const card = document.createElement('img')
    card.setAttribute('data-id',i)
    card.setAttribute('src','images/blank.png')
    card.addEventListener('click',flipcard)
    gridDisplay.appendChild(card)
}
}
createBoard()

//following function checks for a match! 
function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardChosenIds[0]
    const optionTwoId = cardChosenIds[1]

    console.log("Cards, ",cards)
    if (optionOneId ==optionTwoId ){
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert("you have clicked the same image !")
    }
    else if (cardChosen[0]==cardChosen[1] ){
        alert("you found a match!")
        cards[optionOneId].setAttribute('src','images/white.png')
        cards[optionTwoId].setAttribute('src','images/white.png')
        cards[optionOneId].removeEventListener('click',flipcard)
        cards[optionTwoId].removeEventListener('click',flipcard)
        cardsWon.push(cardChosen)
    }else{
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert("sorry, try again!")
    }
    //changing the color of the chosen items to white
    resultDisplay.textContent = cardsWon.length
    cardChosen = []
    cardChosenIds = [] 
    if (cardsWon.length == cardArray.length/2){
        resultDisplay.textContent("Congratulations!")
    }

} 
//FUNCTION FLIP CARD

function flipcard(){
const cardId = this.getAttribute('data-id')
cardChosen.push(cardArray[cardId].name)
cardChosenIds.push(cardId )
this.setAttribute('src',cardArray[cardId].img)
    if (cardChosen.length === 2){
        setTimeout(checkMatch,500)
    }
}

flipcard()



