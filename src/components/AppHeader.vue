<template>
  <header>
    <h1>Pondok Qur'an Yatim Al-Mu'minun</h1>
    <div class="menu">
        <router-link to="/">Beranda</router-link>
        <router-link to="/about">Profile & Legalitas</router-link>
        <router-link to="/program">Program Yayasan</router-link>
    </div>
  </header>
</template>

<style lang="scss">
  body {
      margin:0;
  }
  header {
    border-bottom: 1px solid #ccc;
    p {
      margin-left: 1rem;
    }
    h1 {
        margin: 10px 0px;
    }
  }

  .menu{
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        color: black;
        margin-left: 1rem;
        text-decoration: none;
        border-bottom: 2px solid white;
    }
    a:hover {
        border-bottom: 2px solid #42b983;
    }
  }
</style>
