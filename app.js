const weight = document.querySelector('.data input[placeholder*="Weight"]');
const height = document.querySelector('.data input[placeholder*="Height"]');
const resultDiv = document.querySelector('.result');
const button = document.querySelector('button');

function calculateBMI() {
  const w = parseFloat(weight.value);
  const h = parseFloat(height.value);

  if (!w || !h) {
    resultDiv.textContent = 'Please enter valid weight and height';
    return;
  }

  const heightM = h / 100;
  const bmi = w / (heightM * heightM);

  let category = '';
  let advice = '';

  if (bmi < 18.5) {
    category = 'Underweight';
    const minNormalWeight = 18.5 * heightM * heightM;
    const gain = (minNormalWeight - w).toFixed(2);
    advice = `You need to gain approximately ${gain} kg to reach a normal weight.`;
  } else if (bmi < 25) {
    category = 'Normal weight';
    advice = `You are in a healthy weight range. Keep it up!`;
  } else if (bmi < 30) {
    category = 'Overweight';
    const maxNormalWeight = 24.9 * heightM * heightM;
    const lose = (w - maxNormalWeight).toFixed(2);
    advice = `You need to lose approximately ${lose} kg to reach a normal weight.`;
  } else {
    category = 'Obese';
    const maxNormalWeight = 24.9 * heightM * heightM;
    const lose = (w - maxNormalWeight).toFixed(2);
    advice = `You need to lose approximately ${lose} kg to reach a normal weight.`;
  }

  resultDiv.innerHTML = `Your BMI is <strong>${bmi.toFixed(2)}</strong> — <strong>${category}</strong><br>${advice}`;
}

button.addEventListener('click', calculateBMI);
