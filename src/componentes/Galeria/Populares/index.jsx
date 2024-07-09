import styled from "styled-components";
import Titulo from "../../Titulo";
import fotos from "/src/fotos.json";

const ColunaFotos = styled.section`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const Imagem = styled.img`
	max-width: 212px;
	border-radius: 20px;
`;

const Botao = styled.button`
	background-color: transparent;
	color: #fff;
	border: 2px solid;
	border-color: #c98cf1;
	padding: 12px 20px;
	border-radius: 10px;
	cursor: pointer;
	width: 100%;
	margin-top: 16px;
`;

const Populares = () => {
	return (
		<section>
			<Titulo $alinhamento="center">Populares</Titulo>
			<ColunaFotos>
				{fotos.map((foto) => (
					<Imagem src={foto.path} alt={foto.tituto} key={foto.id} />
				))}
			</ColunaFotos>
			<Botao>Ver mais</Botao>
		</section>
	);
};

export default Populares;
