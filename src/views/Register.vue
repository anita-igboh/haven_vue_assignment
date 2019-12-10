<template>
    <div class="auth">
        <div class="yingyang">
            <div class="black">
                <img src="../assets/H (1).png" id="same" alt="">
                <br>
                <img src="../assets/HAVEN (1).png" id="same2" alt="">
            </div>
            <div class="yt">
                <h3>Welcome. Join us now.</h3>
               <form>
                    <label for="uname">User name</label>
                    <input type="text" id="uname" name="username" v-model="user.name">
                    <br>
                    <label for="email">email</label>
                    <input type="text" id="email" name="email" v-model="user.email">
                    <br>
                    <label for="pswd">Password</label>
                    <input type="password" id="pswd" name="password" v-model="user.password">
              </form>
                    <button @click.prevent="createAccount">Sign up</button>
             </div> 
        </div>
    </div>

</template>

<script>
import { mapActions} from 'vuex'
    export default {
        name: 'RegisterPage',
        data() {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      },
     }
    },
    computed: {
        isValid() {
      if( this.user.name == '' || this.user.name == '' || this.user.password == '' || this.user.email == '') {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    ...mapActions([
      'signUp'
    ]),
    createAccount() {
      if(this.isValid) {
        this.signUp(this.user);
      } else {
        alert('All feilds are compulsory')
      }
    },
  }
}
</script>

<style scoped>
.black {
   background-color : black;
   /* padding: 15rem; */
   width: 50%;
}
.yt {
    padding: 10rem;
}
.yingyang {
    display:flex;
}
input[type=text] {
  width: 70%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid black;
}
input[type=password] {
  width: 70%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid black;
}
button{
  background: black;
  padding: 1rem 1rem;
  border: none;
  color: #ffffff;
  font-size: 16px;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  border: 1px solid black;
  transition: all 200ms ease-in;
  margin-top: 1rem;
  margin-left: 5.5rem;
}
h3 {
    padding-bottom: 5rem;
}
#same {
    margin-top: 14rem;
}
#same2 {
    margin-top: 10px;
    margin-right: 5px;
}
#email {
    margin-left: 3rem;
}
#pswd {
    margin-left: 1rem;
}
label{
  color: black;
}
h3{
  color: black;
}
</style>