<template>
<v-card class="elevation-12">
    <v-toolbar color="primary" flat>
        <v-toolbar-title>{{$t('common.register')}}</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
        <v-form>
            <v-row justify="center">
                <v-col cols="10">
                    <v-text-field v-model="form.email" prepend-icon="mdi-email" :label="$t('common.InputEamil')"></v-text-field>
                </v-col>
                <v-col cols="10" align-self>
                    <v-row align=center>
                        <v-col cols="8">
                            <v-text-field v-model="form.captcha" prepend-icon="mdi-email-check" :label="$t('common.InputVerification')" clearable required></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-btn class="captchabutt" rounded color="primary" @click="getcaptcha" :disabled="codeDisabled">{{$t('common.Verification')}}</v-btn>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="10">
                    <v-text-field v-model="form.password" prepend-icon="mdi-lock-question" :append-icon="showPwd ? 'mdi-eye-off' : 'mdi-eye'" :type="showPwd ? 'text' : 'password'" :label="$t('common.InputPassword')" @click:append="showPwd = !showPwd" required></v-text-field>
                </v-col>
                <v-col cols="10">
                    <v-text-field v-model="form.confirmpassword" prepend-icon="mdi-lock-question" :append-icon="showPwd ? 'mdi-eye-off' : 'mdi-eye'" :type="showPwd ? 'text' : 'password'" :label="$t('common.InputConfirmPassword')" @click:append="showPwd = !showPwd" required></v-text-field>
                </v-col>
            </v-row>
        </v-form>
    </v-card-text>
    <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey" to="/base/login">{{$t('common.login')}}</v-btn>
        <v-btn color="primary" @click="handle_register">{{$t('common.register')}}</v-btn>
    </v-card-actions>
</v-card>
</template>

<script>
import {
    captcha
} from '@/api/api'
export default {
    name: "Register",
    components: {

    },
    data() {
        return {
            codeDisabled: false,
            getcaptchabutt: this.$i18n.t('common.Verification'),
            showPwd: false,
            form: {
                email: "",
                captcha: "",
                password: "",
                confirmpassword: "",
            }
        }
    },
    omputed: {},
    methods: {
        getcaptcha() {
            this.codeDisabled = true
            captcha({
                email: this.form.email,
                type: 1
            }).then(response => {
                const {
                    message
                } = response
                this.$message({
                    message: 'successfully',
                    type: 'success',
                    duration: 1500
                })
                if (!this.timer) { //启动计时器
                    this.timer = setInterval(() => {
                        if (this.countdown > 0 && this.countdown <= 60) {
                            this.countdown--;
                            if (this.countdown !== 0) {
                                this.getcaptchabutt = this.$i18n.t('common.VerificationR') + "(" + this.countdown + ")";
                            } else {
                                clearInterval(this.timer);
                                this.getcaptchabutt = this.$i18n.t('common.Verification');
                                this.countdown = 60;
                                this.timer = null;
                                this.codeDisabled = false;
                            }
                        }
                    }, 1000)
                }
            }).catch(error => {
                this.$message({
                    message: res.message,
                    type: 'error',
                    duration: 5 * 1000
                })
                this.codeDisabled = false
            })
        },
        handle_register() {
            console.log("测试国际化脚本代码:", this.$t('common.login'))
        }
    }
}
</script>

<style>
.captchabutt {
    width: 100%;
    line-height: 100%;
    vertical-align: 15px;
}
</style>
