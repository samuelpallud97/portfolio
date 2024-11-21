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
  position: fixed;
  top: 0;
  left: 0; 
  width: 100%;
  background: #050A30;
  padding: 20px 0;
  font-family: 'SairaStencilOne-Regular';
  font-size: 1.3em;
  z-index: 1000;
}

nav ul {
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  padding: 0 20px;
  margin: 0;
}

nav ul li {
  margin-left: 40px;
}

nav ul li:first-child {
  margin-right: auto;
}

nav ul li a {
  color: white;
  text-decoration: none;
}

nav ul li:hover {
  transform: scale(1.12);
  transition: transform 0.3s ease;
}

body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
</style>
