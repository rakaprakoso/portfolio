const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

// require('laravel-mix-purgecss');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

 mix.js('resources/js/app.js', 'public/js')
 .react()
 .sass('resources/sass/app.scss', 'public/css')
 .options({
     postCss: [ tailwindcss('./tailwind.config.js') ],
 })
 // .purgeCss({
 //     enabled: mix.inProduction(),
 //     folders: ['src', 'templates'],
 //     extensions: ['html', 'js', 'php', 'vue'],
 // })
 ;
