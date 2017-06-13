/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
function handValue (hand) {
  var totalSum = 0;
  var numOfAce = 0;
    for(var i=0; i<hand.length; i++){
      switch(hand[i]){
        case 'J':
        case 'Q':
        case 'K':
        totalSum= totalSum+10;
        break
        case 'A':
        numOfAce = numOfAce + 1
        break
        default:
        totalSum= totalSum+ parseInt(hand[i])
        break

      }

    }
    for(var j=0; j<numOfAce; j++){
      if(totalSum <=10){
        totalSum= totalSum + 11
      }else{
        totalSum= totalSum+1
      }
    }

 return totalSum
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
