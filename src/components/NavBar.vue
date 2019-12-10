<template>
<nav class="navbar">
    <div class="h_logo">
        <div>
            <img src="../assets/H.png" alt="">
        </div>
        <div>
            <router-link :to="{name: 'home'}" class="logo">HAVEN</router-link>
        </div>
    </div>

    <ul class="navbar_menu">
        <li>
            <router-link :to="{ name: 'home' }">Home</router-link>
        </li>
      <li>
        <router-link :to="{ name: 'login' }">Login</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'register' }">Register</router-link>
      </li>
    </ul>
    <!-- <ul class="navbar_menu" v-else>
      <li>
        <a href="" @click="logout">Logout</a>
      </li>
    </ul> -->
  </nav>
</template>

<script>
// import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Navbar',
  // computed: {
  //   ...mapGetters([
  //     'userToken'
  //   ])
  // },
  // methods: {
  //     ...mapMutations(['saveToken'])
  // }
}
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem 4.75rem;
}
.logo {
    font-size: 21px;
    font-weight: 800;
    text-decoration: none;
    text-transform: uppercase;
    color:black;
}
.navbar_menu {
    list-style: none;
    display: flex;
    align-items: center;

}
.navbar_menu a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    color: black;
}
.navbar_menu li {
    margin: 0.5rem 2rem;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: border-bottom 500ms ease-in-out;
}
.navbar_menu li:hover {
    border-bottom: 2px solid black;
}
img {
    width: 20px;
    height: 20px;
}
.h_logo {
    display: flex;
}
@media screen and (max-width: 768px) {
    .navbar {
        padding: 1rem;
    }
    .navbar_menu li {
        margin: 0.5rem 1rem;
    }
}
</style>