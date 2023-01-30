import "./button.css";

export const PrimaryButton = (props) => {
	const { classes, children, onClick } = props;
	return (
		<div>
			<button className={`primary-button ${classes}`} onClick={() => onClick()}>{children}</button>
		</div>
	);
};

export const SecondaryButton = (props) => {
	const { classes, children } = props;
	return (
		<div>
			<button className={`secondary-button ${classes}`}>
				{children}
			</button>
		</div>
	);
};
