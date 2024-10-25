declare var html2pdf: any; // Declare html2pdf globally

// Function to add education entry
function addEducationEntry() {
    const educationContainer = document.getElementById('educationContainer')!;
    const newEducationEntry = document.createElement('div');
    newEducationEntry.className = 'educationEntry space-y-2';

    newEducationEntry.innerHTML = `
        <input type="text" placeholder="Degree" class="border border-blue-300 rounded w-full p-2" required>
        <input type="text" placeholder="School/University" class="border border-blue-300 rounded w-full p-2" required>
        <input type="date" class="border border-blue-300 rounded w-full p-2" required>
    `;

    educationContainer.appendChild(newEducationEntry);
}

// Function to add certification entry
function addCertificationEntry() {
    const certificationContainer = document.getElementById('certificationContainer')!;
    const newCertificationInput = document.createElement('input');
    newCertificationInput.type = 'text';
    newCertificationInput.placeholder = 'Certification';
    newCertificationInput.className = 'border border-blue-300 rounded w-full p-2';

    certificationContainer.appendChild(newCertificationInput);
}

// Function to add experience entry
function addExperienceEntry() {
    const experienceContainer = document.getElementById('experienceContainer')!;
    const newExperienceEntry = document.createElement('div');
    newExperienceEntry.className = 'experienceEntry space-y-2';

    newExperienceEntry.innerHTML = `
        <input type="text" placeholder="Job Title" class="border border-blue-300 rounded w-full p-2" required>
        <input type="text" placeholder="Company Name" class="border border-blue-300 rounded w-full p-2" required>
        <input type="date" placeholder="Date of Employment" class="border border-blue-300 rounded w-full p-2" required>
    `;

    experienceContainer.appendChild(newExperienceEntry);
}

// Function to add skill entry
function addSkillEntry() {
    const skillsContainer = document.getElementById('skillsContainer')!;
    const newSkillInput = document.createElement('input');
    newSkillInput.type = 'text';
    newSkillInput.placeholder = 'Skill';
    newSkillInput.className = 'border border-blue-300 rounded w-full p-2';
    
    skillsContainer.appendChild(newSkillInput);
}

// Function to add language entry
function addLanguageEntry() {
    const languagesContainer = document.getElementById('languagesContainer')!;
    const newLanguageInput = document.createElement('input');
    newLanguageInput.type = 'text';
    newLanguageInput.placeholder = 'Language';
    newLanguageInput.className = 'border border-blue-300 rounded w-full p-2';
    
    languagesContainer.appendChild(newLanguageInput);
}

// Event listeners for adding entries
document.getElementById('addEducation')!.addEventListener('click', addEducationEntry);
document.getElementById('addCertification')!.addEventListener('click', addCertificationEntry);
document.getElementById('addExperience')!.addEventListener('click', addExperienceEntry);
document.getElementById('addSkill')!.addEventListener('click', addSkillEntry);
document.getElementById('addLanguage')!.addEventListener('click', addLanguageEntry);

// Generate PDF functionality
document.getElementById('generate')!.addEventListener('click', () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;

    // Gather profile image
    const profileImageInput = document.getElementById('profileImage') as HTMLInputElement;
    const resumeImage = document.getElementById('resumeImage') as HTMLImageElement;
    if (profileImageInput.files && profileImageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            resumeImage.src = e.target!.result as string;
            resumeImage.style.display = 'block';
        };
        reader.readAsDataURL(profileImageInput.files[0]);
    }

    // Gather education entries
    const educationEntries = Array.from(document.querySelectorAll('.educationEntry')).map(entry => {
        const degree = (entry.querySelector('input[type="text"]:nth-of-type(1)') as HTMLInputElement).value;
        const school = (entry.querySelector('input[type="text"]:nth-of-type(2)') as HTMLInputElement).value;
        const graduationDate = (entry.querySelector('input[type="date"]') as HTMLInputElement).value;
        return `${degree}, ${school}, ${graduationDate}`;
    });

    // Gather certifications
    const certificationEntries = Array.from(document.querySelectorAll('#certificationContainer input')).map((input) => {
        return (input as HTMLInputElement).value;
    });

    // Gather work experience
    const experienceEntries = Array.from(document.querySelectorAll('.experienceEntry')).map(entry => {
        const jobTitle = (entry.querySelector('input[type="text"]:nth-of-type(1)') as HTMLInputElement).value;
        const companyName = (entry.querySelector('input[type="text"]:nth-of-type(2)') as HTMLInputElement).value;
        const employmentDate = (entry.querySelector('input[type="date"]') as HTMLInputElement).value;
        return `${jobTitle}, ${companyName}, ${employmentDate}`;
    });

    // Gather skills
    const skillEntries = Array.from(document.querySelectorAll('#skillsContainer input')).map((input) => {
        return (input as HTMLInputElement).value;
    });

    // Gather languages
    const languageEntries = Array.from(document.querySelectorAll('#languagesContainer input')).map((input) => {
        return (input as HTMLInputElement).value;
    });

    const skills = skillEntries.join(', ');
    const languages = languageEntries.join(', ');

    // Update resume preview
    (document.getElementById('resumeName') as HTMLElement).textContent = name;
    (document.getElementById('resumeEmail') as HTMLElement).textContent = email;
    (document.getElementById('resumeContact') as HTMLElement).textContent = contact;
    (document.getElementById('resumeAddress') as HTMLElement).textContent = address;
    (document.getElementById('resumeEducation') as HTMLElement).innerHTML = educationEntries.join('<br>');
    (document.getElementById('resumeCertifications') as HTMLElement).innerHTML = certificationEntries.join('<br>');
    (document.getElementById('resumeExperience') as HTMLElement).innerHTML = experienceEntries.join('<br>');
    (document.getElementById('resumeSkills') as HTMLElement).textContent = skills;
    (document.getElementById('resumeLanguages') as HTMLElement).textContent = languages;

    // Show the resume section
    const resume = document.getElementById('resume')!;
    resume.classList.remove('hidden');

    // Generate PDF
    html2pdf().from(resume).save('resume.pdf');
});
