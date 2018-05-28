﻿using Bayetech.Core;
using Newtonsoft.Json.Linq;
using Spring.Context;
using Spring.Context.Support;
using System;
using System.Web;
using System.Web.Http;

namespace Bayetech.Admin
{
    public class BaseController : ApiController
    {

        /// <summary>
        /// 创建spring容器上下文公共容器
        /// </summary>
        public static IApplicationContext ctx = ContextRegistry.GetContext();
        /// <summary>
        /// JObject
        /// </summary>
        /// <returns></returns>
        public static JObject CreatJObject(object content = null)
        {
            if (content == null)
            {
                return new JObject();
            }
            else
            {
                return new JObject(content);
            }
        }
        public CurrentLogin CurrentLogin
        {
            get { return (CurrentLogin)System.Web.HttpContext.Current.Session["CurrentLogin"] ?? new CurrentLogin(); }
        }


        /// <summary>
        /// 获取token对象
        /// </summary>
        /// <param name="staffid">获取token的员工编号ID 
        /// </param>
        /// <returns></returns>
        [HttpGet]
        public JObject GetToken(string staffid)
        {
            JObject ret = new JObject();

            //判断staffid是否合法
            if (string.IsNullOrEmpty(staffid))
            {
                ret.Add(ResultInfo.Result, false);
                ret.Add(ResultInfo.Content, JToken.FromObject("staffid不合法，请稍后重试。"));
            }

            //比对缓存没有则重新生成
            Token token = (Token)HttpContext.Current.Session[staffid];
            if (HttpContext.Current.Session[staffid] == null)
            {
                token = new Token();
                token.TokenId = Guid.NewGuid().ToString();
                token.ExpireTime = DateTime.Now.AddHours(12);//设置12小时过期
            }
            ret.Add("Data", JObject.FromObject(token));
            return ret;
        }
    }
}