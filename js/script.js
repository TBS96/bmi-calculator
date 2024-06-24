const result = document.getElementById('result');

const calculateBMI = () => {
    const age = document.getElementById('age').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value/100);

    if(isNaN(age) || age <= 0)
    {
        result.textContent = 'Please enter a valid age!!!';
        return;
    }

    if(isNaN(weight) || weight <= 0 || isNaN(height) || height === 0)
    {
        result.textContent = 'Please enter a valid values for height & height!!!';
        return;
    }

    const bmi = weight / (height * height);
    const bmiCategory = getBMICategory(bmi);

    result.innerHTML = `
    <hr/>
    <p>Your age is: ${age}</p>
    <p>Your BMI is: ${bmi.toFixed(1)}</p>
    <p>You are: ${bmiCategory}</p>
    `;
}

const getBMICategory = (bmi) => {
    if(bmi < 18.5)
    {
        return 'Underweight';
    }
    else if(bmi >= 18.5 && bmi < 24.9)
    {
        return 'Healthy';
    }
    else if(bmi >= 25 && bmi < 29.9)
    {
        return 'Overweight';
    }
    else if(bmi >= 30 && bmi < 39.9)
    {
        return 'Obesity';
    }
    else if(bmi > 40)
    {
        return 'Severe Obesity';
    }
};