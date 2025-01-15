<template>
  <section class="site_outtro">
    <figure class="mascot">
      <img :src="outtroCat" alt="아웃트로 마스코트 캐릭터" />
      <figcaption class="mas_speech" v-html="outtroInnerTxt"></figcaption>
    </figure>
    <address class="business_card">
      kakao Id: kimsohea4425<br />
      E-mail: <a href="mailto:kimsohea4425@gmail.com">kimsohea4425@gmail.com</a><br />
      github Id: kimsohea4425@gmail.com<br />
      <a href="https://github.com/kimsohea" target="_blank">github page 바로가기</a><br />
    </address>
  </section>
</template>

<script>
import { onMounted, onUnmounted, computed, ref } from 'vue'

import outtroCat from '@/assets/img/ending.png'

export default {
  setup() {
    // constant
    const outtroTxt = '끝까지 봐주셔서 감사합니다!'
    const outtroTxtArr = outtroTxt.split('')

    //  refs
    const outtroTxtTimer = ref(0)
    const outtroInnerTxt = ref('')
    const outtroTxtIdx = ref(0)

    // onMounted
    onMounted(() => {
      outtroTxtTimer.value = setInterval(() => {
        outtroInnerTxt.value += outtroTxtArr[outtroTxtIdx.value++]
        if (outtroTxtIdx.value >= outtroTxtArr.length) {
          setTimeout(() => {
            outtroTxtIdx.value = 0
            outtroInnerTxt.value = ''
          }, 200)
        }
      }, 200)
    })

    // onUnmounted
    onUnmounted(() => {
      clearInterval(outtroTxtTimer.value)
    })

    return {
      // images
      outtroCat,

      // variables
      outtroInnerTxt
    }
  }
}
</script>
