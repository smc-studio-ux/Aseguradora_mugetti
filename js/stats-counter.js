const counters = document.querySelectorAll(".stat-number");
const speed = 200;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const counter = entry.target;
      const target = Number(counter.dataset.target || 0);
      const prefix = counter.dataset.prefix || "";
      let count = 0;
      const increment = target / speed;

      const updateCount = () => {
        count += increment;

        if (count < target) {
          counter.innerText = `${prefix}${Math.ceil(count)}`;
          requestAnimationFrame(updateCount);
          return;
        }

        counter.innerText = `${prefix}${target}`;
      };

      updateCount();
      observer.unobserve(counter);
    });
  },
  { threshold: 0.6 },
);

counters.forEach((counter) => observer.observe(counter));
