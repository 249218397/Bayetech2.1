﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class WFEntities : DbContext
    {
        public WFEntities()
            : base("name=WFEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<T_Flow_BitAndItem> T_Flow_BitAndItem { get; set; }
        public virtual DbSet<T_FLOW_DISPOSAL> T_FLOW_DISPOSAL { get; set; }
        public virtual DbSet<T_FLOW_STATUS> T_FLOW_STATUS { get; set; }
        public virtual DbSet<T_FLOW_TYPE> T_FLOW_TYPE { get; set; }
        public virtual DbSet<T_WorkFlow_Assign> T_WorkFlow_Assign { get; set; }
        public virtual DbSet<T_WorkFlow_FlowMain> T_WorkFlow_FlowMain { get; set; }
        public virtual DbSet<DefinitionIdentityTable> DefinitionIdentityTable { get; set; }
        public virtual DbSet<IdentityOwnerTable> IdentityOwnerTable { get; set; }
        public virtual DbSet<InstanceMetadataChangesTable> InstanceMetadataChangesTable { get; set; }
        public virtual DbSet<InstancePromotedPropertiesTable> InstancePromotedPropertiesTable { get; set; }
        public virtual DbSet<InstancesTable> InstancesTable { get; set; }
        public virtual DbSet<KeysTable> KeysTable { get; set; }
        public virtual DbSet<LockOwnersTable> LockOwnersTable { get; set; }
        public virtual DbSet<RunnableInstancesTable> RunnableInstancesTable { get; set; }
        public virtual DbSet<ServiceDeploymentsTable> ServiceDeploymentsTable { get; set; }
        public virtual DbSet<SqlWorkflowInstanceStoreVersionTable> SqlWorkflowInstanceStoreVersionTable { get; set; }
        public virtual DbSet<T_WorkFlow_LogMonitor> T_WorkFlow_LogMonitor { get; set; }
        public virtual DbSet<T_WorkFlow_Notify> T_WorkFlow_Notify { get; set; }
    }
}
