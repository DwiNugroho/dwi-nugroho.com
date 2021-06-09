// const React = require('react');
// const { Helmet } = require('react-helmet');

// exports.onRenderBody = (
//   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
//   pluginOptions
// ) => {
//   const helmet = Helmet.renderStatic();
//   setHtmlAttributes(helmet.htmlAttributes.toComponent());
//   setBodyAttributes(helmet.bodyAttributes.toComponent());
//   const head = [
//     helmet.title.toComponent(),
//     helmet.meta.toComponent(),
//     helmet.link.toComponent(),
//     helmet.noscript.toComponent(),
//     helmet.script.toComponent(),
//     helmet.style.toComponent(),
//   ];
//   setHeadComponents(head);

//   console.log('helmet');
//   console.log(helmet.meta.toComponent());
//   console.log('head');
//   console.log(head);
// };

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents();

  headComponents.sort((x, y) => {
    if (
      (x.props && x.props['typography']) ||
      (y.props && y.props['typography'])
    ) {
      return -1;
    }
    if (x.props && x.props['data-react-helmet']) {
      return -1;
    }
    if (y.props && y.props['data-react-helmet']) {
      return 1;
    }
    return 0;
  });

  replaceHeadComponents(headComponents);
};
