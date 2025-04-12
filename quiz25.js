// (Opcional) Sons de acerto/erro
const acertoSound = new Audio('acerto.mp3');
const erroSound = new Audio('erro.mp3');

// ====================
// Texto Extra (Aprender Mais)
// ====================
const learnMoreText = `
1. Funções Celulares e Organelas
• Organização celular: membrana, citoplasma com organelas, núcleo (DNA).
• Funções essenciais: obtenção de nutrientes, metabolismo (ATP), síntese proteica, excreção de resíduos, resposta a estímulos e proteção.
• Principais organelas:
  o Retículo Endoplasmático Rugoso (RER): síntese de proteínas.
  o Retículo Endoplasmático Liso (REL): detox, metabolismo de lipídeos, armazenamento de Ca²⁺.
  o Complexo de Golgi: empacota e distribui proteínas e lipídeos.
  o Mitocôndria: respiração celular, ATP, apoptose.

2. Lesão Celular
• Reversível: pode recuperar-se se o estímulo cessa (ex.: tumefação celular).
• Irreversível: morte celular (necrose ou apoptose).
Exemplos de agentes lesivos: hipóxia, toxinas, infecções, etc.

3. Morte Celular (Necrose e Apoptose)
• Necrose: ruptura da membrana, inflamação local.
• Apoptose: morte programada com ativação de caspases, pouca inflamação.

4. Acúmulos Intracelulares
• Esteatose (degeneração gordurosa), degeneração hidrópica, etc.

5. Adaptações Celulares
• Hipertrofia (↑tamanho), Hiperplasia (↑número), Atrofia (↓tamanho), Metaplasia (substituição do tipo celular).

6. Inflamação Aguda
• Objetivo: conter e eliminar agressores e iniciar reparo.
• Neutrófilos chegam primeiro (6–24h).
• Passos: Marginação, Rolamento, Adesão, Diapedese, Quimiotaxia.

7. Reparo Tecidual
• Inflamatória → Proliferativa (tecido de granulação, colágeno III) → Maturação (colágeno I).

8. Edema
• Acúmulo de líquido no interstício ou cavidades.
• Mecanismos: ↑pressão hidrostática, ↓pressão oncótica, obstrução linfática, retenção de Na⁺/água, etc.
`;

