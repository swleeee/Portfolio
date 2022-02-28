import styled from 'styled-components';
const InnerContainer = styled.div`
  padding: ${(props) => (props.pd ? props.pd + 'px 0' : '100px 0')};
  // display: inline-flex;
  @media (min-width: 0px) and (max-width: 767.98px) {
    width: calc(100% - 28px);
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 720px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 900px;
  }
  @media (min-width: 1300px) {
    width: 1200px;
  }
`;
export default InnerContainer;
