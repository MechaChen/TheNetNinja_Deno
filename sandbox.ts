// reading files

// const decoder = new TextDecoder('utf-8');

// const data = await Deno.readFile('readme.txt');
// console.log(decoder.decode(data));

const data = await Deno.readTextFile('readme.txt');
console.log(data);