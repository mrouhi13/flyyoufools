const {override, fixBabelImports, addLessLoader} = require('customize-cra')
const darkThemeVars = require('antd/dist/dark-theme');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@primary-color': '#0074B7',
            '@font-family': '"Baloo 2", cursive;',
            '@border-radius-base': '6px',
            // ...darkThemeVars,
        }
    })
)
