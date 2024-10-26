document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume-form");
    const resumeContent = document.getElementById("resume-content");
    const shareableLink = document.getElementById("shareable-link");
    const copyLinkBtn = document.getElementById("copy-link-btn");
    const downloadBtn = document.getElementById("download-btn");

    // Add event listeners for adding education and work experience
    document.getElementById("add-education-btn").addEventListener("click", addEducationEntry);
    document.getElementById("add-work-btn").addEventListener("click", addWorkEntry);

    // Event listener for form submission
    form.addEventListener("submit", handleSubmit);

    function addEducationEntry() {
        const educationContainer = document.getElementById("education-container");
        const newEducationEntry = document.createElement("div");
        newEducationEntry.className = "education-entry mb-4";
        newEducationEntry.innerHTML = `
            <label class="block mb-1">Degree:</label>
            <input type="text" class="degree border border-gray-300 rounded-lg p-2 mb-2 w-full" required />
            <label class="block mb-1">School/University:</label>
            <input type="text" class="school border border-gray-300 rounded-lg p-2 mb-2 w-full" required />
            <label class="block mb-1">Graduation Year:</label>
            <input type="date" class="gradYear border border-gray-300 rounded-lg p-2 mb-2 w-full" required />
        `;
        educationContainer.appendChild(newEducationEntry);
    }

    function addWorkEntry() {
        const workContainer = document.getElementById("work-container");
        const newWorkEntry = document.createElement("div");
        newWorkEntry.className = "work-entry mb-4";
        newWorkEntry.innerHTML = `
            <label class="block mb-1">Job Title:</label>
            <input type="text" class="jobTitle border border-gray-300 rounded-lg p-2 mb-2 w-full" required />
            <label class="block mb-1">Company:</label>
            <input type="text" class="company border border-gray-300 rounded-lg p-2 mb-2 w-full" required />
            <label class="block mb-1">Years of Experience:</label>
            <input type="date" class="years border border-gray-300 rounded-lg p-2 mb-2 w-full" required />
        `;
        workContainer.appendChild(newWorkEntry);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const formData = collectFormData();
        if (!formData) return; // Exit if validation fails

        generateResume(formData);
        const userName = formData.name.toLowerCase().replace(/\s+/g, "");
        localStorage.setItem(userName, JSON.stringify(formData));

        updateShareableLink(userName);
    }

    function collectFormData() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const profileImg = document.getElementById("profileImg").files[0];
        const education = Array.from(document.getElementsByClassName("education-entry")).map(entry => ({
            degree: entry.querySelector(".degree").value,
            school: entry.querySelector(".school").value,
            gradYear: entry.querySelector(".gradYear").value,
        }));
        const workExperience = Array.from(document.getElementsByClassName("work-entry")).map(entry => ({
            jobTitle: entry.querySelector(".jobTitle").value,
            company: entry.querySelector(".company").value,
            years: entry.querySelector(".years").value,
        }));
        const skills = document.getElementById("skills").value.split(",").map(skill => skill.trim());

        // Basic validation
        if (!name || !email || !profileImg || !education.length || !workExperience.length || !skills.length) {
            alert("Please fill in all fields.");
            return null;
        }

        return { name, email, profileImg, education, workExperience, skills };
    }

    function generateResume(data) {
        resumeContent.innerHTML = `
            <div class="flex items-start mb-6">
                <div class="flex-1">
                    <h3 class="text-3xl font-bold text-gray-800">${data.name}</h3>
                    <p class="text-lg text-gray-600">Email: ${data.email}</p>
                </div>
                <div class="w-32 h-32 ml-4">
                    <img src="${URL.createObjectURL(data.profileImg)}" alt="Profile Image" class="profile-image" />
                </div>
            </div>
            <h4 class="text-2xl font-semibold text-gray-800 mt-4">Education</h4>
            <ul class="list-disc list-inside mb-4">
                ${data.education.map(edu => `<li>${edu.degree} from ${edu.school} (Graduated: ${edu.gradYear})</li>`).join("")}
            </ul>
            <h4 class="text-2xl font-semibold text-gray-800">Work Experience</h4>
            <ul class="list-disc list-inside mb-4">
                ${data.workExperience.map(work => `<li>${work.jobTitle} at ${work.company} (Started: ${work.years})</li>`).join("")}
            </ul>
            <h4 class="text-2xl font-semibold text-gray-800">Skills</h4>
            <ul class="list-disc list-inside">
                ${data.skills.map(skill => `<li>${skill}</li>`).join("")}
            </ul>
        `;
    }

    function updateShareableLink(userName) {
        shareableLink.href = `resume-viewer.html?username=${userName}`;
        shareableLink.textContent = `Open Resume: ${shareableLink.href}`;
        shareableLink.style.display = "inline";
        copyLinkBtn.style.display = "inline-block";
        
        copyLinkBtn.onclick = () => {
            copyToClipboard(shareableLink.href);
            alert("Link copied to clipboard!");
        };
    }

    function copyToClipboard(text) {
        const tempInput = document.createElement("input");
        document.body.appendChild(tempInput);
        tempInput.value = text;
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
    }

    downloadBtn.addEventListener("click", () => {
        const resumeElement = document.getElementById("resume");
        const opt = {
            margin: 1,
            filename: "Resume.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        };
        html2pdf().from(resumeElement).set(opt).save();
    });
});
