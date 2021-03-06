﻿import Vue from '../vue.js'
import comCompnent from '../common.js'
import componentTable from '../components/table-NavigationManage.vue'

let vmData={
    tools:{
        _comCompnent:comCompnent,
        _componentTable:componentTable
    },
    RolesUrl:"/api/AdminManage/GetNavgationList",
    RolesAdd: "/api/Navigation/GetAddNavigation",
    RolesEdit: "/api/Navigation/GetEditNavigation",
    RolesDelete:"/api/Navigation/deleteNavigation",
    CheckGoodNo:"",//模态框打开的GoodNo
    keyword: "",
    NavigationsetsArray:[],
    SearchParam: {
        Param: {//查询条件的参数
            MenuName:"",
            SelectType:"",//form里选择的商品类型
            SelectNo:""//form里面选择的编号
        },
        ListObj:
        {
            MenuID:0,
            MenuName:"",
            PicID:"",
            ParentID:0,
            url:"",
            sortid: 0,
            Remark: "",
            SysFlag: "",
            ModuleId: "",
            isdelete: 0,
            createtime: ""
        }
        ,
        Pagination: {//分页对象
            rows: 10,//每页行数，
            page: 1,//当前页码
            order: "MenuID",//排序字段
            sord: "asc",//排序类型
            records: 10,//总记录数
            total: 10//总页数。
        }
    },

};

new Vue({
    el:'#CommNavigation',
    data:vmData,
    created(){
        this.findList();
    },
    methods:{
        findList(){
            var self=this;
            self.SearchParam.Param.MenuName = self.SearchParam.Param.SelectNo;
            self.tools._comCompnent.postWebJson(self.RolesUrl, self.SearchParam, function (data) {
                if (data.result) {
                    self.NavigationsetsArray = data.content;
                    //self.SearchParam.Pagination=data.content.pagination;
                    //self.tools._comCompnent.SetPagination($('#paginator-test'), self.SearchParam, self.findList);
                }
                else {
                    self.NavigationsetsArray = [];
                }
            });
        },
        SaveModal(){//提交
            var self = this;
            self.tools._comCompnent.postWebJson(self.RolesAdd, self.SearchParam, function (data) {
                if (data.result) {
                    $("#UserModal").modal("hide");
                    alert("操作成功!");
                }
                else {
                    alert(data.content);
                }
                self.findList();
                //$("#CheckConfirm").Btns("reset");
            },function(){
                //$("#CheckConfirm").Btns("reset");
            });
        },
        EditModalSave() {//修改提交
            var self = this;
            self.tools._comCompnent.postWebJson(self.RolesEdit, self.SearchParam, function (data) {
                if (data.result) {
                    $("#EditModal").modal("hide");
                    alert("操作成功!");
                }
                else {
                    alert(data.content);
                }
                self.findList();
                //$("#CheckConfirm").Btns("reset");
            }, function () {
                //$("#CheckConfirm").Btns("reset");
            });
        },
        OpenAddModal(){//添加
            var self=this;
            //if (self.SearchParam.ListObj.KeyId == 0) {
            //    alert("请选择按钮")
            //    return ;
            //}
            self.SearchParam.ListObj.NavTitle="";
            self.SearchParam.ListObj.NavTag="";
            self.SearchParam.ListObj.Linkurl="";
            self.SearchParam.ListObj.Sortnum="";
            self.SearchParam.ListObj.iconCls="";
            $("#UserModal").modal("show");
        },
        OpenEditModal(){//修改
            var self = this;
            if (self.SearchParam.ListObj.MenuID == 0) {
                alert("请选择按钮");
                return false;
            }
            $("#EditModal").modal("show");
        },
        Delete(){//删除
            var self = this;
            if (self.SearchParam.ListObj.MenuID == 0) {
                alert("请选择按钮");
                return false;
            }
            self.tools._comCompnent.postWebJson(self.RolesDelete, self.SearchParam, function (data) {
                if (data.result) {
                    $("#UserModal").modal("hide");
                    alert("删除成功!");
                } 
                self.findList();
                //$("#CheckConfirm").Btns("reset");
            },function(){
                //$("#CheckConfirm").Btns("reset");
            });
        },
        StartCheck(type) {//开始检查
            var self = this;
            var c = $.extend(true, self.SearchParam.ListObj, type);  
            //$("#checkModal").modal("show");
        },
        TurnToPage(page){
            var self = this;
            self.SearchParam.Pagination.rows = page;
            self.findList();
        }
    },
    components:{
        comtable:componentTable
    }
});