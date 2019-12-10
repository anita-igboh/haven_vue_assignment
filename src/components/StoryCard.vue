<template>
    <div class="story_card">
        <div class="story_card_img">
            <img @click="SingleStory" :src="story.url" :alt="story.title" class="card_img">
        </div>
        <div class="story_card_title">
            <p>{{story.title}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StoryCard',
    props:{
        story: Object
    },
    methods: {
        SingleStory() {
            this.$router.push({name: 'single', params: { id: this.story._id}})
        }
    }
}
</script>

<style scoped>
.story_card{
    width:350px;
    height:280px;
    /* min-height:max-content; */
    grid-gap: 10px;
    /* border:1px solid black; */
}
.card_img{
    width:100%;
    height: 12rem;
}
</style>