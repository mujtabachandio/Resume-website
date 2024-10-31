// Function to add an education entry
function addEducation(): void {
    const educationSection = document.getElementById("educationSection") as HTMLElement;
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
function addExperience(): void {
    const experienceSection = document.getElementById("experienceSection") as HTMLElement;
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
function addSkill(): void {
    const skillsList = document.getElementById("skillsList") as HTMLElement;
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
function addLanguage(): void {
    const languagesList = document.getElementById("languagesList") as HTMLElement;
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
function removeSection(button: HTMLButtonElement): void {
    const section = button.parentElement as HTMLElement; // Get the parent element of the button
    section.remove(); // Remove the section from the DOM
    updatePreview(); // Update the preview after removal
}

// Update preview function
function updatePreview(): void {
    // Update personal information
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

    // Update education section
    const educationItems = document.querySelectorAll(".education-item");
    const previewEducationSection = document.getElementById("previewEducationSection") as HTMLElement;
    previewEducationSection.innerHTML = ""; // Clear previous entries

    educationItems.forEach(item => {
        const degree = (item.querySelector(".degree") as HTMLInputElement).value || "Degree";
        const school = (item.querySelector(".school") as HTMLInputElement).value || "School";
        const year = (item.querySelector(".year") as HTMLInputElement).value || "Year";

        const div = document.createElement("div");
        div.textContent = `${degree} at ${school}, ${year}`;
        previewEducationSection.appendChild(div);
    });

    // Update experience section
    const experienceItems = document.querySelectorAll(".experience-item");
    const previewExperienceSection = document.getElementById("previewExperienceSection") as HTMLElement;
    previewExperienceSection.innerHTML = ""; // Clear previous entries

    experienceItems.forEach(item => {
        const jobTitle = (item.querySelector(".job-title") as HTMLInputElement).value || "Job Title";
        const company = (item.querySelector(".company") as HTMLInputElement).value || "Company";
        const duration = (item.querySelector(".duration") as HTMLInputElement).value || "Duration";

        const div = document.createElement("div");
        div.textContent = `${jobTitle} at ${company} (${duration})`;
        previewExperienceSection.appendChild(div);
    });

    // Update skills
    const skillItems = document.querySelectorAll(".skill-item");
    const previewSkillsList = document.getElementById("previewSkillsList") as HTMLElement;
    previewSkillsList.innerHTML = ""; // Clear previous entries

    skillItems.forEach(item => {
        const skill = (item.querySelector(".skill") as HTMLInputElement).value || "Skill";
        const li = document.createElement("li");
        li.textContent = skill;
        previewSkillsList.appendChild(li);
    });

    // Update languages
    const languageItems = document.querySelectorAll(".language-item");
    const previewLanguagesList = document.getElementById("previewLanguagesList") as HTMLElement;
    previewLanguagesList.innerHTML = ""; // Clear previous entries

    languageItems.forEach(item => {
        const language = (item.querySelector(".language") as HTMLInputElement).value || "Language";
        const li = document.createElement("li");
        li.textContent = language;
        previewLanguagesList.appendChild(li);
    });

    // Update profile picture
    const previewProfilePicture = document.getElementById("previewProfilePicture") as HTMLImageElement;
    const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
    const profilePicture = profilePictureInput.files ? profilePictureInput.files[0] : null;

    if (profilePicture) {
        const reader = new FileReader();
        reader.onload = function (e) {
            previewProfilePicture.src = e.target?.result as string; // Set the preview image source
            previewProfilePicture.style.display = 'block'; // Show the image
        };
        reader.readAsDataURL(profilePicture);
    } else {
        previewProfilePicture.style.display = 'none'; // Hide the image if no file selected
    }
}
