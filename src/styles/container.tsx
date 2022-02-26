import styled from "styled-components";

export const Container = styled.section`
	width: 60%;
	height: 100%;
	margin: 0 auto;
	&:before {
		content: '';
		display: inline-block;
		height: 100%;
		vertical-align: middle;
	}
`;