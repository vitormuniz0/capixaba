const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, 'build');
const destination = path.join(__dirname, 'dist');

fs.rename(source, destination, (err) => {
  if (err) {
    console.error('Erro ao mover a pasta:', err);
    process.exit(1);
  } else {
    console.log('Pasta movida com sucesso!');
  }
});