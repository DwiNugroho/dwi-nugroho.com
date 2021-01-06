import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.6,
  headerFontFamily: ['Inter', 'sans-serif'],
  bodyFontFamily: ['Inter', 'sans-serif'],
  bodyWeight: 300,
  headerWeight: 700,
  headerLineHeight: 1.4,
  // See below for the full list of options.
});

// Output CSS as string.
typography.toString();

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles();
