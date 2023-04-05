console.log("hi");
const hello = "message";
console.log(hello);

// Don't touch this part

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let input = "";
let input_currentline = 0;
let lines: string[] = [];

process.stdin.on("data", (rawData) => {
  input += rawData;
});

process.stdin.on("end", () => {
  lines = input
    .trim()
    .split("\n")
    .map((line) => {
      return line.trim();
    });
  main();
});

function readLine() {
  return input[input_currentline++];
}

// ########### TYPE YOUR CODE INSIDE MAIN FUNCTION ###########

function main() {
  //  type your solution here

  // process strings
  const string = readLine();
  console.log(string);
}
