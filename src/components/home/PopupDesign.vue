<template>
  <section class="popup_design">
    <h2>Pop Up Design</h2>
    <p>직접 만든 팝업카드 디자인입니다<br />자세히 보고싶으시다면 클릭해주세요!</p>
    <figure class="hand_left"><img :src="LeftHand" alt="" /></figure>
    <ul class="card_popup">
      <li
        v-for="(item, idx) of cardArr"
        :key="`card_img_${idx}`"
        :class="`card_${(idx + cardIdx) % cardArr.length}`"
        @mouseenter="handleStopTimer"
        @mouseleave="handleCardTimer"
      >
        <button @click.prevent="handleMockup(true, cardIdx)">
          <img :src="item" alt="팝업 이미지 미리보기" />
        </button>
      </li>
    </ul>
    <figure class="hand_right"><img :src="RightHand" alt="" /></figure>
    <article :class="isActive ? 'card_detail active' : 'card_detail'">
      <ul class="mockup_list">
        <li
          v-for="(item, idx) of mockupArr"
          :key="`pop_mockup_img_${idx}`"
          :class="idx === mockupIdx ? 'active' : ''"
        >
          <figure><img :src="item.img" alt="팝업 이미지 미리보기" /></figure>
          <p v-html="item.desc"></p>
        </li>
      </ul>
      <ul class="btn_list">
        <li><button @click.prevent="handleMockupIdx(false)" class="prev">prev</button></li>
        <li><button @click.prevent="handleMockupIdx(true)" class="next">next</button></li>
        <li><button @click.prevent="handleMockup(false)">close</button></li>
      </ul>
    </article>
    <figure class="deco"><img :src="BackElement" alt="뒷배경 꾸밈 요소" /></figure>
  </section>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue'

import LeftHand from '@/assets/img/hand_02.png'
import RightHand from '@/assets/img/hand_03.png'
import BackElement from '@/assets/img/popup_back.png'

import PopupCard01 from '@/assets/img/popupCard_01.png'
import PopupCard02 from '@/assets/img/popupCard_02.png'
import PopupCard03 from '@/assets/img/popupCard_03.png'
import PopupCard04 from '@/assets/img/popupCard_04.png'
import PopupCard05 from '@/assets/img/popupCard_05.png'
import PopupCard06 from '@/assets/img/popupCard_06.png'
import PopupCard07 from '@/assets/img/popupCard_07.png'
import PopupCard08 from '@/assets/img/popupCard_08.png'
import PopupCard09 from '@/assets/img/popupCard_09.png'

import PopupMockup01 from '@/assets/img/popupMockup01.png'
import PopupMockup02 from '@/assets/img/popupMockup02.png'
import PopupMockup03 from '@/assets/img/popupMockup03.png'
import PopupMockup04 from '@/assets/img/popupMockup04.png'
import PopupMockup05 from '@/assets/img/popupMockup05.png'
import PopupMockup06 from '@/assets/img/popupMockup06.png'
import PopupMockup07 from '@/assets/img/popupMockup07.png'
import PopupMockup08 from '@/assets/img/popupMockup08.png'
import PopupMockup09 from '@/assets/img/popupMockup09.png'

