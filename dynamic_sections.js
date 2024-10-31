"use strict";
// Function to add an education entry
function addEducation() {
    const educationSection = document.getElementById("educationSection");
    const div = document.createElement("div");
    div.className = "education-item mb-4";
    div.innerHTML = `
        <input type="text" placeholder="Degree" class="degree block w-full border border-gray-300 rounded-md p-2 mb-2" oninput="updatePreview()"/>
        <input type="text" placeholder="School" class="school block w-full border border-gray-300 rounded-md p-2 mb-2" oninput="updatePreview()"/>
        <input type="date" placeholder="Year" class="year block w-full border border-gray-300 rounded-md p-2 mb-2" oninput="updatePreview()"/>
        <button onclick="removeSection(this)" class="bg-red-600 text-white px-2 py-1 rounded-md mt-2">Remove</button>
    `;
    educationSection.appendChild(div);
    updatePreview();
}
// Function to add an experience entry
function addExperience() {
    const experienceSection = document.getElementById("experienceSection");
    const div = document.createElement("div");
    div.className = "experience-item mb-4";
    div.innerHTML = `
        <input type="text" placeholder="Job Title" class="job-title block w-full border border-gray-300 rounded-md p-2 mb-2" oninput="updatePreview()"/>
        <input type="text" placeholder="Company" class="company block w-full border border-gray-300 rounded-md p-2 mb-2" oninput="updatePreview()"/>
        <input type="date" placeholder="Duration" class="duration block w-full border border-gray-300 rounded-md p-2 mb-2" oninput="updatePreview()"/>
        <button onclick="removeSection(this)" class="bg-red-600 text-white px-2 py-1 rounded-md mt-2">Remove</button>
    `;
    experienceSection.appendChild(div);
    updatePreview();
}
// Function to add a skill entry
function addSkill() {
    const skillsList = document.getElementById("skillsList");
    const skillDiv = document.createElement("div");
    skillDiv.className = "skill-item mb-2";
    skillDiv.innerHTML = `
        <input type="text" placeholder="Skill" class="skill block w-full border border-gray-300 rounded-md p-2 mb-2" oninput="updatePreview()"/>
        <button onclick="removeSection(this)" class="bg-red-600 text-white px-2 py-1 rounded-md mt-2">Remove</button>
    `;
    skillsList.appendChild(skillDiv);
    updatePreview();
}
// Function to add a language entry
function addLanguage() {
    const languagesList = document.getElementById("languagesList");
    const languageDiv = document.createElement("div");
    languageDiv.className = "language-item mb-2";
    languageDiv.innerHTML = `
        <input type="text" placeholder="Language" class="language block w-full border border-gray-300 rounded-md p-2 mb-2" oninput="updatePreview()"/>
        <button onclick="removeSection(this)" class="bg-red-600 text-white px-2 py-1 rounded-md mt-2">Remove</button>
    `;
    languagesList.appendChild(languageDiv);
    updatePreview();
}
// Function to remove a section
function removeSection(button) {
    const section = button.parentElement; // Get the parent element of the button
    section.remove(); // Remove the section from the DOM
    updatePreview(); // Update the preview after removal
}
// Update preview function
function updatePreview() {
    // Update personal information
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
    // Update education section
    const educationItems = document.querySelectorAll(".education-item");
    const previewEducationSection = document.getElementById("previewEducationSection");
    previewEducationSection.innerHTML = ""; // Clear previous entries
    educationItems.forEach(item => {
        const degree = item.querySelector(".degree").value || "Degree";
        const school = item.querySelector(".school").value || "School";
        const year = item.querySelector(".year").value || "Year";
        const div = document.createElement("div");
        div.textContent = `${degree} at ${school}, ${year}`;
        previewEducationSection.appendChild(div);
    });
    // Update experience section
    const experienceItems = document.querySelectorAll(".experience-item");
    const previewExperienceSection = document.getElementById("previewExperienceSection");
    previewExperienceSection.innerHTML = ""; // Clear previous entries
    experienceItems.forEach(item => {
        const jobTitle = item.querySelector(".job-title").value || "Job Title";
        const company = item.querySelector(".company").value || "Company";
        const duration = item.querySelector(".duration").value || "Duration";
        const div = document.createElement("div");
        div.textContent = `${jobTitle} at ${company} (${duration})`;
        previewExperienceSection.appendChild(div);
    });
    // Update skills
    const skillItems = document.querySelectorAll(".skill-item");
    const previewSkillsList = document.getElementById("previewSkillsList");
    previewSkillsList.innerHTML = ""; // Clear previous entries
    skillItems.forEach(item => {
        const skill = item.querySelector(".skill").value || "Skill";
        const li = document.createElement("li");
        li.textContent = skill;
        previewSkillsList.appendChild(li);
    });
    // Update languages
    const languageItems = document.querySelectorAll(".language-item");
    const previewLanguagesList = document.getElementById("previewLanguagesList");
    previewLanguagesList.innerHTML = ""; // Clear previous entries
    languageItems.forEach(item => {
        const language = item.querySelector(".language").value || "Language";
        const li = document.createElement("li");
        li.textContent = language;
        previewLanguagesList.appendChild(li);
    });
    // Update profile picture
    const previewProfilePicture = document.getElementById("previewProfilePicture");
    const profilePictureInput = document.getElementById("profilePicture");
    const profilePicture = profilePictureInput.files ? profilePictureInput.files[0] : null;
    if (profilePicture) {
        const reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            previewProfilePicture.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result; // Set the preview image source
            previewProfilePicture.style.display = 'block'; // Show the image
        };
        reader.readAsDataURL(profilePicture);
    }
    else {
        previewProfilePicture.style.display = 'none'; // Hide the image if no file selected
    }
}
