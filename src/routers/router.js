const productRouter = require('./product.routers');
const categoryRouter = require('./category.routers');
const userRouter = require('./user.routers');
const authRouter = require('./auth.routers');

function router(app) {
    app.use('/api/product', productRouter)
    app.use('/api/category', categoryRouter)
    app.use('/api/users', userRouter)
    app.use('/account', authRouter)
}

module.exports = router;