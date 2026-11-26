const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200);
    return res.end("OK");
  }

  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8"
  });

  res.end(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Escudo LIVE Gold Family</title>
      <style>
        body {
          background: #080808;
          color: #FFD700;
          font-family: Arial, sans-serif;
          text-align: center;
          padding: 50px 20px;
        }
        .panel {
          border: 2px solid gold;
          border-radius: 20px;
          padding: 30px;
        }
      </style>
    </head>
    <body>
      <div class="panel">
        <h1>🛡️ ESCUDO LIVE</h1>
        <h2>GOLD FAMILY</h2>
        <p>Servidor online</p>
        <p>Monitoramento: aguardando integração</p>
      </div>
    </body>
    </html>
  `);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log("Escudo LIVE iniciado na porta " + PORT);
});
