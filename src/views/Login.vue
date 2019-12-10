<template>
    <div class="auth">
        <div class="yingyang">
            <div class="black">
                <img src="../assets/H (1).png" id="same" alt="">
                <br>
                <img src="../assets/HAVEN (1).png" id="same2" alt="">
            </div>
            <div class="yt">
                <h3>Great to see you again!</h3>
               <form >
                    <label for="username">User name</label>
                    <input type="text" id="uname" name="username" v-model="user.name">
                    <br>
                    <br>
                    <label for="password">Password</label>
                    <input type="password" id="pswd" name="password" v-model="user.password">
              </form>
              <button @click.prevent="login">Login</button>
             </div> 
        </div>
    </div>

</template>

<script>
import { mapActions} from 'vuex'
    export default {
        name: 'LoginPage',
        data() {
    return {
      user: {
        name: '',
        password: ''
      },
      inputType: 'password',
      loading: false,
      showResponse: false
    }
  },
  isValid() {
      if( this.user.name == '' || this.user.password == '') {
        return false;
      } else {
        return true;
      }
    },
    methods: {
    ...mapActions([
      'LoginAction'
    ]),
    login() {
    //   if(this.isValid) {
    //     this.loginAction(this.user)
    //   } else {
    //     alert('All fields are required')
    //   }
    this.LoginAction(this.user)
    }
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
  margin-right: 12rem;
}
h3 {
    padding-bottom: 5rem;
    color: black;
}
#same {
    margin-top: 14rem;
}
#same2 {
    margin-top: 10px;
    margin-right: 5px;
}
label{
  color: black;
}
</style>