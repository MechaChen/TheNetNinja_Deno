// writing files

const encoder = new TextEncoder();
const text = encoder.encode('hello again, ninjas');

await Deno.writeFile('readme.txt', text);