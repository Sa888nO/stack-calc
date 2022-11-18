import { useState } from "react";
import styles from "./Calc.module.scss";

const Calc = () => {
	const [expression, updateExpression] = useState("");

	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>{expression}</div>
			<div className={styles.answer}></div>
			<div className={styles.buttonBlock}>
				<div className={styles.numbersBlock}>
					<div>
						<button
							onClick={() => {
								updateExpression(expression + "1");
							}}
						>
							1
						</button>
						<button
							onClick={() => {
								updateExpression(expression + "2");
							}}
						>
							2
						</button>
						<button
							onClick={() => {
								updateExpression(expression + "3");
							}}
						>
							3
						</button>
					</div>
					<div>
						<button
							onClick={() => {
								updateExpression(expression + "4");
							}}
						>
							4
						</button>
						<button
							onClick={() => {
								updateExpression(expression + "5");
							}}
						>
							5
						</button>
						<button
							onClick={() => {
								updateExpression(expression + "6");
							}}
						>
							6
						</button>
					</div>
					<div>
						<button
							onClick={() => {
								updateExpression(expression + "7");
							}}
						>
							7
						</button>
						<button
							onClick={() => {
								updateExpression(expression + "8");
							}}
						>
							8
						</button>
						<button
							onClick={() => {
								updateExpression(expression + "9");
							}}
						>
							9
						</button>
					</div>
					<div>
						<button
							onClick={() => {
								updateExpression(expression + "0");
							}}
						>
							0
						</button>
					</div>
				</div>
				<div>
					<button
						onClick={() => {
							updateExpression(expression + "+");
						}}
					>
						+
					</button>
					<button
						onClick={() => {
							updateExpression(expression + "-");
						}}
					>
						-
					</button>
					<button
						onClick={() => {
							updateExpression(expression + "*");
						}}
					>
						*
					</button>
					<button
						onClick={() => {
							updateExpression(expression + "/");
						}}
					>
						/
					</button>
					<button
						onClick={() => {
							updateExpression(expression + "^");
						}}
					>
						^
					</button>
				</div>
				<div>
					<button
						onClick={() => {
							updateExpression(expression + "(");
						}}
					>
						(
					</button>
					<button
						onClick={() => {
							updateExpression(expression + ")");
						}}
					>
						)
					</button>
				</div>
				<div className={styles.deleteBlock}>
					<button
						onClick={() => {
							updateExpression(expression.slice(0, -1));
						}}
					>
						Delete
					</button>
					<button
						onClick={() => {
							updateExpression("");
						}}
					>
						Clear
					</button>
				</div>
				<button className={styles.getAnswerButton}>=</button>
			</div>
		</div>
	);
};

export default Calc;
