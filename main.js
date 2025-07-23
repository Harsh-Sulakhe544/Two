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
  
    <div style="background: yellow; padding: 20px; text-align: center; border: 2px solid #000; margin: 20px;">
      <h3>🧠 Your Question : <strong> Chapati Overflow Paradox </strong> </h3>
      <img src="Q1.png" alt="Your Question" style="width:100%;height:auto;max-width:400px;" />
      <h3> WHERE </h3>
      <h3>L is the Length of the combination of Chapathi and Ghee Overflow</h3>
      <h3>V is the vegies surface area with Radius as R </h3>
      <h3>S1 and S2 are the Sabji's Surface Area with Diameters d1 (/) and d2(/)</h3>
      <h3>"Find the Area remaining which is empty in your plate ??? Write a piece of code for it."</h3>
      <p><strong>Languages Recommended:</strong> C/C++/Python/Java/JS</p>
      
      <p><strong>Default Set : C/C++ </strong> </p>

      <div id="editor" style="height: 300px; width:100%; max-width:600px; margin:auto; border:1px solid #ccc;"></div>

      <button id="runCodeBtn" style="background:#007bff; color:white; padding:10px 20px; margin-top:10px; cursor:pointer;">💻 Run Code</button>

      <div id="gdb-link" style="margin-top: 10px; display:none;">
        <small>Need full power? <a href="https://www.onlinegdb.com/#" target="_blank">Open in GDB Editor ↗</a></small>
      </div>
    </div>
  `;

  // Setup Ace Editor
  const editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.session.setMode("ace/mode/c_cpp"); // Default to C++
  editor.setValue("// Write your code here...\n", 1);

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

// // Wait until question is injected, then init Quill and Run Code logic
// document.addEventListener('DOMContentLoaded', () => {
//   if (localStorage.getItem("questionGenerated") === "true") {
//     initQuillEditor();
//   }
// });

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

