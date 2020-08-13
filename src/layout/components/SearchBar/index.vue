<template>
    <div class="searchbar">  
        <div class="searchbarinput" :class="{'searchbarinput-show':isshowinput}">
            <v-text-field
                label="Outlined"
                rounded
                single-line
                filled
                dense
            ></v-text-field>
        </div>
        <v-btn class="mx-2" fab small @click="searchbarClick">
            <v-icon dark>mdi-magnify</v-icon>
        </v-btn>
    </div>
</template>

<script>

export default {
    name:"SearchBar",
    data:function(){
        return {
            isshowinput:false
        }
    },
    methods:{
        searchbarClick(){
            this.isshowinput = !this.isshowinput
        }
    }
}
</script>

<style lang="scss" scoped>
    .searchbar{
        line-height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .searchbarinput{
        height: 30px;
        width: 0px;
        margin-right: -10px;
        transition: width 0.3s;
    }
    .searchbarinput-show{
        height: 30px;
        width: 236px;
    }
</style>