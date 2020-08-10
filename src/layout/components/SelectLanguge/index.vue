<template>
     <v-menu transition="slide-x-transition">
      <template v-slot:activator="{ on, attrs }">
        <div 
            rounded-circle
            :v-bind="attrs"
            :v-on="on"
            class="slang"
        ></div>
      </template>
      <v-list>
        <v-list-item v-for="n in 5" :key="n" link>
          <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
</template>

<script>
export default {
    name:"SelectLanguge",
    components:{
    },
    data () {
      return {
        lang:"zh",
        langtext:"中文",
        languge: [
            { lang: 'zh' ,text:"中文"},
            { lang: 'en' ,text:"English"},
        ],
    }},
    methods:{
        selectlanguge:function(item){
            console.log("切换语言:",item.text)
            this.lang = item.lang
            this.langtext = item.text
        }
    }
}
</script>

<style>
    .slang{
        background-color: red;
    }
</style>