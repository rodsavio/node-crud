const adminData = require('../routes/admin');
const shopRoutes = require('../routes/shop');

exports.routesConfiguration = (app) => {
    app.use('/admin', adminData.routes);
    app.use(shopRoutes);

    app.use((req, res, next) => {
        res.status(404).sendFile(path.join(rootPath, 'views', '404.html'));
    });
};