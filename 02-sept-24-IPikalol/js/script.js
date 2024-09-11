document.getElementById("luasForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const base = parseFloat(document.getElementById("base").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(base) || isNaN(height)) {
        alert("Please enter valid numbers");
        return;
    }

    const luas = 0.5 * base * height;
    document.getElementById("luasResult").innerHTML = `Luas Segitiga: ${luas.toFixed(2)} unit²`;
});

document.getElementById("kelilingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const sideA = parseFloat(document.getElementById("sideA").value);
    const sideB = parseFloat(document.getElementById("sideB").value);
    const sideC = parseFloat(document.getElementById("sideC").value);

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        alert("Please enter valid numbers");
        return;
    }

    const keliling = sideA + sideB + sideC;
    document.getElementById("kelilingResult").innerHTML = `Keliling Segitiga: ${keliling.toFixed(2)} units`;
});

document.getElementById("resetBtn").addEventListener("click", function() {
    document.getElementById("luasForm").reset();
    document.getElementById("kelilingForm").reset();
    document.getElementById("luasResult").innerHTML = '';
    document.getElementById("kelilingResult").innerHTML = '';
});

document.getElementById("luasForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const base = parseFloat(document.getElementById("base").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(base) || isNaN(height)) {
        alert("Please enter valid numbers");
        return;
    }

    const luas = 0.5 * base * height;

    document.getElementById("luasResult").innerHTML = `Luas Segitiga: ${luas.toFixed(2)} unit²`;
    document.getElementById("luasSteps").innerHTML = `
        <strong>Calculation Steps:</strong><br>
        Formula: L = 1/2 × a × t<br>
        Substituting the values: L = 1/2 × ${base} × ${height}<br>
        L = 0.5 × ${base} = ${(0.5 * base).toFixed(2)}<br>
        Finally, L = ${luas.toFixed(2)} unit²
    `;
});

document.getElementById("kelilingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const sideA = parseFloat(document.getElementById("sideA").value);
    const sideB = parseFloat(document.getElementById("sideB").value);
    const sideC = parseFloat(document.getElementById("sideC").value);

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        alert("Please enter valid numbers");
        return;
    }

    const keliling = sideA + sideB + sideC;

    document.getElementById("kelilingResult").innerHTML = `Keliling Segitiga: ${keliling.toFixed(2)} units`;
    document.getElementById("kelilingSteps").innerHTML = `
        <strong>Calculation Steps:</strong><br>
        Formula: K = S1 + S2 + S3<br>
        Substituting the values: K = ${sideA} + ${sideB} + ${sideC}<br>
        Adding them together: K = ${keliling.toFixed(2)} units
    `;
});

document.getElementById('luasJajargenjangForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const alas = parseFloat(document.getElementById('alasJajargenjang').value);
    const tinggi = parseFloat(document.getElementById('tinggiJajargenjang').value);

    const luas = alas * tinggi;

    document.getElementById('luasJajargenjangResult').textContent = 'Luas Jajargenjang: ' + luas;
    document.getElementById('luasJajargenjangSteps').textContent = `L = ${alas} * ${tinggi} = ${luas}`;
});

document.getElementById('kelilingJajargenjangForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const sisiA = parseFloat(document.getElementById('sisiA').value);
    const sisiB = parseFloat(document.getElementById('sisiB').value);

    const keliling = 2 * (sisiA + sisiB);

    document.getElementById('kelilingJajargenjangResult').textContent = 'Keliling Jajargenjang: ' + keliling;
    document.getElementById('kelilingJajargenjangSteps').textContent = `K = 2 * (${sisiA} + ${sisiB}) = ${keliling}`;
});


document.getElementById("resetBtn").addEventListener("click", function() {
    document.getElementById("luasForm").reset();
    document.getElementById("kelilingForm").reset();
    document.getElementById("luasResult").innerHTML = '';
    document.getElementById("kelilingResult").innerHTML = '';
    document.getElementById("luasSteps").innerHTML = '';
    document.getElementById("kelilingSteps").innerHTML = '';
});
