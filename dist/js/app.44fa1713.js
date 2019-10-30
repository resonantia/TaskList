(function(t){function e(e){for(var s,o,u=e[0],l=e[1],r=e[2],m=0,d=[];m<u.length;m++)o=u[m],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(e);while(d.length)d.shift()();return a.push.apply(a,r||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],s=!0,u=1;u<i.length;u++){var l=i[u];0!==n[l]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=i[0]))}return t}var s={},n={app:0},a=[];function o(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=s,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(i,s,function(e){return t[e]}.bind(null,s));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var r=0;r<u.length;r++)e(u[r]);var c=l;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var s=i("64a9"),n=i.n(s);n.a},"063d":function(t,e,i){},"180a":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var s=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"header"},[i("h1",[t._v("TaskList")]),i("div",{staticClass:"header-menu"},[i("button",{staticClass:"menu-button",on:{click:function(e){return t.showOutput()}}},[i("img",{attrs:{src:"img/note-text.svg",title:"出力画面を表示/非表示"}})]),i("button",{staticClass:"menu-button",on:{click:function(e){return t.showSettings()}}},[i("img",{attrs:{src:"img/settings.svg",title:"設定画面を表示/非表示"}})])])]),i("draggable",t._b({staticClass:"task-colmun-container",attrs:{group:"column",draggable:".column",filter:".input-text",preventOnFilter:!1},on:{start:t.onDragDropStart,end:t.onDragDropEnd},model:{value:t.taskColumnList,callback:function(e){t.taskColumnList=e},expression:"taskColumnList"}},"draggable",t.dragOptions,!1),[t._l(t.taskColumnList,(function(e,s){return i("task-column",{key:e.id,ref:s,refInFor:!0,attrs:{columnProp:e,index:s,totalsize:t.taskColumnList.length},on:{"add-column":function(e){return t.addColumn(s)},"delete-column":function(e){return t.deleteColumn(s)},"emit-item":t.emitItem,"save-item":function(e){return t.saveItem()}}})})),i("div",{key:"footer",staticClass:"column-dummy",attrs:{slot:"footer"},slot:"footer"},[i("button",{staticClass:"menu-button",staticStyle:{width:"100%",height:"100%"},attrs:{title:"新規カラムを追加"},on:{click:function(e){return t.addColumn(t.taskColumnList.length)}}},[i("img",{attrs:{src:"img/plus.svg"}})])])],2),t.taskListSettings.isOutputVisible?i("div",{staticClass:"output"},[i("input",{staticClass:"menu",attrs:{type:"button",value:"出力",title:"テキストとして出力"},on:{click:t.outputResult}}),i("input",{staticClass:"menu",attrs:{type:"button",value:"コピー",title:"出力結果をクリップボードにコピー"},on:{click:t.copyResult}}),i("button",{staticClass:"close-button",attrs:{title:"閉じる"},on:{click:t.showOutput}},[i("img",{attrs:{src:"img/x.svg"}})]),i("br"),i("textarea",{staticClass:"result",domProps:{value:t.outputStr}})]):t._e(),this.taskListSettings.isSettingsVisible?i("div",{staticClass:"settings"},[i("button",{staticClass:"close-button",attrs:{title:"閉じる"},on:{click:t.showSettings}},[i("img",{attrs:{src:"img/x.svg"}})]),i("h2",[t._v("設定")]),i("ul",{staticStyle:{"padding-left":"20px"}},[i("li",[t._v("ヘッダ："),i("br"),i("input",{directives:[{name:"model",rawName:"v-model",value:t.taskListOutputTemplate.header,expression:"taskListOutputTemplate.header"}],staticClass:"settings-text",attrs:{type:"text"},domProps:{value:t.taskListOutputTemplate.header},on:{change:t.saveSettings,input:function(e){e.target.composing||t.$set(t.taskListOutputTemplate,"header",e.target.value)}}})]),i("li",[t._v("カラムのタイトル："),i("br"),i("input",{directives:[{name:"model",rawName:"v-model",value:t.taskListOutputTemplate.titleStr,expression:"taskListOutputTemplate.titleStr"}],staticClass:"settings-text",attrs:{type:"text"},domProps:{value:t.taskListOutputTemplate.titleStr},on:{change:t.saveSettings,input:function(e){e.target.composing||t.$set(t.taskListOutputTemplate,"titleStr",e.target.value)}}})]),i("li",[t._v("チェックボックス（未）："),i("br"),i("input",{directives:[{name:"model",rawName:"v-model",value:t.taskListOutputTemplate.uncheckedText,expression:"taskListOutputTemplate.uncheckedText"}],staticClass:"settings-text",attrs:{type:"text"},domProps:{value:t.taskListOutputTemplate.uncheckedText},on:{change:t.saveSettings,input:function(e){e.target.composing||t.$set(t.taskListOutputTemplate,"uncheckedText",e.target.value)}}})]),i("li",[t._v("チェックボックス（済）："),i("br"),i("input",{directives:[{name:"model",rawName:"v-model",value:t.taskListOutputTemplate.checkedText,expression:"taskListOutputTemplate.checkedText"}],staticClass:"settings-text",attrs:{type:"text"},domProps:{value:t.taskListOutputTemplate.checkedText},on:{change:t.saveSettings,input:function(e){e.target.composing||t.$set(t.taskListOutputTemplate,"checkedText",e.target.value)}}})]),i("li",[t._v("本文："),i("br"),i("input",{directives:[{name:"model",rawName:"v-model",value:t.taskListOutputTemplate.body,expression:"taskListOutputTemplate.body"}],staticClass:"settings-text",attrs:{type:"text"},domProps:{value:t.taskListOutputTemplate.body},on:{change:t.saveSettings,input:function(e){e.target.composing||t.$set(t.taskListOutputTemplate,"body",e.target.value)}}})]),i("li",[t._v("フッタ："),i("br"),i("input",{directives:[{name:"model",rawName:"v-model",value:t.taskListOutputTemplate.footer,expression:"taskListOutputTemplate.footer"}],staticClass:"settings-text",attrs:{type:"text"},domProps:{value:t.taskListOutputTemplate.footer},on:{change:t.saveSettings,input:function(e){e.target.composing||t.$set(t.taskListOutputTemplate,"footer",e.target.value)}}})])]),t._m(0)]):t._e()],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{border:"dotted 2px #7db4e6"}},[i("ul",{staticStyle:{"font-size":"small"}},[i("li",[t._v("{Title}: カラムのタイトル")]),i("li",[t._v("{CheckBoxText}: チェックボックス")]),i("li",[t._v("{Text}: 本文")]),i("li",[t._v("{br}: 改行")])])])}],o=(i("6b54"),i("a481"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"column"},[i("div",{staticClass:"column-header"},[i("div",{staticClass:"column-title",on:{click:function(e){return e.stopPropagation(),t.showTitleEdit(e)}}},[this.isTitleEditing?t._e():i("span",{class:["column-title",this.isTitleEmpty()?"column-title-empty":""]},[t._v(t._s(this.getTitle()))]),this.isTitleEditing?i("input",{directives:[{name:"model",rawName:"v-model",value:t.column.title,expression:"column.title"}],ref:"title",staticClass:"input-text column-title",attrs:{type:"text",placeholder:"カラムのタイトルを入力",title:"カラムタイトル"},domProps:{value:t.column.title},on:{change:t.saveItem,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onPressEnterTitleEdit(e)},blur:t.hideTitleEdit,input:function(e){e.target.composing||t.$set(t.column,"title",e.target.value)}}}):t._e()]),i("button",{staticClass:"menu-button",attrs:{title:"カラムのメニューを表示"},on:{click:t.showMenu}},[i("img",{attrs:{src:"img/more-vertical.svg"}})])]),i("hr"),i("draggable",t._b({staticClass:"tasks",attrs:{list:t.column.taskList,group:"task",draggable:".task-item",filter:".input-text",preventOnFilter:!1},on:{start:t.onDragDropStart,end:t.onDragDropEnd}},"draggable",t.dragOptions,!1),t._l(t.column.taskList,(function(e,s){return i("task-item",{key:e.id,ref:s,refInFor:!0,attrs:{task:e,index:s,totalsize:t.column.taskList.length},on:{"add-item":function(e){return t.addItem(s+1)},"delete-item":function(e){return t.deleteItem(s)},"save-item":function(e){return t.saveItem()},"up-key-on-text-edit":function(e){return t.onPressKeyUpItemTextEdit(s)},"down-key-on-text-edit":function(e){return t.onPressKeyDownItemTextEdit(s)}}})})),1),i("div",{staticClass:"task-add-button-container"},[i("button",{staticClass:"task-add-button menu-button",on:{click:function(e){return t.addItem(t.column.taskList.length)}}},[i("img",{attrs:{src:"img/plus.svg",title:"タスクを追加"}})])]),t.isShowingMenu?i("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hideMenu,expression:"hideMenu"}],staticClass:"column-menu-container"},[i("div",{staticClass:"column-menu",on:{click:t.deleteCheckedItem}},[t._v("\n      チェック済タスクを全て削除\n    ")]),i("div",{staticClass:"column-menu",on:{click:t.deleteAllItem}},[t._v("\n      タスクを全て削除\n    ")]),i("hr"),i("div",{staticClass:"column-menu",on:{click:t.toggleOutput}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.column.output,expression:"column.output"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.column.output)?t._i(t.column.output,null)>-1:t.column.output},on:{change:function(e){var i=t.column.output,s=e.target,n=!!s.checked;if(Array.isArray(i)){var a=null,o=t._i(i,a);s.checked?o<0&&t.$set(t.column,"output",i.concat([a])):o>-1&&t.$set(t.column,"output",i.slice(0,o).concat(i.slice(o+1)))}else t.$set(t.column,"output",n)}}}),t._v("\n      このカラムを出力対象とする\n    ")]),i("hr"),i("div",{staticClass:"column-menu",on:{click:function(e){return t.$emit("delete-column")}}},[t._v("\n      カラムを削除\n    ")])]):t._e()],1)}),u=[],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"task-item",style:{display:"relative",marginLeft:t.task.indent*this.indentWidth+"px",width:"100%"},attrs:{id:t.task.id},on:{click:t.showEditItemText,mouseenter:t.showItemButtons,mouseleave:t.hideItemButtons}},[i("span",{directives:[{name:"visible",rawName:"v-visible",value:this.isShowItemButtons,expression:"this.isShowItemButtons"}],staticClass:"handle"},[t._v("⠿")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.task.checked,expression:"task.checked"}],attrs:{type:"checkbox",id:t.task.id},domProps:{checked:Array.isArray(t.task.checked)?t._i(t.task.checked,null)>-1:t.task.checked},on:{change:function(e){var i=t.task.checked,s=e.target,n=!!s.checked;if(Array.isArray(i)){var a=null,o=t._i(i,a);s.checked?o<0&&t.$set(t.task,"checked",i.concat([a])):o>-1&&t.$set(t.task,"checked",i.slice(0,o).concat(i.slice(o+1)))}else t.$set(t.task,"checked",n)}}}),i("label",{attrs:{for:t.task.id},on:{click:function(e){return e.stopPropagation(),t.toggleCheckBox(e)}}},[t._v(" ")]),t.isEditing?t._e():i("div",{class:["task-item-text",this.isTextEmpty()?"task-item-text-empty":""],style:{textDecoration:t.task.checked?"line-through":"none"}},[t._v(t._s(this.getText()))]),t.isEditing?i("input",{directives:[{name:"model",rawName:"v-model",value:t.task.text,expression:"task.text"}],ref:"input",staticClass:"input-text task-item-text",style:{textDecoration:t.task.checked?"line-through":"none"},attrs:{type:"text",placeholder:"タスクの内容を入力",title:"内容"},domProps:{value:t.task.text},on:{change:function(e){return t.$emit("save-item")},blur:t.hideEditItemText,keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onPressEnterEditItemText(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.$emit("up-key-on-text-edit")},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.$emit("down-key-on-text-edit")}],input:function(e){e.target.composing||t.$set(t.task,"text",e.target.value)}}}):t._e(),t.isShowItemButtons?i("div",{staticStyle:{display:"inline-block",position:"absolute",right:"0"}},[i("button",{directives:[{name:"show",rawName:"v-show",value:this.isDeletableItem,expression:"this.isDeletableItem"}]},[i("img",{staticClass:"menu-button",attrs:{src:"img/circle-x.svg",title:"この項目を削除"},on:{click:function(e){return e.stopPropagation(),t.$emit("delete-item")}}})])]):t._e(),i("hr")])},r=[],c={name:"TaskItem",props:["task","index","totalsize"],directives:{visible:{update:function(t,e){t.style.visibility=e.value?"visible":"hidden"}}},data:function(){return{indentWidth:30,isTopItem:!0,isBottomItem:!0,isDeletableItem:!0,isEditing:!1,isShowItemButtons:!1,isNewItem:!1}},methods:{isTextEmpty:function(){return""==this.task.text},getText:function(){return this.isTextEmpty()?"クリックして内容を入力":this.task.text},showEditItemText:function(){this.isEditing=!0,this.setFocusToTextInput()},hideEditItemText:function(){this.isEditing=!1,this.isNewItem&&(this.isTextEmpty()?this.$emit("delete-item"):this.isNewItem=!1)},onPressEnterEditItemText:function(){this.hideEditItemText(),this.isTextEmpty()||this.$emit("add-item",this.index)},showItemButtons:function(){this.isShowItemButtons=!0},hideItemButtons:function(){this.isShowItemButtons=!1},setFocusToTextInput:function(){var t=this;this.$nextTick((function(){t.$refs.input.focus()}))},toggleCheckBox:function(){var t=this;this.task.checked=!this.task.checked,this.$nextTick((function(){t.$emit("save-item")}))}}},m=c,d=(i("a632"),i("2877")),p=Object(d["a"])(m,l,r,!1,null,"84ee0f6a",null),h=p.exports,k=i("310e"),g=i.n(k),f=i("2103"),v=i.n(f),x={name:"TaskColumn",components:{TaskItem:h,draggable:g.a},props:["columnProp","index","totalsize"],directives:{visible:{update:function(t,e){t.style.visibility=e.value?"visible":"hidden"}},clickOutside:v.a.directive},data:function(){return{column:this.columnProp,isTitleEditing:!1,isNewColumn:!1,drag:!1,isShowingMenu:!1}},computed:{dragOptions:function(){return{animation:200,group:"task",disabled:!1,ghostClass:"ghost"}}},methods:{buildId:function(){return"xxxxx".replace(/x/g,(function(){return(16*Math.random()|0).toString(16)}))},buildNewItem:function(){return{id:this.buildId(),indent:0,checked:!1,text:""}},addItem:function(t){var e=this;this.column.taskList.splice(t,0,this.buildNewItem()),this.saveItem(),this.$nextTick((function(){e.$refs[t]["0"].isNewItem=!0,e.$refs[t]["0"].showEditItemText()}))},deleteItem:function(t){this.hideMenu(),(this.$refs[t]["0"].isNewItem||window.confirm("アイテムを削除します。よろしいですか？"))&&(this.$refs[this.column.taskList.length-1]["0"].isNewItem=!1,this.column.taskList.splice(t,1),this.saveItem())},onDragDropStart:function(){this.drag=!0},onDragDropEnd:function(){this.drag=!1,this.saveItem()},saveItem:function(){this.$emit("emit-item",this.index,this.column),this.$emit("save-item")},isTitleEmpty:function(){return""==this.column.title},getTitle:function(){return""==this.column.title?"クリックしてタイトルを入力":this.column.title},showTitleEdit:function(){this.isTitleEditing=!0,this.setFocusToTextInput()},hideTitleEdit:function(){this.isTitleEditing=!1,this.isNewColumn&&(this.isTitleEmpty()?this.$emit("delete-column"):this.isNewColumn=!1)},setFocusToTextInput:function(){var t=this;this.$nextTick((function(){t.$refs.title.focus()}))},onPressEnterTitleEdit:function(){this.hideTitleEdit(),this.isTitleEmpty()||0!=this.column.taskList.length||this.addItem(0)},onPressKeyUpItemTextEdit:function(t){var e=this;t<=0||this.$nextTick((function(){e.$refs[t-1]["0"].showEditItemText()}))},onPressKeyDownItemTextEdit:function(t){var e=this;t>=this.column.taskList.length-1||this.$nextTick((function(){e.$refs[t+1]["0"].showEditItemText()}))},showMenu:function(){var t=this;this.$nextTick((function(){t.isShowingMenu=!0}))},hideMenu:function(){this.isShowingMenu=!1},toggleOutput:function(){this.column.output?this.column.output=!1:this.column.output=!0,this.saveItem()},deleteCheckedItem:function(){if(this.hideMenu(),window.confirm("チェック済みのタスクを全て削除します。よろしいですか？")){for(var t in this.column.taskList)this.column.taskList[t].checked&&this.column.taskList.splice(t,1);this.saveItem()}},deleteAllItem:function(){this.hideMenu(),window.confirm("全てのタスクを削除します。よろしいですか？")&&(this.column.taskList.splice(0),this.saveItem())}},watch:{},updated:function(){}},T=x,b=(i("a2ac"),Object(d["a"])(T,o,u,!1,null,"54eb559c",null)),y=b.exports,S={name:"app",components:{TaskColumn:y,draggable:g.a},directives:{},data:function(){return{taskColumnList:[],outputStr:"",taskListOutputTemplate:{header:"## TODO{br}",titleStr:"{br}### {Title}{br}{br}",body:"- {CheckBoxText} {Text}{br}",footer:"",uncheckedText:"[ ]",checkedText:"[x]"},taskListSettings:{isSettingsVisible:!1,isOutputVisible:!1},drag:!1}},computed:{dragOptions:function(){return{animation:200,group:"task",disabled:!1,ghostClass:"ghost"}}},methods:{buildId:function(){return"xxxxx".replace(/x/g,(function(){return(16*Math.random()|0).toString(16)}))},buildNewColumn:function(){return{id:this.buildId(),title:"",taskList:[],output:!0}},addColumn:function(t){var e=this;this.taskColumnList.splice(t,0,this.buildNewColumn()),this.saveItem(),this.$nextTick((function(){e.$refs[t]["0"].isNewColumn=!0,e.$refs[t]["0"].showTitleEdit()}))},deleteColumn:function(t){(this.$refs[t]["0"].isNewColumn||window.confirm("カラムを削除します。よろしいですか？"))&&(this.taskColumnList.splice(t,1),this.$refs[t]["0"].isNewColumn=!1,this.saveItem())},onDragDropStart:function(){this.drag=!0},onDragDropEnd:function(){this.drag=!1,this.saveItem()},showOutput:function(){this.taskListSettings.isOutputVisible?this.taskListSettings.isOutputVisible=!1:this.taskListSettings.isOutputVisible=!0,this.saveSettings()},showSettings:function(){this.taskListSettings.isSettingsVisible?this.taskListSettings.isSettingsVisible=!1:this.taskListSettings.isSettingsVisible=!0,this.saveSettings()},emitItem:function(t,e){this.taskColumnList[t]=e},saveItem:function(){localStorage.taskColumnList=JSON.stringify(this.taskColumnList)},saveSettings:function(){localStorage.taskListOutputTemplate=JSON.stringify(this.taskListOutputTemplate),localStorage.taskListSettings=JSON.stringify(this.taskListSettings)},replaceOutputStrHeader:function(t){var e=t.replace(/\{br\}/g,"\n");return e},replaceOutputStrTitle:function(t,e){var i=e.replace(/\{Title\}/g,this.taskColumnList[t].title).replace(/\{br\}/g,"\n");return i},replaceOutputStr:function(t,e,i){var s=this.taskColumnList[t].taskList[e].checked?this.taskListOutputTemplate.checkedText:this.taskListOutputTemplate.uncheckedText,n=i.replace(/\{CheckBoxText\}/g,s).replace(/\{Text\}/g,this.taskColumnList[t].taskList[e].text).replace(/\{br\}/g,"\n");return n},replaceOutputStrFooter:function(t){var e=t.replace(/\{br\}/g,"\n");return e},outputResult:function(){for(var t in this.outputStr=this.replaceOutputStrHeader(this.taskListOutputTemplate.header),this.taskColumnList)if(this.taskColumnList[t].output)for(var e in this.outputStr+=this.replaceOutputStrTitle(t,this.taskListOutputTemplate.titleStr),this.taskColumnList[t].taskList)this.outputStr+=this.replaceOutputStr(t,e,this.taskListOutputTemplate.body);this.outputStr+=this.replaceOutputStrFooter(this.taskListOutputTemplate.footer)},copyResult:function(){var t=document.getElementsByClassName("result")[0];t.select(),document.execCommand("copy")}},mounted:function(){localStorage.taskColumnList&&(this.taskColumnList=JSON.parse(localStorage.taskColumnList)),localStorage.taskListOutputTemplate&&(this.taskListOutputTemplate=JSON.parse(localStorage.taskListOutputTemplate)),localStorage.taskListSettings&&(this.taskListSettings=JSON.parse(localStorage.taskListSettings))}},w=S,L=(i("034f"),Object(d["a"])(w,n,a,!1,null,null,null)),C=L.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(C)}}).$mount("#app")},"64a9":function(t,e,i){},a2ac:function(t,e,i){"use strict";var s=i("063d"),n=i.n(s);n.a},a632:function(t,e,i){"use strict";var s=i("180a"),n=i.n(s);n.a}});