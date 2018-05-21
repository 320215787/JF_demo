< script type = "text/javascript" >
    function showJdPage() {
        self.parent.frames["mainFrame"].document.body.innerHTML = "<div id='mainJDDiv'  style='overflow:scroll'></div>";
        $("#mainJDDiv", self.parent.frames["mainFrame"].document).load("https://raw.githubusercontent.com/LittleSheep520/JF_demo/master/jd.html");
    }

function showTbPage() {
    self.parent.frames["mainFrame"].document.body.innerHTML = "<div id='mainTBDiv'  style='overflow:scroll'></div>";
    $("#mainTBDiv", self.parent.frames["mainFrame"].document).load("https://raw.githubusercontent.com/LittleSheep520/JF_demo/master/tb.html");
}

$(document).ready(function() {
    //page
    $("<div hidden='hidden' class='sep'></div><div id='jd-menu' class='nav' onclick=showJdPage()><div></div>京东订单</div><div class='sep'></div>").appendTo("#main")
    $("<div hidden='hidden' class='sep'></div><div id='tb-menu' class='nav' onclick=showTbPage()><div></div>淘宝订单</div><div class='sep'></div>").appendTo("#main")

    $("<div hidden='hidden' id='mainJdPluginJs-menu' class='nav'><div></div>mainPluginJs</div>").appendTo("#main")
    $("<div hidden='hidden' id='mainTbPluginJs-menu' class='nav'><div></div>mainPluginJs</div>").appendTo("#main")

    //css
    $("#jd-menu").css({ "background-image": "url(https://raw.githubusercontent.com/LittleSheep520/JF_demo/master/jd_menu_btn.png)", "background-repeat": "no-repeat", "background-position": "center top" });
    $("#tb-menu").css({ "background-image": "url(https://raw.githubusercontent.com/LittleSheep520/JF_demo/master/tb_menu_btn.png)", "background-repeat": "no-repeat", "background-position": "center top" });
    //js

    $("#mainJdPluginJs-menu").load("https://raw.githubusercontent.com/LittleSheep520/JF_demo/master/jd.html");
    $("#mainTbPluginJs-menu").load("https://raw.githubusercontent.com/LittleSheep520/JF_demo/master/tb.html");
    console.log("MAIN JS laod");
}); <
/script>