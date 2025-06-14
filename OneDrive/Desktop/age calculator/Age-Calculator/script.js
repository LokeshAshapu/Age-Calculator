function calculateAge(event) {
    event.preventDefault();
    const dobInput = document.getElementById('inputDobTo').value;
    const currentDateInput = document.getElementById('inputDobThen').value;
    const resultDisplay = document.getElementById('calcutedage');
    if (!dobInput || !currentDateInput) {
        resultDisplay.textContent = "Please enter both dates.";
        return;
    }
    const dob = new Date(dobInput);
    const current = new Date(currentDateInput);
    if (current < dob) {
        resultDisplay.textContent = "Current date must be after date of birth.";
        return;
    }
    let years = current.getFullYear() - dob.getFullYear();
    let months = current.getMonth() - dob.getMonth();
    let days = current.getDate() - dob.getDate();
    if (days < 0) {
        months--;
        const prevMonth = new Date(current.getFullYear(), current.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    resultDisplay.textContent = `Your age is ${years} years, ${months} months, and ${days} days.`;
}
