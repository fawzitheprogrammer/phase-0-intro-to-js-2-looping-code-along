// Code your solutions in this file
// writeCards function
function writeCards(names, event) {
    const thankYouCards = [];
    for (let i = 0; i < names.length; i++) {
      thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards;
  }
  
  // countDown function
  function countDown(startNumber) {
    while (startNumber >= 0) {
      console.log(startNumber);
      startNumber--;
    }
  }
  