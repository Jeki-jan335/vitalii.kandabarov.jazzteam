const sortRatingFunction = (text) => {
    for (var key in ratings) {
          sortRating.push({
              key: ratings[key].rating.average,
              value: ratings[key]
          });
      }
      sortRating.sort((a, b) => {
          return a.key - b.key;
      }).reverse();

};
