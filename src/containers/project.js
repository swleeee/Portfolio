import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import tuthree_img from '../images/project/Tuthree/TuThree1.png';
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
    tag: '팀(3인)',
    name: 'TuThree',
    description: '웹 기반 과외 통합 플랫폼',
    content:
      '과외 선생님과 학생 간 과외 매칭을 도와주고 매칭이 된 그룹은 일정 관리 시스템을 통해 과외에 대한 전반적인 사항을 관리할 수 있는 웹 사이트입니다.',
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

    src: `${tuthree_img}`,
  },
  {
    tag: '팀(3인)',
    name: 'TuThree',
    description: '웹 기반 과외 통합 플랫폼',
    content:
      '과외 선생님과 학생 간 과외 매칭을 도와주고 매칭이 된 그룹은 일정 관리 시스템을 통해 과외에 대한 전반적인 사항을 관리할 수 있으며 해당 자녀의 부모님 또한 열람할 수 있습니다.',
    func: [
      {
        overview: '과외 매칭',
        detail: 'sdfsdfsdf',
      },
      {
        overview: '일정 관리',
        detail: 'sdfsdfsdf',
      },
      {
        overview: '화상 강의',
        detail: 'sdfsdfsdf',
      },
      {
        overview: '채점 서비스',
        detail: 'sdfsdfsdf',
      },
    ],
    tech: 'React, MobX',
    link: 'https://github.com/swleeee/tuthree-front',

    src: `${tuthree_img}`,
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
  height: 500px;
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
