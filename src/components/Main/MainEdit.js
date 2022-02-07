import styled from 'styled-components';
import Container from '../Container';
import Title from '../Title';

const Section = styled.section`
  padding-top: 153px;
`;

function MainEdit() {
  return (
    <Section>
      <Container>
        <Title>single edit</Title>
      </Container>
    </Section>
  );
}

export default MainEdit;
