'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = _interopDefault(require('styled-components'));
var framerMotion = require('framer-motion');
var ReactDOM = _interopDefault(require('react-dom'));

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "@font-face {\r\n  font-family: \"Quicksand\";\r\n  src: url(\"assets/fonts/Quicksand_300.ttf\") format(\"truetype\");\r\n  font-weight: 300;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Quicksand\";\r\n  src: url(\"assets/fonts/Quicksand_400.ttf\") format(\"truetype\");\r\n  font-weight: 400;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Quicksand\";\r\n  src: url(\"assets/fonts/Quicksand_500.ttf\") format(\"truetype\");\r\n  font-weight: 500;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Quicksand\";\r\n  src: url(\"assets/fonts/Quicksand_700.ttf\") format(\"truetype\");\r\n  font-weight: 700;\r\n  font-style: normal;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family:  'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto';\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  background-color: #fff;\r\n}\r\n\r\n*::-webkit-scrollbar {\r\n  width: 6px;\r\n  height: 6px;\r\n}\r\n\r\n*::-webkit-scrollbar-track {\r\n  background-color: transparent;\r\n}\r\n\r\n*::-webkit-scrollbar-thumb {\r\n  background-color: #00000033;\r\n}\r\n\r\ncode {\r\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}";
styleInject(css_248z);

const DefaultTheme = {
    colors: {
        primary: { principal: '#000000', contrast: '#FFFFFF' },
        secondary: { principal: '#FFFFFF', contrast: '#000000' },
        danger: { principal: '#D40000', contrast: '#FFFFFF' },
        success: { principal: '#00D415', contrast: '#FFFFFF' }
    },
    transitions: {
        avarage: '0.3s ease-in-out',
        fast: '0.1s ease-in-out',
        slow: '0.7s ease-in-out'
    },
    borderRadius: '10px',
    boxShadow: {
        active: '0 1px 5px rgba(0,0,0,0.3)',
        normal: '0 2px 10px rgba(0,0,0,0.3)'
    },
    font: {
        h1: {
            fontSize: '2rem',
            fontWeight: 400,
            lineHeight: '1.8rem',
            textAlign: 'center'
        },
        h2: {
            fontSize: '1.5rem',
            fontWeight: 300,
            lineHeight: '1.8rem',
            textAlign: 'center'
        },
        input: {
            fontSize: '1.2rem',
            fontWeight: 300,
            textAlign: 'left',
            fontFamily: `-apple-system, BlinkMacSystemFont, 'Quicksand', 'Segoe UI', 'Roboto'`
        },
        p1: {
            fontSize: '1.2rem',
            fontWeight: 300,
            lineHeight: '1.2rem',
            textAlign: 'left'
        }
    }
};

let GlobalTheme = DefaultTheme;
const setGlobalTheme = (theme) => {
    GlobalTheme = theme;
};
const getGlobalTheme = () => {
    return GlobalTheme;
};

const AccountSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" }));
const AccountCogSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M10 4A4 4 0 0 0 6 8A4 4 0 0 0 10 12A4 4 0 0 0 14 8A4 4 0 0 0 10 4M17 12C16.87 12 16.76 12.09 16.74 12.21L16.55 13.53C16.25 13.66 15.96 13.82 15.7 14L14.46 13.5C14.35 13.5 14.22 13.5 14.15 13.63L13.15 15.36C13.09 15.47 13.11 15.6 13.21 15.68L14.27 16.5C14.25 16.67 14.24 16.83 14.24 17C14.24 17.17 14.25 17.33 14.27 17.5L13.21 18.32C13.12 18.4 13.09 18.53 13.15 18.64L14.15 20.37C14.21 20.5 14.34 20.5 14.46 20.5L15.7 20C15.96 20.18 16.24 20.35 16.55 20.47L16.74 21.79C16.76 21.91 16.86 22 17 22H19C19.11 22 19.22 21.91 19.24 21.79L19.43 20.47C19.73 20.34 20 20.18 20.27 20L21.5 20.5C21.63 20.5 21.76 20.5 21.83 20.37L22.83 18.64C22.89 18.53 22.86 18.4 22.77 18.32L21.7 17.5C21.72 17.33 21.74 17.17 21.74 17C21.74 16.83 21.73 16.67 21.7 16.5L22.76 15.68C22.85 15.6 22.88 15.47 22.82 15.36L21.82 13.63C21.76 13.5 21.63 13.5 21.5 13.5L20.27 14C20 13.82 19.73 13.65 19.42 13.53L19.23 12.21C19.22 12.09 19.11 12 19 12H17M10 14C5.58 14 2 15.79 2 18V20H11.68A7 7 0 0 1 11 17A7 7 0 0 1 11.64 14.09C11.11 14.03 10.56 14 10 14M18 15.5C18.83 15.5 19.5 16.17 19.5 17C19.5 17.83 18.83 18.5 18 18.5C17.16 18.5 16.5 17.83 16.5 17C16.5 16.17 17.17 15.5 18 15.5Z" }));
const CheckSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" }));
const ChevronDownSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }));
const ChevronLeftSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" }));
const ChevronRightSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" }));
const ChevronUpSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }));
const CloseSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }));
const CloudSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03Z" }));
const CloudAlertSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M19,20H6C2.71,20 0,17.29 0,14C0,10.9 2.34,8.36 5.35,8.03C6.6,5.64 9.11,4 12,4C15.64,4 18.67,6.59 19.35,10.03C21.95,10.22 24,12.36 24,15C24,17.74 21.74,20 19,20M11,15V17H13V15H11M11,13H13V8H11V13Z" }));
const CloudRefreshSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M12 4C15.64 4 18.67 6.59 19.35 10.04C21.95 10.22 24 12.36 24 15C24 17.76 21.76 20 19 20H6C2.69 20 0 17.31 0 14C0 10.91 2.34 8.36 5.35 8.04C6.6 5.64 9.11 4 12 4M17 13V9L16 10C15.09 8.79 13.64 8 12 8C9.24 8 7 10.24 7 13C7 15.76 9.24 18 12 18C14.05 18 15.81 16.77 16.58 15H14.24C13.69 15.61 12.89 16 12 16C10.34 16 9 14.66 9 13C9 11.34 10.34 10 12 10C13.09 10 14.04 10.58 14.56 11.44L13 13H17Z" }));
const CloudSyncSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M19 12V13.5C21.21 13.5 23 15.29 23 17.5C23 18.32 22.75 19.08 22.33 19.71L21.24 18.62C21.41 18.28 21.5 17.9 21.5 17.5C21.5 16.12 20.38 15 19 15V16.5L16.75 14.25L16.72 14.22C16.78 14.17 16.85 14.13 19 12M19 23V21.5C16.79 21.5 15 19.71 15 17.5C15 16.68 15.25 15.92 15.67 15.29L16.76 16.38C16.59 16.72 16.5 17.1 16.5 17.5C16.5 18.88 17.62 20 19 20V18.5L21.25 20.75L21.28 20.78C21.22 20.83 21.15 20.87 19 23M13 17.5C13 13.91 15.91 11 19.5 11C20.78 11 21.97 11.38 23 12C22.13 10.9 20.84 10.14 19.35 10.03C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.03C2.34 8.36 0 10.9 0 14C0 17.31 2.69 20 6 20H13.5C13.18 19.23 13 18.39 13 17.5Z" }));
const CogSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" }));
const ExitSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M13.34,8.17C12.41,8.17 11.65,7.4 11.65,6.47A1.69,1.69 0 0,1 13.34,4.78C14.28,4.78 15.04,5.54 15.04,6.47C15.04,7.4 14.28,8.17 13.34,8.17M10.3,19.93L4.37,18.75L4.71,17.05L8.86,17.9L10.21,11.04L8.69,11.64V14.5H7V10.54L11.4,8.67L12.07,8.59C12.67,8.59 13.17,8.93 13.5,9.44L14.36,10.79C15.04,12 16.39,12.82 18,12.82V14.5C16.14,14.5 14.44,13.67 13.34,12.4L12.84,14.94L14.61,16.63V23H12.92V17.9L11.14,16.21L10.3,19.93M21,23H19V3H6V16.11L4,15.69V1H21V23M6,23H4V19.78L6,20.2V23Z" }));
const FileDownloadSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M14,2H6C4.89,2 4,2.89 4,4V20C4,21.11 4.89,22 6,22H18C19.11,22 20,21.11 20,20V8L14,2M12,19L8,15H10.5V12H13.5V15H16L12,19M13,9V3.5L18.5,9H13Z" }));
const FingerprintSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M17.81,4.47C17.73,4.47 17.65,4.45 17.58,4.41C15.66,3.42 14,3 12,3C10.03,3 8.15,3.47 6.44,4.41C6.2,4.54 5.9,4.45 5.76,4.21C5.63,3.97 5.72,3.66 5.96,3.53C7.82,2.5 9.86,2 12,2C14.14,2 16,2.47 18.04,3.5C18.29,3.65 18.38,3.95 18.25,4.19C18.16,4.37 18,4.47 17.81,4.47M3.5,9.72C3.4,9.72 3.3,9.69 3.21,9.63C3,9.47 2.93,9.16 3.09,8.93C4.08,7.53 5.34,6.43 6.84,5.66C10,4.04 14,4.03 17.15,5.65C18.65,6.42 19.91,7.5 20.9,8.9C21.06,9.12 21,9.44 20.78,9.6C20.55,9.76 20.24,9.71 20.08,9.5C19.18,8.22 18.04,7.23 16.69,6.54C13.82,5.07 10.15,5.07 7.29,6.55C5.93,7.25 4.79,8.25 3.89,9.5C3.81,9.65 3.66,9.72 3.5,9.72M9.75,21.79C9.62,21.79 9.5,21.74 9.4,21.64C8.53,20.77 8.06,20.21 7.39,19C6.7,17.77 6.34,16.27 6.34,14.66C6.34,11.69 8.88,9.27 12,9.27C15.12,9.27 17.66,11.69 17.66,14.66A0.5,0.5 0 0,1 17.16,15.16A0.5,0.5 0 0,1 16.66,14.66C16.66,12.24 14.57,10.27 12,10.27C9.43,10.27 7.34,12.24 7.34,14.66C7.34,16.1 7.66,17.43 8.27,18.5C8.91,19.66 9.35,20.15 10.12,20.93C10.31,21.13 10.31,21.44 10.12,21.64C10,21.74 9.88,21.79 9.75,21.79M16.92,19.94C15.73,19.94 14.68,19.64 13.82,19.05C12.33,18.04 11.44,16.4 11.44,14.66A0.5,0.5 0 0,1 11.94,14.16A0.5,0.5 0 0,1 12.44,14.66C12.44,16.07 13.16,17.4 14.38,18.22C15.09,18.7 15.92,18.93 16.92,18.93C17.16,18.93 17.56,18.9 17.96,18.83C18.23,18.78 18.5,18.96 18.54,19.24C18.59,19.5 18.41,19.77 18.13,19.82C17.56,19.93 17.06,19.94 16.92,19.94M14.91,22C14.87,22 14.82,22 14.78,22C13.19,21.54 12.15,20.95 11.06,19.88C9.66,18.5 8.89,16.64 8.89,14.66C8.89,13.04 10.27,11.72 11.97,11.72C13.67,11.72 15.05,13.04 15.05,14.66C15.05,15.73 16,16.6 17.13,16.6C18.28,16.6 19.21,15.73 19.21,14.66C19.21,10.89 15.96,7.83 11.96,7.83C9.12,7.83 6.5,9.41 5.35,11.86C4.96,12.67 4.76,13.62 4.76,14.66C4.76,15.44 4.83,16.67 5.43,18.27C5.53,18.53 5.4,18.82 5.14,18.91C4.88,19 4.59,18.87 4.5,18.62C4,17.31 3.77,16 3.77,14.66C3.77,13.46 4,12.37 4.45,11.42C5.78,8.63 8.73,6.82 11.96,6.82C16.5,6.82 20.21,10.33 20.21,14.65C20.21,16.27 18.83,17.59 17.13,17.59C15.43,17.59 14.05,16.27 14.05,14.65C14.05,13.58 13.12,12.71 11.97,12.71C10.82,12.71 9.89,13.58 9.89,14.65C9.89,16.36 10.55,17.96 11.76,19.16C12.71,20.1 13.62,20.62 15.03,21C15.3,21.08 15.45,21.36 15.38,21.62C15.33,21.85 15.12,22 14.91,22Z" }));
const KeySVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M7,14A2,2 0 0,1 5,12A2,2 0 0,1 7,10A2,2 0 0,1 9,12A2,2 0 0,1 7,14M12.65,10C11.83,7.67 9.61,6 7,6A6,6 0 0,0 1,12A6,6 0 0,0 7,18C9.61,18 11.83,16.33 12.65,14H17V18H21V14H23V10H12.65Z" }));
const KeyChangeSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M6.5,2C8.46,2 10.13,3.25 10.74,5H22V8H18V11H15V8H10.74C10.13,9.75 8.46,11 6.5,11C4,11 2,9 2,6.5C2,4 4,2 6.5,2M6.5,5A1.5,1.5 0 0,0 5,6.5A1.5,1.5 0 0,0 6.5,8A1.5,1.5 0 0,0 8,6.5A1.5,1.5 0 0,0 6.5,5M6.5,13C8.46,13 10.13,14.25 10.74,16H22V19H20V22H18V19H16V22H13V19H10.74C10.13,20.75 8.46,22 6.5,22C4,22 2,20 2,17.5C2,15 4,13 6.5,13M6.5,16A1.5,1.5 0 0,0 5,17.5A1.5,1.5 0 0,0 6.5,19A1.5,1.5 0 0,0 8,17.5A1.5,1.5 0 0,0 6.5,16Z" }));
const LicenseSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M9 10A3.04 3.04 0 0 1 12 7A3.04 3.04 0 0 1 15 10A3.04 3.04 0 0 1 12 13A3.04 3.04 0 0 1 9 10M12 19L16 20V16.92A7.54 7.54 0 0 1 12 18A7.54 7.54 0 0 1 8 16.92V20M12 4A5.78 5.78 0 0 0 7.76 5.74A5.78 5.78 0 0 0 6 10A5.78 5.78 0 0 0 7.76 14.23A5.78 5.78 0 0 0 12 16A5.78 5.78 0 0 0 16.24 14.23A5.78 5.78 0 0 0 18 10A5.78 5.78 0 0 0 16.24 5.74A5.78 5.78 0 0 0 12 4M20 10A8.04 8.04 0 0 1 19.43 12.8A7.84 7.84 0 0 1 18 15.28V23L12 21L6 23V15.28A7.9 7.9 0 0 1 4 10A7.68 7.68 0 0 1 6.33 4.36A7.73 7.73 0 0 1 12 2A7.73 7.73 0 0 1 17.67 4.36A7.68 7.68 0 0 1 20 10Z" }));
const ListSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M3,4H7V8H3V4M9,5V7H21V5H9M3,10H7V14H3V10M9,11V13H21V11H9M3,16H7V20H3V16M9,17V19H21V17H9" }));
const MagnifySVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" }));
const MapMarkerSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" }));
const MinusSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M19,13H5V11H19V13Z" }));
const PlusSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" }));
const TrashSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" }));
const WarehouseSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M6 19H8V21H6V19M12 3L2 8V21H4V13H20V21H22V8L12 3M8 11H4V9H8V11M14 11H10V9H14V11M20 11H16V9H20V11M6 15H8V17H6V15M10 15H12V17H10V15M10 19H12V21H10V19M14 19H16V21H14V19Z" }));
const WorkerSVG = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default.createElement("path", { d: "M12,15C7.58,15 4,16.79 4,19V21H20V19C20,16.79 16.42,15 12,15M8,9A4,4 0 0,0 12,13A4,4 0 0,0 16,9M11.5,2C11.2,2 11,2.21 11,2.5V5.5H10V3C10,3 7.75,3.86 7.75,6.75C7.75,6.75 7,6.89 7,8H17C16.95,6.89 16.25,6.75 16.25,6.75C16.25,3.86 14,3 14,3V5.5H13V2.5C13,2.21 12.81,2 12.5,2H11.5Z" }));
const Icons = {
    account: AccountSVG,
    accountCog: AccountCogSVG,
    check: CheckSVG,
    chevronDown: ChevronDownSVG,
    chevronLeft: ChevronLeftSVG,
    chevronRight: ChevronRightSVG,
    chevronUp: ChevronUpSVG,
    close: CloseSVG,
    cloud: CloudSVG,
    cloudAlert: CloudAlertSVG,
    cloudRefresh: CloudRefreshSVG,
    cloudSync: CloudSyncSVG,
    cog: CogSVG,
    exit: ExitSVG,
    fileDownload: FileDownloadSVG,
    fingerprint: FingerprintSVG,
    key: KeySVG,
    keyChange: KeyChangeSVG,
    license: LicenseSVG,
    list: ListSVG,
    magnify: MagnifySVG,
    mapMarker: MapMarkerSVG,
    minus: MinusSVG,
    plus: PlusSVG,
    trash: TrashSVG,
    warehouse: WarehouseSVG,
    worker: WorkerSVG
};

