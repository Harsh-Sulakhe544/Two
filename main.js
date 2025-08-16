// Radar Chart - Premium Golden Feel
// Radar Chart - Professional & Reality-Check AI Landscape
const ctx = document.getElementById('radarChart').getContext('2d');

const data = {
  labels: ['Creativity', 'Debugging', 'Problem Solving', 'Empathy', 'Ethics', 'Imagination'],
  datasets: [
    {
      label: 'AI',
      data: [98, 97, 95, 65, 60, 75], // AI dominating technical fields, approaching human-level creativity
      backgroundColor: 'rgba(255, 165, 0, 0.5)', // orange translucent
      borderColor: 'pink',
      pointBackgroundColor: 'purple',
      pointBorderColor: '#cc0000',
      borderWidth: 5,
      pointRadius: 6,
      pointHoverRadius: 8
    },
    {
      label: 'Humans',
      data: [72, 88, 82, 92, 87, 98], // Humans leading crucial emotional and ethical dimensions
      backgroundColor: 'rgba(255, 215, 0, 0.3)', // golden translucent
      borderColor: 'blue',
      pointBackgroundColor: 'black',
      pointBorderColor: 'white',
      borderWidth: 5,
      pointRadius: 5,
      pointHoverRadius: 7
    }
  ]
};

