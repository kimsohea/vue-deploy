<template>
  <section class="my_resume" @mousemove="handleEye">
    <h2>My Resume</h2>
    <div class="resume_wrap">
      <figure class="mascot" :class="eyeClass">
        <img :src="catTail" alt="고양이 꼬리" />
        <img :src="catHand" alt="고양이 앞발" />
        <img class="catbody" :src="catBody[bodyIdx]" alt="고양이 몸" />
        <img class="open_eye" :src="catEyeBack" alt="고양이 눈" />
        <img
          class="open_eye"
          alt="고양이 동공"
          :src="catEye"
          :style="`transform: translate(${offsetX}%, ${offsetY}%); transition: transform .1s ease;`"
        />
        <img class="open_eye" :src="catEyeLight" alt="고양이 눈망울" />
        <img class="close_eye" :src="catEyeClose" alt="감은 눈" />
        <figcaption class="mas_speech" v-html="innerTxt"></figcaption>
      </figure>
      <ul class="resume">
        <li>
          <h3>교육 이수내역</h3>
          <ul>
            <li>
              UI/UX 반응형 웹디자인&웹퍼블리셔 양성과정 B 그린컴퓨터아카데미(성남)
              <span>2022년 08월 ~ 2023년 01월</span>
            </li>
            <li>다이나믹 클라이언트 스크립트 기초 <span>2022년 10월</span></li>
            <li>
              (과정평가형)웹디자인 기능사 A 그린컴퓨터아카데미 신촌
              <span>2022년 05월 ~ 2023년 01월</span>
            </li>
          </ul>
        </li>
        <li>
          <h3>경력사항</h3>
          <ul>
            <li>NHN WETOO 근무 <span>2023년 3월 ~ 2024년 9월</span></li>
            <li>인터코스메틱 근무 <span>2019년 11월 ~ 2022년 5월</span></li>
          </ul>
        </li>
        <li>
          <h3>자격증</h3>
          <ul>
            <li>한국산업인력공단 웹디자인기능사 <span>2019년 11월 07일</span></li>
            <li>GTQ(그래픽기술자격)1급 <span>2019년 08월 16일</span></li>
          </ul>
        </li>
        <li class="public_site">
          <h3>퍼블리싱 사이트</h3>
          <ul>
            <li>가방팝 <a href="https://gabangpop.co.kr/" target="_blank">사이트 바로가기</a></li>
            <li>
              오보즈코리아 <a href="https://obozfootwear.co.kr/" target="_blank">사이트 바로가기</a>
            </li>
            <li>
              마모트코리아 공식홈페이지
              <a href="https://marmotkorea.kr/" target="_blank">사이트 바로가기</a>
            </li>
            <li>
              더블유랩 WLAB
              <a href="https://wlab.co.kr/" target="_blank">사이트 바로가기</a>
            </li>
            <li>
              NHN WETOO 공식홈페이지
              <a href="https://www.nhnwetoo.com/" target="_blank">사이트 바로가기</a>
            </li>
            <li>
              아이카사 코리아 공식홈페이지
              <a href="https://aykasa-korea.co.kr/" target="_blank">사이트 바로가기</a>
            </li>
            <li>1300k</li>
            <li>1200m</li>
            <li>wetooMRO</li>
            <li>럭스닷</li>
            <li>coltorti boutique</li>
            <li>웨어라운지 wearLounge</li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { onMounted, onUnmounted, computed, ref } from 'vue'

import catTail from '@/assets/img/resumeMasTail.png'
import catBodyOpen from '@/assets/img/resumeMasBodyOpen.png'
import catBodyClose from '@/assets/img/resumeMasBodyClosed.png'
import catEyeClose from '@/assets/img/resumeMasCloseEye.png'
import catEye from '@/assets/img/resumeMasEye.png'
import catEyeBack from '@/assets/img/resumeMasEyeBack.png'
import catEyeLight from '@/assets/img/resumeMasEyeLight.png'
import catHand from '@/assets/img/resumeMasLeftHand.png'

export default {
  setup() {
    // constant
    const catBody = [catBodyClose, catBodyOpen]
    const introTxt = '안녕하세요!\n저의 포트폴리오 사이트에\n방문해주셔서 감사합니다!'
    const introTxtArr = introTxt.split('').map((char) => (char === '\n' ? '<br />' : char))

    //  refs
    const bodyTimer = ref(0)
    const eyeTimer = ref(0)
    const txtTimer = ref(0)
    const bodyFlg = ref(false)
    const eyeFlg = ref(true)
    const offsetX = ref(-50)
    const offsetY = ref(-50)
    const innerTxt = ref('')
    const txtIdx = ref(0)

    // computed: 몸통 이미지 변경
    const bodyIdx = computed(() => (bodyFlg.value ? 1 : 0))

    // computed: 눈 깜빡임 처리
    const eyeClass = computed(() => (eyeFlg.value ? '' : 'close'))

    // function: 동공 움직임 처리
    const handleEye = (event) => {
      let _offsetX = Math.ceil((356 - event.offsetX) / 100)
      let _offsetY = Math.ceil((184 - event.offsetY) / 30)
      if (Math.abs(_offsetX) > 14) _offsetX = 7
      if (Math.abs(_offsetY) > 14) _offsetY = 0
      offsetX.value = -50 - _offsetX
      offsetY.value = -50 - _offsetY
    }

    // onMounted
    onMounted(() => {
      bodyTimer.value = setInterval(() => (bodyFlg.value = !bodyFlg.value), 1000)

      eyeTimer.value = setInterval(() => {
        eyeFlg.value = false
        setTimeout(() => (eyeFlg.value = true), 100)
      }, 3000)

      txtTimer.value = setInterval(() => {
        innerTxt.value += introTxtArr[txtIdx.value++]
        if (txtIdx.value >= introTxtArr.length) {
          setTimeout(() => {
            txtIdx.value = 0
            innerTxt.value = ''
          }, 200)
        }
      }, 200)
    })

    // onUnmounted
    onUnmounted(() => {
      clearInterval(bodyTimer.value)
      clearInterval(eyeTimer.value)
      clearInterval(txtTimer.value)
    })

    // return
    return {
      // variables
      bodyIdx,
      offsetX,
      offsetY,
      eyeClass,
      innerTxt,

      // images
      catTail,
      catBody,
      catEyeClose,
      catEye,
      catEyeBack,
      catEyeLight,
      catHand,

      // handle function
      handleEye
    }
  }
}
</script>