const CirclesSVG = (props) => React__default.createElement("svg", Object.assign({ width: "45", height: "45", viewBox: "0 0 45 45", xmlns: "http://www.w3.org/2000/svg", stroke: "#000" }, props),
    React__default.createElement("g", { fill: "none", fillRule: "evenodd", transform: "translate(1 1)", strokeWidth: "2" },
        React__default.createElement("circle", { cx: "22", cy: "22", r: "6", strokeOpacity: "0" },
            React__default.createElement("animate", { attributeName: "r", begin: "1.5s", dur: "3s", values: "6;22", calcMode: "linear", repeatCount: "indefinite" }),
            React__default.createElement("animate", { attributeName: "stroke-opacity", begin: "1.5s", dur: "3s", values: "1;0", calcMode: "linear", repeatCount: "indefinite" }),
            React__default.createElement("animate", { attributeName: "stroke-width", begin: "1.5s", dur: "3s", values: "2;0", calcMode: "linear", repeatCount: "indefinite" })),
        React__default.createElement("circle", { cx: "22", cy: "22", r: "6", strokeOpacity: "0" },
            React__default.createElement("animate", { attributeName: "r", begin: "3s", dur: "3s", values: "6;22", calcMode: "linear", repeatCount: "indefinite" }),
            React__default.createElement("animate", { attributeName: "stroke-opacity", begin: "3s", dur: "3s", values: "1;0", calcMode: "linear", repeatCount: "indefinite" }),
            React__default.createElement("animate", { attributeName: "stroke-width", begin: "3s", dur: "3s", values: "2;0", calcMode: "linear", repeatCount: "indefinite" })),
        React__default.createElement("circle", { cx: "22", cy: "22", r: "8" },
            React__default.createElement("animate", { attributeName: "r", begin: "0s", dur: "1.5s", values: "6;1;2;3;4;5;6", calcMode: "linear", repeatCount: "indefinite" }))));
