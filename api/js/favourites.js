$(document).ready(() => {

    let tmp;
    let string = Cookies.get("favorites");
    if (string == undefined) {
        tmp = "";
    } else {
        tmp = string.split("?");
    }
    clickSearch();
    searchTarget();
    find();
    showSession();


    for (let j = 0; j < tmp.length; j++) {
        if (tmp[j] == "undefined") {
            continue;
        }
        $.ajax({
            url: SHOWS_URL + tmp[j],
        }).done((favorite) => {
            sortFav.push(favorite);
            let noRating = 0;
            noRating = favorite.rating.average ? favorite.rating.average : noRating;
            $(".card-link").click(function() {
                setLocal("find", $(this)[0].dataset.target);
                // localStorage.setItem("find", $(this)[0].dataset.target);
            });
            $(".row.hidden-md-up").append(`
                <div class="col-md-4" id="padding-card">
                    <div class="card">
                        <div class="pic">
                            <img class="card-img-top" src="${favorite.image.medium}" alt="poster">
                        </div>
                        <div class="card-padding">
                            <h4 class="card-title">"${favorite.name}"</h4>
                            <h6 class="card-subtitle text-muted">${favorite.genres}</h6>
                            <p class="card-text p-y-1">"${textReplace(favorite.summary)}"</p>
                            <p class="card-rating">TVShow Rating : ${noRating}</p>
                            <a href="detail.html" data-target="${favorite.id}"  class="card-link">Go over</a>
                        </div>
                    </div>
                </div>
            `);
        }).fail(function(jqXHR, textStatus, errorThrown) {
            $(".row.hidden-md-up").append(`
                <div class="col-md-4" id="padding-card">
                    <div class="card">
                        <div class="pic">
                            <img class="card-img-top" src="./img/noImg.png" alt="WasDeleted">
                        </div>
                        <div class="card-padding">
                            <h4 class="card-title">"Was Deleted"</h4>
                            <h6 class="card-subtitle text-muted">No tags</h6>
                            <p class="card-text p-y-1">"Was Deleted"</p>
                            <a class="nav-link disabled" id="disabled" href="#" tabindex="-1" aria-disabled="true">Go over</a>
                        </div>
                    </div>
                </div>
            `);
        });
    }

});
