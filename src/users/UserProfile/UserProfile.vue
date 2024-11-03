<script>
  import {ref} from "vue";
  import {InputText} from "primevue/inputtext";
  import {Password} from "primevue/password";
  import {Button} from "primevue/button";
  import {Avatar} from "primevue/avatar";

  export default {
    components: {
      InputText, 
      Password,
      Button,
      Avatar
    },
    setup() {
      const name=ref('');
      const email=ref('');
      const password=ref('');
      const plan=ref('');
      const account=ref('');

      const deleteAccount=()=>{
        name.value='';
        email.value='';
        password.value='';
        plan.value='';
        account.value='';
      };

      return {
        name,
        email,
        password,
        plan,
        account,
        deleteAccount
      };
    }
  };
</script>

<template>
  <div class="profile-container">
    <div class="profile-card">
      <h2>My Profile</h2>
      <div class="profile-details">
        <div class="profile-info">
          <p><strong>Name:</strong><InputText v-model="name"/></p>
          <p><strong>Email:</strong><InputText v-model="email"/></p>
          <p><strong>Password:</strong><Password v-model="password" feedback="false" /></p>
          <p><strong>Plan:</strong><InputText v-model="plan"/></p>
          <p><strong>Account:</strong><InputText v-model="account"/></p>
          <Button label="Delete Accoount" class="p-button-danger" @click="deleteAccount"/>
        </div>
        <div class="workspace">
          <i class="pi pi-cog"></i>
          <span>My Workspace</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .profile-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to bottom, white, #7960F2);
  }
  .profile-card {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    width: 400px;
  }
  .profile-details {
    display: flex;
    justify-content: space-between;
  }
  .profile-info {
    flex: 1;
  }
  .profile-avatar {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .workspace {
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }
  .workspace i {
    margin-right: 0.5rem;
  }
</style>
