<template>
    <div class="Toast" v-if="showToast">
        {{ message }}
    </div>
</template>

<script>
export default {
    name: "showToast",
    data() {
        return {
            showToast: true,
            // type: "normal",
            message: "消息提示",
            duration: 3000
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .Toast {
        position: fixed;
        left: 50%;
        top: 50%;
        color: #E6A23C;
        background: rgb(250, 236, 216);
        padding: 10px;
        border-radius: 5px;
        transform: translate(-50%, -50%);
        animation: show-toast .2s;
        overflow: hidden;
        display: flex;
        align-items: center;
    }

    @keyframes show-toast {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;

        }
    }
</style>
