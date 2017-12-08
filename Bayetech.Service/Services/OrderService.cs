﻿using Bayetech.Core.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using Bayetech.DAL;
using Newtonsoft.Json;
using Bayetech.Core;

namespace Bayetech.Service.Services
{
    public class OrderService : BaseService<MallOrder>, IOrderService
    {
        /// <summary>
        /// 生成订单
        /// </summary>
        /// <param name="order"></param>
        /// <returns></returns>
        public JObject CreatOrder(MallOrder order)
        {
            using (var db = new RepositoryBase().BeginTrans())
            {
                JObject ret = new JObject();
                if (!string.IsNullOrEmpty(order.GoodNo))
                {
                    order.OrderNo = Common.CreatOrderNo(order.GoodNo);
                    db.Insert(order);
                    int count = db.Commit();
                    ret.Add(ResultInfo.Result, (count > 0 ? true : false));
                    ret.Add(ResultInfo.Content,JProperty.FromObject((count > 0 ? "" :Properties.Resources.Error_NoOrderNo)));
                }
                else
                {
                    ret.Add(ResultInfo.Result, Properties.Resources.Error_NoGoodNo);
                }
                return ret;
            }
        }
    }
}
