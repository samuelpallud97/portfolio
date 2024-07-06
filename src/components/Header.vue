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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: #0F0200;
    color: #FDC4BB;
  }
  nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  nav a {
    color:#FDC4BB;
    text-decoration: none;
  }
  </style>
  