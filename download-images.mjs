import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';

const images = [
  {
    name: 'menu-spaghetti.jpg',
    url: 'https://images.unsplash.com/photo-1621996346565-e3d5d628120b?auto=format&fit=crop&w=800&q=80' // spaghetti and meatballs
  },
  {
    name: 'menu-mac-cheese.jpg',
    url: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80' // baked mac and cheese
  },
  {
    name: 'owner-male.jpg',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80' // friendly portrait male
  },
  {
    name: 'owner-female.jpg',
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80' // friendly portrait female
  },
  {
    name: 'pepperoni-stamp.jpg',
    url: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=1200&q=85' // overhead pepperoni pizza on wooden board
  },
  {
    name: 'restaurant-exterior.jpg',
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80' // restaurant exterior at dusk with glowing lights
  },
  {
    name: 'social-1.jpg',
    url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80' // pizza top
  },
  {
    name: 'social-2.jpg',
    url: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80' // eating pasta/dinner
  },
  {
    name: 'social-3.jpg',
    url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80' // group of friends
  },
  {
    name: 'social-4.jpg',
    url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80' // pizza slice
  },
  {
    name: 'social-5.jpg',
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80' // dining food spread
  },
  {
    name: 'social-6.jpg',
    url: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=600&q=80' // restaurant/takeout box
  }
];

const targetDir = path.join(process.cwd(), 'public', 'images');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        download(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
        return;
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function run() {
  for (const item of images) {
    const dest = path.join(targetDir, item.name);
    try {
      console.log(`Downloading ${item.name}...`);
      await download(item.url, dest);
      console.log(`Saved ${item.name}`);
    } catch (err) {
      console.error(`Error with ${item.name}:`, err.message);
    }
  }
}

run();
