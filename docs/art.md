---
title: uxTOMMY
titleTemplate: Art Gallery
description: Tommy's artworks
aside: false
---

<h1>Gallery</h1>

<div class="scrim" @click="burst()"></div>
<div><img class="img" /></div>

<div id="gallery">
    <div class="column">
        <div class="piece" v-for="piece in gallery.slice(0, 5)" @click="this.blowup(piece.img)">
            <div class="thumbnailFrame"><img class="thumbnail" :src="piece.thumbnail" /></div>
            <p class="title">{{ piece.title }}</p>
        </div>
    </div>
    <div class="column">
        <div class="piece" v-for="piece in gallery.slice(5, 10)" @click="this.blowup(piece.img)">
            <div class="thumbnailFrame"><img class="thumbnail" :src="piece.thumbnail" /></div>
            <p class="title">{{ piece.title }}</p>
        </div>
    </div>
    <div class="column">
        <div class="piece" v-for="piece in gallery.slice(10, 15)" @click="this.blowup(piece.img)">
            <div class="thumbnailFrame"><img class="thumbnail" :src="piece.thumbnail" /></div>
            <p class="title">{{ piece.title }}</p>
        </div>
    </div>
</div>

<script>
let thumbnailURL= "/artworks/thumbnails/";
let imgURL= "/artworks/";
export default {
    data() {
        return {
            gallery: [
                {title: "Porcelain T6", thumbnail: thumbnailURL + 'Porcelain-T6.jpg', img: imgURL + 'Porcelain-T6.png'},
                {title: "Emma P Portrait", thumbnail: thumbnailURL + 'Emma-Portrait.jpg', img: imgURL + 'Emma-Portrait.png'},
                {title: "Dani Daikazoku", thumbnail: thumbnailURL + 'Dani.jpg', img: imgURL + 'Dani.png'},
                {title: "Bryn", thumbnail: thumbnailURL + 'Bryn.jpg', img: imgURL + 'Bryn.png'},
                {title: "LSD Tommy", thumbnail: thumbnailURL + 'LSD-Tommy.jpg', img: imgURL + 'LSD-Tommy.png'},
                {title: "Catrin B Portrait", thumbnail: thumbnailURL + 'Catrin-Portrait.jpg', img: imgURL + 'Catrin-Portrait.png'},
                {title: "Dance Pose T6", thumbnail: thumbnailURL + 'Dance-Pose-T6.jpg', img: imgURL + 'Dance-Pose-T6.png'},
                {title: "Riko: Original Character", thumbnail: thumbnailURL + 'Riko-Original-Character.jpg', img: imgURL + 'Riko-Original-Character.png'},
                {title: "Aris", thumbnail: thumbnailURL + 'Aris.jpg', img: imgURL + 'Aris.png'},
                {title: "Luvenis", thumbnail: thumbnailURL + 'Luvenis.jpg', img: imgURL + 'Luvenis.png'},
                {title: "Ana K Portrait", thumbnail: thumbnailURL + 'Ana-Portrait.jpg', img: imgURL + 'Ana-Portrait.png'},
                {title: "Chibi Tommy", thumbnail: thumbnailURL + 'Chibi-Tommy.jpg', img: imgURL + 'Chibi-Tommy.png'},
                {title: "Luna Magnolia", thumbnail: thumbnailURL + 'Luna-Magnolia.jpg', img: imgURL + 'Luna-Magnolia.png'},
                {title: "Kanon", thumbnail: thumbnailURL + 'Kanon.jpg', img: imgURL + 'Kanon.png'},
                {title: "Nieru", thumbnail: thumbnailURL + 'Nieru.jpg', img: imgURL + 'Nieru.png'},
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
        },
        blowup(image) {
            document.querySelector(".scrim").style.display = "block";
            document.querySelector(".img").style.display = "block";
            document.querySelector(".img").src = image;
        },
        burst() {
            document.querySelector(".scrim").style.display = "none";
            document.querySelector(".img").style.display = "none";
        }
    }
}
</script>

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
.piece:hover .thumbnail {
    opacity: 60%;
    filter: blur(5px);
    transform: scale(104%);
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
.thumbnailFrame {
    overflow: hidden;
}

.scrim {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #000000DD;
    display: none;
}
.scrim:hover {
    cursor: pointer;
}
.img {
    position: fixed;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 80%;
    max-width: 80%;
}
</style>