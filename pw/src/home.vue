<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <div class="d-flex align-center bold">
        <span class="mr-2">Peter(Zhengyan) Lyu</span>

        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>

      <v-spacer></v-spacer>

      <v-btn to="/" text>
        <span class="mr-2">Home</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <welcome />
      <a
        href="https://github.com/imbalzy/imbalzy.github.io/blob/master/resumes/Zhengyan%20Lyu%20resume%202021%20summer%20intern.pdf"
        >resume</a
      >
    </v-main>
    <v-footer dark padless>
      <v-card flat tile class="lighten-1 white--text align-center">
        <v-card-text>
          <v-btn
            class="mx-4 white--text"
            icon
            href="https://www.linkedin.com/in/peter-zhengyan-lyu/"
          >
            <v-icon size="24px"> mdi-linkedin </v-icon>
          </v-btn>
          <v-btn
            class="mx-4 white--text"
            icon
            href="https://github.com/imbalzy"
          >
            <v-icon size="24px"> mdi-git </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Peter(Zhengyan) Lyu
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import welcome from "./view/welcome";
export default {
  name: "home",
  components: {
    // HelloWorld,
    welcome,
  },

  data: () => ({
    //
  }),
};
</script>
