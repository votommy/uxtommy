---
title: uxTOMMY
titleTemplate: Links
description: Tommy's links
aside: false
---

<div class="box">
    <h1>Tommy's Links</h1>
    <a v-for="tile in tiles" target="_blank" rel="noopener noreferrer" :href="tile.link" class="tile">
        <img class="icon" :src="tile.icon" :alt="tile.alt"/>
        <div>
            <p class="title">{{ tile.title }}</p>
            <p class="subtitle">{{ tile.subtitle }}</p>
        </div>
        <div style="width: 3rem"></div>
    </a>
</div>

<style scoped>
    .box {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h1 {
        margin-bottom: 2rem;
    }
    .tile {
        width: 100%;
        margin: 0.5rem;
        padding: 0.5rem 2rem;
        border: 1px #BBB solid;
        border-radius: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .tile:hover {
        border-color: var(--vp-c-brand);
    }

    .icon {
        width: 3rem;
    }

    .title {
        text-align: center;
        font-size: 1.5rem;
        margin: 0;
        margin-top: 0.2rem;
        color: var(--vp-c-text-1);
    }

    .subtitle {
        text-align: center;
        margin: 0;
        margin-bottom: -0.2rem;
        color: #999;
    }
    .tile:hover .subtitle {
        color: var(--vp-c-brand-dark);
    }
</style>

<script>
export default {
    data() {
        return {
            tiles: <!--@include: links-metadata.json-->
        }
    },
}
</script>