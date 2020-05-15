$(document).ready(() => {
    searchTarget();
    clickSearch();
    setCookiesAll();
    let noImageDetail = "";
    let seasonCont = [];
    let noNameDetail = "Deleted";
    let noTagesDetail = "Deleted";
    let noRating = "not Rating";
    let summary;
    let noLanguage = "Something was wrong";
    let noStatus = "Something was wrong";
    let noGenres = "Something was wrong";
    let noPremiered = "Something was wrong";
    let noSummary = "Something was wrong";
    let noType = "Something was wrong";
    const DELETE_TAG = /(?!(\<br\>|\<br\s\/\>))<\/?[^>]+>/g;
    $.ajax({
        url: SHOWS_URL + findLocal(),
    }).done((info) => {
        $.ajax({
            url: SHOWS_URL + findLocal() + SHOWS_URL_EPISOD + findLocal(),
        }).done((episod) => {
            summary = info.summary;
            noImageDetail = info.image ? info.image.original : "./img/noImg.png"; // работает
            noNameDetail = info.name ? info.name : noNameDetail;
            noLanguage = info.language ? info.language : noLanguage;
            noStatus = info.status ? info.status : noStatus;
            noGenres = info.genres ? info.genres : noGenres;
            noPremiered = info.premiered ? info.premiered : noPremiered;
            summary = info.summary ? info.summary : noSummary;
            noType = info.type ? info.type : noType;
            const seassonis = () => {
                if(episod.length > 0){
                    return seasonMax = Math.max(...seasonCont);
                    // seasonMax = seasonMax ? seasonMax : "Not Found";
                    console.log(seasonMax);
                }else {
                    return seasonMax =  "Not Found";
                }
            }

            noRating = info.rating.average ? info.rating.average : noRating;
            for (let i in episod) {
                seasonCont.push(episod[i].season);
            }
            let removeTags = summary.replace(DELETE_TAG, '');
            $(".row").append(`
                <div class="col-12 col-sm-12">
                    <h1>${noNameDetail}</h1>
                </div>
                <div class="col-12 col-sm-6">
                    <img src="${noImageDetail}" width="100%" alt="picture">
                </div>
                <div class="col-12 col-sm-6">
                    <div class="card-status" >
                        <p class="Type"> Type : <span>${noType}</span> </p>
                        <p class="Language"> Language : <span> ${noLanguage}</span> </p>
                        <p class="Status"> Status: <span> ${noStatus}</span> </p>
                        <p class="Genres"> Genres: <span> ${noGenres}</span> </p>
                        <p class="Episodes"> Episodes ordered: <span> ${seassonis()} episodes </span> </p>
                        <p class="Premiered"> Premiered: <span> ${noPremiered} </span> </p>
                        <p class="Rating"> Rating: <span> ${noRating} </span> </p>
                    </div>
                    <div class="Text">
                        <p class="text-justify font-italic text-tags">${replaceDetail(removeTags)}</p>
                    </div>
                </div>
         `);
        });
    });
});
askLoader();
