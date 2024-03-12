

// The two parameters of substr() are start and length, while for substring(), they are start and end.
// Negative lengths in substr() are treated as zero, while substring() will swap the two indexes if end is less than start.

const text = "Mozilla hfeie";
console.log(text.substring(2, 5)); // "zil"
console.log(text.substr(2, 3)); // "zil"

console.log(text.substring(-4)); // "lla"