const Spinners = {
    circles: CirclesSVG
};

const IconElement = styled.div `
    width: ${(props) => props.width ? props.width : '100%'};
    height: ${(props) => props.height ? props.height : '100%'};

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 100%;
        height: 100%;
    }

    path {
        fill: ${(props) => props.color ? DefaultTheme.colors[props.color][props.invert ? 'contrast' : 'principal'] : DefaultTheme.colors['primary'][props.invert ? 'contrast' : 'principal']};
    }
`;

function Icon(props) {
    return (React__default.createElement(IconElement, Object.assign({}, props), Icons[props.name]));
}

const ModalBaseElement = styled.div `
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;

    .__overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
        background-color: rgba(0, 0, 0, .3);
        opacity: 0;
    }

    .__container {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 30px;
        background-color: ${() => getGlobalTheme().colors.secondary.principal};
        border-radius: calc(${() => getGlobalTheme().borderRadius} * 2);
        box-shadow: ${() => getGlobalTheme().boxShadow.normal};
        opacity: 0;
        max-width: calc(100% - 30px);
        max-height: calc(100% - 30px);

        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
const ModalCloseButton = styled(Icon) `
    position: absolute;
    right: 5px;
    top: 5px;

    cursor: pointer;
    transition: ${() => getGlobalTheme().transitions.fast};
    &:active {
        transform: scale(0.90);
    }
