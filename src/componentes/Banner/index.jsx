import styled from "styled-components";

const FigureEstilizado = styled.figure`
	background-image: ${({ $backgroundImage }) => `url(${$backgroundImage})`};
	flex-grow: 1;
	background-repeat: no-repeat;
	display: flex;
	align-items: center;
	min-height: 328px;
	margin: 0;
	border-radius: 20px;
	max-width: 100%;
	background-size: cover;
`;

const TituloEstilizado = styled.h1`
	font-weight: 400;
	font-size: 40px;
	color: #fff;
	max-width: 300px;
	padding: 0 64px;
`;

const Banner = ({ texto, backgroundImage }) => {
	return (
		<FigureEstilizado $backgroundImage={backgroundImage}>
			<TituloEstilizado>{texto}</TituloEstilizado>
		</FigureEstilizado>
	);
};

export default Banner;
