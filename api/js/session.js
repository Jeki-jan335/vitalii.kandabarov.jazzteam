const setSession = () => {
    let getSession = sessionStorage.setItem("added", Number(sessionStorage.getItem("added")) + 1);
}

const showSession = function()  {
    let sessionGet = sessionStorage.getItem("added");
    if (sessionGet == null) {} else {
        $('.added').empty();
        $('.added').fadeIn(800).append(`<span>+${sessionGet}</span>`);
    }
}