// ====================
// Array de perguntas
// ====================
const questions = [
  {
    question: "1) Questão sobre Funções Celulares e Organelas:\nQual organela é responsável pelo processo de detoxificação de substâncias (fármacos), metabolismo de lipídeos e armazenamento de Ca2+?",
    options: [
      "Retículo Endoplasmático Rugoso (RER)",
      "Retículo Endoplasmático Liso (REL)",
      "Complexo de Golgi",
      "Mitocôndria"
    ],
    answer: 1,
    explanation: `
Resposta correta: (B) Retículo Endoplasmático Liso (REL)

Justificativa:
• REL faz detox, metabolismo de lipídeos e armazenamento de Ca²⁺.
Por que as outras estão incorretas:
• RER: síntese proteica (ribossomos).
• Golgi: empacota/distribui proteínas/lipídeos.
• Mitocôndria: produção de ATP e apoptose.
    `,
    tips: `
• REL = detox + lipídeos + Ca²⁺.
• Em abuso de drogas ou álcool, o REL em hepatócitos é hiperestimulado.
`
  },
  {
    question: "2) Questão sobre Lesão Celular:\nQuando ocorre uma lesão celular irreversível, a célula tende a seguir para:",
    options: [
      "Necrose ou apoptose",
      "Hiperplasia",
      "Hipertrofia",
      "Degeneração hidrópica"
    ],
    answer: 0,
    explanation: `
Resposta correta: (A) Necrose ou apoptose

Justificativa:
• Lesão irreversível → morte celular.
As outras opções são adaptações (hiperplasia, hipertrofia) ou lesão reversível (degeneração hidrópica).
    `,
    tips: `
• Necrose envolve inflamação; apoptose é programada, pouco inflamatória.
`
  },
  {
    question: "3) Questão sobre Tipo de Morte Celular:\nQual morte celular ocorre de forma programada, evitando inflamação intensa e com fragmentação ordenada?",
    options: [
      "Necrose",
      "Apoptose",
      "Autofagia",
      "Fagocitose"
    ],
    answer: 1,
    explanation: `
(B) Apoptose
• Morte celular programada: caspases, fragmentação nuclear, pouca inflamação.
As outras não correspondem a esse padrão.
    `,
    tips: `
• Necrose = ruptura da membrana, inflamação significativa.
• Autofagia não é necessariamente morte.
`
  },
  {
    question: "4) Questão sobre Acúmulos Intracelulares:\nQual degeneração ocorre no fígado por acúmulo de lipídeos (alcoolismo, obesidade)?",
    options: [
      "Degeneração hidrópica",
      "Degeneração proteica",
      "Degeneração gordurosa (esteatose)",
      "Degeneração glicogênica"
    ],
    answer: 2,
    explanation: `
(C) Degeneração gordurosa (esteatose)
• Acúmulo de triglicerídeos nos hepatócitos.
    `,
    tips: `
• Esteatose pode evoluir para esteato-hepatite e cirrose.
`
  },
  {
    question: "5) Questão sobre Adaptações Celulares:\nO aumento do tamanho das células, sem alterar seu número, chama-se:",
    options: [
      "Hiperplasia",
      "Hipertrofia",
      "Atrofia",
      "Metaplasia"
    ],
    answer: 1,
    explanation: `
(B) Hipertrofia
• Aumento do tamanho celular (ex.: miocárdio em hipertensão).
    `,
    tips: `
• Hiperplasia = ↑ número de células.
• Atrofia = ↓ tamanho/função celular.
• Metaplasia = substituição do tipo celular.
`
  },
  {
    question: "6) Questão sobre Metaplasia:\nA substituição de um tipo celular por outro mais resistente a determinado agressor chama-se:",
    options: [
      "Atrofia",
      "Metaplasia",
      "Hipertrofia",
      "Hiperplasia"
    ],
    answer: 1,
    explanation: `
(B) Metaplasia
• Ex.: epitélio respiratório de fumantes se torna escamoso para resistir mais, mas sem cílios.
    `,
    tips: `
• Pode evoluir para displasia e risco de câncer se persistir o estímulo.
`
  },
  {
    question: "7) Questão sobre Inflamação Aguda:\nQuais células chegam primeiro (6–24h) no foco inflamatório?",
    options: [
      "Linfócitos",
      "Neutrófilos",
      "Monócitos",
      "Basófilos"
    ],
    answer: 1,
    explanation: `
(B) Neutrófilos
• São os primeiros leucócitos (inflamação aguda inicial).
    `,
    tips: `
• Depois chegam monócitos (24–48h).
`
  },
  {
    question: "8) Questão sobre Sequência na Inflamação Aguda:\nQual a ordem correta (lúmen → foco inflamatório)?",
    options: [
      "Rolamento → Marginação → Quimiotaxia → Adesão",
      "Marginação → Rolamento → Adesão → Diapedese → Quimiotaxia",
      "Diapedese → Rolamento → Marginação → Quimiotaxia",
      "Adesão → Rolamento → Diapedese → Quimiotaxia"
    ],
    answer: 1,
    explanation: `
(B) Marginação → Rolamento → Adesão → Diapedese → Quimiotaxia
    `,
    tips: `
• M-R-A-D-Q.
`
  },
  {
    question: "9) Questão sobre Edema:\nO que é edema?",
    options: [
      "Acúmulo de líquido intracelular",
      "Acúmulo de líquido no interstício/cavidades",
      "Sempre infeccioso",
      "Sempre por baixa temperatura"
    ],
    answer: 1,
    explanation: `
(B) Acúmulo de líquido no espaço intersticial ou em cavidades.
    `,
    tips: `
• Mecanismos: ↑pressão hidrostática, ↓oncótica, obstrução linfática, inflamação, etc.
`
  },
  {
    question: "10) Questão sobre Reparo Tecidual:\nNa fase proliferativa há formação de tecido de granulação. Quais eventos caracterizam essa fase?",
    options: [
      "Vasoconstrição, necrose e colágeno tipo I",
      "Angiogênese e colágeno tipo III",
      "Apoptose de fibroblastos",
      "Substituição de colágeno III por I"
    ],
    answer: 1,
    explanation: `
(B) Angiogênese + colágeno III (fase proliferativa).
    `,
    tips: `
• Depois, fase de maturação substitui colágeno III por I.
`
  }
];

