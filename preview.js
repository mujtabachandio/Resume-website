"use strict";
function updatePreview() {
    // Update personal details
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const contactNumberInput = document.getElementById("contactNumber");
    const addressInput = document.getElementById("address");
    const previewName = document.getElementById("previewName");
    const previewEmail = document.getElementById("previewEmail");
    const previewContactNumber = document.getElementById("previewContactNumber");
    const previewAddress = document.getElementById("previewAddress");
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
    const educationSection = document.getElementById("educationSection");
    const previewEducationSection = document.getElementById("previewEducationSection");
    previewEducationSection.innerHTML = ''; // Clear previous previews
    const educationItems = educationSection.getElementsByClassName("education-item");
    Array.from(educationItems).forEach(item => {
        const degree = item.querySelector(".degree").value;
        const school = item.querySelector(".school").value;
        const year = item.querySelector(".year").value;
        const li = document.createElement("li");
        li.textContent = `${degree} at ${school} (${year})`;
        previewEducationSection.appendChild(li);
    });
}
function updateExperiencePreview() {
    const experienceSection = document.getElementById("experienceSection");
    const previewExperienceSection = document.getElementById("previewExperienceSection");
    previewExperienceSection.innerHTML = ''; // Clear previous previews
    const experienceItems = experienceSection.getElementsByClassName("experience-item");
    Array.from(experienceItems).forEach(item => {
        const jobTitle = item.querySelector(".job-title").value;
        const company = item.querySelector(".company").value;
        const duration = item.querySelector(".duration").value;
        const li = document.createElement("li");
        li.textContent = `${jobTitle} at ${company} (${duration})`;
        previewExperienceSection.appendChild(li);
    });
}
function updateSkillsPreview() {
    const skillsList = document.getElementById("skillsList");
    const previewSkillsList = document.getElementById("previewSkillsList");
    previewSkillsList.innerHTML = ''; // Clear previous skills
    const skillInputs = skillsList.getElementsByTagName("input");
    Array.from(skillInputs).forEach(skillInput => {
        const li = document.createElement("li");
        li.textContent = skillInput.value;
        previewSkillsList.appendChild(li);
    });
}
function updateLanguagesPreview() {
    const languagesList = document.getElementById("languagesList");
    const previewLanguagesList = document.getElementById("previewLanguagesList");
    previewLanguagesList.innerHTML = ''; // Clear previous languages
    const languageInputs = languagesList.getElementsByTagName("input");
    Array.from(languageInputs).forEach(languageInput => {
        const li = document.createElement("li");
        li.textContent = languageInput.value;
        previewLanguagesList.appendChild(li);
    });
}
