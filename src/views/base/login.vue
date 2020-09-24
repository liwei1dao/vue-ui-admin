<template>
    <div class="view-login--content" flex="dir:top main:justify cross:stretch box:justify">
        <div class="view-login--content-header">
          <p class="view-login--content-header-motto">
            时间是一切财富中最宝贵的财富
          </p>
        </div>
        <div>
            <h3 class="title">Login</h3>
        </div>
    </div>
</template>

<script>
export default {
    name:"Login",
}
</script>

<style lang="scss">
    // 登陆页面控件的容器
    .view-login--content{
        height: 100%;
        min-height: 500px;
        // header
        .view-login--content-header {
            padding: 1em 0;
            .view-login--content-header-motto {
            margin: 0px;
            padding: 0px;
            color: $color-text-normal;
            text-align: center;
            font-size: 12px;
            }
        }
        .view-login--content-main{
            // main
            .view-login--title {
                width: 240px;
                margin-top: -2em;
            }
            .view-login--form{
                 width: 280px;
                // 卡片
                .el-card {
                margin-bottom: 15px;
                }
            }
        }
    }
</style>