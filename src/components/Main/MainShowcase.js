import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import Title from '../Title';
import Card from '../Card';

const Section = styled.section`
  background-color: #333;
  padding-top: 5.25rem;
  padding-bottom: 8rem;

  ul {
    display: flex;
    justify-content: space-around;
    margin-top: 35px;
  }
`;

function MainShowcase() {
  const DUMMY = [
    {
      image: '../asset/card_01.jpeg',
      title: 'enjoy',
      description: '설 연휴 순삭할 OTT 신작',
    },
    {
      image: '../asset/card_01.jpeg',
      title: 'enjoy',
      description: '설 연휴 순삭할 OTT 신작',
    },
    {
      image: '../asset/card_01.jpeg',
      title: 'enjoy',
      description: '설 연휴 순삭할 OTT 신작',
    },
    {
      image: '../asset/card_01.jpeg',
      title: 'enjoy',
      description: '설 연휴 순삭할 OTT 신작',
    },
  ];

  return (
    <Section>
      <Container>
        <Title color='#fff'>showcase</Title>
        <ul>
          {DUMMY.map((data, idx) => (
            <Card key={idx} image={data.image} title={data.title} description={data.description} />
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export default MainShowcase;
