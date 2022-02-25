import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import SkillCard from '../components/SkillCard';
import Title from '../components/Title';
import OuterContainer from '../components/OuterContainer';
import InnerContainer from '../components/InnerContainer';

import hcj_img from '../images/skill/htmlcssjs.png';
import react_img from '../images/skill/react.png';
import mobx_img from '../images/skill/mobx.png';
import nextjs_img from '../images/skill/nextjs2.jpg';
import git_img from '../images/skill/git.png';
import github_img from '../images/skill/github.png';
import nodejs_img from '../images/skill/nodejs.png';

const data = [
  {
    name: 'HTML/CSS/JavaScript',
    content:
      '웹접근성을 고려하여 HTML을 작성합니다. float, flex 등을 이용하여 레이아웃을 구성하며 미디어 쿼리를 활용하여 반응형 웹을 만듭니다. es5, es6 등의 문법과 기본 구조를 이해하고 있습니다',
    src: `${hcj_img}`,
  },
  {
    name: 'React',
    content:
      'react의 동작 원리를 이해하고 있으며 class형 컴포넌트 및 function형 컴포넌트를 사용하는데 주로 LifeCycle을 활용한 class형 컴포넌트를 사용합니다. hooks에서는 useState, UseEffect를 사용할 수 있습니다. styled-compnents를 사용하여 컴포넌트 스타일링을 합니다.',
    src: `${react_img}`,
  },
  {
    name: 'MobX',
    content:
      'observable, action 함수와 decorator 기능을 사용합니다. 컴포넌트로부터 action 및 state를 분리하여 작성합니다.',
    src: `${mobx_img}`,
  },
  {
    name: 'Next.js',
    content:
      '실무에서 Next.js를 사용한 경험이 있으며 약간의 서버 사이드 렌더링 개념을 이해하고 있습니다.',
    src: `${nextjs_img}`,
  },
  {
    name: 'Git',
    content:
      'Git의 기본적인 원리를 이해하고 있으며 간단한 명령어(add, commit remote, push, log) 등을 사용할 수 있습니다.',
    src: `${git_img}`,
  },
  {
    name: 'GitHub',
    content: 'clone, fork, pull request을 사용하여 협업한 경험이 있습니다.',
    src: `${github_img}`,
  },

  {
    name: 'Node.js',
    content:
      '리눅스 환경에서 라즈베리파이에 nodejs를 사용하여 다양한 모듈/센서(LED, 버져, 버튼, 조이스틱, 조도, 사운드, 초음파, 터치) 제어 및 socket.io를 활용하여 실시간으로 데이터를 전송한 경험이 있습니다.',
    src: `${nodejs_img}`,
  },
];

function Skill() {
  return (
    <OuterContainer bg="#E38A8A">
      <InnerContainer>
        <Title word="SKILLS" />
        {/* <Line /> */}
        <Content>
          {/* <Items> */}
          {data.map((item) => {
            return <SkillCard item={item} />;
          })}
          {/* </Items> */}
        </Content>
      </InnerContainer>
    </OuterContainer>
  );
}

export default Skill;

// const OuterContainer = styled.div`
//   //   background-color: #dac3ac;
//   //   background-color: #746454;
//   //   background-color: #7f705e;
//   //   background-color: #6971fb;
//   //   background-color: #0f147a;

//   //   background-color: #fa8c00;
//   background-color: #ddd4ae;

//   width: 100%;
//   display: flex;
//   justify-content: center;
// `;
// const InnerContainer = styled.div`
//   padding: 40px 0;

//   @media (min-width: 992px) and (max-width: 1299.98px) {
//   }

//   @media (min-width: 1300px) {
//     width: 1300px;
//   }
// `;

const Line = styled.div`
  width: 80%;
  height: 1px;
  //   color: #fff;
  border-top: 3px solid #fff;
`;
const Content = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  //   align-content: space-around;
  flex-wrap: wrap;
  //   margin: 0 auto;
  //   margin-right: auto;
  //   width: 100%;
  //   border: 1px solid red;
`;

const Items = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  border: 3px solid green;
  width: 100%;
`;
