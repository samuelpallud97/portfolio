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
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 20px;
  }
  </style>
  