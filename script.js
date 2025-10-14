//Author: Owen Storbeck
//Filename: script.js
const quotes = [//the quotes I included
    "You keep steppin even when you can't, even when you tired",
    "If you ain't tryna beat the road, beat your feet cuz the block is HOT!",
    "You gotta be looking to die for people to die to look at you.",
    "YEEEAH BUUDY!", "Winners never quit and quitters never win!",
    "The proof is in the progress.", "Tough times don't last , tough people do."
];

function getRandomQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes.index;
}

function analyzeRun() {//main take in of the run you took
  const miles = parseFloat(document.getElementById("miles").value);
  const minutes = parseFloat(document.getElementById("minutes").value);
  const feeling = document.getElementById("feeling").value;
  const feedbackText = document.getElementById("feedbackText");
  const quoteText = document.getElementById("quoteText");

  if (isNaN(miles) || isNaN(minutes) || !feeling) {//the questions you get asked about the run
    feedbackText.textContent = "Please enter miles, minutes, and how the run felt.";
    quoteText.textContent = "";
    return;
  }
    const pace = (minutes / miles).toFixed(2);
    let feedback = 'Your pace was ${pace} min/mile.';//gets your average and includes the run feeling

    if (feeling === "easy") {//main three feelings, just to keep it simple
    feedback += "You’re cruising! Consider increasing distance or adding intervals. ";
  } else if (feeling === "normal") {
    feedback += "Nice steady effort. Maintain consistency or try a tempo run next time. ";
  } else if (feeling === "hard") {
    feedback += "Tough run. Make sure to hydrate and consider a recovery day. ";
  }
    
    feedback += "\nPro Tip: Always mix in stretching and core before and after a run.";//extra feedback
    const quote = getRandomQuote();//random quote getter which gets what is up top
    feedbackText.textContent = feedback;
    quoteText.textContent = '"${quote}"';

}

