const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/app/qudratov_com26_gmail_com", (req, res) => {
  const rawX = req.query.x;
  const rawY = req.query.y;

  if (!Number.isInteger(Number(rawX)) || !Number.isInteger(Number(rawY)) || !rawX || !rawY || Number(rawX) < 0 || Number(rawY) < 0){
    return res.type("text/plain").send("NaN");
  }

  if (Number(rawX) === 0 && Number(rawY) === 0) {
    return res.type("text/plain").send("0");
  }

  const x = Number(rawX);
  const y = Number(rawY);

  res.type("text/plain").send(lcm(x, y));
});

function lcm(x, y) {
  const bx = BigInt(x);
  const by = BigInt(y);
  return String(bx * by / gcd(bx, by));
}

function gcd(x, y) {
  while (y !== 0n) {
    let temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});