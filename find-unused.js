const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'frontend/src');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (fs.statSync(dirPath).isDirectory()) {
            walkDir(dirPath, callback);
        } else {
            if (f.endsWith('.js') || f.endsWith('.jsx')) {
                callback(dirPath);
            }
        }
    });
}

// 1. Get all JS/JSX files
let allFiles = [];
walkDir(srcDir, (f) => allFiles.push(f));

// 2. Read them all
let allContent = '';
allFiles.forEach(f => {
    allContent += fs.readFileSync(f, 'utf8') + '\n';
});

// 3. Find unused
let unusedFiles = [];

allFiles.forEach(file => {
    if (file.includes('App.jsx') || file.includes('main.jsx') || file.includes('AppRoutes.jsx')) return;

    let baseName = path.basename(file, path.extname(file));

    let isImported = allContent.includes(`import ${baseName}`) ||
        allContent.includes(`import { ${baseName} }`) ||
        allContent.includes(`/${baseName}'`) ||
        allContent.includes(`/${baseName}"`);

    if (!isImported) {
        unusedFiles.push(file);
    }
});

console.log("Potentially unused files:");
unusedFiles.forEach(f => console.log(f.replace(__dirname, '')));
