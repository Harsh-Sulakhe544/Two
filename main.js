// Radar Chart - Premium Golden Feel
const ctx = document.getElementById('radarChart').getContext('2d');

const data = {
  labels: ['Creativity', 'Debugging', 'Problem Solving', 'Empathy', 'Ethics', 'Imagination'],
  datasets: [
    {
      label: 'Humans',
      data: [100, 95, 90, 100, 95, 98],
      backgroundColor: 'rgba(255, 215, 0, 0.3)', // golden translucent
      borderColor: 'blue',
      pointBackgroundColor: 'black',
      pointBorderColor: 'white',
      borderWidth: 5,
      pointRadius: 6,
      pointHoverRadius: 8
    },
    {
      label: 'AI',
      data: [50, 40, 30, 0, 0, 20],
      backgroundColor: 'orange', // light red
      borderColor: 'pink',
      pointBackgroundColor: 'purple',
      pointBorderColor: '#cc0000',
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
    
    plugins: {
      legend: {
        labels: {
          color: '#fff',
          font: {
            size: 16,
            weight: 'bold'
          }
        }
      },
      title: {
        display: true,
        text: '⚡ Human Intelligence vs AI Coding Capabilities',
        font: {
          size: 20,
          weight: 'bold'
        },
        color: 'pink'
      }
    },
    scales: {
      r: {
        angleLines: { color: 'green', borderWidth:4 },
        grid: {
          // silver 
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
            size: 16,
            weight: 'bold'
          }
        }
      }
    }
  }
});

// Modal Trigger Logic
const modal = document.getElementById('modal');
const btn = document.getElementById('solveBtn');
const span = document.getElementById('closeBtn');

btn.onclick = () => modal.style.display = 'block';
span.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; };

// Auto trigger after 30-45 seconds

setTimeout(() => {
  // 💡 Only show the modal — never auto-generate the question!
  modal.style.display = 'block';
}, 1000 * (30 + Math.random() * 15));

// Inject the question image into the top question-box when Submit is clicked
document.getElementById('loadQuestion').onclick = (event) => {
  event.preventDefault();
  alert("💡 Challenge generated! Think you can solve it? Prove it today, coder 🔥");

  modal.style.display = 'none';
  const box = document.getElementById('question-box');
  box.innerHTML = `
  <div class="question-flex-container">
    <img src="static/Q1.png" alt="Your Brain-Teaser Question" class="question-img" />
    <div class="question-text">
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
  <div class="responsive-editor-wrap">
    <div id="editor" style="height: 300px; width:100%;"></div>
  </div>
  <div style="text-align:center;">
    <button id="runCodeBtn" style="background:#007bff; color:white; padding:10px 20px; margin-top:14px; cursor:pointer; margin-bottom:14px;">💻 Run Your Code & Dazzle Us!</button>
    <div id="gdb-link" style="margin-top:10px; display:none;">
      <small>Want full IDE power? <a href="https://www.onlinegdb.com/#" target="_blank" style="margin-bottom:14px;">Open in GDB Editor ↗</a></small>
    </div>
  </div>
`;


  // Setup Ace Editor
  const editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.session.setMode("ace/mode/c_cpp"); // Default to C++
  editor.setValue("// Write your code here...\n", 1);

  // Increase font size for better readability
editor.setOptions({
  fontSize: "20px"
});
  // Simulate "Run Code"
  document.getElementById('runCodeBtn').onclick = () => {
    const code = editor.getValue();

    console.log("Running code:\n", code);
    alert("🚀 Code captured! For full execution, open in GDB Editor ↗");
    // Or send to backend / save / simulate output here

     // 👇 Show the GDB link after run button clicked
    document.getElementById('gdb-link').style.display = 'block';
  };
};


// // Block right-click
// document.addEventListener('contextmenu', e => e.preventDefault());

// // Block copy, cut, paste
// ['copy', 'cut', 'paste'].forEach(evt =>
//   document.addEventListener(evt, e => e.preventDefault())
// );

// // Block Ctrl+U, Ctrl+Shift+I, F12 (Inspect)
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

// // Block refresh keys
// document.addEventListener("keydown", function (e) {
//   if (
//     e.key === "F5" ||
//     (e.ctrlKey && e.key === "r") ||
//     (e.ctrlKey && e.shiftKey && e.key === "R")
//   ) {
//     e.preventDefault();
//     alert("🚫 Reload is blocked. You can't escape the challenge now!");
//   }
// });

// // Disable right click (common way to refresh)
// window.addEventListener("contextmenu", function (e) {
//   e.preventDefault();
//   alert("🛑 Right-click is disabled. No sneaky refreshes!");
// });

// // Warn if mouse tries to leave browser window (maybe heading for reload)
// document.addEventListener("visibilitychange", () => {
//   if (document.visibilityState === "hidden") {
//     alert("🚨 Don't switch tabs or reload! You’re in a challenge now!");
//   }
// });


// window.addEventListener("beforeunload", function (e) {
//   e.preventDefault();
//   this.alert( "🚫 Reloading will destroy your progress!");
// });

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

