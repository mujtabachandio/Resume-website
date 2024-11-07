function printpdf(): void {
  const content = document.getElementById("resume") as HTMLElement;

  const allButtons = document.querySelectorAll("#print button") as NodeListOf<HTMLButtonElement>;
  allButtons.forEach(button => {
      button.classList.add("none");
  });

  const allInputCheckboxes = document.querySelectorAll(".input-checkbox") as NodeListOf<HTMLInputElement>;
  allInputCheckboxes.forEach(input => {
      input.classList.add("none");
  });

  allButtons.forEach(button => {
      button.classList.remove("none");
  });

  allInputCheckboxes.forEach(input => {
      input.classList.remove("none");
  });

  html2pdf(content, {
      html2canvas: { scale: 1, logging: true, dpi: 500 }
  });
}

function addedu(): void {
  const head = document.createElement('div');
  const educationSection = document.getElementById("education");
  if (educationSection) {
      educationSection.appendChild(head);
  }
  head.innerHTML = `
      <div class="edublock">
          <span><input type="checkbox" class="input-checkbox"></span>
          <span class="education-head" contenteditable="true">YOUR DEGREE</span>
          <div><span contenteditable="true">Institute name</span> - <span contenteditable="true">Passing Year</span></div>
      </div>
  `;
  saveresume();
}

function remedu(event: Event): void {
  let val = 0;
  const target = event.target as HTMLElement;
  const allInputCheckboxes = target.parentElement?.getElementsByClassName("input-checkbox") as HTMLCollectionOf<HTMLInputElement>;
  const array = Array.from(allInputCheckboxes);
  
  if (array.length === 0) {
      alert("No fields are present to be deleted!");
  } else {
      array.forEach(element => {
          if (element.checked === true) {
              val = 1;
              element.parentElement?.parentElement?.remove();
          }
      });
      if (val === 0) alert("Please select the checkboxes to delete the required field!");
  }
  saveresume();
}

function addskill(): void {
  const head = document.createElement('div');
  const skillsSection = document.getElementById("skills");
  if (skillsSection) {
      skillsSection.appendChild(head);
  }
  head.innerHTML = `
      <div class="skill">
          <span><input type="checkbox" class="input-checkbox"></span>
          <span><i class="fas fa-chevron-circle-right"></i></span>
          <span contenteditable="true">write your skill here</span>
      </div>
  `;
  saveresume();
}

function remskill(event: Event): void {
  let val = 0;
  const target = event.target as HTMLElement;
  const allInputCheckboxes = target.parentElement?.getElementsByClassName("input-checkbox") as HTMLCollectionOf<HTMLInputElement>;
  const array = Array.from(allInputCheckboxes);

  if (array.length === 0) {
      alert("No fields are present to be deleted!");
  } else {
      array.forEach(element => {
          if (element.checked === true) {
              val = 1;
              element.parentElement?.parentElement?.remove();
          }
      });
      if (val === 0) alert("Please select the checkboxes to delete the required field!");
  }
  saveresume();
}

function addLang(): void {
  const head = document.createElement('div');
  const languagesSection = document.getElementById("languages");
  if (languagesSection) {
      languagesSection.appendChild(head);
  }
  head.innerHTML = `
      <div class="language">
          <span><input type="checkbox" class="input-checkbox"></span>
          <span contenteditable="true">LANGNAME</span> - <span contenteditable="true">level u know</span>
      </div>
  `;
  saveresume();
}

function remLang(event: Event): void {
  let val = 0;
  const target = event.target as HTMLElement;
  const allInputCheckboxes = target.parentElement?.getElementsByClassName("input-checkbox") as HTMLCollectionOf<HTMLInputElement>;
  const array = Array.from(allInputCheckboxes);

  if (array.length === 0) {
      alert("No fields are present to be deleted!");
  } else {
      array.forEach(element => {
          if (element.checked === true) {
              val = 1;
              element.parentElement?.parentElement?.remove();
          }
      });
      if (val === 0) alert("Please select the checkboxes to delete the required field!");
  }
  saveresume();
}

