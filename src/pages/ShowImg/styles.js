import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  width: 100%;
  align-items: center;
  padding-top: 10vh;
  padding-bottom: 10vh;
  height: 100%;
`;

export const WrapperImages = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;
  height: 100%;
  background-color: #fcd1c1;
  padding: 20px;
  @media only screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const WraperStyles = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const NewImage = styled.img`
  opacity: ${(props) => props.opacity};
  transform: ${(props) => props.rotate} ${(props) => props.scale} ${(props) => props.translate};
`;
