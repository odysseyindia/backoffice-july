let mix = require('laravel-mix');

mix.js('public/js/app.js', 'js')
   .sass('src/sass/main.scss', 'css')
   .setPublicPath('public');