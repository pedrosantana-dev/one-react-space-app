import styled from "styled-components";
import EstilosGrobais from "./componentes/EstilosGlobais";
import Cabelho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import ImagemBanner from "assets/banner.png";
import Galeria from "./componentes/Galeria";

import fotos from "./fotos.json";
import { useState } from "react";
import ModalZoom from "./componentes/ModalZoom";

const FundoGradiente = styled.div`
	background: linear-gradient(
		174.61deg,
		#041833 4.16%,
		#04244f 48%,
		#154580 96.76%
	);
	width: 100%;
	/* height: 100vh; */
`;

const AppContainer = styled.div`
	width: 1440px;
	margin: 0 auto;
	max-width: 100%;
`;

const MainContainer = styled.main`
	display: flex;
	gap: 24px;
`;

const ConteudoGaleria = styled.section`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`;

const App = () => {
	const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
	const [fotoSelecionada, setFotoSelecionada] = useState(null);

	const aoFechar = () => {
		setFotoSelecionada(null);
	};

	return (
		<FundoGradiente>
			<EstilosGrobais />
			<AppContainer>
				<Cabelho />
				<MainContainer>
					<BarraLateral />
					<ConteudoGaleria>
						<Banner
							texto={"A galeria mais completa de fotos do espaço!"}
							backgroundImage={ImagemBanner}
						/>
						<Galeria
							aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
							fotos={fotosDaGaleria}
						/>
					</ConteudoGaleria>
				</MainContainer>
			</AppContainer>
			<ModalZoom foto={fotoSelecionada} aoFechar={aoFechar} />
		</FundoGradiente>
	);
};

export default App;
