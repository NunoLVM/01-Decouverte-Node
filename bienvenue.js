const figlet = require("figlet");
const chalk = require("chalk");


function afficherAscii(message) {
  figlet.text(
    message,
    {
      font: "Ghost",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 150,
      whitespaceBreak: true,
    },
    (err, data) => {
      if (err) {
        console.error("Erro ASCII Art:", err);
        return;
      }
      console.log(chalk.cyanBright(data));
    }
  );
}

const messageBienvenue = "Bienvenue!";
afficherAscii(messageBienvenue);
