import createError from 'http-errors';
import express, { json, urlencoded } from 'express';
import logger from 'morgan';
import indexRouter from './routes/index';
import usersRouter from './routes/users';

var app = express();



app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({
    status: false,
    error: req.app.get('env') === 'development' ? err : {}
  })
});
const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Working on port ${port}`))

export default app;
