<template>
  <section :class="bgClass">
    <figure class="cat_loading">
      <img :src="src[aniIdx]" alt="카드섞는 고양이" :class="imgClass">
      <figcaption class="load_string">{{ text }}</figcaption>
    </figure>
  </section>
</template>

<script>
import { onMounted, onUnmounted, computed, ref } from 'vue';
import loadingImg01 from '@/assets/img/loading01.png';
import loadingImg02 from '@/assets/img/loading02.png';
import loadingImg03 from '@/assets/img/loading03.png';
import loadingImg04 from '@/assets/img/loading04.png';

export default {
  props: ['loadingFlg'],
  setup(props, { emit }) {
    // constant
    const src = [loadingImg01, loadingImg02, loadingImg03, loadingImg04];

    // refs
    const aniTimer = ref(0);
    const strTimer = ref(0);
    const aniCnt = ref(0);
    const aniIdx = ref(0);
    const strCnt = ref(0);
    const strLoop = ref(0);
    const text = ref('');
    const textArr = ref(['L', 'O', 'A', 'D', 'I', 'N', 'G', '.', '.', '.']);

    // computed: 이미지 클래스명
    const imgClass = computed(() => {
      let tmpTxt = 'cat';
      if (!props.loadingFlg) tmpTxt += ' up';
      return tmpTxt
    });

    // computed: 뒷배경 클래스명
    const bgClass = computed(() => {
      let tmpTxt = 'loading';
      if (!props.loadingFlg) tmpTxt += ' up';
      return tmpTxt
    });

    // onMounted
    onMounted(() => {
      aniTimer.value = setInterval(() => {
        aniCnt.value++
        if (aniCnt.value > 8) {
          aniIdx.value = 2;
          clearInterval(aniTimer.value);
          setTimeout(() => {
            emit('update:loadingFlg', false);
            aniIdx.value = 3;
            text.value = '';
          }, 750);
        } else aniIdx.value = aniCnt.value % 2;
      }, 250);


      strTimer.value = setInterval(() => {
        text.value += textArr.value[strCnt.value];
        strCnt.value++;
        if (strCnt.value === textArr.value.length) {
          text.value = '';
          strCnt.value = 0;
          strLoop.value++
        }
        if (strLoop.value == 2) {
          clearInterval(strTimer.value);
          text.value = textArr.value.join('');
        }
      }, 120);
    });

    // onUnmounted
    onUnmounted(() => {
      clearInterval(aniTimer.value);
      clearInterval(strTimer.value);
    });

    // return
    return {
      src,
      aniIdx,
      text,
      imgClass,
      bgClass,
    }
  }
}
</script>
