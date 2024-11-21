<template>
  <div class="about-section">
    <h2 class="about-title">About</h2>
    <div class="about-container">
      <div class="about-content">
        <p class="about-text">
          Hello world! My name is Samuel Pallud, I'm 27 from France. I'm a young future web developer since 2024, passionate about IT, currently studying at the CEF school. For now, I'm working mostly with HTML, CSS, and JavaScript technologies, and my dream is to become a full-stack web developer.
        </p>
        <div class="about-logos">
          <figure>
            <img src="../assets/Logos/html.png" alt="HTML" id="logo-html">
            <img src="../assets/Logos/css.png" alt="CSS" id="logo-css">
            <img src="../assets/Logos/js.png" alt="JavaScript" id="logo-js">
          </figure>
        </div>
      </div>
      <img class="about-profil" src="../assets/Images/IMG_1862.jpeg" alt="Profile">
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
  font-size: 1.6em;
  color: #050A30;
  padding-top: 90px;
  font-family: 'Ubuntu-Bold';
}

.about-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 60px;
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 20px;
  flex-wrap: wrap;
}

.about-content {
  max-width: 400px;
  display: flex;
  flex-direction: column;
}

.about-text {
  color: #050A30;
  font-size: 1.3em;
  font-family: 'Ubuntu-Italic';
  text-align: justify;
  padding-top: 20px;
}

.about-profil {
  max-width: 300px;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
  padding-top: 20px;
}

.about-logos figure {
  display: flex;
  gap: 20px;
  justify-content: center;
  padding-top: 20px;
}

</style>
