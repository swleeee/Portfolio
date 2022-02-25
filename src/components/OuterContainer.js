import styled from 'styled-components';

const OuterContainer = styled.div`
  //   background-color: #dac3ac;
  //   background-color: #746454;
  //   background-color: #7f705e;
  //   background-color: #6971fb;
  //   background-color: #0f147a;

  //   background-color: #fa8c00;
  background-color: ${(props) => (props.bg ? props.bg : '#e6f0ef')};
  //   background-color: #dfd6cf;

  width: 100%;
  // height: 800px;
  display: flex;
  justify-content: center;
`;

export default OuterContainer;
