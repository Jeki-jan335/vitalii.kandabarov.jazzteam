$(document).ready(() => {
    searchTarget();
    showSession();
    clickSearch();
    let noRating = "not Rating";
    array = JSON.parse(localStorage.getItem('serach'));
    let noImage = "";
    let tag = "";
    if (array.length > 0) {
        for (let i in array) {
            noImage = array[i].show.image ? array[i].show.image.medium : "./img/noImg.png";
            tag = ((array[i].show.genres).length == 0) ? "Missing Tags" : array[i].show.genres;
            noRating = array[i].show.rating.average ? array[i].show.rating.average : noRating;
            $(".row.hidden-md-up").append(`
                <div class="col-md-4" id="padding-card">
                    <div class="card">
                        <div class="pic">
                            <img class="card-img-top" src="${noImage}" alt="poster">
                        </div>
                        <div class="card-padding">
                            <h4 class="card-title">"${array[i].show.name}"</h4>
                            <h6 class="card-subtitle text-muted">${tag}</h6>
                             <p class="card-text p-y-1">"${textReplace(array[i].show.summary)}"</p>
                             <p class="card-rating">TVShow Rating : ${noRating}</p>
                            <a href="./detail.html" data-target="${array[i].show.id}" class="card-link">Go over</a>
                        </div>
                    </div>
                </div>
            `);
            noImage = "";
            tag = "";
        }
    } else {
        $(".row.hidden-md-up").append(`
            <h1>Not Found</h1>
            `);
    }
    $(".card-link").click(function(e) {
        setLocal("find", $(this)[0].dataset.target);
        // localStorage.setItem("find", $(this)[0].dataset.target);
    });
});

askLoader();
