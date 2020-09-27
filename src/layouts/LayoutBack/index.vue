<template>
  <div class="layoutback">
    <div class="layoutback--layer layoutback--layer-area">
      <ul class="circles">
        <li v-for="n in 10" :key="n"></li>
      </ul>
    </div>
    <div class="layoutback--layer layoutback--layer-time"  flex="main:center cross:center">{{time}} </div>
    <div class="layoutback--layer layoutback--layer--content" flex="dir:top main:justify cross:stretch box:justify">
        <div class="layoutback--layer--content-header">
          <p class="layoutback--layer--content-header-motto">
            时间是一切财富中最宝贵的财富
          </p>
        </div>
        <router-view class="layoutback--layer--content-main" flex="main:center cross:center" />

        <div class="layoutback--layer--content-footer">
          <p class="layoutback--layer--content-footer-copyright">
            Copyright
            <d2-icon name="copyright"/>
            2018 D2 Projects 开源组织出品
            <a href="https://github.com/FairyEver">
              @FairyEver
            </a>
          </p>
          <p class="layoutback--layer--content-footer-options">
            <a href="#">帮助</a>
            <a href="#">隐私</a>
            <a href="#">条款</a>
          </p>
        </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name : "LayoutBack",
  data () {
    return {
      timeInterval: null,
      time: dayjs().format('HH:mm:ss'),
    }
  },
  mounted () {
    this.timeInterval = setInterval(() => {
      this.refreshTime()
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timeInterval)
  },
  methods: {
    refreshTime () {
      this.time = dayjs().format('HH:mm:ss')
    },
  }
}
</script>

<style lang="scss">
  .layoutback {
    @extend %unable-select;
    $backgroundColor: #F0F2F5;
    background-color: $backgroundColor;
    height: 100%;
    position: relative;
    // 层
    .layoutback--layer {
      @extend %full;
      overflow: auto;
    }
    .layoutback--layer-area {
      overflow: hidden;
    }

    // 时间
    .layoutback--layer-time {
      font-size: 24em;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.03);
      overflow: hidden;
    }

    //
    .layoutback--layer--content{
        height: 100%;
        min-height: 500px;
        // header
        .layoutback--layer--content-header {
            padding: 1em 0;
            .layoutback--layer--content-header-motto {
              margin: 0px;
              padding: 0px;
              color: $color-text-normal;
              text-align: center;
              font-size: 12px;
          }
        }

        //登陆页面控件的容器
        .layoutback--layer--content-main{
            height: 100%;
            min-height: 500px;
        }

        // footer
        .layoutback--layer--content-footer {
            padding: 1em 0;
          .layoutback--layer--content-footer-copyright {
            padding: 0px;
            margin: 0px;
            margin-bottom: 10px;
            font-size: 12px;
            line-height: 12px;
            text-align: center;
            color: $color-text-normal;
            a {
                color: $color-text-normal;
            }
          }
          .layoutback--layer--content-footer-options {
            padding: 0px;
            margin: 0px;
            font-size: 12px;
            line-height: 12px;
            text-align: center;
            a {
                color: $color-text-normal;
                margin: 0 1em;
            }
          }
        }
    }




    // 背景
    .circles {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      margin: 0px;
      padding: 0px;
      li {
        position: absolute;
        display: block;
        list-style: none;
        width: 20px;
        height: 20px;
        background: #FFF;
        animation: animate 25s linear infinite;
        bottom: -200px;
        @keyframes animate {
          0%{
            transform: translateY(0) rotate(0deg);
            opacity: 1;
            border-radius: 0;
          }
          100%{
            transform: translateY(-1000px) rotate(720deg);
            opacity: 0;
            border-radius: 50%;
          }
        }
        &:nth-child(1) {
          left: 15%;
          width: 80px;
          height: 80px;
          animation-delay: 0s;
        }
        &:nth-child(2) {
          left: 5%;
          width: 20px;
          height: 20px;
          animation-delay: 2s;
          animation-duration: 12s;
        }
        &:nth-child(3) {
          left: 70%;
          width: 20px;
          height: 20px;
          animation-delay: 4s;
        }
        &:nth-child(4) {
          left: 40%;
          width: 60px;
          height: 60px;
          animation-delay: 0s;
          animation-duration: 18s;
        }
        &:nth-child(5) {
          left: 65%;
          width: 20px;
          height: 20px;
          animation-delay: 0s;
        }
        &:nth-child(6) {
          left: 75%;
          width: 150px;
          height: 150px;
          animation-delay: 3s;
        }
        &:nth-child(7) {
          left: 35%;
          width: 200px;
          height: 200px;
          animation-delay: 7s;
        }
        &:nth-child(8) {
          left: 50%;
          width: 25px;
          height: 25px;
          animation-delay: 15s;
          animation-duration: 45s;
        }
        &:nth-child(9) {
          left: 20%;
          width: 15px;
          height: 15px;
          animation-delay: 2s;
          animation-duration: 35s;
        }
        &:nth-child(10) {
          left: 85%;
          width: 150px;
          height: 150px;
          animation-delay: 0s;
          animation-duration: 11s;
        }
      }
    }
  }
</style>