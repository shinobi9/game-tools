(this["webpackJsonpgame-tools"]=this["webpackJsonpgame-tools"]||[]).push([[0],{151:function(e,t,a){},168:function(e,t){},170:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(23),l=a.n(i),r=a(72),s=(a(151),a(26)),o=a(54),d=a(60),u=a(101),h=a(12),j=a(206),b=a(37),m=a(226),p=a(209),O=a(211),x=a(212),g=a(214),v=a(79),f=a(213),y=a(118),C=a.n(y),w=a(119),_=a.n(w),N=a(120),B=a.n(N),A=a(172),L=a(215),H=a(10),M=240,S=Object(j.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(M,"px)"),marginLeft:M,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:M,flexShrink:0},drawerPaper:{width:M},drawerHeader:Object(u.a)(Object(u.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},link:{textDecoration:"none",color:"black"}}}));function k(e){var t=S(),a=Object(b.a)(),n=c.a.useState(!1),i=Object(d.a)(n,2),l=i[0],s=i[1];return Object(H.jsxs)("div",{className:t.root,children:[Object(H.jsx)(p.a,{}),Object(H.jsx)(O.a,{position:"fixed",className:Object(h.a)(t.appBar,Object(o.a)({},t.appBarShift,l)),children:Object(H.jsxs)(x.a,{children:[Object(H.jsx)(f.a,{color:"inherit","aria-label":"open drawer",onClick:function(){s(!0)},edge:"start",className:Object(h.a)(t.menuButton,l&&t.hide),children:Object(H.jsx)(C.a,{})}),Object(H.jsx)(v.a,{variant:"h6",noWrap:!0,children:"Game Tools"})]})}),Object(H.jsxs)(m.a,{className:t.drawer,variant:"persistent",anchor:"left",open:l,classes:{paper:t.drawerPaper},children:[Object(H.jsx)("div",{className:t.drawerHeader,children:Object(H.jsx)(f.a,{onClick:function(){s(!1)},children:"ltr"===a.direction?Object(H.jsx)(_.a,{}):Object(H.jsx)(B.a,{})})}),Object(H.jsxs)(g.a,{children:[Object(H.jsx)(r.b,{className:t.link,to:"/borderlands2/calculator",children:Object(H.jsx)(A.a,{button:!0,children:Object(H.jsx)(L.a,{primary:"\u538b\u8840\u8ba1\u7b97\u5668"})},"borderlands2-calculator")}),Object(H.jsx)(r.b,{className:t.link,to:"/payday2/bigoil",children:Object(H.jsx)(A.a,{button:!0,children:Object(H.jsx)(L.a,{primary:"\u5927\u6cb9\u5f15\u64ce"})},"payday2-bigoil")})]})]}),Object(H.jsxs)("main",{className:Object(h.a)(t.content,Object(o.a)({},t.contentShift,l)),children:[Object(H.jsx)("div",{className:t.drawerHeader}),e.children]})]})}var E=a(24),D=a(46),I=a(73),G=a(91),W=a(90),q=a(223),R=a(218),T=a(14),P=a(222),F=a(3),V=1.13,U=1e4,J=function e(t,a){Object(D.a)(this,e),this.name=t,this.maxHpIncrease=a},z=function e(t,a){Object(D.a)(this,e),this.name=t,this.recovery=a},Y=function e(t,a,n,c,i){Object(D.a)(this,e),this.name=t,this.capacity=a,this.speed=n,this.delay=c,this.maxHpDecrease=i},K=function e(t,a,n,c,i){Object(D.a)(this,e),this.name=t,this.capacity=a,this.speed=n,this.delay=c,this.maxHpDecrease=i},Q=new Map([["NONE",new K("None",0,0,0,0)],["TEDIORE",new K("Tediore",-1200,1200,-1600,-225)],["BANDIT",new K("Bandit",300,2400,800,1350)],["VLADOF",new K("Vladof",-300,900,400,0)],["DAHL",new K("Dahl",-600,-300,-2800,225)],["ANSHIN",new K("Anshin",1500,-2400,2800,-450)],["MALIWAN",new K("Maliwan",-1500,300,0,-1800)],["TORGUE",new K("Torgue",900,600,800,1125)],["HYPERION",new K("Hyperion",-1200,-600,-3200,-675)],["PANGOLIN",new K("Pangolin",2400,-2100,3200,675)]]),X={beta:new Map([["NONE",new J("None",0)],["A0_B0_C0",new J("A0_B0_C0",0)],["A1_B0_C0",new J("A1_B0_C0",5)],["A2_B0_C0",new J("A2_B0_C0",10)],["A3_B0_C0",new J("A3_B0_C0",15)],["A4_B0_C0",new J("A4_B0_C0",20)],["A5_B0_C0",new J("A5_B0_C0",25)]]),gamma:new Map([["NONE",new z("None",0)],["A0_B0_C0",new z("A0_B0_C0",0)],["A0_B1_C0",new z("A0_B1_C0",1)],["A0_B2_C0",new z("A0_B2_C0",2)],["A0_B3_C0",new z("A0_B3_C0",3)],["A0_B4_C0",new z("A0_B4_C0",4)],["A0_B5_C0",new z("A0_B5_C0",5)]])},Z=new Map([["WHITE",new Y("\u767d\u8272",0,0,0,0)],["GREEN",new Y("\u7eff\u8272",1200,0,0,-1350)],["BLUE",new Y("\u84dd\u8272",2400,0,0,-2700)],["PURPLE",new Y("\u7d2b\u8272",3600,0,0,-4050)]]);function $(e,t){return P.a(e).divide(U).add(1).multiply(32).multiply(F.Wd(V,t)).done()}function ee(e,t){return P.a(e).divide(U).add(1).multiply(64).multiply(F.Wd(V,t)).done()}function te(e,t){var a=F.Mb(e,U);return a=a>=0?P.a(10.24).multiply(F.Wd(V,t)).multiply(F.F(a,1)).done():P.a(10.24).multiply(F.Wd(V,t)).divide(F.F(F.y(a),1)).done()}function ae(e){var t=F.Mb(e,U);return t=t>=0?F.yd(3.5,F.F(t,1)):F.F(F.y(t),1)}function ne(e,t){return P.a(e).divide(100).add(1).multiply(16).multiply(F.Wd(V,t)).done()}function ce(e,t){return P.a(e).divide(100).add(1).multiply(.5).multiply(F.Wd(V,t)).done()}function ie(e,t,a,n,c){var i=function(e,t,a,n){return Q.get(e).capacity+Q.get(t).capacity+Q.get(a).capacity+Z.get(n).capacity+7500}(e,t,a,c),l=function(e,t,a,n){return Q.get(e).speed+Q.get(t).speed+Q.get(a).speed+Z.get(n).speed}(e,t,a,c),r=function(e,t,a){return Q.get(e).delay+Q.get(t).delay+Q.get(a).delay}(e,t,a),s=function(e,t,a,n){return Q.get(e).maxHpDecrease+Q.get(t).maxHpDecrease+Q.get(a).maxHpDecrease+Z.get(n).maxHpDecrease}(e,t,a,c);return{capacity:se(ee(i,n),0),speed:se(te(l,n),0),delay:se(ae(r)),maxHpDecrease:se($(s,n),0)}}function le(e,t,a){var n=function(e){return X.beta.get(e).maxHpIncrease}(e),c=function(e){return X.gamma.get(e).recovery}(t);return{maxHpIncrease:se(ne(n,a),0),recovery:se(ce(c,a),0)}}function re(e,t,a,n){return se(function(e,t,a,n){return P.a(e).subtract(t).multiply(a).add(n).done()}(e,t,a,n),0)}function se(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return F.pe(e,t)}var oe=function(e){Object(G.a)(a,e);var t=Object(W.a)(a);function a(e){var n;return Object(D.a)(this,a),(n=t.call(this,e)).state={shieldLevel:90,shieldLevelMin:0,shieldLevelMax:90,shieldAlpha:"NONE",shieldBeta:"NONE",shieldGamma:"NONE",shieldReality:"WHITE",moduleLevel:90,moduleLevelMin:0,moduleLevelMax:90,moduleBeta:"NONE",moduleGamma:"NONE",hp:1410475,bonus:1.1},n}return Object(I.a)(a,[{key:"checkShieldLevel",value:function(e){var t=this.state,a=t.shieldLevelMin,n=t.shieldLevelMax;e<a?this.setState({shieldLevel:a}):e>n?this.setState({shieldLevel:n}):this.setState({shieldLevel:e})}},{key:"checkModuleLevel",value:function(e){var t=this.state,a=t.moduleLevelMin,n=t.moduleLevelMax;e<a?this.setState({moduleLevel:a}):e>n?this.setState({moduleLevel:n}):this.setState({moduleLevel:e})}},{key:"handleChange",value:function(e){console.debug(e.target);var t=e.target,a=t.name,n=t.value,c=new Map([["shieldLevel",function(e,t){return t.checkShieldLevel(e)}],["moduleLevel",function(e,t){return t.checkModuleLevel(e)}]]).get(a);console.debug(c),c?c(n,this):this.setState(Object(o.a)({},a,n))}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.shieldAlpha,c=a.shieldBeta,i=a.shieldGamma,l=a.shieldLevel,r=a.shieldReality,s=a.moduleBeta,o=a.moduleGamma,d=a.moduleLevel,u=a.hp,h=a.bonus,j=ie(n,c,i,l||0,r),b=le(s,o,d||0),m=re(u||0,j.maxHpDecrease,h||1,b.maxHpIncrease);return Object(H.jsxs)("div",{children:[Object(H.jsxs)("form",{className:t.root,noValidate:!0,autoComplete:"off",children:[Object(H.jsx)(q.a,{label:"\u62a4\u76fe\u7b49\u7ea7",name:"shieldLevel",placeholder:"\u62a4\u76fe\u7b49\u7ea7",required:!0,type:"number",value:this.state.shieldLevel,onChange:function(t){return e.handleChange(t)}}),Object(H.jsx)(q.a,{label:"\u03b1",name:"shieldAlpha",placeholder:"\u03b1",required:!0,value:this.state.shieldAlpha,onChange:function(t){return e.handleChange(t)},select:!0,children:Object(E.a)(Q).map((function(e){return Object(H.jsx)(R.a,{value:e[0],children:e[1].name},e[0])}))}),Object(H.jsx)(q.a,{label:"\u03b2",name:"shieldBeta",placeholder:"\u03b2",required:!0,value:this.state.shieldBeta,onChange:function(t){return e.handleChange(t)},select:!0,children:Object(E.a)(Q).map((function(e){return Object(H.jsx)(R.a,{value:e[0],children:e[1].name},e[0])}))}),Object(H.jsx)(q.a,{label:"\u03b3",name:"shieldGamma",placeholder:"\u03b3",required:!0,value:this.state.shieldGamma,onChange:function(t){return e.handleChange(t)},select:!0,children:Object(E.a)(Q).map((function(e){return Object(H.jsx)(R.a,{value:e[0],children:e[1].name},e[0])}))}),Object(H.jsx)(q.a,{label:"\u7a00\u6709\u5ea6",name:"shieldReality",placeholder:"\u7a00\u6709\u5ea6",required:!0,value:this.state.shieldReality,onChange:function(t){return e.handleChange(t)},select:!0,children:Object(E.a)(Z).map((function(e){return Object(H.jsx)(R.a,{value:e[0],children:e[1].name},e[0])}))})]}),Object(H.jsxs)("form",{className:t.root,noValidate:!0,autoComplete:"off",children:[Object(H.jsx)(q.a,{label:"\u6a21\u7ec4\u7b49\u7ea7",name:"moduleLevel",placeholder:"\u6a21\u7ec4\u7b49\u7ea7",required:!0,type:"number",value:this.state.moduleLevel,onChange:function(t){return e.handleChange(t)}}),Object(H.jsx)(q.a,{label:"\u03b2",name:"moduleBeta",placeholder:"\u03b2",required:!0,value:this.state.moduleBeta,onChange:function(t){return e.handleChange(t)},select:!0,children:Object(E.a)(X.beta).map((function(e){return Object(H.jsx)(R.a,{value:e[0],children:e[1].name},e[0])}))}),Object(H.jsx)(q.a,{label:"\u03b3",name:"moduleGamma",placeholder:"\u03b3",required:!0,value:this.state.moduleGamma,onChange:function(t){return e.handleChange(t)},select:!0,children:Object(E.a)(X.gamma).map((function(e){return Object(H.jsx)(R.a,{value:e[0],children:e[1].name},e[0])}))})]}),Object(H.jsxs)("form",{className:t.root,noValidate:!0,autoComplete:"off",children:[Object(H.jsx)(q.a,{label:"\u6700\u5927\u751f\u547d\u503c",name:"hp",placeholder:"\u6700\u5927\u751f\u547d\u503c",required:!0,type:"number",value:this.state.hp,onChange:function(t){return e.handleChange(t)}}),Object(H.jsx)(q.a,{label:"\u6280\u80fd\u52a0\u6210",name:"bonus",placeholder:"\u6280\u80fd\u52a0\u6210",required:!0,type:"number",value:this.state.bonus,onChange:function(t){return e.handleChange(t)}})]}),Object(H.jsxs)("ul",{className:t.text,children:[Object(H.jsxs)("li",{children:["\u62a4\u76fe\u5bb9\u91cf: ".concat(j.capacity)," "]}),Object(H.jsxs)("li",{children:["\u5145\u80fd\u901f\u7387: ".concat(j.speed)," "]}),Object(H.jsxs)("li",{children:["\u5145\u80fd\u5ef6\u8fdf: ".concat(j.delay)," "]}),Object(H.jsxs)("li",{children:["\u6263\u6700\u5927\u751f\u547d\u503c: ".concat(j.maxHpDecrease)," "]})]}),Object(H.jsxs)("ul",{className:t.text,children:[Object(H.jsxs)("li",{children:["\u62a4\u76fe\u5bb9\u91cf: ".concat(b.maxHpIncrease)," "]}),Object(H.jsxs)("li",{children:["\u5145\u80fd\u901f\u7387: ".concat(b.recovery)," "]})]}),Object(H.jsx)("ul",{className:t.text,children:Object(H.jsxs)("li",{children:["\u6700\u7ec8\u8840\u91cf: ".concat(m)," "]})})]})}}]),a}(c.a.Component),de=Object(T.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}},text:{margin:e.spacing(1)}}}))(oe),ue=a(219),he=a(216),je=a(217),be=a(227),me=a(220),pe=a(225),Oe=a(221),xe=a(228),ge=["???","Nitrogen","Deuterium","Helium"],ve=["???","H","2xH","3xH"],fe=["???",">=5783","<=5812"],ye=[1,2,3,4,5,6,7,8,9,10,11,12],Ce=new Map([[0,[]],[1,[2,3,5,6,7,9,10,12]],[2,[1,3,4,6,7,8,10,11]],[3,[1,2,4,5,8,9,11,12]]]),we=new Map([[0,[]],[1,[3,4,5,6,7,8,9,10,11,12]],[2,[1,2,7,8,9,10,11,12]],[3,[1,2,3,4,5,6]]]),_e=new Map([[0,[]],[1,[1,5,7,8,9]],[2,[2,6,11,12]]]),Ne=[3,4,10];var Be=function(e){Object(G.a)(a,e);var t=Object(W.a)(a);function a(e){var n;return Object(D.a)(this,a),(n=t.call(this,e)).state={gas:"???",tubeCount:"???",pressure:"???"},n}return Object(I.a)(a,[{key:"handleChange",value:function(e){console.debug(e.target);var t=e.target,a=t.name,n=t.value;console.debug("".concat(a," => ").concat(n)),this.setState(Object(o.a)({},a,n))}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=function(e,t,a){var n=Ce.get(ge.indexOf(e)),c=we.get(ve.indexOf(t)),i=_e.get(fe.indexOf(a)),l=Array.from(new Set(n.concat(c).concat(i)));return ye.filter((function(e){return!l.includes(e)})).filter((function(e){return!Ne.includes(e)}))}(a.gas,a.tubeCount,a.pressure);return Object(H.jsx)("div",{children:Object(H.jsxs)(ue.a,{container:!0,spacing:3,children:[Object(H.jsx)(ue.a,{item:!0,xs:6,sm:3,children:Object(H.jsxs)(he.a,{component:"fieldset",children:[Object(H.jsx)(je.a,{component:"legend",children:"gas"}),Object(H.jsxs)(be.a,{"aria-label":"gas",name:"gas",value:this.state.gas,onChange:function(t){return e.handleChange(t)},children:[Object(H.jsx)(me.a,{value:"???",control:Object(H.jsx)(pe.a,{}),label:"? ? ?"}),Object(H.jsx)(me.a,{value:"Nitrogen",control:Object(H.jsx)(pe.a,{}),label:"Nitrogen"}),Object(H.jsx)(me.a,{value:"Deuterium",control:Object(H.jsx)(pe.a,{}),label:"Deuterium"}),Object(H.jsx)(me.a,{value:"Helium",control:Object(H.jsx)(pe.a,{}),label:"Helium"})]})]})}),Object(H.jsx)(ue.a,{item:!0,xs:6,sm:3,children:Object(H.jsxs)(he.a,{component:"fieldset",children:[Object(H.jsx)(je.a,{component:"legend",children:"tube count"}),Object(H.jsxs)(be.a,{"aria-label":"tubeCount",name:"tubeCount",value:this.state.tubeCount,onChange:function(t){return e.handleChange(t)},children:[Object(H.jsx)(me.a,{value:"???",control:Object(H.jsx)(pe.a,{}),label:"? ? ?"}),Object(H.jsx)(me.a,{value:"H",control:Object(H.jsx)(pe.a,{}),label:"H"}),Object(H.jsx)(me.a,{value:"2xH",control:Object(H.jsx)(pe.a,{}),label:"2 \xd7 H"}),Object(H.jsx)(me.a,{value:"3xH",control:Object(H.jsx)(pe.a,{}),label:"3 \xd7 H"})]})]})}),Object(H.jsx)(ue.a,{item:!0,xs:6,sm:3,children:Object(H.jsxs)(he.a,{component:"fieldset",children:[Object(H.jsx)(je.a,{component:"legend",children:"pressure"}),Object(H.jsxs)(be.a,{"aria-label":"pressure",name:"pressure",value:this.state.pressure,onChange:function(t){return e.handleChange(t)},children:[Object(H.jsx)(me.a,{value:"???",control:Object(H.jsx)(pe.a,{}),label:"? ? ?"}),Object(H.jsx)(me.a,{value:">=5783",control:Object(H.jsx)(pe.a,{}),label:"\u2265 5783"}),Object(H.jsx)(me.a,{value:"<=5812",control:Object(H.jsx)(pe.a,{}),label:"\u2264 5812"})]})]})}),Object(H.jsx)(ue.a,{item:!0,xs:12,children:Object(H.jsx)(Oe.a,{})}),Object(H.jsx)(ue.a,{item:!0,xs:12,children:Object(H.jsx)("div",{className:t.root,children:n.map((function(e){return Object(H.jsx)(xe.a,{size:"small",label:e,clickable:!0,color:"primary"})}))})})]})})}}]),a}(c.a.Component),Ae=Object(T.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}},text:{margin:e.spacing(1)}}}))(Be);function Le(){return Object(H.jsx)(s.c,{children:Object(H.jsx)(s.a,{path:"/",children:Object(H.jsx)(k,{children:Object(H.jsxs)(s.c,{children:[Object(H.jsx)(s.a,{path:"/borderlands2/calculator",children:Object(H.jsx)(de,{})}),Object(H.jsx)(s.a,{path:"/payday2/bigoil",children:Object(H.jsx)(Ae,{})})]})})})})}l.a.render(Object(H.jsx)(r.a,{children:Object(H.jsx)(Le,{})}),document.getElementById("root"))}},[[170,1,2]]]);
//# sourceMappingURL=main.debf0503.chunk.js.map