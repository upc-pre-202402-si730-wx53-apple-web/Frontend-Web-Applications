<script>
export default {
  methods: {
    changeLanguage() {
      alert('Change language');
    }
  }
};
</script>

<template>
  <div class="toolbar">
    <div class="toolbar-right">
      <div class="toolbar-item" @click="changeLanguage">
        <i class="fas fa-globe"></i> EN <i class="fas fa-caret-down"></i>
      </div>
      <div class="toolbar-item">
        <i class="fas fa-bell"></i>
      </div>
      <div class="toolbar-item">
        Log in
      </div>
      <div class="toolbar-item">
        Profile
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
.toolbar {
  background-color: #d3d3d3;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
}

.toolbar-right {
  display: flex;
  align-items: center;
}

.toolbar-item {
  margin-left: 20px;
  color: #000;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.toolbar-item i {
  margin-right: 5px;
  font-size: 18px;
}

.toolbar-item:hover {
  color: #555;
}
</style>