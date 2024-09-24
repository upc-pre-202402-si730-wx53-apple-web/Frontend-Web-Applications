<template>
  <div class="chat-container">
    <!-- New Gray Bar -->
    <div class="top-bar">
      <div class="left-icons">
        <div class="left-icons2">
          <i class="pi pi-globe" ></i>
        </div>
        <select v-model="selectedLanguage" class="custom-select">
          <option value="EN">EN</option>
          <option value="ES">ES</option>
        </select>
        <div class="left-icons3">
          <i class="pi pi-bell" ></i>
        </div>
      </div>
      <div class="right-text">
        <h3>Log out</h3> <br>
        <h3>Profile</h3>
      </div>
    </div>

    <!-- Sidebar for Messages -->
    <div class="sidebar">
      <h2>Messages</h2>
      <button class="case-history">
        <i class="pi pi-folder"></i> Case history
      </button>
      <div class="contact-list">
        <div
            class="contact"
            v-for="contact in contacts"
            :key="contact.id"
            @click="openChat(contact)"
        >
          <img :src="contact.avatar" alt="Avatar" class="avatar" />
          <p>{{ contact.name }}</p>
        </div>
      </div>
    </div>

    <!-- Main Chat Area -->
    <div class="main-chat">
      <!-- Chat Header with Icons -->
      <div class="chat-header">
        <div class="header-icons">
          <i class="pi pi-arrow-left" @click="goBack"></i> <br />
          <p>{{ activeChat.name }}</p>
        </div>
      </div>

      <!-- Chat Messages -->
      <div class="chat-content">
        <p v-if="messages.length === 0">This chat is empty</p>
        <div v-for="message in messages" :key="message.id" class="message">
          <p>{{ message.text }}</p>
        </div>
      </div>

      <!-- Chat Input -->
      <div class="chat-input">
        <i
            class="pi pi-paperclip"
            @click="toggleMenu"
            :class="{ 'rotate': showMenu }"
            ref="paperclip"
        ></i>
        <input
            type="text"
            placeholder="Write your message"
            v-model="newMessage"
            @keyup.enter="sendMessage"
        />

        <!-- Menú para adjuntar archivos -->
        <div v-if="showMenu" class="menu menu-active" ref="menu">
          <div class="menu-item" @click="triggerFileInput('image/*')">
            <i class="pi pi-image"></i>
            <span>Images</span>
          </div>
          <div class="menu-item" @click="triggerFileInput('*/*')">
            <i class="pi pi-file"></i>
            <span>Document</span>
          </div>
          <input
              type="file"
              ref="fileInput"
              @change="handleFileUpload"
              style="display: none"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'primeicons/primeicons.css';

export default {
  data() {
    return {
      newMessage: '',
      messages: [],
      activeChat: {id: null, name: ''},
      contacts: [
        { id: 1, name: 'Fidel', avatar: 'src/assets/images/avatar1.jpeg', messages: [{id: 1, text: 'Hello Fidel!'}], },
        { id: 2, name: 'Monica', avatar: 'src/assets/images/avatar2.jpg', messages: [{id: 1, text: 'Hi Monica!'}], },
        { id: 3, name: 'Silvia', avatar: 'src/assets/images/avatar3.png', messages: [{id: 1, text: 'Hey Silvia!'}], },
      ],
      showMenu: false,
      selectedLanguage: 'EN',
      fileType: '', // Para almacenar el tipo de archivo que se seleccionará
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    // Método para abrir el selector de archivos
    triggerFileInput(type) {
      this.fileType = type; // Guarda el tipo de archivo
      this.$refs.fileInput.accept = type; // Define los tipos de archivos aceptados
      this.$refs.fileInput.click(); // Activa el input
    },
    /* Método para manejar la subida de archivos */
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        console.log(`File selected: ${file.name}, Type: ${file.type}`);
        this.messages.push({
          id: this.messages.length + 1,
          text: `File attached: ${file.name}`,
        });
      }
    },
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.activeChat.messages.push({
          id: this.messages.length + 1,
          text: this.newMessage,
        });
        this.newMessage = '';
        this.$nextTick(() => {
          const chatContent = document.querySelector('.chat-content');
          chatContent.scrollTop = chatContent.scrollHeight;
        });
      }
    },
    openChat(contact) {
      this.activeChat = contact; // Set active chat
      this.messages = contact.messages; // Load messages of the selected contact
    },
    goBack() {
      // Logic for going back from chat to contact list
    },
    closeMenu(event) {
      // Si el clic no ocurre dentro del menú o en el ícono, cierra el menú
      const menu = this.$refs.menu;
      const paperclip = this.$refs.paperclip;
      if (!menu.contains(event.target) && !paperclip.contains(event.target)) {
        this.showMenu = false;
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.closeMenu);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.closeMenu);
  },
};

