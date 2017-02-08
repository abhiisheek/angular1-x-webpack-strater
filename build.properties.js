const destCFFFolderName = '';
const srcPath = 'app';
const distPath = 'dist';
const destinationPath = `${distPath}/${destCFFFolderName}`;
export default {
  srcPath: `${srcPath}`,
  distPath: `${distPath}`,
  destinationPath: `${destinationPath}`,
  vendorFileName: 'vendor.js',
  appFileName: 'app.js',
  prodContextRoot: `/${destCFFFolderName}`
}
