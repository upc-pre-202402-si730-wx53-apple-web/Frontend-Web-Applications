<script setup>
</script>

<template>
  <pv-card style="width: 100%">
    <template #title> My Workspace</template>
    <template #content class="relative flex flex-wrap">
      <pv-avatar image="/img/userPicture.jpeg" size="large" shape="circle" />
      <p> Name: Consultant Name </p>
      <p> Schedule: W-F 9am - 3pm </p>
      <p> Reviews: <i class="pi pi-star-fill" /> <i class="pi pi-star-fill" /> <i class="pi pi-star-fill" /> <i
          class="pi pi-star-half-fill" /></p>
    </template>
    <template #footer>
      <div class="flex justify-content-end">
        <pv-button label="Message" icon="pi pi-envelope" />
      </div>
    </template>
  </pv-card>

  <div class="flex flex-row ">
    <pv-card class="flex m-2" style="width: 50%">
      <template #title> Services </template>
      <template #content>
        <div class="flex flex-wrap flex-column align-items-center">
          <pv-button label="Edit services" icon="pi pi-pencil" severity="secondary" style="margin-bottom: .5rem" />
          <pv-button label="Add new service" icon="pi pi-plus" severity="secondary" style="margin-bottom: .5rem" />
        </div>
      </template>
    </pv-card>
    <pv-card class="flex m-2" style="width: 50%"> >
      <template #title> Metrics </template>
      <template #content>
        <div class="flex flex-wrap flex-column align-items-center">
        </div>
      </template>
    </pv-card>
  </div>

</template>

<style scoped></style>
