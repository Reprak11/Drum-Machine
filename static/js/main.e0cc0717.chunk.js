(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{17:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t(0),s=t.n(c),o=t(5),u=t.n(o),r=(t(17),function(){return Object(a.jsx)("h1",{className:"title",children:"Drum Machine"})}),m=t(4),d=Object(m.b)(null,(function(e){return{changeSound:function(n,t){e({type:"TEMPO",name:n,soundURL:t})}}}))((function(e){var n=e.buttonText,t=e.soundURL,c=(e.keyletter,e.name),s=e.changeSound;return Object(a.jsx)("button",{className:"cacafuti-200",type:"button",onClick:function(){s(c,t)},children:n})})),l=Object(m.b)((function(e){return{sounds:e.sounds}}),null)((function(e){var n=e.sounds;return Object(a.jsx)("div",{className:"button-grid",children:n.map((function(e){return Object(a.jsx)(d,{keyletter:e.keyletter,buttonText:e.value,soundURL:e.soundURL,name:e.soundName})}))})})),j=Object(m.b)((function(e){return{power:e.power}}),(function(e){return{changePower:function(n){e({type:"POWERSWITCH",power:n})}}}))((function(e){var n=e.power,t=e.changePower;return Object(a.jsx)("div",{className:"toggle-switch",children:Object(a.jsxs)("label",{className:"switch",children:[Object(a.jsx)("input",{onClick:function(){t(!n)},type:"checkbox"}),Object(a.jsx)("span",{class:"slider"})]})})})),i=Object(m.b)((function(e){return{name:e.name}}),null)((function(e){var n=e.name;return Object(a.jsx)("div",{className:"display",children:Object(a.jsx)("h2",{children:n})})})),b=Object(m.b)((function(e){return{volume:e.volume}}),(function(e){return{changeVolume:function(n){e({type:"VOLUMENCHANGE",volume:n})}}}))((function(e){var n=e.volume,t=e.changeVolume;return Object(a.jsx)("div",{className:"volume-control",children:Object(a.jsx)("input",{type:"range",min:"0",max:"100",step:"1",value:n,onChange:function(e){t(e.target.value)}})})})),O=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(i,{}),Object(a.jsxs)("div",{className:"controls",children:[Object(a.jsxs)("div",{className:"one-control",children:[Object(a.jsx)("h3",{className:"control-text",children:"Power"}),Object(a.jsx)(j,{})]}),Object(a.jsxs)("div",{className:"one-control",children:[Object(a.jsx)("h3",{className:"control-text",children:"Volume"}),Object(a.jsx)(b,{})]})]})]})},p=function(e){e.changeKeySound;return Object(a.jsxs)("div",{className:"beatbox",children:[Object(a.jsx)(O,{}),Object(a.jsx)(l,{})]})};var h=Object(m.b)(null,(function(e){return{changeKeySound:function(n){e({type:"KEY",keyPressed:n})}}}))((function(e){var n=e.changeKeySound;return Object(a.jsxs)("div",{className:"drumbox",tabIndex:"0",onKeyPress:function(e){n(e.key)},children:[Object(a.jsx)(r,{}),Object(a.jsx)(p,{})]})})),v=t(2),f=t(6),x=t(3),N={power:!1,value:"",sounds:x.a,name:"",volume:50},w="TEMPO",y="POWERSWITCH",R="VOLUMENCHANGE",L=function(e,n){var t=new Audio(e);t.volume=n/100,t.play()},U=Object(f.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case w:return e.power?(L(n.soundURL,e.volume),Object(v.a)(Object(v.a)({},e),{},{name:n.name})):e;case y:return Object(v.a)(Object(v.a)({},e),{},{power:n.power,value:"",name:""});case R:return Object(v.a)(Object(v.a)({},e),{},{volume:n.volume});case"KEY":if(!e.power)return e;switch(n.keyPressed){case"q":return L(x.a[0].soundURL,e.volume),Object(v.a)(Object(v.a)({},e),{},{name:x.a[0].soundName});case"w":return L(x.a[1].soundURL,e.volume),Object(v.a)(Object(v.a)({},e),{},{name:x.a[1].soundName});case"e":return L(x.a[2].soundURL,e.volume),Object(v.a)(Object(v.a)({},e),{},{name:x.a[2].soundName});case"a":return L(x.a[3].soundURL,e.volume),Object(v.a)(Object(v.a)({},e),{},{name:x.a[3].soundName});case"s":return L(x.a[4].soundURL,e.volume),Object(v.a)(Object(v.a)({},e),{},{name:x.a[4].soundName});case"d":return L(x.a[5].soundURL,e.volume),Object(v.a)(Object(v.a)({},e),{},{name:x.a[5].soundName});case"z":return L(x.a[6].soundURL,e.volume),Object(v.a)(Object(v.a)({},e),{},{name:x.a[6].soundName});case"x":return L(x.a[7].soundURL,e.volume),Object(v.a)(Object(v.a)({},e),{},{name:x.a[7].soundName});case"c":return L(x.a[8].soundURL,e.volume),Object(v.a)(Object(v.a)({},e),{},{name:x.a[8].soundName});default:return e}default:return e}}));u.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(m.a,{store:U,children:Object(a.jsx)(h,{})})}),document.getElementById("root"))},3:function(e){e.exports=JSON.parse('{"a":[{"value":"Q","keyletter":"q","soundURL":"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3","soundName":"Heater-1"},{"value":"W","keyletter":"w","soundURL":"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3","soundName":"Heater-2"},{"value":"E","keyletter":"e","soundURL":"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3","soundName":"Heater-3"},{"value":"A","keyletter":"a","soundURL":"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3","soundName":"Heater-4"},{"value":"S","keyletter":"s","soundURL":"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3","soundName":"Clap"},{"value":"D","keyletter":"d","soundURL":"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3","soundName":"Open-HH"},{"value":"Z","keyletter":"z","soundURL":"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3","soundName":"Kick-n\'-hat"},{"value":"X","keyletter":"x","soundURL":"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3","soundName":"Kick"},{"value":"C","keyletter":"c","soundURL":"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3","soundName":"Closed-HH"}]}')}},[[24,1,2]]]);
//# sourceMappingURL=main.e0cc0717.chunk.js.map