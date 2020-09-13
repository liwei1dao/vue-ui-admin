<template>
<div class="icons-container">
    <v-card>
        <v-tabs background-color="#E0E0E0">
            <v-tab>Icons</v-tab>
            <v-tab>Material-Design-Icons</v-tab>
            <v-tab-item>
                <v-row>
                    <v-col v-for="item of svgIcons" :key="item" cols="1">
                        <div @click="handleClipboard(generateIconCode(item),$event)">
                            <v-tooltip top>
                                <template v-slot:activator="{ on, attrs }">
                                    <div v-bind="attrs" v-on="on" class="icon-item">
                                        <svg-icon :icon-class="item" class-name="disabled" />
                                        <span>{{ item }}</span>
                                    </div>
                                </template>
                                <span>{{generateIconCode(item)}}</span>
                            </v-tooltip>
                        </div>
                    </v-col>
                </v-row>
            </v-tab-item>
            <v-tab-item>
                <v-row>
                    <v-col v-for="item of material_design_Icons" :key="item" cols="1">
                        <div @click="handleClipboard(generateMaterialDesignIconsCode(item),$event)">
                            <v-tooltip top>
                                <template v-slot:activator="{ on, attrs }">
                                    <div v-bind="attrs" v-on="on" class="icon-item">
                                        <v-icon large>mdi-{{item}}</v-icon>
                                        <span>{{ item }}</span>
                                    </div>
                                </template>
                                <span>{{generateMaterialDesignIconsCode(item)}}</span>
                            </v-tooltip>
                        </div>
                    </v-col>
                </v-row>
            </v-tab-item>
        </v-tabs>
    </v-card>
</div>
</template>

<script>
import clipboard from '@/utils/clipboard'
import svgIcons from './svg-icons'
import material_design_Icons from './material-design-Icons'

export default {
    data() {
        return {
            svgIcons,
            material_design_Icons
        }
    },
    methods: {
        generateIconCode(symbol) {
            return `<svgicon icon-class="${symbol}" />`
        },
        generateMaterialDesignIconsCode(symbol) {
            return `<v-icon large>mdi-${symbol}</v-icon>`
        },
        handleClipboard(text, event) {
            clipboard(text, event)
        }
    }
}
</script>

<style lang="scss" scoped>
.icons-container {
    margin: 10px 20px 0;
    overflow: hidden;

    .grid {
        position: relative;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    }

    .icon-item {
        margin: 20px;
        height: 85px;
        text-align: center;
        width: 100px;
        float: left;
        font-size: 30px;
        color: #24292e;
        cursor: pointer;
    }

    span {
        display: block;
        font-size: 16px;
        margin-top: 10px;
    }

    .disabled {
        pointer-events: none;
    }
}
</style>