`;

const DEFAULT_MODAL_CONFIG = {
    id: '__default-modal',
    disableBackdropClose: false,
    disableCloseButton: false,
    preventScroll: true,
    rootId: 'root'
};
class ModalController {
    constructor(content, options) {
        this.content = content;
        this.overlayControls = framerMotion.useAnimation();
        this.containerControls = framerMotion.useAnimation();
        this.container = document.createElement('aside');
        this.status = 'closed';
        this.config = Object.assign({}, DEFAULT_MODAL_CONFIG, options);
        this.container.setAttribute('id', this.config.id);
        this.injectProps({ controller: this });
    }
    getStatus() {
        return this.status;
    }
    open() {
        if (this.status !== 'closed') {
            throw new Error('Modal isn\'t closed!');
        }
        this.appendNode();
        this.renderReactElement();
        // Animation
        this.containerControls.start({
            opacity: [0, 1],
            scale: [0.5, 1],
            transition: { delay: 0.1, duration: .2, ease: 'backOut' }
        });
        return this.overlayControls.start({
            opacity: [0, 1],
            transition: { duration: .4 }
        }).then(() => {
            this.status = 'open';
            return Promise.resolve();
        });
    }
    close() {
        if (this.status !== 'open') {
            throw new Error('Modal isn\'t open!');
        }
        this.status = 'closing';
        // Animation
        this.containerControls.start({
            opacity: [1, 0],
            scale: [1, 0.5],
            transition: { duration: .2, ease: 'backIn' },
        });
        return this.overlayControls.start({
            opacity: [1, 0],
            transition: { duration: .3 },
        }).then(() => Promise.resolve(this.removeNode()));
    }
    injectProps(props) {
        this.content = React__default.cloneElement(this.content, Object.assign({}, props));
        if (this.status === 'open') {
            this.renderReactElement();
        }
    }
    setDisabledBackdrop(value) {
        this.config.disableBackdropClose = value;
    }
    setDisabledCloseButto(value) {
        this.config.disableCloseButton = value;
        this.renderReactElement();
    }
    createReactElement() {
        return (React__default.createElement(ModalBaseElement, null,
            React__default.createElement(framerMotion.motion.div, { className: "__overlay", onClick: () => (this.config.disableBackdropClose ? undefined : this.close()), animate: this.overlayControls }),
            React__default.createElement(framerMotion.motion.div, { className: "__container", animate: this.containerControls },
                !this.config.disableCloseButton && React__default.createElement(ModalCloseButton, { onClick: () => this.close(), width: "30px", height: "30px", name: "close" }),
                this.content)));
    }
    appendNode() {
        var _a;
        this.status = 'opening';
        (_a = document.getElementById(this.config.rootId)) === null || _a === void 0 ? void 0 : _a.appendChild(this.container);
        if (this.config.preventScroll) {
            document.body.style.overflow = 'hidden';
        }
    }
    removeNode() {
        var _a;
        ReactDOM.unmountComponentAtNode(this.container);
        (_a = document.getElementById(this.config.rootId)) === null || _a === void 0 ? void 0 : _a.removeChild(this.container);
        if (this.config.preventScroll) {
            document.body.style.overflow = 'auto';
        }
        this.status = 'closed';
    }
    renderReactElement() {
        if (this.status === 'opening' || this.status === 'open') {
            ReactDOM.render(this.createReactElement(), this.container);
        }
        else {
            throw new Error('Bad time react element render.');
        }
    }
}
function useModal(content, options) {
    return React.useState(new ModalController(content, options))[0];
}

const ToastElement = styled(framerMotion.motion.div) `
    position: fixed;
    width: 1024px;
    left: calc(50% - 512px);
    padding: 15px;
    bottom: -100px;
    z-index: 99;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => getGlobalTheme().colors[props.color].principal};
    color: ${(props) => getGlobalTheme().colors[props.color].contrast};
    font-size: ${() => getGlobalTheme().font.h2.fontSize};
    font-weight: ${() => getGlobalTheme().font.h2.fontWeight};
    border-radius: ${() => getGlobalTheme().borderRadius};
    box-shadow: ${() => getGlobalTheme().boxShadow.normal};

    @media screen and (max-width: 1024px) {
        width: calc(100% - 30px);
        left: 15px;
        font-size: calc(${() => getGlobalTheme().font.h2.fontSize} / 2);
    }
