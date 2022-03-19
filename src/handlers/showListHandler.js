const showListService = require('../service/showListService');

const getShowList = (req, res) => {
    const type = req.params.type;
    const index = req.params.index;
    const count = 100;
    showListService.getShowList(type, index, count, function(e, shows) {
        if(e) {
            const err = {
                error: e,
                result: false
            }
            res.status(201).send(err);
        } else {
            const showList = {
                showDetails: shows,
                result: true
            }
            res.status(200).send(showList);
        }
    });
}

module.exports = {
    getShowList
}