import React from 'react';

interface ButtonProps {
	text: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({ text }) => {
	return (
		<button className="transition ease-in delay-150 duration-300 my-2 rounded bg-black
						px-2 py-1 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400
						hover:text-black hover:font-bold hover:p-1">
			{text}
		</button>
	)
}

export default PrimaryButton;
