const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('dev'));
const POART = 3000;
const toureRouter = require('./routes/tourRoute');
const userRouter =require('./routes/userRoute');
app.use(express.static(`${__dirname}/public`))
app.use('/api/v1/tours',toureRouter);
app.use('/api/v1/users',userRouter);
app.listen(POART, () => {
    console.log('app is listening on poart 3000');
})