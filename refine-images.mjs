import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';

const replacements = [
  {
    name: 'menu-mac-cheese.jpg',
    // Golden baked macaroni and cheese
    url: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'menu-spaghetti.jpg',
    // Hearty spaghetti in tomato sauce with meatballs
    url: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'pepperoni-stamp.jpg',
    // Authentic overhead top down round pepperoni pizza on wooden peel
    url: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=1000&q=85'
  },
  {
    name: 'restaurant-exterior.jpg',
    // Illuminated modern pizzeria / restaurant exterior at dusk with warm glowing lights
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'owner-male.jpg',
    // Friendly smiling male chef / restaurant manager
    url: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'owner-female.jpg',
    // Friendly smiling female restaurant owner / partner
    url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80'
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
        reject(new Error(`Status ${res.statusCode} for ${url}`));
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
  for (const item of replacements) {
    const dest = path.join(targetDir, item.name);
    try {
      console.log(`Downloading ${item.name}...`);
      await download(item.url, dest);
      console.log(`Success ${item.name}`);
    } catch (err) {
      console.error(`Failed ${item.name}: ${err.message}`);
    }
  }
}

run();
