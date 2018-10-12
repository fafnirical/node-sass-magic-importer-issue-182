const gulp = require('gulp');
const sass = require('gulp-sass');
const sassMagicImporter = require('node-sass-magic-importer');
const path = require('path');

const rootPath = path.resolve('.');
const rootDistPath = path.join(rootPath, 'dist');

function build() {
	const srcPath = path.join(rootPath, 'src/index.scss');
	const distPath = path.join(rootDistPath, 'css');

	return gulp
		.src(srcPath)
		.pipe(
			sass({
				importer: sassMagicImporter(),
			}).on('error', sass.logError),
		)
		.pipe(gulp.dest(distPath));
}
module.exports.build = build;

module.exports.default = build;
