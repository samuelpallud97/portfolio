<template>
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/projects">Projects</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderVue',
  };
  </script>
  
  <style scoped>

 header {
    background: #050A30;
    padding: 20px;
    width: 100%;
    font-family: 'Saira-Stencil';
    font-size: 2em;
  }
  

  nav ul li a {
    color: white;
    text-decoration: none;
  }

  nav ul {
    display: flex;
    justify-content: flex-end;
    list-style-type: none;
    padding: 0;
  }
  nav ul li {
    margin-left: 40px;
  }
  nav ul li:first-child {
   margin-right: auto;
  }

  nav ul li:hover {
    color: #E7191F;
    transform: scale(1.12);
  }



  </style>
  