const showListAccessor = require('../accessor/showListAccessor');

const getShowList = (type, index, count, showCB) => {
    const skipShows = (index - 1) * count;
    showListAccessor.getShowList(type, skipShows, count, function(err, shows) {
        if(err) {
            showCB('Show is not Found');
        } else {
            if(shows && shows.length > 0 && shows[0].length > 0) {
                const showDetail = {
                    shows: shows[0],
                    limit: count,
                    type: type,
                    totalShows: shows[1]
                }
                showCB(undefined, showDetail);
            } else {
                showCB('Show is not Found');
            }
        }
    });
}

module.exports = {
    getShowList
};