// Frases de acerto/erro
const frasesAcerto = [
  "Acertooouuu, ta feliz? Não devia, tem mais.",
  "Leu os slides... Grande bosta.",
  "Finalmente, talvez não seja uma decepção completa",
  "Uau, acertou! Tá sorrindo por quê?",
  "Puta merda né, até um papagaio acertaria essa.",
  "Iria até elogiar agora, mas com base no seu histórico acho melhor não",
  "Saber o básico não te faz melhor que ninguém.",
  "Até que enfim uma luz no fim do túnel.",
  "A professora deve ter enviado o gabarito, só pode.",
  "Nem parece você respondendo... acertou!"
];

const frasesErro = [
  "A professora está rindo de você nesse momento.",
  "Tão ruim que até o Google se recusaria a ajudar.",
  "A vai tomar no c. a questão tava gritando a resposta... e você ignorou.",
  "Tem certeza que tá no curso certo?",
  "Dá tempo de voltar pro ensino médio ainda.",
  "Se errar fosse arte, você seria um gênio.",
  "Isso foi tão errado que o botão 'responder' devia ter travado.",
  "Você tá jogando com o modo 'desligado' ativado?",
  "Errou? Normal. Acertar é que seria estranho pra você.",
  "O chatGPT acabou de se desinstalar dos seus dispositivos, nem a wikipédia poderia ser tão ruim."
];

let score = 0;
let current = 0;
let countdownInterval = null;
let timeLeft = 90;
let userAnswers = Array(questions.length).fill(null);

// Carrega pergunta
function loadQuestion() {
  stopTimer();
  const progressText = document.getElementById("progressText");
  progressText.innerText = `Pergunta ${current + 1} de ${questions.length}`;

  const q = questions[current];
  document.getElementById("question").innerText = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((option, index) => {
    const opt = document.createElement("div");
    opt.className = "option";
    opt.innerHTML = `
      <input type='radio' name='option' value='${index}' id='option${index}'>
      <label for='option${index}'> ${option}</label>
    `;
    optionsDiv.appendChild(opt);
  });

  document.getElementById("explanation").style.display = "none";
  document.getElementById("explanation").innerText = "";
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("result").innerText = "";

  const quizContainer = document.getElementById("quizContainer");
  quizContainer.classList.remove("highlight-correct", "highlight-wrong");

  document.getElementById("submitBtn").style.display = "block";

  startTimer(90);
}

function startTimer(seconds) {
  timeLeft = seconds;
  document.getElementById("timer").textContent = timeLeft;

  countdownInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;

    if (timeLeft <= 0) {
      stopTimer();
      timeIsUp();
    }
  }, 1000);
}

function stopTimer() {
  if (countdownInterval) {
    clearInterval(countdownInterval);
    countdownInterval = null;
  }
}

function timeIsUp() {
  alert("Tempo esgotado! Resposta contada como errada.");
  userAnswers[current] = null;
  forceWrongAnswer();
}

function forceWrongAnswer() {
  const quizContainer = document.getElementById("quizContainer");
  quizContainer.classList.add("highlight-wrong", "shake");
  setTimeout(() => {
    quizContainer.classList.remove("shake");
  }, 1000);

  erroSound.play();

  const feedback = document.createElement("div");
  feedback.style.fontWeight = "bold";
  feedback.style.marginTop = "10px";
  feedback.classList.add("animate", "erro");
  const usada = frasesErro[Math.floor(Math.random() * frasesErro.length)];
  feedback.innerText = usada;
  document.getElementById("options").appendChild(feedback);

  const explanation = questions[current].explanation ?? "Sem explicação.";
  const tips = questions[current].tips ?? "";

  const explanationDiv = document.getElementById("explanation");
  explanationDiv.innerHTML = `
    ${explanation}
    <div class="tips-box">
      <strong>Dicas de aprendizado:</strong>
      <p>${tips}</p>
    </div>
  `;
  explanationDiv.style.display = "block";

  document.getElementById("nextBtn").style.display = "inline-block";
  document.getElementById("submitBtn").style.display = "none";
}

