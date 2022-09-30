---
title: uxTOMMY
titleTemplate: Art Gallery
description: Tommy's artworks
aside: false
---

<h1>Gallery</h1>

<div class="scrim" @click="burst()"></div>
<!-- <div class="modal"> -->
    <img class="img" />
    <!-- <div class="imgDescription">
        <h1 class="imgTitle"></h1>
        <p class="imgCaption"></p>
        <div class="imgMediumContainer">
            <h4 class="imgMediumTitle">Program used:</h4>
            <p class="imgMedium"></p>
        </div>
    </div>
</div> -->

<div id="gallery">
    <div class="column">
        <div class="piece" v-for="piece in gallery.slice(0, 5)" @click="this.blowup(piece)">
            <div class="thumbnailFrame"><img class="thumbnail" :src="piece.thumbnail" /></div>
            <p class="title">{{ piece.title }}</p>
        </div>
    </div>
    <div class="column">
        <div class="piece" v-for="piece in gallery.slice(5, 10)" @click="this.blowup(piece)">
            <div class="thumbnailFrame"><img class="thumbnail" :src="piece.thumbnail" /></div>
            <p class="title">{{ piece.title }}</p>
        </div>
    </div>
    <div class="column">
        <div class="piece" v-for="piece in gallery.slice(10, 15)" @click="this.blowup(piece)">
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
                {title: "Porcelain T6", thumbnail: thumbnailURL + 'Porcelain-T6.jpg', img: imgURL + 'Porcelain-T6.png', caption: "A porcelain sculpture of my VR persona, T6", medium: ["Blender"]},
                {title: "Emma P Portrait", thumbnail: thumbnailURL + 'Emma-Portrait.jpg', img: imgURL + 'Emma-Portrait.png', caption: "My first portrait painting that I like enough to post. I had drawn 2 other portraits before this one<br><br>Photographer: Jockum K<br>Model: Emma P", medium: ["PaintToolSAI"]},
                {title: "Dani Daikazoku", thumbnail: thumbnailURL + 'Dani.jpg', img: imgURL + 'Dani.png', caption: "Dani was the mascot of my art club that I started and discontinued in 2017", medium: ["PaintToolSAI", "Photoshop"]},
                {title: "Bryn", thumbnail: thumbnailURL + 'Bryn.jpg', img: imgURL + 'Bryn.png', caption: "Bryn is an original character by my friend, Kai E.<br>Bird girl 🐔", medium: ["PaintToolSAI"]},
                {title: "LSD Tommy", thumbnail: thumbnailURL + 'LSD-Tommy.jpg', img: imgURL + 'LSD-Tommy.png', caption: "Took inspiration from the 'Audio' music video by LSD", medium: ["PaintToolSAI"]},
                {title: "Catrin B Portrait", thumbnail: thumbnailURL + 'Catrin-Portrait.jpg', img: imgURL + 'Catrin-Portrait.png', caption: "A grayscale portrait painting of my friend<br>I also took this photo<br><br>Model: Catrin B", medium: ["PaintToolSAI", "Procreate"]},
                {title: "Dance Pose T6", thumbnail: thumbnailURL + 'Dance-Pose-T6.jpg', img: imgURL + 'Dance-Pose-T6.png', caption: "Testing the rigged model of my VR persona, T6", medium: ["Blender", "Mixamo"]},
                {title: "Riko: Original Character", thumbnail: thumbnailURL + 'Riko-Original-Character.jpg', img: imgURL + 'Riko-Original-Character.png', caption: "Riko was my first original character that I made back in high school", medium: ["PaintToolSAI"]},
                {title: "Aris", thumbnail: thumbnailURL + 'Aris.jpg', img: imgURL + 'Aris.png', caption: "Aris is an original character by my friend, Ana K. If that name sounds familiar, I also drew her", medium: ["PaintToolSAI"]},
                {title: "Luvenis", thumbnail: thumbnailURL + 'Luvenis.jpg', img: imgURL + 'Luvenis.png', caption: "Luvenis is an original character by my friend, Beatrice S", medium: ["PaintToolSAI"]},
                {title: "Ana K Portrait", thumbnail: thumbnailURL + 'Ana-Portrait.jpg', img: imgURL + 'Ana-Portrait.png', caption: "A grayscale portrait painting of a friend<br><br>Photographer: Abigail M<br>Model: Ana K", medium: ["PaintToolSAI"]},
                {title: "Chibi Tommy", thumbnail: thumbnailURL + 'Chibi-Tommy.jpg', img: imgURL + 'Chibi-Tommy.png', caption: "A chibi self portrait", medium: ["Procreate"]},
                {title: "Luna Magnolia", thumbnail: thumbnailURL + 'Luna-Magnolia.jpg', img: imgURL + 'Luna-Magnolia.png', caption: "Luna is an original character by my friend, Carrie S", medium: ["PaintToolSAI"]},
                {title: "Kanon", thumbnail: thumbnailURL + 'Kanon.jpg', img: imgURL + 'Kanon.png', caption: "Kanon is an original character by my friend, Carrie S", medium: ["PaintToolSAI"]},
                {title: "Snowgirl", thumbnail: thumbnailURL + 'Snowgirl.jpg', img: imgURL + 'Snowgirl.png', caption: "", medium: ["PaintToolSAI"]},
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
        blowup(piece) {
            document.querySelector(".scrim").style.display = "block";
            // document.querySelector(".modal").style.display = "flex";
            document.querySelector(".img").style.display = "block";
            document.querySelector(".img").src = piece.img;
            // document.querySelector(".imgTitle").innerHTML = piece.title;
            // document.querySelector(".imgCaption").innerHTML = piece.caption;
            // document.querySelector(".imgMedium").innerHTML = piece.medium.join(', ');
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
/* .modal {
    display: none;
    position: fixed;
    justify-content: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 90%;
    max-width: 90%;
    z-index: 100;
} */
.img {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    max-height: 90%;
    max-width: 90%;
}
.imgDescription {
    position: static;
    z-index: 100;
    min-width: 400px;
    min-height: 100%;
    background-color: white;
    border-left: 1px gray solid;
    border-radius: 0 20px 20px 0;
    padding: 20px 10px;
}
.imgTitle {
    text-align: center;
}
.imgMediumTitle {
    margin-bottom: -1rem;
}
</style>