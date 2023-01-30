import { useSelector, useDispatch } from "react-redux";
import { CrossIcon } from "../../assets/svg/Close";
import { InfoIcon } from "../../assets/svg/InfoIcon";
import { PrimaryButton, SecondaryButton } from "../Button";
import Chip from "../Chip";
import { currentQuestion, selectedAnswers, selectedStagedAnswers } from "../../redux/features/questions/questionsSlice";
import "./modal.css";

const Modal = () => {
  const questions = useSelector((state) => state.questions);
  const stagedAnswers = useSelector((state) => state.questions.stagedAnswers)
  const dispatch = useDispatch();

  const handleSelection = (value, index) => {
    dispatch(selectedStagedAnswers(value));
  }

  const handleNext = () => {
    if (questions.selectedIndex + 1 < questions.totalQuestions) {
      dispatch(currentQuestion(questions.selectedIndex + 1));
      dispatch(selectedAnswers(stagedAnswers));
    }
  }

  const getSelected = (option) => {
    let foundAnswer = stagedAnswers.find(answer => answer.option === option);
    if(foundAnswer) {
      return 'selected';
    } 
    return '';
  }

  console.log(questions.answers, "Ans***")

  return (
		<div className="modal-wrapper">
			<div className="modal">
				<button className="cross-icon">
					<CrossIcon />
				</button>
				<div className="info-wrapper lg-hidden">
					<InfoIcon />
					<p className="info-text">
						To improve your product recommendation, keep on going
					</p>
				</div>
				{questions.answers.length > 0 && (
					<Chip answers={questions.answers} />
				)}
				<div className="modal-question">
					{`Q${questions.selectedIndex + 1}. ${
						questions.questions.question
					}`}
				</div>
				<div className="card-wrapper">
					{questions.questions.options.map((value, index) => (
						<div
							key={`${value}-${index}`}
							className="content-card"
							onClick={() => handleSelection(value, index)}>
							<div className="card-gradiant"></div>
							<div className="card-heading-wrapper">
								<div className="card-heading">
									{value.option}
								</div>
							</div>
							<div
								className={`card-image ${getSelected(
									value.option
								)}`}>
								<img src={`/images/${value.image}`} />
							</div>
						</div>
					))}
				</div>
				<div className="cta-wrapper">
					<div className="bottom-info-wrapper hidden">
						<div className="d-flex">
							<InfoIcon />
							<p className="info-text">
								To improve your product recommendation, keep on
								going
							</p>
						</div>
					</div>
					{stagedAnswers.length ? (
						<>
							<SecondaryButton>See result</SecondaryButton>
							<PrimaryButton onClick={handleNext}>
								Next
							</PrimaryButton>
						</>
					) : (
						<PrimaryButton onClick={handleNext}>I want something else</PrimaryButton>
					)}
				</div>
			</div>
		</div>
  );
};

export default Modal;
