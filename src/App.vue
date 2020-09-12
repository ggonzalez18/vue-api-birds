<template>
 <v-app>
  <v-container grid-list-xs>
    <v-app-bar app color="dark" dark>
      <v-toolbar-title></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" text>home</v-btn>
      <v-btn to="/products" text>Pájaros</v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>    
    <v-footer
        absolute
        class="font-weight-medium" color="indigo lighten-4">
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-footer>
   </v-container>
  </v-app> 
</template>

<script>


export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>
