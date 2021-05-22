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
  playerFour.name = document.getElementById('playerFour').value;
  playerFour.totalWins = document.getElementById('fourWins').value;
  playerFour.lds = document.getElementById('fourLds').value;
  playerFour.kps = document.getElementById('fourKps').value;

  var splitsOne = document.getElementById('splitsOne').value
  var splitsTwo = document.getElementById('splitsTwo').value
  var splitsThree = document.getElementById('splitsThree').value
  var splitsFour = document.getElementById('splitsFour').value

  var totalSplits = (parseInt(splitsOne) + parseInt(splitsTwo) + parseInt(splitsThree) + parseInt(splitsFour));
  console.log(totalSplits + " splits total");

  var splitOneTot = (parseInt(splitsOne * holeBet) - ( ((parseInt(totalSplits / 2) - parseInt(splitsOne)) * holeBet ))) ;
  var splitTwoTot = (parseInt(splitsTwo * holeBet) - ( ((parseInt(totalSplits / 2) - parseInt(splitsTwo)) * holeBet ))) ;
  var splitThreeTot = (parseInt(splitsThree * holeBet) - ( ((parseInt(totalSplits / 2) - parseInt(splitsThree)) * holeBet ))) ;
  var splitFourTot = (parseInt(splitsFour * holeBet) - ( ((parseInt(totalSplits / 2) - parseInt(splitsFour)) * holeBet ))) ;




  console.log('splitOne: ' + splitOneTot );
  console.log('splitTwo: ' + splitTwoTot );
  console.log('splitThree: ' + splitThreeTot);
  console.log('splitFour: ' + splitFourTot );


  console.log(holeBet,ldBet,kpBet);
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


  var kpPayoutOne = parseInt((playerOne.kps) * kpBet) * 3;
  var kpPayoutTwo = parseInt((playerTwo.kps) * kpBet) * 3;
  var kpPayoutThree = parseInt((playerThree.kps) * kpBet) * 3;
  var kpPayoutFour = parseInt((playerFour.kps) * kpBet) * 3;
  // console.log(kpPayoutOne + playerOne.name + 'kpwin');
  // console.log(kpPayoutTwo + playerTwo.name + 'kpwin');
  // console.log(kpPayoutThree + playerThree.name + 'kpwin');
  // console.log(kpPayoutFour + playerFour.name + 'kpwin');

  var playerOneKpTakehome =  parseInt((totalKps) - parseInt(playerOne.kps)) * kpBet;
  var playerTwoKpTakehome = parseInt((totalKps) - parseInt(playerTwo.kps)) * kpBet;
  var playerThreeKpTakehome = parseInt((totalKps) - parseInt(playerThree.kps)) * kpBet;
  var playerFourKpTakehome = parseInt((totalKps) - parseInt(playerFour.kps)) * kpBet;
  // console.log(playerOneKpTakehome + " kp loss");
  // console.log(playerTwoKpTakehome + " kp loss");
  // console.log(playerThreeKpTakehome + " kp loss");
  // console.log(playerFourKpTakehome + " kp loss");

  var playerOneKpTotal = parseInt(kpPayoutOne - playerOneKpTakehome);
  var playerTwoKpTotal = parseInt(kpPayoutTwo - playerTwoKpTakehome);
  var playerThreeKpTotal = parseInt(kpPayoutThree - playerThreeKpTakehome);
  var playerFourKpTotal = parseInt(kpPayoutFour - playerFourKpTakehome);
  // console.log(playerOneKpTotal);
  // console.log(playerTwoKpTotal);
  // console.log(playerThreeKpTotal);
  // console.log(playerFourKpTotal);

  var ldPayoutOne = parseInt((playerOne.lds) * ldBet) * 3;
  var ldPayoutTwo = parseInt((playerTwo.lds) * ldBet) * 3;
  var ldPayoutThree = parseInt((playerThree.lds) * ldBet) * 3;
  var ldPayoutFour = parseInt((playerFour.lds) * ldBet * 3);
  // console.log(ldPayoutOne + playerOne.name + "LD");
  // console.log(ldPayoutTwo + playerTwo.name + "LD");
  // console.log(ldPayoutThree + playerThree.name + "LD");
  // console.log(ldPayoutFour + playerFour.name + "LD");

  var playerOneLdLoss = parseInt((totalLds) - parseInt(playerOne.lds)) * ldBet;
  var playerTwoLdLoss = parseInt((totalLds) - parseInt(playerTwo.lds)) * ldBet;
  var playerThreeLdLoss = parseInt((totalLds) - parseInt(playerThree.lds)) * ldBet;
  var playerFourLdLoss = parseInt((totalLds) - parseInt(playerFour.lds)) * ldBet;
  // console.log(playerOneLdLoss + " ld loss");
  // console.log(playerTwoLdLoss + " ld loss");
  // console.log(playerThreeLdLoss + " ld loss");
  // console.log(playerThreeLdLoss + " ld loss");

var ldFinalOne = ldPayoutOne - playerOneLdLoss;
var ldFinalTwo = ldPayoutTwo - playerTwoLdLoss;
var ldFinalThree = ldPayoutThree - playerThreeLdLoss;
var ldFinalFour = ldPayoutFour - playerFourLdLoss;
//
// console.log(ldFinalOne);
// console.log(ldFinalTwo);
// console.log(ldFinalThree);
// console.log(ldFinalFour);

