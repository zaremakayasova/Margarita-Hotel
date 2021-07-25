import styled from 'styled-components';

const StyledHero = styled.div`
min-height: 60vh;
background-image: url(${props => props.image});
background-size: cover;
background-position: center;
display: flex;
align-items: center;
justify-content: center;
`

export default StyledHero;