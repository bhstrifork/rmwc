import { execSync } from 'child_process';

const getChangedPackages = () => {
  const changed = execSync('node_modules/.bin/lerna changed')
    .toString()
    .split('\n')
    .map((v) => v.replace('@rmwc/', ''))
    .filter(Boolean);
  return changed;
};

export default getChangedPackages;
