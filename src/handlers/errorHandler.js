const HTTPStatus = require('http-status');
function ErrorRequestHandler(err, req, res, next) {
    console.error("errorHandler was executed: " + err);
    if(err.statusCode == HTTPStatus.BAD_REQUEST) {
        res.status(HTTPStatus.BAD_REQUEST).json({
            message: "Bad request"
        })
    }else if(err.statusCode == HTTPStatus.INTERNAL_SERVER_ERROR) {
        res.status(500).json({
            message: "Internal server error"
        });
    }
    next();
}
exports.ErrorRequestHandler = ErrorRequestHandler;