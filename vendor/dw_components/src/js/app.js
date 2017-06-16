if ("onhashchange" in window) {
    window.onhashchange = function () {
        document.getElementById('page').innerHTML = location.hash;
    };
} else {
    alert("The browser doesn't supports the hashchange event!");
}