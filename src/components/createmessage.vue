<template>
  <form @submit.prevent="createMessage">
    <v-layout row align-center>
      <v-flex xs11>
        <v-text-field color="success" label="Message" prepend-icon="message" v-model="message"></v-text-field>
      </v-flex>
      <v-flex xs1>
        <v-btn @click="createMessage" icon color="success">
          <v-icon>send</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <div v-if="errText">
      <v-alert type="error">{{ errText }}</v-alert>
    </div>
  </form>
</template>

<script>
import fb from "@/firebase/init";
export default {
  name: "createmessage",
  props: ["name"],
  data() {
    return {
      message: null,
      errText: null
    };
  },
  methods: {
    createMessage() {
      if (this.message) {
        fb.collection("messages")
          .add({
            message: this.message,
            name: this.name,
            timestamp: Date.now()
          })
          .catch(err => {
            console.log(err);
          });
        this.message = null;
        this.errText = null;
      } else {
        this.errText = "Please Enter Message";
      }
    }
  }
};
</script>
