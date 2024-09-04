// Task 1
function f1() {
    const checkbox = document.querySelector('.i-1');
    document.getElementById('out-1').textContent = checkbox.checked ? 'true' : 'false';
}

document.getElementById('b-1').addEventListener('click', f1);

// Task 2
function f2() {
    const checkbox = document.getElementById('i-2');
    document.getElementById('out-2').textContent = checkbox.checked ? checkbox.value : 'false';
}

document.getElementById('b-2').addEventListener('click', f2);

// Task 3
function f3() {
    const inputText = document.getElementById('i-3').value;
    document.getElementById('out-31').textContent = inputText;
    document.getElementById('out-32').textContent = inputText.length >= 6 ? '1' : '0';
}

document.getElementById('b-3').addEventListener('click', f3);

// Task 4
function f4() {
    const radios = document.querySelectorAll('input[name="radio-group"]');
    let output = 'false';
    radios.forEach(radio => {
        if (radio.checked) {
            output = radio.value;
        }
    });
    document.getElementById('out-4').textContent = output;
}

document.getElementById('b-4').addEventListener('click', f4);

// Task 5
function f5() {
    const colorInput1 = document.getElementById('i-51');
    const colorInput2 = document.getElementById('i-52');
    colorInput2.value = colorInput1.value;
}

document.getElementById('b-5').addEventListener('click', f5);

// Task 6
function f6() {
    const date = document.getElementById('i-6').value;
    document.getElementById('out-6').textContent = date;
}

document.getElementById('b-6').addEventListener('click', f6);

// Task 7
document.getElementById('i-7').addEventListener('input', function() {
    document.getElementById('out-7').textContent = this.value;
});

// Task 8
function f8() {
    const text = document.getElementById('i-8').value;
    document.getElementById('t-8').value = text;
    document.getElementById('out-8').textContent = text;
}

document.getElementById('b-8').addEventListener('click', f8);

// Task 9
document.getElementById('s-9').addEventListener('change', function() {
    document.getElementById('out-9').textContent = this.value;
});

// Task 10
function f10() {
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const phone = document.getElementById('user-phone').value;
    
    document.getElementById('out-10').textContent = `Name: ${name}, Email: ${email}, Phone: ${phone}`;
}

document.getElementById('submit-form').addEventListener('click', f10);
