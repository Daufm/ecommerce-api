const {v4: uuidv4} = require('uuid');

function requestIdGenerator(req, res, next) {

     req.requestId = uuidv4();

    console.log('[REQUEST ID] Generated Request ID:', req.requestId);
    next();
}


module.exports = requestIdGenerator;
