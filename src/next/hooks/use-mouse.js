import {ref, onMounted, onUnmounted, reactive, toRefs} from 'vue'

export function useMousePosition() {
  const x = ref(0);
  const y = ref(0);

  function update(e) {
    x.value = e.pageX;
    y.value = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  });

  return {x, y}
}

export function useTest() {
  const pos = reactive({
    test1: 0,
    test2: 1
  });

  function update(e) {
    pos.test1 = e.pageX;
    pos.test2 = e.pageY;

  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  });


  return pos
}


/*
* // 记笔记
* 
* toRefs() 函数可以将 reactive() 创建出来的响应式对象，转换为普通的对象，就是可以將reactive多层对象类型的响应对象，转化为普通类型的响应数据
*
* */
