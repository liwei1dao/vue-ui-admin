<template>
    <v-row>
      <v-col xl="3" lg="3" md="4" sm="6" xs="10"> 
        <v-card>
          <v-card-title>Login</v-card-title>
              <v-container>
                <v-row flex="main:center cross:center">
                    <v-col cols="10">
                      <v-text-field dense>
                      <svgicon slot="prepend" iconClass="people"></svgicon>
                      </v-text-field>
                    </v-col>
                </v-row>
              </v-container>
        </v-card>
      </v-col>
    </v-row>
</template>

<script>
export default {
  name:"Login",
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">

</style>