<template>
  <div class="projects-section">
    <h2 class="projects-title">Projects</h2>
    <div class="projects-container">
      <div
        v-for="project in projects"
        :key="project.id"
        class="project-card"
        :style="{ backgroundImage: `url(${project.image})` }"
        @click="openModal(project)"
      >
        <h3>{{ project.title }}</h3>
      </div>
    </div>

    <!-- Modal d'affichage du projet -->
    <Modal
      v-if="isModalOpen"
      :project="selectedProject"
      @close="closeModal"
    /> 
  </div>
</template>

<script>
import Modal from './ModalSP.vue';

export default {
  components: {
    Modal,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          // title: 'Curriculum Vitae',
          description: 'Professional resume in HTML and CSS.',
          image: require('../assets/Images/CV.png'), 
          githubLink: 'https://github.com/samuelpallud97/CV-Samuel-Pallud-devoir-CEF',
        },
        {
          id: 2,
          // title: 'Specifications',
          description: 'Document requirements for an e-commerce business.',
          image: require('../assets/Images/Specifications.png'),
          githubLink: 'https://github.com/samuelpallud97/Cahier-des-charges/tree/main',
        },
        {
          id: 3,
          // title: 'Dynamic space comment',
          description: 'Create a dynamic comment section with Node.js.',
          image: require('../assets/Images/Com.png'),
          githubLink: 'https://github.com/samuelpallud97/Dynamiser-un-espace-commentaire-CEF',
        },
      ],
      isModalOpen: false,
      selectedProject: null,
    };
  },
  methods: {
    openModal(project) {
      this.selectedProject = project;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style scoped>
.projects-title {
  color: #050A30;
  font-size: 1.6em;
  padding-top: 70px;
  text-align: center;
}

.projects-section {
  text-align: center;
}

.projects-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  padding-top: 60px;
  flex-wrap: wrap;
}

.project-card {
  width: 250px;
  height: 250px;
  display: flex;
  align-items: flex-end;
  padding: 20px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  border: 4px solid #050A30; 
  cursor: pointer;
  transition: transform 0.3s ease;
  max-width: 300px;
  text-align: left;
}

.project-card:hover {
  transform: scale(1.15);
}

.repo-link {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 16px;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
</style>