// Ao clicar em "Responder"
function submitAnswer() {
  stopTimer();
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Selecione uma opção!");
    startTimer(timeLeft);
    return;
  }

  document.getElementById("submitBtn").style.display = "none";

  const selectedIndex = parseInt(selected.value);
  userAnswers[current] = selectedIndex;

  const correctIndex = questions[current].answer;
  const explanation = questions[current].explanation ?? "Sem explicação.";
  const tips = questions[current].tips ?? "";
  const quizContainer = document.getElementById("quizContainer");

  if (selectedIndex === correctIndex) {
    score++;
    acertoSound.play();
    quizContainer.classList.add("highlight-correct");
  } else {
    erroSound.play();
    quizContainer.classList.add("highlight-wrong", "shake");
    setTimeout(() => {
      quizContainer.classList.remove("shake");
    }, 1000);
  }

  const feedback = document.createElement("div");
  feedback.style.fontWeight = "bold";
  feedback.style.marginTop = "10px";
  feedback.classList.add("animate");
  feedback.classList.add(selectedIndex === correctIndex ? "acerto" : "erro");

  const usada = selectedIndex === correctIndex
    ? frasesAcerto[Math.floor(Math.random() * frasesAcerto.length)]
    : frasesErro[Math.floor(Math.random() * frasesErro.length)];

  feedback.innerText = usada;
  document.getElementById("options").appendChild(feedback);

  // Mostrar explicação + dicas
  const explanationDiv = document.getElementById("explanation");
  explanationDiv.innerHTML = `
    ${explanation}
    <div class="tips-box">
      <strong>Dicas de aprendizado:</strong>
      <p>${tips}</p>
    </div>
  `;
  explanationDiv.style.display = "block";

  document.getElementById("nextBtn").style.display = "inline-block";
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    finishQuiz();
  }
}

// Final do Quiz
function finishQuiz() {
  document.getElementById("quiz").innerHTML = "";
  const total = questions.length;
  const pontos = score * 10;
  const pct = (score / total) * 100;

  let finalMsg = `
    Você acertou ${score} de ${total} perguntas!<br>
    Pontuação final: ${pontos} pontos.<br><br>
  `;
  
  // Mensagens extras de conquista
  if (pct >= 80) {
    finalMsg += "Parabéns, você obteve um ótimo resultado!<br>";
  } else if (pct >= 50) {
    finalMsg += "Resultado razoável, mas ainda há espaço para melhorar.<br>";
  } else {
    finalMsg += "Não foi dessa vez. Bora estudar mais um pouquinho!<br>";
  }

  // Dois botões agora: Revisar ou Aprender Mais
  finalMsg += `
    <button onclick="showReview()">Revisar Respostas</button>
    <button onclick="showLearnMore()">Aprender Mais</button>
  `;

  document.getElementById("quiz").innerHTML = `
    <div class='result'>
      ${finalMsg}
    </div>
  `;
}

// Mostra Revisão e esconde resultado
function showReview() {
  const quizContainer = document.getElementById("quizContainer");
  quizContainer.style.display = "none";

  const reviewContainer = document.getElementById("reviewContainer");
  reviewContainer.style.display = "block";

  const reviewContent = document.getElementById("reviewContent");
  reviewContent.innerHTML = "";

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const userAns = userAnswers[i];
    const correctAns = q.answer;
    const isCorrect = (userAns === correctAns);

    const userAnsText = (userAns !== null)
      ? q.options[userAns]
      : "Não respondeu (Tempo Esgotado)";
    const correctAnsText = q.options[correctAns];

    const item = document.createElement("div");
    item.classList.add("review-item");

    item.innerHTML = `
      <div class="review-question">${i + 1}. ${q.question}</div>
      <div><strong>Sua resposta:</strong>
        <span class="${isCorrect ? 'review-correct' : 'review-wrong'}">
          ${userAnsText}
        </span>
      </div>
      <div><strong>Resposta correta:</strong> ${correctAnsText}</div>
      <div><strong>Explicação:</strong><br>${q.explanation ?? "Sem explicação"}</div>
      <div class="tips-box">
        <strong>Dicas de aprendizado:</strong>
        <p>${q.tips ?? ""}</p>
      </div>
    `;

    reviewContent.appendChild(item);
  }
}

// Função que mostra a tela de "Aprender Mais" e esconde o resultado
function showLearnMore() {
  // Esconder o quizContainer (que está mostrando a tela final)
  document.getElementById("quizContainer").style.display = "none";
  
  // Mostrar o learnMoreContainer
  const learnDiv = document.getElementById("learnMoreContainer");
  learnDiv.style.display = "block";
  
  // Colocar o texto
  document.getElementById("learnContent").textContent = learnMoreText;
}

// Voltar para a tela de resultados
function goBackToResults() {
  // Esconde tela de revisão e tela de aprender
  document.getElementById("reviewContainer").style.display = "none";
  document.getElementById("learnMoreContainer").style.display = "none";

  // Mostra novamente o quizContainer (que está com a tela final)
  document.getElementById("quizContainer").style.display = "block";
}

// Carrega a primeira pergunta ao iniciar
window.onload = function() {
  loadQuestion();
};
