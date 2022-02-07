/* eslint-disable jsx-a11y/img-redundant-alt */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '../Container';

const Section = styled.section`
  width: 100%;
  height: 40rem;
  background-color: #333;

  & > div {
    display: flex;
    justify-content: center;
  }

  .title {
    width: 100%;
    height: 100%;
    background-color: #fcd200;
  }

  dl {
    color: #191919;

    dt {
      font-size: 48px;
      font-weight: 700;
    }

    dd {
      font-size: 21px;
    }
  }

  figure {
    order: -1;

    img {
      width: auto;
      height: 100%;
    }
  }
`;

function MainSlide() {
  return (
    <Section>
      <Container>
        <h2 className='blind'>main ad slide</h2>
        <div className='title'>
          <dl>
            <dt>반나절이면 도착! 외국 감성 카페 4</dt>
            <dd>딴 세상에 온 느낌? 잠시라도 여행을 떠나온 기분을 낼 수 있는 스폿을 소개한다.</dd>
          </dl>
          <Link to='#'>view more</Link>
        </div>
        <figure>
          <img src='../asset/slide_01.jpeg' alt='slide image 01' />
          <figcaption className='blind'>slide image 01</figcaption>
        </figure>
      </Container>
    </Section>
  );
}

export default MainSlide;
