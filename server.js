const http = require("http");
const figlet = require("figlet");

const message = "Bienvenue!";

figlet.text(
  message,
  {
    font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 150,
    whitespaceBreak: true,
  },
  (err, asciiArt) => {
    if (err) {
      console.error("erreur ASCII Art:", err);
      return;
    }

    
    const server = http.createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(`<pre style="color: blue">${asciiArt}</pre>`);
    });

    server.listen(3000, () => {
      console.log("http://localhost:3000");
    });
  }
);



