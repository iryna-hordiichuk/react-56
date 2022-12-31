import styled from 'styled-components';

export const Container = styled.div`
padding: 8px;
border-radius: 8px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
`;

export const Title = styled.h2`
margin-top: 0;


`;

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

// в цьому варіанті викликаємо ф-ю, ій передаємо ще одну ф-ю колбек,
// в підпису стрілочної ф-ї(в аргументах) деструктуризуємо обєкт пропс, витягнувши із нього
// властивість isActive, цей колбек повертає template literal (шаблонну строку) і в ній розмітку
export const Badge = styled.span(
  ({ isActive }) => `
padding: 8px 16px;
border-radius: 16px;
background-color: ${isActive ? 'orangered' : 'lightgray'};
color: ${isActive ? 'white' : 'black'};
`
);

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 240px;
  object-fit: cover;
  margin-bottom: 12px;
`;

// ! в цьому варіанті передаємо колбек коден раз окремо
// export const Badge = styled.span`
//   padding: 8px 16px;
//   border-radius: 16px;
//   background-color: ${props => {
//     return props.isActive ? 'orangered' : 'lightgray';
//     }};
//     color: ${props =>{
//       return props.isActive ? 'white' : 'black';
//     }};
// `;

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
