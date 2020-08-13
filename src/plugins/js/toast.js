import Vue from 'vue'
import Toast from '../components/toast.vue'
// 生成一个扩展实例构造器
const ToastConstructor = Vue.extend(Toast);
function showToast(message, duration = 2000) {
    // 实例化一个 Toast.vue
    const _toast = new ToastConstructor({
        data() {
            return {
                showToast: true,
                // type: type,
                message: message,
                duration: duration
            }
        }
    });

    // 把实例化的 Toast.vue 添加到 body 里
    let element = _toast.$mount().$el;
    document.body.appendChild(element);

    // duration时间到了后隐藏
    setTimeout(() => {_toast.showToast = false} ,duration)
}
// 需要在main.js 里面使用 Vue.use(showToast);
showToast.install = (Vue) => {
    // 将组件注册到 vue 的 原型链里去,
    // 这样就可以在所有 vue 的实例里面使用 this.$toast()
    Vue.prototype.$toast = showToast
};

// 导出
export default showToast