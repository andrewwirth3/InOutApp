<template>
  <Page>
    <ActionBar>
      <GridLayout width="100%" columns="auto, *">
        <Label text="MENU" @tap="$refs.drawer.nativeView.showDrawer()" col="0"/>
        <Label class="title" text="Welcome to NativeScript-Vue!" col="1"/>
      </GridLayout>
    </ActionBar>

    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent backgroundColor="#ffffff">
        <Label class="drawer-header" text="Drawer"/>

        <Label class="drawer-item far" :text="'fa-home' | fonticon"/>
        <Label class="drawer-item" text="Item 2"/>
        <Label class="drawer-item" text="Item 3"/>
      </StackLayout>

      <GridLayout ~mainContent columns="*" rows="*, auto">
        <StackLayout row="0">
          <Label class="message" :text="msg" col="0" row="0"/>
        </StackLayout>
      </GridLayout>
    </RadSideDrawer>
  </Page>
</template>

<script lang="ts">
import UserApi from "../api/user";

export default {
  data() {
    return {
      currentTabIndex: 1
    };
  },
  computed: {
    msg() {
      return `Current Index = ${this.currentTabIndex}`;
    }
  },
  mounted() {
    const api = new UserApi();
  }
};
</script>

<style scoped>
</style>
