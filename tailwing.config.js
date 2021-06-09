module.exports = {
    purge: [
    './public/**/*.html',
    './src/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
    extend: {
        colors: {
        primary: '#F8F8F8',
        secondary: '#212121'
        }
    },
    },
    variants: {
    extend: {},
    },
    plugins: [],
}