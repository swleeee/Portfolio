import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import tuthree_img1 from '../images/project/Tuthree/TuThree1.png';
import tuthree_img2 from '../images/project/Tuthree/TuThree2.png';
import tuthree_img3 from '../images/project/Tuthree/TuThree3.png';
import tuthree_img4 from '../images/project/Tuthree/TuThree4.png';
import tuthree_img5 from '../images/project/Tuthree/TuThree5.png';
import tuthree_img6 from '../images/project/Tuthree/TuThree6.png';
import tuthree_img7 from '../images/project/Tuthree/TuThree7.png';
import tuthree_img8 from '../images/project/Tuthree/TuThree8.png';
import tuthree_img9 from '../images/project/Tuthree/TuThree9.png';
import tuthree_img10 from '../images/project/Tuthree/TuThree10.png';
import tuthree_img11 from '../images/project/Tuthree/TuThree11.png';
import tuthree_img12 from '../images/project/Tuthree/TuThree12.png';
import tuthree_img13 from '../images/project/Tuthree/TuThree13.png';
import tuthree_img14 from '../images/project/Tuthree/TuThree14.png';
import tuthree_img15 from '../images/project/Tuthree/TuThree15.png';
import tuthree_img16 from '../images/project/Tuthree/TuThree16.png';
import tuthree_img17 from '../images/project/Tuthree/TuThree17.png';

import pyhu_img1 from '../images/project/PYHU/PYHU1.png';
import pyhu_img2 from '../images/project/PYHU/PYHU2.png';
import pyhu_img3 from '../images/project/PYHU/PYHU3.png';
import pyhu_img4 from '../images/project/PYHU/PYHU4.png';
import pyhu_img5 from '../images/project/PYHU/PYHU5.png';
import pyhu_img6 from '../images/project/PYHU/PYHU6.png';
import pyhu_img7 from '../images/project/PYHU/PYHU7.png';
import pyhu_img8 from '../images/project/PYHU/PYHU8.png';
import pyhu_img9 from '../images/project/PYHU/PYHU9.png';
import pyhu_img10 from '../images/project/PYHU/PYHU10.png';
import pyhu_img11 from '../images/project/PYHU/PYHU11.png';
import pyhu_img12 from '../images/project/PYHU/PYHU12.png';

import ProjectCard from '../components/ProjectCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true, // 슬라이드 밑에 점 보이게
  infinite: true, // 무한으로 반복
  speed: 500,
  //   autoplay: true,
  autoplaySpeed: 4000, // 넘어가는 속도
  slidesToShow: 1, // 4장씩 보이게
  slidesToScroll: 1, // 1장씩 뒤로 넘어가게
  centerMode: true,
  centerPadding: '5px', // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
  arrows: false,
};

