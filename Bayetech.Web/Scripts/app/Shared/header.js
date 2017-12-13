﻿define(['v-search'], function (vsearch) {
    var html=`<div id="home-nav-box" class="home-header">
            <nav class="nav navbar-default">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">游戏联盟</a>
                    </div>
                    <div class="collapse navbar-collapse">
                        <ul class="nav navbar-nav">
                            <li class="login-a"><a href="../Login/Loging.html">请登录</a></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li class="dropdown">
                                <a href="#">我的6666</a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">我购买的商品</a></li>
                                    <li><a href="#">出售中的商品</a></li>
                                    <li><a href="#">我的订单管理</a></li>
                                </ul>
                            </li>
                            <li><a href="#">金钻兑换</a></li>
                            <li><a href="#">我的收藏</a></li>
                            <li class="dropdown">
                                <a href="#">客服中心</a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">咨询中心</a></li>
                                    <li><a href="#">安全中心</a></li>
                                    <li><a href="#">帮助中心</a></li>
                                    <li><a href="#">我要咨询</a></li>
                                    <li><a href="#">我要投诉</a></li>
                                    <li><a href="#">廉政举报</a></li>
                                </ul>
                            </li>
                            <li><a href="#">网站导航</a></li>
                            <li><a href="#">官方微博</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="head-search clearfix">
                <!--logo-->
                <h1 class="logo">
                    <a href="#">
                        <img src="/Content/Images/logo1.png" alt="Alternate Text" />
                    </a>
                </h1>
                <!--search-->
                <v-search></v-search>
            </div>
        </div>`;
    
    var data = {
        object: [],
    };

    var components = {
        name: "v-header",
        template: html,
        components:{
            "v-search":vsearch,
        },
        data() {
            return data;
        },
    };
    return components;
});
