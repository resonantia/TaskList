(function(t){function e(e){for(var s,a,r=e[0],u=e[1],c=e[2],d=0,h=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&h.push(n[a][0]),n[a]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);l&&l(e);while(h.length)h.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],s=!0,r=1;r<i.length;r++){var u=i[r];0!==n[u]&&(s=!1)}s&&(o.splice(e--,1),t=a(a.s=i[0]))}return t}var s={},n={app:0},o=[];function a(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=s,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(i,s,function(e){return t[e]}.bind(null,s));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var l=u;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var s=i("64a9"),n=i.n(s);n.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var s=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[t._m(0),i("div",{staticClass:"main-content"},[i("div",{staticClass:"tasks"},[i("draggable",t._b({attrs:{group:"task"},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1}},model:{value:t.taskList,callback:function(e){t.taskList=e},expression:"taskList"}},"draggable",t.dragOptions,!1),[i("transition-group",{attrs:{type:"transition"}},t._l(t.taskList,(function(e,s){return i("task-item",{key:e.id,ref:s,refInFor:!0,attrs:{task:e,index:s,totalsize:t.taskList.length},on:{"add-item":function(e){return t.addItem(s)},"delete-item":function(e){return t.deleteItem(s)},"move-item-to-up":function(e){return t.moveItemToUp(s)},"move-item-to-down":function(e){return t.moveItemToDown(s)},"move-item-to-left":function(e){return t.moveItemToLeft(s)},"move-item-to-right":function(e){return t.moveItemToRight(s)},"show-edit-item-text":function(e){return t.showEditItemText(s)},"hide-edit-item-text":function(e){return t.hideEditItemText(s)},"show-item-buttons":function(e){return t.showItemButtons(s)},"hide-item-buttons":function(e){return t.hideItemButtons(s)},"save-item":function(e){return t.saveItem()}}})})),1)],1)],1),i("div",{staticClass:"output"},[i("input",{staticClass:"menu",attrs:{type:"button",value:"出力"},on:{click:t.outputResult}}),i("input",{staticClass:"menu",attrs:{type:"button",value:"コピー"},on:{click:t.copyResult}}),i("br"),i("textarea",{staticClass:"result",domProps:{value:t.outputStr}})])])])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("h1",[t._v("TODO")])])}],a=(i("6b54"),i("a481"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"task-item",style:{paddingLeft:t.task.indent*this.indentWidth+"px"},attrs:{id:t.task.id},on:{mouseenter:function(e){return t.$emit("show-item-buttons")},mouseleave:function(e){return t.$emit("hide-item-buttons")}}},[i("span",{staticClass:"handle"}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.task.checked,expression:"task.checked"}],attrs:{type:"checkbox",id:t.task.id},domProps:{checked:Array.isArray(t.task.checked)?t._i(t.task.checked,null)>-1:t.task.checked},on:{change:[function(e){var i=t.task.checked,s=e.target,n=!!s.checked;if(Array.isArray(i)){var o=null,a=t._i(i,o);s.checked?a<0&&t.$set(t.task,"checked",i.concat([o])):a>-1&&t.$set(t.task,"checked",i.slice(0,a).concat(i.slice(a+1)))}else t.$set(t.task,"checked",n)},function(e){return t.$emit("save-item")}]}}),i("label",{staticStyle:{display:"inline-block"},attrs:{for:t.task.id},on:{click:function(){t.task.checked?t.task.checked=!1:t.task.checked=!0}}},[t._v(" ")]),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing,expression:" ! isEditing"}],style:{display:"inline-block",cursor:"text",width:500-t.task.indent*this.indentWidth+"px",height:"1em",textDecoration:t.task.checked?"line-through":"none"},on:{click:function(e){return t.$emit("show-edit-item-text")}}},[t._v(t._s(t.task.text))]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.task.text,expression:"task.text"},{name:"show",rawName:"v-show",value:t.isEditing,expression:"isEditing"}],ref:"input",style:{display:"inline-block",width:500-20*t.task.indent+"px",height:"1em",textDecoration:t.task.checked?"line-through":"none"},attrs:{type:"text",title:"内容"},domProps:{value:t.task.text},on:{change:function(e){return t.$emit("save-item")},blur:function(e){return t.$emit("hide-edit-item-text")},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("hide-edit-item-text")},input:function(e){e.target.composing||t.$set(t.task,"text",e.target.value)}}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowItemButtons,expression:"isShowItemButtons"}],staticStyle:{display:"inline-block",position:"relative",float:"right"}},[i("input",{staticClass:"menu",attrs:{type:"button",value:"➕",title:"下に項目を追加"},on:{click:function(e){return t.$emit("add-item")}}}),i("input",{directives:[{name:"show",rawName:"v-show",value:t.task.indent,expression:"task.indent"}],staticClass:"menu",attrs:{type:"button",value:"◀",title:"インデントを戻す"},on:{click:function(e){return t.$emit("move-item-to-left")}}}),i("input",{staticClass:"menu",attrs:{type:"button",value:"▶",title:"インデント"},on:{click:function(e){return t.$emit("move-item-to-right")}}}),i("input",{directives:[{name:"show",rawName:"v-show",value:this.isDeletableItem,expression:"this.isDeletableItem"}],staticClass:"menu",attrs:{type:"button",value:"❌",title:"この項目を削除"},on:{click:function(e){return t.$emit("delete-item")}}})]),i("hr")])}),r=[],u={name:"TaskItem",props:["task","index","totalsize"],directives:{visible:{update:function(t,e){t.style.visibility=e.value?"visible":"hidden"}}},data:function(){return{indentWidth:30,isTopItem:!0,isBottomItem:!0,isDeletableItem:!1,isEditing:!1,isShowItemButtons:!1}},methods:{setItemState:function(){0==this.index?this.isTopItem=!0:this.isTopItem=!1,this.index==this.totalsize-1?this.isBottomItem=!0:this.isBottomItem=!1,this.totalsize>1?this.isDeletableItem=!0:this.isDeletableItem=!1},setFocusToTextInput:function(){var t=this;this.$nextTick((function(){t.$refs.input.focus()}))}}},c=u,l=(i("913a"),i("2877")),d=Object(l["a"])(c,a,r,!1,null,"526b7997",null),h=d.exports,m=i("310e"),p=i.n(m),f={name:"app",components:{TaskItem:h,draggable:p.a},directives:{},data:function(){return{taskList:[this.buildNewItem()],outputStr:"",taskListOutputTemplate:{header:"## TODO{br}{br}",indentStr:"  ",body:"{IndentText}- {CheckBoxText} {Text}{br}",footer:"",uncheckedText:"[ ]",checkedText:"[x]"},taskListSettings:{showSettings:!1}}},computed:{dragOptions:function(){return{animation:200,group:"task",disabled:!1,ghostClass:"ghost"}}},methods:{buildId:function(){return"xxxxx".replace(/x/g,(function(){return(16*Math.random()|0).toString(16)}))},buildNewItem:function(){return{id:this.buildId(),indent:0,checked:!1,text:""}},setAllItemState:function(){for(var t in this.$refs)null!=this.$refs[t]["0"]&&this.$refs[t]["0"].setItemState()},addItem:function(t){this.taskList.splice(t+1,0,this.buildNewItem()),this.taskList[t+1].indent=this.taskList[t].indent,this.saveItem()},replaceItem:function(t,e){var i=this.taskList[e];this.taskList.splice(e,1,this.taskList[t]),this.taskList.splice(t,1,i)},moveItemToUp:function(t){this.$refs[t]["0"].isTopItem||(this.$refs[t]["0"].isShowItemButtons=!1,this.replaceItem(t-1,t),this.saveItem())},moveItemToDown:function(t){this.$refs[t]["0"].isBottomItem||(this.$refs[t]["0"].isShowItemButtons=!1,this.replaceItem(t,t+1),this.saveItem())},moveItemToRight:function(t){this.taskList[t].indent++,this.saveItem()},moveItemToLeft:function(t){this.taskList[t].indent<=0||(this.taskList[t].indent--,this.saveItem())},deleteItem:function(t){this.$refs[t]["0"].isDeletableItem&&window.confirm("アイテムを削除します。よろしいですか？")&&(this.taskList.splice(t,1),this.saveItem())},showEditItemText:function(t){this.$set(this.$refs[t]["0"],"isEditing",!0),this.$refs[t]["0"].setFocusToTextInput()},hideEditItemText:function(t){this.$refs[t]["0"].isEditing=!1},showItemButtons:function(t){this.$refs[t]["0"].isShowItemButtons=!0},hideItemButtons:function(t){this.$refs[t]["0"].isShowItemButtons=!1},saveItem:function(){localStorage.taskList=JSON.stringify(this.taskList)},replaceOutputStr:function(t,e){for(var i="",s=0;s<this.taskList[t].indent;s++)i+=this.taskListOutputTemplate.indentStr;var n=this.taskList[t].checked?this.taskListOutputTemplate.checkedText:this.taskListOutputTemplate.uncheckedText,o=e.replace(/\{IndentText\}/g,i).replace(/\{CheckBoxText\}/g,n).replace(/\{Text\}/g,this.taskList[t].text).replace(/\{br\}/g,"\n");return o},outputResult:function(){for(var t in this.outputStr=this.replaceOutputStr(0,this.taskListOutputTemplate.header),this.taskList)this.outputStr+=this.replaceOutputStr(t,this.taskListOutputTemplate.body);this.outputStr+=this.replaceOutputStr(0,this.taskListOutputTemplate.footer)},copyResult:function(){var t=document.getElementsByClassName("result")[0];t.select(),document.execCommand("copy")}},mounted:function(){localStorage.taskList&&(this.taskList=JSON.parse(localStorage.taskList))},updated:function(){this.$nextTick((function(){this.setAllItemState()})),this.saveItem()}},k=f,v=(i("034f"),Object(l["a"])(k,n,o,!1,null,null,null)),x=v.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(x)}}).$mount("#app")},"64a9":function(t,e,i){},"913a":function(t,e,i){"use strict";var s=i("9a96"),n=i.n(s);n.a},"9a96":function(t,e,i){}});