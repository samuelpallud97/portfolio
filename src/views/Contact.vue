<template>
  <div>
    <h2>Contact</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Full name:</label>
        <input type="text" id="name" v-model="form.name" placeholder="Full name">
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" placeholder="Email">
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" placeholder="Message"></textarea>
      </div>
      <button type="submit">Send</button>
      <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactVue',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      successMessage: ''
    };
  },
  methods: {
    submitForm() {
      console.log('Form data submitted:', this.form);

      this.successMessage = "Thanks for your message.";
      // Simule l'envoi du formulaire en affichant un message de succès

      this.resetForm();
      // Appelle la méthode resetForm pour vider les champs du formulaire

      setTimeout(() => {
        this.successMessage = '';
      }, 2000); 
      // Le message reste un court instant puis s'efface
    },
    resetForm() {
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
      // Efface les champs du formulaire
  }
};
</script>

<style scoped>
h2 {
  margin: 0;
  font-size: 1.6em;
  color: #050A30;
  padding-top: 20px;
  font-family: 'Oswald-Bold';
  text-align: center;
}

form div {
  margin-bottom: 10px;
  padding: 15px;
  font-size: 1.2em;
}

form label {
  display: block;
  margin-bottom: 5px;
  font-size: 1.2em;
  font-family: 'Oswald-Bold';
  color: #050A30;
}

form input,
form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  margin-left: 15px;
  padding: 10px 20px;
  background-color: #050A30;
  color: white;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  font-family: 'Oswald-Regular';
  font-size: 1.1em;
}

button:hover {
  background-color: #78BDC4;
}

p {
margin-top: 10px;
margin-left: 20px;
color: #78BDC4;
font-family: 'Oswald-Bold';
font-size: 0.9em;
}
</style>
 