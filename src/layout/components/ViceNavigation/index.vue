<template>
    <v-list dense>
        <template v-for="item in route.children">
            <v-list-group
                v-if="item.children"
                :key="item.path"
                v-model="item.model"
                :prepend-icon="item.model ? item.meta.icon : item['icon-alt']"
                append-icon=""
            >
                <template v-slot:activator>
                <v-list-item-content>
                    <v-list-item-title>
                    {{ item.meta.title }}
                    </v-list-item-title>
                </v-list-item-content>
                </template>
                <v-list-item
                v-for="(child, i) in item.children"
                :key="i"
                link
                >
                <v-list-item-action v-if="child.icon">
                    <v-icon>{{ child.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                    {{ child.text }}
                    </v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list-group>
            <v-list-item
                v-else
                :key="item.path"
                :to="resolvePath(item.path)"
                link
            >
                <v-list-item-action>
                <svg-icon large :icon-class="item.meta.icon" width="1em" height="1em" />
                </v-list-item-action>
                <v-list-item-content>
                <v-list-item-title>
                    {{$t(item.meta.title)}}
                </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </template>
    </v-list>
</template>
<script>
import path from 'path'
export default {
    name:"ViceNavigation",
    props: {
        route: {
            type: Object,
            default: function() {
                return  {
                    path: '/base',
                    redirect: '/base/index',
                    meta: {
                        title: 'Base',
                        icon: 'mdi-home-floor-b',
                    },
                    children: [
                        {
                            path: 'index',
                            meta: {title: 'Base', icon: 'mdi-home-floor-b'},
                        },
                        {
                            path: 'details',
                            meta: {title: 'Details', icon: 'mdi-details'},
                        }
                    ]
                }
            }
        },
    },
    data:function(){
        return {
        }
    },
    methods:{
        resolvePath(vpath) {
            return path.resolve(this.route.path, vpath)
        }
    }
}
</script>