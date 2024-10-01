<template>
    <div>
      <h2>Contact</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="form.name">
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email">
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea id="message" v-model="form.message"></textarea>
        </div>
        <button type="submit">Send</button>
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
        }
      };
    },
    methods: {
      submitForm() {
        console.log('Form submitted!', this.form);
        // Traite l'envoi du formulaire ici
      }
    }
  };
  </script>
  
  <style scoped>
  form div {
    margin-bottom: 20px;
  }
  
  form label {
    display: block;
    margin-bottom: 5px;
  }
  
  form input,
  form textarea {
    width: 100%;
    }

  button {
    padding: 15px 20px;
    font-size: 18px;
    background-color: #050A30;
    color: white;
    border-radius: 50px;
    border: none;
    }
  </style>
  