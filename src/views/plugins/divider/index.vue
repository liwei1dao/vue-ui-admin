<template>
<v-container>
    <Divider>liwei1dao</Divider>
    <Divider orientation="left">liwei2dao</Divider>
    <Divider orientation="right">liwei2dao</Divider>
    <Divider orientation="left" :dashed="true">liwei2dao</Divider>
    <Divider orientation="left" size="small">liwei2dao</Divider>
</v-container>
</template>

<script>
import Divider from '@/components/Divider'
export default {
    name: "divider",
    components: {
        Divider
    }
}
</script>

<style>

</style>
