const mySentence = "freeCodeCamp is an awesome resource";
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    let lastchar = words[i].slice(-1);
    words[i] = words[i].slice(0,-1) + lastchar.toUpperCase();
}
words.join(" ");
console.log(words)