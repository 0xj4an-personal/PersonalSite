const fs = require('fs');
const { createCanvas } = require('canvas');

// Create directories if they don't exist
if (!fs.existsSync('public/projects')) {
  fs.mkdirSync('public/projects', { recursive: true });
}

// Function to create a placeholder image
function createPlaceholder(width, height, text, filename) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = '#1a1a1a';
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = '#ffffff';
  ctx.font = '24px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(filename, buffer);
}

// Generate placeholder images
createPlaceholder(800, 600, 'Profile Picture', 'public/profile.jpg');
createPlaceholder(800, 600, 'Blockchain & Web3 Music Projects', 'public/projects/music.jpg');
createPlaceholder(800, 600, 'NativeEcho AI Agent', 'public/projects/ai.jpg'); 