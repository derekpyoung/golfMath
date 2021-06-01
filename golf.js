var holeBet = document.getElementById('perHole').value;
var ldBet = document.getElementById('longestCost').value;
var kpBet = document.getElementById('closestCost').value;
var holes = 18;




function submit() {

  var holeBet = document.getElementById('perHole').value;
  var ldBet = document.getElementById('longestCost').value;
  var kpBet = document.getElementById('closestCost').value;

  var playerOne = {};
  playerOne.name = document.getElementById('playerOne').value;
  playerOne.totalWins = document.getElementById('oneWins').value;
  playerOne.lds = document.getElementById('oneLds').value;
  playerOne.kps = document.getElementById('oneKps').value;


  var playerTwo = {};
  playerTwo.name = document.getElementById('playerTwo').value;
  playerTwo.totalWins = document.getElementById('twoWins').value;
  playerTwo.lds = document.getElementById('twoLds').value;
  playerTwo.kps = document.getElementById('twoKps').value;

  var playerThree = {};
  playerThree.name = document.getElementById('playerThree').value;
  playerThree.totalWins = document.getElementById('threeWins').value;
  playerThree.lds = document.getElementById('threeLds').value;
  playerThree.kps = document.getElementById('threeKps').value;

  var playerFour = {};
  playerFour.name = document.getElementById('playerFour').value ;
  playerFour.totalWins = document.getElementById('fourWins').value || 0;
  playerFour.lds = document.getElementById('fourLds').value || 0;
  playerFour.kps = document.getElementById('fourKps').value || 0;

  var splitsOne = document.getElementById('splitsOne').value;
  var splitsTwo = document.getElementById('splitsTwo').value;
  var splitsThree = document.getElementById('splitsThree').value;
  var splitsFour = document.getElementById('splitsFour').value;

  var totalSplits = (parseInt(splitsOne) + parseInt(splitsTwo) + parseInt(splitsThree) + parseInt(splitsFour || 0));
  console.log(totalSplits + " splits total");

  var splitOneTot = (parseInt(splitsOne * holeBet) - ( ((parseInt(totalSplits / 2) - parseInt(splitsOne)) * holeBet )|| 0)) ;
  var splitTwoTot = (parseInt(splitsTwo * holeBet) - ( ((parseInt(totalSplits / 2) - parseInt(splitsTwo)) * holeBet )|| 0)) ;
  var splitThreeTot = (parseInt(splitsThree * holeBet) - ( ((parseInt(totalSplits / 2) - parseInt(splitsThree)) * holeBet )|| 0)) ;
  var splitFourTot = (parseInt(splitsFour * holeBet) - ( ((parseInt(totalSplits / 2) - parseInt(splitsFour)) * holeBet ) || 0));




  console.log('splitOne: ' + splitOneTot );
  console.log('splitTwo: ' + splitTwoTot );
  console.log('splitThree: ' + splitThreeTot);
  console.log('splitFour: ' + splitFourTot );


  console.log(holeBet,ldBet,kpBet);
  console.log(playerNumber);
  console.log(playerOne);
  console.log(playerTwo);
  console.log(playerThree);
  console.log(playerFour);

  var totalHolesWon = parseInt(playerOne.totalWins) + parseInt(playerTwo.totalWins) +
                          parseInt(playerThree.totalWins) + parseInt(playerFour.totalWins);
                          console.log(totalHolesWon + " total holes won");

  var totalKps = parseInt(playerOne.kps) + parseInt(playerTwo.kps) + parseInt(playerThree.kps)
                  + parseInt(playerFour.kps)
                  console.log(totalKps + " total Kps won");

  var totalLds = parseInt(playerOne.lds) + parseInt(playerTwo.lds) + parseInt(playerThree.lds)
                  + parseInt(playerFour.lds)
                  console.log(totalLds + " total LDs won");


  var kpPayoutOne = parseInt((playerOne.kps) * kpBet) * parseInt(playerNumber - 1);
  var kpPayoutTwo = parseInt((playerTwo.kps) * kpBet) * parseInt(playerNumber - 1);
  var kpPayoutThree = parseInt((playerThree.kps) * kpBet) * parseInt(playerNumber - 1);
  var kpPayoutFour = parseInt((playerFour.kps) * kpBet) * parseInt(playerNumber - 1);
  console.log(kpPayoutOne + playerOne.name + ' kpwin');
  console.log(kpPayoutTwo + playerTwo.name + ' kpwin');
  console.log(kpPayoutThree + playerThree.name + ' kpwin');
  console.log(kpPayoutFour + playerFour.name + ' kpwin');

  var playerOneKpTakehome =  parseInt((totalKps) - parseInt(playerOne.kps)) * kpBet;
  var playerTwoKpTakehome = parseInt((totalKps) - parseInt(playerTwo.kps)) * kpBet;
  var playerThreeKpTakehome = parseInt((totalKps) - parseInt(playerThree.kps)) * kpBet;
  var playerFourKpTakehome = parseInt((totalKps) - parseInt(playerFour.kps)) * kpBet;
  console.log(playerOneKpTakehome + " kp loss");
  console.log(playerTwoKpTakehome + " kp loss");
  console.log(playerThreeKpTakehome + " kp loss");
  console.log(playerFourKpTakehome + " kp loss");

  var playerOneKpTotal = parseInt(kpPayoutOne - playerOneKpTakehome);
  var playerTwoKpTotal = parseInt(kpPayoutTwo - playerTwoKpTakehome);
  var playerThreeKpTotal = parseInt(kpPayoutThree - playerThreeKpTakehome);
  var playerFourKpTotal = parseInt(kpPayoutFour - playerFourKpTakehome);
  console.log("PlayerOneKpTotal: " + playerOneKpTotal);
  console.log("PlayerOneKpTotal: " + playerTwoKpTotal);
  console.log("PlayerOneKpTotal: " + playerThreeKpTotal);
  console.log("PlayerOneKpTotal: " + playerFourKpTotal);

  var ldPayoutOne = parseInt((playerOne.lds) * ldBet) * parseInt(playerNumber - 1);
  var ldPayoutTwo = parseInt((playerTwo.lds) * ldBet) * parseInt(playerNumber - 1);
  var ldPayoutThree = parseInt((playerThree.lds) * ldBet) * parseInt(playerNumber - 1);
  var ldPayoutFour = parseInt((playerFour.lds) * ldBet * parseInt(playerNumber - 1));
  console.log(ldPayoutOne + playerOne.name + " LD");
  console.log(ldPayoutTwo + playerTwo.name + " LD");
  console.log(ldPayoutThree + playerThree.name + " LD");
  console.log(ldPayoutFour + playerFour.name + " LD");

  var playerOneLdLoss = parseInt((totalLds) - parseInt(playerOne.lds)) * ldBet;
  var playerTwoLdLoss = parseInt((totalLds) - parseInt(playerTwo.lds)) * ldBet;
  var playerThreeLdLoss = parseInt((totalLds) - parseInt(playerThree.lds)) * ldBet;
  var playerFourLdLoss = parseInt((totalLds) - parseInt(playerFour.lds)) * ldBet;
  console.log(playerOneLdLoss + " ld loss");
  console.log(playerTwoLdLoss + " ld loss");
  console.log(playerThreeLdLoss + " ld loss");
  console.log(playerThreeLdLoss + " ld loss");

var ldFinalOne = ldPayoutOne - playerOneLdLoss;
var ldFinalTwo = ldPayoutTwo - playerTwoLdLoss;
var ldFinalThree = ldPayoutThree - playerThreeLdLoss;
var ldFinalFour = ldPayoutFour - playerFourLdLoss;
//
console.log("LD Final: " + ldFinalOne);
console.log("LD Final: " + ldFinalTwo);
console.log("LD Final: " + ldFinalThree);
console.log("LD Final: " + ldFinalFour);

var playerOneLosses = (parseInt(totalHolesWon) - parseInt(playerOne.totalWins)) * holeBet;
var playerTwoLosses = (parseInt(totalHolesWon) - parseInt(playerTwo.totalWins)) * holeBet;
var playerThreeLosses = (parseInt(totalHolesWon) - parseInt(playerThree.totalWins)) * holeBet;
var playerFourLosses = (parseInt(totalHolesWon) - parseInt(playerFour.totalWins)) * holeBet || 0;
console.log(parseInt(playerOneLosses) * holeBet + " lost P1 Hole bets");
console.log(parseInt(playerTwoLosses) * holeBet + " lost P2");
console.log(parseInt(playerThreeLosses) * holeBet + " lost P3");
console.log(parseInt(playerFourLosses) * holeBet + " lost P4");

var playerOneWins = (parseInt(playerOne.totalWins) * parseInt(holeBet)) * parseInt(playerNumber - 1);
var playerTwoWins = (parseInt(playerTwo.totalWins) * parseInt(holeBet)) * parseInt(playerNumber - 1);
var playerThreeWins = (parseInt(playerThree.totalWins) * parseInt(holeBet)) * parseInt(playerNumber - 1);
var playerFourWins = (parseInt(playerFour.totalWins) * parseInt(holeBet)) * parseInt(playerNumber - 1) || 0;
console.log(playerOneWins + " P1won");
console.log(playerTwoWins + " P2won");
console.log(playerThreeWins + " P3won");
console.log(playerFourWins + " P4won");

var playerOneKpTakehome = (parseInt(playerOne.kps) - parseInt(totalKps)) * kpBet;
var playerTwoKpTakehome = (parseInt(playerTwo.kps) - parseInt(totalKps)) * kpBet;
var playerThreeKpTakehome = (parseInt(playerThree.kps) - parseInt(totalKps)) * kpBet;
var playerFourKpTakehome = (parseInt(playerFour.kps) - parseInt(totalKps)) * kpBet;
console.log(playerOneKpTakehome + " kp take home");
console.log(playerTwoKpTakehome + " kp take home");
console.log(playerThreeKpTakehome + " kp take home");
console.log(playerFourKpTakehome + " kp take home");


var holesTotalOne = playerOneWins - playerOneLosses;
var holesTotalTwo = playerTwoWins - playerTwoLosses;
var holesTotalThree = playerThreeWins - playerThreeLosses;
var holesTotalFour = playerFourWins - playerFourLosses || 0;
console.log("holes total: " + holesTotalOne);
console.log("holes total: " + holesTotalTwo);




document.getElementById('playerOneHolesTotal').innerHTML = holesTotalOne + "$";
document.getElementById('playerTwoHolesTotal').innerHTML = holesTotalTwo + "$ ";
document.getElementById('playerThreeHolesTotal').innerHTML = holesTotalThree + "$";
document.getElementById('playerFourHolesTotal').innerHTML = holesTotalFour + "$";

document.getElementById('playerOneKpPayout').innerHTML = playerOneKpTotal + "$";
document.getElementById('playerTwoKpPayout').innerHTML = playerTwoKpTotal + "$";
document.getElementById('playerThreeKpPayout').innerHTML = playerThreeKpTotal + "$";
document.getElementById('playerFourKpPayout').innerHTML = playerFourKpTotal + "$" ;

document.getElementById('playerOneLdFinal').innerHTML = ldFinalOne + "$";
document.getElementById('playerTwoLdFinal').innerHTML = ldFinalTwo + "$";
document.getElementById('playerThreeLdFinal').innerHTML = ldFinalThree + "$";
document.getElementById('playerFourLdFinal').innerHTML = ldFinalFour + "$" ;

document.getElementById('playerOneSplits').innerHTML = splitOneTot + "$";
document.getElementById('playerTwoSplits').innerHTML = splitTwoTot + "$";
document.getElementById('playerThreeSplits').innerHTML = splitThreeTot + "$";
document.getElementById('playerFourSplits').innerHTML = splitFourTot + "$";

document.getElementById('playerOneCash').innerHTML = parseInt(holesTotalOne + playerOneKpTotal
                                                    + ldFinalOne + splitOneTot ) + "$ net total!";
document.getElementById('playerTwoCash').innerHTML = parseInt(holesTotalTwo + playerTwoKpTotal
                                                    + ldFinalTwo + splitTwoTot ) + "$ net total!";
document.getElementById('playerThreeCash').innerHTML = parseInt(holesTotalThree + playerThreeKpTotal
                                                    + ldFinalThree + splitThreeTot ) + "$ net total!";
document.getElementById('playerFourCash').innerHTML = parseInt(holesTotalFour + playerFourKpTotal
                                                    + ldFinalFour + splitFourTot) + "$ net total!" ;

document.getElementById('playerOneName').innerHTML = playerOne.name;
document.getElementById('playerTwoName').innerHTML = playerTwo.name;
document.getElementById('playerThreeName').innerHTML = playerThree.name;
document.getElementById('playerFourName').innerHTML = playerFour.name ;

 if(playerNumber < 4){
   document.getElementById('playerFourCash').innerHTML = "";
   document.getElementById('playerFourLdFinal').innerHTML = "";
   document.getElementById('playerFourKpPayout').innerHTML = "";
   document.getElementById('playerFourHolesTotal').innerHTML = "";
   
   document.getElementById('playerOneSplits').innerHTML = "";
   document.getElementById('playerTwoSplits').innerHTML = "";
   document.getElementById('playerThreeSplits').innerHTML = "";
   document.getElementById('playerFourSplits').innerHTML = "";
 }



}

