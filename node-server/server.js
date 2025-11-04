const tracer = require('dd-trace').init();

const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/trigger-error", (req, res) => {
  function throwError() {
    actuallyThrowError()
  }
  function actuallyThrowError() {
    throw Error("error thrown");
  }

  res.send(`${throwError()}`);
});

app.listen(port, () => {
  console.log(`Node.js app listening on port ${port}`)
})
