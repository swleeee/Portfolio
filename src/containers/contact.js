import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import OuterContainer from '../components/OuterContainer';
import InnerContainer from '../components/InnerContainer';
import Title from '../components/Title';
import github_img from '../images/github2.png';
import mail_img from '../images/contact/mail.png';

function Contact() {
  return (
    <OuterContainer bg="#292228">
      <InnerContainer pd="30">
        <Content>
          {/* <ImgBox>
            <img src={github_img} />
            <img src={mail_img} />
          </ImgBox> */}
          <div>tkddnjs0687@naver.com</div>

          <div>© 2022. Lee Sang Won. All rights reserved.</div>
        </Content>
      </InnerContainer>
    </OuterContainer>
  );
}

export default Contact;

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
  // justify-content: center;
  align-items: center;
  flex-direction: column;
  div:nth-of-type(1) {
    font-size: 32px;
    font-family: SCDream5;
    color: #fff;
    margin-bottom: 20px;
  }
  div:nth-of-type(2) {
    font-size: 14px;
    font-family: SCDream3;
    color: #fff;
  }
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
