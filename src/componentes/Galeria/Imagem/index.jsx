import styled from "styled-components";
import favoriteOutline from "./favorite_outline.png";
import openInFull from "./open_in_full.png";

const ImagemEstilizada = styled.figure`
	display: flex;
	flex-direction: column;
	width: ${(props) => (props.$expandida ? "90%" : "460px")};
	max-width: 100%;
	margin: 0;

	& > img {
		max-width: 100%;
		border-radius: 20px 20px 0 0;
	}
	figcaption {
		background-color: #001634;
		border-radius: 0 0 20px 20px;
		padding: 12px;
		box-sizing: border-box;
		color: #fff;

		h3 {
			font-family: "GandhiSansBold";
		}
		h4 {
			flex-grow: 1;
		}
		h3,
		h4 {
			margin: 0;
			font-size: 16px;
		}

		footer {
			display: flex;

			button {
				background-color: transparent;
				border: none;
				color: #fff;
				font-size: 16px;
				cursor: pointer;
			}

			button:nth-of-type(2) {
				display: ${({ $expandida }) => ($expandida ? "none" : "flex")};
			}
		}
	}
`;

const Imagem = ({ foto, aoZoomSolicitado, expandida = false }) => {
	return (
		<ImagemEstilizada $expandida={expandida}>
			<img src={foto.path} alt={foto.titulo} />
			<figcaption>
				<h3>{foto.titulo}</h3>
				<footer>
					<h4>{foto.fonte}</h4>
					<button>
						<img src={favoriteOutline} alt="" />
					</button>
					<button onClick={() => aoZoomSolicitado(foto)}>
						<img src={openInFull} alt="" />
					</button>
				</footer>
			</figcaption>
		</ImagemEstilizada>
	);
};

export default Imagem;
