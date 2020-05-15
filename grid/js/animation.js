window.onload = function() {

    let a = document.querySelector('#animationJs');
    a.onmouseenter = function(e) {
        return document.getElementById('animationJs').classList.add("js_anim");
    };
    a.onmouseleave = function(e) {
        return document.getElementById('animationJs').classList.remove("js_anim");
    };

    let style = document.createElement('style');
    style.typeText = 'text/css';
    let h = '.follow__animation:hover{transition: all 1s ease-out;' +
        '   -webkit-transform: scale(0.9);\n' +
        '      -moz-transform: scale(0.9);\n' +
        '      -o-transform: scale(0.9);}';
    let hover = document.createTextNode(h);
    let head = document.getElementsByTagName('head')[0];
    style.appendChild(hover);
    head.appendChild(style);

    let rotate = document.querySelector('#rotate');
    rotate.onmouseenter = function(e) {
        return rotate.style.cssText = "transform: rotate(35deg); transition: 5s; ";
    };
    rotate.onmouseleave = function(e) {
        return rotate.style.cssText = "transform: rotate(0deg); transition: 1s; ";
    };

    let firstElem = document.getElementById("animation_ja_cycles");

    function getSizeFirst(elem) {
        let i = getComputedStyle(elem).width.slice(0, -6);

        function sSize() {
            if (i > 0) {
                --i;
                elem.style.width = i + "px";
                setTimeout(function() {
                    sSize();
                }, 0)
            } else {
                mSize();
            }
        }

        function mSize() {
            if (i < 250) {
                ++i;
                elem.style.width = i + "px";
                setTimeout(function() {
                    mSize();
                }, 0)
            } else {
                sSize();
            }
        }
        sSize();
    }
    getSizeFirst(firstElem);
};
