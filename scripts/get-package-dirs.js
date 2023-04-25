import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const getPackageDirs = () =>
  readdirSync('./src').filter(
    (f) => f !== '@types' && statSync(join('./src', f)).isDirectory()
  );

export default getPackageDirs;
