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
    
    public partial class T_WorkFlow_LogFlowMain
    {
        public string WFM_ID { get; set; }
        public string Title { get; set; }
        public decimal Flow_ID { get; set; }
        public decimal FlowType { get; set; }
        public string Flow_Name { get; set; }
        public System.DateTime CreateTime { get; set; }
        public string Creator { get; set; }
        public decimal Company_ID { get; set; }
        public decimal Dept_ID { get; set; }
        public string Sender { get; set; }
        public string Receiver { get; set; }
        public Nullable<System.DateTime> FinishTime { get; set; }
        public string ParentID { get; set; }
        public bool IsSigned { get; set; }
        public bool IsWaster_ { get; set; }
        public string Idea { get; set; }
        public string CurDealer { get; set; }
        public string SpeciID { get; set; }
        public Nullable<int> BrachResult { get; set; }
        public Nullable<int> SubFinished { get; set; }
        public string ModifyFlag { get; set; }
        public Nullable<System.DateTime> UpdateTime { get; set; }
        public string LockUserID { get; set; }
        public Nullable<bool> IS_Pigeonhole { get; set; }
        public string Windows_Class { get; set; }
        public string HuanJi { get; set; }
        public string MiJi { get; set; }
        public string ROLEIDEA { get; set; }
        public int Disp_ID { get; set; }
        public int Transact_Type { get; set; }
        public long Transact_Role { get; set; }
        public int IsFinish { get; set; }
        public Nullable<decimal> PRESTATUS_TYPE_ID { get; set; }
        public Nullable<decimal> PRESTATUS_ID { get; set; }
        public string PRESTATUS_NAME { get; set; }
        public Nullable<decimal> CURSTATUS_TYPE_ID { get; set; }
        public Nullable<decimal> CURSTATUS_ID { get; set; }
        public string CURSTATUS_NAME { get; set; }
        public Nullable<decimal> DISPOSAL_ID { get; set; }
        public string DISPOSAL_NAME { get; set; }
        public string DISPOSAL_HINT { get; set; }
        public System.DateTime dRecordCreationDate { get; set; }
        public string sRecordCreator { get; set; }
        public string sRecordVersion { get; set; }
        public string GUID { get; set; }
        public int reportFlag { get; set; }
        public int TransFlag { get; set; }
        public System.DateTime BalanceTime { get; set; }
        public int BalanceValid { get; set; }
        public System.DateTime BalanceUseTime { get; set; }
        public int DTSColumn1 { get; set; }
        public int DTSColumn2 { get; set; }
    }
}
