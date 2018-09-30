<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-media
            contain
            height="300px"
            src="https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
          >
            
          </v-card-media>
          <v-card-text>
            <h1 class="text--primary">loren10</h1>
            <p>kjhgjhgjhg jhgjjh gjhhjg jhghj hj gghjgh jgh</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="warning" flat>Edit</v-btn>
            <v-btn class="success">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>