<template>
  <div class="not-found">
    <h2>Error 404</h2>
    <img src="../assets/Images/erreur-404.png" alt="404 Error" class="not-found-image" />
    <p>Oops! The page you're looking for doesn't exist.</p>
    <router-link to="/" class="back-home">Go Back Home</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px;
}

.not-found-image {
  max-width: 300px;
  margin-bottom: 20px;
  padding-top: 20px;
}

h2 {
  font-size: 1.8em;
  color:#050A30;
  padding-top: 80px;
  font-family: 'Ubuntu-Bold';
}

p {
  font-size: 1.2em;
  color: #E7191F;
  font-family: 'Ubuntu-Bold';
}

.back-home {
  margin-top: 20px;
  padding: 10px 20px;
  color: white;
  background-color: #78BDC4;
  text-decoration: none;
  border-radius: 5px;
}

.back-home:hover {
  background-color: #78BDC4;
}
</style>
