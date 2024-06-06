import type { Config } from 'tailwindcss'

const config: Config = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/react-daisyui/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
       sm: '576px',
       md: '768px',
       lg: '992px',
       xl: '1216px',
    },
    extend: {
       fontFamily: {
          sans: ['var(--font-plus-jakarta-sans)'], // this font-family is used for the footer
          work: ['var(--font-work-sans)'], // this font-family is used for the headings
          serif: ['var(--font-source-serif-pro)'], // this font-family is used for the body like ( p, li, etc. )
       },
    },
 },

 // add daisyUI plugin
 plugins: [require('daisyui')],

 // daisyUI config (optional)
 daisyui: {
    styled: true,
    themes: [
       {
          light: {
             ...require('daisyui/src/theming/themes')['light'],
             primary: '#4B6BFB',
             'primary-content': '#FFFFFF',
             'primary-focus': '#405BD5',
             secondary: '#696A75',
             'secondary-focus': '#3B3C4A',
             'secondary-content': '#FFFFFF',
             accent: '#3CC288',
             'accent-focus': '#33A574',
             'accent-content': '#FFFFFF',
             neutral: '#181A2A',
             'neutral-focus': '#141624',
             'neutral-content': '#FFFFFF',
             'base-100': '#FFFFFF',
             'base-200': '#F6F6F7',
             'base-300': '#E8E8EA',
             'base-content': '#181A2A',
             info: '#181454',
             success: '#009485',
             warning: '#ff9900',
             error: '#ff5724',
          },
       },
       {
          dark: {
             ...require('daisyui/src/theming/themes')['dark'],
             primary: '#4B6BFB',
             'primary-content': '#FFFFFF',
             'primary-focus': '#405BD5',
             secondary: '#696A75',
             'secondary-focus': '#3B3C4A',
             'secondary-content': '#FFFFFF',
             accent: '#3CC288',
             'accent-focus': '#33A574',
             'accent-content': '#FFFFFF',
             neutral: '#181A2A',
             'neutral-focus': '#141624',
             'neutral-content': '#FFFFFF',
             'base-100': '#181A2A',
             'base-200': '#141624',
             'base-300': '#E8E8EA',
             'base-content': '#DCDDDF',
             info: '#FFFFFF',
             success: '#009485',
             warning: '#ff9900',
             error: '#ff5724',
             ".ql-toolbar.ql-snow": {
               "background-color":"oklch(0.897346 0.002928 264.541032 /1)"
             },
             ".select__value-container.select__value-container--is-multi.css-1fdsijx-ValueContainer": {
               "background-color":"#181a2a"
             },
             ".select__indicators.css-1hb7zxy-IndicatorsContainer": {
               "background-color":"#181a2a"
             },
             ".select__menu.css-1nmdiq5-menu": {
               "background-color":"#181a2a"
             },
             ".select__menu.css-1nmdiq5-menu>*>*:hover": {
               "background-color":"rgba(58, 58, 58, 0.5)"
             },
             ".select__menu.css-1nmdiq5-menu>*>*": {
               "background-color":"#181a2a"
             },
             ".select__multi-value__remove.css-12a83d4-MultiValueRemove > svg": {
               "color":"black"
             },
            //  ".select__menu.css-1nmdiq5-menu>*>*": {
            //    "background-color":"#181a2a"
            //  },
             ".select__value-container.select__value-container--is-multi.select__value-container--has-value.css-3w2yfm-ValueContainer": {
               "background-color":"#181a2a"
             },
          },
       }
    ],
    base: true,
    utils: true,
    logs: false,
    rtl: false,
    prefix: '',
    darkTheme:  ["class", '[data-theme="dark"]'],
 },
}
export default config
