import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
	display: flex;
`;

const SecaoFluida = styled.section`
	flex-grow: 1;
`;

const ContainerFotos = styled.ul`
	padding: 0;
	margin: 0;

	li {
		display: inline-block;
		margin: 10px;
		list-style: none;
	}
`;

const Galeria = ({ fotos = [], aoFotoSelecionada }) => {
	return (
		<>
			<Tags />
			<GaleriaContainer>
				<SecaoFluida>
					<Titulo>Nevegue pela galeria</Titulo>
					<ContainerFotos>
						{fotos.map((foto) => (
							<li key={foto.id}>
								<Imagem aoZoomSolicitado={aoFotoSelecionada} foto={foto} />
							</li>
						))}
					</ContainerFotos>
				</SecaoFluida>
				<Populares />
			</GaleriaContainer>
		</>
	);
};

export default Galeria;
