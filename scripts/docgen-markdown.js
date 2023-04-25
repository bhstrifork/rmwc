import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server.js';
import path from 'path';
import moduleAlias from 'module-alias';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const root = path.resolve(__filename, '../../');

moduleAlias.addAlias('@rmwc', root + '/build/dist');
moduleAlias.addAlias('@doc-utils', root + '/build/dist/doc-utils-markdown');

import { execSync } from 'child_process';
import fs from 'fs';
import getChangedPackages from './get-changed-packages.js';

const getMarkdown = (packageName) => {
  const readmeFiles = fs
    .readdirSync(path.resolve('build', 'dist', packageName))
    .filter((fName) => fName.startsWith('readme') && fName.endsWith('.js'));

  const promises = readmeFiles.map(async (fName) => {
    const docPath = path.resolve('build', 'dist', packageName, fName);
    const fileOutputName = path.basename(fName, '.cjs').toUpperCase() + '.md';
    const outputPath = path.resolve('src', packageName, fileOutputName);
    const { default: Component } = await import(docPath);
    const content = renderToStaticMarkup(React.createElement(Component))
      .replace(/&gt;/g, '>')
      .replace(/&lt;/g, '<')
      .replace(/&#x27;/g, "'")
      .replace(/&quot;/g, '"');

    return new Promise((resolve) => {
      fs.writeFile(outputPath, content, () => {
        resolve();
      });
    });
  });

  return Promise.all(promises);
};

try {
  execSync(
    `./node_modules/.bin/tsc --project ${root}/tsconfig-build.json --target es5 --module CommonJS`,
    {
      stdio: [0, 1, 2]
    }
  );

  execSync(`./node_modules/.bin/copyfiles --up 1 src/**/*.json build/dist`);

  const promises = getChangedPackages()
    .filter((name) => !['rmwc', '@types'].includes(name))
    .map((d) => {
      console.log(`Generating Markdown For: ${d}`);
      return getMarkdown(d);
    });

  Promise.all(promises).then(() => {
    execSync(`rm -rf build`);
  });
} catch (err) {
  console.error(err.toString());
}
