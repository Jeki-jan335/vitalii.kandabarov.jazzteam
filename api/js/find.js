const find = (start) => {
    $.ajax({
        url: SEARCH_URL + start,
    }).done((start) =>  {
        localStorage.setItem("serach", JSON.stringify(start));
        for (let show in start) {
            mass.push(start[show].show.name);
        }
        $(() =>  {
            mass
        });
        $("#search").autocomplete({
            source: mass
        });
    })
};
