<template>
    <div class="container">
      <!-- <h2>Home</h2> -->
       <p>Welcome to my portfolio</p>
      <img src="../assets/Logos/SP WEB.jpg" alt="SP WEB Logo">
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeVue',
  }
  </script>
  
  <style scoped>
  p {
    padding-top: 60px;
    font-size: 1.8em;
    }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: #050A30;
    padding-top: 20px;
    }
  
  img {
    max-width: 100%;
    height: auto;
    margin: 0 auto;
    object-fit: cover;
  }
  </style>
  