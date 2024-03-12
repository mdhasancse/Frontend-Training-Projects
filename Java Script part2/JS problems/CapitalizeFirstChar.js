let text = "freeCodeCamp is an awesome resource";
let words = text.split(' ');

for(let i=0;i<words.length;i++){
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}
words.join(" ");
console.log(words)
