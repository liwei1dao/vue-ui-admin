<template>
    <v-app>
        <v-navigation-drawer
            v-model="drawerRight"
            app
            clipped
            right
        >
        <ViceNavigation v-if="currtagroute" :route="currtagroute"></ViceNavigation>
        </v-navigation-drawer>

        <v-app-bar
            app
            clipped-right
            right
        >
        <v-toolbar-title>{{appname}}</v-toolbar-title>
        <v-spacer>
            <TopNavigation :routes="routes"></TopNavigation>
        </v-spacer>
        <AvatarMenu></AvatarMenu>
        <SelectLanguge></SelectLanguge>
        <v-app-bar-nav-icon v-if="currtagroute" @click.stop="drawerRight = !drawerRight"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-main>
            <v-container>
            <router-view></router-view>
            </v-container>
        </v-main>
        <v-footer
            app
            class="white--text"
        >
        <span>Vuetify</span>
        <v-spacer></v-spacer>
        </v-footer>
    </v-app>
</template>

<script>
import {TopNavigation,ViceNavigation,AvatarMenu,SelectLanguge} from "./components"
import { mapGetters } from 'vuex'
export default {
    name:"Layout",
    components:{
        TopNavigation,
        ViceNavigation,
        AvatarMenu,
        SelectLanguge,
    },
    computed: {
        ...mapGetters([
            'appname',
            'routes',
            'currtagroute',
        ]),
    },
    data: () => ({
        drawerRight: false,
    }),
}
</script>

<style>

</style>