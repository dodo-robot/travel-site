# travel-site

this project is the end result for this udemy course

[course on web development](https://www.udemy.com/git-a-web-developer-job-mastering-the-modern-workflow/learn/v4/overview)


## Features

- Mobile First 
- CSS written following BEM methodology
- PostCSS as css-preprocessor so to use nested css rules, mixins and variables
- gulp for the automatic building of css, js and html and live monitoring
- webpack to compile js modules so to use 'classes'
- modernizr to detect browser features
- gulp-svg-sprite to use sprite instead of multiple icons for better performance
- gulp-svg2png to create png versions of icons for legacy browser
- lazysizes for image lazy loading 
- picturefill that enables support for the picture element in browsers that do not yet support them


## local development

clone the repository and from within the directory run

''' gulp watch '''

this command will trigger a task called 'watch' defined in the gulp/tasks/watch.js file.
this task will open up a live instance of the site and will automatically reload changes to the page

## build

to create a deployable version of the site you just need to run

''' gulp build '''

this will lunch the 'build' command defined in gulp/tasks/build.js file 
this will trigger all the necessary tasks to build a deployable version of the site
the more compact possible

## live 

[live version](https://dodo-robot.github.io/travel-site/)



 
