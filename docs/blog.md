---
title: uxTOMMY
titleTemplate: Blog
description: Tommy's blog posts
aside: false
---

<h1>Posts</h1>
<table>
    <tr v-for="blog in blogs">
        <td>{{ blog.customDate }}</td>
        <td>
            <a :href="'/blogs/' + blog.basename">
            {{ blog.titleTemplate }}
            <span id="tagPills" v-for="tag in blog.tags">{{ tag }}</span>
            </a>
        </td>
    </tr>
</table>

<style scoped>
table {
  display: flex;
  flex-direction: column-reverse;
}
table tr td:first-child { /* right align the first column */
    text-align: right;
    width: 200px;
}
table, tr, td {
    background-color: transparent !important;
    border: none !important;
}
#tagPills {
    color: #BBB;
    font-size: .85rem;
    border: 1px #BBB solid;
    border-radius: 1rem;
    padding: 0 6px 3px 6px;
    margin-left: 4px;
}
td:hover #tagPills {
    color: #999;
    border-color: #999;
}
</style>

<script>
export default {
    data() {
        return {
            blogs: <!--@include: blogs-metadata.json-->
        }
    }
}
</script>