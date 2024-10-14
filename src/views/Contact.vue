<template>
    <div>
      <h2>Contact</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Full name:</label>
          <input type="text" id="Full name" v-model="form.name" placeholder="Full name">
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
          message: '',
          // confirmationMessage: ''
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
    h2 {
    margin: 0;
    font-size: 2em;
    color:#050A30;
    padding-top: 50px;
    font-family: 'Oswald-Bold';
  }

  form div {
    margin-bottom: 20px;
    padding-top: 15px;
    font-size: 1.5em;
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
    cursor: pointer;
    }

  </style>
  