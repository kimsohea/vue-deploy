<template>
  <main :class="mainClass">
    <LoadingPop v-model:loadingFlg="loadingFlg" />
    <ProgramUtils :loadingFlg="loadingFlg" />
    <MyResume />
    <IntroAladin />
    <AnnounceAladin />
  </main>
</template>

<script>
import { computed, ref } from 'vue';

import LoadingPop from '@/components/home/LoadingPop.vue';
import ProgramUtils from '@/components/home/ProgramUtils.vue';
import MyResume from '@/components/home/MyResume.vue';
import IntroAladin from '@/components/home/IntroAladin.vue';
import AnnounceAladin from '@/components/home/AnnounceAladin.vue';

export default {
  components: {
    LoadingPop,
    ProgramUtils,
    MyResume,
    IntroAladin,
    AnnounceAladin,
  },
  setup() {
    // refs
    const loadingFlg = ref(true);

    // computed: 메인래퍼 클래스명
    const mainClass = computed(() => {
      let tmpTxt = 'wrap loading';
      if (!loadingFlg.value) tmpTxt = tmpTxt.split(' ')[0];
      return tmpTxt
    });

    // return
    return {
      // variables
      loadingFlg,
      mainClass,
    }
  }
}
</script>