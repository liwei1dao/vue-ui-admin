<template>
  <div :class="classes">
    <span v-if="hasSlot" :class="slotClasses">
      <slot />
    </span>
  </div>
</template>

<script>
import { oneOf } from "@/utils";
const prefixCls = "xch-divider";
export default {
  name: "divider",
  props: {
    type: {
      type: String,
      default: "horizontal",
      validator(value) {
        return oneOf(value, ["horizontal", "vertical"]);
      }
    },
    orientation: {
      type: String,
      default: "center",
      validator(value) {
        return oneOf(value, ["left", "right", "center"]);
      }
    },
    dashed: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default",
      validator(value) {
        return oneOf(value, ["small", "default"]);
      }
    }
  },
  computed: {
    hasSlot() {
      return !!this.$slots.default;
    },
    classes() {
      return [
        `${prefixCls}`,
        `${prefixCls}-${this.type}`,
        `${prefixCls}-${this.size}`,
        {
          [`${prefixCls}-with-text`]:
            this.hasSlot && this.orientation === "center",
          [`${prefixCls}-with-text-${this.orientation}`]: this.hasSlot,
          [`${prefixCls}-dashed`]: !!this.dashed
        }
      ];
    },
    slotClasses() {
      return [`${prefixCls}-inner-text`];
    }
  }
};
</script>

<style lang="scss">
  .xch-divider {
      background: #ddd;
      &-vertical{
          display: inline-block;
          margin: 0 8px;
          height: 0.9em;
          width: 1px;
          vertical-align: middle;
          position: relative;
          top: -0.06em;
      }
      &-horizontal {
          display: block;
          height: 1px;
          width: 100%;
          min-width: 100%;
          margin: 24px 0;
          clear: both;
          &-with-text-center,
          &-with-text-left,
          &-with-text-right {
              display: table;
              white-space: nowrap;
              text-align: center;
              background: transparent;
              margin: 16px 0;
              font-size: 16px;
              &:before,
              &:after{
                  content: '';
                  display: table-cell;
                  position: relative;
                  top: 50%;
                  width: 50%;
                  border-top: 1px solid #ddd;
                  transform: translateY(50%);
              }
          }
          &-small{
            &-with-text-center,
            &-with-text-left,
            &-with-text-right{
                margin: 8px 0;
                font-size: 12px;
            }
          }
          &-with-text-left,
          &-with-text-right {
              .xch-divider-inner-text {
                  display: inline-block;
                  padding: 0 10px;
              }
          }

          &-with-text-left {
              &:before {
                  top: 50%;
                  width: 5%;
              }
              &:after {
                  top: 50%;
                  width: 95%;
              }
          }

          &-with-text-right {
              &:before {
                  top: 50%;
                  width: 95%;
              }
              &:after {
                  top: 50%;
                  width: 5%;
              }
          }
          &-with-text{
            &-dashed,
            &-left-dashed,
            &-right-dashed {
                border-top: 0;
                &:before,
                &:after {
                    border-style: dashed none none;
                }
            }
          }
      }
      &-inner-text {
          display: inline-block;
          padding: 0 24px;
      }
      &-dashed {
          background: none;
          border-top: 1px dashed #ddd;
      }

  }
</style>
