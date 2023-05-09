/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: [
    'rmwc',
    '@doc-utils',
    '@rmwc/avatar',
    '@rmwc/badge',
    '@rmwc/base',
    '@rmwc/button',
    '@rmwc/card',
    '@rmwc/checkbox',
    '@rmwc/chip',
    '@rmwc/circular-progress',
    '@rmwc/data-table',
    '@rmwc/dialog',
    '@rmwc/drawer',
    '@rmwc/elevation',
    '@rmwc/fab',
    '@rmwc/floating-label',
    '@rmwc/formfield',
    '@rmwc/grid',
    '@rmwc/grid-list',
    '@rmwc/icon',
    '@rmwc/icon-button',
    '@rmwc/image-list',
    '@rmwc/line-ripple',
    '@rmwc/linear-progress',
    '@rmwc/list',
    '@rmwc/menu',
    '@rmwc/notched-outline',
    '@rmwc/provider',
    '@rmwc/radio',
    '@rmwc/ripple',
    '@rmwc/select',
    '@rmwc/slider',
    '@rmwc/snackbar',
    '@rmwc/switch',
    '@rmwc/tabs',
    '@rmwc/textfield',
    '@rmwc/theme',
    '@rmwc/toggleable',
    '@rmwc/tooltip',
    '@rmwc/top-app-bar',
    '@rmwc/types',
    '@rmwc/typography',
  ],
  experimental: {
    appDir: true,
  },
};

const withMDX = require("@next/mdx")();

module.exports = withMDX(nextConfig);