new Chart(ctx, {
  type: 'radar',
  data: data,
  options: {
    responsive: true,
    animation: {
      duration: 1600,
      easing: 'easeInOutCubic'
    },
    plugins: {
      legend: {
        labels: {
          color: '#fff',
          font: {
            size: 18,
            weight: 'bold'
          }
        }
      },
      title: {
        display: true,
        text: '⚡ AI Taking Over: The New Reality Check for Human Intelligence',
        color: 'pink',
        font: {
          size: 24,
          weight: 'bold'
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.parsed.r} / 100`;
          },
          afterBody: function(context) {
            const label = context[0].dataset.label;
            const val = context[0].parsed.r;
            if (label === 'AI' && val >= 90) {
              return '🚀 Areas where AI is decisively taking over';
            }
            if (label === 'AI' && val < 70) {
              return '⚠️ Critical areas where AI still requires responsible improvement';
            }
            if (label === 'Humans' && val >= 90) {
              return '✨ Core human strengths essential for ethical and creative leadership';
            }
            if (label === 'Humans' && val < 80) {
              return '⚠️ Opportunities for humans to sharpen skills and adapt';
            }
            return '';
          }
        }
      }
    },
    scales: {
      r: {
        angleLines: {
          color: 'green',
          borderWidth: 4
        },
        grid: {
          color: '#C0C0C0'
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          display: false
        },
        pointLabels: {
          color: 'green',
          font: {
            size: 18,
            weight: 'bold'
          }
        }
      }
    }
  }
});


// effects to make that radar-chart stable 
// 🟢 Force resize after DOM is ready :  
window.addEventListener('load', () => {
  radarChart.resize();
});

// 🟢 Also resize on window resize:
window.addEventListener('resize', () => {
  radarChart.resize();
});

// Modal Trigger Logic -- QR-CODE
// const modal = document.getElementById('modal');
const btn = document.getElementById('solveBtn');
// const span = document.getElementById('closeBtn');

 btn.onclick = () => document.getElementById('loadQuestion').click(); // directly load the question;
// span.onclick = () => modal.style.display = 'none';
// window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; };

// // Auto trigger after 30-45 seconds

// setTimeout(() => {
//   // 💡 Only show the modal — never auto-generate the question!
//   modal.style.display = 'block';
// }, 1000 * (30 + Math.random() * 15));

// Helper: Get initial comment line based on language
function getInitialComment(lang) {
  if (lang === "python") return "# Write your code here...\n";
  return "// Write your code here...\n"; // for c_cpp and javascript
}

// for the generate question button 
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = "show";

  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 4000); // show for 4 seconds
}

// Inject the question image into the top question-box when Submit is clicked
document.getElementById('loadQuestion').onclick = (event) => {
  event.preventDefault();
  showToast("💡 Challenge generated! Think you can solve it? Prove it today, coder 🔥");

  // modal.style.display = 'none';
  const box = document.getElementById('question-box');
  box.innerHTML = `
  <div class="question-flex-container">
    <img src="static/Q1.png" alt="Your Brain-Teaser Question" class="question-img" />
    <div class="question-text">
      <h1 style="text-align:center; color: goldenrod; margin-bottom: 0; margin-top: 1rem;">🔥 The Ultimate Challenge Awaits! ❓ Can You Solve It? ⁉️</h1>
      <br>
      <h3>🧠 <strong>Chapati Overflow Paradox</strong> awaits your genius!</h3>
      <p>
        Imagine a tasty puzzle on your plate: <strong>L</strong> is the combined length of Chapati and flowing Ghee,<br>
        <strong>V</strong> represents the veggies’ surface area (radius = R),<br>
        and <strong>S1</strong> &amp; <strong>S2</strong> are the Sabji areas, defined by diameters d₁ and d₂.<br><br>
        <strong>Your mission:</strong> Calculate the empty area left on this delicious canvas. Can your code solve it?<br>
        Put your logic to the test and watch the magic unfold!
      </p>
      <p>
        <strong>Languages accepted:</strong> C / C++ / Python / Java / JavaScript<br>
        <strong>Default:</strong> C/C++
      </p>
    </div>
  </div>
  <h1 style="
    color: #ffd700;
    margin-top: 3rem;
    margin-bottom: 1.2rem;
    text-align: center;
    font-family: 'Segoe UI', 'Helvetica Neue', Arial, 'sans-serif';
    font-size: 2.6rem;
    letter-spacing: 0.04em;
    text-shadow: 0 2px 24px rgba(255,215,0,0.45), 0 1px 0 #85671a;
    font-weight: 800;
  ">
    🚀 Warm Up Your Coding Basics
    <span style="display: block; font-size: 1.2rem; color: #bbb; font-weight: 500; margin-top: 0.6rem;">
      Jump in, experiment, and get sharp—no sign-up needed.
    </span>
  </h1>

  <div class="language-selector-wrapper">
  <span class="language-label">Select the Language to Code</span>
  <select id="languageSelector" class="language-select">
    <option value="c_cpp" selected>C/C++</option>
    <option value="javascript">JavaScript</option>
    <option value="python">Python</option>
  </select>
</div>


  <div class="responsive-editor-wrap">
    <div id="editor" style="height: 300px; width:100%;"></div>
  </div>

  <div style="text-align:center;">
    <button id="runCodeBtn" style="background:#007bff; color:white; padding:10px 20px; margin-top:14px; cursor:pointer; margin-bottom:14px;">💻 Run Your Code & Dazzle Us!</button>

    <div id="output-section" style="display:none; background:#1e1e1e; color:#00ff99;  padding:10px;  margin:20px;  border-radius:12px; font-family: monospace;">
      <h3> Output:</h3>
      <pre id="output-result">// Output will appear here...</pre>
    </div>

    <div id="gdb-link" style="
      background: linear-gradient(90deg, #FFD700, #FFC107);
      padding-top: 2rem;
      padding-bottom: 2rem;
      margin: 3rem 0;
      height: 6rem;
      display: none;
      font-weight: 700;
      font-size: 24px;
      box-shadow: 0 0 15px #00ffd5, 0 0 25px #00ffd5 inset;
      border-radius: 16px;
      text-align: center;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    ">
      <a href="https://www.onlinegdb.com/#" target="_blank" style="
        display: inline-block;
        background: linear-gradient(45deg, #ff6a00, #ee0979, #ff6a00);
        background-size: 200% 200%;
        animation: gradientShift 4s ease infinite;
        color: white;
        padding: 1rem 2.5rem;
        border-radius: 28px;
        text-decoration: none;
        box-shadow: 0 4px 25px rgba(238, 9, 121, 0.7), 0 0 20px #ff6a00 inset;
        font-weight: 900;
        letter-spacing: 0.08em;
        transition: box-shadow 0.3s ease, transform 0.3s ease;
        user-select: none;
        font-size: 1.25rem;
      ">
        Want full IDE power? 💪 Open in GDB Editor ↗
      </a>

      <style>
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        #gdb-link a:hover {
          box-shadow: 0 6px 30px rgba(238, 9, 121, 1), 0 0 30px #ff6a00 inset;
          transform: scale(1.05);
        }
      </style>
    </div>
  </div>
  `;

  // Setup Ace Editor
  const editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");

  const languageSelector = document.getElementById('languageSelector');

  function setEditorMode(language) {
    let mode = "ace/mode/c_cpp"; // default
    if (language === "javascript") mode = "ace/mode/javascript";
    else if (language === "python") mode = "ace/mode/python";
    editor.session.setMode(mode);
  }

  // Initial editor setup with mode and comment line
  setEditorMode(languageSelector.value);
  editor.setValue(getInitialComment(languageSelector.value), 1);

    // Increase font size for better readability
editor.setOptions({
  fontSize: "20px"
});

  // Update editor mode and comment when language changes
  languageSelector.addEventListener('change', function() {
    setEditorMode(this.value);
    editor.setValue(getInitialComment(this.value), 1);
  });

  // Run Code simulation event (existing logic remains)
  document.getElementById('runCodeBtn').onclick = () => {
    const code = editor.getValue();
    const selectedLang = languageSelector.value;
    console.log("Running code:\n", code);

    let outputs = [];

    if (selectedLang === "c_cpp") {
      const returnMatches = [...code.matchAll(/return\s+["'](.+?)["']/g)];
      const printfMatches = [...code.matchAll(/printf\s*\(\s*["'](.+?)["']/g)];
      const coutMatches = [...code.matchAll(/cout\s*<<\s*["'](.+?)["']/g)];

      returnMatches.forEach(match => outputs.push(match[1]));
      printfMatches.forEach(match => outputs.push(match[1]));
      coutMatches.forEach(match => outputs.push(match[1]));
    } else if (selectedLang === "javascript") {
      const consoleLogMatches = [...code.matchAll(/console\.log\s*\(\s*["'](.+?)["']/g)];
      consoleLogMatches.forEach(m => outputs.push(m[1]));
    } else if (selectedLang === "python") {
      const pythonPrintMatches = [...code.matchAll(/print\s*\(\s*["'](.+?)["']\s*\)/g)];
      pythonPrintMatches.forEach(m => outputs.push(m[1]));
    }

    let simulatedOutput = "";
    if (outputs.length > 0) {
      simulatedOutput = outputs.join('\n');
    } else {
      simulatedOutput = `// ℹ️ No output statements found for selected language (${selectedLang}). Write valid ${
        selectedLang === "python" ? "'print()'" : selectedLang === "javascript" ? "'console.log()'" : "'return', 'printf()', or 'cout'"
      } statements to see output.`;
    }

    document.getElementById('output-section').style.display = 'block';
    document.getElementById('output-result').innerText = simulatedOutput;
    document.getElementById('gdb-link').style.display = 'block';

    alert("🚀 Code captured! For full execution, open in GDB Editor ↗");
  };
};

// Helper function outside this event to generate initial comment based on language
function getInitialComment(lang) {
  if (lang === "python") return "# Write your code here...\n";
  return "// Write your code here...\n"; // For c_cpp and javascript
}



// Block right-click
document.addEventListener('contextmenu', e => e.preventDefault());

// Block copy, cut, paste
['copy', 'cut', 'paste'].forEach(evt =>
  document.addEventListener(evt, e => e.preventDefault())
);

//  Block Ctrl+U, Ctrl+Shift+I, F12 (Inspect)
// document.addEventListener('keydown', function(e) {
//   if (
//     (e.ctrlKey && e.key === 'u') || // view source
//     (e.ctrlKey && e.shiftKey && e.key === 'I') || // dev tools
//     e.key === 'F12'
//   ) {
//     alert("Don't ❌ use Inspect 💽 Option to copy the question ❓.")
//     e.preventDefault();

//   }
// });

// Block refresh keys
document.addEventListener("keydown", function (e) {
  if (
    e.key === "F5" ||
    (e.ctrlKey && e.key === "r") ||
    (e.ctrlKey && e.shiftKey && e.key === "R")
  ) {
    e.preventDefault();
    alert("🚫 Reload is blocked. You can't escape the challenge now!");
  }
});

// Disable right click (common way to refresh)
window.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  alert("🛑 Right-click is disabled. No sneaky refreshes!");
});


// reload with normal symbol
window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  this.alert( "🚫 Reloading will destroy your progress!");
});


// Wait until question is injected, then init Quill and Run Code logic
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem("questionGenerated") === "true") {
    initQuillEditor();
  }
});

function initQuillEditor() {
  const editorContainer = document.getElementById('editor');
  if (!editorContainer) return;

  const quill = new Quill('#editor', {
    theme: 'snow',
    placeholder: 'Write your brilliant code here...',
    modules: {
      toolbar: [['bold', 'italic'], ['code-block']]
    }
  });

  document.getElementById('runCodeBtn').onclick = () => {
    const code = quill.getText().trim();
    if (code.length < 10) {
      alert("🧐 Write some meaningful code first, coder!");
      return;
    }
    alert("✅ Code submitted! You’re warmed up... now prove it in GDB if you dare 🚀");
    document.getElementById('gdb-link').style.display = 'block';
  };
}

document.getElementById('proveBtn').onclick = () => {
  // document.getElementById('modal').style.display = 'block';
  document.getElementById('loadQuestion').click(); // directly load the question  
};
