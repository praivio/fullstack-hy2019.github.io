(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{137:function(e,t,a){"use strict";a.r(t);a(195),a(69),a(277);var n=a(6),r=a.n(n),l=(a(458),a(228)),o=a.n(l),i=a(166),c=a.n(i),s=a(159),m=a.n(s),u=a(169),d=a.n(u),p=a(0),g=a.n(p),h=a(146),f=a(162),b=a(164),E=(a(459),a(4)),k=a.n(E),v=a(139),N=function(e){var t=e.part,a=e.letter;return g.a.createElement(v.a,{flex:!0,className:"container spacing",centered:!0},g.a.createElement("a",{className:"edit-link",target:"__BLANK",href:"https://github.com/fullstack-hy2019/fullstack-hy2019.github.io/edit/source/src/content/osa"+t+"/osa"+t+a+".md"},"Ehdota muutosta materiaalin sisältöön"))};N.propTypes={part:k.a.number.isRequired,letter:k.a.string.isRequired};var y=N,A=a(144),x=a(157),w=a(225),C=(a(150),a(194),a(460),a(138)),T=a(461),S=a.n(T),I=a(149),M=a.n(I),B=a(174),R=function(e){function t(t){var a;return(a=e.call(this,t)||this).componentDidMount=function(){var e=Array.from(document.querySelectorAll("h3")),t=document.querySelector("h1"),n=e.map(function(e){return e.id=S()(e.innerText),e.classList.add("offset"),{text:e.innerText,id:e.id,level:e.nodeName}});a.setState({headings:n,h1Top:t.offsetTop})},a.loopThroughPartsNode=function(e){var t=a.state.headings,n=a.props,r=n.part,l=n.letter,o=n.currentPath,i=n.currentPartTitle,c=n.colorCode,s=[];for(var m in e)i!==e[m]?s.push(g.a.createElement(C.Link,{key:m,className:"left-navigation-link",style:{borderColor:c},to:"/osa"+r+"/"+d()(e[m])},m+" "+e[m])):s.push(g.a.createElement(B.a,{containerClassName:"accordion--side-navigation",style:{color:c},titleStyle:{backgroundColor:c,borderColor:c},initiallyOpened:!0,key:m,title:l+" "+e[m],list:t.map(function(e){return{href:o+"#"+e.id,text:e.text}})}));return s},a.state={h1Top:0,headings:[]},a}return r()(t,e),t.prototype.render=function(){var e=this.props.part;return g.a.createElement(v.a,{tag:"ul",flex:!0,dirColumn:!0,className:"scroll-navigation "+this.props.className},this.loopThroughPartsNode(M.a[e]))},t}(p.Component);R.defaultProps={className:""},R.propTypes={className:k.a.string,colorCode:k.a.string.isRequired};var P=R,D=a(156),L=a(176),j=a(463),Z=a.n(j),F=a(227);a.d(t,"default",function(){return J}),a.d(t,"contentPageQuery",function(){return O});var J=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleScroll=function(){a.setState({top:window.scrollY})},a.state={h1Top:0,h1Title:"",top:0},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=Array.from(document.querySelectorAll("a")),t=document.querySelector("h1"),a=this.props.data.markdownRemark.frontmatter;e.map(function(e){e.style="border-color: "+h[F.a[a.part]],e.target="_blank"}),this.setState({h1Top:t.offsetTop,h1Title:t.innerText}),window.addEventListener("scroll",this.handleScroll)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},a.render=function(){var e=this.props.data.markdownRemark,t=e.frontmatter,a=e.html,n=t.mainImage,r=t.letter,l=t.part,i=h[F.a[l]],s={replace:function(e){var t=e.type,a=e.name,n=e.attribs,r=e.children;return"tag"===t&&"picture"===a?g.a.createElement("picture",null,g.a.createElement("img",{style:{borderColor:i},alt:"fullstack content",src:r[0].attribs.src})):"tag"===t&&"pre"===a?g.a.createElement("pre",null,m()(r,s)):"tag"===t&&"content"===n.class?g.a.createElement("div",{className:"container"},g.a.createElement("div",{className:"course-content col-6 push-right-3"},m()(r,s))):"tag"===t&&"tasks"===n.class?g.a.createElement(b.a,{style:{backgroundColor:i},className:"spacing spacing--after tasks"},g.a.createElement("div",{className:"container"},g.a.createElement("div",{className:"course-content col-6 push-right-3",style:{borderColor:i}},"pre"===r.name?g.a.createElement("pre",null,m()(r,s)):m()(r,s)))):void 0}};return g.a.createElement(x.a,null,g.a.createElement(D.a,{title:"Fullstack osa"+l+" | "+this.state.h1Title,keywords:["Fullstack",this.state.h1Title]}),this.state.top>300&&g.a.createElement("div",{className:"arrow-go-up",onClick:function(){return window.scrollTo({top:0,left:0,behavior:"smooth"})}},g.a.createElement("img",{src:Z.a,alt:"arrow-up"})),g.a.createElement("div",{className:"course-container spacing--after"},g.a.createElement(b.a,{backgroundColor:i,style:{backgroundImage:"url("+o.a.resolve(n.publicURL)+")",backgroundPosition:"center center",backgroundSize:"50%",backgroundRepeat:"no-repeat",backgroundColor:i}},g.a.createElement("div",{className:"container spacing--after"},g.a.createElement(f.a,{className:"breadcrumb",content:[{backgroundColor:i,text:"Fullstack",link:"/#course-contents"},{backgroundColor:i,text:"osa "+l,link:"/osa"+l},{backgroundColor:h.black,text:M.a[l][r]}]}))),g.a.createElement(v.a,{className:"course"},g.a.createElement(v.a,{flex:!0,className:"container",relative:!0},g.a.createElement(P,{part:l,letter:r,currentPartTitle:M.a[l][r],currentPath:"/osa"+l+"/"+d()(M.a[l][r]),colorCode:i,className:"col-2 spacing",style:{top:this.state.h1Top}}),g.a.createElement(v.a,{className:"course-content col-6 push-right-3",autoBottomMargin:!0},g.a.createElement("p",{className:"col-1 letter",style:{borderColor:i}},r),g.a.createElement(L.a,{headingLevel:"h1",text:M.a[l][r]}))),c()(a,s)),!1,g.a.createElement(y,{part:l,letter:r}),g.a.createElement(w.a,{part:l,letter:r})),g.a.createElement(A.a,null))},t}(p.Component),O="1293465836"},144:function(e,t,a){"use strict";a(145);var n=a(138),r=a(0),l=a.n(r),o=a(154),i=a.n(o),c=a(155),s=a.n(c),m=a(139),u=a(148),d=a(158),p=[{src:i.a,alt:"Helsingin yliopiston logo",href:"https://www.helsinki.fi/"},{src:s.a,alt:"Houston inc. logo",href:"https://www.houston-inc.com/"}];t.a=function(){return l.a.createElement(m.a,{id:"footer",className:"container spacing--after-small spacing--mobile",flex:!0},l.a.createElement(m.a,{className:"col-5 col-10--mobile order-2--mobile footer__links",flex:!0,spaceBetween:!0},p.map(function(e){return l.a.createElement("a",{key:e.alt,href:e.href,className:"col-5 col-4--mobile spacing--mobile"},l.a.createElement(u.a,{contain:!0,src:e.src,alt:e.alt,className:"col-6"}))})),l.a.createElement(m.a,{flex:!0,className:"col-5 col-5--mobile order-1--mobile footer__navigation"},d.b.map(function(e){return l.a.createElement(n.Link,{key:e.path,to:e.path,className:"footer__navigation-link nav-item-hover col-10--mobile",style:{marginLeft:"4.5rem"}},e.text)})))}},145:function(e,t,a){},146:function(e){e.exports={white:"#ffffff",black:"#33332d",main:"#e1e1e1",violet:"#B795F3",turquoise:"#82F7EB",green:"#AEFFDA","dark-orange":"#EB8755","light-orange":"#EEAC5D",yellow:"#F7F382",pink:"#E693CB",blue:"#706BE4","light-blue":"#82D2F7","light-violet":"#B2BBF0"}},149:function(e,t){e.exports={0:{a:"Yleistä",b:"Web-sovelluksen toimintaperiaatteita"},1:{a:"Reactin alkeet",b:"Javascriptiä",c:"Komponentin tila ja tapahtumankäsittely",d:"Monimutkaisempi tila, Reactin debuggaus"},2:{a:"Kokoelmien renderöinti ja moduulit",b:"Lomakkeiden käsittely",c:"Palvelimella olevan datan hakeminen",d:"Palvelimella olevan datan muokkaaminen",e:"Tyylien lisääminen React-sovellukseen"},3:{a:"Node.js ja Express",b:"Sovellus internetiin",c:"Tietojen tallettaminen MongoDB-tietokantaan",d:"Validointi ja ESLint"},4:{a:"Sovelluksen rakenne ja testauksen alkeet"},5:{},6:{},7:{}}},150:function(e,t,a){"use strict";a.d(t,"a",function(){return f});a(28),a(163);var n=a(140),r=a.n(n),l=(a(172),a(166)),o=a.n(l),i=a(159),c=a.n(i),s=a(4),m=a.n(s),u=a(0),d=a.n(u),p=a(173),g=a.n(p),h=a(139),f=function(e){var t=e.text,a=e.className,n=e.heading,l=e.headingFontSize,i=e.bold,s=e.centered,m=e.noPadding,u=e.headingFont,p=r()(e,["text","className","heading","headingFontSize","bold","centered","noPadding","headingFont"]),f=[];s&&f.push("centered"),i&&f.push("bold"),m&&f.push("body-text--no-padding"),u&&f.push("heading-font");var b={replace:function(e){var t=e.type,a=e.attribs,n=e.children;if("tag"===t&&"github-logo"===a.class)return d.a.createElement(h.a,{flex:!0,autoBottomMargin:!0,className:"github-logo__container"},d.a.createElement("img",{style:{maxWidth:"1rem",maxHeight:"1rem",margin:"auto 0"},alt:"github-logo",src:g.a}),d.a.createElement("p",{style:{marginLeft:"0.611rem"}},c()(n,b)))}};return d.a.createElement("div",Object.assign({className:"body-text "+a},p),n.title&&function(){if(n){var e=n.level;return d.a.createElement(e,{className:"body-text__title",style:l?{fontSize:l}:{}},n.title)}return null}(),t&&"string"==typeof t?d.a.createElement("p",{className:"body-text__content "+f.join(" ")},t):t&&t.map(function(e){return d.a.createElement("div",{key:e,className:"body-text__content "+f.join(" ")},o()(e,b))}))};f.defaultProps={heading:{title:"",level:"h2"},text:"",className:"",centered:!1,bold:!1,noPadding:!1},f.propTypes={heading:m.a.shape({text:m.a.string,level:m.a.string}),headingFontSize:m.a.string,text:m.a.oneOfType([m.a.string,m.a.array]),className:m.a.string,centered:m.a.bool,bold:m.a.bool,noPadding:m.a.bool}},162:function(e,t,a){"use strict";a(28),a(163),a(193);var n=a(140),r=a.n(n),l=(a(170),a(138)),o=a(4),i=a.n(o),c=a(0),s=a.n(c),m=a(146),u=a(139),d=function(e){var t,a=e.className,n=e.link,o=e.content,i=e.stack,c=e.bold,d=e.thickBorder,p=e.upperCase,g=r()(e,["className","link","content","stack","bold","thickBorder","upperCase"]),h=s.a.createElement("div",{className:"arrow__container arrows--horizontal "+a},o.map(function(e,t){var a={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===m.black?"white":m.black};return s.a.createElement("div",Object.assign({key:"arrow"+t,className:"arrow__wrapper"},g),s.a.createElement("div",{className:"arrow__rectangle "+(c?"bold":"")+" "+(d?"arrow__rectangle--thick-border":""),style:a},e.link?s.a.createElement(l.Link,{to:e.link},p?e.text.toUpperCase():e.text):p?e.text.toUpperCase():e.text),s.a.createElement("div",{className:"arrow__point "+(d?"arrow__point--thick-border":""),style:a}))}));return i||n?!i&&n?t=s.a.createElement("div",{className:"spacing--after-small auto-bottom-margin"},s.a.createElement(l.Link,{to:n,style:{display:"inline-block"}},h)):i&&(t=s.a.createElement("div",{className:"col-10 spacing--after"},s.a.createElement("div",{className:"arrow__container arrow__container--with-link",style:{display:"flex",flexDirection:"column"}},o.map(function(e){var t={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===m.black?"white":m.black};return s.a.createElement(l.Link,Object.assign({key:e.text,to:e.path,className:"arrow__wrapper--stacked "+a},g),s.a.createElement(u.a,{flex:!0,className:"arrow__rectangle",style:t},s.a.createElement("p",{className:"arrow--stacked-letter"},e.letter),s.a.createElement("p",{className:"arrow--stacked-title"},e.text)),s.a.createElement("div",{className:"arrow__point",style:t}))})))):t=s.a.createElement("div",{className:"col-10 spacing--after"},h),t};d.propTypes={className:i.a.string,link:i.a.string,content:i.a.array.isRequired,stack:i.a.bool,upperCase:i.a.bool,bold:i.a.bool,thickBorder:i.a.bool},d.defaultProps={className:""},t.a=d},164:function(e,t,a){"use strict";a.d(t,"a",function(){return s});a(28);var n=a(140),r=a.n(n),l=(a(171),a(4)),o=a.n(l),i=a(0),c=a.n(i),s=function(e){var t=e.className,a=e.backgroundColor,n=r()(e,["className","backgroundColor"]),l=a?{backgroundColor:a}:null;return c.a.createElement("div",Object.assign({className:"banner "+t,style:l},n))};s.defaultProps={className:""},s.propTypes={className:o.a.string}},170:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},173:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="},174:function(e,t,a){"use strict";var n=a(6),r=a.n(n),l=(a(175),a(138)),o=a(4),i=a.n(o),c=a(0),s=a.n(c),m=a(150),u=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpened:!1},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.props.initiallyOpened&&this.setState({isOpened:!0})},a.render=function(){var e=this,t=this.props,a=t.title,n=t.content,r=t.className,o=t.containerClassName,i=t.list,c=t.titleStyle,u=this.state.isOpened;return s.a.createElement("div",{className:"accordion__container col-8 push-right-1 "+o},s.a.createElement("button",{className:"accordion accordion__title "+(u?"active":"")+" "+r,style:c,onClick:function(){return e.setState({isOpened:!u})}},a),s.a.createElement("div",{className:"panel",style:{padding:u?"2rem 18px":"",maxHeight:""+(u?"unset":0),transition:"max-height 0.2s ease-out"}},n&&s.a.createElement(m.a,{className:"col-8 push-right-1",text:n}),i&&s.a.createElement("ul",null,i.map(function(e){return s.a.createElement("li",{key:e.text},s.a.createElement(l.Link,{to:e.href},e.text))}))))},t}(c.Component);u.propTypes={title:i.a.string.isRequired,content:i.a.oneOfType([i.a.string,i.a.array]),list:i.a.array,className:i.a.string,containerClassName:i.a.string,initiallyOpened:i.a.bool,titleStyle:i.a.object},u.defaultProps={className:"",containerClassName:"",initiallyOpened:!1,titleStyle:{}},t.a=u},175:function(e,t,a){},176:function(e,t,a){"use strict";a.d(t,"a",function(){return s});a(28);var n=a(140),r=a.n(n),l=(a(177),a(4)),o=a.n(l),i=a(0),c=a.n(i),s=function(e){var t=e.className,a=e.headingLevel,n=void 0===a?"h2":a,l=e.headingFontSize,o=e.text,i=r()(e,["className","headingLevel","headingFontSize","text"]),s=n;return c.a.createElement(s,Object.assign({className:"sub-header "+t,style:l?{fontSize:l}:{}},i),o)};s.propTypes={className:o.a.string,headingLevel:o.a.string,text:o.a.string.isRequired,headingFontSize:o.a.string},s.defaultProps={className:""}},177:function(e,t,a){},195:function(e,t,a){var n=a(22).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||a(14)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},225:function(e,t,a){"use strict";a(272),a(274),a(275),a(67),a(46),a(165),a(226);var n=a(138),r=a(169),l=a.n(r),o=a(4),i=a(0),c=a.n(i),s=a(149),m=a.n(s),u=a(139),d=Object.keys(m.a),p=function(e){return String.fromCharCode(e.charCodeAt(0)-1)},g=function(e){return String.fromCharCode(e.charCodeAt(0)+1)},h=function(e){return d.includes(e.toString())},f=function(e,t){return g(e)in m.a[t]},b=function(e,t){return!e&&h(t+1)||e&&f(e,t)},E=function(e){var t=e.part,a=e.letter;return c.a.createElement(u.a,{className:"container spacing spacing--after-large prev-next__container"},!a&&h(t-1)?c.a.createElement(c.a.Fragment,null,c.a.createElement(n.Link,{to:"/osa"+(t-1),className:"col-4--mobile push-right-1 prev"},c.a.createElement(u.a,{flex:!0,dirColumn:!0},c.a.createElement("p",null,"Osa ",t-1),c.a.createElement("b",null,"Edellinen osa"))),b(a,t)&&c.a.createElement("div",{className:"col-1--mobile separator"})):a?"a"!==a?c.a.createElement(c.a.Fragment,null,c.a.createElement(n.Link,{to:"/osa"+t+"/"+l()(m.a[t][p(a)]),className:"col-4--mobile push-right-1 prev"},c.a.createElement(u.a,{flex:!0,dirColumn:!0},c.a.createElement("p",null,"Osa ",""+t+p(a)),c.a.createElement("b",null,"Edellinen osa"))),b(a,t)&&c.a.createElement("div",{className:"col-1--mobile separator"})):h(t-1)?c.a.createElement(c.a.Fragment,null,c.a.createElement(n.Link,{to:"/osa"+(t-1),className:"col-4--mobile push-right-1 prev"},c.a.createElement(u.a,{flex:!0,dirColumn:!0},c.a.createElement("p",null,"Osa ",t-1),c.a.createElement("b",null,"Edellinen osa"))),b(a,t)&&c.a.createElement("div",{className:"col-1--mobile separator"})):c.a.createElement(u.a,{className:"push-right-1"}):c.a.createElement(u.a,{className:"push-right-1"}),!a&&h(t+1)?c.a.createElement(n.Link,{to:"/osa"+(t+1),className:"col-4--mobile push-left-1 next"},c.a.createElement(u.a,{flex:!0,dirColumn:!0},c.a.createElement("p",null,"Osa ",t+1),c.a.createElement("b",null,"Seuraava osa"))):a?f(a,t)?c.a.createElement(n.Link,{to:"/osa"+t+"/"+l()(m.a[t][g(a)]),className:"col-4--mobile push-left-1 next"},c.a.createElement(u.a,{flex:!0,dirColumn:!0},c.a.createElement("p",null,"Osa ",""+t+g(a)),c.a.createElement("b",null,"Seuraava osa"))):c.a.createElement(n.Link,{to:"/osa"+(t+1),className:"col-4--mobile push-left-1 next"},c.a.createElement(u.a,{flex:!0,dirColumn:!0},c.a.createElement("p",null,"Osa ",t+1),c.a.createElement("b",null,"Seuraava osa"))):c.a.createElement(u.a,{className:"push-left-1"}))};E.defaultProps={part:void 0,letter:void 0},E.propTypes={part:o.PropTypes.number,letter:o.PropTypes.string},t.a=E},226:function(e,t,a){},227:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n={0:"light-violet",1:"green",2:"dark-orange",3:"light-orange",4:"yellow",5:"pink",6:"violet",7:"light-blue",8:"turquoise"}},277:function(e,t,a){"use strict";var n=a(17),r=a(21),l=a(30),o=a(72),i=a(73),c=a(32),s=a(457),m=a(74);r(r.S+r.F*!a(75)(function(e){Array.from(e)}),"Array",{from:function(e){var t,a,r,u,d=l(e),p="function"==typeof this?this:Array,g=arguments.length,h=g>1?arguments[1]:void 0,f=void 0!==h,b=0,E=m(d);if(f&&(h=n(h,g>2?arguments[2]:void 0,2)),null==E||p==Array&&i(E))for(a=new p(t=c(d.length));t>b;b++)s(a,b,f?h(d[b],b):d[b]);else for(u=E.call(d),a=new p;!(r=u.next()).done;b++)s(a,b,f?o(u,h,[r.value,b],!0):r.value);return a.length=b,a}})},457:function(e,t,a){"use strict";var n=a(22),r=a(47);e.exports=function(e,t,a){t in e?n.f(e,t,r(0,a)):e[t]=a}},458:function(e,t,a){},459:function(e,t,a){},460:function(e,t,a){},461:function(e,t,a){var n=a(198)("kebabCase",a(462),a(224));n.placeholder=a(178),e.exports=n},462:function(e,t,a){var n=a(269)(function(e,t,a){return e+(a?"-":"")+t.toLowerCase()});e.exports=n},463:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48dGl0bGU+aWNfYXJyb3dfdXB3YXJkXzQ4cHg8L3RpdGxlPg0KICAgIDxnIGNsYXNzPSJuYy1pY29uLXdyYXBwZXIiIGZpbGw9IiMxMTExMTEiPg0KICAgICAgICA8cGF0aCBkPSJNOCAyNGwyLjgzIDIuODNMMjIgMTUuNjZWNDBoNFYxNS42NmwxMS4xNyAxMS4xN0w0MCAyNCAyNCA4IDggMjR6Ii8+DQogICAgPC9nPg0KPC9zdmc+"}}]);
//# sourceMappingURL=component---src-templates-content-template-js-b9333370503a7987b2f7.js.map