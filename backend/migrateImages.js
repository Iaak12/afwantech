const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const homeDir = path.join(__dirname, '../frontend/src/components/home');

const uploadImage = async (fileOrUrl) => {
    try {
        const res = await cloudinary.uploader.upload(fileOrUrl, { folder: 'webtechsathi' });
        return res.secure_url;
    } catch (e) {
        console.error("Failed to upload " + fileOrUrl, e.message);
        return fileOrUrl;
    }
};

async function run() {
    let files = fs.readdirSync(homeDir).filter(f => f.endsWith('.jsx'));
    for (let file of files) {
        let filePath = path.join(homeDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let updated = false;

        let regex = /https:\/\/(images\.unsplash\.com|via\.placeholder\.com)[^"'\s]*/g;
        let matches = [...new Set(content.match(regex) || [])];

        for (let url of matches) {
            console.log(`Uploading URL from ${file}: ${url}`);
            let newUrl = await uploadImage(url);
            content = content.split(url).join(newUrl);
            updated = true;
        }

        // Local imports
        let regexLocal = /import\s+(\w+)\s+from\s+["'](\.\.\/\.\.\/assets\/[^"']+)["']/g;
        let localMatches = [...content.matchAll(regexLocal)];
        for (let match of localMatches) {
            let importName = match[1];
            let relativePath = match[2];
            let absPath = path.resolve(homeDir, relativePath);
            console.log(`Uploading local file from ${file}: ${absPath}`);
            let newUrl = await uploadImage(absPath);
            let replaceStr = `const ${importName} = "${newUrl}"; // Migrated to Cloudinary`;
            content = content.replace(match[0], replaceStr);
            updated = true;
        }

        if (updated) {
            fs.writeFileSync(filePath, content);
            console.log(`Updated ${file}`);
        }
    }
    console.log("ALL MIGRATION DONE");
}

run();
