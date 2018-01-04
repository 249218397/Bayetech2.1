﻿//模块之间的操作
require(['vue', 'jquery', 'common', 'VueRouter', 'v-header', 'Scripts/app/GoodPublish/Step1', 'Scripts/app/GoodPublish/Step2', 'Scripts/app/GoodPublish/Step3'],
	function (Vue, $, common, VueRouter, header, step1, step2, step3) {
	    //var routes={routes: [{ path: '/', redirect: '/step1' },
	    //    { path: '/step1', name: 'step1', component: step1 },
	    //    { path: '/step2', name: 'step2', component: step2 },
	    //    { path: '/step3', name: 'step3', component: step3 }, ]};

	    ///* 创建路由器  */
	    //Vue.use(VueRouter)
	    //var router=new VueRouter(routes);
        ////下一步校验
	    //router.beforeEach((to, from, next) => {
	    //    debugger;
	    //    switch (from.path) {
	    //        case "/":
	    //        case "/step1":
	    //            ValiteStep1();
	    //            next();
	    //            break;
	    //        case "/step2":
	    //            next();
	    //        case "/step3":
	    //            next();
	    //            break;
	    //        default:
	    //            next();
	    //            break;
	    //    }
	    //});

	    var data={
	        Step:step1,
	        GameId: 0,
	        GameName: "",
	        GroupId: 0,
	        GroupName: "",
	        ServerId: 0,
	        ServerName: "",
	        GoodTypeId: 0,
	        GoodTypeName: "",
	    };

	    var vm = new Vue({
	        el: '#app',
	        data() {
	            return data;
	        },
	        //router: router,
	        components: {
	            "v-header": header,
	        },
	        methods: {
	            Next: function (to) {
	                switch (to) {
	                    case "step2":
	                        if (!this.GameId) {
	                            alert("请选择游戏！");
	                            return;
	                        }
	                        if (!this.GroupId) {
	                            alert("请选择区服！");
	                            return;
	                        }
	                        if (!this.ServerId) {
	                            alert("请选择服务器！");
	                            return;
	                        }
	                        if (!this.GoodTypeId) {
	                            alert("交易类型！");
	                            return;
	                        }
	                        this.Step=step2;
	                        break;
	                    case "step3":
	                        debugger;
	                        var slef=this;
	                        var data=$("form").serialize();
	                        $.post("/api/GoodInfo/PublicGood", data, function (result) {
	                            if (result) {
	                                slef.Step=step3;
	                            }
	                        })
	                        break;
	                    default:
	                        this.Step=step1;
	                        break;
                    }
	            },
	        },
	    });

	});