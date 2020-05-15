const getSortRating = () => {
    const result = [];
    let resultSort = [];
    let pullSort = [];
    let sortName = [];
    let noRating = "Not Rating";
    for (let j in sortRating) {
        pullSort.push(sortRating[j].value);
    }
    for (let sort in pullSort) {
        sortName.push(pullSort[sort]);
    }
    const map = new Map();
    for (const item of sortName) {
        if (!map.has(item.id)) {
            map.set(item.id, true);
            result.push({
                id: item.id,
                name: item.name,
                image: item.image,
                genres: item.genres,
                summary: item.summary,
                rating: item.rating
            });
        }
    }
    resultSort.push(result);
    for (let post in resultSort) {
        for (let img in resultSort[post]) {
            noRating = resultSort[post][img].rating.average ? resultSort[post][img].rating.average : noRating;

            $(".row.hidden-md-up").hide().fadeIn(200).append(`
                        <div class="col-md-4" id="padding-card">
                            <div class="card">
                                <div class="pic">
                                    <img class="card-img-top" src="${resultSort[post][img].image.medium}" alt="poster">
                                </div>
                                <div class="card-padding">
                                    <h4 class="card-title">"${resultSort[post][img].name}"</h4>
                                    <h6 class="card-subtitle text-muted">${resultSort[post][img].genres}</h6>
                                    <p class="card-text p-y-1">"${textReplace(resultSort[post][img].summary)}"</p>
                                    <p class="card-rating">TVShow Rating : ${noRating}</p>
                                    <a href="./detail.html" data-target="${resultSort[post][img].id}" class="card-link">Go over</a>
                                </div>
                            </div>
                        </div>
                    `);
        }
    }
    $(".card-link").click(function(e) {
        setLocal("find", $(this)[0].dataset.target);
        // localStorage.setItem("find", $(this)[0].dataset.target);
    });

};