function addAch(): void {
  const head = document.createElement('div');
  const achievementSection = document.getElementById("achievement");
  if (achievementSection) {
      achievementSection.appendChild(head);
  }
  head.innerHTML = `
      <div class="achieve">
          <span><input type="checkbox" class="input-checkbox"></span>
          <span contenteditable="true">Write your achievement</span>
      </div>
  `;
  saveresume();
}

function remAch(event: Event): void {
  let val = 0;
  const target = event.target as HTMLElement;
  const allInputCheckboxes = target.parentElement?.getElementsByClassName("input-checkbox") as HTMLCollectionOf<HTMLInputElement>;
  const array = Array.from(allInputCheckboxes);

  if (array.length === 0) {
      alert("No fields are present to be deleted!");
  } else {
      array.forEach(element => {
          if (element.checked === true) {
              val = 1;
              element.parentElement?.parentElement?.remove();
          }
      });
      if (val === 0) alert("Please select the checkboxes to delete the required field!");
  }
  saveresume();
}

function addInt(): void {
  const head = document.createElement('div');
  const interestSection = document.getElementById("interest");
  if (interestSection) {
      interestSection.appendChild(head);
  }
  head.innerHTML = `
      <div class="achieve">
          <span><input type="checkbox" class="input-checkbox"></span>
          <span contenteditable="true">Write interest</span>
      </div>
  `;
  saveresume();
}

function remInt(event: Event): void {
  let val = 0;
  const target = event.target as HTMLElement;
  const allInputCheckboxes = target.parentElement?.getElementsByClassName("input-checkbox") as HTMLCollectionOf<HTMLInputElement>;
  const array = Array.from(allInputCheckboxes);

  if (array.length === 0) {
      alert("No fields are present to be deleted!");
  } else {
      array.forEach(element => {
          if (element.checked === true) {
              val = 1;
              element.parentElement?.parentElement?.remove();
          }
      });
      if (val === 0) alert("Please select the checkboxes to delete the required field!");
  }
  saveresume();
}

let maxNewSection = 1;
function addsec(): void {
  if (maxNewSection < 2) {
      const head = document.createElement('div');
      const newSecSection = document.getElementById("newsec");
      if (newSecSection) {
          newSecSection.appendChild(head);
      }

      if (maxNewSection === 0) {
          head.innerHTML = `
              <div>
                  <span><input type="checkbox" class="input-checkbox"></span>
                  <span class="title" contenteditable="true">NEW SECTION</span><br><br>
                  <div contenteditable="true">This is the description part of your new section. Try to stay within limit and write something which has less than 400 characters. The spaces and symbols you use will also be included so use them for an indentation effect.</div>
              </div>
          `;
      } else {
          head.innerHTML = `
              <div>
                  <br><br>
                  <span><input type="checkbox" class="input-checkbox"></span>
                  <span class="title" contenteditable="true">NEW SECTION</span><br><br>
                  <div contenteditable="true">This is the description part of your new section. Try to stay within limit and write something which has less than 400 characters. The spaces and symbols you use will also be included so use them for an indentation effect.</div>
              </div>
          `;
      }

      maxNewSection = maxNewSection + 1;
  } else {
      alert("Atmost 2 NEW SECTION can be added!");
  }
  saveresume();
}

function remsec(event: Event): void {
  let val = 0;
  const target = event.target as HTMLElement;
  const allInputCheckboxes = target.parentElement?.getElementsByClassName("input-checkbox") as HTMLCollectionOf<HTMLInputElement>;
  const array = Array.from(allInputCheckboxes);

  if (array.length === 0) {
      alert("No fields are present to be deleted!");
  } else {
      array.forEach(element => {
          if (element.checked === true) {
              val = 1;
              maxNewSection = maxNewSection - 1;
              element.parentElement?.parentElement?.remove();
          }
      });
      if (val === 0) alert("Please select the checkboxes to delete the required field!");
  }
  saveresume();
}

function saveresume(): void {
  const sec = document.getElementById("print");
  if (sec) {
      localStorage.setItem("resume", sec.innerHTML);
  }
}

function restoreresume(): void {
  const sec = document.getElementById("print");
  if (sec) {
      sec.innerHTML = localStorage.getItem("resume") as string;
  }
}
