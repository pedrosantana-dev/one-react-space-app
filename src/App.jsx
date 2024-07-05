import styled from "styled-components";
import EstilosGrobais from "./componentes/EstilosGlobais";
import Cabelho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import ImagemBanner from "assets/banner.png";
import Galeria from "./componentes/Galeria";

const FundoGradiente = styled.div`
	background: linear-gradient(
		174.61deg,
		#041833 4.16%,
		#04244f 48%,
		#154580 96.76%
	);
	width: 100%;
	height: 100vh;
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

function App() {
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
						<Galeria />
					</ConteudoGaleria>
				</MainContainer>
			</AppContainer>
		</FundoGradiente>
	);
}

export default App;
