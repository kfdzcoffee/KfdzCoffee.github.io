import{_ as g}from"./ValaxyMain.vue_vue_type_style_index_0_lang-CL0VB6ZT.js";import{d as v,n as $,o as m,e as d,g as s,F as y,q as w,s as b,t as p,f as _,_ as j,a as B,p as u,c as z,w as e,m as C,r as n}from"./app-DgqN-LQt.js";import{o as I}from"./index-C7yU5XnD.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-Bczd8Sqh.js";import"./YunCard.vue_vue_type_script_setup_true_lang-BBSHBaxh.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-DLFVDK8P.js";const S={class:"links"},D={class:"link-items"},E=["href","title"],L={class:"link-left"},N=["src","alt"],V={class:"link-info",m:"l-2"},F={class:"link-blog",font:"serif black"},K={class:"link-desc"},O=v({__name:"YunLinks",props:{links:{},random:{type:Boolean},errorImg:{}},setup(c){const o=c,{data:r}=$(o.links,o.random);function i(a){I(a,o.errorImg)}return(a,l)=>(m(),d("div",S,[s("ul",D,[(m(!0),d(y,null,w(_(r),(t,f)=>(m(),d("li",{key:f,class:"link-item",style:b(`--primary-color: ${t.color}`)},[s("a",{class:"link-url",p:"x-4 y-2",href:t.url,title:t.name,alt:"portrait",rel:"friend",target:"_blank"},[s("div",L,[s("img",{class:"link-avatar",width:"64",height:"64",w:"16",h:"16",loading:"lazy",src:t.avatar,alt:t.name,onError:i},null,40,N)]),s("div",V,[s("div",F,p(t.blog),1),s("div",K,p(t.desc),1)])],8,E)],4))),128))])]))}}),R=j(O,[["__scopeId","data-v-64ff5004"]]),U={__name:"index",setup(c,{expose:o}){const r=JSON.parse('{"title":"我的小伙伴们","description":"云游的小伙伴们","frontmatter":{"title":"我的小伙伴们","keywords":"链接","description":"云游的小伙伴们","links":"https://www.yunyoujun.cn/friends/links.json","random":true},"headers":[],"relativePath":"pages/links/index.md","path":"/home/runner/work/KfdzCoffee.github.io/KfdzCoffee.github.io/pages/links/index.md","lastUpdated":1716561536000}'),i=B(),a=r.frontmatter||{};i.meta.frontmatter=Object.assign(i.meta.frontmatter||{},r.frontmatter||{}),u("pageData",r),u("valaxy:frontmatter",a),globalThis.$frontmatter=a;const l={title:"我的小伙伴们",keywords:"链接",description:"云游的小伙伴们",links:"https://www.yunyoujun.cn/friends/links.json",random:!0};return o({frontmatter:l}),(t,f)=>{const h=R,k=g;return m(),z(k,{frontmatter:_(a)},{"main-content-md":e(()=>[C(h,{links:l.links,random:l.random},null,8,["links","random"])]),"main-header":e(()=>[n(t.$slots,"main-header")]),"main-header-after":e(()=>[n(t.$slots,"main-header-after")]),"main-nav":e(()=>[n(t.$slots,"main-nav")]),"main-content":e(()=>[n(t.$slots,"main-content")]),"main-content-after":e(()=>[n(t.$slots,"main-content-after")]),"main-nav-before":e(()=>[n(t.$slots,"main-nav-before")]),"main-nav-after":e(()=>[n(t.$slots,"main-nav-after")]),comment:e(()=>[n(t.$slots,"comment")]),footer:e(()=>[n(t.$slots,"footer")]),aside:e(()=>[n(t.$slots,"aside")]),"aside-custom":e(()=>[n(t.$slots,"aside-custom")]),default:e(()=>[n(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{U as default};
