const express = require("express");
var helmet = require("helmet");
const app = express();
const { SERVER } = require("./config/index");

var cors = require("cors");
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(helmet());
var allowlist = [
  "http://localhost:2022"
];
var corsOptionsDelegate = (req, callback) => {
  var corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};
app.use(cors(corsOptionsDelegate));

app.use(express.json());

const authRouter = require("./routes/solves.routes");
app.use("/api/v1/solve", authRouter);

app.get("/test", (req, res) => {
  console.log("sucess Api");
  res.status(200).send("Welcome");
});
app.listen(SERVER.PORT, (data) => {
  console.log(`Your port is ${SERVER.PORT}`); // 8626
});
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name ? ', function (name) {
  rl.question('Where do you live ? ', function (country) {
    console.log(`${name}, is a citizen of ${country}`);
    rl.close();
  });
});

rl.on('close', function () {
  console.log('\nBYE BYE !!!');
  process.exit(0);
});
