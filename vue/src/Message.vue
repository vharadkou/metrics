<template>
  <div>
    <p>{{message.text}} Vue</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Data } from "../../common";

@Component
export default class MessageComponent extends Vue {
  @Prop() public message: Data;
}
</script>
