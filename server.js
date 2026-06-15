const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/app/qudratov_com26_gmail_com", (req, res) => {
  const rawX = req.query.x;
  const rawY = req.query.y;
    
  if (!/^\d+$/.test(rawX) || !/^\d+$/.test(rawY)) {
    return res.type("text/plain").send("NaN");
  }

  const x = BigInt(rawX);
  const y = BigInt(rawY);

  if (x <= 0n || y <= 0n) {
    return res.type("text/plain").send("NaN");
  }

  res.type("text/plain").send(lcm(x, y));
});

function lcm(x, y) {
  return String(x * y / gcd(x, y));
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