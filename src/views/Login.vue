<template>
  <div class="login">
    <h2>Sign In</h2>
    <input
      type="text"
      placeholder="Email"
    /> <br />
    <input
      type="password"
      placeholder="Password"
    /> <br />
    <button>Connection</button>
    <p>You don't have an accoutn? You can create one</p>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
.login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 20%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