var playerOneLosses = (parseInt(totalHolesWon) - parseInt(playerOne.totalWins)) * holeBet;
var playerTwoLosses = (parseInt(totalHolesWon) - parseInt(playerTwo.totalWins)) * holeBet;
var playerThreeLosses = (parseInt(totalHolesWon) - parseInt(playerThree.totalWins)) * holeBet;
var playerFourLosses = (parseInt(totalHolesWon) - parseInt(playerFour.totalWins)) * holeBet;
// console.log(parseInt(playerOneLosses) * holeBet + " lost P1");
// console.log(parseInt(playerTwoLosses) * holeBet + " lost P2");
// console.log(parseInt(playerThreeLosses) * holeBet + " lost P3");
// console.log(parseInt(playerFourLosses) * holeBet + " lost P4");

var playerOneWins = (parseInt(playerOne.totalWins) * parseInt(holeBet)) * 3;
var playerTwoWins = (parseInt(playerTwo.totalWins) * parseInt(holeBet)) * 3;
var playerThreeWins = (parseInt(playerThree.totalWins) * parseInt(holeBet)) * 3;
var playerFourWins = (parseInt(playerFour.totalWins) * parseInt(holeBet)) * 3;
// console.log(playerOneWins + " P1won");
// console.log(playerTwoWins + " P2won");
// console.log(playerThreeWins + " P3won");
// console.log(playerFourWins + " P4won");

var playerOneKpTakehome = (parseInt(playerOne.kps) - parseInt(totalKps)) * kpBet;
var playerTwoKpTakehome = (parseInt(playerTwo.kps) - parseInt(totalKps)) * kpBet;
var playerThreeKpTakehome = (parseInt(playerThree.kps) - parseInt(totalKps)) * kpBet;
var playerFourKpTakehome = (parseInt(playerFour.kps) - parseInt(totalKps)) * kpBet;
// console.log(playerOneKpTakehome + " kp take home");
// console.log(playerTwoKpTakehome + " kp take home");
// console.log(playerThreeKpTakehome + " kp take home");
// console.log(playerFourKpTakehome + " kp take home");


var holesTotalOne = playerOneWins - playerOneLosses;
var holesTotalTwo = playerTwoWins - playerTwoLosses;
var holesTotalThree = playerThreeWins - playerThreeLosses;
var holesTotalFour = playerFourWins - playerFourLosses;
// console.log(holesTotalOne);
// console.log(holesTotalTwo);




document.getElementById('playerOneHolesTotal').innerHTML = playerOne.name +
                                '<br>' +  holesTotalOne + "$ on holes Won";
document.getElementById('playerTwoHolesTotal').innerHTML = playerTwo.name +
                                  '<br>' + holesTotalTwo + "$ on holes Won";
document.getElementById('playerThreeHolesTotal').innerHTML = playerThree.name +
                                  '<br>' + holesTotalThree + "$ on holes Won";
document.getElementById('playerFourHolesTotal').innerHTML = playerFour.name +
                                  ' <br>'+ holesTotalFour + "$ on holes Won";

document.getElementById('playerOneKpPayout').innerHTML = playerOneKpTotal + "$ on closest to";
document.getElementById('playerTwoKpPayout').innerHTML = playerTwoKpTotal + " $ on closest to";
document.getElementById('playerThreeKpPayout').innerHTML = playerThreeKpTotal + " $ on closest to";
document.getElementById('playerFourKpPayout').innerHTML = playerFourKpTotal + " $ on closest to";

document.getElementById('playerOneLdFinal').innerHTML = ldFinalOne + "$ long drive wins ";
document.getElementById('playerTwoLdFinal').innerHTML = ldFinalTwo + "$ long drive wins ";
document.getElementById('playerThreeLdFinal').innerHTML = ldFinalThree + "$ long drive wins ";
document.getElementById('playerFourLdFinal').innerHTML = ldFinalFour + "$ long drive wins ";

document.getElementById('playerOneSplits').innerHTML = splitOneTot + "$ splits money";
document.getElementById('playerTwoSplits').innerHTML = splitTwoTot + "$ splits money";
document.getElementById('playerThreeSplits').innerHTML = splitThreeTot + "$ splits money";
document.getElementById('playerFourSplits').innerHTML = splitFourTot + "$ splits money";

document.getElementById('playerOneCash').innerHTML = parseInt(holesTotalOne + playerOneKpTotal
                                                    + ldFinalOne + splitOneTot) + "$ net total cash!"
document.getElementById('playerTwoCash').innerHTML = parseInt(holesTotalTwo + playerTwoKpTotal
                                                    + ldFinalTwo + splitTwoTot) + "$ net total cash!"
document.getElementById('playerThreeCash').innerHTML = parseInt(holesTotalThree + playerThreeKpTotal
                                                    + ldFinalThree + splitThreeTot) + "$ net total cash!"
document.getElementById('playerFourCash').innerHTML = parseInt(holesTotalFour + playerFourKpTotal
                                                    + ldFinalFour + splitFourTot) + "$ net total cash!"






}

function setUpEventListeners() {
  document.getElementById('btn').addEventListener("click", submit);
}
