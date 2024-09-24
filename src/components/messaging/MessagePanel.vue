<template>
  <div class="message-panel">
    <div class="side-panel">
      <h2>Messages</h2>
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
    <div class="main-panel">
      <div class="message-header">
        <p>{{ activeChat.name }}</p>
      </div>
      <div class="message-content">
        <p v-if="messages.length === 0">This chat is empty</p>
        <div v-for="message in messages" :key="message.id" class="message">
          <p>{{ message.text }}</p>
        </div>
      </div>
      <div class="message-input">
        <i class="pi pi-paperclip" @click="toggleMenu"></i>
        <div v-if="showMenu" class="menu">
          <div class="menu-item" @click="attachFile('image/*')">
            <i class="pi pi-image"></i>
            <span>Photos and Videos</span>
          </div>
          <div class="menu-item" @click="attachFile('*/*')">
            <i class="pi pi-file"></i>
            <span>Document</span>
          </div>
        </div>
        <input type="text" placeholder="Send a message..." v-model="newMessage" @keyup.enter="sendMessage" />
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
      activeChat: { id: null, name: '' }, // Añadimos la estructura del chat activo
      contacts: [
        { id: 1, name: 'Fidel', avatar: 'src/assets/images/avatar1.jpeg', messages: [{ id: 1, text: 'Hello Fidel!' }] },
        { id: 2, name: 'Monica', avatar: 'src/assets/images/avatar2.jpg', messages: [{ id: 1, text: 'Hi Monica!' }] },
        { id: 3, name: 'Silvia', avatar: 'src/assets/images/avatar3.png', messages: [{ id: 1, text: 'Hey Silvia!' }] },
      ],
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.activeChat.messages.push({ id: this.messages.length + 1, text: this.newMessage });
        this.newMessage = '';

        // Desplazar al último mensaje
        this.$nextTick(() => {
          const messageContent = document.querySelector('.message-content');
          messageContent.scrollTop = messageContent.scrollHeight; // Desplazar hacia abajo
        });

      }
    },
    attachFile(type) {
      const input = document.createElement('input');
      input.type = 'file';

      // Ajustar el tipo de archivo según la opción seleccionada
      if (type === 'document') {
        input.accept = '.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx';
      } else if (type === 'image') {
        input.accept = 'image/*,video/*';
      }

      input.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
          this.messages.push({
            id: this.messages.length + 1,
            file: `Archivo enviado: ${file.name}`,
          });

          // Desplazar al último mensaje
          this.$nextTick(() => {
            const messageContent = document.querySelector('.message-content');
            messageContent.scrollTop = messageContent.scrollHeight;
          });
        }
      };
      input.click();
      this.showMenu = false;
    },
    selectChat(name) {
      this.activeChat = name;
      this.messages = [];
    },
    openChat(contact) {
      this.activeChat = contact; // Cambia el chat activo al contacto seleccionado
      this.messages = contact.messages; // Carga los mensajes del contacto seleccionado
    }
  },
};
</script>

<style scoped>
.message-panel {
  display: flex;
  border: 1px solid #ccc;
  height: 100vh;
  width: 100%;
}

.side-panel {
  width: 30%;
  background-color: #f5f5f5;
  border-right: 1px solid #ccc;
  padding: 10px;
}

.contact {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}

.contact:hover {
  background-color: #ececec;
}

.contact img.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.main-panel {
  width: 70%;
  display: flex;
  flex-direction: column;
}

.message-header {
  background-color: #6a1b9a;
  color: white;
  padding: 10px;
  text-align: center;
}

.message-content {
  flex-grow: 1;
  padding: 10px;
  background-color: #fff;
  overflow-y: auto;
  max-height: calc(100vh - 100px);
}

.message-content p {
  color: grey;
  margin-top: 10px;
  margin-left: 10px;
  overflow-y: auto;
}

.message-input {
  display: flex;
  align-items: center;
  padding: 10px;
  position: sticky;
  bottom: 0;
  background-color: #fff;
  z-index: 10;
}

.message-input i {
  font-size: 24px;
  color: grey;
  margin-right: 10px;
  cursor: pointer;
}

.message-input .menu {
  position: absolute;
  top: -80px;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  flex-direction: column;
  z-index: 1;
}

.message-input .menu-item {
  display: flex;
  align-items: center;
  padding: 5px 10px;
  cursor: pointer;
}

.message-input .menu-item i {
  margin-right: 10px;
}

.message-input .menu-item:hover {
  background-color: #f0f0f0;
}

.message-input input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>

