<template>
    <div class="about-section">
      <h2 class="about-title">About Me</h2>
      <div class="about-container">
        <p class="about-text">Hello world ! My name is Samuel Pallud, I'm 27 from France I'm young future
         web developer since 2024, passionate about IT, I'm currently studiying at the CEF school and my dream is to become a full stack web developer.</p>
        <img src="../assets/Images/IMG_1862.jpeg" alt="Profile">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutVue'
  };
  </script>
  
  <style scoped>
  
  .about-section {
    text-align: center;
    margin-bottom: 40px;
  }

  .about-title {
    margin: 0;
    font-size: 2em;
    color:#050A30;
    padding-top: 50px;
    font-family: 'Oswald-Bold';
  }
  .about-container {
    display: flex;
    justify-content: center;
    align-items: flex-start; 
    gap: 60px;
    text-align: left;
    max-width: 1000px;
    margin: 0 auto;
    padding-top: 30px;
  }

  .about-text {
    flex: 1;
    max-width: 400px;
    color:#050A30;
    font-size: 1.5em;
    padding-top: 30px;
  }

  img {
    max-width: 300px;
    height: auto;
    object-fit: cover;
    border-radius: 50%;
    padding-top: 30px;
  }
  </style>
  