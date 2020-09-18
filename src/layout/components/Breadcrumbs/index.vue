<template>
  <div class="breadcrumbs">
        <v-breadcrumbs :items="levelList">
            <template v-slot:item="{ item }">
                <v-breadcrumbs-item>
                    {{$t(item.meta.title)}}
                </v-breadcrumbs-item>
            </template>
        </v-breadcrumbs>
  </div>
</template>

<script>
export default {
    name:"Breadcrumbs",
    data:function(){
        return {
            levelList: null,
        }
    },
    watch: {
        $route(route) {
            if (route.path.startsWith('/base')) {
                return
            }
            this.getBreadcrumb()
        }
    },
    created() {
        this.getBreadcrumb()
    },
    methods:{
        getBreadcrumb(){
            // only show routes with meta.title
            let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
            // const first = matched[0]

            // if (!this.isDashboard(first)) {
            //     matched = [{ path: '/dashboard', meta: { title: 'router.dashboard' }}].concat(matched)
            // }

            this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
        },
        isDashboard(route) {
            const name = route && route.meta && route.meta.title
            if (!name) {
                return false
            }
            return name.trim().toLocaleLowerCase() === 'router.dashboard'.toLocaleLowerCase()
        },
    }
}
</script>

<style lang="scss" scoped>
    .breadcrumbs{
        height: 46px;
    }
</style>