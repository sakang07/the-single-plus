import styled from 'styled-components';
import Container from '../Container';
import Title from '../Title';

const Section = styled.section`
  padding-top: 153px;
`;

function MainIssue() {
  return (
    <Section>
      <Container>
        <Title>hot issue</Title>
      </Container>
    </Section>
  );
}

export default MainIssue;
