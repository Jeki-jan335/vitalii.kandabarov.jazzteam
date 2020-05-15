const shows = (i) => {
    let noRating = "not Rating";
    $.ajax({
        url: SHOWS_URL + i,
    }).done(function(card) {
        ratings.push(card);
        cardLink = () => {
            $(".card-link").click(function() {
                setLocal("find", $(this)[0].dataset.target);
                // localStorage.setItem("find", $(this)[0].dataset.target);
            });
        };
        noRating = card.rating.average ? card.rating.average : noRating;
        $(".row.hidden-md-up").append(`
            <div class="col-md-4" id="padding-card">
                <div class="card">
                    <div class="pic">
                        <img class="card-img-top" src="${card.image.medium}" alt="poster">
                    </div>
                    <div class="card-padding">
                        <h4 class="card-title">"${card.name}"</h4>
                        <h6 class="card-subtitle text-muted">${card.genres}</h6>
                        <p class="card-text p-y-1">"${textReplace(card.summary)}"</p>
                        <p class="card-rating">TVShow Rating : ${noRating}</p>
                        <a href="detail.html" data-target="${card.id}"  class="card-link">Go over</a>
                    </div>
                </div>
            </div>
        `);
        cardLink();
    }).fail((jqXHR, textStatus, errorThrown) => {
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
                        <p class="card-rating">TVShow Rating : "Was Deleted"</p>
                        <a class="nav-link disabled" id="disabled" href="#" tabindex="-1" aria-disabled="true">Go over</a>
                    </div>
                </div>
            </div>
        `);
    });
};
