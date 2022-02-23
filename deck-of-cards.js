// 1. Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).

let newCardURL = 'http://deckofcardsapi.com/api/deck/new/draw/?count=1'

// axios.get(newCardURL)
// .then(response => {
//     const iterator = response.data.cards.values();
//     for (const item of iterator) {
//         const value = item['value']
//         const suit = item['suit']
//         console.log(`${value} of ${suit}`)
//     }
// })
// .catch(error => console.log(`Error: ${error}`));

// 2. Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck.

    // Once you have both cards, console.log the values and suits of both cards.

// axios
// .get(newCardURL)
// .then(card1 => {
//     const iterator = card1.data.cards.values();
//     for (const item of iterator) {
//         const value = item['value']
//         const suit = item['suit']
//         console.log(`${value} of ${suit} from deck: ${card1.data.deck_id}.`)
//     }
//     return axios.get(`http://deckofcardsapi.com/api/deck/${card1.data.deck_id}/draw/?count=1`)
// })
// .then(card2 => {
//     const iterator = card2.data.cards.values();
//     for (const item of iterator) {
//         const value = item['value']
//         const suit = item['suit']
//         console.log(`${value} of ${suit} from deck: ${card2.data.deck_id}.`)
//     }
// })
// .catch(error => console.log(`Error: ${error}`));


// 3. Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.

let deckId = null;
const button = document.getElementById('get-card-btn');
const ul = document.getElementById('cards');

axios
.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
.then(response => {
    deckId = response.data.deck_id;
    console.log(deckId)
})
.catch(error => console.log(`Error: ${error}`));


button.addEventListener('click', function() {
    axios
    .get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then(response => {
        const iterator = response.data.cards.values();
        for (const item of iterator) {
            const value = item['value']
            const suit = item['suit']

            const li = document.createElement('li');
            const text = `${value} of ${suit}`
            li.append(text)
            ul.prepend(li)
            console.log(`${value} of ${suit} from deck: ${response.data.deck_id}.`)
        }
    })
    .catch(error => console.log(`Error: ${error}`));
})
