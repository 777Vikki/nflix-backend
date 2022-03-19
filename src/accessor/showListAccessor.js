const { showType } = require('../constants/showConstants');
const movieListModel = require('../db/models/movieListModels').movieList;

const getShowList = (type, skipShows, count, showCB) => {
    if(type === showType.movie) {
        Promise.all([
            movieListModel.find().sort({released: -1}).skip(skipShows).limit(count).exec(),
            movieListModel.count().exec()
        ]).then((result) => showCB(undefined, result))
          .catch((err) => showCB(err)); 
    }
}

module.exports = {
    getShowList
};