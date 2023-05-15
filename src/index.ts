const express = require("express");
const { createCanvas } = require("canvas");

const app = express();

app.get("/:width/:height", (req: any, res: any) => {
  const width = parseInt(req.params.width);
  const height = parseInt(req.params.height);

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // Set a background color for the image
  ctx.fillStyle = "#eaeaea";
  ctx.fillRect(0, 0, width, height);

  // Add text with the dimensions
  const text = `${width}x${height}`;
  ctx.font = "100px arial";
  ctx.fillStyle = "#000";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, width / 2, height / 2);

  // Set the response content type to image/png
  res.contentType("image/png");

  // Send the image as the response
  canvas.createPNGStream().pipe(res);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
