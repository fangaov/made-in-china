var gulp = require('gulp');
gulp.task('html', async()=>{ 
    gulp.src('./views/*.html')
    .pipe(gulp.dest('./dist'));
});
gulp.task('js', async()=>{ 
    gulp.src('./js/*.js')
    .pipe(gulp.dest('./dist/js/'));
});
gulp.task('css', async()=>{ 
    gulp.src('./css/*.css')
    .pipe(gulp.dest('./dist/css/'));
});
gulp.task('img', async()=>{ 
    gulp.src('./img/**')
    .pipe(gulp.dest('./dist/img/'));
});
gulp.task('packAll',async()=>{
    var runTasks =  gulp.series('html','js','css','img');
    return runTasks();
});