<template>
  <div class="projects-section">
    <h2 class="projects-title">Projects</h2>

    <div class="projects-container">
      <div v-for="project in projects" :key="project.id" class="project-card" @click="openModal(project)">
        <h3>{{ project.title }}</h3>
        <p>{{ project.shortDescription }}</p>
      </div>
    </div>

    <!-- Modal -->
    <Modal v-if="isModalOpen" :isOpen="isModalOpen" :project="selectedProject" @close="isModalOpen = false" />
  </div>
</template>

<script>
import Modal from './Modal.vue';

export default {
  components: {
    Modal
  },
  data() {
    return {
      projects: [
        { id: 1, title: 'Project 1', shortDescription: 'Curriculum Vitae', description: 'Full description of project 1.' },
        { id: 2, title: 'Project 2', shortDescription: 'Specifications', description: 'Full description of project 2.' },
        { id: 3, title: 'Project 3', shortDescription: 'Dynamic space comment', description: 'Full description of project 3.' }
      ],
      isModalOpen: false,
      selectedProject: null
    };
  },
  methods: {
    openModal(project) {
      this.selectedProject = project;
      this.isModalOpen = true;
    }
  }
};
</script>

<style scoped>
h2 {
  margin: 0;
  font-size: 1.6em;
  color:#050A30;
  padding-top: 20px;
  font-family: 'Oswald-Bold';
  text-align: center
}

.projects-section {
  text-align: center;
  padding: 50px;
}

.projects-title {
  font-size: 2em;
  margin-bottom: 20px;
  color: #050A30;
}

.projects-container {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.project-card {
  background: #f3f3f3;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
  max-width: 300px;
  text-align: left;
}

.project-card:hover {
  transform: scale(1.05);
}
</style>
