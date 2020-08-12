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
        <SelectLanguge></SelectLanguge>
        <Settings></Settings>
        <AvatarMenu></AvatarMenu>
        <v-app-bar-nav-icon v-if="currtagroute" @click.stop="drawerRight = !drawerRight"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-main>
            <div class="subtitle">
                <Breadcrumbs></Breadcrumbs>
            </div>
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
import {TopNavigation,ViceNavigation,AvatarMenu,SelectLanguge,Settings,Breadcrumbs} from "./components"
import { mapGetters } from 'vuex'
export default {
    name:"Layout",
    components:{
        TopNavigation,
        ViceNavigation,
        AvatarMenu,
        SelectLanguge,
        Settings,
        Breadcrumbs,
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

<style lang="scss" scoped>
    .subtitle{
        width: 100%;
        height: 50px;
        background-color: #EEEEEE;
    }
</style>