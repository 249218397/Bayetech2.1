﻿import "../../Content/MyStyle.css";

<template id="BaseTable" lang="html">
    <table class="table table-bordered">
        <thead>
            <tr class="success">
                <th class="text-center">单据类型</th>
                <th class="text-center">{{itemtype=='good'?'商品编号':'订单编号'}}</th>
                <th class="text-center">游戏名称</th>
                <th class="text-center">交易类型</th>
                <th class="text-center">关键词</th>
                <th class="text-center">商品标题</th>
                <th class="text-center">审核商品</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in goodinfoarray">
                <td class="text-center"><label class="table-firsttitle">{{itemtype=='good'?'商品':'订单'}}</label></td>
                <td>{{itemtype=='good'?item.GoodNo:item.OrderNo}}</td>
                <td>{{item.GameName}}</td>
                <td>{{item.GoodTypeName}}</td>
                <td>{{item.GoodKeyWord}}</td>
                <td>{{item.GoodTitle}}</td>
                <td class="text-center"><input type="button" v-bind:flag="item.Status" class="btn btn-primary" v-bind:value="(item.Status=='PutOnsale'||item.Status=='PutDownsale')?'查看':'审核商品'" @click="startcheck(item.GoodNo)"></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default{
    name:'BaseTable',
    props:['pagetype','goodinfoarray','startcheck','itemtype']
}
</script>