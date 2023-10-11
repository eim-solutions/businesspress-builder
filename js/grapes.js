// Initialize GrapesJS
const editor = grapesjs.init({
    canvas: {
        styles: [
            "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",
            "https://unpkg.com/swiper@7/swiper-bundle.min.css"
        ]
    },
    styleManager: { // Configure the Style Manager
        clearProperties: 1,
    },
    blockManager: {
        appendTo: "#block",
    },
    panels: { defaults: [] },
    container: '#grapesjs-container',
    fromElement: true, // Pass true to load the initial HTML from the container
    storageManager: {
        // Configure the Local Storage plugin
        autoload: true, // Automatically load data from local storage on editor initialization
        autosave: false, // Automatically save data to local storage
        type: "local", // Use local storage as the storage type
        stepsBeforeSave: 1, // Number of steps/actions before saving to local storage
    }, // You can configure storage options as needed
    // plugins: ['grapesjs-preset-webpage'], // Include any additional plugins you need

});

editor.BlockManager.add('navigations-center-block', {
    label: 'Navigations Center',
    content: '<section class="bg-white rounded-lg flex justify-between gap-2 items-center p-4 border border-2 border-gray-300 hover:border-blue-700 cursor-pointer"><div class=""><img src="./assets/svg/business-press.svg" alt="business-press" /></div><div class="flex justify-between gap-5 items-center text-xs"><a href="">Menu item</a><a href="">Menu item</a><a href="">Menu item</a><a href="">Menu item</a><a href="">Menu item</a></div><div><button class="rounded-full bg-blue-700 hover:bg-blue-900 text-white px-4 py-1 gap-2 text-[10px] mx-auto my-0">Contact Us</button></div></section>',
});

editor.BlockManager.add('navigations-left-block', {
    label: 'Navigations Left',
    content: '<section class="bg-white rounded-lg flex justify-between gap-2 items-center p-4 border border-2 border-gray-300 hover:border-blue-700 cursor-pointer"> <div class="flex gap-6 items-center"> <img src="./assets/svg/business-press.svg" alt="business-press" /> <div class="flex justify-between gap-5 items-center text-xs"> <a href="">Menu item</a> <a href="">Menu item</a> <a href="">Menu item</a> <a href="">Menu item</a> <a href="">Menu item</a> </div> </div> <div> <button class="rounded-full bg-blue-700 hover:bg-blue-900 text-white px-4 py-1 gap-2 text-[10px] mx-auto my-0"> Contact Us </button> </div> </section>',
});

editor.on("block:drag:stop", function (model) {
    const selectedComponent = editor.select(model).editor.getSelected();
    //overlapping
    shouldUndo(selectedComponent)
});
  
editor.on("update", (e) => {
    const selectedComponent = editor.getSelected();
    //overlapping
    shouldUndo(selectedComponent)
});

//overlapping section
function shouldUndo(selectedComponent) {
    const um = editor.UndoManager;
    let selectedParentComponent = selectedComponent.parent();
    if (
      selectedParentComponent.attributes.tagName === "section" &&
      selectedComponent.attributes.tagName === "section"
    ) {
      um.undo();
    } else if (selectedComponent.attributes.tagName === "section") {
      let tempArray = selectedComponent.parents();
      if (tempArray?.length > 0) {
        let findParentSection = tempArray.find(
          (cv) => cv?.attributes.tagName === "section"
        );
        if (findParentSection) {
          um.undo();
        }
      }
    }
}