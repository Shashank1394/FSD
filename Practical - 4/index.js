const fs = require("fs").promises;

async function writeToFile(filename, content) {
  await fs.writeFile(filename, content);
  console.log(`\nSuccessfully wrote to ${filename}`);
}

async function appendToFile(filename, content) {
  await fs.appendFile(filename, content);
  console.log(`\nSuccessfully appended to ${filename}`);
}

async function readFromFile(filename) {
  const data = await fs.readFile(filename, "utf8");
  console.log(`\nContent of ${filename}`);
  console.log(data);
}

async function main() {
  await writeToFile("example.txt", "Hello from Node.js!\n");
  await appendToFile("example.txt", "This line is appended.\n");
  await readFromFile("example.txt");
}

main().catch((err) => console.error("Error: ", err));
