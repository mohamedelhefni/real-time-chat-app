<template>
  <v-container class="main-container">
    <v-sheet color="white " elevation="5">
      <v-toolbar color="success white--text">
        <v-toolbar-title>The Chat</v-toolbar-title>
      </v-toolbar>
      <v-sheet min-height="300px" color="white">
        <v-layout class="theChat" row>
          <v-flex xs10 offset-xs1 class="messages-area" v-chat-scroll="{always:false, smooth:true}">
            <div v-if="messages.length == 0">
              <p class="caption grey--text">No Messages Yet</p>
            </div>
            <v-list three-line class="messages">
              <v-list-item class="my-1" v-for="(message,index) in messages" :key="index">
                <v-list-item-avatar>
                  <v-img src="https://www.w3schools.com/w3images/avatar2.png"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ message.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ message.message }}</v-list-item-subtitle>
                </v-list-item-content>
                <span class="grey--text">{{ message.timestamp }}</span>
              </v-list-item>
            </v-list>
          </v-flex>
          <v-flex class="mt-5 themessagecreator" xs10 offset-xs1>
            <CreateMessage :name="name" />
          </v-flex>
        </v-layout>
      </v-sheet>
    </v-sheet>
  </v-container>
</template>

<script>
import CreateMessage from "@/components/createmessage.vue";
import fb from "@/firebase/init";
import moment from "moment";
export default {
  name: "chat",
  components: { CreateMessage },
  props: ["name", "avatar"],
  data() {
    return {
      messages: []
    };
  },
  created() {
    let ref = fb.collection("messages").orderBy("timestamp");
    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if ((change.type = "added")) {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            message: doc.data().message,
            timestamp: moment(doc.data().timestamp).format("LTS")
          });
        }
      });
    });
  }
};
</script>


<style>
.messages-area {
  max-height: 400px;
  overflow-y: scroll;
}
</style>
