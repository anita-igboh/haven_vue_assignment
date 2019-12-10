<template>
  <div class="home">
    <div id="photo_interlock">
        <img src="../assets/Rectangle 4.png" id="img1" alt="">
        <img src="../assets/smiling man.jpg" id="img2" alt="">
    </div>
    <div class="txt">
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of<br> 
         classical Latin literature from 45 BC, making it over 2000 years old.<br>
         There are many variations of passages of Lorem Ipsum available, but the majority have<br>
         suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br>
         The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </p>
  
    </div>
    <div class="logos">
      <img src="../assets/H.png" id="H" alt="" class="logo">
      <img src="../assets/HAVEN.png" alt="" class="reduce">
    </div>
    <div class="hands">
      <img src="../assets/image 4 (1).png" alt="">
    </div>
    <div class="txt2">
      <p>Free online Lorem Ipsum dummy text generator with great features. Dummy Text Generator for Web Designers and your<br>
         general typesettings needs! The text generated with this free online tool can be used to aid in the web design process.<br><br><br>
         What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>
          Lorem Ipsum has been the industry's standard dummy text ever since the<br>
          1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         </p>
    </div>
    <div class="txt3">
      <h3 class="con" >Contact Us</h3>
      <p>+444 - 880 -222</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components:{
    
  }
}
</script>

<style scoped>
p{
  color: black;
}
.logo {
  height:4.7rem;
}
.reduce {
  width:20rem;
}
.con {
  margin-top: 1rem;
}
 #photo_interlock {
   position: relative;
 }
 #img2 {
   width: 18rem;
   height: 13rem;
   /* margin-right: 50rem; */
   position:absolute;
   left: 630px;
   top: 350px;
 }
 #img1 {
   margin-top: 8rem;
 }
 .txt {
   margin-top: 7rem;
 }
 #H {
   margin-right: 5rem;
 }
 .logos {
   padding-top: 5rem;
 }
 .hands {
   margin-top: 12rem;
 }
 .txt2 {
   margin-top: 4rem;
 }
 .txt3 {
   margin-top: 7rem;
 }
</style>
