const path = require("path");
const fs = require("fs");

// versi asynchronous
const fileReadCallback = (error, data) => {
  if (error) {
    console.log("Gagal membaca berkas");
    return;
  }
  console.log(data);
};

// Versi synchronous
// const data = fs.readFileSync('todo.txt', 'UTF-8');
// console.log(data);

fs.readFile("todo.txt", "UTF-8", fileReadCallback);
path.resolve(__dirname, "notes.txt");
