const fs = require('fs');
const path = require('path');

const cleanDirectory = (dir) => {
    const dirPath = path.join(process.cwd(), 'public', dir);
    if (!fs.existsSync(dirPath)) return;

    const files = fs.readdirSync(dirPath)
        .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));

    // Separate already numbered files from others
    const numbered = [];
    const others = [];

    files.forEach(f => {
        if (/^\d+\.(jpg|jpeg|png|webp)$/i.test(f)) {
            numbered.push(f);
        } else {
            others.push(f);
        }
    });

    // Sort numbered to find the max
    numbered.sort((a, b) => parseInt(a) - parseInt(b));
    let nextIndex = numbered.length > 0 ? parseInt(numbered[numbered.length - 1]) + 1 : 1;

    // Rename others
    others.forEach(file => {
        const ext = path.extname(file);
        const newName = `${nextIndex}${ext}`;
        fs.renameSync(path.join(dirPath, file), path.join(dirPath, newName));
        console.log(`Renamed ${dir}/${file} to ${dir}/${newName}`);
        nextIndex++;
    });
};

cleanDirectory('hero');
cleanDirectory('social');
