export const calcInPolishNotation = (array) => {
	const stack = [];
	const operators = ["*", "/", "+", "-", "^"];

	for (const value of array) {
		if (!operators.includes(value)) {
			stack.push(value);
			continue;
		}

		const b = +stack.pop();
		const a = +stack.pop();

		let result;

		switch (value) {
			case "*":
				// eslint-disable-next-line no-console
				console.log(a + " * " + b);
				result = a * b;
				break;
			case "/":
				// eslint-disable-next-line no-console
				console.log(a + " / " + b);
				result = b === 0 ? null : a / b;
				break;
			case "+":
				// eslint-disable-next-line no-console
				console.log(a + " + " + b);
				result = a + b;
				break;
			case "-":
				// eslint-disable-next-line no-console
				console.log(a + " - " + b);
				result = a - b;
				break;
			case "^":
				// eslint-disable-next-line no-console
				console.log(a + " ^ " + b);
				result = a ** b;
				break;
			default:
				break;
		}

		if (result === null) {
			return result;
		}

		stack.push(result);
	}
	// eslint-disable-next-line no-console
	console.log("Результат работы калькулятора: " + stack[0]);
	return stack.pop();
};
