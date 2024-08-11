import Vue from "vue";

export function useMouse() {
  // 被组合式函数封装和管理的状态
  const x = Vue.observable({ value: 0 });
  const y = Vue.observable({ value: 0 });

  // 组合式函数可以随时更改其状态。
  function update(event) {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  // 一个组合式函数也可以挂靠在所属组件的生命周期上
  // 来启动和卸载副作用
  const mixins = {
    mounted() {
      window.addEventListener("mousemove", update);
    },
    destroyed() {
      window.removeEventListener("mousemove", update);
    },
  };
  // 通过返回值暴露所管理的状态
  return { x, y, mixins };
}
