import styled from "styled-components";

export const Button = styled.button`
		padding: 0.5rem 2rem;
		border: 0;
		border-bottom: 3px solid;
		font-size: 1.2rem;
		cursor: pointer;
		margin: 0;
		margin-top: -.25rem;
		color: #fff;
		background-color: #0c8cd3;
		border-color: #04324c;
		width: 13rem;
		display: flex;
		justify-content: center;
		align-items: center;
		clear: both;
		margin: .75rem .3rem;
		height: 4.5rem;

	&:active {
		margin-top: 0;
		border: 0;
	}

	&[disabled='disabled'],
	&:disabled {
		background-color: gray;
		border-color: darkgray;
	}
`