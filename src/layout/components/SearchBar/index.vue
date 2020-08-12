<template>
    <div class="searchbar">
        <v-btn class="mx-2" fab small>
            <v-icon dark>mdi-magnify</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
    name:"SearchBar",

}
</script>

<style lang="scss" scoped>
    .searchbar{
        line-height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>