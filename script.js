document.getElementById('createPasswordBtn').addEventListener('click', createPassword);

function createPassword() {
    const length = document.getElementById('passLength').value;
    const hasUpper = document.getElementById('includeUpper').checked;
    const hasLower = document.getElementById('includeLower').checked;
    const hasNumbers = document.getElementById('includeDigits').checked;
    const hasSpecial = document.getElementById('includeSpecial').checked;

    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characterPool = '';
    if (hasUpper) characterPool += upperChars;
    if (hasLower) characterPool += lowerChars;
    if (hasNumbers) characterPool += numberChars;
    if (hasSpecial) characterPool += specialChars;

    if (characterPool === '') {
        alert('Please select at least one character type.');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    document.getElementById('generatedPassword').textContent = password;

    let criteria = `Length: ${length}, `;
    criteria += hasUpper ? 'Uppercase Letters, ' : '';
    criteria += hasLower ? 'Lowercase Letters, ' : '';
    criteria += hasNumbers ? 'Numbers, ' : '';
    criteria += hasSpecial ? 'Special Characters, ' : '';
    criteria = criteria.slice(0, -2); // Remove trailing comma and space

    document.getElementById('passwordCriteria').textContent = criteria;
}
