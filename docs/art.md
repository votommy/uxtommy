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
let imgURL= "/artworks/thumbnails/";
export default {
    data() {
        return {
            gallery: [
                {title: "Porcelain Tommy", img: imgURL + 'Porcelain-Tommy.jpg'},
                {title: "Emma Portrait", img: imgURL + 'Emma-Portrait.jpg'},
                {title: "Dani", img: imgURL + 'Dani.jpg'},
                {title: "Bryn", img: imgURL + 'Bryn.jpg'},
                {title: "LSD Tommy", img: imgURL + 'LSD-Tommy.jpg'},
                {title: "Cat Portrait", img: imgURL + 'Cat-Portrait.jpg'},
                {title: "Dance Pose Tommy", img: imgURL + 'Dance-Pose-Tommy.jpg'},
                {title: "Riko: Original Character", img: imgURL + 'Riko-Original-Character.jpg'},
                {title: "Aris", img: imgURL + 'Aris.jpg'},
                {title: "Luvenis", img: imgURL + 'Luvenis.jpg'},
                {title: "Ana Portrait", img: imgURL + 'Ana-Portrait.jpg'},
                {title: "Chibi Tommy", img: imgURL + 'Chibi-Tommy.jpg'},
                {title: "Luna Magnolia", img: imgURL + 'Luna-Magnolia.jpg'},
                {title: "Kanon", img: imgURL + 'Kanon.jpg'},
                {title: "Nieru", img: imgURL + 'Nieru.jpg'},
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