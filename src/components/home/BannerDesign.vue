<template>
  <section class="banner_design">
    <h2>Banner Design</h2>
    <p>자세한 내용을 보고싶으시다면 클릭해주세요!</p>
    <ul class="bnr_card_list">
      <li v-for="(item, idx) of bnrCardArr" :key="`bnr_card_${idx}`">
        <button @click="handleBnrIdx(idx)"><img :src="item" alt="배너카드 썸네일" /></button>
      </li>
    </ul>
    <figure class="cat_hand"><img :src="CatHand" alt="고양이앞발" /></figure>
    <article :class="mockupClass">
      <ul class="mockup_list">
        <li
          v-for="(item, idx) of bnrMockupArr"
          :key="`bnr_mockup_${idx}`"
          :class="bnrIdx === idx ? 'active' : ''"
        >
          <figure><img :src="item.img" alt="배너카드 썸네일" /></figure>
          <p v-html="item.desc"></p>
        </li>
      </ul>
      <ul class="btn_list">
        <li><button @click="handleMockupSlide(false)">prev</button></li>
        <li><button @click="handleMockupSlide(true)">next</button></li>
        <li><button @click.prevent="handleClose">close</button></li>
      </ul>
    </article>
  </section>
</template>

<script>
import { ref, computed } from 'vue'

import BnrCard01 from '@/assets/img/bannerCard_01.png'
import BnrCard02 from '@/assets/img/bannerCard_02.png'
import BnrCard03 from '@/assets/img/bannerCard_03.png'
import BnrCard04 from '@/assets/img/bannerCard_04.png'
import BnrCard05 from '@/assets/img/bannerCard_05.png'
import BnrCard06 from '@/assets/img/bannerCard_06.png'
import BnrCard07 from '@/assets/img/bannerCard_07.png'
import BnrCard08 from '@/assets/img/bannerCard_08.png'

import BnrMockup01 from '@/assets/img/bannerMockup01.png'
import BnrMockup02 from '@/assets/img/bannerMockup02.png'
import BnrMockup03 from '@/assets/img/bannerMockup03.png'
import BnrMockup04 from '@/assets/img/bannerMockup04.png'
import BnrMockup05 from '@/assets/img/bannerMockup05.png'
import BnrMockup06 from '@/assets/img/bannerMockup06.png'
import BnrMockup07 from '@/assets/img/bannerMockup07.png'
import BnrMockup08 from '@/assets/img/bannerMockup08.png'

import CatHand from '@/assets/img/hand_04.png'

