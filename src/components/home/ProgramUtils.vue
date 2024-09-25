<template>
  <section class="program_util" :class="{ on: aniFlg }">
    <figure :class="handClass"><img :src="catHand" alt="고양이 손" /></figure>
    <ul :class="cardClass">
      <li v-for="item in imgArr" :key="`card_arr_${item}`" :class="onClass">
        <img :src="item" alt="고양이 무늬 카드" />
      </li>
    </ul>
    <h2 class="">program utilization</h2>
    <p>※ 자세히 보고싶으시다면 클릭해주세요!</p>
    <ul class="util_pop">
      <li>
        <strong>Illustlator</strong>
        <p>
          일러스트레이터에 대한 전반적인 이해도를 가지고 있으며 컬러모드의 활용과 벡터이미지
          활용부터 클리핑마스크 펜툴을 통한 디자인과 도형을 응용한 디자인을 구현할 수 있습니다.
        </p>
      </li>
    </ul>
    <ul class="program_per">
      <li>See Others?</li>
      <li>Illustlator <span class="ai_util_per">0%</span></li>
      <li>Photoshop <span class="ps_util_per">0%</span></li>
      <li>jquery <span class="jq_util_per">0%</span></li>
      <li>JavaScript <span class="js_util_per">0%</span></li>
      <li>CSS <span class="css_util_per">0%</span></li>
      <li>Html <span class="html_util_per">0%</span></li>
    </ul>
    <p class="util_para">
      figma의 layers, frame, section, page, component 등 피그마 내에서 협업에 유용한 툴을 활용할 수
      있습니다. 특정 섹션 내의 색상코드를 이용해 같은 디자인일 지언정 색만 다르게도 연출할 수
      있습니다. 일러스트레이터 벡터툴을 많이 다뤄본 관계로 피그마 내에서도 어렵지 않게 벡터툴을
      활용할 수 있습니다.
    </p>
    <p class="util_para">
      일러스트레이터에 대한 전반적인 이해도를 가지고 있으며 컬러모드의 활용과 벡터이미지 활용부터
      클리핑마스크 펜툴을 통한 디자인과 도형을 응용한 디자인을 구현할 수 있습니다.
    </p>
    <p class="util_para">
      포토샵에서 이용하는 스마트 오브젝트에 대해 응용할 수 있으며 패스를 이용해 마스크를 사용할 수
      있고 사진합성, 그래디언트 마스크, 자동액션툴 및 여러 필터를 사용하는것까지 여러 기능을 활용할
      수 있습니다.
    </p>
    <p class="util_para">
      $의 원래 의미인 jquery()를 이해하고 있으며 선택자를 이용하거나 기본적인 문법을 독해할수
      있습니다! 많은 메소드를 사용해 css, html, 그 외의 속성 변경을 할 수 있습니다.
    </p>
    <p class="util_para">
      연산자, 배열, 객체, 반복문 break, 조건문, 함수 return 등 기초적인 문법에 대해 이해하고 있으며
      이것을 이용해 링크를 통한 데이터 전송방법을 알고있습니다.
    </p>
    <p class="util_para">
      형제선택자 +와 ~에 대해 이해하고 있으며 가상선택자 등 css에서 응용할 수 있는 여러가지 선택자를
      사용해 별도의 html class추가 없이도 태그를 선택해서 모양을 잡을 수 있습니다.
    </p>
    <p class="util_para">
      웹 표준에 적합한 태그의 용도를 이해하고 있으며 태그의 맥락을 파악해서 검색엔진최적화(SEO)중
      전반적인 사항을 충족해 문서의 순위도를 높일 수 있는 html문서를 구현할 수 있습니다. meta 태그로
      사이트의 검색 노출이 용이하게 만들어지는 점을 알고 있습니다.
    </p>
    <ul :class="decoClass">
      <li>
        <figure><img :src="frontElement01" alt="" /><img :src="frontElement02" alt="" /></figure>
      </li>
      <li>
        <figure><img :src="frontElement01" alt="" /><img :src="frontElement02" alt="" /></figure>
      </li>
    </ul>
  </section>
