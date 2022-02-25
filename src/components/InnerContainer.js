import styled from 'styled-components';
const InnerContainer = styled.div`
  padding: ${(props) => (props.pd ? props.pd + 'px 0' : '100px 0')};
  //   overflow: hidden;

  @media (min-width: 992px) and (max-width: 1299.98px) {
  }

  @media (min-width: 1300px) {
    width: 1300px;
  }
`;
export default InnerContainer;
