var body = document.querySelector("body");
        var menu = document.getElementById("menu");
        var all_menu = document.getElementById("all-menu");
        var chevron = document.getElementById("chevron-menu");

        function switchMenu(){
            menu.classList.toggle("on");
            menu.classList.toggle("off");
        }
        function menu_appear(){
            body.classList.toggle("menuOn");
            all_menu.classList.toggle("disappear");
            menu.classList.remove("on");
            menu.classList.remove("off");
            menu.classList.add("off");
            chevron.classList.toggle("chevron-phases");
        }