</template>

<script>
import { onMounted, computed, ref } from 'vue'

import catHand from '@/assets/img/hand_01.png'
import frontElement01 from '@/assets/img/skill_front_01.png'
import frontElement02 from '@/assets/img/skill_front_02.png'

import aiIconImg from '@/assets/img/aiIcon_color.png'
import cssIconImg from '@/assets/img/cssIcon_color.png'
import htmlIconImg from '@/assets/img/htmlIcon_color.png'
import jsIconImg from '@/assets/img/jsIcon_color.png'
import jqIconImg from '@/assets/img/jqueryIcon_color.png'
import psIconImg from '@/assets/img/psIcon_color.png'

import trmpIcon02 from '@/assets/img/trumpIcon_02.png'
import trmpIcon03 from '@/assets/img/trumpIcon_03.png'
import trmpIcon04 from '@/assets/img/trumpIcon_04.png'
import trmpIcon05 from '@/assets/img/trumpIcon_05.png'
import trmpIcon06 from '@/assets/img/trumpIcon_06.png'
import trmpIcon07 from '@/assets/img/trumpIcon_07.png'
import trmpIcon08 from '@/assets/img/trumpIcon_08.png'
import trmpIcon09 from '@/assets/img/trumpIcon_09.png'
import trmpIcon10 from '@/assets/img/trumpIcon_10.png'

export default {
  props: ['loadingFlg'],
  setup(props) {
    // constant
    const cardArr = [
      trmpIcon02,
      trmpIcon03,
      trmpIcon04,
      trmpIcon05,
      trmpIcon06,
      trmpIcon07,
      trmpIcon08,
      trmpIcon09,
      trmpIcon10
    ]
    let tmpNum1 = Math.ceil(Math.random() * 100) % cardArr.length
    let tmpNum2 = Math.ceil(Math.random() * 100) % cardArr.length

    //  refs
    const cardClass = ref('card_ani')
    const aniFlg = ref(false)
    const endFlg = ref(false)
    const imgArr = ref([
      cardArr[tmpNum1],
      cardArr[tmpNum2],
      aiIconImg,
      psIconImg,
      jqIconImg,
      jsIconImg,
      cssIconImg,
      htmlIconImg,
      htmlIconImg
    ])

    // computed: 고양이손 애니메이션 class 처리
    const handClass = computed(() => {
      let tmpTxt = 'hand'
      if (!props.loadingFlg) tmpTxt += ' hand_ani'
      return tmpTxt
    })

    // computed: 카드 펼침 class 처리
    const onClass = computed(() => {
      let tmpStr = ''
      if (endFlg.value) tmpStr += 'hover'
      if (props.loadingFlg) tmpStr += 'on'
      return tmpStr
    })

    // computed: 커튼 class 처리
    const decoClass = computed(() => {
      let tmpStr = 'deco'
      if (endFlg.value) tmpStr += ' active'
      return tmpStr
    })

    // onMounted
    onMounted(() => {
      setTimeout(() => {
        if (tmpNum1 === tmpNum2) tmpNum2 = tmpNum1 + 1
        if (!props.loadingFlg) cardClass.value += ' rotate'
      }, 5000)

      setTimeout(() => {
        cardClass.value += '_scale'
        aniFlg.value = true
        setTimeout(() => (endFlg.value = true), 1000)
      }, 8000)
    })

    return {
      // variables
      aniFlg,
      imgArr,
      cardArr,
      handClass,
      cardClass,
      onClass,
      decoClass,

      // images
      catHand,
      aiIconImg,
      cssIconImg,
      htmlIconImg,
      jsIconImg,
      psIconImg,
      jqIconImg,
      frontElement01,
      frontElement02
    }
  }
}
</script>
