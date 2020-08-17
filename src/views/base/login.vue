<template>
    <v-card >
        <v-toolbar
        color="primary"
        flat
        >
            <v-toolbar-title>{{$t('common.login')}}</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
            <v-form>
                <v-row justify="center">
                   <v-col cols="10">
                        <v-text-field
                            v-model="form.email"
                            prepend-icon="mdi-email"
                            clearable
                        ></v-text-field>
                   </v-col>
                    <v-col cols="10">
                        <v-text-field
                            v-model="form.password"
                            prepend-icon="mdi-lock-question"
                            :append-icon="showPwd ? 'mdi-eye-off' : 'mdi-eye'"
                            :type="showPwd ? 'text' : 'password'"
                            @click:append="showPwd = !showPwd"
                            required
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="grey" to="/base/register" >{{$t('common.register')}}</v-btn>
            <v-btn color="primary" @click="handle_login">{{$t('common.login')}}</v-btn>
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
    },
    omputed: {

    },
    methods:{
        handle_login(){
            console.log("测试国际化脚本代码:",this.$t('common.login'))
            this.$router.push({ path:'/dashboard' })
        }
    }
}
</script>

<style>

</style>