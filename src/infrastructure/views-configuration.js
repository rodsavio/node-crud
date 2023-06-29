// const expressHbs = require('express-handlebars');

exports.setViewEngine = (app) => {
    // pugjs
    // app.set('view engine', 'pug');
    // app.set('views', 'views');

    // handlebarsjs
    // app.engine('hbs', expressHbs());
    // app.set('view engine', 'hbs')
    // app.set('views', 'views');

    //ejs
    app.set('view engine', 'ejs');
    app.set('views', 'src/views');
};