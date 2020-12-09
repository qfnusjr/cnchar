(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{635:function(t,e,a){"use strict";a.r(e);var i=a(21),c=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍"}},[t._v("#")]),t._v(" 1 介绍")]),t._v(" "),a("p",[t._v("cnchar在2.2.0加入了成语功能，启用该功能需要安装 "),a("code",[t._v("cnchar-idiom")]),t._v(" 功能库，该库可以独立于cnchar主库运行")]),t._v(" "),a("p",[t._v("使用方式如下：")]),t._v(" "),a("div",[a("highlight-code",{attrs:{lang:"typescript"}},[t._v("\ncnchar.idiom(text:string, ...idiomArgs: Array<idiomArg>):Array<string>;\n  ")])],1),t._v(" "),a("p",[t._v("看一个具体例子")]),t._v(" "),a("div",[a("codebox",{attrs:{id:"idiom",fold:!0}})],1),t._v(" "),a("p",[t._v("使用cdn引用时，会在window对向上暴露 "),a("code",[t._v("CncharIdiom")]),t._v(" 对象")]),t._v(" "),a("h2",{attrs:{id:"_2-idiom-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-idiom-参数"}},[t._v("#")]),t._v(" 2. idiom 参数")]),t._v(" "),a("p",[t._v("参数调用如下，value表示查询对象，可以试拼音汉字笔画数，所有 arg 参数都是可选的")]),t._v(" "),a("div",[a("highlight-code",{attrs:{lang:"typescript"}},[t._v("\ncnchar.idiom(value,arg1,arg2,...);\n  ")])],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("作用")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("是否默认")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("依赖库")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("char")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("根据汉字查询成语")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("默认值无需调用")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("stroke")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("根据笔画数查询成语")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("优先级高于char")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("spell")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("根据拼音查询成语")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("优先级高于stroke")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("tone")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("启用拼音音调查询")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("仅在spell模式下生效")])])])]),t._v(" "),a("p",[t._v("注：优先级 "),a("code",[t._v("spell")]),t._v(" > "),a("code",[t._v("stroke")]),t._v(" > "),a("code",[t._v("char")])]),t._v(" "),a("h2",{attrs:{id:"_3-实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-实例"}},[t._v("#")]),t._v(" 3. 实例")]),t._v(" "),a("p",[t._v("该库为cnchar扩展了成语功能")]),t._v(" "),a("div",[a("highlight-code",{attrs:{lang:"javascript"}},[t._v("\ncnchar.idiom(['五', '', '十', '']) // ['五风十雨', '五光十色']\ncnchar.idiom([4, 6, 2, 6], 'stroke') // ['五光十色']\ncnchar.idiom('shang', 'spell') // ['伤风败化', '伤风败俗', ... ]\ncnchar.idiom('shang4', 'spell', 'tone') // ['伤风败化', '伤风败俗', ... ]\n  ")])],1)])}),[],!1,null,null,null);e.default=c.exports}}]);