import express from "express";

const app = express();

const PORT = 4000;

const handleRoot = (req, res) => res.send("<h1>You are in /</h1>");
const handleAbout = (req, res) => res.send("<h1>You are in /about</h1>");
const handleContact = (req, res) => res.send("<h1>You are in /contact</h1>");
const handleLogin = (req, res) => res.send("<h1>You are in /login</h1>");

app.get("/", handleRoot);
app.get("/about", handleAbout);
app.get("/contact", handleContact);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`server listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);
