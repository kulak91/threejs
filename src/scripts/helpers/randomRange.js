const randomNumber = Math.random();

// Calculate a random number between 0.01 and 0.10
const randomInRange = () => Number(0.01 + randomNumber * 0.09);

export { randomInRange };
