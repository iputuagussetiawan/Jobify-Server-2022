
const errorHandlerMiddleware = (err, req, res, next) => {
 console.log(err);
 res.status(500).json({msg:'There Was An Error'});
}

export default errorHandlerMiddleware
