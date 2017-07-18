<template>
  <div id="app">
      <v-header :title="title" :backDisplay="backDisplay" :myDisplay="myDisplay"></v-header>
      <v-sidebar></v-sidebar>
      <div class="content">
        <router-view></router-view>
      </div>
      <v-menu></v-menu>
      <v-alert></v-alert>
  </div>
</template>

<script>
import header from '@/components/header'
import sidebar from '@/components/sidebar'
import menu from '@/components/menu'
import alert from '@/components/alert'
export default {
  name: 'app',
  components: {
    'v-header': header,
    'v-sidebar': sidebar,
    'v-menu': menu,
    'v-alert': alert
  },
  data() {
    return {

    }
  },
  watch: {

  },
  methods: {

  },
  computed: {
    title(){
      switch (this.$route.path.split("/")[1]){
        case "":
        return "首页";
        case "user":
        return "我的";
        case "convene":
        return "说走就走";
        case "recall":
        return "行程";
        case "detail":
        return "详情";
      }
    },
    backDisplay(){
      return this.$route.path.split("/")[1] ? true : false;
    },
    myDisplay(){
      if(this.$route.path.split("/")[1] == "home" || this.$route.path.split("/")[1] == ""){
        return false;
      }else{
        return this.$route.path.split("/").length > 2 ? false : true; 
      }
    }
  }
}
</script>

<style lang="scss">
@import 'assets/css/global';
@font-face {font-family: "iconfont";
  src: url('../static/font/iconfont.eot?t=1499245392082'); /* IE9*/
  src: url('../static/font/iconfont.eot?t=1499245392082#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('../static/font/iconfont.woff?t=1499245392082') format('woff'), /* chrome, firefox */
  url('../static/font/iconfont.ttf?t=1499245392082') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('../static/font/iconfont.svg?t=1499245392082#iconfont') format('svg'); /* iOS 4.1- */
}
.icon {
  font-family:"iconfont" !important;
  font-size:px2rem(18px);
  font-style:normal;
  color: #ffffff;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  .content {
    padding-top: px2rem(40px);
  }
  .slide-left-enter-active {
    animation: slideLeft .3s;
  }
}
@keyframes slideLeft {
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}
</style>
