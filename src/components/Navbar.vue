<template>
<nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"> <img src="@/assets/ninja.png"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="links">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <div class="links">
            <div v-if="user">
              <span>
                 <router-link class="text-dark my-5" :to="{name: 'home'}">Home 🏡</router-link>
                </span>
              <span>
                 <router-link class="text-dark my-5" :to="{name: 'CreatePlaylist'}">Create PlayList 🎶</router-link>
                </span>
               <span>
              <router-link class="text-dark" :to="{name: 'UserPlaylists'}">My PlayLists 🎼</router-link>

               </span>
              <span>Hi there, {{user.displayName}} 👋 </span>
              <button @click="handelClick">Logout 🔐</button>
            </div>
            <div v-else="!user">
            <router-link class="btn" :to="{name: 'login'}">Login 🔑🔓</router-link>
            <router-link class="btn" :to="{name: 'signup'}">Signup 📝</router-link>
            </div>
        </div>
          </ul>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import useLogout from '@/composables/useLogout'
import getUser from '@/composables/getUser'

import {useRouter} from 'vue-router'

export default {
setup(){
    const { error, logout, isPending} = useLogout()
    const {user} = getUser()

    const router = useRouter()

    const handelClick = (async () => {
        await logout () 
        if(!error.value)
     console.log('user logged out')
     router.push({name: 'home'})
    })
    return {error, logout, isPending, user , handelClick}
}
}
</script>

<style scoped>
  .navbar {
    padding: 16px 10px;
    margin-bottom: 60px;
    background: transparent;
  }
  nav {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  nav img {
    max-height: 60px;
  }
  nav h1 {
    margin-left: 20px;
  }
  nav .links {
    margin-left: auto;
  }
  nav .links a, button {
    margin-left: 16px;
    font-size: 14px;
  }

   span {
    font-size: 14px;
    font-weight:800 ;
    display: inline-block;
    margin-left: 16px;
    padding-left: 16px;
    border-left: 1px solid #eee;
  }
</style>