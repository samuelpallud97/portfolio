<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <span class="close-btn" @click="closeModal">&times;</span>
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <!-- Affiche le lien GitHub spécifique au projet -->
      <a v-if="project.githubLink" :href="project.githubLink" target="_blank" class="github-link">
        GitHub Link
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['project'],
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
  text-align: center;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 1.5rem;
  cursor: pointer;
}

.github-link {
  display: inline-block;
  margin-top: 20px;
  color: #78BDC4;
  text-decoration: none;
  font-family: 'Ubuntu-Bold';
  font-size: 1em;
}

.github-link:hover {
  text-decoration: underline;
}
</style>
