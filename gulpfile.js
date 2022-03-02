const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const pug = require("gulp-pug");
const typescript = require("gulp-typescript");
const webp = require("gulp-webp");

// Sassをコンパイルする
const compileSass = () =>
    src("src/scss/*.scss")
        .pipe(
            sass({
                outputStyle: "expanded"
            })
        )
        .pipe(dest("dist/css"));

// Sassファイルを監視
const watchSassFiles = () =>
    watch("src/scss/*.scss", compileSass);

// pugをコンパイルする
const compilePug = () =>
    src("src/pug/*.pug")
        .pipe(
            pug({
                pretty: true
            })
        )
        .pipe(dest("dist"));

// pugファイルを監視
const watchPugFiles = () =>
    watch("src/pug/*.pug", compilePug);

// typescriptをコンパイルする
const compileTs = () =>
    src("src/ts/*.ts")
        .pipe(typescript())
        .js
        .pipe(dest("dist/js"));

// typescriptファイルを監視
const watchTsFiles = () =>
    watch("src/ts/*.ts", compileTs);

// 画像をコンパイルする
const compileImg = () =>
    src("src/img/*.{jpg,jpeg,png,PNG,JPG}")
        .pipe(webp())
        .pipe(dest("dist/img"));

// 画像ファイルを監視
const watchImgFiles = () =>
    watch("src/img/*.{jpg,jpeg,png,PNG,JPG}", compileImg);

// npx gulpで実行される関数
exports.default = () =>
    watchSassFiles();
    watchPugFiles();
    watchTsFiles();
    watchImgFiles();