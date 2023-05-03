const express = require("express");
const morgan = require("morgan");
const volleyball = require("volleyball");
const app = express();
const postBank = require("./postBank");

app.get("/", (req, res) => {
  const posts = postBank.list();
  const html = `<!DOCTYPE html>
  <html>
    <head>
    <title>wizard news</title>
    </head>
    <body>
      <ul>
      ${posts.map(post =>`<li>${post.title}, ${post.name}</li>`)}
      </ul>
    </body>
  </html>`

  res.send(html);
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
app.use(morgan('Dev'));
