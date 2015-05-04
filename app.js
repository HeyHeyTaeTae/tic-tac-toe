// wait for the DOM to finish loading
window.addEventListener('DOMContentLoaded', function () {
  // all your code should go in here.

  var currentPlayer = '<img src="X.png">';

  var allBoxes = document.querySelectorAll('.box');
  
  var resetButton = document.getElementById('refresh');
    
  var switchPlayer = function() {
    //is currentPlayer X?
    if(currentPlayer === '<img src="X.png">') {
    // change currentPlayer to O
      currentPlayer = '<img src="O.jpg">';
    } else {
    // change currentPlayer to X
      currentPlayer = '<img src="X.png">';
    }
  }
  var handleClick = function(indexHolder) {
    //if this space is empty
    if(indexHolder.innerHTML === '&nbsp;') { 
      //set this spot to currentPlayer
      indexHolder.innerHTML = currentPlayer;
      //switch to other player
      switchPlayer();
    }
  }   

  var rewindGame = function() {
    for(var i =0; i < allBoxes.length; i++) {

      allBoxes[i].innerHTML = '&nbsp;';

    }
  }

  for(var i = 0; i < allBoxes.length; i++) {
    document.getElementById('box'+i).addEventListener('click', function(event) {
      handleClick(this);   
    });
  }

  resetButton.addEventListener('click', function(event) {
    rewindGame();
  })
});