const data = [
  {
    tag: '팀(3인) / 12주',
    name: 'TuThree',
    description: '웹 기반 과외 통합 플랫폼',
    content:
      '과외 선생님과 학생 간 과외 매칭을 도와주고 매칭이 된 그룹은 일정 관리 시스템을 통해 과외에 대한 전반적인 사항을 관리할 수 있는 웹 사이트',
    func: [
      {
        overview: '과외 매칭',
        detail:
          '과외 선생님과 학생이 회원가입을 하면 입력한 과외 정보가 자동적으로 업로드 됩니다. 마음이 드는 선생님 혹은 학생을 선택하여 채팅을 통해 충분한 상의 후 과외 등록하기/수락 버튼을 통해 과외 매칭을 성사시킵니다.',
      },
      {
        overview: '일정 관리',
        detail:
          '매칭이 된 선생님과 학생은 캘린더를 통하여 일정을 관리할 수 있으며 수업보고서를 통해 진행사항 및 특이사항을 기록할 수 있습니다. 또한 부모사용자는 해당 클래스를 열람하여 자녀의 과외사항을 확인할 수 있습니다',
      },
      {
        overview: '화상 강의',
        detail:
          'webRTC를 통해 사용자들간의 미디어 공유를 가능하게 하여 캠, 음성, 화면 등을 On/Off 할 수 있습니다.',
      },
      {
        overview: '채점 서비스',
        detail:
          '선생님이 문제지와 답안지를 작성하여 업로드하면 학생이 문제지를 다운 받아 해당 폼에 답안을 작성하고 제출하면 자동으로 채점되어 결과를 확인할 수 있습니다.',
      },
    ],
    tech: 'React, MobX',
    link: 'https://github.com/swleeee/tuthree-front',

    img_src: [
      `${tuthree_img1}`,
      `${tuthree_img2}`,
      `${tuthree_img3}`,
      `${tuthree_img4}`,
      `${tuthree_img5}`,
      `${tuthree_img6}`,
      `${tuthree_img7}`,
      `${tuthree_img8}`,
      `${tuthree_img9}`,
      `${tuthree_img10}`,
      `${tuthree_img11}`,
      `${tuthree_img12}`,
      `${tuthree_img13}`,
      `${tuthree_img14}`,
      `${tuthree_img15}`,
      `${tuthree_img16}`,
      `${tuthree_img17}`,
    ],
  },
  {
    tag: '팀(5인) / 4주',
    name: '푸쳐헬썹',
    description: '건강 관리 앱',
    content:
      '코로나로 인해 건강관리 시설 이용의 어려움이 따르기 때문에 집에서도 쉽게 운동을 하고 식단 관리를 도와주며 챌린지를 통해 목표를 설정하여 진행사항을 확인할 수 있는 앱',
    func: [
      {
        overview: '식단 분석',
        detail:
          'Firebase에서 제공하는 ML Kit API를 사용하여 객체를 분류를 한 후 번역한 것과 해당 칼로리들을 DB에 저장한다. 사용자가 사진을 찍으면 음식이 인식이 되어 어떤 음식인지, 해당 칼로리는 얼마인지 보여준다',
      },
      {
        overview: '운동 동작 인식',
        detail:
          'Teachable Machine을 통해 운동 모델을 빠르게 구축하여 추출한다. 사용자가 해당 운동을 선택하면 웹뷰를 통해 동작을 인식한다. 해당 동작을 정확히 수행했을 경우 카운트가 되며 총 개수를 채웠을 경우 성공 처리가 된다',
      },
      {
        overview: '챌린지',
        detail:
          '사용자가 챌린지 이름, 모집 기간, 챌린지 기간, 구성 내용 등을 작성하여 챌린지를 추가할 수 있으며 누구나 챌린지를 신청하여 참여할 수 있다. 챌린지에 참여한 사용자는 챌린지 기간 동안 미션을 수행하며 진행사항을 확인할 수 있다.',
      },
    ],
    tech: 'Android, Java, Tensorflow',
    link: '',

    img_src: [
      `${pyhu_img1}`,
      `${pyhu_img2}`,
      `${pyhu_img3}`,
      `${pyhu_img4}`,
      `${pyhu_img5}`,
      `${pyhu_img6}`,
      `${pyhu_img7}`,
      `${pyhu_img8}`,
      `${pyhu_img9}`,
      `${pyhu_img10}`,
      `${pyhu_img11}`,
      `${pyhu_img12}`,
    ],
  },
];
function Project() {
  return (
    <OuterContainer>
      <InnerContainer>
        <Title>
          <div>Projects</div>
        </Title>
        {/* <Line /> */}
        {/* <Content> */}
        <SliderContainer {...settings}>
          {/* <Content style={{ display: 'flex' }}> */}
          {data.map((item) => {
            return (
              //   <Content>
              <ProjectCard item={item} />
              //   </Content>
            );
          })}
          {/* </Content> */}
        </SliderContainer>
        {/* </Content> */}
      </InnerContainer>
    </OuterContainer>
  );
}

export default Project;

const OuterContainer = styled.div`
  //   background-color: #dac3ac;
  //   background-color: #746454;
  //   background-color: #7f705e;
  //   background-color: #6971fb;
  //   background-color: #0f147a;

  //   background-color: #fa8c00;
  //   background-color: #ddd4ae;

  width: 100%;
  display: flex;
  justify-content: center;
`;
const InnerContainer = styled.div`
  padding: 40px 0;
  //   overflow: hidden;

  @media (min-width: 992px) and (max-width: 1299.98px) {
  }

  @media (min-width: 1300px) {
    width: 1300px;
  }
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  //   border-bottom: 1px solid rgba(0, 0, 0, 0.7);
  width: fit-content;
  padding: 10px 0;
  display: flex;
  //   justify-content: center;
  width: 100%;
  //   color: #746454;
  padding-left: 20px;
`;
const Line = styled.div`
  width: 80%;
  height: 1px;
  //   color: #fff;
  border-top: 3px solid #fff;
`;
const Content = styled.div`
  //   display: flex;
  //   justify-content: flex-start;

  //   flex-wrap: wrap;
  //   width: 1300px;
  border: 3px solid red;
  width: 100%;
  display: flex;
  //   flex-direction: column;
`;

const Items = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  border: 3px solid green;
  width: 100%;
`;

const SliderContainer = styled(Slider)`
  //   border: 2px solid green;
  height: 600px;
  width: 100%;
  //   background-color: rgba(0, 0, 0, 0.5);
  //   background-color: #7f705e;
  //   border-radius: 5px;
  //   box-shadow: 4px 4px 20px 5px rgba(0, 0, 0, 0.5);
  //   box-shadow: -5px 7px 7px rgba(0, 0, 0, 0.8);
  //   box-shadow: 3px 3px 2px white;
  > div:nth-of-type(1) {
    // border: 3px solid red;
    width: 100%;
    // height: 400px;
    height: 100%;
    overflow: hidden;
    // position: relative;
    // background-image: url(https://pbs.twimg.com/profile_banners/1285511592/1470391779/1500x500);
    > div {
      position: absolute;
      //   top: 20%;
      //   left: 20%;
      //   padding: 0 5%;
      box-sizing: border-box;

      //   height: 100%;
    }
  }
  // background-color: #342342;
  .slick-dots {
    // border: 3px solid orange;
    bottom: 10px;
    // left: 10px;
  }
`;
