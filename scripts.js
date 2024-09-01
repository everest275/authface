const { execSync } = require('child_process');

function build() {
  try {
    console.log('Starting build process...');
    execSync('del-cli dist', { stdio: 'inherit' });
    execSync('tsc', { stdio: 'inherit' });
    console.log('Build process completed successfully.');
  } catch (error) {
    console.error('Build process failed:', error);
  }
}

function start() {
  try {
    console.log('Starting application...');
    execSync('node dist/server/index.js', { stdio: 'inherit' });
    console.log('Application started successfully.');
  } catch (error) {
    console.error('Application failed to start:', error);
  }
}

const command = process.argv[2];

if (command === 'build') {
  build();
} else if (command === 'start') {
  start();
} else {
  console.error('Unknown command. Use "build" or "start".');
}
