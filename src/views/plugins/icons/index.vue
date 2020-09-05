<template>
<div class="icons-container">
    <v-row>
        <v-col v-for="item of svgIcons" :key="item" cols="1">
            <div @click="handleClipboard(generateIconCode(item),$event)">
                <v-tooltip>
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
</div>
</template>

<script>
import clipboard from '@/utils/clipboard'
import svgIcons from './svg-icons'
import Icons from './icons'

export default {
    name: 'Icons',
    data() {
        return {
            svgIcons,
            Icons
        }
    },
    methods: {
        generateIconCode(symbol) {
            return `<svg-icon icon-class="${symbol}" />`
        },
        generateElementIconCode(symbol) {
            return `<i class="el-icon-${symbol}" />`
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
