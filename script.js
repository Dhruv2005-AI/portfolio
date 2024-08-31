javascript
// Add event listener to navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Add animation to skills section
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');
const skillsItems = skillsList.querySelectorAll('li');

skillsItems.forEach((item, index) => {
  item.style.animationDelay = `${index * 0.2}s`;
});

skillsSection.addEventListener('mouseenter', () => {
  skillsItems.forEach(item => {
    item.classList.add('animate');
  });
});

skillsSection.addEventListener('mouseleave', () => {
  skillsItems.forEach(item => {
    item.classList.remove('animate');
  });
});