`;

const DEFAULT_CONFIG = {
    id: '__default-pop-up',
    rootId: 'root',
    color: 'primary',
    timeout: 2000
};
class ToastController {
    constructor(child, options) {
        this.child = child;
        this.animationController = framerMotion.useAnimation();
        this.container = document.createElement('aside');
        this.status = 'closed';
        this.clickListener = (event) => {
            if (!this.container.contains(event.target) || this.container === event.target) {
                this.hide();
            }
        };
        this.config = Object.assign({}, DEFAULT_CONFIG, options);
        this.container.setAttribute('id', this.config.id);
        this.hideTimeout = this.animationTimeout = 0;
    }
    show() {
        var _a;
        clearTimeout(this.animationTimeout);
        clearTimeout(this.hideTimeout);
        if (!!!this.child) {
            return;
        }
        this.status = 'opening';
        (_a = document.getElementById(this.config.rootId)) === null || _a === void 0 ? void 0 : _a.appendChild(this.container);
        ReactDOM.render(this.createReactElement(), this.container);
        setTimeout(() => window.addEventListener('click', this.clickListener));
        this.hideTimeout = setTimeout(() => this.hide(), this.config.timeout);
        this.animationController.start({
            bottom: [-100, 15],
            opacity: [0, 1],
            transition: { duration: .2, ease: 'backOut' }
        });
        this.animationTimeout = setTimeout(() => {
            this.status = 'opened';
        }, 200);
    }
    hide() {
        if (this.status !== 'opened') {
            return;
        }
        this.status = 'closing';
        clearTimeout(this.hideTimeout);
        window.removeEventListener('click', this.clickListener);
        this.animationController.start({
            bottom: [15, -100],
            opacity: [1, 0],
            transition: { duration: .2, ease: 'backIn' }
        });
        this.animationTimeout = setTimeout(() => {
            var _a;
            (_a = document.getElementById(this.config.rootId)) === null || _a === void 0 ? void 0 : _a.removeChild(this.container);
            this.status = 'closed';
        }, 200);
    }
    setChild(newChild) {
        this.child = newChild;
    }
    createReactElement() {
        return (React__default.createElement(ToastElement, { color: this.config.color, animate: this.animationController }, this.child));
    }
}
function useToast(child, options) {
    return React.useState(new ToastController(child, options))[0];
}

const IconButton = styled(framerMotion.motion.button) `
    all: unset;
    background: transparent;
    min-height: 40px;
    min-width: 40px;
    margin: 3px;
    filter: drop-shadow(${() => getGlobalTheme().boxShadow.normal});
    transition: all ${() => getGlobalTheme().transitions.fast};
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:active {
        filter: drop-shadow(${() => getGlobalTheme().boxShadow.active});
        transform: scale(0.96);
    }

    span {
        max-width: 300px;
        flex: 1;
        text-align: center;
    }
