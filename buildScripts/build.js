// Allowing console calls below since this is a build file.
/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import fsExtra from 'fs-extra';
import buildProperties from '../build.properties';

console.log("Clearing contents of dist dir...");

fsExtra.emptyDirSync(buildProperties.distPath);

console.log('Generating minified bundle for production via Webpack. This will take a moment...');

webpack(webpackConfig).run((err, stats) => {
  if (err) { // so a fatal error occurred. Stop here.
    console.log(err);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error));
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: ');
    jsonStats.warnings.map(warning => console.log(warning));
  }

  console.log(`Webpack stats: ${stats}`);

  console.log(`Application has been compiled in production mode`);

  return 0;
});
