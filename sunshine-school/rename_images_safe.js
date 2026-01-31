const fs = require('fs');
const path = require('path');

const dirs = ['public/hero', 'public/gallery'];

dirs.forEach(dir => {
    const fullPath = path.join(__dirname, 'sunshine-school', dir);
    if (!fs.existsSync(fullPath)) {
        console.log(`Directory not found: ${fullPath}`);
        return;
    }

    const files = fs.readdirSync(fullPath);
    let counter = 1;

    files.forEach(file => {
        if (!/\.(jpg|jpeg|png|webp)$/i.test(file)) return;

        const ext = path.extname(file).toLowerCase();
        // Generate new name: folder name + counter + ext (e.g. hero-1.jpg)
        // But wait, user might want to keep descriptive names? 
        // Better: just replace spaces with hyphens and lowercase.

        const newName = file.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\.\-]/g, '');

        if (file !== newName) {
            fs.renameSync(path.join(fullPath, file), path.join(fullPath, newName));
            console.log(`Renamed: ${file} -> ${newName}`);
        }
    });
});
