<template>
  <div class="profile-container">
    <div class="profile-card">
      <h2 class="title">Welcome to DebtGo</h2>
      <p class="subtitle">Lorem ipsum dolor</p>
      <h3>Register</h3>

      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <input type="text" id="name" v-model="name" placeholder="Name" />
        </div>

        <div class="form-group">
          <input type="email" id="email" v-model="email" placeholder="Email" />
        </div>

        <!-- Campo para el rol -->
        <div class="form-group">
          <select id="role" v-model="role">
            <option disabled value="">Role</option>
            <option value="Consultor Financiero">Consultor Financiero</option>
            <option value="Emprendedor">Emprendedor</option>
          </select>
        </div>

        <!-- Input de contraseña con ícono de ojo -->
        <div class="form-group password-field">
          <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="password"
              placeholder="Password"
          />
          <span class="toggle-password" @click="togglePassword">
            <i :class="showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'"></i>
          </span>
        </div>

        <ul class="password-criteria">
          <li>At least one number</li>
          <li>At least 8 characters</li>
        </ul>

        <div class="form-group terms">
          <input type="checkbox" id="terms" v-model="acceptedTerms" />
          <label for="terms">
            I accept the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
          </label>
        </div>
        <button type="submit" :disabled="!acceptedTerms" class="submit-btn">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  data() {
    return {
      name: "",
      email: "",
      role: "", // Nuevo campo para el rol
      password: "",
      showPassword: false, // Para alternar la visibilidad de la contraseña
      acceptedTerms: false,
    };
  },
  methods: {
    onSubmit() {
      if (this.acceptedTerms) {
        console.log({
          name: this.name,
          email: this.email,
          role: this.role,
          password: this.password,
        });
        // Aquí puedes enviar el formulario
      } else {
        alert("You must accept the terms and conditions.");
      }
    },
    togglePassword() {
      this.showPassword = !this.showPassword; // Alterna la visibilidad
    },
  },
};
</script>

<style scoped>
/* Contenedor general */
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom, #f3f4f6, #7960F2);
}

/* Tarjeta de perfil */
.profile-card {
  background-color: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  max-width: 650px;
  width: 100%;
  text-align: center;
}

.profile-card h3 {
  margin-right: 490px;
}

.title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
}

/* Formularios */
form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
  width: 95%;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

input[type="text"],
input[type="email"],
input[type="password"],
select {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  transition: border-color 0.3s ease;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus,
select:focus {
  border-color: #7960F2;
  outline: none;
}

/* Criterios de contraseña */
.password-criteria {
  padding-left: 20px; /* Añade espacio para los bullets */
  margin-bottom: 1rem;
  text-align: left;
  color: #000;
  font-size: 0.9rem;
  list-style-type: disc; /* Asegura que los bullets sean visibles */
}

.password-criteria li {
  margin-bottom: 0.5rem;
}

/* Aceptación de términos */
.terms {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.terms label {
  margin-left: 0.5rem;
}

.terms a {
  color: #7960F2;
  text-decoration: none;
}

.terms a:hover {
  text-decoration: underline;
}

/* Campo de contraseña con ícono */
.password-field {
  position: relative;
}

.toggle-password {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
}

.fa-eye, .fa-eye-slash {
  font-size: 1.2rem;
}

/* Botón de envío */
.submit-btn {
  background-color: #7960F2;
  color: white;
  padding: 0.75rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #6749e8;
}

.submit-btn:disabled {
  background-color: #bbb;
  cursor: not-allowed;
}
</style>
