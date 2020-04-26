(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{415:function(e,t,s){"use strict";s.r(t);var a=s(43),n=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("💡 Learn more : "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("App Service Documentation"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("📺 Watch the video : "),s("a",{attrs:{href:"https://www.youtube.com/watch?v=igLj2WlVQ9M&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=16?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Work with Files in Azure App Service"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("h4",{attrs:{id:"working-with-files-in-azure-app-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#working-with-files-in-azure-app-service","aria-hidden":"true"}},[e._v("#")]),e._v(" Working with Files in Azure App Service")]),e._v(" "),s("p",[e._v("In the "),s("router-link",{attrs:{to:"./tip19.html"}},[e._v("Tip 19 - Deploy an Azure Web App using only the CLI")]),e._v(", we created a web app and uploaded it to Azure App Service. In this post, we'll take a look at the files uploaded and three tools that I use to work with them")],1),e._v(" "),s("h5",{attrs:{id:"console-access-to-my-app-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#console-access-to-my-app-service","aria-hidden":"true"}},[e._v("#")]),e._v(" Console Access to my App Service")]),e._v(" "),s("p",[e._v("I can go to the Azure Portal and select my App Service and click on "),s("strong",[e._v("Console")]),e._v(" under "),s("strong",[e._v("Development Tools")]),e._v(" to have a command prompt to quickly work with my Azure App Service.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/myquizconsole.png")}}),e._v(" "),s("p",[e._v("As you can tell from the screen-shot, I start in "),s("code",[e._v("D:\\home\\site\\wwwroot")]),e._v(". I can type "),s("code",[e._v("dir")]),e._v(" to see a current directory listing.")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("\nVolume in drive D is Windows\n Volume Serial Number is FE33-4717\n\n Directory of D:\\home\\site\\wwwroot\n\n09/21/2017  08:35 PM    <DIR>          .\n09/21/2017  08:35 PM    <DIR>          ..\n09/20/2017  09:03 PM    <DIR>          css\n09/20/2017  09:03 PM             5,351 Default.html\n09/20/2017  09:03 PM    <DIR>          js\n09/20/2017  09:03 PM             1,950 jsQuizEngine.sln\n09/20/2017  09:03 PM               304 jsQuizEngine.userprefs\n09/20/2017  09:03 PM            31,744 jsQuizEngine.v12.suo\n09/20/2017  09:03 PM    <DIR>          PrecompiledWeb\n09/20/2017  09:03 PM    <DIR>          quiz\n               4 File(s)         39,349 bytes\n               7 Dir(s)   1,072,893,952 bytes free\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br")])]),s("p",[e._v("I can do basic commands here and even use "),s("code",[e._v("type <filename>")]),e._v(" to parse the output of a file to the screen. You can make directory and so forth, but keep in mind that this is a sandbox environment and some commands which require elevated permissions may not work.")]),e._v(" "),s("p",[s("strong",[e._v("Quick Tip")]),e._v(" You can type "),s("code",[e._v("help")]),e._v(" from the console window for a list of available commands.")]),e._v(" "),s("h5",{attrs:{id:"a-vs-code-experience-to-my-app-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-vs-code-experience-to-my-app-service","aria-hidden":"true"}},[e._v("#")]),e._v(" A VS Code experience to my App Service")]),e._v(" "),s("p",[e._v('There is also another option that is called "'),s("strong",[e._v("App Service Editor")]),e._v('" located just two items down from '),s("strong",[e._v('"Console"')]),e._v(" that you picked before.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/vscodeazureexp.png")}}),e._v(" "),s("p",[e._v("If you're familiar with VS Code, then you'll be right at home as you can explore, search and add to Git. You can also manipulate files from within the window. This makes it easy to add, edit or delete files.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/manipulatefilesazure.png")}}),e._v(" "),s("p",[e._v("Just like in VS Code, you can modify your settings and even change your theme.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/vscodechangetheme.png")}}),e._v(" "),s("h5",{attrs:{id:"kudu-diagnostic-console"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kudu-diagnostic-console","aria-hidden":"true"}},[e._v("#")]),e._v(" Kudu Diagnostic Console")]),e._v(" "),s("p",[e._v("No App Service tutorial is complete without mentioning Kudu Diagnostic Console. You can access it from within the "),s("strong",[e._v("App Service Editor")]),e._v(" under "),s("strong",[e._v("your app name")]),e._v(" -> "),s("strong",[e._v("Open Kudu Console")]),e._v(" or through the portal under "),s("strong",[e._v("Advanced Tools")]),e._v(".")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/kuduportal.png")}}),e._v(" "),s("p",[e._v("You can just click on the folder name to navigate or type in the command. You can also easily manipulate the files, but I like the App Service Editor better for that functionality. The main reason that I typically come to the Kudu Diagnostic Console is to download files.")])])},[],!1,null,null,null);t.default=n.exports}}]);