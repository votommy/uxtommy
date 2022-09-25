---
date: 2020-04-22
title: uxTOMMY
titleTemplate: Minimalism
description: Minimalism
customDate: 09 Sep 2022
aside: false
tags:
- lifestyle
---

<h1>Minimalism</h1>

<span id="quote">"I think there is a profound and enduring beauty in simplicity."</span>
<span id="quoteBy">- Jony Ive</span>

<h2>September 17, 2022</h2>

<p>
    There are two categories of minimalism: the lifestyle and the design language
    <br><br><br>
    - Tommy
</p>

<div v-for="blog in blogs">
    <span id="tags" v-if="blog.basename == '2020-04-22'">
        <span id="tagPills" v-for="tag in blog.tags">
            {{ tag }}
        </span>
    </span>
</div>

<style scoped>
img {
    margin: 0 auto;
}
p {
    text-align: justify;
}

#quote {
    text-align: center;
    display: block;
    font-size: 2rem;
    font-family: "Century_Gothic";
    line-height: 2.3rem;
    padding: 5% 10%;
}
#quoteBy {
    display: flex;
    justify-content: flex-end;
    font-size: 1.2rem;
    font-family: "Century_Gothic";
}

#tags {
    display: flex;
    justify-content: end;
}
#tagPills {
    color: #999;
    font-size: .85rem;
    border: 1px #999 solid;
    border-radius: 1rem;
    padding: 3px 6px;
    margin-left: 4px;
}
</style>

<script>
export default {
    data() {
        return {
            blogs: <!--@include: ../blogs-metadata.json-->
        }
    }
}
</script>