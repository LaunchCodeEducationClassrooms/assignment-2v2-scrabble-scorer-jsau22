const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
  let totalPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
       totalPoints += Number(pointValue);
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return totalPoints + "\n" + letterPoints;
 }

function simpleScore(word) {
  let simpleScore = word.length;
  return simpleScore;
}

let bonusScore = 0;
let vowels = ["A", "E", "I", "O", "U"];

function vowelBonusScore(word) {
  word = word.toUpperCase();
  for (i=0; i<word.length; i++) {
    if (vowels.includes(word[i])) {
      bonusScore += 3;
    } else {
      bonusScore += 1;
    };
  };
  return bonusScore;
}

function initialPrompt() {
   console.log("Let's play some scrabble!\n\n");
   
   let word = input.question("Enter a word to score: ");

   return word
};

function scrabbleScore(word) {
  word = word.toLowerCase();
  points = 0
  for (i=0; i<word.length; i++) {
    points += Number(newPointStructure[word[i]])
  }
  return points; 
}

let scrabbleScoreObject = {
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scoreFunction: scrabbleScore
};

let simpleScoreObject = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scoreFunction: simpleScore
};

let vowelBonusScoreObject = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoreFunction: vowelBonusScore
};

const scoringAlgorithms = [simpleScoreObject,
vowelBonusScoreObject, scrabbleScoreObject];

function scorerPrompt(word) {
  console.log("Which scoring algorithm would you like to use?\n\n" + "0 - Simple: One point per character\n" + "1 - Vowel Bonus: Vowels are worth 3 points\n" + "2 - Scrable: Uses scrabble point system");
  
  let method = input.question("Enter 0, 1, or 2: ");
  console.log(`Score for '${word}': `, scoringAlgorithms[method].scoreFunction(word));
}

function transform(object) {
  let transformed = {};
  for (item in object) {
    for (i=0; i<object[item].length; i++) {
      transformed[object[item][i].toLowerCase()] = item;
    }
  }
  return transformed;
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   let word = initialPrompt();
   scorerPrompt(word);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