`;

const OutlineButton = styled(framerMotion.motion.button) `
    all: unset;
    background: transparent;
    color: ${(props) => props.color ? getGlobalTheme().colors[props.color].principal : getGlobalTheme().colors['primary'].principal};
    border: 1px solid ${(props) => props.color ? getGlobalTheme().colors[props.color].principal : getGlobalTheme().colors['primary'].principal};
    padding: 10px 25px;
    min-height: 38px;
    border-radius: ${() => getGlobalTheme().borderRadius};
    margin: 3px;
    transition: all ${() => getGlobalTheme().transitions.fast};
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:active {
        background: ${(props) => props.color ? getGlobalTheme().colors[props.color].principal : getGlobalTheme().colors['primary'].principal}20;
    }

    span {
        max-width: 300px;
        flex: 1;
        text-align: center;
    }
`;

const SolidButton = styled(framerMotion.motion.button) `
    all: unset;
    background: ${(props) => props.color ? getGlobalTheme().colors[props.color].principal : getGlobalTheme().colors['primary'].principal};
    padding: 10px 25px;
    min-height: 40px;
    border-radius: ${() => getGlobalTheme().borderRadius};
    box-shadow: ${() => getGlobalTheme().boxShadow.normal};
    margin: 3px;
    transition: all ${() => getGlobalTheme().transitions.fast};
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:active {
        box-shadow: ${() => getGlobalTheme().boxShadow.active};
        transform: scale(0.96);
    }

    span {
        max-width: 300px;
        flex: 1;
        text-align: center;
        color: ${(props) => props.color ? getGlobalTheme().colors[props.color].contrast : getGlobalTheme().colors['primary'].contrast};
    }
