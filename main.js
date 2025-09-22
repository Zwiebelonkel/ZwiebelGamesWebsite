// JavaScript für das Hervorheben der aktiven Navigation bei Scrollen
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const links = document.querySelectorAll(".top-bar a");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    // Überprüfen, ob der Abschnitt im Sichtbereich des Fensters ist
    if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  // Links in der Navigation hervorheben, basierend auf der aktuellen Sektion
  links.forEach((link) => {
    link.classList.remove("active"); // Entferne die Hervorhebung von allen Links
    if (link.getAttribute("href").substring(1) === currentSection) {
      link.classList.add("active"); // Füge die Hervorhebung zum aktuellen Link hinzu
    }
  });
});

// Wenn ein Link geklickt wird, scrolle zur entsprechenden Sektion
const navLinks = document.querySelectorAll(".top-bar a");
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 70, // Offset um den Header zu berücksichtigen
      behavior: "smooth",
    });

    event.preventDefault();
  });
});
