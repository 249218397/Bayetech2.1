﻿var clients = [];
$(function () {
    debugger;
    clients = $.clientsInit();
})
$.clientsInit = function () {
    var dataJson = {
        dataItems: [],
        organize: [],
        role: [],
        duty: [],
        user: [],
        authorizeMenu: [],
        authorizeButton: []
    };
    var init = function () {
        $.ajax({
            url: "/api/Navigation/CheckAccount",
            type: "get",
            dataType: "json",
            async: false,
            success: function (ret) {
                //alert('tt');
                var data = ret;
                //console.info(ret);

                //dataJson.dataItems = data.dataItems;
                //dataJson.organize = data.organize;
                //dataJson.role = data.role;
                //dataJson.duty = data.duty;
                dataJson.authorizeMenu = eval(data.authorizeMenu);
                //dataJson.authorizeButton = data.authorizeButton;
            }
        });
    }
    init();
    return dataJson;
}