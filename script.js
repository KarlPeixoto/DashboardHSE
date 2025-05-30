// Efetivo por setor
const efetivo = {
  "TFMC": 6,
  "RHMED": 1,
  "BASE LOGÍSTICA": 0,
  "DOME": 43,
  "GBJ": 0,
  "CRC E VANS": 21,
  "SUNSET": 2,
  "TECLADO": 0,
  "SÉRIMAX": 5,
  "GPS": 3,
  "APPLUS": 12
};

// Ocupação de caçambas
const residuos = {
  "Plástico (Sucata)": 60,
  "Metal (Oeste)": 40,
  "Metal (Leste)": 25,
  "Madeira": 100,
  "Comum": 10,
  "Papel": 10,
  "Plástico (Comum)": 10
};

// DDSMS por área
const ddsmsTemas = [
  { area: "SÉRIMAX", tema: "Queda de mesmo nível" },
  { area: "BASE LOGÍSTICA", tema: "Elétrica" },
  { area: "BASE LOGÍSTICA", tema: "Atitude campeã" },
  { area: "APPLUS QUALITEC", tema: "Coleta seletiva" },
  { area: "DOME - BASE LOGÍSTICA", tema: "xxx" },
  { area: "DOME - FIRING LINE", tema: "Prensamento de mãos" },
  { area: "APPLUS RTD", tema: "Trabalho em altura" },
  { area: "TECLADO", tema: "xxx" },
  { area: "DOME - Carga Armazenamento", tema: "Atenção no ambiente de trabalho" },
  { area: "GBJ", tema: "xxx" },
  { area: "GPS", tema: "Hidratação" },
  { area: "DOME - Carga Stalk", tema: "Atenção no ambiente de trabalho" },
  { area: "CRC E VANS", tema: "Isolamento de área" }
];

// Efetivo gráfico
new Chart(document.getElementById("graficoEfetivo"), {
  type: 'bar',
  data: {
    labels: Object.keys(efetivo),
    datasets: [{
      label: 'Efetivo',
      data: Object.values(efetivo),
      backgroundColor: '#007bff'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// Resíduos gráfico
new Chart(document.getElementById("graficoResiduos"), {
  type: 'bar',
  data: {
    labels: Object.keys(residuos),
    datasets: [{
      label: '% Ocupação',
      data: Object.values(residuos),
      backgroundColor: '#28a745'
    }]
  },
  options: {
    responsive: true,
    indexAxis: 'y',
    scales: {
      x: { beginAtZero: true, max: 100 }
    }
  }
});

// DDSMS tabela
const tabela = document.getElementById("tabelaDDSMS");
ddsmsTemas.forEach(item => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${item.area}</td><td>${item.tema}</td>`;
  tabela.appendChild(row);
});

function gerarPDF() {
  const elemento = document.body;
  html2pdf().from(elemento).save("dashboard-hse.pdf");
}


