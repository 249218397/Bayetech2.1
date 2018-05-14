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
    
    public partial class Admin_C1_Customer
    {
        public int KeyId { get; set; }
        public string CustCode { get; set; }
        public string CustName { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string PassSalt { get; set; }
        public Nullable<bool> IsDisabled { get; set; }
        public Nullable<int> CustType { get; set; }
        public Nullable<int> ParentId { get; set; }
        public string Addr { get; set; }
        public Nullable<int> AreaId { get; set; }
        public string Postcode { get; set; }
        public string Tel { get; set; }
        public string Fax { get; set; }
        public string Contacts { get; set; }
        public string Cellphone { get; set; }
        public string QQ { get; set; }
        public string Email { get; set; }
        public Nullable<int> Settlementday { get; set; }
        public Nullable<int> PriceGroup { get; set; }
        public Nullable<int> Credit { get; set; }
        public string BillAddr { get; set; }
        public string BillContacts { get; set; }
        public string BillPhone { get; set; }
        public string TaxName { get; set; }
        public string TaxNum { get; set; }
        public string TaxBank { get; set; }
        public string TaxBankNum { get; set; }
        public string TaxAddr { get; set; }
        public string TaxPhone { get; set; }
        public string Remark { get; set; }
        public Nullable<int> DepartmentId { get; set; }
        public Nullable<int> DeliveryTypeId { get; set; }
        public Nullable<System.DateTime> CreateOn { get; set; }
        public Nullable<System.DateTime> UpdateOn { get; set; }
        public string UpdateBy { get; set; }
        public string StatusCode { get; set; }
        public Nullable<System.DateTime> DeletedOn { get; set; }
        public string DeletedBy { get; set; }
        public string Token { get; set; }
        public Nullable<int> EmailSendNum { get; set; }
    }
}