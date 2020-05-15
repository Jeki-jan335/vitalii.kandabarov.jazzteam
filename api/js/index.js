$(document).ready(() => {
    let i = 1;
    searchTarget();
    showSession();
    clickSearch();
    for (i; i < 7; i++) {
        shows(i);
    };
    $('#more').click(function()  {
        for (let q = 0; q < 6; q++) {
            i++;
            shows(i);
        }
    });
    $("#option1").on('click',function ()  {
        ratingDelete();
        sortRatingFunction();
        getSortRating();
    });
});
