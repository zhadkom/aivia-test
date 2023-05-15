<template>
  <v-container fluid>
    <v-card class="mx-auto" max-width="500">
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="login">
          <v-text-field
              v-model="userEmail"
              :error="!!emailErrors.length"
              label="Email"
              required
              type="email"
          ></v-text-field>
          <ul v-if="emailErrors.length">
            <li v-for="(error, index) in emailErrors" :key="index">
              {{ error.$message }}
            </li>
          </ul>
          <v-text-field
              v-model="password"
              :error="!!passwordErrors.length"
              label="Password"
              required
              type="password"
          ></v-text-field>
          <ul v-if="passwordErrors.length">
            <li v-for="(error, index) in passwordErrors" :key="index">
              {{ error.$message }}
            </li>
          </ul>
          <v-card-actions>
            <v-btn color="primary" type="submit">Login</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import router from "../../router/index.js";

export default {
  setup() {
    const userEmail = ref('')
    const password = ref('')

    const rules = {
      userEmail: { required, email },
      password: { required, minLength: minLength(6) }
    }

    const v$ = useVuelidate(rules, { userEmail, password })

    const emailErrors = ref('')
    const passwordErrors = ref('')

    const login = async () => {
      v$.value.$touch()
      const isFormCorrect = await v$.value.$validate()

      if (isFormCorrect) {
        router.push('/game')
      } else {
        emailErrors.value = v$.value.userEmail.$errors
        passwordErrors.value = v$.value.password.$errors
      }
    }

    return {
      userEmail,
      password,
      emailErrors,
      passwordErrors,
      login
    }
  }
}
</script>

<style scoped>
ul li {
  color: red;
}
</style>