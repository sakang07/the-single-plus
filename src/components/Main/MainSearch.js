import styled from 'styled-components';
import Container from '../Container';

const Section = styled.section`
  padding-top: 62px;
`;

function MainSearch() {
  return (
    <Section>
      <Container>
        <h2>일상에 즐거움을 더하는 이야기를 찾아보세요.</h2>
      </Container>
    </Section>
  );
}

export default MainSearch;
