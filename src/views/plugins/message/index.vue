<template>
<div class="text-center">
    <v-btn color="success" @click="ShowSuccess">Success</v-btn>
    <v-btn color="info" @click="ShowInfo">Info</v-btn>
    <v-btn color="warning" @click="ShowWarning">Warning</v-btn>
    <v-btn error="error" @click="ShowError">Error</v-btn>
</div>
</template>

<script>
export default {
    name: "Message",
    methods: {
        ShowSuccess() {
            this.$message({
                message: 'successfully',
                type: 'success',
                duration: 1500
            })
        },
        ShowInfo() {
            this.$message({
                message: 'Info',
                type: 'info',
                duration: 1500
            })
        },
        ShowWarning() {
            this.$message({
                message: 'Warning',
                type: 'warning',
                duration: 1500
            })
        },
        ShowError() {
            this.$message({
                message: 'Error',
                type: 'error',
                duration: 1500
            })
        }
    },
}
</script>
