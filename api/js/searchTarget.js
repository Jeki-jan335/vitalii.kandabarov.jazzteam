const searchTarget = () => {
    $('#search').on('keyup', function(e)  {
        // console.log(e.target.value);
        let search = e.target.value;
        find(search);
    });
}
