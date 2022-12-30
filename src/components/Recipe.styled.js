import styled from 'styled-components';

export const RecipeInfo = styled.div`
  display: flex;
  gap: 16px;
  padding: 8px;
  border: 1px solid black;
  border-radius: 4px;
`;

export const InfoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  /* svg{
    color: red;
} */
`;

export const BadgeList = styled.div`
  display: flex;
  gap: 8px;
`;

export const Badge = styled.span`
  padding: 8px;
  border-radius: 16px;
  background-color: ${props => {
    console.log(props.isActive);
    return props.isActive ? 'orangered' : 'lightgray';}};


  /* background-color: ${props => {
    switch (props.difficulty) {
      case 'easy':
        return 'green';
      case 'medium':
        return 'yellow';
      case 'hard':
        return 'red';
      default:
        throw new Error(
          `Unexpected value for prop difficulty - ${props.difficulty} `
        );
    }
  }}; */
`;
