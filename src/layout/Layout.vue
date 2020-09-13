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
        <div class="topnavigation">
            <TopNavigation :routes="routes"></TopNavigation>
        </div>

        <div class="topmenu">
            <v-toolbar-title style="pointer-events: auto;">{{appname}}</v-toolbar-title>
            <v-spacer>
            </v-spacer>
            <SelectLanguge style="pointer-events: auto;" ></SelectLanguge>
            <Settings style="pointer-events: auto;"></Settings>
            <AvatarMenu style="pointer-events: auto;"></AvatarMenu>

            <v-app-bar-nav-icon large style="pointer-events: auto; right:10px" v-if="currtagroute" @click.stop="drawerRight = !drawerRight"></v-app-bar-nav-icon>
        </div>
        </v-app-bar>

        <v-main>
            <v-row>
                <Breadcrumbs></Breadcrumbs>
                <v-spacer></v-spacer>
                <SearchBar></SearchBar>
            </v-row>
            <v-container>
                <transition name="fade-transform" mode="out-in">
                    <router-view></router-view>
                </transition>
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
import {TopNavigation,ViceNavigation,AvatarMenu,SelectLanguge,Settings,Breadcrumbs,SearchBar} from "./components"
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
        SearchBar,
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

<style lang="sass" scoped>
    .subtitle
        width: 100%
        height: 54px
        background-color: #EEEEEE
    .topnavigation
        width: 100%
        position: relative
        z-index:-100
        align-items: center
    .topmenu
        width: 100%
        position: absolute
        z-index:1
        display: flex
        pointer-events: none

</style>