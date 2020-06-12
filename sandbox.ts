// fs module
import { readJson, writeJson } from 'https://deno.land/std/fs/mod.ts';

const jsonObj = await readJson('ninjas.json');
console.log(jsonObj);

const books = [
    { title: 'the way of kings', author: 'brandon sanderson', },
    { title: 'nameof the wind', author: 'patrick rothfuss' },
];

await writeJson('books.json', books, { spaces: 2 });
console.log('created books.json');
