// Module und Variablen
const Data = require('./data.js'); // require == new Data()...
const express = require("express");
const chalk = require('chalk'); // Chalk 5 has changed to ESM (latest before is 4.1.2)
const fs = require("fs");
// const { createHash } = require('crypto');

const today = new Date();
const app = express();
const port = 8000;
let options = { extensions: ['html'] }

app.get("/getVideos/passwort123", (req, res) => {
  console.log("getting videos [multi]");
  res.send(JSON.stringify(Data.getVideos));
});

app.get('/videos/:id', (req, res) => {
  console.log("getting videos [single]");

  // Hash
  /*
  function hash(string) {
    return createHash('sha256').update(string).digest('hex');
  }
  */

  let id = req.params.id;
  // id = Data.getVideos.list[id].name;
  console.log(id);
  if (id > Data.getVideos.list.length) {
    res.send("Requested element doesn't exist! (max. element: " + Data.getVideos.list.length + ")");
  }

  // id = hash(id)
  const range = req.headers.range;

  // Error Codes
  if (!range) {
    res.status(400).send("Requires Range header");
  }

  // Get Video Stats
  const videoPath = `./videos/${id}.mp4`;
  const videoSize = fs.statSync(`${videoPath}`).size;

  // Parse Range
  // Example: "bytes=32324-"
  const CHUNK_SIZE = 10 ** 6; // 1MB
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

  // Create headers
  const contentLength = end - start + 1;

  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };

  // HTTP Status 206 for Partial Content
  res.writeHead(206, headers);

  // create video read stream for this particular chunk
  const videoStream = fs.createReadStream(videoPath, { start, end });

  // Stream the video chunk to the client
  videoStream.pipe(res);

  // res.send(JSON.stringify(Data.getVideos.list[id]));
})

// Static Middleware
app.use(express.static('public', options));

// Server starten
app.listen(port, () => {
  console.log(chalk.redBright(today));
  console.log(chalk.green(`Erreichbar unter http://localhost:${port}`));
  console.log(chalk.blueBright("Server gestartet!"));
})