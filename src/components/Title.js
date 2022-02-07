import styled from 'styled-components';

const Title = styled.h2`
  position: relative;
  margin-left: 1.25rem;
  padding-left: 2.375rem;
  font-size: 3.75rem;
  font-weight: 700;
  text-transform: capitalize;
  color: ${props => props.color || '#191919'};

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    width: 28px;
    height: 56px;
    transform: translateY(-50%);
    background-color: ${props => props.color || '#191919'};
  }
`;

export default Title;
