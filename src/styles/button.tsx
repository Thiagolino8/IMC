import styled from "styled-components";

const Button = styled.button`
	 
		padding: 0.5em 2em;
		border: 0;
		border-bottom: 3px solid;
		font-size: 1.2em;
		cursor: pointer;
		margin: 0;
		margin-top: -3px;
		color: #fff;
		background-color: #0c8cd3;
		border-color: #04324c;
		width: 20%;
		display: block;
		clear: both;
		margin: 10px 0px;
	

	&:active {
		margin-top: 0px;
		border: 0;
	}

	&[disabled='disabled'],
	&:disabled {
		background-color: gray;
		border-color: darkgray;
	}
`;

export default Button;