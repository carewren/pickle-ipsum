// Code that generates the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();

// Constructor function that creates an object with the sentences property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [
      "Nobody exists on purpose. Nobody belongs anywhere. We're all going to die. Come watch TV.",
      "It hits hard, Morty, then it slowly fades, leaving you stranded in a failing marriage.",
      "Break the cycle, Morty. Rise above. Focus on science.",
      "Weddings are basically funerals with cake.",
      "All right, all right, cool it! I see what's happening here. You're both young, you're both unsure about your place in the universe, and you both want to be Grandpa's favorite. I can fix this.",
      "You have to understand that as far as Grandpa's concerned, you're both pieces of shit!",
      "I can prove it mathematically. Actually, l-l-let me grab my whiteboard. This has been a long time coming.",
      "It's like the N word and the C word had a baby and it was raised by all the bad words for Jews.",
     "What about the reality where Hitler cured cancer, Morty? The answer is: Don't think about it.",
     "I dunno, some people would pay top dollar for that kind of breakthrough.",
     "You're young, you have your whole life ahead of you, and your anal cavity is still taut yet malleable.",
     "You're missing the point Morty. Why would he drive a smaller toaster with wheels?",
     "I mean, why would a Pop-Tart want to live inside a toaster, Rick? I mean, that would be like the scariest place for them to live.",
      "I turned myself into a pickle. I'm Pickle Riiiiick.",
      "I'm sorry, Morty. It's a bummer. In reality you're as dumb as they come.",
      "Its a device Morty, that when you put it in your ear, you can enter people's dreams Morty. Its just like that movie that you keep crowing about.",
      "Well then get your shit together. Get it all together and put it in a backpack, all your shit, so it's together.",
      "Existence is pain to a meeseeks Jerry, and we will do anything to alleviate that pain.",
      "Trust me Beth, you don't want to know how many answers that question has.",
      "I mean, if you spend all day shuffling words around, you can make anything sound bad, Morty.",
      "Sometimes science is more art than science, Morty. Lot of people don't get that.",
      "Listen, I'm not the nicest guy in the universe, because I'm the smartest, and being nice is something stupid people do to hedge their bets.",
      "Quantum carburetor? Jesus Morty, you can't just add a sci-fi word to a car word and hope it means something. Looks like something's wrong with the micro-verse battery.",
      "I'll tell you how I feel about school, Jerry: it's a waste of time.",
      "There is no god, Summer; gotta rip that band-aid off now you'll thank me later.",
      "Just you and me, Morty.",
      "We're the only *URP* friends we've got, Morty! It's just Rick and Morty. Rick and Morty and their adventures, Morty! Rick and Morty forever and forever.",
      "We need a hang glider, and a crotchless Uncle Sam costume, and I want the entire field of your largest stadium covered end to end with naked redheads, and I want the stands packed with every man that remotely resembles my father.",
      "I hear you, man. Cops are racist.",
      "Fun's fun, but who needs it? I'll be in the garage.",
      "What, so everyone's supposed to sleep every single night now? Y-you realize that nighttime makes up half of all time?",
      "I'm a genius, I build robots for fun.",
      "That was pure luck! I had no control in that situation! At all!",
      "Stop searching for a deeper meaning and just be impressed for once, Morty.",
      "The universe is basically an animal that grazes on the ordinary, it creates infinite idiots just to eat them.",
      "You were special to rats. Now they're dead. I guess it was me you should have impressed.",
      "God damn it, I love myself.",
      "Pickle Riiick!",
      "Get that parkour. Get that parkour!",
      "What do you think is in the syringe, Beth?",
      "I mean, we don't really buy into that kind of crap, to the extent that love is an expression of familiarity over time, my access to infinite timelines precludes the necessity of attachment.",
      "I have had a rough day.",
      "I'm not a cow. I'm a pickle. When I feel like it.",
      "I mean, that shrink, what a monologuist.",
      "Therapists, man.",
      "We're not getting out of this one.",
      "Oh boy. Time to go, Morty.",
      "I dabble, Mr. President.",
      "Aw, damn. We're out of original flavor Fig Newtons. I should get going anyway.",
      "Birdperson?",
      "All of Rick's moves are dick moves! Wh-what am I eating? What is this, bird seed?",
      "Then I better crunch the numbers.",
      "Well that just sounds like slavery with extra steps.",
      "Holy crap, you're right Morty. Hypocrisy.",
      "We'll be on ice cream street. Slurpin', slurpin', slurpin' it up.",
      "I shouldn't be so critical. I'm alien!",
      "Let me ask you something.",
      "The fake president of your fake world has something fake important to show you.",
      "It's showtime.",
      "Your miniverse sucks.",
      "Ain't it a thing.",
      "Old lady science. She's a thing you know? Gotta hold on tight.",




   ];
}

// Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
	return randomSentence;
}

// Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function() {
  let paragraph = "";
  // Set the minimum number of words
  let minimumCharacterLength = 250;
  let firstSentence = true;
  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = paragraph.concat(this.getRandomSentence());
      firstSentence = false;
    } else {
      paragraph = paragraph.concat(" " + this.getRandomSentence());
    }
  }
  return paragraph;
}

// Method to the GenerateNewText constructor function that gerates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  // Generate the number of paragraphs as specified by the user
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }
  // Convert array into HTML string
  let paragraphHTML = "";
  allParagraphs.forEach(function (paragraph) {
    paragraphHTML += "<p>" + paragraph + "</p>";
  });
  return paragraphHTML;
}

module.exports = loremIpsum;
