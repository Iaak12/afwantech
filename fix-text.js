const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'frontend/src');

const replacements = [
    { cor: /K&amp;A Financial Advisory/g, fix: 'Afwan Tech' },
    { cor: /K&amp;A Financial/g, fix: 'Afwan Tech' },
    { cor: /K&A Financial Advisory/g, fix: 'Afwan Tech' },
    { cor: /Chartered Accountancy/g, fix: 'Digital Marketing' },
    { cor: /Chartered Accountants/g, fix: 'Digital Experts' },
    { cor: /Chartered Accountant/g, fix: 'Digital Expert' },
    { cor: /taxation, compliance/g, fix: 'marketing, development' },
    { cor: /taxation/g, fix: 'SEO' },
    { cor: /income tax, business SEO/g, fix: 'SEO, web development' },
    { cor: /tax compliance/g, fix: 'marketing strategies' },
    { cor: /tax computation, timely return filing/g, fix: 'brand scaling, timely campaign execution' },
    { cor: /tax planning/g, fix: 'growth planning' },
    { cor: /income tax filing/g, fix: 'digital presence' },
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
            console.log(`Fixed text in: ${filePath}`);
            modifiedCount++;
        }
    }
});

console.log(`Total files updated: ${modifiedCount}`);
