const responseHelper = require('../../helpers/response-helper');

const connection = require('../../config');

function all(req, res) {
    connection.query('SELECT * FROM countries', (err, rows) => {
        if (!err) {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(JSON.stringify(
                {
                    'result' : 'success',
                    'data': rows
                })
            );
        } else {
            res.status(400).send(err);
        }
    });
}

function create(req, res) {
    let response;
    const name = req.body.name;
    const isoCode = req.body.isoCode;
    const callingCode = req.body.callingCode;
    const timeZone = req.body.timeZone;
    const currency = req.body.currency;
    const isActive = !!req.body.isActive;

    if (typeof name === 'undefined' && typeof isoCode === 'undefined' && typeof callingCode === 'undefined' && typeof timeZone === 'undefined' && typeof currency === 'undefined' ) {
        response = {
            'result': 'error',
            'msg': 'Please fill required details'
        };

        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(JSON.stringify(response));
    }

    connection.query('INSERT INTO countries (name, isoCode, callingCode, timeZone, currency, isActive) VALUES (?, ?, ?, ?, ?, ?)',
        [name, isoCode, callingCode, timeZone, currency, isActive],
        function(err, result) {
            responseHelper.handleSuccessOrErrorMessage(err, result, res);
        });


}

function get(req, res) {
    connection.query('SELECT * FROM countries WHERE id = ? LIMIT 1', [req.params.id], (err, rows) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(JSON.stringify(
            {
                'result' : 'success',
                'data': rows[0]
            })
        );
    })
}

function update(req, res) {

    let response;
    const name = req.body.name;
    const isoCode = req.body.isoCode;
    const callingCode = req.body.callingCode;
    const timeZone = req.body.timeZone;
    const currency = req.body.currency;
    const isActive = !!req.body.isActive;

    if (typeof name === 'undefined' && typeof isoCode === 'undefined' && typeof callingCode === 'undefined' && typeof timeZone === 'undefined' && typeof currency === 'undefined' ) {
        response = {
            'result': 'error',
            'msg': 'Please fill required details'
        };

        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(JSON.stringify(response));
    }

    connection.query('UPDATE countries SET name = ?, isoCode = ?, callingCode = ?, timeZone = ?, currency = ?, isActive = ?',
        [name, isoCode, callingCode, timeZone, currency, isActive],
        function(err, result) {
            responseHelper.handleSuccessOrErrorMessage(err, result, res);
        });
}

function destroy(req, res) {
    connection.query('DELETE FROM countries WHERE id = ?', [req.params.id], function(err, result) {
        responseHelper.handleSuccessOrErrorMessage(err, result, res);
    });
}


module.exports = {
    all: all,

    create: create,

    get: get,

    update: update,

    destroy: destroy
};