export default {
  setup() {
    const bnrCardArr = [
      BnrCard01,
      BnrCard02,
      BnrCard03,
      BnrCard04,
      BnrCard05,
      BnrCard06,
      BnrCard07,
      BnrCard08
    ]
    const bnrMockupArr = [
      {
        img: BnrMockup01,
        desc: '해당 배너는 네이버 행사를 홍보할 목적으로 제작한 배너입니다 일러스트레이터로 작업했으며 심볼을 등록해 스프레이로 랜덤하게 뿌린 벡터아이콘으로 제작했으며 주로 사용한 폰트는 본고딕으로 깔끔한 느낌이 나도록 디자인했습니다 강조해야 할 문구는 두껍게 주변을 꾸며주고 부수적인 문구를 얇게 사용해 강약을 조절했습니다<span>Font: Noto Sans KR</span><span>Color: #763ffc</span>'
      },
      {
        img: BnrMockup02,
        desc: '메인 색은 하늘색과 옅은 회색으로 뒷배경을 빼 깔끔한 느낌이 들도록 디자인했습니다. 요점과 이벤트의 주제는 메인색과 두꺼운 글씨로 강조했으며 이벤트 기간이나 마케팅 문구는 얇고 검은 색으로 처리해 알아보기 쉽도록 처리했습니다 다른 종류의 액체를 담은 일러스트 유리컵의 모양을 한눈에 볼 수 있도록 벡터이미지로 클리핑 해 누끼를 땄습니다<span>Font: Noto Sans KR</span><span>Color: #2896ce #f7f8fb</span>'
      },
      {
        img: BnrMockup03,
        desc: '블랙 프라이데이의 메인 색인 검은색을 뒤에 깔아 블랙프라이데이임을 강조한 배너입니다 저작권에 문제가 되지 않을 무료 이미지 사이트에서 가져온 이미지와 무료 폰트인 본고딕을 이용해 디자인 했다는 점이 특징입니다 임의로 만들어진 배너이지만 어떠한 내용이 들어가더라도 어색하지 않도록 채우기 텍스트를 기입해 디자인했습니다<span>Font: Noto Sans KR</span><span>Color: #000000 #ffffff</span>'
      },
      {
        img: BnrMockup04,
        desc: '샐러드 특유의 초록색과 깔끔한 마블 텍스쳐를 이용해 적당한 밀도를 채워 허전해보이지 않도록 구성한 배너입니다 자연물을 뒤에 한번 더 깔아 위에 올라올 샐러드 보울 내용들이 신선하게 느껴지도록 추가했습니다 적은 텍스트로 인해 강단을 주어 중간두께의 텍스트를 이용해 밀도와 중요도를 챙겨 디자인했습니다<span>Font: Noto Sans KR</span><span>Color: #25681f</span>'
      },
      {
        img: BnrMockup05,
        desc: '백그라운드로는 행사컨텐츠를 크게 키워 블러를 넣은 후 다른 제품들을 누끼를 따서 배치하는 방식으로 작업했습니다 사용한 요소들 중 그나마 공통적으로 공유하는 색채인 네이비색으로 메인 단락을 강조 후 부수적인 용어들을 흰색으로 빼서 주요 요소들만 잘 보이도록 디자인 했습니다<span>Font: Noto Sans KR</span><span>Color: #080054 #e3e4e6</span>'
      },
      {
        img: BnrMockup06,
        desc: '일러스트레이터를 이용해 만든 배너입니다 흰선을 이용해 체크무늬를 넣어 심플하지만 가득찬 느낌이 들 수 있도록 구성했으며 검은색 선을 이용한 심볼들을 이용해 스프레이로 뿌려 꾸밈 요소를 이용했습니다 이벤트 제품이 덩그러니 있는 것 보다 안정감이 들도록 처리했습니다.<span>Font: Noto Sans KR</span><span>Color: #ffb600 #fff200 #ff7900</span>'
      },
      {
        img: BnrMockup07,
        desc: '가을 이벤트로 할인 및 쿠폰이 붙은 이벤트 배너입니다 포토샵으로 한번 누끼를 딴 후 그 제품들의 테두리를 스트로크로 거칠게 딴 뒤 뒷배경과 어우러지도록 디자인했습니다. 가을 특유의 화려하지만 명도가 낮은 색을 위주로 사용해 색체적으로도 아늑함이 느껴지도록 색을 조정해서 제작했습니다.<span>Font: Noto Sans KR</span><span>Color: #ffb400 #ff5e4a</span>'
      },
      {
        img: BnrMockup08,
        desc: '투썸에서 판매하는 제품라인을 배너로 디자인했습니다 현재 사람들이 많이 사용하는 선과 다이아몬드 쉐이프를 이용해 트렌디함을 잡았으며 커피 특유의 색을 떠올리게 하는 짙은 원두색을 배경으로 곱하기를 사용했습니다 사용한 툴은 어도비 일러스트레이터로 해당 객체를 잡아 지정했습니다.<span>Font: Pretendard</span><span>Color: #2a1006 #351407</span>'
      }
    ]
    const bnrIdx = ref(0)
    const isMockupActive = ref(false)
    const isClosed = ref(false)

    const mockupClass = computed(() => {
      let tmpTxt = 'bnr_mockup_list'
      if (isMockupActive.value) tmpTxt += ' active'
      if (isClosed.value) tmpTxt += ' closed'
      return tmpTxt
    })

    const handleBnrIdx = (idx) => {
      bnrIdx.value = idx
      isMockupActive.value = true
    }

    const handleMockup = (state) => {
      isMockupActive.value = state
      isClosed.value = false
    }

    const handleClose = () => {
      isClosed.value = true
      setTimeout(() => handleMockup(false), 3000)
    }

    const handleMockupSlide = (state) => {
      let tmpIdx = bnrIdx.value
      state ? tmpIdx++ : tmpIdx--
      bnrIdx.value = tmpIdx > 7 ? 0 : tmpIdx < 0 ? 7 : tmpIdx
    }

    return {
      CatHand,
      bnrCardArr,
      bnrMockupArr,
      bnrIdx,
      isMockupActive,

      mockupClass,

      handleBnrIdx,
      handleMockup,
      handleClose,
      handleMockupSlide
    }
  }
}
</script>
