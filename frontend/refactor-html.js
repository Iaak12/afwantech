import fs from 'fs';
import path from 'path';

const dir = 'c:/Users/91748/OneDrive/Desktop/company original/WebTechSathi/WebTechSathi/WebTechSathi/frontend/src/components/home';

const files = fs.readdirSync(dir);

files.forEach(file => {
    if (!file.endsWith('.jsx')) return;
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    content = content.replace(/<p([^>]*)>\s*\{finalDescription\}\s*<\/p>/g, '<div$1 dangerouslySetInnerHTML={{ __html: finalDescription }} />');
    content = content.replace(/<p([^>]*)>\s*\{activeContent\.description\}\s*<\/p>/g, '<div$1 dangerouslySetInnerHTML={{ __html: activeContent.description }} />');
    content = content.replace(/<p([^>]*)>\s*\{item\.text\}\s*<\/p>/g, '<div$1 dangerouslySetInnerHTML={{ __html: item.text }} />');
    content = content.replace(/<p([^>]*)>\s*\{finalTopDescription\}\s*<\/p>/g, '<div$1 dangerouslySetInnerHTML={{ __html: finalTopDescription }} />');
    content = content.replace(/<p([^>]*)>\s*\{text\}\s*<\/p>/g, '<div$1 dangerouslySetInnerHTML={{ __html: text }} />');
    content = content.replace(/<span([^>]*)>\s*\{finalFooterText\}\s*<\/span>/g, '<span$1 dangerouslySetInnerHTML={{ __html: finalFooterText }} />');
    content = content.replace(/<p([^>]*)>\s*\{finalFooterText\}\s*<\/p>/g, '<div$1 dangerouslySetInnerHTML={{ __html: finalFooterText }} />');

    // Sometimes it's inside <div> directly
    content = content.replace(/<div([^>]*)>\s*\{finalDescription\}\s*<\/div>/g, '<div$1 dangerouslySetInnerHTML={{ __html: finalDescription }} />');

    fs.writeFileSync(filePath, content);
});
console.log("Replaced HTML renders successfully.");
