<template>
<v-app>
  <v-app-bar app color="black" dark>
    <v-layout class="d-flex align-center bold" space-between>
      <div style="padding: 0 10px">
        <v-btn to="/" text>Home</v-btn>
      </div>
      <v-btn text v-for="item in menuItems" :key="item.name" :to="item.path">{{ item.name }}</v-btn>

      <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />-->
    </v-layout>

    <v-spacer></v-spacer>
  </v-app-bar>

  <v-main style="margin: 40px 40px 40px 40px;">
    <welcome v-if="$router.currentRoute.name=='home'" />
    <router-view />
  </v-main>
  <v-footer dark padless>
    <v-row justify="center" no-gutters>
      <v-card flat>
        <v-card-text>
          <v-btn class="mx-4 white--text" icon href="https://www.linkedin.com/in/peter-zhengyan-lyu/">
            <v-icon size="24px">mdi-linkedin</v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon href="https://github.com/imbalzy">
            <v-icon size="24px">mdi-github-circle</v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon href="mailto:zhengyan_lyu@brown.edu">
            <v-icon size="24px">mdi-email</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0 center" style="text-align: center">Peter(Zhengyan) Lyu</v-card-text>
      </v-card>
    </v-row>
  </v-footer>
</v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import welcome from "./view/welcome";
import routes from "@/router/router.js";

export default {
  name: "home",
  components: {
    // HelloWorld,
    welcome,
  },

  data: () => ({
    menuItems: routes[0].children,
    //
  }),
  created() {
    // console.log(this.$router.currentRoute);
  },
};
</script>

<style>
</style>
