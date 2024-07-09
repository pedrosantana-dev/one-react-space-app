import styled from "styled-components";
import Imagem from "../Galeria/Imagem";
import iconeFechar from "./close.png";

const Overlay = styled.div`
	background-color: rgba(0, 0, 0, 0.7);
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
`;

const DialogEstilizado = styled.dialog`
	position: absolute;
	top: 294px;
	background-color: transparent;
	border: none;
	width: 100%;
	display: flex;
	justify-content: center;

	form {
		button {
			position: relative;
			top: 20px;
			right: 60px;
			background-color: transparent;
			border: none;
			cursor: pointer;
		}
	}
`;

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
	return (
		<>
			{foto && (
				<>
					<Overlay />
					<DialogEstilizado open={!!foto}>
						<Imagem
							foto={foto}
							expandida={true}
							aoAlternarFavorito={aoAlternarFavorito}
						/>
						<form method="dialog">
							<button type="button" onClick={aoFechar}>
								<img src={iconeFechar} alt="" />
							</button>
						</form>
					</DialogEstilizado>
				</>
			)}
		</>
	);
};

export default ModalZoom;