`;

function Button(props) {
    switch (props.styleType) {
        case 'icon':
            return (React__default.createElement(IconButton, Object.assign({}, props), props.icon && React__default.createElement(Icon, { name: props.icon, color: props.color, invert: false, height: "40px", width: "40px" })));
        case 'outline':
            return (React__default.createElement(OutlineButton, Object.assign({}, props),
                props.icon && React__default.createElement(Icon, { name: props.icon, color: props.color, invert: false, height: "40px", width: "40px", style: { marginRight: '15px' } }),
                props.text && React__default.createElement("span", null, props.text)));
        case 'solid':
        default:
            return (React__default.createElement(SolidButton, Object.assign({}, props),
                props.icon && React__default.createElement(Icon, { name: props.icon, color: props.color, invert: true, height: "40px", width: "40px", style: { marginRight: '15px' } }),
                props.text && React__default.createElement("span", null, props.text)));
    }
}

exports.Button = Button;
exports.DefaultTheme = DefaultTheme;
exports.Icon = Icon;
exports.Icons = Icons;
exports.Spinners = Spinners;
exports.getGlobalTheme = getGlobalTheme;
exports.setGlobalTheme = setGlobalTheme;
exports.useModal = useModal;
exports.useToast = useToast;
//# sourceMappingURL=index.js.map
