﻿//------------------------------------------------------------------------------
// <auto-generated>
//     此代码由工具生成。
//     运行时版本:4.0.30319.42000
//
//     对此文件的更改可能会导致不正确的行为，并且如果
//     重新生成代码，这些更改将会丢失。
// </auto-generated>
//------------------------------------------------------------------------------

namespace Bayetech.Service.Properties {
    using System;
    
    
    /// <summary>
    ///   一个强类型的资源类，用于查找本地化的字符串等。
    /// </summary>
    // 此类是由 StronglyTypedResourceBuilder
    // 类通过类似于 ResGen 或 Visual Studio 的工具自动生成的。
    // 若要添加或移除成员，请编辑 .ResX 文件，然后重新运行 ResGen
    // (以 /str 作为命令选项)，或重新生成 VS 项目。
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Resources.Tools.StronglyTypedResourceBuilder", "4.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    [global::System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    internal class Resources {
        
        private static global::System.Resources.ResourceManager resourceMan;
        
        private static global::System.Globalization.CultureInfo resourceCulture;
        
        [global::System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1811:AvoidUncalledPrivateCode")]
        internal Resources() {
        }
        
        /// <summary>
        ///   返回此类使用的缓存的 ResourceManager 实例。
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        internal static global::System.Resources.ResourceManager ResourceManager {
            get {
                if (object.ReferenceEquals(resourceMan, null)) {
                    global::System.Resources.ResourceManager temp = new global::System.Resources.ResourceManager("Bayetech.Service.Properties.Resources", typeof(Resources).Assembly);
                    resourceMan = temp;
                }
                return resourceMan;
            }
        }
        
        /// <summary>
        ///   使用此强类型资源类，为所有资源查找
        ///   重写当前线程的 CurrentUICulture 属性。
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        internal static global::System.Globalization.CultureInfo Culture {
            get {
                return resourceCulture;
            }
            set {
                resourceCulture = value;
            }
        }
        
        /// <summary>
        ///   查找类似 报错样式，为提示信息的前面+ Error_XXXX 的本地化字符串。
        /// </summary>
        internal static string Error_AAA {
            get {
                return ResourceManager.GetString("Error_AAA", resourceCulture);
            }
        }
        
        /// <summary>
        ///   查找类似 订单编号生成失败，无此商品编号。 的本地化字符串。
        /// </summary>
        internal static string Error_NoGoodNo {
            get {
                return ResourceManager.GetString("Error_NoGoodNo", resourceCulture);
            }
        }
        
        /// <summary>
        ///   查找类似 订单编号生成失败，请稍后再试。 的本地化字符串。
        /// </summary>
        internal static string Error_NoOrderNo {
            get {
                return ResourceManager.GetString("Error_NoOrderNo", resourceCulture);
            }
        }
        
        /// <summary>
        ///   查找类似 提示样式，为提示信息的前面+ Reminder_XXXX 的本地化字符串。
        /// </summary>
        internal static string Reminder_AAA {
            get {
                return ResourceManager.GetString("Reminder_AAA", resourceCulture);
            }
        }
        
        /// <summary>
        ///   查找类似 未查询到相关信息! 的本地化字符串。
        /// </summary>
        internal static string Reminder_NoInfo {
            get {
                return ResourceManager.GetString("Reminder_NoInfo", resourceCulture);
            }
        }
    }
}
