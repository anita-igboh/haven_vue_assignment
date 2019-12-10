<template>
    <div class="container">
        <h1>Our Stories</h1>
        <div class="cards">
            <StoryCard 
            v-for="story in userStory"
            :key="story._id"
            :story="story" 
            @reload="getStories"/>

        </div>
        <router-link  :to="{ name: 'create' }"><button>Add stories</button></router-link>
    </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
import StoryCard from './StoryCard.vue'
    export default {
        name: 'Stories',
        components: {
            StoryCard
        },
        created(){
            this.getStories()
        },
    computed: {
        ...mapGetters(['userStory'])
    },
    methods: {
        ...mapActions(['fetchStories']),
        getStories() {
            this.fetchStories()
        }
    },
    mounted() {
       return this.fetchStories()
    }

    
    }

</script>

<style scoped>

h1 {
    color: black;
    margin-bottom: 6rem;
    margin-right: 6rem;
}
.container {
    width: 100%;
    text-align: center;
}
.cards{
    margin:auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
}

button{
  background: black;
  padding: 0.8rem 0.8rem;
  border: none;
  color: #ffffff;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid black;
  transition: all 200ms ease-in;
  margin-top: 9rem;
  margin-left: 5.5rem;
  margin-right: 11rem;
  width: 20%;
} 
</style>