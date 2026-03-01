const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'frontend/src');

const replacements = {
    "â†'": '→',
    'âž•': '➕',
    'âš ï¸ ': '⚠️',
    'â­ ': '⭐',
    'âœ“': '✓',
    'â€º': '›'
};

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

        for (const [corrupted, fixed] of Object.entries(replacements)) {
            content = content.split(corrupted).join(fixed);
        }

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Fixed: ${filePath}`);
            modifiedCount++;
        }
    }
});

console.log(`Total files fixed: ${modifiedCount}`);
