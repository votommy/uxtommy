import{_ as h,c as n,a as t,F as s,r as c,o as r,t as m,p as b,b as y}from"./app.199613fc.js";let i="/artworks/thumbnails/",e="/artworks/";const _={data(){return{gallery:[{title:"Porcelain T6",thumbnail:i+"Porcelain-T6.jpg",img:e+"Porcelain-T6.png",caption:"A porcelain sculpture of my VR persona, T6",medium:["Blender"]},{title:"Emma P Portrait",thumbnail:i+"Emma-Portrait.jpg",img:e+"Emma-Portrait.png",caption:"My first portrait painting that I like enough to post. I had drawn 2 other portraits before this one<br><br>Photographer: Jockum K<br>Model: Emma P",medium:["PaintToolSAI"]},{title:"Dani Daikazoku",thumbnail:i+"Dani.jpg",img:e+"Dani.png",caption:"Dani was the mascot of my art club that I started and discontinued in 2017",medium:["PaintToolSAI","Photoshop"]},{title:"Bryn",thumbnail:i+"Bryn.jpg",img:e+"Bryn.png",caption:"Bryn is an original character by my friend, Kai E.<br>Bird girl \u{1F414}",medium:["PaintToolSAI"]},{title:"LSD Tommy",thumbnail:i+"LSD-Tommy.jpg",img:e+"LSD-Tommy.png",caption:"Took inspiration from the 'Audio' music video by LSD",medium:["PaintToolSAI"]},{title:"Catrin B Portrait",thumbnail:i+"Catrin-Portrait.jpg",img:e+"Catrin-Portrait.png",caption:"A grayscale portrait painting of my friend<br>I also took this photo<br><br>Model: Catrin B",medium:["PaintToolSAI","Procreate"]},{title:"Dance Pose T6",thumbnail:i+"Dance-Pose-T6.jpg",img:e+"Dance-Pose-T6.png",caption:"Testing the rigged model of my VR persona, T6",medium:["Blender","Mixamo"]},{title:"Riko: Original Character",thumbnail:i+"Riko-Original-Character.jpg",img:e+"Riko-Original-Character.png",caption:"Riko was my first original character that I made back in high school",medium:["PaintToolSAI"]},{title:"Aris",thumbnail:i+"Aris.jpg",img:e+"Aris.png",caption:"Aris is an original character by my friend, Ana K. If that name sounds familiar, I also drew her",medium:["PaintToolSAI"]},{title:"Luvenis",thumbnail:i+"Luvenis.jpg",img:e+"Luvenis.png",caption:"Luvenis is an original character by my friend, Beatrice S",medium:["PaintToolSAI"]},{title:"Ana K Portrait",thumbnail:i+"Ana-Portrait.jpg",img:e+"Ana-Portrait.png",caption:"A grayscale portrait painting of a friend<br><br>Photographer: Abigail M<br>Model: Ana K",medium:["PaintToolSAI"]},{title:"Chibi Tommy",thumbnail:i+"Chibi-Tommy.jpg",img:e+"Chibi-Tommy.png",caption:"A chibi self portrait",medium:["Procreate"]},{title:"Luna Magnolia",thumbnail:i+"Luna-Magnolia.jpg",img:e+"Luna-Magnolia.png",caption:"Luna is an original character by my friend, Carrie S",medium:["PaintToolSAI"]},{title:"Kanon",thumbnail:i+"Kanon.jpg",img:e+"Kanon.png",caption:"Kanon is an original character by my friend, Carrie S",medium:["PaintToolSAI"]},{title:"Snowgirl",thumbnail:i+"Snowgirl.jpg",img:e+"Snowgirl.png",caption:"",medium:["PaintToolSAI"]}]}},methods:{sort(){document.querySelector("table").className=="desc"?(document.querySelector("table").className="asc",document.querySelector("#sortBtn").innerHTML="&#8593;",document.querySelector("#sortBtn").title="oldest to newest"):document.querySelector("table").className=="asc"&&(document.querySelector("table").className="desc",document.querySelector("#sortBtn").innerHTML="&#8595;",document.querySelector("#sortBtn").title="newest to oldest")},openBlog(o){window.location.href="/blogs/"+o},blowup(o){document.querySelector(".scrim").style.display="block",document.querySelector(".modal").style.display="flex",document.querySelector(".img").src=o.img},burst(){document.querySelector(".scrim").style.display="none",document.querySelector(".modal").style.display="none"}}},F=JSON.parse(`{"title":"uxTOMMY","titleTemplate":"Art Gallery","description":"Tommy's artworks","frontmatter":{"title":"uxTOMMY","titleTemplate":"Art Gallery","description":"Tommy's artworks","aside":false},"headers":[],"relativePath":"art.md"}`),p=o=>(b("data-v-8d99f7bf"),o=o(),y(),o),S=p(()=>t("h1",null,"Gallery",-1)),f=p(()=>t("div",{class:"modal"},[t("img",{class:"img"})],-1)),T={id:"gallery"},P={class:"column"},A=["onClick"],v={class:"thumbnailFrame"},k=["src"],I={class:"title"},w={class:"column"},C=["onClick"],B={class:"thumbnailFrame"},L=["src"],j={class:"title"},M={class:"column"},D=["onClick"],q={class:"thumbnailFrame"},K=["src"],x={class:"title"};function R(o,d,E,N,l,g){return r(),n("div",null,[S,t("div",{class:"scrim",onClick:d[0]||(d[0]=a=>g.burst())}),f,t("div",T,[t("div",P,[(r(!0),n(s,null,c(l.gallery.slice(0,5),a=>(r(),n("div",{class:"piece",onClick:u=>this.blowup(a)},[t("div",v,[t("img",{class:"thumbnail",src:a.thumbnail},null,8,k)]),t("p",I,m(a.title),1)],8,A))),256))]),t("div",w,[(r(!0),n(s,null,c(l.gallery.slice(5,10),a=>(r(),n("div",{class:"piece",onClick:u=>this.blowup(a)},[t("div",B,[t("img",{class:"thumbnail",src:a.thumbnail},null,8,L)]),t("p",j,m(a.title),1)],8,C))),256))]),t("div",M,[(r(!0),n(s,null,c(l.gallery.slice(10,15),a=>(r(),n("div",{class:"piece",onClick:u=>this.blowup(a)},[t("div",q,[t("img",{class:"thumbnail",src:a.thumbnail},null,8,K)]),t("p",x,m(a.title),1)],8,D))),256))])])])}const $=h(_,[["render",R],["__scopeId","data-v-8d99f7bf"]]);export{F as __pageData,$ as default};
