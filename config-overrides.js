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
            '@primary-color': '#15395b',
            '@link-color': '#8c8c8c',
            '@text-color-secondary': '#8c8c8c',
            '@disabled-color': 'rgba(0, 0, 0, 0.2)',
            '@text-color': 'rgba(0, 0, 0, 0.65)',
            '@font-family': '"Baloo 2", cursive, serif',
            '@border-radius-base': '6px',
            // ...darkThemeVars,
        }
    })
)
