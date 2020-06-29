/*
 * @vbuilder.config.js
 */

// vbuilder 文档：http://vbuilder-doc.daily.vdian.net/vbuilder/doc/default-vue-scaffold-config.html

module.exports = ({ userFolder, srcFolder, buildFolder, currentEnv, webpack, webpackDevServer }) => {
    const path = require('path');
    const fse = require('fs-extra');

    return {
        buildFolder: './dist',
        noPolyfill: true,

        commonJs: false,

        // 可以合并到 webpack 的配置，按照 webpack 的配置风格
        webpackConfig: {
            output: {
                library: 'getUrlsInString',
                libraryTarget: 'umd'
            }
        },

        afterBuild() {
            const buildFolder = path.join(userFolder, 'dist');
            const from = path.join(buildFolder, 'static/index/index.js');

            // 要发布的目标文件
            const to = path.join(buildFolder, 'index.js');

            fse.copySync(from, to);

            if (/build/.test(currentEnv)) {
                fse.removeSync(path.join(buildFolder, 'pages'));
                fse.removeSync(path.join(buildFolder, 'static'));
            }
        }
    };
};

module.exports.vbuilderScaffold = '@vdian/mechanic';
