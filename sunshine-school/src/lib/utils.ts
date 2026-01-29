import fs from 'fs';
import path from 'path';

/**
 * Utility function to get images from public directory
 * Reduces code duplication across pages
 */
export function getImages(dirName: string): string[] {
    const dirPath = path.join(process.cwd(), 'public', dirName);
    try {
        const files = fs.readdirSync(dirPath);
        return files
            .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
            .sort((a, b) => {
                // Sort numerically if possible (1.jpg, 2.jpg)
                const aNum = parseInt(a);
                const bNum = parseInt(b);
                if (!isNaN(aNum) && !isNaN(bNum)) return aNum - bNum;
                return a.localeCompare(b);
            })
            .map(file => `/${dirName}/${file}`);
    } catch (error) {
        console.error(`Error reading ${dirName} directory:`, error);
        return [];
    }
}

/**
 * Get media items (images and videos) from gallery directory
 */
export function getMediaItems(dirName: string): Array<{ src: string; type: 'image' | 'video' }> {
    const dirPath = path.join(process.cwd(), 'public', dirName);
    try {
        const files = fs.readdirSync(dirPath);
        return files
            .filter(file => /\.(jpg|jpeg|png|webp|mp4|mov|avi)$/i.test(file))
            .sort((a, b) => {
                const aNum = parseInt(a);
                const bNum = parseInt(b);
                if (!isNaN(aNum) && !isNaN(bNum)) return aNum - bNum;
                return a.localeCompare(b);
            })
            .map(file => ({
                src: `/${dirName}/${file}`,
                type: /\.(mp4|mov|avi)$/i.test(file) ? 'video' as const : 'image' as const,
            }));
    } catch (error) {
        console.error(`Error reading ${dirName} directory:`, error);
        return [];
    }
}