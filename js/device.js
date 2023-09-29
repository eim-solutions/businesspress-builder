// JavaScript code to trigger grapesjs devices functionality

document
  .getElementById("custom-desktop")
  .addEventListener("click", function () {
    // Trigger the GrapeJS functionality for the desktop device
    editor.setDevice("Desktop");

    const desktopPaths = document.querySelectorAll("#custom-desktop svg path"); // Select all path elements

    desktopPaths.forEach(function (path) {
      path.setAttribute("fill", "#1A53E7"); // Change the fill color
    });

    const tabletPaths = document.querySelectorAll("#custom-tablet svg path"); // Select all path elements

    tabletPaths.forEach(function (path) {
      path.setAttribute("fill", "#a3a3a3"); // Change the fill color
    });

    const mobilePaths = document.querySelectorAll("#custom-mobile svg path"); // Select all path elements

    mobilePaths.forEach(function (path) {
      path.setAttribute("fill", "#a3a3a3"); // Change the fill color
    });
  });

document.getElementById("custom-tablet").addEventListener("click", function () {
  // Trigger the GrapeJS functionality for the tablet device
  editor.setDevice("Tablet");

  // Update the fill attribute of the SVG
  const tabletPaths = document.querySelectorAll("#custom-tablet svg path"); // Select all path elements

  tabletPaths.forEach(function (path) {
    path.setAttribute("fill", "#1A53E7"); // Change the fill color
  });

  const desktopPaths = document.querySelectorAll("#custom-desktop svg path"); // Select all path elements

  desktopPaths.forEach(function (path) {
    path.setAttribute("fill", "#a3a3a3"); // Change the fill color
  });

  const mobilePaths = document.querySelectorAll("#custom-mobile svg path"); // Select all path elements

  mobilePaths.forEach(function (path) {
    path.setAttribute("fill", "#a3a3a3"); // Change the fill color
  });
});

document.getElementById("custom-mobile").addEventListener("click", function () {
  // Trigger the GrapeJS functionality for the mobile device
  editor.setDevice("Mobile portrait");

  // Update the fill attribute of the SVG
  const mobilePaths = document.querySelectorAll("#custom-mobile svg path"); // Select all path elements

  mobilePaths.forEach(function (path) {
    path.setAttribute("fill", "#1A53E7"); // Change the fill color
  });

  const desktopPaths = document.querySelectorAll("#custom-desktop svg path"); // Select all path elements

  desktopPaths.forEach(function (path) {
    path.setAttribute("fill", "#a3a3a3"); // Change the fill color
  });

  const tabletPaths = document.querySelectorAll("#custom-tablet svg path"); // Select all path elements
  tabletPaths.forEach(function (path) {
    path.setAttribute("fill", "#a3a3a3"); // Change the fill color
  });
});
