import Typography from 'typography';
// import Theme from 'typography-theme-wordpress-2012';
import Theme from 'typography-theme-github';
// import Theme from 'typography-theme-ocean-beach';

Theme.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
});

const typography = new Typography(Theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
