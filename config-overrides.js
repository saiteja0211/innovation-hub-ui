const { override, fixBabelImports, addLessLoader,overrideDevServer,watchAll } = require('customize-cra');
const reactAppRewireBuildDev = require('react-app-rewire-build-dev');


const options = {
	outputPath : "./build/innovation-hub-ui/",  /***** required *****/
	basename : "."
}

//this is so that we can perform npm start and it will build
//static files to our SS-Web folder to serve them.
//with this, we will be able to save edits and the application will rebuild
//with the static files in the right folder location

const rewriteDevServer = (config, env) => {
  return reactAppRewireBuildDev(config, env, options);
}

module.exports = override(
		rewriteDevServer,
	    fixBabelImports('import', {
	      libraryName: 'antd',
	      libraryDirectory: 'es',
	     style: true,
	    }),
	   addLessLoader({
	     javascriptEnabled: true,
	     modifyVars: { '@primary-color': '#c00' },
	   }),
	);
