<template>
  <div class="login">
    <v-container class="text-xs-center">
      <v-layout row wrap>
        <v-flex xs8 offset-xs2>
          <v-card max-width="600px" min-height="200px" class="text-xs-center">
            <v-toolbar color="black white--text">
              <v-toolbar-title>
                <span class="display-1">Login</span>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <form @submit.prevent="login">
                <v-text-field required v-model="name" color="success" label="name"></v-text-field>
              </form>
              <div v-if="errText">
                <v-alert type="error">{{ errText }}</v-alert>
              </div>
              <v-btn @click="login" color="success">submit</v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
export default {
  name: "login",
  data: () => {
    return {
      name: "",
      errText: null
    };
  },
  methods: {
    login() {
      if (this.name) {
        this.$router.push({ name: "chat", params: { name: this.name } });
      } else {
        this.errText = "Please Enter User First";
      }
    }
  }
};
</script>
