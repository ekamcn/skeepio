import { useDispatch } from "react-redux";
import { CrossIcon } from "../../assets/svg/Close";
import { removeAnswers } from "../../redux/features/questions/questionsSlice";
import "./chip.css";

const Chip = ({answers}) => {
	const dispatch = useDispatch();

	const removeAnswer = (index) => {
		dispatch(removeAnswers(index));
	}

	return (
		<div className="selected-list-wrapper">
			<div className="selected-chip-wrapper">
				{answers.map((value, index) => (
					<div className="chip" key={`${value}-${index}`}>
						<div role="button" className="chip-closing-button" onClick={() => removeAnswer(index)}>
							<div className="chip-closing-icon">
								<CrossIcon />
							</div>
						</div>
						<img className="chip-image" src={`/images/${value.image}`} />
						<div className="chip-text">{value.option}</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default Chip;
