function updatePreview() {
    // Update personal details
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const contactNumberInput = document.getElementById("contactNumber") as HTMLInputElement;
    const addressInput = document.getElementById("address") as HTMLInputElement;

    const previewName = document.getElementById("previewName") as HTMLElement;
    const previewEmail = document.getElementById("previewEmail") as HTMLElement;
    const previewContactNumber = document.getElementById("previewContactNumber") as HTMLElement;
    const previewAddress = document.getElementById("previewAddress") as HTMLElement;

    previewName.textContent = nameInput.value || "Your Name";
    previewEmail.textContent = emailInput.value || "Your Email";
    previewContactNumber.textContent = contactNumberInput.value || "Your Contact Number";
    previewAddress.textContent = addressInput.value || "Your Address";

    updateEducationPreview();
    updateExperiencePreview();
    updateSkillsPreview();
    updateLanguagesPreview();
}

function updateEducationPreview() {
    const educationSection = document.getElementById("educationSection") as HTMLElement;
    const previewEducationSection = document.getElementById("previewEducationSection") as HTMLElement;
    previewEducationSection.innerHTML = ''; // Clear previous previews

    const educationItems = educationSection.getElementsByClassName("education-item");
    Array.from(educationItems).forEach(item => {
        const degree = (item.querySelector(".degree") as HTMLInputElement).value;
        const school = (item.querySelector(".school") as HTMLInputElement).value;
        const year = (item.querySelector(".year") as HTMLInputElement).value;

        const li = document.createElement("li");
        li.textContent = `${degree} at ${school} (${year})`;
        previewEducationSection.appendChild(li);
    });
}

function updateExperiencePreview() {
    const experienceSection = document.getElementById("experienceSection") as HTMLElement;
    const previewExperienceSection = document.getElementById("previewExperienceSection") as HTMLElement;
    previewExperienceSection.innerHTML = ''; // Clear previous previews

    const experienceItems = experienceSection.getElementsByClassName("experience-item");
    Array.from(experienceItems).forEach(item => {
        const jobTitle = (item.querySelector(".job-title") as HTMLInputElement).value;
        const company = (item.querySelector(".company") as HTMLInputElement).value;
        const duration = (item.querySelector(".duration") as HTMLInputElement).value;

        const li = document.createElement("li");
        li.textContent = `${jobTitle} at ${company} (${duration})`;
        previewExperienceSection.appendChild(li);
    });
}

function updateSkillsPreview() {
    const skillsList = document.getElementById("skillsList") as HTMLElement;
    const previewSkillsList = document.getElementById("previewSkillsList") as HTMLElement;
    previewSkillsList.innerHTML = ''; // Clear previous skills

    const skillInputs = skillsList.getElementsByTagName("input");
    Array.from(skillInputs).forEach(skillInput => {
        const li = document.createElement("li");
        li.textContent = skillInput.value;
        previewSkillsList.appendChild(li);
    });
}

function updateLanguagesPreview() {
    const languagesList = document.getElementById("languagesList") as HTMLElement;
    const previewLanguagesList = document.getElementById("previewLanguagesList") as HTMLElement;
    previewLanguagesList.innerHTML = ''; // Clear previous languages

    const languageInputs = languagesList.getElementsByTagName("input");
    Array.from(languageInputs).forEach(languageInput => {
        const li = document.createElement("li");
        li.textContent = languageInput.value;
        previewLanguagesList.appendChild(li);
    });
}
