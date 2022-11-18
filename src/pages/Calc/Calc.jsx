import { useState } from "react";
import Button from "@components/Button";
import styles from "./Calc.module.scss";

const Calc = () => {
	const [expression, updateExpression] = useState("");

	const addElToExp = (element) => {
		updateExpression(expression + element);
	};

	const deleteEl = () => {
		updateExpression(expression.slice(0, -1));
	};
	const deleteAllEl = () => {
		updateExpression("");
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>{expression}</div>
			<div className={styles.answer}></div>
			<div className={styles.buttonBlock}>
				<div className={styles.numbersBlock}>
					<div>
						<Button content={1} onClick={() => addElToExp("1")} />
						<Button content={2} onClick={() => addElToExp("2")} />
						<Button content={3} onClick={() => addElToExp("3")} />
					</div>
					<div>
						<Button content={4} onClick={() => addElToExp("4")} />
						<Button content={5} onClick={() => addElToExp("5")} />
						<Button content={6} onClick={() => addElToExp("6")} />
					</div>
					<div>
						<Button content={7} onClick={() => addElToExp("7")} />
						<Button content={8} onClick={() => addElToExp("8")} />
						<Button content={9} onClick={() => addElToExp("9")} />
					</div>
					<div>
						<Button content={0} onClick={() => addElToExp("0")} />
					</div>
				</div>
				<div>
					<Button content={"+"} onClick={() => addElToExp("+")} />
					<Button content={"-"} onClick={() => addElToExp("-")} />
					<Button content={"*"} onClick={() => addElToExp("*")} />
					<Button content={"/"} onClick={() => addElToExp("/")} />
					<Button content={"^"} onClick={() => addElToExp("^")} />
				</div>
				<div>
					<Button content={"("} onClick={() => addElToExp("(")} />
					<Button content={")"} onClick={() => addElToExp(")")} />
				</div>
				<div className={styles.deleteBlock}>
					<Button content={"Delete"} onClick={deleteEl} />
					<Button content={"Clear"} onClick={deleteAllEl} />
				</div>
				<button className={styles.getAnswerButton}>=</button>
			</div>
		</div>
	);
};

export default Calc;
