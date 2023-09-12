const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".link a.van");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

// Event listener untuk mengatur tautan yang di-klik menjadi aktif
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Kode ini akan membiarkan perilaku default tautan (mengarahkan ke halaman yang dituju)
    // Jadi, e.preventDefault(); dihapus
    const targetId = link.getAttribute("href").slice(1);

    sections.forEach((section) => {
      section.classList.remove("active");
      if (section.getAttribute("id") === targetId) {
        section.classList.add("active");
      }
    });

    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });

    link.classList.add("active");
  });
});
