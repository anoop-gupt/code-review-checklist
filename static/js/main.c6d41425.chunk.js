(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"linkId":"code-style","title":"Code style","items":[{"weight":0.83,"title":"Make sure code is unit testable."},{"weight":0.83,"title":"If any helper method/function is being reused, make it as a separate JS module/file."},{"weight":0.83,"title":"Avoid nesting code too many levels deep."},{"weight":0.83,"title":"Avoid large JS files, break it into multiple JS files."},{"weight":0.83,"title":"Check for unnecessary \'Else\' conditions."},{"weight":0.83,"title":"Type checking should be in place using Typescript or Flow."},{"weight":0.83,"title":"Exception handling should be in place."},{"weight":0.83,"title":"Do not leave debuggers/consoles in production code."},{"weight":0.83,"title":"Code should be understandable, no short hand operators  should be used."},{"weight":0.83,"title":"Is the same code duplicated more than twice?"},{"weight":0.83,"title":"Every function class should follow \'Single Responsibility Principle\'."},{"weight":0.83,"title":"Try to leverage Pure functions as much as possible to avoid scope impurity and unwanted errors."}],"hasChilds":false,"weight":10},{"linkId":"code-formatting","title":"Code formating","items":[{"weight":3.33,"title":"Code alignments (there are multiple tools to align your code https://codebeautify.org/)."},{"weight":3.33,"title":"Ensuring the\xa0naming\xa0conventions."},{"weight":3.33,"title":"Remove\xa0the\xa0commented\xa0code if you need to obtain some code later you can get it from version control."}],"hasChilds":false,"weight":10},{"linkId":"architecture","title":"Architecture","items":[{"weight":6.66,"title":"Split\xa0into\xa0multiple\xa0layers\xa0and\xa0tiers\xa0as\xa0per\xa0requirements\xa0(Presentation,\xa0Business and Data\xa0layers)."},{"weight":6.66,"title":"Split\xa0into\xa0respective\xa0files\xa0(HTML,\xa0JavaScript\xa0and\xa0CSS).(Not applicable to everyone)"},{"weight":6.66,"title":"Code\xa0is\xa0in\xa0sync\xa0with\xa0existing\xa0code\xa0patterns/technologies."}],"hasChilds":false,"weight":20},{"linkId":"coding-best-practices","title":"Coding best practices","items":[{"weight":2,"title":"No\xa0hard\xa0coding,\xa0use\xa0constants/configuration\xa0values."},{"weight":2,"title":"Group\xa0similar\xa0values\xa0under\xa0an\xa0enumeration\xa0(enum)."},{"weight":2,"title":"Avoid\xa0multiple\xa0if/else\xa0blocks and use Switch() wherever you can. Don\'t create piramids of if/else."},{"weight":2,"title":"Appropriate name for variables, functions and classes."},{"weight":2,"title":"Comments \u2013 Do not write comments for what you are doing, instead write comments on why you are doing. Specify about\xa0any hacks, workaround and temporary fixes. Additionally, mention pending tasks in your to-do comments, which can be tracked easily."}],"hasChilds":false,"weight":10},{"linkId":"non-functional","title":"Non-functional","items":[{"linkId":"coding-best-practices","title":"Maintainability","items":[{"weight":4,"title":"The application should require the least amount of effort to support in near future. It should be easy to identify and fix a\xa0defect."},{"weight":4,"title":"Readability:\xa0Code should be\xa0self-explanatory. If you are taking more time to understand the code, then either code needs refactoring or at least comments have to be written to make it clear."},{"weight":4,"title":"Testability:\xa0The code should be easy to test. Refactor into a separate function (if required)."},{"weight":4,"title":"Debuggability:\xa0Provide support to log the flow of control, parameter data and exception details to find the root cause easily. (Always good to have)"},{"weight":4,"title":"Configurability:\xa0Keep\xa0the\xa0configurable\xa0values\xa0in place\xa0 (XML\xa0file,\xa0database\xa0table)\xa0so\xa0that\xa0no code changes\xa0are\xa0required, if the data is changed frequently."}],"hasChilds":false},{"linkId":"coding-best-practices","title":"Reusability","items":[{"weight":4,"title":"DRY (Do not Repeat Yourself) principle: The same code should not be repeated more than twice."},{"weight":4,"title":"Consider\xa0reusable\xa0services,\xa0functions\xa0and\xa0components."},{"weight":4,"title":"Consider\xa0generic\xa0functions\xa0and\xa0classes."}],"hasChilds":false},{"linkId":"coding-best-practices","title":"Security","items":[{"weight":4,"title":"Authentication, authorization, input data validation against security threats such as\xa0SQL injections\xa0and\xa0Cross Site Scripting\xa0(XSS), encrypting the sensitive data (password, credit card, or any other personal information etc.)"}],"hasChilds":false},{"linkId":"coding-best-practices","title":"Accessibility","items":[{"weight":4,"title":"You should make sure about the accessibility of the application across the platform."}],"hasChilds":false}],"hasChilds":true,"weight":40},{"linkId":"tools","title":"Tools","items":[{"weight":3.33,"title":"The first step while assessing the code quality of the entire project is through a static code analysis tool. Use the tools (based on technology) such as\xa0SonarQube,\xa0NDepend,\xa0FxCop, TFS code analysis rules."},{"weight":3.33,"title":"Use plug-ins such as\xa0Resharper, which suggests the best practices in Visual studio."},{"weight":3.33,"title":"To track the code review comments and process use the tools like\xa0Git,\xa0Bitbucket\xa0etc."}],"hasChilds":false,"weight":10}]')},,,function(e,t,i){e.exports=i(12)},,,,,function(e,t,i){},function(e,t,i){},,function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),o=i(3),s=i.n(o),l=(i(9),i(10),i(1)),r=function(e){for(var t=[["Districution Weight","Per Category"]],i=0;i<e.length;i++)t.push([e[i].title,e[i].weight]);var a=window.google;a.charts.load("current",{packages:["corechart"]}),a.charts.setOnLoadCallback((function(){var e=a.visualization.arrayToDataTable(t);new a.visualization.PieChart(document.getElementById("piechart")).draw(e,{title:"Distribution Weight",is3D:!0,legend:"right"})}))},c=function(e){var t=window.google;t.charts.load("current",{packages:["gauge"]}),t.charts.setOnLoadCallback((function(){var e=t.visualization.arrayToDataTable(i),n={width:200,height:200,redFrom:0,redTo:25,yellowFrom:26,yellowTo:75,greenFrom:76,greenTo:100,minorTicks:5},o=new t.visualization.Gauge(document.getElementById("chart_div"));o.draw(e,n),setInterval((function(){e.setValue(0,1,a),o.draw(e,n)}),1e3)}));var i=[["Label","Value"],["Meter",0]],a=0},d=[];function h(e){return n.a.createElement(a.Fragment,null,e.length&&e.map((function(e,t){return n.a.createElement("div",{className:"list",key:e.title+t,id:e.linkId},n.a.createElement("h4",{className:"breadcrumb"},e.title),!e.hasChilds&&e.items.map((function(e,t){return n.a.createElement("div",{className:"form-check",key:e+t},n.a.createElement("input",{className:"form-check-input",type:"checkbox",value:"",id:"defaultCheck1"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"defaultCheck1"},e.title))})),e.hasChilds&&function(e){return n.a.createElement(a.Fragment,null,e.map((function(e,t){return n.a.createElement("div",{className:"sub-list",key:e.title+t},n.a.createElement("h4",{className:"breadcrumb"},e.title),e.items.map((function(e,t){return n.a.createElement("div",{className:"form-check",key:e.title+t},n.a.createElement("input",{className:"form-check-input",type:"checkbox",value:"",id:"defaultCheck1"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"defaultCheck1"},e.title))})))})))}(e.items))})))}var u=function(){return n.a.createElement("div",{className:"app-container"},n.a.createElement("nav",{className:"navbar navbar-dark bg-dark flex-md-nowrap p-0"},n.a.createElement("a",{className:"navbar-brand col-sm-3 col-md-3 mr-0",href:"/"},"Frontend Code Review Checklist")),n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("nav",{className:"col-md-2 col-lg-2 d-none d-md-block bg-light sidebar"},n.a.createElement("div",{className:"sidebar-sticky"},n.a.createElement("ul",{className:"nav flex-column mb-2"},l.map((function(e,t){return n.a.createElement("li",{className:"nav-item",key:e.linkId+t},n.a.createElement("a",{className:"nav-link",href:"#".concat(e.linkId)},e.title))}))))),n.a.createElement("main",{role:"main",className:"col-md-6 ml-sm-auto col-lg-6 pt-3 px-4"},n.a.createElement("div",{className:"content"},h(l))),n.a.createElement("div",{className:"sidebar col-md-4 col-lg-4"},n.a.createElement("div",{className:"sidebar-sticky"},n.a.createElement("div",{id:"piechart"},r(l)),n.a.createElement("div",{id:"chart_div"},c(d)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i(11);s.a.render(n.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.c6d41425.chunk.js.map