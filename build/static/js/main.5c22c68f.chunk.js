(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,n,t){e.exports=t(290)},247:function(e,n){},249:function(e,n,t){},274:function(e,n,t){},290:function(e,n,t){"use strict";t.r(n);var a={};t.r(a),t.d(a,"getFoucs",function(){return O});var r={};t.r(r),t.d(r,"changeTabItem",function(){return _});var l=t(1),i=t.n(l),c=t(8),o=t.n(c),s=t(12),m=t(13),u=t(16),p=t(14),d=t(15),h=t(293),f=t(294),b=t(35),g=t(50),E=t(125),x=t(21),v=Object(x.fromJS)({focused:!1,mouseIn:!1,list:[],page:1,totalPage:1}),w=t(54),k=t.n(w),y=Object(x.fromJS)({focus:[]}),O=function(){return function(e){k.a.get("/api/index.json").then(function(n){var t=n.data.data;e(function(e){return{type:"GET_FOCUS_DATA",focus:Object(x.fromJS)(e.list)}}(t))}).catch(function(){console.info("error")})}},j=Object(x.fromJS)({tabs:[""],cur_tab:1}),_=function(e){return{type:"TAB_ITEM_CHANGE",value:e}},N=Object(E.combineReducers)({header:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SEARCH_FOCUS":return e.set("focused",!0);case"SEARCH_BLUR":return e.set("focused",!1);case"CHANGE_LIST":return e.merge({list:n.data,totalPage:n.totalPage});case"MOUSE_ENTER":return e.set("mouseIn",!0);case"MOUSE_LEAVE":return e.set("mouseIn",!1);case"CHANGE_PAGE":return e.set("page",n.page)}return e},home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_FOCUS_DATA":return e.set("focus",n.focus)}return e},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1?arguments[1]:void 0;switch(console.info(n.value),n.type){case"TAB_ITEM_CHANGE":return e.set("cur_tab",n.value)}return e}}),C=t(126),z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):g.c,S=Object(g.d)(N,z(Object(g.a)(C.a))),T=(t(102),t(69)),I=(t(104),t(43)),B=(t(176),t(94)),A=(t(179),t(129)),M=t(42),P=t(10),q=t(11),D=t(89),F=t.n(D);function L(){var e=Object(P.a)(["\n\n  margin-bottom: 6px;\n  position: relative;\n  cursor: pointer;\n\n  .pre,\n  .next {\n    cursor: pointer;\n    display: none;\n    height: 40px;\n    position: absolute;\n    top: 130px;\n    width: 28px;\n    z-index: 10;\n  }\n\n  .pre {\n    background: url(",") no-repeat 50%;\n    background-position: 0 -904px;\n    background-size: 246px 1012px;\n    left: 0;\n  }\n\n  .next {\n    background: url(",") no-repeat 50%;\n    background-position: 0 -944px;\n    background-size: 246px 1012px;\n    right: 0;\n  }\n\n  &:hover .next,\n  &:hover .pre {\n    display: block;\n  }\n\n  .ant-carousel .slick-dots {\n    bottom: 8px;\n    left: 20px;\n    text-align: left;\n  }\n\n  .ant-carousel a {\n    bottom: 0;\n    display: block;\n    height: 100px;\n    padding-left: 20px;\n    padding-top: 52px;\n    position: absolute;\n    text-align: left;\n    width: 100%;\n  }\n\n  .ant-carousel a p {\n    color: #fff;\n    font-size: 20px;\n    height: 28px;\n    letter-spacing: 0;\n    line-height: 28px;\n    text-align: justify;\n    width: 680px;\n  }\n"]);return L=function(){return e},e}var R=q.b.div(L(),F.a,F.a),J=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(u.a)(this,Object(p.a)(n).call(this,e))).next=t.next.bind(Object(M.a)(Object(M.a)(t))),t.prev=t.prev.bind(Object(M.a)(Object(M.a)(t))),t}return Object(d.a)(n,e),Object(m.a)(n,[{key:"next",value:function(){this.slider.next()}},{key:"prev",value:function(){this.slider.prev()}},{key:"render",value:function(){var e=this;return i.a.createElement(R,null,i.a.createElement(A.a,Object.assign({ref:function(n){return e.slider=n}},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,effect:"fade"},{autoplay:!0,className:"ppre"}),this.props.list.map(function(e,n){return i.a.createElement("div",{key:n},i.a.createElement("img",{src:e.get("thumb"),alt:""}),i.a.createElement("a",{href:"/"},i.a.createElement("p",null,e.get("title"))))})),i.a.createElement("div",{className:"pre",onClick:this.prev}),i.a.createElement("div",{className:"next",onClick:this.next}))}}]),n}(l.PureComponent),U=Object(b.b)(function(e){return{list:e.getIn(["home","focus"])}},null)(J),G=(t(241),t(134)),H=(t(244),t(140)),X=t(131),V=t.n(X),Q=t(132),W=t.n(Q);t(249);function Z(){var e=Object(P.a)(['\n  height: 123px;\n  position: relative;\n  padding: 10px 0;\n  border-bottom: 1px solid #e8e8e8;\n\n  .single-mode-lbox {\n    width: 158px;\n    height: 102px;\n    margin-right: 16px;\n  }\n  .single-mode-rbox:before {\n    content: "";\n    width: 0;\n    font-size: 0;\n    height: 100%;\n    visibility: hidden;\n    display: inline-block;\n    vertical-align: middle;\n  }\n  .bui-left {\n    float: left;\n  }\n\n  .img-wrap {\n    position: relative;\n    cursor: pointer;\n    width: 100%;\n    text-align: center;\n    border: 1px solid #e8e8e8;\n    background: #e8e8e8;\n    overflow: hidden;\n    transform-style: preserve-3d;\n    height: 100%;\n  }\n\n  .img-wrap,\n  .img-wrap::before {\n    display: inline-block;\n    height: 100%;\n  }\n\n  .img-wrap::before {\n    content: "";\n    width: 0;\n    font-size: 0;\n    visibility: hidden;\n    vertical-align: middle;\n  }\n\n  .img-wrap img {\n    display: inline-block;\n    max-width: 100%;\n    height: auto;\n    vertical-align: middle;\n    transition: all 0.5s ease-out 0.1s;\n  }\n\n  .img-wrap img:hover {\n    transform: scale(1.2);\n  }\n\n  .single-mode-rbox {\n    height: 100%;\n    overflow: hidden;\n  }\n\n  .single-mode-rbox-inner {\n    display: inline-block;\n    width: 100%;\n    vertical-align: middle;\n  }\n\n  .title-box {\n    display: block;\n    font-size: 20px;\n    line-height: 1.3;\n    margin-bottom: 4px;\n    font-weight: 700;\n    max-height: 52px;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  .link {\n    color: #222;\n  }\n\n  .footer-bar {\n    font-size: 12px;\n    color: #999;\n    margin-top: 10px;\n  }\n\n  .footer-bar-action.tag {\n    font-size: 12px;\n    color: #eee;\n    margin-right: 10px;\n    padding: 1px 2px;\n    border: 1px solid #eee;\n  }\n\n  .tag-style-other {\n    border-color: #87a5b5 !important;\n    color: #87a5b5 !important;\n  }\n']);return Z=function(){return e},e}var K=q.b.div(Z()),Y="/api/homeList.json",$=function(e){function n(){var e,t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(r)))).state={data:[],loading:!1,hasMore:!0},t.getData=function(e){V()({url:Y,type:"json",method:"get",contentType:"application/json",success:function(n){e(n)}})},t.handleInfiniteOnLoad=function(){var e=t.state.data;if(t.setState({loading:!0}),e.length>20)return H.a.warning("\u6ca1\u6709\u66f4\u591a\u4e86..."),void t.setState({hasMore:!1,loading:!1});t.getData(function(n){e=e.concat(n.data),t.setState({data:e,loading:!1})})},t}return Object(d.a)(n,e),Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.getData(function(n){e.setState({data:n.data})})}},{key:"render",value:function(){return i.a.createElement(W.a,{initialLoad:!1,pageStart:0,loadMore:this.handleInfiniteOnLoad,hasMore:!this.state.loading&&this.state.hasMore},i.a.createElement("ul",null,this.state.data.map(function(e,n){return i.a.createElement("li",{key:n},i.a.createElement(K,null,i.a.createElement("div",{className:"bui-left single-mode-lbox"},i.a.createElement("a",{href:"/group/6625880071661945357/",target:"_blank",className:"img-wrap"},i.a.createElement("img",{className:"lazy-load-img",src:e.image_url,lazy:"loaded",alt:""}))),i.a.createElement("div",{className:"single-mode-rbox"},i.a.createElement("div",{className:"single-mode-rbox-inner"},i.a.createElement("div",{ga_event:"article_title_click",className:"title-box"},i.a.createElement("a",{href:"/group/6625880071661945357/",target:"_blank",className:"link"},e.title)),i.a.createElement("div",{className:"bui-box footer-bar"},i.a.createElement("div",{className:"bui-left footer-bar-left"},i.a.createElement("a",{href:"search/?keyword=%E6%97%B6%E6%94%BF",target:"_blank",className:"footer-bar-action tag tag-style-other"},"\u65f6\u653f"),i.a.createElement("a",{href:"/",target:"_blank",className:"footer-bar-action source"},"\u4eba\u6c11\u7f51\u22c5"),i.a.createElement("span",{className:"footer-bar-action"},"1\u5206\u949f\u524d")))))))})),this.state.loading&&this.state.hasMore&&i.a.createElement("div",{className:"demo-loading-container"},i.a.createElement(G.a,null)))}}]),n}(l.PureComponent),ee=(t(86),t(49)),ne=(t(267),t(20)),te=(t(291),t(93)),ae=(t(274),te.a.Option),re=["\u706b\u7bad\u7b7e\u7ea6\u5b89\u4e1c\u5c3c","\u5c71\u4e1c\u66b4\u96e8\u9884\u8b66","\u9ec4\u6653\u660e \u80a1\u7968\u64cd\u7eb5 ","\u97e9\u5b66\u81e3\u88ab\u5224\u65e0\u671f","\u8305\u53f0\u81f4\u6b49 ","\u9605\u6587\u6536\u8d2d\u65b0\u4e3d\u4f20\u5a92","\u54c8\u767b\u5bf9\u5973\u5b50\u52a8\u7c97","\u5357\u4eac\u697c\u5e02\u8c03\u63a7\u65b0\u653f","\u602a\u7269\u730e\u4eba\u4e16\u754c\u4e0b\u67b6","\u6c5f\u897f\u5f6d\u5c0f\u5cf0\u88ab\u6279\u6355"].map(function(e,n){return i.a.createElement(ae,{key:e,value:e},i.a.createElement("i",{className:"search-no search-no-"+(n+1)},n+1),i.a.createElement("span",{className:"search-txt"},e))}),le=function(e){function n(){return Object(s.a)(this,n),Object(u.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"certain-category-search-wrapper",style:{width:"100%"}},i.a.createElement(te.a,{className:"certain-category-search",dropdownClassName:"certain-category-search-dropdown",dropdownMatchSelectWidth:!1,dropdownStyle:{width:"auto"},size:"large",style:{width:"100%"},dataSource:re,placeholder:"\u8bf7\u8f93\u5165\u5173\u952e\u5b57",optionLabelProp:"value"},i.a.createElement(ee.a,{suffix:i.a.createElement(ne.a,{type:"search",className:"certain-category-icon"})})))}}]),n}(l.PureComponent);function ie(){var e=Object(P.a)(["\n  margin-top: 20px;\n\n  h3 {\n    font-size: 18px;\n    color: #3d464d;\n    margin: 0 auto 1rem;\n    padding: 20px 0;\n    text-align: center;\n    border-top: 2px solid #4285f4;\n    border-bottom: 1px dashed #e6e8eb;\n    font-weight: 600;\n  }\n\n  li {\n    margin-bottom: 20px;\n  }\n\n  .img-cover {\n    position: relative;\n    width: 100%;\n    height: 200px;\n    cursor: pointer;\n    border-radius: 4px;\n  }\n\n  .img-wrap,\n  .img-wrap::before {\n    display: inline-block;\n    height: 100%;\n  }\n\n  .img-wrap {\n    position: relative;\n    cursor: pointer;\n    width: 100%;\n    text-align: center;\n    border: 1px solid #e8e8e8;\n    background: #e8e8e8;\n    overflow: hidden;\n    -webkit-transform-style: preserve-3d;\n    -ms-transform-style: preserve-3d;\n    transform-style: preserve-3d;\n    height: 100%;\n  }\n\n\n  .thumb {\n    width: 100%;\n    height: 100%;\n    border-radius: 4px;\n    transition: all 0.5s ease-out 0.1s;\n  }\n  \n  .img-cover:hover  .thumb{\n    transform: scale(1.2);\n  }\n\n  .title {\n    position: absolute;\n    bottom: 0;\n    display: block;\n    background-color: rgba(0, 0, 0, 0.3);\n    color: #fff;\n    width: 100%;\n    font-size: 14px;\n    line-height: 20px;\n    padding: 15px;\n  }\n  \n"]);return ie=function(){return e},e}var ce=q.b.div(ie()),oe=function(e){function n(){return Object(s.a)(this,n),Object(u.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return i.a.createElement(ce,null,i.a.createElement("h3",null,i.a.createElement("span",null,"\u70ed\u95e8\u6d3b\u52a8")),i.a.createElement("ul",{class:"am-list"},i.a.createElement("li",null,i.a.createElement("div",{class:"img-cover"},i.a.createElement("a",{href:"/p/5163419.html",target:"_blank",className:"img-wrap"},i.a.createElement("img",{className:"thumb",src:"//p99.pstatp.com/list/190x124/pgc-image/R9lmFgJEXIjx97",alt:""})),i.a.createElement("div",{class:"title"},"2018\uff0c\u521b\u4e1a\u9ec4\u91d1\u65f6\u4ee3\u7ed3\u675f\u7684\u4e00\u5e74| \u6df1\u6c2a"))),i.a.createElement("li",null,i.a.createElement("div",{class:"img-cover"},i.a.createElement("a",{href:"/p/5163419.html",target:"_blank",className:"img-wrap"},i.a.createElement("img",{className:"thumb",src:"//p99.pstatp.com/list/190x124/pgc-image/R9lmFgJEXIjx97",alt:""})),i.a.createElement("div",{class:"title"},"\u56e0\u4e3a\u9000\u5e02\u4e0a\u4e86\u70ed\u641c\uff0c\u966a\u4f60\u8dd1\u8fc712\u5e74\u65f6\u5149\u7684\u300aQQ\u97f3\u901f\u300b\u8fd8\u662f\u843d\u5e55\u4e86")))))}}]),n}(l.Component);function se(){var e=Object(P.a)(["\n  margin-bottom: 60px;\n\n  h3 {\n    font-size: 18px;\n    color: #3d464d;\n    margin: 0 auto 1rem;\n    padding: 20px 0;\n    text-align: center;\n    border-top: 2px solid #4285f4;\n    border-bottom: 1px dashed #e6e8eb;\n    font-weight: 600;\n  }\n\n  .image-box {\n    margin: 20px auto 0;\n    width: 100px;\n    height: 100px;\n  }\n\n  .image-box img {\n    width: 100%;\n    height: 100%;\n  }\n"]);return se=function(){return e},e}var me=q.b.div(se()),ue=function(e){function n(){return Object(s.a)(this,n),Object(u.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return i.a.createElement(me,null,i.a.createElement("h3",null,i.a.createElement("span",null,"\u516c\u4f17\u53f7")),i.a.createElement("div",{class:"image-box"},i.a.createElement("img",{src:"https://pic.36krcnd.com/201711/27085325/5oqfcsuefx3qcwdx.png",alt:"36\u6c2aApp"})))}}]),n}(l.Component);function pe(){var e=Object(P.a)(["\n  .pane-module {\n    width: 100%;\n    border-top: 2px solid #4285f4;\n    background-color: #f4f5f6;\n    margin-bottom: 16px;\n    padding: 15px 20px 20px;\n  }\n\n.pane-module .module-head {\n    color: #222;\n    padding: 0;\n    margin-bottom: 15px;\n    font-size: 18px;\n    font-weight: 700;\n}\n\n.more-items-content {\n    overflow: hidden;\n    margin-right: -20px;\n    margin-bottom: -20px;\n}\n\n.more-items-content .item {\n    float: left;\n    margin: 0 20px 20px 0;\n}\n\n.more-items-content .item a {\n    color: #777;\n    line-height: 1.4;\n    font-size: 14px;\n}\n  .company {\n    width: 100%;\n    padding: 8px 20px;\n    background-color: #f4f5f6;\n    line-height: 2;\n    font-size: 14px;\n    text-align: left;\n  }\n\n  .company p {\n    color: #777;\n}\n\n.company a {\n    cursor: pointer;\n    color: #777;\n}\n\n"]);return pe=function(){return e},e}var de=q.b.div(pe()),he=function(e){function n(){return Object(s.a)(this,n),Object(u.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return i.a.createElement(de,null,i.a.createElement("div",{class:"pane-module"},i.a.createElement("div",{class:"module-head"},"\u66f4\u591a"),i.a.createElement("ul",{class:"more-items-content"},i.a.createElement("li",{class:"item"},i.a.createElement("a",{href:"/about/"},"\u5173\u4e8e\u6211\u4eec")),i.a.createElement("li",{class:"item"},i.a.createElement("a",{href:"/join/"},"\u52a0\u5165\u6211\u4eec")),i.a.createElement("li",{class:"item"},i.a.createElement("a",{href:"/report/"},"\u5a92\u4f53\u62a5\u9053")),i.a.createElement("li",{class:"item"},i.a.createElement("a",{href:"/media_partners/"},"\u5a92\u4f53\u5408\u4f5c")),i.a.createElement("li",{class:"item"},i.a.createElement("a",{href:"/cooperation/"},"\u4ea7\u54c1\u5408\u4f5c")),i.a.createElement("li",{class:"item"},i.a.createElement("a",{href:"/media_cooperation/"},"\u5408\u4f5c\u8bf4\u660e")),i.a.createElement("li",{class:"item"},i.a.createElement("a",{href:"https://ad.toutiao.com/promotion/?source2=pchomemore",target:"_blank"},"\u5e7f\u544a\u6295\u653e")),i.a.createElement("li",{class:"item"},i.a.createElement("a",{href:"/contact/"},"\u8054\u7cfb\u6211\u4eec")),i.a.createElement("li",{class:"item"},i.a.createElement("a",{href:"/user_agreement/"},"\u7528\u6237\u534f\u8bae")),i.a.createElement("li",{class:"item"},i.a.createElement("a",{href:"/privacy_protection/"},"\u9690\u79c1\u653f\u7b56")),i.a.createElement("li",{class:"item"},i.a.createElement("a",{href:"/complain/"},"\u4fb5\u6743\u6295\u8bc9")),i.a.createElement("li",{class:"item"},i.a.createElement("a",{href:"http://renzheng.toutiao.com/guide?platform=%27PC%27&source=%27www.toutiao.com%27"},"\u4f01\u4e1a\u8ba4\u8bc1")))),i.a.createElement("div",{class:"company"},i.a.createElement("p",{class:"J-company-name"}," \xa9 2018 \u667a\u9177\u901a"),i.a.createElement("a",{href:"http://www.12377.cn/",target:"_blank",ga_event:"click_about"},"\u4e2d\u56fd\u4e92\u8054\u7f51\u4e3e\u62a5\u4e2d\u5fc3"),i.a.createElement("a",{href:"http://www.miibeian.gov.cn/",target:"_blank",ga_event:"click_about"},"\u4eacICP\u8bc1140141\u53f7"),i.a.createElement("div",null,i.a.createElement("a",{href:"http://www.miibeian.gov.cn/",target:"_blank",ga_event:"click_about"},"\u4eacICP\u590712025439\u53f7-3"),i.a.createElement("a",{href:"/license/",target:"_blank",class:"icp"},"\u7f51\u7edc\u6587\u5316\u7ecf\u8425\u8bb8\u53ef\u8bc1")),i.a.createElement("p",null,"\u4eac-\u975e\u7ecf\u8425\u6027-2016-0081"),i.a.createElement("a",{href:"/a3642705768/",target:"_blank"},"\u8ddf\u5e16\u8bc4\u8bba\u81ea\u5f8b\u7ba1\u7406\u627f\u8bfa\u4e66"),i.a.createElement("p",null,"\u516c\u53f8\u540d\u79f0\uff1a\u667a\u9177\u901a\u79d1\u6280\uff08\u6df1\u5733\uff09\u6709\u9650\u516c\u53f8"),i.a.createElement("p",null,"\u8fdd\u6cd5\u548c\u4e0d\u826f\u4fe1\u606f\u4e3e\u62a5\uff1a010-58341833")))}}]),n}(l.Component);function fe(){var e=Object(P.a)(["\n  text-align: center;\n  margin-top: 15px;\n  .channel-item {\n    display: block;\n    width: 110px;\n    height: 40px;\n    line-height: 40px;\n    text-align: center;\n    color: #444;\n    border-radius: 4px;\n    margin-bottom: 2px;\n    transition-property: color, background-color;\n  }\n\n  .channel-item span {\n    display: inline-block;\n    font-size: 16px;\n  }\n\n  .channel-item:hover {\n    -webkit-animation-name: hvr-back-pulse;\n    animation-name: hvr-back-pulse;\n    -webkit-animation-duration: 0.2s;\n    animation-duration: 0.2s;\n    -webkit-animation-timing-function: linear;\n    animation-timing-function: linear;\n    -webkit-animation-iteration-count: 1;\n    animation-iteration-count: 1;\n    background-color: #4285f4;\n    color: #fff;\n  }\n\n  .active {\n    background-color: #4285f4;\n    color: #fff;\n  }\n"]);return fe=function(){return e},e}function be(){var e=Object(P.a)(["\n  width: 1170px;\n  max-width: 1170px;\n  margin: 0 auto;\n\n  .ant-carousel .slick-slide {\n    margin-top: 15px;\n    text-align: center;\n    height: 300px;\n    line-height: 300px;\n    background: #364d79;\n    overflow: hidden;\n  }\n\n  .ant-carousel .slick-slide h3 {\n    color: #fff;\n  }\n"]);return be=function(){return e},e}var ge=q.b.div(be()),Ee=q.b.div(fe()),xe=function(e){function n(){return Object(s.a)(this,n),Object(u.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return i.a.createElement(ge,null,i.a.createElement(T.a,{gutter:30},i.a.createElement(I.a,{span:3},i.a.createElement(Ee,null,i.a.createElement(B.a,{offsetTop:20},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"/",target:"_self",ga_event:"channel_recommand_click",className:"channel-item active"},i.a.createElement("span",null,"\u63a8\u8350"))),i.a.createElement("li",null,i.a.createElement("a",{href:"//www.365yg.com/",target:"_blank",rel:"noreferrer noopener",className:"channel-item"},i.a.createElement("span",null,"\u5b8f\u89c2"))),i.a.createElement("li",null,i.a.createElement("a",{href:"/ch/news_hot/",target:"_self",className:"channel-item"},i.a.createElement("span",null,"\u56fd\u9645"))),i.a.createElement("li",null,i.a.createElement("a",{href:"/ch/news_image/",target:"_blank",className:"channel-item"},i.a.createElement("span",null,"\u8d22\u7ecf"))),i.a.createElement("li",null,i.a.createElement("a",{href:"/ch/news_tech/",target:"_self",className:"channel-item"},i.a.createElement("span",null,"\u79d1\u6280"))),i.a.createElement("li",null,i.a.createElement("a",{href:"/ch/news_entertainment/",target:"_self",className:"channel-item"},i.a.createElement("span",null,"\u751f\u6001"))),i.a.createElement("li",null,i.a.createElement("a",{href:"/ch/news_game/",target:"_self",className:"channel-item"},i.a.createElement("span",null,"\u793e\u4f1a"))),i.a.createElement("li",null,i.a.createElement("a",{href:"/ch/news_sports/",target:"_self",className:"channel-item"},i.a.createElement("span",null,"\u6587\u5316"))),i.a.createElement("li",null,i.a.createElement("a",{href:"/ch/news_car/",target:"_self",className:"channel-item"},i.a.createElement("span",null,"\u667a\u5e93"))),i.a.createElement("li",null,i.a.createElement("a",{href:"/ch/news_finance/",target:"_self",className:"channel-item"},i.a.createElement("span",null,"\u653f\u6cbb"))),i.a.createElement("li",null,i.a.createElement("a",{href:"/ch/funny/",target:"_self",className:"channel-item"},i.a.createElement("span",null,"\u520a\u7269"))))))),i.a.createElement(I.a,{span:14},i.a.createElement(U,null),i.a.createElement($,null)),i.a.createElement(I.a,{span:7},i.a.createElement(le,null),i.a.createElement(oe,null),i.a.createElement(B.a,{offsetTop:20},i.a.createElement(ue,null),i.a.createElement(he,null)))))}},{key:"componentDidMount",value:function(){this.props.getFoucs()}}]),n}(l.Component),ve=Object(b.b)(null,function(e){return{getFoucs:function(){e(a.getFoucs())}}})(xe),we=function(e){function n(){return Object(s.a)(this,n),Object(u.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,"Result")}}]),n}(l.Component);function ke(){var e=Object(P.a)(['\n  width: 1170px;\n  max-width: 1170px;\n  margin: 0 auto;\n  min-height: 1000px;\n\n  .header-wrap {\n    margin-bottom: 30px;\n    margin-top: 20px;\n  }\n\n  .tabBar {\n    font-size: 18px;\n    color: #222;\n    margin-bottom: 16px;\n  }\n\n  .y-box {\n    display: block;\n  }\n\n  .y-box:after {\n    content: " ";\n    display: block;\n    height: 0;\n    clear: both;\n    overflow: hidden;\n  }\n\n  li {\n    float: left;\n    margin-right: 33px;\n    font-size: 18px;\n    cursor: pointer;\n  }\n\n  .active {\n    color: #4285f4;\n    cursor: default;\n  }\n\n  .feedBox .no-feed {\n    background-color: #fff;\n    min-height: 320px;\n  }\n  .feedBox .no-feed .empty-img {\n    margin: 0 auto;\n    width: 167px;\n    height: 74px;\n    padding-top: 110px;\n  }\n\n  .feedBox .no-feed .empty-img img {\n    width: 100%;\n    height: 100%;\n  }\n\n  .feedBox .no-feed p {\n    margin-top: 24px;\n    font-size: 14px;\n    color: #999;\n    text-align: center;\n  }\n']);return ke=function(){return e},e}function ye(){var e=Object(P.a)(["\n  background: #f1f2f3;\n"]);return ye=function(){return e},e}var Oe=q.b.div(ye()),je=q.b.div(ke()),_e=ee.a.Search,Ne=function(e){function n(){return Object(s.a)(this,n),Object(u.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){var e=this.props,n=e.curTab,t=e.changeTabItem;return i.a.createElement(Oe,null,i.a.createElement(je,null,i.a.createElement(T.a,{gutter:30},i.a.createElement(I.a,{span:17},i.a.createElement("div",{className:"header-wrap"},i.a.createElement(_e,{placeholder:"\u8bf7\u8f93\u5165\u641c\u7d22\u5185\u5bb9",enterButton:"\u641c\u7d22",size:"large",onSearch:function(e){return console.log(e)}})),i.a.createElement("div",{className:"tabBar"},i.a.createElement("ul",{className:"y-box"},i.a.createElement("li",{className:1===n?"active":"",onClick:this.props.changeTabItem.bind(this,1)},"\u8d44\u8baf"),i.a.createElement("li",{className:2===n?" active":"",onClick:t.bind(this,2)},"\u673a\u6784"),i.a.createElement("li",{className:3===n?"active":"",onClick:t.bind(this,3)},"\u4e13\u5bb6"),i.a.createElement("li",{className:4===n?"active":"",onClick:t.bind(this,4)},"\u6210\u679c"),i.a.createElement("li",{className:5===n?"active":"",onClick:t.bind(this,5)},"\u4e13\u9898"),i.a.createElement("li",{className:6===n?"active":"",onClick:t.bind(this,6)},"\u6d3b\u52a8"))),i.a.createElement("div",{"riot-tag":"feedBox",className:"feedBox "},i.a.createElement("div",{name:"feedBox"},i.a.createElement("div",{className:"sections"}," "),i.a.createElement("div",{className:"no-feed"},i.a.createElement("div",{className:"empty-img"},i.a.createElement("img",{src:"//s3.pstatp.com/toutiao/resource/ntoutiao_web/static/image/search/empty_result_9f5c0cd.png",alt:""})),i.a.createElement("p",null,"\u5728\u8fd9\u4e2a\u661f\u7403\u4e2d\u627e\u4e0d\u5230"))))),i.a.createElement(I.a,{span:7},"3"))))}}]),n}(l.Component),Ce=Object(b.b)(function(e){return{curTab:e.getIn(["search","cur_tab"])}},function(e){return{changeTabItem:function(n){e(r.changeTabItem(n))}}})(Ne);function ze(){var e=Object(P.a)(["\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n"]);return ze=function(){return e},e}var Se=Object(q.a)(ze());function Te(){var e=Object(P.a)(["\n  float: right;\n  padding: 0;\n\n  ul {\n    list-style: none;\n  }\n\n  li {\n    display: inline-block;\n    cursor: pointer;\n    margin-left: 40px;\n    line-height: 64px;\n  }\n\n  a {\n    display: block;\n    color: rgba(0, 0, 0, 0.65);\n    text-decoration: none;\n    height: 64px;\n    font-size: 15px;\n  }\n\n  .ln-head-nav-active a {\n    color: rgba(0, 0, 0, 0.85);\n    border-bottom: 3px solid #6260e1;\n  }\n\n  .ln-head-nav a:hover {\n    color: rgba(0, 0, 0, 0.45);\n  }\n\n  .ln-head-nav-active a:hover {\n    color: rgba(0, 0, 0, 0.65);\n  }\n"]);return Te=function(){return e},e}function Ie(){var e=Object(P.a)(["\n  line-height: 64px;\n  float: left;\n  a {\n    display: block;\n    height: 64px;\n    width: 114px;\n    line-height: 64px;\n    -webkit-justify-content: center;\n    justify-content: center;\n  }\n  i {\n    display: inline-block;\n    width: 114px;\n    height: 40px;\n    margin-top: 11px;\n    background-image: url(http://gw.alipayobjects.com/zos/rmsportal/CWZsFzVwokmBwhfegebR.png);\n    background-size: 100% 100%;\n  }\n"]);return Ie=function(){return e},e}function Be(){var e=Object(P.a)(["\n  max-width: 1170px;\n  height: 64px;\n  margin: 0 auto;\n"]);return Be=function(){return e},e}function Ae(){var e=Object(P.a)(["\n  width: 100%;\n  box-shadow: 0 2px 8px #f0f1f2;\n  box-sizing: content-box;\n  background: rgb(255, 255, 255);\n  border-bottom: 1px solid rgb(242, 242, 242);\n"]);return Ae=function(){return e},e}var Me=q.b.div(Ae()),Pe=q.b.div(Be()),qe=q.b.div(Ie()),De=q.b.div(Te()),Fe=function(e){function n(){return Object(s.a)(this,n),Object(u.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return i.a.createElement(Me,null,i.a.createElement(Pe,null,i.a.createElement(qe,null,i.a.createElement("a",{className:"ln-header-logo",href:"/"},i.a.createElement("i",{className:"head-logo-icon ln-header-logo-icon"}))),i.a.createElement(De,null,i.a.createElement("ul",{className:"ln-head-nav"},i.a.createElement("li",{className:"ln-head-nav-active"},i.a.createElement("a",{href:"/pricing"},"\u9996\u9875")),i.a.createElement("li",null,i.a.createElement("a",{href:"/help"},"\u673a\u6784")),i.a.createElement("li",null,i.a.createElement("a",{href:"/result"},"\u6210\u679c")),i.a.createElement("li",null,i.a.createElement("a",{href:"/help"},"\u4e13\u9898")),i.a.createElement("li",null,i.a.createElement("a",{href:"/dev"},"\u5c0f\u7a0b\u5e8f"))))))}}]),n}(l.Component),Le=function(e){function n(){return Object(s.a)(this,n),Object(u.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(Se,null),i.a.createElement(b.a,{store:S},i.a.createElement(h.a,null,i.a.createElement("div",null,i.a.createElement(Fe,null),i.a.createElement(f.a,{path:"/",exact:!0,component:ve}),i.a.createElement(f.a,{path:"/result",exact:!0,component:we}),i.a.createElement(f.a,{path:"/search",exact:!0,component:Ce})))))}}]),n}(l.Component);o.a.render(i.a.createElement(Le,null),document.getElementById("root"))},89:function(e,n,t){e.exports=t.p+"static/media/home.d1523964.27e2804c.png"}},[[144,2,1]]]);
//# sourceMappingURL=main.5c22c68f.chunk.js.map