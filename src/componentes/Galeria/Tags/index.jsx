import styled from "styled-components";
import tags from "./tags.json";

const TagContainerPrincipalEstilizado = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	flex-wrap: wrap;
	gap: 24px;
	margin-top: 56px;
`;

const TagTituloEstilizada = styled.h3`
	font-size: 24px;
	color: #d9d9d9;
	margin: 0;
	width: 219px;
`;

const TagEstilizada = styled.button`
	background: rgba(217, 217, 217, 0.3);
	border-radius: 10px;
	font-size: 24px;
	color: #ffffff;
	padding: 10px 8px;
	border: 2px solid transparent;
	cursor: pointer;
	box-sizing: border-box;
	&:hover {
		border-color: #c98cf1;
	}
`;

const Tags = ({ tag, setTag }) => {
	return (
		<TagContainerPrincipalEstilizado>
			<TagTituloEstilizada>Busque por tags:</TagTituloEstilizada>
			{tags.map((tag) => (
				<TagEstilizada onClick={() => setTag(tag.id)} key={tag.id}>
					{tag.titulo}
				</TagEstilizada>
			))}
		</TagContainerPrincipalEstilizado>
	);
};

export default Tags;
