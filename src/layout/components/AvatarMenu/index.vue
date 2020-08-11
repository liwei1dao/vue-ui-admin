<template>
    <div>
       <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        offset-x
        offset-y
        >
        <template v-slot:activator="{ on, attrs }">
            <div class="menu-butt">
                <img
                    class="avatar-butt"
                    v-bind="attrs"
                    v-on="on"
                    :src="userinfo.headurl"
                    alt="John"
                >
            </div>
            
        </template>

        <v-card>
            <v-list>
            <v-list-item>
                <v-list-item-avatar>
                <img :src="userinfo.headurl" alt="John">
                </v-list-item-avatar>

                <v-list-item-content>
                <v-list-item-title>{{userinfo.nickname}}</v-list-item-title>
                <v-list-item-subtitle>{{userinfo.email}}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list>
                <v-list-item>
                    <v-list-item-action>
                    <v-btn text>{{$t('common.yourprofile')}}</v-btn>
                    </v-list-item-action>
                </v-list-item>
                <v-list-item>
                    <v-list-item-action>
                    <v-btn text @click="logout">{{$t('common.logout')}}</v-btn>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
        </v-card>
        </v-menu>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name : "AvatarMenu",
    props: {
        
    },
    computed: {
        ...mapGetters([
        'currtagroute',
        'userinfo'
        ]),
    },
    watch: {
        
    },
    data() {
        return {
            menu:false,
            tabchange:0
        }
    },
    methods:{
        logout(){
            this.$store.dispatch('user/logout')
                .then(() => {
                this.$router.push({ path:'/login' })
                })
                .catch((error) => {
                this.$message.error(error.message)
                }
            )
        }
    },

}
</script>

<style>
    .menu-butt{
      width: 56px;
      height: 48px;
      padding-right: 8px;
    }
    .avatar-butt{
        width: 48px;
        height: 48px;
        border-radius:48px;
    }

</style>