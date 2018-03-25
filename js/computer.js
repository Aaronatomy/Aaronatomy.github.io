function menuFixed(id) {
        var obj = document.getElementById(id);
        var objHeight = 50;

        window.onscroll = function () {
            changePos(id, objHeight);
        }
    }

    function changePos(id, height) {
        var obj = document.getElementById(id);
        var objNav = document.getElementById('navPad');
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop < height) {
            objNav.style.position = 'absolute';
            objNav.style.background = 'rgba(255, 255, 255, 0.0)';
            objNav.style.top = '35px';

            obj.style.backgroundSize = "20%";
            obj.style.height = "80px";
            obj.style.top = "35px";
            obj.style.fontSize = '16px';

            $(".navBar").height(80);
            $(".user").width(36);
            $(".user").height(36);
        }
        else {
            objNav.style.position = 'fixed';
            objNav.style.background = 'rgba(0, 0, 0, 0.8)';
            objNav.style.top = '0px';

            obj.style.backgroundSize = "10%";
            obj.style.height = "40px";
            obj.style.top = "0px";
            obj.style.fontSize = '12px';

            $(".navBar").height(40);
            $(".user").width(24);
            $(".user").height(24);
        }
    }

    window.onload = function () {
        menuFixed('navEX');
    }