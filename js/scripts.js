window.sr = ScrollReveal(); 

  sr.reveal('.navbar', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
  });

  sr.reveal('.imagen', {
    duration: 3000
  });

  sr.reveal('.name', {
    duration: 3000,
    origin: 'left',
    distance: '-100px'
  });

  sr.reveal('.area', {
    duration: 3000,
    origin: 'right',
    distance: '-100px'
  });

  sr.reveal('.caja-nombre', {
    duration: 3000,
    origin: 'top',
    distance: '-100px'
  });

  sr.reveal('.caja', {
    duration: 3000
  });

  sr.reveal('.scroll-personal', {
    duration: 3000,
    origin: 'left',
    distance: '-100px'
  });

  sr.reveal('.scroll-educacion', {
    duration: 3000,
    origin: 'right',
    distance: '-100px'
  });

  sr.reveal('.scroll-experiencia', {
    duration: 3000,
    origin: 'left',
    distance: '-100px'
  });

  sr.reveal('.scroll-habilidades', {
    duration: 3000,
    origin: 'right',
    distance: '-100px'
  });

  sr.reveal('.contacto', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
  });

  var skillsSection = document.querySelector('#habilidades');
  var animationExecuted = false; // variable para controlar si se ha ejecutado la animación
  
  var skillsWaypoint = new Waypoint({
    element: skillsSection,
    handler: function() {
      if (!animationExecuted) { // si la animación no se ha ejecutado
        const cssProgress = document.getElementById("css-progress");
        const htmlProgress = document.getElementById("html-progress");
        const jsProgress = document.getElementById("js-progress");
        const bootstrapProgress = document.getElementById("bootstrap-progress");
  
        animateProgress(cssProgress, 80);
        animateProgress(htmlProgress, 90);
        animateProgress(jsProgress, 70);
        animateProgress(bootstrapProgress, 60);
  
        animationExecuted = true; // actualizar la variable para indicar que se ha ejecutado la animación
      }
    },
    offset: 'bottom-in-view'
  });
  
  function animateProgress(progressBar, targetWidth) {
    let currentWidth = 0;
    let intervalId = setInterval(increaseWidth, 10);
  
    function increaseWidth() {
      if (currentWidth >= targetWidth) {
        clearInterval(intervalId);
      } else {
        currentWidth++;
        progressBar.style.width = currentWidth + "%";
        progressBar.textContent = currentWidth + "%";
      }
    }
  }
  

// validar formulario

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

// Terminal Text Effect

// function([string1, string2],target id,[color1,color2])    
consoleText(['Frederick Clark'], 'text',['black']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])

  window.setInterval(function() {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
}


