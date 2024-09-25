<script setup>
</script>

<template>
  <div class="pv-card flex flex-wrap">
    <pv-panel header="My Workspace">
      <div class="flex items-center gap-2">
        <pv-avatar image="/assets/img/userPicture.jpeg" size="large" shape="circle" />
      </div>
      <div class="flex align-items-start gap-1">
        <p> Name: Consultant Name </p>
        <p> Schedule: W-F 9am - 3pm </p>
        <p> Reviews: <i class="pi pi-star-fill"/> <i class="pi pi-star-fill"/> <i class="pi pi-star-fill"/> <i class="pi pi-star-half-fill"/></p>
      </div>
      <pv-button label="Message" icon="pi pi-envelope" />
    </pv-panel>
  </div>
</template>

<style scoped>
</style>