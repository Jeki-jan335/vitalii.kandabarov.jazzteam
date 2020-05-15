const clickSearch = () => {
    $("#searchGo").click((e) => {
        setLocal("search", $('#search').val());
        console.log($('#search').val());
        // localStorage.setItem("search", $('#search').val());
    });
}
