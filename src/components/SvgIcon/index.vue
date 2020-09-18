<template>
    <div v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon" v-on="$listeners" />
    <svg v-else class="svg-icon" :width="width" :height="height" :color="color" aria-hidden="true" v-on="$listeners">
        <use :xlink:href="iconName" />
    </svg>
</template>

<script>
import {
    isExternal
} from '@/utils/validate'
export default {
    name: 'SvgIcon',
    props: {
        iconClass: {
            type: String,
            required: true
        },
        width :{
           type: [Number, String],
            default: "1em"
        },
        height :{
            type: [Number, String],
            default: "1em"
        },
        color:{
            type: [String],
            default: 'currentColor'
        }
    },
    computed: {
        isExternal() {
            return isExternal(this.iconClass)
        },
        iconName() {
            return `#icon-${this.iconClass}`
        },
        styleExternalIcon() {
            return {
                mask: `url(${this.iconClass}) no-repeat 50% 50%`,
                '-webkit-mask': `url(${this.iconClass}) no-repeat 50% 50%`
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.svg-icon {
    /* width: 1em;
    height: 1em; */
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

.svg-external-icon {
    background-color: currentColor;
    mask-size: cover !important;
    display: inline-block;
}
</style>
