(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{365:function(s,t,n){"use strict";n.r(t);var a=n(43),e=Object(a.a)({},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[s._v("💡 Learn more : "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[s._v("Azure Functions Documentation"),n("OutboundLink")],1),s._v(".")])]),s._v(" "),n("h4",{attrs:{id:"run-tsql-on-an-azure-sql-database-with-azure-functions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#run-tsql-on-an-azure-sql-database-with-azure-functions","aria-hidden":"true"}},[s._v("#")]),s._v(" Run TSQL on an Azure SQL database with Azure Functions")]),s._v(" "),n("p",[s._v("I've recently been adding Azure SQL tips such as "),n("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip145.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Easily reset the Administrator password for an Azure SQL database"),n("OutboundLink")],1),s._v(" and "),n("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip146.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Rename an Azure SQL database"),n("OutboundLink")],1),s._v('. and you all seem to like them. So I\'m back with another SQL post that addresses another common scenario that folks ask "How do I run TSQL on an Azure SQL database with Azure Functions"?')]),s._v(" "),n("h4",{attrs:{id:"sql-database"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sql-database","aria-hidden":"true"}},[s._v("#")]),s._v(" SQL Database")]),s._v(" "),n("p",[s._v("Before we begin you'll need to grab the connection string from the database you created earlier. Simply select "),n("strong",[s._v("SQL Databases")]),s._v(" and select your database on the SQL databases page.")]),s._v(" "),n("p",[s._v("Click "),n("strong",[s._v("Show database connection strings")]),s._v(" and copy the string to your clipboard.")]),s._v(" "),n("img",{attrs:{src:s.$withBase("/files/azconstring1.png")}}),s._v(" "),n("p",[s._v("Go ahead and replace {your_username} and {your_password} placeholders with real values and save it somewhere easily accessible.")]),s._v(" "),n("h4",{attrs:{id:"azure-functions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#azure-functions","aria-hidden":"true"}},[s._v("#")]),s._v(" Azure Functions")]),s._v(" "),n("p",[s._v("Create a new Azure Function and select Timer Trigger. You typically want to store this secret in "),n("strong",[s._v("Platform features > Application settings")]),s._v(" in the "),n("strong",[s._v("Connection strings")]),s._v(" placeholder. So go ahead and do that as shown below:")]),s._v(" "),n("img",{attrs:{src:s.$withBase("/files/azconstring2.png")}}),s._v(" "),n("p",[s._v("Now use the following code")]),s._v(" "),n("div",{staticClass:"language-csharp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token preprocessor property"}},[s._v("#r ")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"System.Configuration"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token preprocessor property"}},[s._v("#r ")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"System.Data"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" System"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Configuration"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" System"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SqlClient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" System"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Threading"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Tasks"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Task")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimerInfo")]),s._v(" myTimer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TraceWriter")]),s._v(" log"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" str "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ConfigurationManager"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ConnectionStrings"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sqldb_connection"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ConnectionString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SqlConnection")]),s._v(" conn "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SqlConnection")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        conn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" text "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UPDATE MichaelTestDB.User "')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" \n                "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SET [Item] = 5  WHERE DateAdded < GetDate();"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SqlCommand")]),s._v(" cmd "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SqlCommand")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" conn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" rows "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" cmd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ExecuteNonQueryAsync")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("p",[s._v("The previouse code may not work on Azure Functions Runtime Version 2 or above.ConfigurationManager is not used anymore. Check out this post\nhttps://www.koskila.net/how-to-access-azure-function-apps-settings-from-c/")]),s._v(" "),n("p",[s._v("Also, according to this Microsoft doc, ConnctionString is not recommended.\n\"A collection. Don't use this collection for the connection strings used by your function bindings. This collection is used only by frameworks that typically get connection strings from the ConnectionStrings section of a configuration file, like Entity Framework. Connection strings in this object are added to the environment with the provider type of System.Data.SqlClient. Items in this collection aren't published to Azure with other app settings. You must explicitly add these values to the Connection strings collection of your function app settings. If you're creating a SqlConnection in your function code, you should store the connection string value with your other connections in Application Settings in the portal.\"\nhttps://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local#local-settings-file")]),s._v(" "),n("p",[s._v("In addtion, Microsoft also recommended to use Microsoft.Data.SqlClient instead of System.Data.SqlClient.\nhttps://devblogs.microsoft.com/dotnet/introducing-the-new-microsoftdatasqlclient/")]),s._v(" "),n("p",[s._v("Proposed to use the following code:")]),s._v(" "),n("div",{staticClass:"language-csharp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token preprocessor property"}},[s._v("#r ")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"System.Configuration"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token preprocessor property"}},[s._v("#r ")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"System.Data"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token preprocessor property"}},[s._v("#r more namespace will be generted by using visual studio")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" System"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Configuration"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//using System.Data.SqlClient; //replace it with Microsoft.Data.SqlClient;")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" Microsoft"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SqlClient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" System"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Threading"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Tasks"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" Microsoft"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Extensions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Configuration"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//need this for ConfigurationBuilder")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Task")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimerInfo")]),s._v(" myTimer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TraceWriter")]),s._v(" log"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutionContext")]),s._v(" context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" config "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ConfigurationBuilder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("SetBasePath")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("FunctionAppDirectory"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("AddJsonFile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"local.settings.json"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" optional"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" reloadOnChange"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("AddEnvironmentVariables")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//var str = ConfigurationManager.ConnectionStrings["sqldb_connection"].ConnectionString;')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" str "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sqldb_connection"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SqlConnection")]),s._v(" conn "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SqlConnection")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        conn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" text "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UPDATE MichaelTestDB.User "')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" \n                "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SET [Item] = 5  WHERE DateAdded < GetDate();"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SqlCommand")]),s._v(" cmd "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SqlCommand")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" conn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" rows "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" cmd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ExecuteNonQueryAsync")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])])])},[],!1,null,null,null);t.default=e.exports}}]);