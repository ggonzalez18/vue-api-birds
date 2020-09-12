<template>
 <div class="home">
  <v-container>
    <v-text-field v-model="search" append-icon="mdi-magnify" label="Busca un producto" single-line hide-details></v-text-field>
  </v-container>
    <v-row>      
      <v-col v-for="product in filterList" :key="product.id" cols="4">
        <v-card class="mx-auto">     
          <v-img :src="product.image_link" height="200px"></v-img>
          <v-card-title>
          {{ product.name }}
          </v-card-title>        
          <v-card-subtitle> Precio: {{product.price}} </v-card-subtitle>
          <v-card-actions>
            <v-btn color="error">Agregar al carro</v-btn>
            <v-btn to="/products"  color="purple" text>Ver detalless</v-btn>
            <v-spacer></v-spacer>       
          </v-card-actions>     
        </v-card>  
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapActions}

export default {
  name: 'Home',
  components: {
  }
}
</script>
