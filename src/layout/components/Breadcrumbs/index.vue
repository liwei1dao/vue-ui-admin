<template>
  <div class="breadcrumbs">
        <v-breadcrumbs :items="items"></v-breadcrumbs>
  </div>
</template>

<script>
export default {
    name:"Breadcrumbs",
    data:function(){
        return {
            items: [
                {
                    text: 'Dashboard',
                    disabled: false,
                    href: 'breadcrumbs_dashboard',
                },
                {
                    text: 'Link 1',
                    disabled: false,
                    href: 'breadcrumbs_link_1',
                },
                {
                    text: 'Link 2',
                    disabled: true,
                    href: 'breadcrumbs_link_2',
                },
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
    .breadcrumbs{
        height: 46px;
    }
</style>