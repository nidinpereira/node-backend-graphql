function handleSuccessOrErrorMessage(err, result, res) {
    if (!err){
        if (result.affectedRows !== 0) {
            response = {'result' : 'success'};
        } else {
            response = {'msg' : 'No Result Found'};
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(JSON.stringify(response));
    } else {
        res.status(400).send(err);
    }
}

module.exports = {
    handleSuccessOrErrorMessage: handleSuccessOrErrorMessage
};