export default {
  setup() {
    const cardArr = [
      PopupCard01,
      PopupCard02,
      PopupCard03,
      PopupCard04,
      PopupCard05,
      PopupCard06,
      PopupCard07,
      PopupCard08,
      PopupCard09
    ]
    const mockupArr = [
      {
        img: PopupMockup01,
        desc: '필기체를 디자인요소로 사용해 제작한 팝업입니다 갈색 오일병에 담겼기도 하고 제작당시 시기인 가을에 맞는 컬러를 이용해 아늑한 느낌을 들 수 있도록 색보정한 후 본고딕 서체를 이용해서 디자인했습니다</p><span>Font: Noto Sans KR</span>Color: #d2c9b5 #5b3421<span></span></figcaption>'
      },
      {
        img: PopupMockup02,
        desc: '이벤트에 참여하는 메인 제품들을 누끼딴 후 뒤에 우주 이미지를 배경으로 깔아 톤다운 한 뒤 명조체로 가운데정렬해 디자인한 팝업입니다. 행사의 주제가 과학인 점과 메인 상품이 우주임을 참고했습니다!</p><span>Font: NanumMyeongjo</span><span>Color: #ffffff #000000</span>'
      },
      {
        img: PopupMockup03,
        desc: '메인 주제부에 있는 사진을 펜툴로 누끼딴 후 그 벡터 이미지파일을 이용해 다른색들을 그림자처럼 배치해 입체적인 느낌이 들도록 구현했습니다 임의의 벡터파일도 직접 제작했으며 뒤의 패턴도 등록해서 응용했습니다. 상단과 좌우 사이드의 공백엔 필기체로 써진 글씨를 엘리먼트로 넣어 허전해보이지 않도록 처리했습니다.</p><span>Font: Kunstler Script + Cambria</span><span>Color: #262262 #ff9e02 #be6cff #ffe603</span>'
      },
      {
        img: PopupMockup04,
        desc: '우리나라 추석 느낌을 살릴 수 있도록 우리나라 고유 문양을 검색해 그것을 참고해서 디자인 엘레먼트를 디자인한 팝업입니다. 높은 채도 위주로 사용해 깔끔한 느낌이 들도록 구성했습니다.</p><span>Font: 제주명조</span><span>Color: #ff910e #0e00bf #ffaa5c</span>'
      },
      {
        img: PopupMockup05,
        desc: '일러스트레이터에서 기본적으로 제공되는 폰트 그리고 스트로크 종류를 이용해 어도비 일러스트레이터에서 제공되는 것 만으로도 디자인이 됨을 알려줄 수 있는것을 목적으로 두며 디자인했습니다. 다이아몬드 무늬의 경우 단순한 폴리곤을 만들어 낸 후 그것을 심볼로 만들어 브러쉬로 사용했으며 지그재그 등 원형의 모양을 유지한것은 Transform을 이용해 만들었습니다.</p><span>Font: Cambria Bold Italic</span><span>Color: #ff0080 #000000 #ffffff</span>'
      },
      {
        img: PopupMockup06,
        desc: '크리스마스 케잌 데코레이트 워크샵 행사를 기반으로 만든 팝업입니다. 크리스마스의 분위기를 느낄 수 있도록 빨간색과 노란색의 대비 그리고 솔잎으로 이뤄진 부분은 일러스트레이터의 추적을 이용해 누끼를 딴 뒤 클리핑했으며 다른 요소들은 일러스트레이터의 펜툴로 마감해 디자인했습니다.</p><span>Font: Country + Noto Sans KR</span><span>Color: #880000 #ffff00</span>'
      },
      {
        img: PopupMockup07,
        desc: '무료이미지사이트에서 찾은 좋은 이미지를 누끼딴 후 이벤트 내용을 기재한 팝업입니다. 세로쓰기를 이용해 세로형 팝업을 구현했습니다. 메인색을 짙은 초록으로 설정해 뒷배경이잘 묻히도록 디자인했습니다.</p><span>Font: Noto Sans KR</span>Color: #d2c9b5 #5b3421<span></span></figcaption>'
      },
      {
        img: PopupMockup08,
        desc: '오늘의집 이벤트인 홈앤리빙을 참고해 만들어진 팝업입니다. 뒷배경으론 문제가 생기지 않을 무료 이미지로 깔았으며 Home 과 Living의 뒤에 들어간 오브젝트들은 어도비 일러스트레이터의 지그재그만을 이용해 만들어낸 무료 소스입니다. 이벤트 주제를 필기체로 사용함으로 정보전달도 하되 잘 어우러지도록 디자인 했습니다.</p><span>Font: Noto Noto Sans KR + Ms Madi Regular</span><span>Color: #ffa624 #ff97b7 #2bed8b #ffe0ca</span>'
      },
      {
        img: PopupMockup09,
        desc: '타이포그래피처럼 타이핑과 약간의 선 엘리먼트만을 이용해 디자인했습니다. 색과 얇은 선만으로도 가득 찬 느낌이 들 수 있도록 전체 배경에 글씨로 깔았습니다. 또한 보색대비를 이용해 친숙하게 느껴질 수 있도록 구현했습니다.</p><span>Font: Noto Sans KR</span><span>Color: #9b00ff #fbb111</span>'
      }
    ]
    const cardTimer = ref(0)
    const cardIdx = ref(0)
    const isActive = ref(false)
    const mockupIdx = ref(0)

    const handleMockup = (state, idx) => {
      isActive.value = state
      mockupIdx.value = idx
    }

    const handleMockupIdx = (state) => {
      if (state) {
        mockupIdx.value++
        if (mockupIdx.value === 9) mockupIdx.value = 0
      } else {
        mockupIdx.value--
        if (mockupIdx.value === -1) mockupIdx.value = 8
      }
    }

    const handleStopTimer = () => clearInterval(cardTimer.value)

    const handleCardTimer = () => {
      cardTimer.value = setInterval(() => {
        cardIdx.value++
        if (cardIdx.value === 9) cardIdx.value = 0
      }, 2000)
    }

    // onMounted
    onMounted(() => handleCardTimer())

    // onUnmounted
    onUnmounted(() => handleStopTimer())

    return {
      LeftHand,
      RightHand,
      BackElement,
      cardArr,
      mockupArr,
      cardIdx,
      cardTimer,
      isActive,
      mockupIdx,

      handleCardTimer,
      handleStopTimer,
      handleMockup,
      handleMockupIdx
    }
  }
}
</script>
