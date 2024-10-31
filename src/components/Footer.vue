<template>
    <footer>
    <div class="footer__logos">
      
      <figure class="logo_facebook">
      <a href="https://www.facebook.com/"><img id="logo-1"  src="../assets/Logos/facebook.png" title="Facebook" alt="Facebook"></a>
      </figure>  

      <figure class="logo_instagram">
      <a href="https://www.instagram.com/"><img id="logo-2"  src="../assets/Logos/instagram.png" title="Instagram" alt="Instagram"></a>
      </figure>

      <figure class="logo_linkedin">
      <a href="https://www.linkedin.com/"><img id="logo-3" src="../assets/Logos/linkedin.png" title="Linkedin" alt="Linkedin"></a>
      </figure> 

      <figure class="logo_github">
      <a href="https://www.github.com/"><img id="logo-4"  src="../assets/Logos/github.png" title="Github" alt="Github"></a>
      </figure> 

      <figure class="logo_X">
      <a href="https://x.com/Accueil"><img id="logo-5"  src="../assets/Logos/X.png" title="X" alt="X"></a>
      </figure> 
    </div>
    <p>&copy; 2024 Your Name. All rights reserved.</p>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterVue',
  };
  </script>
  
  <style scoped>
  footer {
    text-align: center;
    padding: 5px;
    background: #050A30;
    color: #E7191F;
    position: fixed;
    width: 100%;
    bottom: 0;
    font-family: 'Saira-Stencil';
    font-size: 0.9em;
  }

  .footer__logos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 5px;
  }

  .logo_facebook {
    margin: 20px;
  }
  .logo_instagram {
    margin: 20px;
  }

  .logo_linkedin {
    margin: 20px;
  }

  .logo_github {
    margin: 20px;
  }

  .logo_X {
    margin: 20px;
  }


.logo_facebook img:hover {
    opacity: 0.5;
  }

.logo_instagram img:hover {
    opacity: 0.5;
  }
.logo_linkedin img:hover {
    opacity: 0.5;
  }

.logo_github img:hover {
    opacity: 0.5;
  }

.logo_X img:hover {
    opacity: 0.5;
  }
  </style>
  