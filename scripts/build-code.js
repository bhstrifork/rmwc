process.env.NODE_ENV = process.env.NODE_ENV || 'production';

import getPackageDirs from './get-package-dirs.js';
import path from 'path';
import { exec, execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const root = path.resolve(__filename, '../../');

console.log('Starting build...');

// Simply copies the file
const copyFile = (inputFile, outputFile) => {
  exec(`cp -R ${inputFile} ${outputFile}`);
};

// const root = path.resolve(import.meta.url, '../');

execSync(
  `npx tsc --project ${root}/tsconfig-build.json --target es5 --module CommonJS`,
  {
    stdio: 'inherit'
  }
);

execSync(
  `npx tsc --project ${root}/tsconfig-build.json --target es5 --module esnext --outDir ${root}/build/next`,
  {
    stdio: 'inherit'
  }
);

const promises = getPackageDirs().map((d) => {
  return new Promise((resolve, reject) => {
    copyFile(
      path.resolve(root, 'build', 'dist', d),
      path.resolve(root, 'src', d, 'dist')
    );

    copyFile(
      path.resolve(root, 'build', 'next', d),
      path.resolve(root, 'src', d, 'next')
    );

    // Copy the styles file to the root.
    copyFile(
      path.resolve(root, 'build', 'dist', d, 'styles.js'),
      path.resolve(root, 'src', d, 'styles.js')
    );

    copyFile(
      path.resolve(root, 'build', 'dist', d, 'styles.d.ts'),
      path.resolve(root, 'src', d, 'styles.d.ts')
    );

    resolve();
  });
});

// Compile the TS
Promise.all(promises).then(() => {
  console.log('Build done');
});
