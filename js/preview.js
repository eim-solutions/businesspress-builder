// Add a click event handler for the preview button
document
  .getElementById("preview-button")
  .addEventListener("click", function () {
    const htmlContent = editor.getHtml();

    // Save HTML to local storage
    localStorage.setItem("preview_html", htmlContent);

    // Open a new tab and create a dynamic HTML document for the preview
    const previewWindow = window.open("", "_blank");
    const previewHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css" rel="stylesheet">
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body>
            <div id="gjs-preview">
                <!-- Include the saved HTML from local storage -->
                ${htmlContent}
            </div>
        </body>
        </html>
    `;

    previewWindow.document.write(previewHtml);
  });
