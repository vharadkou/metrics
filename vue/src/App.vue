<template>
  <div>
    <div>App vue!</div>
    <button @click="generateLow()">Generate Low</button>
    <button @click="generateMedium()">Generate Medium</button>
    <button @click="generateHigh()">Generate High</button>
    <button @click="updateOne()">update 100</button>
    <button @click="updateTwo()">update 1000</button>
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

  public updateOne(): void {
    this.messages = this.messages.map(m => {
      if (m.id < 100) {
        m.text += "Updated";
      }

      return m;
    });
  }

  public updateTwo(): void {
    this.messages = this.messages.map(m => {
      if (m.id < 1000) {
        m.text += "Updated";
      }

      return m;
    });
  }

  public clear(): void {
    this.messages = [];
  }
}
</script>
