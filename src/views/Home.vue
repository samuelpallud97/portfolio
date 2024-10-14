<template>
    <div class="container">
      <!-- <h2>Home</h2> -->
      <img src="../assets/Logos/SP WEB.jpg" alt="SP WEB Logo">
      <p>Welcome to my portfolio website.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeVue',
  };
  </script>
  
  <style scoped>


  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding-top: 40px;
    color: #050A30;
    font-family: 'Oswald-Regular';
    font-size: 1.8em;
  }
  
  img {
    margin: auto;
    object-fit: cover;
  }
  </style>
  