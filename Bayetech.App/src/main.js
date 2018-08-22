// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$SearchModel={
    GameId: 0,
    GameName: "��Ϸ����",
    GameGroupId: 0,//�Ϻ��� 
    GameGroupName: "��Ϸ��",
    GameServerId: 0,//�Ϻ�һ��
    GameServerName: "������",
    GoodTypeId: 0,//�˺� ���
    GoodTypeName: "��Ʒ����",
    DlTypeName: "��������",//�ȼ� �屭 ��λ
    GoodKeyWord: "",//�ؼ���
    AcrossId: 0,//����Id
    AcrossName: "����"
}
import './assets/css/fost-base-min.css';


/* eslint-disable no-new */
let $vm=new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
