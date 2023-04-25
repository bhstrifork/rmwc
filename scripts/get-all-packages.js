import { execSync } from 'child_process';

const getAllPackages = () => {
  const changed = execSync('node_modules/.bin/lerna list')
    .toString()
    .split('\n')
    .map((v) => v.replace('@rmwc/', ''))
    .filter(Boolean);
  return changed;
};

export default getAllPackages;
