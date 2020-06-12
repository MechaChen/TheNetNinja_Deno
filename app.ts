import { Application } from "https://deno.land/x/abc@v1.0.0-rc10/mod.ts";

const app = new Application();

// routes
app.get('/', async () => {
    console.log('request made');
});

// listen to port
app.start({ port: 3000 });