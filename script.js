(function () {
    var travel = document.querySelectorAll(".container img");
    var dots = document.getElementsByClassName("dot");
    var cur = 0;
    var timer;
    var isTrans;

    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", getClickHandler(i));
    }

    function getClickHandler(i) {
        return function (e) {
            console.log(i);
            if (e.target.classList.contains("on")) {
                return;
            }
            if (isTrans) {
                return;
            }
            clearTimeout(timer);
            carrousel(i);
            e.target.classList.add("on");
        };
    }

    document.addEventListener("transitionend", function (e) {
        if (e.target.classList.contains("offscreen-left")) {
            e.target.classList.remove("offscreen-left");
            timer = setTimeout(carrousel, 3000);
        }
        isTrans = false;
    });

    timer = setTimeout(carrousel, 3000);

    function carrousel(next) {
        isTrans = true;
        travel[cur].classList.remove("onscreen");
        dots[cur].classList.remove("on");
        travel[cur].classList.add("offscreen-left");

        if (typeof next == "number") {
            cur = next;
        } else if (++cur == travel.length) {
            cur = 0;
        }

        travel[cur].classList.add("onscreen");
        dots[cur].classList.add("on");
    }
})();
