const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'frontend/src');

const replacements = [
    { cor: /â†’/g, fix: '→' },
    { cor: /â­ /g, fix: '⭐' },
    { cor: /âš ï¸ /g, fix: '⚠️' },
    { cor: /âœ“/g, fix: '✔' },
    { cor: /âž•/g, fix: '➕' },
    { cor: /â†/g, fix: '→' }
];

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

let modifiedCount = 0;

walkDir(directoryPath, function (filePath) {
    if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        for (const item of replacements) {
            content = content.replace(item.cor, item.fix);
        }

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Fixed: ${filePath}`);
            modifiedCount++;
        }
    }
});

console.log(`Total files fixed: ${modifiedCount}`);
