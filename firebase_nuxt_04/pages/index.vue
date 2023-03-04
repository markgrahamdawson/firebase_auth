<template>
  <div>
    <div class="container">
      <label for="psw"><b>First Name</b></label>
      <input v-model="firstName" type="text" placeholder="Enter First Name" name="fname" required>

      <label for="lname"><b>Last Name</b></label>
      <input v-model="lastName" type="text" placeholder="Enter Last Name" name="lname" required>

      <label for="uname"><b>Email</b></label>
      <input v-model="email" type="text" placeholder="Enter Email" name="email" required>

      <label for="psw"><b>Password</b></label>
      <input v-model="password" type="password" placeholder="Enter Password" name="psw" required>

      <button @click="authStore.createUser(email, password, firstName, lastName)" >Sign up</button>
      <p>You are logged in as {{ credentials?.user?.email }}</p>
      <p>with uid {{ credentials?.user?.uid }}</p>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useAuthStore } from '~~/stores/authStore'

const authStore = useAuthStore()
const { credentials } = storeToRefs(useAuthStore())

const email = ref('')
const password = ref('')
const firstName = ref('')
const lasttName = ref('')
</script>

<style> 
/* Full-width inputs */
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

/* Add padding and margin to container */
.container {
  margin: auto;
  margin-top: 10%;
  padding: 16px;
  width: 50%;
}
</style>