(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(e,a,t){"use strict";t(28);var n=t(140),r=t.n(n),o=(t(444),t(4)),i=t.n(o),l=t(0),s=t.n(l),c=function(e){var a=e.Tag,t=e.children,n=e.className,o=e.flex,i=e.dirColumn,l=e.spaceAround,c=e.spaceBetween,u=e.centered,d=e.autoMargin,m=e.autoBottomMargin,p=e.horizontalHalf,g=e.flexStart,h=e.noWrap,f=e.centeredInDesktop,v=e.relative,b=r()(e,["Tag","children","className","flex","dirColumn","spaceAround","spaceBetween","centered","autoMargin","autoBottomMargin","horizontalHalf","flexStart","noWrap","centeredInDesktop","relative"]),y=[];return o&&y.push("element--flex"),d&&y.push("element--auto-margin"),m&&y.push("element--auto-bottom-margin"),i&&y.push("element--column"),l&&y.push("element--space-around"),c&&y.push("element--space-between"),u&&y.push("element--centered"),p&&y.push("element--horizontal-half"),g&&y.push("element--flex-start"),h&&y.push("element--no-wrap"),f&&y.push("element--centered-in-desktop"),v&&y.push("element--relative"),s.a.createElement(a,Object.assign({className:n+" "+y.join(" ")},b),t)};c.defaultProps={className:"",Tag:"div"},c.propTypes={Tag:i.a.string,children:i.a.node,className:i.a.string,flex:i.a.bool,spaceAround:i.a.bool,spaceBetween:i.a.bool,dirColumn:i.a.bool,centered:i.a.bool,horizontalHalf:i.a.bool,autoMargin:i.a.bool,autoBottomMargin:i.a.bool,flexStart:i.a.bool,noWrap:i.a.bool,centeredInDesktop:i.a.bool,relative:i.a.bool},a.a=c},139:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return g}),t.d(a,"StaticQueryContext",function(){return m}),t.d(a,"StaticQuery",function(){return p});var n=t(0),r=t.n(n),o=t(4),i=t.n(o),l=t(157),s=t.n(l);t.d(a,"Link",function(){return s.a}),t.d(a,"withPrefix",function(){return l.withPrefix}),t.d(a,"navigate",function(){return l.navigate}),t.d(a,"push",function(){return l.push}),t.d(a,"replace",function(){return l.replace}),t.d(a,"navigateTo",function(){return l.navigateTo});var c=t(278),u=t.n(c);t.d(a,"PageRenderer",function(){return u.a});var d=t(43);t.d(a,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},148:function(e,a,t){"use strict";t.d(a,"a",function(){return c});t(28),t(226);var n=t(140),r=t.n(n),o=(t(445),t(4)),i=t.n(o),l=t(0),s=t.n(l),c=function(e){var a=e.src,t=e.alt,n=(e.hover,e.className),o=e.overlay,i=e.contain,l=e.circle,c=e.extraSmall,u=e.small,d=e.medium,m=e.large,p=e.fullWidth,g=e.actualSize,h=e.squareBig,f=r()(e,["src","alt","hover","className","overlay","contain","circle","extraSmall","small","medium","large","fullWidth","actualSize","squareBig"]),v=[];return i&&v.push("image--contain"),p&&v.push("image--full-width"),l&&v.push("image--circle"),c&&v.push("image--extra-small"),u&&v.push("image--small"),d&&v.push("image--medium"),m&&v.push("image--large"),h&&v.push("image--square-big"),g&&v.push("image--acctual-size"),s.a.createElement("div",Object.assign({className:"image "+n+" "+v.join(" ")},f),s.a.createElement("div",{className:"image__container"},s.a.createElement("img",{style:{backgroundColor:o,backgroundOpacity:"0.5"},className:"image__content",src:a,alt:t})))};c.defaultProps={src:"",alt:"",overlay:"",className:""},c.propTypes={overlay:i.a.string,src:i.a.oneOfType([i.a.string,i.a.object]),alt:i.a.oneOfType([i.a.string,i.a.array]),hover:i.a.string,className:i.a.string,contain:i.a.bool,circle:i.a.bool,extraSmall:i.a.bool,small:i.a.bool,medium:i.a.bool,large:i.a.bool,squareBig:i.a.bool,fullWidth:i.a.bool,actualSize:i.a.bool}},149:function(e,a,t){e.exports=t.p+"static/hgin_yliopisto-30c68104749d830b6cef6ea8c6339b16.png"},150:function(e,a,t){e.exports=t.p+"static/houston_logo-356bd2a9a75b44bdf7897b2cdd387600.png"},158:function(e,a,t){"use strict";var n=t(455),r=t(139),o=t(4),i=t.n(o),l=t(0),s=t.n(l),c=t(456),u=t.n(c);function d(e){var a=e.description,t=e.lang,o=e.meta,i=e.keywords,l=e.title;return s.a.createElement(r.StaticQuery,{query:m,render:function(e){var n=a||e.site.siteMetadata.description;return s.a.createElement(u.a,{htmlAttributes:{lang:t},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(o)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},a.a=d;var m="1025518380"},161:function(e,a,t){"use strict";t(447),t(448);var n=t(4),r=t.n(n),o=t(0),i=t.n(o),l=(t(449),t(168)),s=function(){return i.a.createElement("div",{className:"deprecate"},i.a.createElement("div",null,i.a.createElement("p",null,"Tämä on 3. periodilla pidetyn, jo päättyneen kurssin sisältö."),i.a.createElement("p",null,i.a.createElement("strong",null,"Jos haluat suorittaa kurssin nyt"),", mene osoitteeseen"," ",i.a.createElement("a",{href:"https://fullstackopen-2019.github.io/"},"https://fullstackopen-2019.github.io/"))))},c=t(6),u=t.n(c),d=(t(451),t(139)),m=t(162),p=function(e){function a(a){var t;return(t=e.call(this,a)||this).header=i.a.createRef(),t.handleScroll=function(){var e=window.scrollY;t.setState({top:e,headerClass:t.state.top>0&&e>t.state.top?"header-small":""})},t.state={top:0,headerClass:""},t}u()(a,e);var t=a.prototype;return t.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},t.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},t.render=function(){var e=this.state.headerClass;return i.a.createElement("div",{ref:this.header,className:"header "+e,style:""===e?{backgroundColor:"white"}:{}},i.a.createElement("div",{className:"container",style:{alignItems:"center",justifyContent:"flex-start"}},i.a.createElement(d.Link,{to:"/",className:"header__logo"},""===e?i.a.createElement(l.a,{className:"nav-item-hover",childrenClassName:"triple-border__logo"},"{() => fs}"):i.a.createElement(l.a,{hover:!0,className:"nav-item-hover",childrenClassName:"triple-border__logo"},"fs")),"header-small"!==e&&i.a.createElement(m.a,null)))},a}(o.Component),g=function(e){var a=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,null),i.a.createElement(s,null),a)};g.propTypes={children:r.a.node.isRequired};a.a=g},162:function(e,a,t){"use strict";t(28);var n=t(6),r=t.n(n),o=(t(446),t(4)),i=t.n(o),l=t(0),s=t.n(l),c=t(140),u=t.n(c),d=t(139),m=function(e){var a=e.text,t=e.path,n=e.className,r=u()(e,["text","path","className"]);return s.a.createElement("li",Object.assign({},r,{className:"navigation__item "+n}),s.a.createElement(d.Link,{className:"nav-item-hover",to:t},a))};m.propTypes={text:i.a.string.isRequired,path:i.a.string.isRequired,className:i.a.string},m.defaultProps={className:""},t.d(a,"b",function(){return p});var p=[{text:"KURSSISTA",path:"/about"},{text:"KURSSIN SISÄLTÖ",path:"#course-contents"},{text:"FAQ",path:"/faq"}],g=function(){return document.body.classList.remove("is-open--navigation")},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={navigationOpen:!1},t}return r()(a,e),a.prototype.render=function(){var e=this,a=this.props.className;return s.a.createElement("div",{className:"navigation__wrapper "+a},s.a.createElement("button",{"aria-label":"Navigation menu","aria-expanded":this.state.navigationOpen,onClick:function(){e.setState({navigationOpen:!e.state.navigationOpen}),document.body.classList.toggle("is-open--navigation")},className:"navigation__toggle"},s.a.createElement("div",{className:"navigation__toggle-icon"})),s.a.createElement("nav",null,s.a.createElement("ul",{className:"navigation"},p.map(function(e){return s.a.createElement(m,Object.assign({key:e.path},e,{onClick:g}))}))))},a}(l.Component);h.propTypes={className:i.a.string},h.defaultProps={className:""};a.a=h},168:function(e,a,t){"use strict";t.d(a,"a",function(){return l});t(28),t(450);var n=t(4),r=t.n(n),o=t(0),i=t.n(o),l=function(e){var a=e.children,t=e.largeMargin,n=e.className,r=e.childrenClassName,o=e.backgroundColor,l=e.props,s=e.hover;return i.a.createElement("div",Object.assign({className:"triple-border "+n+" "+(t?"triple-border--large-margin":""),style:s?{backgroundColor:"black",color:"white",padding:t?"":"0.2em"}:{padding:t?"":"0.2em"}},l),i.a.createElement("div",{className:"triple-border__container "+r,style:{backgroundColor:o}},a))};l.defaultProps={className:"",childrenClassName:"",largeMargin:!1,hover:!1,backgroundColor:"transparent"},l.propTypes={children:r.a.node.isRequired,className:r.a.string,childrenClassName:r.a.string,largeMargin:r.a.bool,backgroundColor:r.a.string,hover:r.a.bool}},278:function(e,a,t){var n;e.exports=(n=t(443))&&n.default||n},443:function(e,a,t){"use strict";t.r(a);t(28);var n=t(0),r=t.n(n),o=t(4),i=t.n(o),l=t(61),s=t(2),c=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=c},444:function(e,a,t){},445:function(e,a,t){},446:function(e,a,t){},447:function(e,a,t){},448:function(e,a,t){},449:function(e,a,t){},450:function(e,a,t){},451:function(e,a,t){},455:function(e){e.exports={data:{site:{siteMetadata:{title:"Fullstack 2019",description:"",author:"Houston Inc. Consulting oy"}}}}}}]);
//# sourceMappingURL=0-53bbd18c250b468da060.js.map