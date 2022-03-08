const cards = ["Guadalupe", "Ollie", "Aki"];
const event = 'suprise';

function writeCards(cards, event) {
    for (let i = 0; i < cards.length; i++) {
        cards[i] = `Thank you, ${cards[i]}, for the wonderful ${event} gift!`
    }
    return cards;
}

function countDown(number){
    let i = number;
    while (i >= 0) {
        console.log (i);
        i--;
    }
    return number;
}