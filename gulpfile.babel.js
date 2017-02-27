import gulp from 'gulp';
import pug from 'gulp-pug';
import stylus from 'gulp-stylus';
import webpack from 'webpack-stream';
import webpackConfig from './webpack.config';
import webserver from 'gulp-webserver';

gulp.task('html', () =>
  gulp.src('src/**/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('build'))
);

gulp.task('css',  () =>
  gulp.src('src/**/*.styl')
    .pipe(stylus({
      compress: true,
    }))
    .pipe(gulp.dest('build'))
);

gulp.task('js', () =>
  gulp.src('src/main.js')
  .pipe(webpack(webpackConfig))
  .pipe(gulp.dest('build'))
);

gulp.task('build', ['html', 'css', 'js']);

gulp.task('server', () =>
  gulp.src('build')
    .pipe(webserver({
      livereload: true,
      fallback: 'index.html',
    }))
);

gulp.task('watch', () =>
  gulp.watch('src/**', ['build'])
);

gulp.task('default', ['build', 'watch', 'server']);
