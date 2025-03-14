const pages = [
    { name: "Project 1", url: "Task_1.html"},
    { name: "Project 2", url: "Task_2.html" },
    { name: "Project 3", url: "Task_3.html" },
    { name: "Project 4", url: "Task_1.html" }
  ];


  function createButtons() {
    const container = document.getElementById("button-container");

    pages.forEach((page, index) => {
      const button = document.createElement("button");
      button.innerText = page.name;
      button.addEventListener("click", () => {
        loadPage(page.url);
      });
      container.appendChild(button);
    });
  }


  function loadPage(url) {
    const iframe = document.getElementById("iframe");
    iframe.src = url;
  }

  
  createButtons();
