<template>
  <div class="home">
    <div class="slider">
      <span class="title">Pondok Qur'an Yatim Dhuafa</span>
      <span class="desc">Lakukan Hal Sederhana Ini yang Allah Sudah Jamin Akan
Menolak Bala Bencana Datang dan Menjadi Teman Dekat Rasulullah di Surga.</span>
      <a target="_blank" href="https://wa.me/6289663302248?text=Assalamualaikum%20saya%20ingin%20berdonasi" >Donasi Sekarang</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView'
})
</script>

<style lang="scss">
  .slider {
    vertical-align: middle;
    background-position: 50% 20% ;
    background-repeat: no-repeat;
    background-size: cover;
    height: 740px;
    width: 100%;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0.53)), url("~@/assets/139864337.jpeg");
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .title {
      font-size: 70px;
      color: white;
      font-weight: bold;
    }
    .desc {
      color: white;
      max-width: 600px;
      font-size: 18px;
    }
    a {
      margin-top: 50px;
      font-weight: bold;
      color: black;
      padding: 15px;
      border-radius: 20px;
      background: white;
      text-decoration: none;
      transition: 0.5s;
      border: 3px solid black;
    }
    a:hover {
      background: black;
      color: white;
      border: 3px solid white;

    }
  }

</style>
