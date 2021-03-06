﻿//我购买的订单
jsconfig.baseArr.push("bootstrap-paginator");
jsconfig.baseArr.push("datepicker"); 
jsconfig.baseArr.push("VueRouter"); 
define(jsconfig.baseArr, function (Vue, $, common, paginator, VueRouter) {
    //Vue.use(VueRouter);
    var html=`
        <div class="col-md-9 wd-lg">
            <div class ="panel panel-default">
				<div class ="panel-heading">
					<h5 class ="right-buy-title">我购买的订单 <span style="margin-left: 5px;font-style:italic;font:8px;">切换 </span>
						<a href="javascript:void(0);" id="queryType" style="color:#3d86ea;font:12px;">历史查询</a>
						<a id="queryHelp" style="font-weight: lighter;color:black;">
							<span class ="fa fa-question-circle" title="为了方便您的查询，在您切换到历史查询状态时，您可以查询您的所有历史订单明细。"></span>
						</a>
					</h5>
				</div>
				<div class ="panel-body">
					<form id="queryForm" method="post" class="form-horizontal" role="form">
                <!--搜索框组件的位置 start-->
						<div class ="form-group form-group-xs">
							<label for="game" class ="col-md-1 control-label">游戏</label>
							<div class ="col-md-4">
								<select  v-model="SearchParam.Param.GameSelected" id="game" class ="form-control" @change="GetTypes(GameSelected)">
                                    <option v-for="item in Games" :value="item.GameId">{{item.GameName}}</option>
                                </select>
							</div>
							<label for="goodsType" class ="col-md-2 control-label">商品类型</label>
							<div class ="col-md-4">
								<select v-model="SearchParam.Param.TypeSelected" id="goodsType" class ="form-control" @change="GetServers(0)">
                                    <option v-for="item in Types" :value="item.Id" >{{item.Name}}</option>
                                </select>
							</div>
						</div>
						<div class ="form-group form-group-xs">
							<label for="gameArea" class ="col-md-1 control-label">游戏区</label>
							<div class ="col-md-4">
								<select v-model="SearchParam.Param.GroupSelected" id="gameArea" class ="form-control" @change="GetServers(SearchParam.Param.GroupSelected)">
                                    <option v-for="item in Groups" :value="item.Id">{{item.Name}}</option>
                                </select>
                            </div>
							<label for="gameServer" class ="col-md-2 control-label">游戏服</label>
							<div class ="col-md-4">
								<select v-model="SearchParam.Param.ServerSelected" id="gameServer" class ="form-control">
                                    <option  v-for="item in Servers" :value="item.Id">{{item.Name}}</option>
                                </select>
							</div>
						</div>
						<div class ="form-group form-group-xs">

							<label class ="col-md-1 control-label">订单时间</label>
							<div class ="col-md-4">
								<div class ="input-daterange input-group datepicker">
									<input type="text" class ="input-sm form-control " name="start" :value="SearchParam.Param.startTime">
									<span class ="input-group-addon">到</span>
									<input type="text" class ="input-sm form-control" name="end" :value="SearchParam.Param.endTime">
								</div>
							</div>

                            <div  class ="col-md-2"></div>
							<div class ="col-md-4">
								<div id="btnGroup" class ="btn-group btn-group-justified">
									<div class ="btn-group btn-group-sm"><button type="button" id="today" @click="SetOrderTime('today')" class ="btn btn-default">今天</button></div>
									<div class ="btn-group btn-group-sm"><button type="button" id="1month" @click="SetOrderTime(1)" class ="btn btn-default">近1个月</button></div>
									<div class ="btn-group btn-group-sm"><button type="button" id="3month" @click="SetOrderTime(3)" class ="btn btn-primary">近3个月</button></div>
									<div class ="btn-group btn-group-sm"><button type="button" id="12month" @click="SetOrderTime(12)" class ="btn btn-default">近1年</button></div>
								</div>
							</div>
						</div>
						<div class ="form-group form-group-xs">
							<label class ="col-md-1 control-label">订单编号</label>
							<div class ="col-md-4">
								<div class ="input-group">
									<input type="text" :value="SearchParam.Param.OrderNo" class ="form-control"/>
									<span class ="input-group-btn">
										<button type="button" @click="GetOrderInfo" class ="btn btn-warning btn-xs">查询</button>
									</span>
								</div>
							</div>
						</div>

                <!--搜索框组件的位置 end-->
                    <div class ="game-order-list">
                        <!--<div class ="myxssl">
                            <span>每页显示数量：</span>
                            <a type="pageSize" size="10" @click="GetSizePage(10)">10</a>
                            <a type="pageSize" size="20" @click="GetSizePage(20)">20</a>
                            <a type="pageSize" size="30" @click="GetSizePage(30)">30</a>
                        </div>-->
						<nav aria-label="show number" class ="text-center list-num-group">
							<ul id="" class ="pagination">
								<li><span>每页显示数量</span></li>
								<li>
									<a type="pageSize" size="10" @click="GetSizePage(10)">10 <span class ="sr-only">(current) </span></a>
								</li>
								<li>
									<a type="pageSize" size="20" @click="GetSizePage(20)">20 <span class ="sr-only">(current) </span></a>
								</li>
								<li>
									<a type="pageSize" size="30" @click="GetSizePage(30)">30 <span class ="sr-only">(current) </span></a>
								</li>
							</ul>
						</nav>
                        <div class="nave">
                            <ul id="nave">
                                <li v-for="item in Status" :id="item.StatusName" @click ="GetStatusOrder(item.Status,item.StatusName)" :class ="{active:item.StatusName == 'orderall'}">
									<a href="javascript:void(0)">{{item.StatusAlias}}</a>
								</li>
                            </ul>
                        </div>
                        <div class ="ddxq">
                            <ul>
                                <li class ="spmc">商品名称</li>
                                <li class ="zj">总价</li>
                                <li class ="sl">数量</li>
                                <li class ="khfw">客户服务</li>
                                <li class ="ddzt">订单状态</li>
                            </ul>
                        </div>
                        <div id="menud_con">
                            <div class ="ddlb" v-for="item in Orders">
                                <h1>
                                    订单编号：{{item.OrderNo}}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 创建时间：{{item.OrderCreatTime.replace('T',' ')}}
                                    <span style="float: right;color:red;margin:0 7px 0 0; *margin:-30px 7px 0 0;">
                                        <a href="../goods-buying-G10-100001-1.html">
                                            <span class ="span1" style="color:#FF6600;size: 12px;font-family:'宋体';margin-right:10px;">
                                            </span>
                                        </a>
                                    </span>
                                </h1>
                                <ul class ="clearfix" goodsid="1" ver="72411" gtid="100001" gameid="G10" :orderid="item.OrderNo" sellertype="B" billstatus="4">
                                    <ol class ="spmc">
                                        <span style="color:#0c82eb">
                                            <img src="http://pic.7881.com/7881/market/images/buy/buy_dan.png" />{{item.GoodTitle}}
                                        </span>
                                        <br />
                                        游戏区服：{{item.GameName}}/{{item.GroupName}}/{{item.ServerName}}
                                    </ol>
                                    <ol class ="zj"><span style="color:#F90">{{item.OrderPrice}}</span>元</ol>
                                    <ol class ="sl">1
                                        <br />
                                        <span class ="button1" style="display: none"><a href='../goods-buying-G10-100001-1.html'>再来一单</a></span>
                                    </ol>
                                    <ol class ="khfw">
                                        <a href="javascript:void(0)" class ="list-kf" >
                                            <img src="http://pic.7881.com/7881/market/images/list-kf-icon.png" alt="" />
                                        </a>
                                    </ol>
                                    <ol class ="ddzt">取消
                                        <div class ="tsgrzx">
                                            <img src="http://pic.7881.com/7881/market/images/Personal/qxyy.png" />
                                        </div>
                                        <a class ="ls" href="/payment/endPayout.action?orderid=127121015129162378197536&source=list" target="_blank">订单详情</a>
                                    </ol>
                                    <ol id="prompt_127121015129162378197536" marginpt="-1" type="revoke" class ="prompt" superbillid="127121015129162378197536">
                                        <div style="width:205px; height:65px; margin:0 auto; margin-top:12px;"></div>
                                    </ol>
                                </ul>
                            </div>
                        </div>
                        <nav aria-label="fenye" class="text-center ">
							<ul id="paginator-test" class ="pagination"></ul>
						</nav>
                    </div>
                </form>
            </div>
            </div>
        </div>`;
    //Api
    var _GetOrderInfoUrl="/api/Order/GetOrderInfo";
    var _GetServersUrl="/api/Order/GetServers";
    var _GetMallTypeUrl="/api/GoodType/GetGoodType";//交易类别
    var _GetOrdersUrl="/api/Order/GetOrders";
    var _GetOrderStatus="/api/Order/GetOrderStatus";

    var data={   
        menuType:"",
        times:0,//次数标识位
        Games: [{ GameId: "", GameName: "" }],
		GameSelected: [],//已选游戏
        Orders: [],//订单信息表 
        Types: [],//交易类别
        Groups: [],//游戏区
		GroupSelected: [],//已选择的区
		Servers: [],//游戏服务器
		Status: [],//订单状态
        SearchParam:{
            Param: {
                OrderNo: "",//订单编号,
                StatusSelected: "",
                GroupSelected: "",
                ServerSelected:"",
                GameSelected: "",
                TypeSelected: "",
                startTime: (new Date((new Date()).getTime() - 90 * 3600 * 24 * 1000)).Format("yyyy-MM-dd"),
                endTime: (new Date()).Format("yyyy-MM-dd"),
            },
            Pagination:{
                 //后端分页字段
                 rows: 10,//每页行数，
                 page: 1,//当前页码
                 order: "OrderNo",//排序字段
                 sord: "asc",//排序类型
                 records: 10,//总记录数
                 total: 10//总页数。
            }
        },
    };
   
    var components={
        name: "MyOrders",
        template: html,
        watch: {
            '$route' (to, from) {
                self.menuType=this.$route.query.flag;//判断是代练还是普通订单,还是商户的订单管理
                self.menuType == 'Sales'?$("#pending").text("等待买家付款"):$("#pending").text("等待付款")
                //self.GetOrderInfo(self.Pagination);
            },
        },
        data() {
            return data;
        },
        created() {
            var self = this;
            self.GetOrderInfo(self.SearchParam.Pagination);
            self.GetOrderStatus(0);
        },
        mounted() {
             $(".datepicker").datepicker({
                language: 'zh-CN',
                fomart:'yyyy-mm-dd',
        		keyboardNavigation: false,
        		forceParse: false,
        		autoclose: true
        	});
        },
        methods: {
            ConfirmTypes(){
            
            },
            GetTypes(gameId){
                var self=this;
                var param={gameId:self.SearchParam.Param.GameSelected,type:1};
                common.getWebJson(_GetMallTypeUrl, param, function (data) {
                    if (data.result) {
                       self.Types = data.content;
                    }
                });
            },
            GetServers(gourp){
            	var self = this;
				var gameId = self.SearchParam.Param.GameSelected;
                var param={gameId:self.SearchParam.Param.GameSelected,parentId:gourp};
                common.getWebJson(_GetServersUrl, param, function (data) {
                    if (data.result) {
                       gourp == 0? self.Groups = data.content : self.Servers =data.content;
                    }
                });
            },
            GetOrderStatus(parentId) {
                var self = this;
                var param = {parentId:parentId == undefined?0:parentId};
                common.getWebJson(_GetOrderStatus, param, function (data) {
                    if (data.result) {
                        self.Status = data.content;
                    }
                });
            },
            GetOrderInfo() {//获取订单信息
                var self=this;
                common.postWebJson(_GetOrderInfoUrl, self.SearchParam, function (data) {
                    if (data.result) {
                        self.Orders = data.content.datas;
                        self.times==0?self.Games=data.Games:"";
                        self.SearchParam.Pagination = data.content.pagination;
                        common.SetPagination($('#paginator-test'),self,self.GetOrderInfo);
                        self.times++;
                        //self.$router.go(0);
                    } else {

                    }
                });
            },
            SetOrderTime(flag) {//设置查询时间查询1月，6月，1年
                var self=this;
                var btnId = "";
                if (flag == "today") {
                    self.SearchParam.Param.startTime=(new Date()).Format("yyyy-MM-dd");
                    btnId = "today";
                } else {
                    self.SearchParam.Param.startTime=(new Date((new Date()).getTime()-(parseInt(flag))*30*3600*24*1000)).Format("yyyy-MM-dd");
                    btnId= flag + "month";
                }
                $("#"+btnId).removeClass("btn-default").addClass("btn-primary");
                $("#btnGroup button[id!='"+btnId+"']").removeClass("btn-primary").addClass("btn-default");
                self.GetOrderInfo(self.SearchParam.Pagination)
            },
            GetSizePage(size) {//设置页面的大小去查询页面数据
                var self=this;
                if (size) {
                    self.SearchParam.Pagination.rows = size;
                    self.GetOrderInfo(self.SearchParam.Pagination);
                }
            },
            GetStatusOrder(satus,name) {//查询不同状态的订单
                var self = this;
                if (satus>=0) {
                    self.SearchParam.Param.StatusSelected = satus;
                    self.GetOrderInfo(self.SearchParam.Pagination);
                    $("#" + name).addClass("active");
                    $("#nave li[id!='" + name + "']").removeClass("active");
                }
            }
        }
    };

    //时间控件默认初始化
    $(".datepicker").datepicker({
        language: 'zh-CN',
        fomart:'yyyy-mm-dd',
        keyboardNavigation: false,
        forceParse: false,
        autoclose: true
     });

    return components;
});