import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import github_img from '../images/github2.png';
import mail_img from '../images/contact/mail.png';

function Contact() {
  return (
    <OuterContainer>
      <InnerContainer>
        <Title>
          <div>Contact</div>
        </Title>
        <Content>
          {/* <ImgBox>
            <img src={github_img} />
            <img src={mail_img} />
          </ImgBox> */}
          <div>tkddnjs0687@naver.com</div>
        </Content>
      </InnerContainer>
    </OuterContainer>
  );
}

export default Contact;

const OuterContainer = styled.div`
  //   background-color: #dac3ac;
  //   background-color: #746454;
  //   background-color: #7f705e;
  //   background-color: #6971fb;
  //   background-color: #0f147a;

  //   background-color: #fa8c00;
  background-color: #ddd4ae;

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
  padding: 30px;
  //   flex-wrap: wrap;
  //   width: 1300px;
  // border: 3px solid red;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Items = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  border: 3px solid green;
  width: 100%;
`;

const ImgBox = styled.div`
  img {
    width: 64px;
    height: 64px;
  }
`;
