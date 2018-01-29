<template>
  <div>
    <div>App vue!</div>
    <button @click="generateLow()">Generate Low</button>
    <button @click="generateMedium()">Generate Medium</button>
    <button @click="generateHigh()">Generate High</button>
    <button @click="clear()">Clear</button>
    <div v-for="message in messages" :key="message.id">
        <MessageComponent :message="message" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import MessageComponent from "./Message.vue";
import { Data, dataGenerator, LOW, MEDIUM, HIGH } from "../../common";

@Component({
  components: {
    MessageComponent
  }
})
export default class AppComponent extends Vue {
  public messages: Data[] = [];

  public generateLow(): void {
    this.messages = dataGenerator(LOW);
  }

  public generateMedium(): void {
    this.messages = dataGenerator(MEDIUM);
  }

  public generateHigh(): void {
    this.messages = dataGenerator(HIGH);
  }

  public clear(): void {
    this.messages = [];
  }
}
</script>
