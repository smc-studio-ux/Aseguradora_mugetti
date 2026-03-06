const counters = document.querySelectorAll(".stat-number");

const speed = 200;

const startCounter = (entry) => {
  if (!entry.isIntersecting) return;

  const counter = entry.target;

  const target = +counter.getAttribute("data-target");

  let count = 0;

  const increment = target / speed;

  const updateCount = () => {
    count += increment;

    if (count < target) {
      counter.innerText = Math.ceil(count);

      requestAnimationFrame(updateCount);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();

  observer.unobserve(counter);
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(startCounter);
  },
  { threshold: 0.6 },
);

counters.forEach((counter) => observer.observe(counter));
