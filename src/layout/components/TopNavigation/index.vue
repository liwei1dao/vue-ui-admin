<template>
    <div>
        <v-tabs v-model="tabchange" background-color="transparent" centered icons-and-text>
            <v-tab v-for="route in routes" :key="route.path">
                {{$t(route.meta.title)}}
                <v-icon>{{route.meta.icon}}</v-icon>
            </v-tab>
        </v-tabs>
    </div>
</template>
<script>
export default {
    name : "TopNavigation",
    props: {
        routes: {
            type: Array,
            default: function() {
                return [
                    {
                        path:"/vide",
                        meta: {
                            title: 'Base',
                            icon: 'mdi-home-floor-b',
                        },
                    },
                    {
                        path:"/music",
                        meta: {
                            title: 'Base',
                            icon: 'mdi-home-floor-b',
                        },
                    },
                ]
            }
        },
    },
    watch: {
        tabchange: function (index) {
            this.$store.dispatch('router/setcurrtagroute',this.routes[index])
            this.$router.push({path:this.routes[index].path})
        },
    },
    data() {
        return {
            tabchange:0
        }
    },
    methods:{

    },

}
</script>