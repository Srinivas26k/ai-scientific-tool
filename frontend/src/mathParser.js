// Tokenize function: Updated to support square root, exponentiation, and percentage
const tokenize = (expression) => {
    const regex = /\d+|\+|\-|\*|\/|\(|\)|\^|√|%/g; // Added ^, √, and %
    return expression.match(regex);
};

// Extend evaluate function to handle new operations
const evaluate = (tokens) => {
    let currentIndex = 0;

    const parsePrimary = () => {
        let token = tokens[currentIndex];
        currentIndex++;
        
        if (/\d+/.test(token)) {
            return Number(token); // Convert to a number
        } else if (token === '(') {
            const value = parseExpression();
            currentIndex++; // Skip closing ')'
            return value;
        } else if (token === '√') {
            const value = parsePrimary();
            return Math.sqrt(value); // Square root calculation
        } else if (token === '%') {
            const value = parsePrimary();
            return value / 100; // Percentage calculation
        }
        throw new Error("Unexpected token: " + token);
    };

    const parseExponentiation = () => {
        let left = parsePrimary();
        while (tokens[currentIndex] === '^') {
            currentIndex++;
            const right = parsePrimary();
            left = Math.pow(left, right); // Exponentiation calculation
        }
        return left;
    };

    const parseMultiplicative = () => {
        let left = parseExponentiation(); // Update the chain to include exponentiation
        while (tokens[currentIndex] === '*' || tokens[currentIndex] === '/') {
            const operator = tokens[currentIndex];
            currentIndex++;
            const right = parseExponentiation();
            if (operator === '*') {
                left *= right;
            } else if (operator === '/') {
                left /= right;
            }
        }
        return left;
    };

    const parseExpression = () => {
        let left = parseMultiplicative();
        while (tokens[currentIndex] === '+' || tokens[currentIndex] === '-') {
            const operator = tokens[currentIndex];
            currentIndex++;
            const right = parseMultiplicative();
            if (operator === '+') {
                left += right;
            } else if (operator === '-') {
                left -= right;
            }
        }
        return left;
    };

    return parseExpression();
};

// Export the parseMathExpression function
export function parseMathExpression(expression) {
    const tokens = tokenize(expression);
    return evaluate(tokens);
}
