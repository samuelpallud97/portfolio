<template>
    <div>
      <h2>Projects</h2>
      <ul>
        <li v-for="project in projects" :key="project.id">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectsVue',
    data() {
      return {
        projects: [
          { id: 1, title: 'Project One', description: 'Description of project one.' },
          { id: 2, title: 'Project Two', description: 'Description of project two.' },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  h2 {
    margin: 0;
    font-size: 2em;
    color:#050A30;
    padding-top: 50px;
    font-family: 'Oswald-Bold';
    font-size: 1.8em;
  }

  
  h3 {
    padding-top: 20px;
    font-size: 1.5em;
  }

  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 20px;
  }
  </style>
  