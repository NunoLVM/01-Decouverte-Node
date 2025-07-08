const fs = require("fs");
const readline = require("readline");
const path = require("path");

const journalPath = path.join(__dirname, "journal.txt");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


function getTimestamp() {
  const now = new Date();
  return `[${now.toLocaleString()}]`;
}


function askMessage() {
  rl.question("Quel message souhaitez-vous enregistrer dans le journal ?\n> ", (message) => {
    if (message.trim() !== "") {
      appendToJournal(message.trim());
    } else {
      console.log("Aucun message saisi. Fin du programme.");
      rl.close();
    }
  });
}


function appendToJournal(message) {
  const ligne = `${getTimestamp()} ${message}\n`;

  fs.appendFile(journalPath, ligne, (err) => {
    if (err) {
      console.error("Erreur lors de l'écriture :", err);
    } else {
      console.log("Message enregistré dans le journal.");
      readJournal();
    }
  });
}

 
function readJournal() {
  fs.readFile(journalPath, "utf8", (err, data) => {
    if (err) {
      console.error(" Erreur lors de la lecture :", err);
    } else {
      console.log("\nContenu actuel du journal :\n");
      console.log(data);
    }
    rl.close();
  });
}

 
askMessage();
