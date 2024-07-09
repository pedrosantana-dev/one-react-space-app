import styled from "styled-components";

const RodapeEstilizado = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-color: #04244f;
	padding: 24px;
	box-sizing: border-box;
`;

const IconeContainer = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	li {
		display: inline-block;
		margin-right: 32px;
	}
`;

const RodapeTexto = styled.p`
	font-size: 16px;
	color: #fff;
	margin: 0;
`;

const Rodape = () => {
	return (
		<RodapeEstilizado>
			<IconeContainer>
				<li>
					<a href="#">
						<img src="/imagens/sociais/instagram.svg" alt="Instagram" />
					</a>
				</li>
				<li>
					<a href="#">
						<img src="/imagens/sociais/facebook.svg" alt="Instagram" />
					</a>
				</li>
				<li>
					<a href="#">
						<img src="/imagens/sociais/twitter.svg" alt="Instagram" />
					</a>
				</li>
			</IconeContainer>
			<RodapeTexto>© 2021. Todos os direitos reservados. </RodapeTexto>
		</RodapeEstilizado>
	);
};

export default Rodape;
