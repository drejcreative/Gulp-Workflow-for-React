# Gulp Workflow for React
![Gulp Workflow](gulp.jpg)

This is Gulp workflow created for easier work with ReactJs and Sass. It use Babel and browserify for covering imports and JSX and converting them to one js file. Aslo, it cover converting scss to css. BrowserSync is integrated so we have live server and live preview with browser reload on file changes. it can be started with `gulp` comand.

We've also built a second task, build, that creates a dist folder for the production ready application. We compiled Sass into CSS, compile js from react files, optimized all our assets, and copied the necessary folders into the dist folder. To run this task, we just have to type `gulp build` into the command line.

* Spins up a web server
* Compiles Sass to CSS
* Using Autoprefixer to write vendor-free CSS code
* Convert react js and jsx to regular js
* Refreshes the browser automatically whenever you save a file
* Optimizes all assets (CSS, JS, fonts, and images) for production
* Convert a set of images into a spritesheet and CSS variables via gulp


##Instructions

Make sure you have these installed

1. [Node.js](www.nodejs.org).
2. [git](www.git-scm.com).
3. Gulp via the Mac terminal or CMD on a PC > npm install --global gulp-cli

Clone this repository into your local machine using the terminal (mac) or Gitbash (PC)   
`git clone https://github.com/drejcreative/Gulp-Workflow.git`

CD to the folder with workflows   
Run > `npm install` to install the project dependencies
Run > `bower install` to install the bower dependencies if you have it

Run the Gulp command > `gulp` to start a server  
Run the > `gulp build` to create a production ready code in dist folde
