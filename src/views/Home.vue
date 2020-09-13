<template>
 <div class="home">
  <v-container>
    <v-text-field append-icon="mdi-magnify" label="Busca un pajarito" single-line hide-details></v-text-field>
  </v-container>
    <v-row>      
      <v-col v-for="bird in birds" :key="bird.uid" cols="4">
        <v-card class="mx-auto">     
          <v-img :src="bird.images.main" height="200px"></v-img>
          <v-card-title>{{ bird.name.spanish }}</v-card-title>        
          <v-card-subtitle>Nombre cientifico: {{bird.name.latin}}</v-card-subtitle>
          <v-card-actions>
            <v-btn color="teal darken-1" @click="display(url)">Ver detalles</v-btn>
            <v-spacer></v-spacer>       
          </v-card-actions>     
        </v-card>
        <info-bird></info-bird>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import InfoBirds from '../components/InfoBirds'

export default {
  name: 'Home',
  data() {
    return {
      dialog: false
    }
  },
  components: {
    InfoBirds
  },
  methods: {
    ...mapActions(['getBirds', 'getBird']),
    display(url) {
      this.getBird(url)
    }
  },
  computed: {
    ...mapState(['birds', 'bird'])
  },
  created() {
    this.getBirds()
  }
}
</script>
