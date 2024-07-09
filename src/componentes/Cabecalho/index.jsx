import styled from "styled-components";
import CampoTexto from "../CampoText";

const HeaderEstilizado = styled.header`
	padding: 60px 0;
	display: flex;
	justify-content: space-between;
	img {
		max-width: 212px;
	}
`;

const Cabelho = ({ filtro, setFiltro }) => {
	return (
		<HeaderEstilizado>
			<img src="/imagens/logo.png" alt="" />
			<CampoTexto value={filtro} onChange={(e) => setFiltro(e.target.value)} />
		</HeaderEstilizado>
	);
};

export default Cabelho;
