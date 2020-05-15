const setCookiesAll = () => {
    let clicks = true;
    $('#setCoockie').on('click', function()  {
        if (clicks == true) {
            if (Cookies.get("favorites") == undefined) {
                Cookies.set("favorites", Cookies.get("favorites") + "?" + findLocal());
                $("#add").fadeIn(2500);
                setTimeout(($("#add").fadeOut(2500)), 1000000);
                setSession();
                showSession();
            } else {
                if (Cookies.get("favorites").split("?").indexOf(findLocal()) == -1) {
                    setSession();
                    Cookies.set("favorites", Cookies.get("favorites") + "?" + findLocal());
                    $("#add").fadeIn("slow");
                    setTimeout(($("#add").fadeOut(2500)), 1000000);
                    showSession();
                } else {
                    $("#add").fadeIn("slow");
                    setTimeout(($("#add").fadeOut(2500)), 1000000);
                }
            }
            return clicks = false;
        }
    });
};
