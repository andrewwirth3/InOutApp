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

        <Label class="drawer-item" text="Item 1"/>
        <Label class="drawer-item" text="Item 2"/>
        <Label class="drawer-item" text="Item 3"/>
      </StackLayout>

      <GridLayout ~mainContent columns="*" rows="*, auto">
        <StackLayout row="0">
          <Label class="message" :text="msg" col="0" row="0"/>
        </StackLayout>

        <BottomNavigation
          @tabSelected="onBottomNavigationTabSelected"
          :tabs="tabs"
          row="1"
          :selectedTabIndex="currentTabIndex"
        />
      </GridLayout>
    </RadSideDrawer>
  </Page>
</template>

<script lang="ts">
import {
  BottomNavigation,
  BottomNavigationTab,
  OnTabSelectedEventData
} from "nativescript-bottom-navigation";
import UserApi from '../api/user';

export default {
  data() {
    return {
      currentTabIndex: 1,
      tabs: [
        new BottomNavigationTab("Home", "ic_home"),
        new BottomNavigationTab("History", "ic_history"),
        new BottomNavigationTab("Settings", "ic_settings")
      ]
    };
  },
  computed: {
    msg() {
      return `Current Index = ${this.currentTabIndex}`;
    }
  },
  methods: {
    onBottomNavigationTabSelected(args: OnTabSelectedEventData) {
      this.currentTabIndex = args.newIndex;
    }
  }
};
</script>

<style scoped>
</style>
