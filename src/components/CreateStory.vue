<template>
    <div>
        <form>
            <div class="form_item">
                <label for="name">Title</label>
                <input type="text" id="uname" name="title" v-model="user.title">
            </div>
            <br>
            <br>
            <div class="form_item">
                <label for="name">Author</label>
                <input type="text" id="auth" name="name" v-model="user.author">
            </div>
            <br>
            <br>
            <div class="form_item">
                <label for="number">URL</label>
                <input type="url" id="num" name="url" v-model="user.url">
            </div>
        </form>
        <textarea placeholder="You can start writing your story in here..." rows="10" cols="50" v-model="user.post"></textarea>
        <div>
            <button @click.prevent="createStory">Send</button>
        </div>
    </div>
</template>

<script>
import { mapActions} from 'vuex'
    export default {
        name: 'CreateStory',
        data() {
    return {
      user: {
       title : '',
       url : '',
       post: '',
       author: ''
      },
     }
    },
    computed: {
        isValid() {
      if( this.user.title == '' || this.user.author == '' || this.user.url == '' || this.user.post == '') {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    ...mapActions([
      'sendPost'
    ]),
    createStory() {
      if(this.isValid) {
        this.sendPost(this.user);
      } else {
        alert('All feilds are compulsory')
      }
    },
  }
}


</script>

<style scoped>
    .form_item input {
  width: 30%;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 16px;
  color: chocolate;
  margin-top: 0.5rem;
}
.form_item label {
  font-size: 16px;
  color: black;
}
button{
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
  margin-right: 38.6rem;
}
textarea {
    margin-top: 3rem;
    border: 1px solid black;
    margin-right: 25rem; 
}
form {
    margin-right: 30rem;
    margin-top: 6rem;
}
#auth {
    margin-right: 1rem;
}
label {
    margin-right: 1rem;
}
</style>