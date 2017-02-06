"use strict";
//Choose which dice to roll. Your opponent will randomly select one of his.
//Highest roll wins. Whoever loses that roll loses that dice.
//Whoever runs out of dice first loses the game.

function playerRollDice(playerSelection){
	return Math.floor(Math.random() * playerSelection + 1)
}

function computerRollDice(computerSelection){
	return Math.floor(Math.random() * computerSelection + 1)
}

function playRound(playerSelection, playerRoll, computerSelection, computerRoll){
		
		alert ("Player rolled: " + playerRoll + " Computer rolled: " + computerRoll);
		
		if  (playerRoll > computerRoll) 
	{
		
		alert("Player wins and the computer loses the following die: " + computerSelection);

	}

		else if  (playerRoll < computerRoll) 

	{

		alert("Computer wins and the player loses the following die: " + playerSelection);
	}
		else if (computerRoll === playerRoll) 
	{
		alert ("Player and computer roll a tie and will both lose a die: Computer die lost: " + computerSelection);
		alert("Player die lost: " + playerSelection);
	}
}

function removeChoice(dicePlayer, diceComputer, player, computer, playerScore, computerScore){
		if(playerScore < computerScore)
		{
		var indexPlayer = dicePlayer.indexOf(player);
		dicePlayer.splice(indexPlayer, 1);	
		}
		else if(playerScore > computerScore)
		{
		var indexComputer = diceComputer.indexOf(computer);
		diceComputer.splice(indexComputer, 1);
		}

		else if(playerScore === computerScore){
		var indexPlayer = dicePlayer.indexOf(player);
		dicePlayer.splice(indexPlayer, 1);
		var indexComputer = diceComputer.indexOf(computer);
		diceComputer.splice(indexComputer, 1);
		}

}

function loopGame (){
	 var availablePlayerDice = ["4", "6", "8", "10", "12", "20"];
	 var availableComputerDice = ["4", "6", "8", "10", "12", "20"];

	while (availablePlayerDice.length > 0 && availableComputerDice.length > 0){
		var player = playerTurn(availablePlayerDice, availableComputerDice);
		var computer = computerTurn(availableComputerDice);
		var playerScore = playerRollDice(player);
		var computerScore = computerRollDice(computer);
		playRound(player, playerScore, computer, computerScore);
		removeChoice(availablePlayerDice, availableComputerDice, player, computer, playerScore, computerScore);
		if (availablePlayerDice.length === 0){
			alert("You lose chump, take a hike");
		}
		else if (availableComputerDice.length === 0){
			alert("You dominated, way to go have a beer on me");
		}
		else if (availablePlayerDice.length === 0 && availableComputerDice === 0){
			alert("You tied the computer, how about that")
		}
	}

}

function playerTurn(availablePlayerDice, availableComputerDice){
	var playerSelection = prompt("Select from the following: " + availablePlayerDice +" sided dice. Type the number. Your opponent will randomly select a dice. Whoever loses the round loses that dice. First to lose all dice loses the game. Computer remaining dice: " + availableComputerDice);
	if(availablePlayerDice.includes(playerSelection)){
		return playerSelection;
	}
	else {
		alert("Incorrect input. Type the number of an available die")
		return playerTurn(availablePlayerDice, availableComputerDice);
	}

}


function computerTurn(availableComputerDice){
	 
	var computerSelection = availableComputerDice[Math.floor(Math.random() * availableComputerDice.length)];	
	if (availableComputerDice.includes(computerSelection)){
		return computerSelection;
	}
}

loopGame();
