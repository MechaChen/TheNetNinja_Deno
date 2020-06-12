// fs module
import { readJson, writeJson } from 'https://deno.land/std/fs/mod.ts';

const jsonObj = await readJson('ninjas.json');
console.log(jsonObj);
