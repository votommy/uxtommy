import{_ as c,c as s,a as t,F as a,r as l,o as r,t as n,p as m,b as d}from"./app.ca562bd3.js";const g={data(){return{gallery:[{title:"Porcelain Tommy",img:"/artworks/Porcelain-Tommy.png"},{title:"Emma Portrait",img:"/artworks/Emma-Portrait.png"},{title:"Riko: Original Character",img:"/artworks/Riko-Original-Character.png"},{title:"Bryn",img:"/artworks/Bryn.png"},{title:"LSD Tommy",img:"/artworks/LSD-Tommy.png"},{title:"Cat Portrait",img:"/artworks/Cat-Portrait.png"},{title:"Dance Pose Tommy",img:"/artworks/Dance-Pose-Tommy.png"},{title:"Dani",img:"/artworks/Dani.png"},{title:"Aris",img:"/artworks/Aris.png"},{title:"Luvenis",img:"/artworks/Luvenis.png"},{title:"Ana Portrait",img:"/artworks/Ana-Portrait.png"},{title:"Chibi Tommy",img:"/artworks/Chibi-Tommy.png"},{title:"Luna Magnolia",img:"/artworks/Luna-Magnolia.png"},{title:"Kanon",img:"/artworks/Kanon.png"},{title:"Nieru",img:"/artworks/Nieru.png"}]}},methods:{sort(){document.querySelector("table").className=="desc"?(document.querySelector("table").className="asc",document.querySelector("#sortBtn").innerHTML="&#8593;",document.querySelector("#sortBtn").title="oldest to newest"):document.querySelector("table").className=="asc"&&(document.querySelector("table").className="desc",document.querySelector("#sortBtn").innerHTML="&#8595;",document.querySelector("#sortBtn").title="newest to oldest")},openBlog(o){window.location.href="/blogs/"+o}}},I=JSON.parse(`{"title":"uxTOMMY","titleTemplate":"Art Gallery","description":"Tommy's artworks","frontmatter":{"title":"uxTOMMY","titleTemplate":"Art Gallery","description":"Tommy's artworks","aside":false},"headers":[],"relativePath":"art.md"}`),_=o=>(m("data-v-bbc35f4d"),o=o(),d(),o),u=_(()=>t("h1",null,"Gallery",-1)),p={id:"gallery"},y={class:"column"},h={class:"piece"},w={class:"imgFrame"},k=["src"],v={class:"title"},T={class:"column"},S={class:"piece"},b={class:"imgFrame"},f=["src"],P={class:"title"},B={class:"column"},L={class:"piece"},q={class:"imgFrame"},D=["src"],M={class:"title"};function N(o,x,A,C,i,F){return r(),s("div",null,[u,t("div",p,[t("div",y,[(r(!0),s(a,null,l(i.gallery.slice(0,5),e=>(r(),s("div",h,[t("div",w,[t("img",{class:"img",src:e.img},null,8,k)]),t("p",v,n(e.title),1)]))),256))]),t("div",T,[(r(!0),s(a,null,l(i.gallery.slice(5,10),e=>(r(),s("div",S,[t("div",b,[t("img",{class:"img",src:e.img},null,8,f)]),t("p",P,n(e.title),1)]))),256))]),t("div",B,[(r(!0),s(a,null,l(i.gallery.slice(10,15),e=>(r(),s("div",L,[t("div",q,[t("img",{class:"img",src:e.img},null,8,D)]),t("p",M,n(e.title),1)]))),256))])])])}const E=c(g,[["render",N],["__scopeId","data-v-bbc35f4d"]]);export{I as __pageData,E as default};
