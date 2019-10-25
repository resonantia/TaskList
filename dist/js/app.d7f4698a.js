(function(t){function e(e){for(var i,o,u=e[0],r=e[1],l=e[2],p=0,d=[];p<u.length;p++)o=u[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);c&&c(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,u=1;u<s.length;u++){var r=s[u];0!==a[r]&&(i=!1)}i&&(n.splice(e--,1),t=o(o.s=s[0]))}return t}var i={},a={app:0},n=[];function o(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=i,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(s,i,function(e){return t[e]}.bind(null,i));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],r=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var c=r;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var i=s("64a9"),a=s.n(i);a.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var i=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"header"},[s("h1",[t._v("TaskList")]),s("div",{staticClass:"header-menu"},[s("button",{staticClass:"header-menu-button",on:{click:function(e){return t.showOutput()}}},[s("img",{attrs:{src:"img/note-text.svg",title:"出力画面を表示/非表示"}})]),s("button",{staticClass:"header-menu-button",on:{click:function(e){return t.showSettings()}}},[s("img",{attrs:{src:"img/settings.svg",title:"設定画面を表示/非表示"}})])])]),s("div",{staticClass:"main-content"},[s("div",{staticClass:"tasks"},[s("draggable",t._b({attrs:{group:"task",handle:".handle"},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1}},model:{value:t.taskList,callback:function(e){t.taskList=e},expression:"taskList"}},"draggable",t.dragOptions,!1),[s("transition-group",{attrs:{type:"transition",name:t.drag?"flip-list":null}},t._l(t.taskList,(function(e,i){return s("task-item",{key:e.id,ref:i,refInFor:!0,attrs:{task:e,index:i,totalsize:t.taskList.length},on:{"add-item":function(e){return t.addItem(i)},"delete-item":function(e){return t.deleteItem(i)},"save-item":function(e){return t.saveItem()}}})})),1)],1)],1)]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.taskListSettings.isOutputVisible,expression:"taskListSettings.isOutputVisible"}],staticClass:"output"},[s("input",{staticClass:"menu",attrs:{type:"button",value:"出力",title:"テキストとして出力"},on:{click:t.outputResult}}),s("input",{staticClass:"menu",attrs:{type:"button",value:"コピー",title:"出力結果をクリップボードにコピー"},on:{click:t.copyResult}}),s("input",{staticClass:"close-button",attrs:{type:"button",value:"✖",title:"閉じる"},on:{click:t.showOutput}}),s("br"),s("textarea",{staticClass:"result",domProps:{value:t.outputStr}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:this.taskListSettings.isSettingsVisible,expression:"this.taskListSettings.isSettingsVisible"}],staticClass:"settings"},[s("input",{staticClass:"close-button",attrs:{type:"button",value:"✖",title:"閉じる"},on:{click:t.showSettings}}),s("h2",[t._v("設定")]),s("ul",{staticStyle:{"padding-left":"20px"}},[s("li",[t._v("ヘッダ："),s("br"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.taskListOutputTemplate.header,expression:"taskListOutputTemplate.header"}],staticClass:"settings-text",attrs:{type:"text"},domProps:{value:t.taskListOutputTemplate.header},on:{change:t.saveSettings,input:function(e){e.target.composing||t.$set(t.taskListOutputTemplate,"header",e.target.value)}}})]),s("li",[t._v("インデントの文字："),s("br"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.taskListOutputTemplate.indentStr,expression:"taskListOutputTemplate.indentStr"}],staticClass:"settings-text",attrs:{type:"text"},domProps:{value:t.taskListOutputTemplate.indentStr},on:{change:t.saveSettings,input:function(e){e.target.composing||t.$set(t.taskListOutputTemplate,"indentStr",e.target.value)}}})]),s("li",[t._v("チェックボックス（未）："),s("br"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.taskListOutputTemplate.uncheckedText,expression:"taskListOutputTemplate.uncheckedText"}],staticClass:"settings-text",attrs:{type:"text"},domProps:{value:t.taskListOutputTemplate.uncheckedText},on:{change:t.saveSettings,input:function(e){e.target.composing||t.$set(t.taskListOutputTemplate,"uncheckedText",e.target.value)}}})]),s("li",[t._v("チェックボックス（済）："),s("br"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.taskListOutputTemplate.checkedText,expression:"taskListOutputTemplate.checkedText"}],staticClass:"settings-text",attrs:{type:"text"},domProps:{value:t.taskListOutputTemplate.checkedText},on:{change:t.saveSettings,input:function(e){e.target.composing||t.$set(t.taskListOutputTemplate,"checkedText",e.target.value)}}})]),s("li",[t._v("本文："),s("br"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.taskListOutputTemplate.body,expression:"taskListOutputTemplate.body"}],staticClass:"settings-text",attrs:{type:"text"},domProps:{value:t.taskListOutputTemplate.body},on:{change:t.saveSettings,input:function(e){e.target.composing||t.$set(t.taskListOutputTemplate,"body",e.target.value)}}})]),s("li",[t._v("フッタ："),s("br"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.taskListOutputTemplate.footer,expression:"taskListOutputTemplate.footer"}],staticClass:"settings-text",attrs:{type:"text"},domProps:{value:t.taskListOutputTemplate.footer},on:{change:t.saveSettings,input:function(e){e.target.composing||t.$set(t.taskListOutputTemplate,"footer",e.target.value)}}})])]),t._m(0)])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{border:"dotted 2px #7db4e6"}},[s("ul",{staticStyle:{"font-size":"small"}},[s("li",[t._v("{IndentText}: インデントの文字")]),s("li",[t._v("{CheckBoxText}: チェックボックス")]),s("li",[t._v("{Text}: 本文")]),s("li",[t._v("{br}: 改行")])])])}],o=(s("6b54"),s("a481"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task-item",style:{marginLeft:t.task.indent*this.indentWidth+"px",width:"100%"},attrs:{id:t.task.id},on:{click:t.showEditItemText,mouseenter:t.showItemButtons,mouseleave:t.hideItemButtons}},[s("span",{directives:[{name:"visible",rawName:"v-visible",value:this.isShowItemButtons,expression:"this.isShowItemButtons"}],staticClass:"handle"},[t._v("⠿")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.task.checked,expression:"task.checked"}],attrs:{type:"checkbox",id:t.task.id},domProps:{checked:Array.isArray(t.task.checked)?t._i(t.task.checked,null)>-1:t.task.checked},on:{change:[function(e){var s=t.task.checked,i=e.target,a=!!i.checked;if(Array.isArray(s)){var n=null,o=t._i(s,n);i.checked?o<0&&t.$set(t.task,"checked",s.concat([n])):o>-1&&t.$set(t.task,"checked",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(t.task,"checked",a)},function(e){return t.$emit("save-item")}]}}),s("label",{staticStyle:{display:"inline-block"},attrs:{for:t.task.id},on:{click:function(e){e.stopPropagation(),t.task.checked?t.task.checked=!1:t.task.checked=!0}}},[t._v(" ")]),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing,expression:" ! isEditing"}],style:{display:"inline-block",cursor:"text",width:"80%",height:"1em",textDecoration:t.task.checked?"line-through":"none"}},[t._v(t._s(t.task.text))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.task.text,expression:"task.text"},{name:"show",rawName:"v-show",value:t.isEditing,expression:"isEditing"}],ref:"input",style:{display:"inline-block",width:"80%",height:"1em",textDecoration:t.task.checked?"line-through":"none"},attrs:{type:"text",title:"内容"},domProps:{value:t.task.text},on:{change:function(e){return t.$emit("save-item")},blur:t.hideEditItemText,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.hideEditItemText(e)},input:function(e){e.target.composing||t.$set(t.task,"text",e.target.value)}}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowItemButtons,expression:"isShowItemButtons"}],staticStyle:{display:"inline-block",position:"relative",float:"right"}},[s("input",{staticClass:"menu",attrs:{type:"button",value:"➕",title:"下に項目を追加"},on:{click:function(e){return e.stopPropagation(),t.$emit("add-item")}}}),s("input",{directives:[{name:"show",rawName:"v-show",value:t.task.indent,expression:"task.indent"}],staticClass:"menu",attrs:{type:"button",value:"◀",title:"インデントを戻す"},on:{click:function(e){return e.stopPropagation(),function(){t.task.indent>0?t.task.indent--:t.task.indent=0}()}}}),s("input",{staticClass:"menu",attrs:{type:"button",value:"▶",title:"インデント"},on:{click:function(e){e.stopPropagation(),t.task.indent++}}}),s("input",{directives:[{name:"show",rawName:"v-show",value:this.isDeletableItem,expression:"this.isDeletableItem"}],staticClass:"menu",attrs:{type:"button",value:"❌",title:"この項目を削除"},on:{click:function(e){return e.stopPropagation(),t.$emit("delete-item")}}})]),s("hr")])}),u=[],r={name:"TaskItem",props:["task","index","totalsize"],directives:{visible:{update:function(t,e){t.style.visibility=e.value?"visible":"hidden"}}},data:function(){return{indentWidth:30,isTopItem:!0,isBottomItem:!0,isDeletableItem:!1,isEditing:!1,isShowItemButtons:!1}},methods:{setItemState:function(){0==this.index?this.isTopItem=!0:this.isTopItem=!1,this.index==this.totalsize-1?this.isBottomItem=!0:this.isBottomItem=!1,this.totalsize>1?this.isDeletableItem=!0:this.isDeletableItem=!1},showEditItemText:function(){this.isEditing=!0,this.setFocusToTextInput()},hideEditItemText:function(){this.isEditing=!1},showItemButtons:function(){this.isShowItemButtons=!0},hideItemButtons:function(){this.isShowItemButtons=!1},setFocusToTextInput:function(){var t=this;this.$nextTick((function(){t.$refs.input.focus()}))}}},l=r,c=(s("c9b4"),s("2877")),p=Object(c["a"])(l,o,u,!1,null,"333ae3a6",null),d=p.exports,m=s("310e"),h=s.n(m),k={name:"app",components:{TaskItem:d,draggable:h.a},directives:{},data:function(){return{taskList:[this.buildNewItem()],outputStr:"",taskListOutputTemplate:{header:"## TODO{br}{br}",indentStr:"  ",body:"{IndentText}- {CheckBoxText} {Text}{br}",footer:"",uncheckedText:"[ ]",checkedText:"[x]"},taskListSettings:{isSettingsVisible:!1,isOutputVisible:!1},drag:!1}},computed:{dragOptions:function(){return{animation:200,group:"task",disabled:!1,ghostClass:"ghost"}}},methods:{buildId:function(){return"xxxxx".replace(/x/g,(function(){return(16*Math.random()|0).toString(16)}))},buildNewItem:function(){return{id:this.buildId(),indent:0,checked:!1,text:""}},showOutput:function(){this.taskListSettings.isOutputVisible?this.taskListSettings.isOutputVisible=!1:this.taskListSettings.isOutputVisible=!0,this.saveSettings()},showSettings:function(){this.taskListSettings.isSettingsVisible?this.taskListSettings.isSettingsVisible=!1:this.taskListSettings.isSettingsVisible=!0,this.saveSettings()},setAllItemState:function(){for(var t in this.$refs)null!=this.$refs[t]["0"]&&this.$refs[t]["0"].setItemState()},addItem:function(t){this.taskList.splice(t+1,0,this.buildNewItem()),this.taskList[t+1].indent=this.taskList[t].indent,this.saveItem()},replaceItem:function(t,e){var s=this.taskList[e];this.taskList.splice(e,1,this.taskList[t]),this.taskList.splice(t,1,s)},deleteItem:function(t){this.$refs[t]["0"].isDeletableItem&&window.confirm("アイテムを削除します。よろしいですか？")&&(this.taskList.splice(t,1),this.saveItem())},saveItem:function(){localStorage.taskList=JSON.stringify(this.taskList)},saveSettings:function(){localStorage.taskListOutputTemplate=JSON.stringify(this.taskListOutputTemplate),localStorage.taskListSettings=JSON.stringify(this.taskListSettings)},replaceOutputStr:function(t,e){for(var s="",i=0;i<this.taskList[t].indent;i++)s+=this.taskListOutputTemplate.indentStr;var a=this.taskList[t].checked?this.taskListOutputTemplate.checkedText:this.taskListOutputTemplate.uncheckedText,n=e.replace(/\{IndentText\}/g,s).replace(/\{CheckBoxText\}/g,a).replace(/\{Text\}/g,this.taskList[t].text).replace(/\{br\}/g,"\n");return n},outputResult:function(){for(var t in this.outputStr=this.replaceOutputStr(0,this.taskListOutputTemplate.header),this.taskList)this.outputStr+=this.replaceOutputStr(t,this.taskListOutputTemplate.body);this.outputStr+=this.replaceOutputStr(0,this.taskListOutputTemplate.footer)},copyResult:function(){var t=document.getElementsByClassName("result")[0];t.select(),document.execCommand("copy")}},mounted:function(){localStorage.taskList&&(this.taskList=JSON.parse(localStorage.taskList)),localStorage.taskListOutputTemplate&&(this.taskListOutputTemplate=JSON.parse(localStorage.taskListOutputTemplate)),localStorage.taskListSettings&&(this.taskListSettings=JSON.parse(localStorage.taskListSettings))},updated:function(){this.$nextTick((function(){this.setAllItemState()})),this.saveItem()}},v=k,g=(s("034f"),Object(c["a"])(v,a,n,!1,null,null,null)),f=g.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(f)}}).$mount("#app")},"64a9":function(t,e,s){},c9b4:function(t,e,s){"use strict";var i=s("db73"),a=s.n(i);a.a},db73:function(t,e,s){}});