//------------------------------------------------------------------------------
// <auto-generated>
//     此代码已从模板生成。
//
//     手动更改此文件可能导致应用程序出现意外的行为。
//     如果重新生成代码，将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace Bayetech.DAL.Entity
{
    using System;
    using System.Collections.Generic;
    
    public partial class GameGoodInfo
    {
        public int Id { get; set; }
        public string GoodNo { get; set; }
        public Nullable<long> GameId { get; set; }
        public string GameName { get; set; }
        public Nullable<int> GameLevel { get; set; }
        public string GameProfession { get; set; }
        public string GameService { get; set; }
        public string GameGroup { get; set; }
        public string GameServer { get; set; }
        public Nullable<int> TotalNum { get; set; }
        public Nullable<int> BuyNum { get; set; }
        public string UserName { get; set; }
        public Nullable<int> HistoryAccount { get; set; }
        public Nullable<int> ListOrder { get; set; }
        public Nullable<System.DateTime> EditTime { get; set; }
        public Nullable<System.DateTime> AddTime { get; set; }
        public string QQLevel { get; set; }
        public string IdentityInfo { get; set; }
        public string QQFriends { get; set; }
    }
}