</script>
<style scoped>
.chat-container {
  display: flex;
  height: 97vh;
  width: 100%;
  background: linear-gradient(180deg, #e0e0e0, #d1c4e9);
}

/* New Top Gray Bar */
.top-bar {
  width: 100%;
  background-color: #f0f0f0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed; /* Make sure it stays on top */
  top: 0;
  z-index: 10;
  left: 2px;
}

.left-icons {
  display: flex;
  align-items: center;
  gap: 10px; /* Espacio entre los elementos */
}

.left-icons select  {
  background: none;
  border: none;
  font-size: 16px;
  color: inherit;
  appearance: none; /* Oculta el estilo nativo */
  cursor: pointer;
  margin-left: 1020px;
  position: absolute;
}

.left-icons2 i {
  margin-left: 1000px;
  position: absolute;
  top: 22px;
  cursor: pointer;
}

.left-icons3 {
  margin-left: 40px;
  cursor: pointer;
}

.left-icons select:focus {
  outline: none; /* Elimina el borde al hacer focus */
}

.right-text {
  display: flex;
  gap: 20px;
  margin-right: 40px;
  cursor: pointer;
}

.right-text h3 {
  margin: 0; /* Elimina márgenes predeterminados */

}

/* Sidebar Styles */
.sidebar {
  width: 25%;
  background-color: #f7f7f7;
  border-right: 1px solid #000;
  padding: 20px;
  margin-top: 34px; /* Adjust for the gray bar */
}

.sidebar h2 {
  font-size: 30px;
  margin-bottom: 20px;
  color: #000;
}

.case-history {
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  background-color: darkslateblue;
  color: white;
  border: none;
  padding: 15px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bolder;
  font-size: 16px;
}

.case-history i {
  margin-right: 10px;
  font-size: 30px;
}

.contact-list .contact {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.contact-list .contact:hover {
  background-color: #ececec;
}

.contact img.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

/* Main Chat Styles */
.main-chat {
  width: 75%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-top: 70px; /* Adjust for the gray bar */
}

/* Chat Header */
.chat-header {
  background-color: #9575cd;
  color: white;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -20px;
}

.header-icons {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header-icons i {
  font-size: 24px;
  cursor: pointer;
}

.header-icons p {
  font-size: 20px;
  text-align: center;
  margin-left: 20px;
}

/* Chat Messages */
.chat-content {
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  background-color: #f0f0f0;
}

.message {
  margin-bottom: 15px;
  font-size: 14px;
  color: #000;
}

.chat-content p {
  color: grey;
  margin-left: 10px;
}

/* Chat Input */
.chat-input {
  display: flex;
  align-items: center;
  padding: 5px;
  position: relative;
  background: #f0f0f0;
}

.chat-input input {
  flex-grow: 1;
  /* Añade espacio a la izquierda para el icono */
  border-radius: 10px;
  border: 1px solid darkgrey;
  /* Espacio suficiente para no solapar el ícono */
  padding: 10px 10px 10px 50px;
  background: ghostwhite;
}

/* Asegúrate de que el ícono de la campana esté alineado con el selector */
.pi-bell {
  margin-left: 1030px; /* Empuja el ícono de la campana hacia la derecha */
}

.chat-input i {
  font-size: 24px;
  color: grey;
  position: absolute;
  left: 25px; /* Coloca el ícono en la parte izquierda */
  cursor: pointer;
  transition: transform 0.3s ease;
}

.chat-input i.rotate {
  transform: rotate(135deg);
}

.menu {
  position: absolute;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 150px;
  top: -72px; /* Ajusta la posición */
  left: 20px;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  opacity: 0;
  transform: translateY(20px); /* Empieza más abajo */
  display: none;
}

.menu-item {
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
}

.menu-item span {
  margin-left: 65px;
}

.menu-item i {
  padding-right: 5px;
}

.menu-item:hover {
  background-color: #f0f0f0;
}

.menu-active {
  opacity: 1;
  transform: translateY(0); /* Despliega el menú hacia la posición original */
  display: block;
}
</style>
