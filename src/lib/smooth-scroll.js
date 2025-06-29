export const smoothScrollTo = (elementId) => {
  const element = document.getElementById(elementId.replace("#", ""));
  if (element) {
    const headerHeight = 80; // Account for fixed header
    const elementPosition = element.offsetTop - headerHeight;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
};
