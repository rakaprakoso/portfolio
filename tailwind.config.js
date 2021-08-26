const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.js',
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            primary: {
                50: '#007d85',
                100: '#00adb5',
                200: '#5cdfe7',
            },
            accent: {
                100: '#FFAF36',
                200: '#FFE141',
            },
            primaryDark: {
                50: '#636871',
                100: '#393e46',
                200: '#13181f',
            },
            primaryLight: {
                50: '#ffffff',
                100: '#EDEDED',
                200: '#bbbbbb',
            },
            // primary:'#00ADB5',
            grayDark: '#95a5a6',
            darkBlue: '#1f2029',
            // white:'#FFFFFF',
            gray: colors.coolGray,
            blue: colors.sky,
            red: colors.rose,
            pink: colors.fuchsia,
        },
        fontFamily: {
            display: ['Jost', 'Monoton', 'Righteous', 'cursive'],
            sans: ['Poppins', 'Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
                'big': '6rem',
            }
        }
    },
    variants: {
        extend: {
            borderColor: ['focus-visible'],
            opacity: ['disabled'],
        }
    },
}
