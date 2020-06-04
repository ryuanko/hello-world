<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/list">List</router-link> |
      <router-link to="/create">Create</router-link> |
      <router-link to="/detail">Detail</router-link> |
      <router-link to="/emit">Emit</router-link> |
      <router-link to="/bus">Bus</router-link> |
      <router-link to="/slot">Slot</router-link> |
      <router-link to="/store">Store</router-link> |
      <router-link to="/etc">Etc</router-link>

    </div>
    <router-view/>
    <div v-if="isShow" class="dim"></div>
  </div>
</template>
<script>
export default {
	name: '',
	data () {
		return {
      isShow: false
    }
	},
	methods: {
    showHide (flag) {
      this.isShow = flag
    }
  },
  mounted () {
    this.$bus.$on('showHide', (flag) => {
      this.showHide(flag)
    })
  },
  beforeDestroy () {
    this.$bus.$off('showHide')
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.dim {
  position: absolute;
  top: 30%;
  left: 45%;
  height: 200px;
  width: 200px;
  background: #42b983;
}
</style>
