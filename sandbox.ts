await Deno.rename('readme.txt', 'deleteme.txt');
await Deno.remove('deleteme.txt');