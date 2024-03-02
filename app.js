const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Get the Invite </title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MVwRYlbhQ28JcOJyKLN59y5cBy5H7LqzdN6VcygDyv7gHHHWKJX7sM3Vy+GRWBdBqygDf6aY6ly4KJszc+jcyk/" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <style>
    body {
      display: flex;
      min-height: 100vh;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background-color: #f5f5f5; /* Light gray background */
    }

    .container {
      background-color: #fff; /* White container */
      border-radius: 10px; /* Rounded corners */
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
      padding: 30px 40px; /* Inner padding */
      max-width: 500px;
      width: 100%; /* Adapt to smaller screens */
      text-align: center;
    }

    .icon {
      font-size: 48px;
      color: #2980b9; /* Blue icon color */
      margin-bottom: 20px;
    }

    .big-title {
      font-size: 2.5rem;
      color: #333; /* Darker text color */
      margin-bottom: 15px;
      font-weight: bold;
    }

    p {
      font-size: 16px;
      color: #777; /* Lighter text color */
      margin-bottom: 20px;
      line-height: 1.5; /* Increased line spacing for readability */
    }

    input[type="text"] {
      width: 100%;
      padding: 10px 15px;
      border: 1px solid #ccc; /* Light border */
      border-radius: 5px;
      font-size: 16px;
      box-sizing: border-box; /* Include padding in width */
    }

    input[type="text"]::placeholder {
      color: #aaa; /* Grayish placeholder text */
    }

    button {
      background-color: #2980b9; /* Blue button color */
      color: #fff; /* White button text */
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;
    }

    button:hover {
      background-color: #3498db; /* Darker blue on hover */
    }
  </style>
</head>
<body>
  <div class="container">
    <i class="fas fa-envelope icon"></i> <h1 class="big-title">Get the Invite</h1>
    <p>Get early access to the latest features and be part of our growing community.</p>
    <input type="text" placeholder="Enter your email address">
    <br><br>
    <button>REQUEST INVITE</button>
  </div>
</body>
</html>
`
