"use strict";(self.webpackChunkrmwc_main=self.webpackChunkrmwc_main||[]).push([[606],{5606:function(e,o,t){t.r(o),t.d(o,{default:function(){return l}});t(2791);var n=t(1085),i=JSON.parse('{"npm":{},"typescript":{"RMWCProviderProps":{"documentation":{"contents":["<p>A provider for setting global options in RMWC.</p>\\n"],"contentsRaw":"A provider for setting global options in RMWC.","metadata":{}},"fileName":"src/provider/index.tsx","flags":{"isExported":true,"isExternal":false,"isOptional":false,"isPrivate":false,"isProtected":false,"isPublic":false,"isRest":false,"isStatic":false},"kind":"interface","name":"RMWCProviderProps","methods":[],"properties":[{"documentation":{"contents":["<p>Children to render</p>\\n"],"contentsRaw":"Children to render","metadata":{}},"fileName":"src/provider/index.tsx","flags":{"isExported":true,"isExternal":false,"isOptional":true,"isPrivate":false,"isProtected":false,"isPublic":false,"isRest":false,"isStatic":false},"kind":"property","name":"children","type":"React.ReactNode"},{"documentation":{"contents":["<p>Global options for icons</p>\\n"],"contentsRaw":"Global options for icons","metadata":{}},"fileName":"src/provider/index.tsx","flags":{"isExported":true,"isExternal":false,"isOptional":true,"isPrivate":false,"isProtected":false,"isPublic":false,"isRest":false,"isStatic":false},"kind":"property","name":"icon","type":"Partial<RMWC.IconOptions>"},{"documentation":{"contents":["<p>Enable / Disable interaction ripples globally</p>\\n"],"contentsRaw":"Enable / Disable interaction ripples globally","metadata":{}},"fileName":"src/provider/index.tsx","flags":{"isExported":true,"isExternal":false,"isOptional":true,"isPrivate":false,"isProtected":false,"isPublic":false,"isRest":false,"isStatic":false},"kind":"property","name":"ripple","type":"undefined | false | true"},{"documentation":{"contents":["<p>Global tooltip options</p>\\n"],"contentsRaw":"Global tooltip options","metadata":{}},"fileName":"src/provider/index.tsx","flags":{"isExported":true,"isExternal":false,"isOptional":true,"isPrivate":false,"isProtected":false,"isPublic":false,"isRest":false,"isStatic":false},"kind":"property","name":"tooltip","type":"Partial<TooltipOptions>"},{"documentation":{"contents":["<p>Global typography options</p>\\n"],"contentsRaw":"Global typography options","metadata":{}},"fileName":"src/provider/index.tsx","flags":{"isExported":true,"isExternal":false,"isOptional":true,"isPrivate":false,"isProtected":false,"isPublic":false,"isRest":false,"isStatic":false},"kind":"property","name":"typography","type":"Partial<TypographyOptions>"}]}}}'),a=JSON.parse("[\"\\n  `\\n  import React from 'react';\\n  import * as ReactDOM from 'react-dom';\\n  import App from './App'; // your main app component\\n  import { RMWCProvider } from '@rmwc/provider';\\n\\n  // This example disables ripples globally by default\\n  ReactDOM.render(\\n    <RMWCProvider\\n      // Globally disable ripples\\n      ripple={false}\\n      // Global options for icons\\n      // Takes the same options as the icon component\\n      icon={{\\n        basename: 'material-icons'\\n      }}\\n      // Global options for typography\\n      // allows mapping of a defaultTag or specific classes\\n      // See the Typography docs for more info\\n      typography={{\\n        defaultTag: 'div',\\n        headline1: 'h1'\\n      }}\\n      // Global options for tooltips\\n      // Takes most of the options for tooltips\\n      // See the Tooltip docs for more info\\n      tooltip={{\\n        align: 'right'\\n      }}\\n    >\\n      <App />\\n    </RMWCProvider>,\\n    document.getElementById('root'),\\n  );\\n`\\n\"]"),s=t(2622),r=t(184);function l(){return(0,r.jsxs)(n.WI,{title:"Provider",lead:"A component that provides global configuration for RMWC.",module:"@rmwc/provider",styles:[],examples:a,children:[(0,r.jsx)(n.PJ,{children:"You can wrap your top level App component with RMWC provider to set global configuration options. Just pass the options in as props."}),(0,r.jsx)(n.q3,{codeOnly:!0,children:"\n          import React from 'react';\n          import * as ReactDOM from 'react-dom';\n          import App from './App'; // your main app component\n          import { RMWCProvider } from '@rmwc/provider';\n\n          // This example disables ripples globally by default\n          ReactDOM.render(\n            <RMWCProvider\n              // Globally disable ripples\n              ripple={false}\n              // Global options for icons\n              // Takes the same options as the icon component\n              icon={{\n                basename: 'material-icons'\n              }}\n              // Global options for typography\n              // allows mapping of a defaultTag or specific classes\n              // See the Typography docs for more info\n              typography={{\n                defaultTag: 'div',\n                headline1: 'h1'\n              }}\n              // Global options for tooltips\n              // Takes most of the options for tooltips\n              // See the Tooltip docs for more info\n              tooltip={{\n                align: 'right'\n              }}\n            >\n              <App />\n            </RMWCProvider>,\n            document.getElementById('root'),\n          );\n        "}),(0,r.jsx)(n.PQ,{src:i,components:[{displayName:"RMWCProvider",component:s.pK}]})]})}}}]);
//# sourceMappingURL=606.2c44197e.chunk.js.map