function save(){

  playerOne.name = document.getElementById('playerOne').value;
  playerTwo.name = document.getElementById('playerTwo').value;
  playerThree.name = document.getElementById('playerThree').value;
  playerFour.name = document.getElementById('playerFour').value ;



document.getElementById('oneWinsName').innerHTML = " " + playerOne.name;
document.getElementById('oneLdsName').innerHTML = " " + playerOne.name;
document.getElementById('oneKpsName').innerHTML = " " + playerOne.name;
document.getElementById('oneSplitsName').innerHTML = " " + playerOne.name;

document.getElementById('twoWinsName').innerHTML = " " + playerTwo.name;
document.getElementById('twoLdsName').innerHTML = " " + playerTwo.name;
document.getElementById('twoKpsName').innerHTML = " " + playerTwo.name;
document.getElementById('twoSplitsName').innerHTML = " " + playerTwo.name;

document.getElementById('threeWinsName').innerHTML = " " + playerThree.name;
document.getElementById('threeLdsName').innerHTML = " " + playerThree.name;
document.getElementById('threeKpsName').innerHTML = " " + playerThree.name;
document.getElementById('threeSplitsName').innerHTML = " " + playerThree.name;

document.getElementById('fourWinsName').innerHTML = " " + playerFour.name;
document.getElementById('fourLdsName').innerHTML = " " + playerFour.name;
document.getElementById('fourKpsName').innerHTML = " " + playerFour.name;
document.getElementById('fourSplitsName').innerHTML = " " + playerFour.name;
toggleDisabled();



}

