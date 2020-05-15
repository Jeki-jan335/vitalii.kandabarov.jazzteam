let waitNews = new Promise(
    function(resolve, reject) {
        resolve(shows());
    }
);
let hideLoader = function() {
    return new Promise(
        function(resolve, reject) {
            resolve($('#cube-loader').hide());
        }
    );
};
let askLoader = function() {
    waitNews
        .then(setTimeout(hideLoader, 2000))
        .catch(function(error) {

        });
};
