---
title: uxTOMMY
titleTemplate: Blog
description: Tommy's blog posts
aside: false
---

<h1>Posts</h1>
<div id="btnDiv"><button id="sortBtn" @click="sort()" title="newest to oldest">&#8595;</button></div>
<table class="desc">
    <tr v-for="blog in blogs">
        <td>
            {{ blog.customDate }}
        </td>
        <td class="blogColumn" @click="openBlog(blog.basename)">
            <a :href="'/blogs/' + blog.basename">
                <span id="blogTitle">{{ blog.titleTemplate }}</span><br>
                <span id="blogDescription">{{ blog.description }}</span><br>
                <span id="tagPills" v-for="tag in blog.tags">{{ tag }}</span>
            </a>
        </td>
    </tr>
</table>

<style scoped>
#btnDiv {
    display: flex;
    justify-content: end;
}
#sortBtn {
    padding: 6px 12px;
    border: 1px #BBB solid;
    border-radius: 10px;
    text-align: right;
}
.desc {
    display: flex;
    flex-direction: column-reverse;
}
.asc {
    display: flex;
    flex-direction: column;
}
table tr td:first-child { /* right align the first column */
    text-align: right;
    width: 120px;
}
table, tr, td {
    background-color: transparent !important;
    border: none !important;
}
td {
    padding: 24px 0 !important;
    width: 80%;
}
.blogColumn {
    padding-left: 32px !important;
}
.blogColumn:hover {
    cursor: pointer !important;
}
#blogDescription {
    font-size: .9rem;
    color: #BBB;
}
#tagPills {
    color: #BBB;
    font-size: .8rem;
    border: 1px #BBB solid;
    border-radius: 1rem;
    padding: 3px 6px;
    margin-right: 4px;
}
.blogColumn:hover #tagPills {
    color: #999;
    border-color: #999;
}
.blogColumn:hover #blogTitle {
    color: var(--vp-c-brand-dark);
}
</style>

<script>
export default {
    data() {
        return {
            blogs: <!--@include: blogs-metadata.json-->
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