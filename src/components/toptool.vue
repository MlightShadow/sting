<template>
  <div>
    <v-toolbar style="width: 100%;" height="40px;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>fel studio</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          <router-link to="/">home</router-link>
        </v-btn>
        <v-btn flat>
          <router-link to="/login">login</router-link>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://avatars0.githubusercontent.com/u/20414633?s=460&v=4" />
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>neo</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "toptool",
  data() {
    return {
      drawer: null,
      items: [
        { title: "home", icon: "dashboard" },
        { title: "login", icon: "question_answer" }
      ]
    };
  }
};
</script>

<style scoped>
.v-toolbar {
  position: fixed;
  top: 0px;
}
</style>