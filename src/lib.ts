import requestPromise = require("request-promise");

const getRequestPromise = async function(options) {
    return requestPromise(options);
};

module.exports = {
    getRequestPromise: getRequestPromise,
};
