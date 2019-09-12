<template>
  <div class="login">
    <h2>Sign In</h2>
    <input
      type="text"
      v-model="email"
      placeholder="Email"
    /> <br />
    <input
      type="password"
      v-model="password"
      placeholder="Password"
    /> <br />
    <button @click="login">Connection</button>
    <p>You don't have an accoutn? You can <router-link to="/sign-up">create one</router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          alert('Well done! You are now connected')
        },
        (err) => {
          alert('Opps. ' + err.message)
        }
      )
      // this.$router.replace('home')
    }
  }
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
