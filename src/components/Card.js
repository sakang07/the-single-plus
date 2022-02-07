import styled from 'styled-components';

const Li = styled.li`
  color: #fff;
  padding: 0 20px;

  img {
    width: 290px;
    height: 290px;
  }

  dt {
    margin-top: 1.25rem;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  dd {
    margin-top: 0.625rem;
    font-size: 1.5rem;
  }
`;

function Card(props) {
  return (
    <Li>
      <figure>
        <img src={props.image} alt={props.title} />
        <figcaption className='blind'>{props.title}</figcaption>
      </figure>
      <dl>
        <dt>{props.title}</dt>
        <dd>{props.description}</dd>
      </dl>
    </Li>
  );
}

export default Card;
