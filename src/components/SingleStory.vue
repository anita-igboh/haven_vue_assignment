<template>
  <div>
    <img :src="userStory.url" />
    <h3>{{userStory.title}}</h3>
    <p>{{userStory.author}}</p>
    <p>{{userStory.post}}</p>
    <!-- <div class="comment_sec">
      <p>Leave a comment</p>
      <textarea rows="10" cols="50"></textarea>
    </div>
    <button>Post</button> -->
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "SingleStory",

   methods: {
    ...mapActions(["displayOne"])
 
},
computed: {
    ...mapGetters(["userStory"])
},
created() {
    return this.displayOne(this.$route.params.id);
  }
}
</script>

<style scoped>
img {
  width: 40rem;
  height: 25rem;
}
h3 {
  margin-top: 4rem;
}
.comment_sec {
  margin-top: 7rem;
}
button {
  background: black;
  padding: 0.6rem 0.6rem;
  border: none;
  color: #ffffff;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid black;
  transition: all 200ms ease-in;
  width: 8%;
}
</style>