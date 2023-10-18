const quizData = [
    {
      question: "What does ROI stand for?",
      a: "Return on Investment",
      b: "Return on Investment",
      c: "Revenue of Interest",
      d: "Rate of Inheritance",
      correct: "a",
    },
    {
      question: "Which financial instrument represents ownership in a company?",
      a: "Bond",
      b: "Stock",
      c: "Certificate of Deposit",
      d: "Mutual Fund",
      correct: "b",
    },
    {
      question: "What is the main purpose of diversification in an investment portfolio?",
      a: "Minimize taxes",
      b: "Maximize returns",
      c: "Reduce risk",
      d: "Accelerate inflation",
      correct: "c",
    },
  
    {
      question:"Which type of insurance provides coverage for damage to your own vehicle in an accident?",
      a: "Health Insurance",
      b: "Life Insurance",
      c: "Home Insurance",
      d: "Auto Insurance",
      correct: "d",
    },
    {
      question:"What does APR stand for in the context of loans?",
      a: "Annual Percentage Rate",
      b: "Average Principal Return",
      c: "Annual Payment Responsibility",
      d: "Average Payment Risk",
      correct: "a",
    },
    {
      question:"Which of the following is a basic financial statement that shows a company's revenues and expenses over a specific period?",
      a: "Balance Sheet",
      b: "Income Statement",
      c: "Cash Flow Statement",
      d: "Shareholder Equity Report",
      correct: "b",
    },
    {
      question:"What term is used to describe the interest rate at which banks lend money to each other in the short term?",
      a: "Prime Rate",
      b: "LIBOR",
      c: "Mortgage Rate",
      d: "Treasury Rate",
      correct: "b",
    },
    {
      question:"What does APR stand for in the context of loans?",
      a: "Annual Percentage Rate",
      b: "Average Principal Return",
      c: "Annual Payment Responsibility",
      d: "Average Payment Risk",
      correct: "a",
    },
    {
      question:"What is the primary role of the Federal Reserve in the United States?",
      a: "Tax collection",
      b: "Monetary policy",
      c: "Fiscal policy",
      d: "Social Security",
      correct: "b",
    },
    {
      question:"Which of the following is a measure of a company's profitability and is calculated as net income divided by revenue?",
      a: "Earnings Before Interest and Taxes (EBIT)",
      b: "Price-to-Earnings (P/E) Ratio",
      c: "Return on Assets (ROA)",
      d: "Gross Margin",
      correct: "c",
    },
    {
      question:"What is the term for a period of economic decline when GDP decreases for two consecutive quarters?",
      a: "Recession",
      b: "Depression",
      c: "Inflation",
      d: "Boom",
      correct: "a",
    },
    {
      question:"Which type of retirement account allows individuals to contribute pre-tax income, reducing their taxable income for the year?",
      a: "Roth IRA",
      b: "401(k)",
      c: "HSA",
      d: "Social Security",
      correct: "b",
    },
    {
      question:"What does the term 'liquidity' refer to in finance?",
      a: "The ease of converting assets into cash",
      b: "The interest rate on a loan",
      c: "The price of a stock",
      d: "The size of a company's debt",
      correct: "a",
    },
    {
      question:"Which investment strategy involves buying a diversified portfolio of stocks and holding them for the long term?",
      a: "Day trading",
      b: "Value investing",
      c: "Arbitrage",
      d: "Options trading",
      correct: "b",
    },
    {
      question:"In finance, what is the term for the process of spreading investments among different asset classes to reduce risk?",
      a: "Leverage",
      b: "Diversification",
      c: "Speculation",
      d: "Volatility",
      correct: "b",
    },
    {
      question:"What is the term for the money an investor receives from an investment, typically expressed as a percentage of the investment's value?",
      a: "Capital gain",
      b: "Dividend",
      c: "Principal",
      d: "Inflation",
      correct: "b",
    },
    {
      question:"Which of the following is a credit score range typically used in the United States?",
      a: "0 to 100",
      b: "200 to 800",
      c: "1 to 10",
      d: "1 to 1000",
      correct: "b",
    },
    {
      question:"What is the main function of a financial regulator like the SEC (Securities and Exchange Commission)?",
      a: "Tax collection",
      b: "Consumer protection",
      c: "Monetary policy",
      d: "Market regulation",
      correct: "d",
    },
    {
      question:"What is the term for the rate at which the general level of prices for goods and services rises, leading to a decrease in purchasing power?",
      a: "Deflation",
      b: "Stagnation",
      c: "Inflation",
      d: "Recession",
      correct: "c",
    },
    {
      question:"In options trading, what is a 'call option'?",
      a: "An option to sell a security at a specified price",
      b: "An option to buy a security at a specified price",
      c: "An option to trade commodities",
      d: "An option to cancel a trade",
      correct: "b",
    },
    {
      question:"What is the term for the total value of all goods and services produced by a country in a specific time period?",
      a: "Gross National Product (GNP)",
      b: "Gross Domestic Product (GDP)",
      c: "Net Income",
      d: "Trade Balance",
      correct: "b",
    },
  ];
  
  const quiz = document.getElementById("quiz");
  const answerEls = document.querySelectorAll(".answer");
  const questionEl = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitBtn = document.getElementById("submit");
  
  let totalQuestions = quizData.length;
  let currentQuiz = 0;
  let allowed = 1;
  let score = 0;
  
  const random = ()=>{
      return Math.floor(Math.random()*totalQuestions);
  }
  
  var question_came_ids = [random()];
  loadQuiz(question_came_ids[0]);
  
  function loadQuiz(id) {
    deselectAnswers();
  
    const currentQuizData = quizData[id];
  
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  }
  
  function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
    return answer;
  }
  
  function deselectAnswers() {
    answerEls.forEach((answerEl) => {
      answerEl.checked = false;
    });
  }
  
  submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
  
  
      currentQuiz++;
      let id ;
      do{
       id=    random();
  
      }while(id in question_came_ids)
  
      if (currentQuiz < allowed) {
        loadQuiz(id);
      } else {
        quiz.innerHTML = (score > 0)?
        `<h4>You answered correctly.</h4>
        <h4>For more question click below</h4>`
        :
        `<h4>Sorry this is incorrect</h4>
        <h4>You need more practice</h4>
        <h4>Click the link below</h4>`;
      }
    }
  });
  