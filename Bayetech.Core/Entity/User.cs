//------------------------------------------------------------------------------
// <auto-generated>
//     此代码已从模板生成。
//
//     手动更改此文件可能导致应用程序出现意外的行为。
//     如果重新生成代码，将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace Bayetech.Core.Entity
{
    using System;
    using System.Collections.Generic;
    
    public partial class User
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string NameAlias { get; set; }
        public string Password { get; set; }
        public string Phone { get; set; }
        public Nullable<int> QQ { get; set; }
        public Nullable<bool> IsHatchet { get; set; }
        public Nullable<int> CreditLevel { get; set; }
        public Nullable<int> BuyTimes { get; set; }
        public Nullable<int> SellTimes { get; set; }
        public Nullable<int> HatChetTimes { get; set; }
    }
}