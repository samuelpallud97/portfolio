<template>
    <div class="container">
      <h2>Home Page</h2>
      <p>Welcome to my portfolio website.</p>
      <img src="../assets/SP WEB.jpg" alt="SP WEB Logo">
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
    padding-top: 20px;
    color: #050A30;
    font-family:qqqq
  }
  
  img {
    margin: auto;
    width: 70vh;
    height: auto;
  }
  </style>
  