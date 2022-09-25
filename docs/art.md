---
title: uxTOMMY
titleTemplate: Art Gallery
description: Tommy's artworks
aside: false
---

<h1>Gallery</h1>

<div id="gallery">
    <div class="column">
        <div class="piece" v-for="piece in gallery.slice(0, 5)">
            <div class="imgFrame"><img class="img" :src="piece.img" /></div>
            <p class="title">{{ piece.title }}</p>
        </div>
    </div>
    <div class="column">
        <div class="piece" v-for="piece in gallery.slice(5, 10)">
            <div class="imgFrame"><img class="img" :src="piece.img" /></div>
            <p class="title">{{ piece.title }}</p>
        </div>
    </div>
    <div class="column">
        <div class="piece" v-for="piece in gallery.slice(10, 15)">
            <div class="imgFrame"><img class="img" :src="piece.img" /></div>
            <p class="title">{{ piece.title }}</p>
        </div>
    </div>
</div>


<style scoped>
#gallery {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.column {
    display: flex;
    flex-direction: column;
    width: 33.33%;
}
.piece {
    width: 100%;
    padding: 2px;
}
.piece:hover .img {
    opacity: 60%;
    filter: blur(5px);
    transform: scale(105%);
    cursor: pointer;
}
.piece .title {
    font-weight: bold;
    opacity: 0;
    position: relative;
    bottom: 50%;
    text-align: center;
    margin: -14px;
}
.piece:hover .title {
    opacity: 1;
    cursor: pointer;
}
.imgFrame {
    overflow: hidden;
}
</style>

<script>
export default {
    data() {
        return {
            gallery: [
                {title: "Porcelain Tommy", img: 'https://raw.githubusercontent.com/votommy/uxtommy/main/docs/artworks/Porcelain-Tommy.png'},
                {title: "Emma Portrait", img: 'https://raw.githubusercontent.com/votommy/uxtommy/main/docs/artworks/Emma-Portrait.png'},
                {title: "Riko: Original Character", img: 'https://raw.githubusercontent.com/votommy/uxtommy/main/docs/artworks/Riko-Original-Character.png'},
                {title: "Bryn", img: 'https://raw.githubusercontent.com/votommy/uxtommy/main/docs/artworks/Bryn.png'},
                {title: "LSD Tommy", img: 'https://raw.githubusercontent.com/votommy/uxtommy/main/docs/artworks/LSD-Tommy.png'},
                {title: "Cat Portrait", img: 'https://raw.githubusercontent.com/votommy/uxtommy/main/docs/artworks/Cat-Portrait.png'},
                {title: "Dance Pose Tommy", img: 'https://raw.githubusercontent.com/votommy/uxtommy/main/docs/artworks/Dance-Pose-Tommy.png'},
                {title: "Dani", img: 'https://raw.githubusercontent.com/votommy/uxtommy/main/docs/artworks/Dani.png'},
                {title: "Aris", img: 'https://raw.githubusercontent.com/votommy/uxtommy/main/docs/artworks/Aris.png'},
                {title: "Luvenis", img: 'https://raw.githubusercontent.com/votommy/uxtommy/main/docs/artworks/Luvenis.png'},
                {title: "Ana Portrait", img: 'https://raw.githubusercontent.com/votommy/uxtommy/main/docs/artworks/Ana-Portrait.png'},
                {title: "Chibi Tommy", img: 'https://raw.githubusercontent.com/votommy/uxtommy/main/docs/artworks/Chibi-Tommy.png'},
                {title: "Luna Magnolia", img: 'https://raw.githubusercontent.com/votommy/uxtommy/main/docs/artworks/Luna-Magnolia.png'},
                {title: "Kanon", img: 'https://raw.githubusercontent.com/votommy/uxtommy/main/docs/artworks/Kanon.png'},
                {title: "Nieru", img: 'https://raw.githubusercontent.com/votommy/uxtommy/main/docs/artworks/Nieru.png'},
            ]
        }
    },
    methods: {
        sort() {
            if(document.querySelector("table").className == "desc") {
                document.querySelector("table").className = "asc";
                document.querySelector("#sortBtn").innerHTML = "&#8593;";
                document.querySelector("#sortBtn").title = "oldest to newest";
            }
            else if(document.querySelector("table").className == "asc") {
                document.querySelector("table").className = "desc";
                document.querySelector("#sortBtn").innerHTML = "&#8595;";
                document.querySelector("#sortBtn").title = "newest to oldest";
            }
        },
        openBlog(link) {
            window.location.href = "/blogs/" + link;
        }
    }
}
</script>