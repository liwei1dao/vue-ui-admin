<template>
<transition name="message-fade">
    <div :class="[
        'message',
        type && !iconClass ? `message--${ type }` : '',
        center ? 'is-center' : '',
        showClose ? 'is-closable' : '',
        customClass
      ]" :style="positionStyle" v-show="visible" @mouseenter="clearTimer" @mouseleave="startTimer" role="alert">
        <v-icon :class="['message__icon',typeClass]" large :color="color" small=true>{{iconName}}</v-icon>
        <slot>
            <p v-if="!dangerouslyUseHTMLString" class="message__content">{{ message }}</p>
            <p v-else v-html="message" class="message__content"></p>
        </slot>
        <v-icon v-if="showClose" class="message__closeBtn" @click="close">mdi-close</v-icon>
    </div>
</transition>
</template>

<script>
const iconMap = {
    success: 'mdi-checkbox-marked-circle',
    info: 'mdi-alert-circle',
    warning: 'mdi-alert-decagram',
    error: 'mdi-alert'
};

export default {
    data() {
        return {
            visible: false,
            message: '',
            duration: 3000,
            type: 'info',
            iconClass: '',
            customClass: '',
            onClose: null,
            showClose: false,
            closed: false,
            verticalOffset: 20,
            timer: null,
            dangerouslyUseHTMLString: false,
            center: false
        };
    },

    computed: {
        typeClass() {
            return this.type && !this.iconClass ?
                `message__icon icon-${ this.type }` :
                '';
        },
        iconName() {
            return iconMap[this.type]
        },
        positionStyle() {
            return {
                'top': `${ this.verticalOffset }px`
            };
        }
    },

    watch: {
        closed(newVal) {
            if (newVal) {
                this.visible = false;
            }
        }
    },

    methods: {
        handleAfterLeave() {
            this.$destroy(true);
            this.$el.parentNode.removeChild(this.$el);
        },

        close() {
            this.closed = true;
            if (typeof this.onClose === 'function') {
                this.onClose(this);
            }
        },

        clearTimer() {
            clearTimeout(this.timer);
        },

        startTimer() {
            if (this.duration > 0) {
                this.timer = setTimeout(() => {
                    if (!this.closed) {
                        this.close();
                    }
                }, this.duration);
            }
        },
        keydown(e) {
            if (e.keyCode === 27) { // esc关闭消息
                if (!this.closed) {
                    this.close();
                }
            }
        }
    },
    mounted() {
        this.startTimer();
        document.addEventListener('keydown', this.keydown);
    },
    beforeDestroy() {
        document.removeEventListener('keydown', this.keydown);
    }
};
</script>

<style>
.message__closeBtn:focus,
.message__content:focus {
    outline-width: 0
}

.message {
    min-width: 380px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    border-color: #EBEEF5;
    position: fixed;
    left: 50%;
    top: 20px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    background-color: #edf2fc;
    -webkit-transition: opacity .3s, top .4s, -webkit-transform .4s;
    transition: opacity .3s, top .4s, -webkit-transform .4s;
    transition: opacity .3s, transform .4s, top .4s;
    transition: opacity .3s, transform .4s, top .4s, -webkit-transform .4s;
    overflow: hidden;
    padding: 15px 15px 15px 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.message.is-center {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.message.is-closable .message__content {
    padding-right: 16px
}

.message p {
    margin: 0
}

.message--info .message__content {
    color: #909399
}

.message--success {
    background-color: #f0f9eb;
    border-color: #e1f3d8
}

.message--success .message__content {
    color: #67C23A
}

.message--warning {
    background-color: #fdf6ec;
    border-color: #faecd8
}

.message--warning .message__content {
    color: #E6A23C
}

.message--error {
    background-color: #fef0f0;
    border-color: #fde2e2
}

.message--error .message__content {
    color: #F56C6C
}

.message__icon {
    margin-right: 10px
}

.message__content {
    padding: 0;
    font-size: 14px;
    line-height: 1
}

.message__closeBtn {
    position: absolute;
    top: 50%;
    right: 15px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    cursor: pointer;
    color: #C0C4CC;
    font-size: 16px
}

.message__closeBtn:hover {
    color: #909399
}

.message .icon-success {
    color: #67C23A
}

.message .icon-error {
    color: #F56C6C
}

.message .icon-info {
    color: #909399
}

.message .icon-warning {
    color: #E6A23C
}

.message-fade-enter,
.message-fade-leave-active {
    opacity: 0;
    -webkit-transform: translate(-50%, -100%);
    transform: translate(-50%, -100%)
}
</style>
