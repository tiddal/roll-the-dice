(this["webpackJsonproll-the-dice"]=this["webpackJsonproll-the-dice"]||[]).push([[0],{13:function(n,e,t){n.exports=t(20)},20:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(9),l=t.n(o),i=t(5),c=t(1),d=t(2),u=t(3);function s(){var n=Object(d.a)(["\n  font-size: 10em;\n  color: #2AC289;\n  filter: drop-shadow(0px 2px 2px rgba(51, 51, 51, 0.25));\n;\n"]);return s=function(){return n},n}var f=u.b.div(s()),b=function(n){var e=n.face,t={one:a.a.createElement(c.c,null),two:a.a.createElement(c.f,null),three:a.a.createElement(c.e,null),four:a.a.createElement(c.b,null),five:a.a.createElement(c.a,null),six:a.a.createElement(c.d,null)};return a.a.createElement(f,null,t[e])};function m(){var n=Object(d.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-items: center;\n  button {\n    grid-column: 1 / -1;\n    padding: 16px 48px;\n    font-size: 16px;\n    text-transform: uppercase;\n    margin-bottom: -16px;\n    border-radius: 16px;\n    background-color: #333;\n    font-weight: bold;\n    color: #fff;\n    border: none;\n    box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.25);\n    cursor: pointer;\n    width: 300px;\n    transition: background-color .3s ease, width .5s ease;\n    outline: none;\n    :hover {\n      background-color: #2AC289;\n    }\n    :disabled {\n      background-color: #333;\n      cursor: progress;\n    }\n  }\n  column-gap: 20px;\n  row-gap: 75px;\n  max-width: 600px;\n  border: 2px solid #2AC289;\n  padding: 100px;\n  padding-bottom: 0;\n  border-radius: 16px;\n  box-shadow: 0px 15px 30px rgba(51, 51, 51, 0.25);  \n\n  ","\n\n\n\n  @keyframes wobble {\n    from {\n      transform: translate3d(0, 0, 0)\n    }\n\n    15% {\n      transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    }\n\n    30% {\n      transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    }\n\n    45% {\n      transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    }\n\n    60% {\n      transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    }\n\n    75% {\n      transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    }\n\n    to {\n      transform: translate3d(0, 0, 0);\n    }\n  }\n\n"]);return m=function(){return n},n}var p=u.b.div(m(),(function(n){return n.isRolling&&"\n      div {\n        animation-name: wobble;\n        animation-duration: 1s;\n      };"})),g=function(){var n=Object(r.useState)("one"),e=Object(i.a)(n,2),t=e[0],o=e[1],l=Object(r.useState)("three"),c=Object(i.a)(l,2),d=c[0],u=c[1],s=Object(r.useState)(!1),f=Object(i.a)(s,2),m=f[0],g=f[1];function x(){var n=["one","two","three","four","five","six"];g(!0),setTimeout((function(){o(n[Math.floor(Math.random()*n.length)]),u(n[Math.floor(Math.random()*n.length)])}),350),setTimeout((function(){g(!1)}),1e3)}return Object(r.useEffect)((function(){x()}),[]),a.a.createElement(p,{isRolling:m},a.a.createElement(b,{face:t}),a.a.createElement(b,{face:d}),a.a.createElement("button",{type:"button",onClick:x,disabled:m},m?"Rolling...":"Click to roll the dice!"))};function x(){var n=Object(d.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  };\n  body, input, button {\n    font-family: 'Mulish', Roboto, Arial, Helvetica, sans-serif;\n  };\n  body{\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    align-content: center;\n    justify-content: center;\n  };\n"]);return x=function(){return n},n}var h=Object(u.a)(x());var v=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(h,null),a.a.createElement(g,null))};l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.a8a97ca6.chunk.js.map