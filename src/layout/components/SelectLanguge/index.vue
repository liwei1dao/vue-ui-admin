<template>
    <v-menu offset-y transition="scroll-x-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          fab
          color="#E0E0E0"
          width="48px"
          height="48px"
          v-bind="attrs"
          v-on="on"
        >
          <span class="slang-icon" :class="flagIconClass(currlanguage,true)"></span>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          color="primary"
          dark
          flat
          height="35px"
          >
            <v-toolbar-title>Select Languge</v-toolbar-title>
        </v-toolbar>
        <v-list>
          <v-list-item v-for="(item,index) in languge" :key="index" link
            @click="selectlanguge(item)"
          >
            <v-list-item-avatar  :class="flagIconClass(item.lang,true)"></v-list-item-avatar>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
</template>

<script>
import "flag-icon-css/css/flag-icon.css"
import relation from "./relation"
import { mapGetters } from 'vuex'
export default {
    name:"SelectLanguge",
    components:{
    },

    computed: {
      ...mapGetters([
        'currlanguage',
      ])
    },
    data () {
      return {
        languge: [
            { lang: 'zh' ,text:"中文"},
            { lang: 'en' ,text:"English"},
        ],
    }},
    methods:{
      flagIconClass:function (lang,squared) {
        return (
          (squared ? "flag-icon-squared " : "") +
          "flag-icon-" +
          relation[lang.toLowerCase()]
        );
      },
      selectlanguge:function(item){
        this.$store.dispatch('app/setcurrlanguage', item.lang)
      }
    }
}
</script>

<style>
    .slang-icon{
        width: 40px;
        height: 40px;
        border-radius:40px;
    }
</style>