<template>
    <v-card 
        class="elevation-12"
    >
        <v-toolbar
        color="primary"
        dark
        flat
        >
            <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
            <v-form>
               <v-text-field
                    v-model="form.email"
                    prepend-icon="mdi-email"
                    clearable
                    required
                ></v-text-field>
                <v-text-field
                    v-model="form.password"
                    prepend-icon="mdi-lock-question"
                    :append-icon="showPwd ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="showPwd ? 'text' : 'password'"
                    @click:append="showPwd = !showPwd"
                    required
                ></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-grey">Login</v-btn>
            <v-btn color="primary">Login</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>

export default {
    name : "Login",
    components:{
        
    },
    data(){
        return {
            showPwd:false,
            form:{
                email:"",
                password:"",
            }
        }
    }
}
</script>

<style>

</style>