
import{StatusCodes} from 'http-status-codes'
const errorHandlerMiddleware = (err, req, res, next) => {
 console.log(err);
 const defaultError={
    StatusCode:StatusCodes.INTERNAL_SERVER_ERROR,
    msg:'Someting went wrong, try again later'
 }
 if(err.name==='ValidationError'){
    defaultError.StatusCode=StatusCodes.BAD_REQUEST
    defaultError.msg=err.message
 }
 res.status(defaultError.StatusCode).json({msg:defaultError.msg});
}

export default errorHandlerMiddleware