var playerNumber = 0;
function toggleDisabled(poop){

      if(!poop && document.getElementById('playerOne').name.length > 0) {
        playerNumber = playerNumber + 1;
        document.getElementById('oneWins').removeAttribute("disabled");
        document.getElementById('oneLds').removeAttribute("disabled");
        document.getElementById('oneKps').removeAttribute("disabled")
        //
      } if (!poop && document.getElementById('playerTwo').name.length > 0) {
        playerNumber = playerNumber + 1;
        document.getElementById('twoWins').removeAttribute("disabled");
        document.getElementById('twoLds').removeAttribute("disabled");
        document.getElementById('twoKps').removeAttribute("disabled")
        //
      } if (!poop && document.getElementById('playerThree').name.length > 0) {
        playerNumber = playerNumber + 1;
        document.getElementById('threeWins').removeAttribute("disabled");
        document.getElementById('threeLds').removeAttribute("disabled");
        document.getElementById('threeKps').removeAttribute("disabled")
      //
      } if (!poop && document.getElementById('playerFour').name.length > 0) {
        playerNumber = playerNumber + 1;
        document.getElementById('fourWins').removeAttribute("disabled");
        document.getElementById('fourLds').removeAttribute("disabled");
        document.getElementById('fourKps').removeAttribute("disabled")

    } if (playerNumber > 3) {
      document.getElementById('splitsOne').removeAttribute("disabled")
      document.getElementById('splitsTwo').removeAttribute("disabled")
      document.getElementById('splitsThree').removeAttribute("disabled")
      document.getElementById('splitsFour').removeAttribute("disabled")
    }

      return playerNumber;
      console.log("playerNumber: " + playerNumber);
  }



function setUpEventListeners() {
  document.getElementById('btn').addEventListener("click", submit);
}
