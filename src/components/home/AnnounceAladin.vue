<template>
    <section class="site_announce">
        <ul class="screen">
            <li v-for="(item, idx) of siteImgArr" :key="`site_img_${idx}`" :class="idx === screenIdx ? 'active' : ''">
                <a href="/"><img :src="item" alt="알라딘 웹사이트 목업" /></a>
            </li>
        </ul>
        <figure class="beam_pro">
            <img :src="BeamProjectLight" alt="빔프로젝터 불빛"
                :style="`filter:hue-rotate(${randomHue}deg); opacity:${randomeNum};`" />
            <img :src="BeamProject" alt="빔프로젝터" />
        </figure>
        <figure class="site_announce_mascot">
            <template v-for="item of catImgArr" :key="`cat_img_${item}`">
                <img :src="item" alt="마스코트 고양이" />
            </template>
            <img :src="catHeadArr[headIdx]" alt="마스코트 고양이 머리" />
            <figcaption>
                메인페이지와 서적, 굿즈 등<br />
                서브페이지도 같이<br />
                사이트로 구현 했습니다<br />
                제품들마다의 상세페이지도<br />
                구현했으며 대중적인 <br />
                웹 쇼핑몰에서 볼 수 있는<br />
                버튼형 리스트 및 서브메뉴<br />
                구현을 통해 심플한<br />
                모양으로 재구성했습니다
            </figcaption>
        </figure>
    </section>
</template>

<script>
import { onMounted, onUnmounted, computed, ref } from 'vue';

import SiteMockUp01 from '@/assets/img/siteMockUp01.jpg';
import SiteMockUp02 from '@/assets/img/siteMockUp02.jpg';
import SiteMockUp03 from '@/assets/img/siteMockUp03.jpg';
import SiteMockUp04 from '@/assets/img/siteMockUp04.jpg';
import BeamProject from '@/assets/img/beampro_pro.png';
import BeamProjectLight from '@/assets/img/beampro_beam.png';
import CatBody from '@/assets/img/siteIntro+Body.png';
import CatHead from '@/assets/img/siteIntro+HeadOpenEye.png';
import CatHeadClose from '@/assets/img/siteIntro+HeadCloseEye.png';
import CatHandLeft from '@/assets/img/siteIntro+LeftHand.png';
import CatHandRight from '@/assets/img/siteIntro+RightHand.png';

export default {
    setup() {
        // constant
        const siteImgArr = [SiteMockUp01, SiteMockUp02, SiteMockUp03, SiteMockUp04];
        const catImgArr = [CatBody, CatHandRight, CatHandLeft];
        const catHeadArr = [CatHead, CatHeadClose];
        const randomeNum = ref((Math.ceil(Math.random() * 10) * 0.1) + 0.3);
        const randomHue = ref(Math.ceil(Math.random() * 100) / 2);

        // refs
        const headTimer = ref(0);
        const screenTimer = ref(0);
        const headFlg = ref(true);
        const screenIdx = ref(0);
        const randomTimer = ref(0);

        // computed: 머리 이미지 인덱스 처리
        const headIdx = computed(() => headFlg.value ? 0 : 1);

        // onMounted
        onMounted(() => {
            headTimer.value = setInterval(() => {
                headFlg.value = !headFlg.value;
                setTimeout(() => headFlg.value = !headFlg.value, 100);
            }, 3000);
            screenTimer.value = setInterval(() => {
                screenIdx.value++
                if (screenIdx.value === 3) screenIdx.value = 0;
            }, 2000);
            randomTimer.value = setInterval(() => {
                randomeNum.value = (Math.ceil(Math.random() * 10) * 0.1) + 0.3;
                randomHue.value = Math.ceil(Math.random() * 100) / 2;
            }, 500);
        });

        // onUnmounted
        onUnmounted(() => {
            clearInterval(headTimer.value);
            clearInterval(screenTimer.value);
            clearInterval(randomTimer.value);
        });

        // return
        return {
            // variables
            headIdx,
            screenIdx,
            randomeNum,
            randomHue,

            // images
            siteImgArr,
            catImgArr,
            catHeadArr,
            BeamProject,
            BeamProjectLight,
        }
    }
}
</script>