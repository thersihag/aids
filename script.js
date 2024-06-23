document.addEventListener('DOMContentLoaded', () => {
    // Toggle navigation menu for mobile
    const toggle = document.querySelector('.navbar-toggle');
    const navLinks = document.querySelector('.navbar-links');
    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Automatic typing for course names
    const courses = [
        'M.Sc. Computer Science (Artificial Intelligence and Data Science)',
'B.Tech. (Artificial Intelligence (AI) and Data Science) ',
'Integrated B.Sc. (Hons./Hons. with Research) - M.Sc. Computer Science (Artificial Intelligence and Data Science)',
'Ph.D Computer Science (Artificial Intelligence and Data Science)'
    ];
    let courseIndex = 0;
    let charIndex = 0;
    const courseElement = document.getElementById('courseName');

    function typeCourse() {
        if (charIndex < courses[courseIndex].length) {
            courseElement.textContent += courses[courseIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeCourse, 150);
        } else {
            setTimeout(eraseCourse, 1500);
        }
    }

    function eraseCourse() {
        if (charIndex > 0) {
            courseElement.textContent = courses[courseIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseCourse, 100);
        } else {
            courseIndex = (courseIndex + 1) % courses.length;
            setTimeout(typeCourse, 500);
        }
    }

    typeCourse();

    // Toggle program details
    window.toggleDetails = function (id) {
        const details = document.getElementById(id);
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
    };
});

let isPaused = false;

function toggleMarquee() {
    const marqueeText = document.querySelector('.marquee-text');
    marqueeText.classList.toggle('marquee-paused');
    isPaused = !isPaused;
}

// Get the modal element
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName('close')[0];

// When the page loads, display the modal
window.onload = function() {
  modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
