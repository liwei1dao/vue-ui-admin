<template>
    <v-app>
        <v-main>
            <v-row justify="start" class="topbar">
                <v-spacer></v-spacer>
                <SelectLanguge/>
            </v-row>
            <v-container
            class="fill-height"
            fluid
            >
                <v-row
                    align="center"
                    justify="center"
                >
                    <v-col
                        cols="12"
                        sm="8"
                        md="4"
                    >
                        <router-view></router-view>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import {SelectLanguge} from "./components"

export default {
    name:"LayoutN",
    components:{
        SelectLanguge
    }
}
</script>

<style>
    .topbar{
        width: 100%;
        padding: 10px;
    }
</style>