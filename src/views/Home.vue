<template>
 <div class="home">
  <v-container>
    <v-text-field append-icon="mdi-magnify" label="Busca un pajarito" single-line hide-details></v-text-field>
  </v-container>
    <v-row>      
      <v-col v-for="bird in birds" :key="bird.uid" cols="3">
        <v-card class="mx-auto">     
          <v-img :src="bird.images.main" height="300px"></v-img>
          <v-card-title>{{ bird.name.spanish }}</v-card-title>        
          <v-card-subtitle>Nombre cientifico: {{bird.name.latin}}</v-card-subtitle>
          <v-card-actions>
            <v-btn color="teal lighten-3" @click="display(bird._links.self)">Ver detalles</v-btn>
            <v-spacer></v-spacer>       
          </v-card-actions>     
        </v-card>
      </v-col>
    </v-row>
    <info-birds :bird='bird' @close-dialog='dialog = false' :dialog="dialog"></info-birds>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import InfoBirds from '../components/InfoBirds'

export default {
  name: 'Home',
  data() {
    return {
      dialog: false,
    }
  },
  components: {
    InfoBirds
  },
  methods: {
    ...mapActions(['getBirds', 'getBird']),
    display(url) {
      this.getBird(url)
      this.dialog = true
    },
  },
  computed: {
    ...mapState(['birds', 'bird'])
  },
  created() {
    this.getBirds()
  }
}
</script>
