// scripts/generate-env.js
const fs = require('fs');
const path = require('path');

const env = {
    API_URL: process.env.API_URL || "",
    MODE: process.env.MODE || ""
};

const content =
    "export const env = " +
    JSON.stringify(env, null, 2) +
    ";\n";

const outPath = path.join(__dirname, '..', 'env.js');
fs.writeFileSync(outPath, content);

console.log('env.js generated with:', env);