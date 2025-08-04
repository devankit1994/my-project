// scripts/generate-env.js
const fs = require('fs');
const path = require('path');

const env = {
    API_URL: process.env.API_URL || "",
    MODE: process.env.MODE || ""
};

const content =
    JSON.stringify(env, null, 2) +
    ";\n";

const envFilePath = `../env.js`;
let envFileContent = fs.readFileSync(envFilePath, 'utf8');

const configReplacements = {
    YOUR_API_URL: process.env.API_URL,
    YOUR_MODE: process.env.MODE,
}

for (const [placeholder, value] of Object.entries(configReplacements)) {
    envFileContent = envFileContent.replace(placeholder, value);
}

fs.writeFileSync(envFilePath, envFileContent);