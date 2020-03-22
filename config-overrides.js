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
            '@font-family': '"Baloo 2", cursive, serif',
            '@border-radius-base': '6px',
            // ...darkThemeVars,
        }
    })
)
