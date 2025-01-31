const fs = require('fs');
const wget = require('node-wget');

const data = fs.readFileSync('finish_mama_project.txt', 'utf8');
const lines = data.split("\n");

console.log(process.env.BASE_URL);

for (const line of lines) {
    if (!line) {
        continue;
    }
    const [file, folder] = line.split('|');
    const url = process.env.BASE_URL + '/' + file;
    const dest = 'tmp/' + folder;
    console.log('download', url, 'to', dest);
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, {recursive: true});
    }
    wget({url, dest}, () => console.log('done'));
}
