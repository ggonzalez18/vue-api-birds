<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Descripción</span>
        </v-card-title>
        <v-img v-if="bird" :src="bird.map.image" max-heigth="500px"></v-img>
        <v-card-text v-if="bird"> {{ bird.iucn.description ? bird.iucn.description : bird.didyouknow}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="teal lighten-3" text @click="closeModal">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    dialog: Boolean,
    bird: Object
  },
  methods: {
    closeModal() {
    this.$emit('close-dialog')
    }
  }
}
</script>

<style>

</style>