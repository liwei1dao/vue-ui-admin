<template>
    <v-row>
      <v-col xl="3" lg="3" md="4" sm="6" xs="10"> 
        <v-card>
          <v-card-title>Login</v-card-title>
              <v-container>
                <v-row flex="main:center cross:center">
                    <v-col cols="10">
                      <v-text-field dense>
                        <template slot="prepend">
                          <div class="login-from-input-icon">
                            <svgicon iconClass="user" ></svgicon>
                          </div>
                        </template>
                      </v-text-field>

                      <v-text-field :append-icon="showPwd ? 'mdi-eye-off' : 'mdi-eye'" :type="showPwd ? 'text' : 'password'" @click:append="showPwd = !showPwd" dense>
                        <template slot="prepend">
                          <div class="login-from-input-icon">
                            <svgicon iconClass="password" ></svgicon>
                          </div>
                        </template>
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
      showPwd:false,
    }
  }
}
</script>

<style lang="scss">
  .login-from-input-icon{
    width: 50px;
    height: 100%;
    text-align: center;
  }
</style>