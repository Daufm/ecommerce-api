function requestsLogger(req,res,next) {
    console.log(`[CUSTOM LOGGER] ${new Date().toISOString()}  - ${req.method} ${req.originalUrl}`);
    next();
}



module.exports = requestsLogger;