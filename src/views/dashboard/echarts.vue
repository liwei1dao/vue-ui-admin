<template>
<row>
    <v-col cols="12">
        <line-chart />
    </v-col>
    <v-col cols="4">
        <raddar-chart />
    </v-col>
    <v-col cols="4">
        <pie-chart />
    </v-col>
    <v-col cols="4">
        <bar-chart />
    </v-col>
</row>
</template>

<script>
import LineChart from '@/components/Echarts/LineChart.vue'
import RaddarChart from '@/components/Echarts/RaddarChart.vue'
import PieChart from '@/components/Echarts/PieChart.vue'
import BarChart from '@/components/Echarts/BarChart.vue'

export default {
    name: "Echarts",
    components: {
        LineChart,
        RaddarChart,
        PieChart,
        BarChart,
    },
    data() {
        return {}
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
    padding: 32px;
    background-color: rgb(240, 242, 245);
    position: relative;

    .github-corner {
        position: absolute;
        top: 0px;
        border: 0;
        right: 0;
    }

    .chart-wrapper {
        background: #fff;
        padding: 16px 16px 0;
        margin-bottom: 32px;
    }
}

@media (max-width:1024px) {
    .chart-wrapper {
        padding: 8px;
    }
}
</style>
