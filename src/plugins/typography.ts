import Typography from 'typography';

const data = {
  baseFontSize: '16px',
  baseLineHeight: 1.6,
  headerFontFamily: ['Inter', 'sans-serif'],
  bodyFontFamily: ['Inter', 'sans-serif'],
  headerWeight: 600,
  bodyWeight: 400,
  paragraphSpacing: 0.1,
  headerGray: 0,
  bodyGray: 0,
  blockMarginBottom: 0.6,
  headerLineHeight: 1.4,
  scaleRatio: 2.8,
  // See below for the full list of options.
};

const typography = new Typography(data);

// Output CSS as string.
typography.toString();

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles();

export default typography;
