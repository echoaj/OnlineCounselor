
// const rangeValueSpan = document.getElementById("rangeValueSpan");

const requiredUl = document.getElementById("requiredSubjectsUL");
const requiredTitle = document.getElementById("requiredTitle");

const wantedUl = document.getElementById("wantedSubjectsUL");
const wantedClassesUl = document.getElementById("wantedClassesUL");

const wantedTitle = document.getElementById("wantedTitle");
const wantedClassTitle = document.getElementById("wantedClassTitle");

const skillsInterestUl = document.querySelector(".skills-interest");


const subjects = {
    "Art": ["Ceramics", "Drawing and painting"],
    "Math": ["Integrated 1", "Integrated 2", "Integrated 3", "AP Calculus AB", "AP Calculus BC", "AP Statistics"],
    "English": ["English 1", "English 2"],
    "Foreign_Language": ["Spanish 1", "Spanish 2", "Spanish 3", "Spanish 4", "AP Spanish Language", "AP Spanish Literature", "French 1", "French 2", "French 3", "French 4", "AP French", "German 1", "German 2", "German 3", "German 4", "AP German", "Latin 1", "Latin 2", "Latin 3", "Latin 4", "AP Latin", "Japanese 1", "Japanese 2", "Japanese 3", "Japanese 4", "AP Japanese", "Chinese 1", "Chinese 2", "Chinese 3", "Chinese 4", "AP Chinese"],
    "History": ["AP US", "AP European", "AP World", "US", "European", "World"],
    "Life_Science": ["Biology 1", "Biology 2", "Honors Biology", "AP Biology", "AP Environmental"],
    "Physical_Science": ["Chemistry 1", "Chemistry 2", "Honors Chemistry", "AP Chemistry", "Physics 1", "Physics 2", "Honors Physics", "Physics 1: Algebra Based", "AP Physics 2: Algebra Based", "AP Physics C: Mechanics", "AP Physics C: Electricity and Magnetism", "AP Environmental"],
    "Health": ["Health"],
    "PE": ["PE"],
    "Elective": ["Elective"]
};


const keysSubject = Object.keys(subjects);


for (let key of keysSubject) {
    const li = document.createElement("li");
    const h5Title = document.createElement("h5");
    const h6Skill = document.createElement("h6");
    const h6Interest = document.createElement("h6");
    const linebreak = document.createElement("br");

    h5Title.innerText = key.replace(/_/g, " ");
    h5Title.classList.add("skills-interest__section");
    h6Skill.innerText = "Skills";
    h6Interest.innerText = "Interest";
    h6Skill.classList.add("skills-interest__title");
    h6Skill.classList.add("skills__title");
    h6Interest.classList.add("skills-interest__title");
    h6Skill.classList.add("interest__title");
    li.appendChild(h5Title);
    li.appendChild(h6Skill);

    key = key.toLowerCase();
    // create radio button

    // loop 5 times
    for (let i = 0; i < 5; i++) {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        var link = `${key}-skills${i + 1}`;
        var val = `${i + 1}`;
        var name = `${key}Skills`;
        label.innerText = `${i + 1} `;
        label.setAttribute("for", link);
        label.setAttribute("class", "subject-label");
        radio.type = "radio";
        radio.name = "subject";
        radio.id = link;
        radio.value = val;
        radio.name = name;
        radio.setAttribute("class", "subject-radio");
        li.appendChild(label);
        li.appendChild(radio);
    }

    li.appendChild(linebreak);
    skillsInterestUl.appendChild(li);
    li.appendChild(h6Interest);


    // loop 5 times
    for (let i = 0; i < 5; i++) {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        var link = `${key}-interest${i + 1}`;
        var val = `${i + 1}`;
        var name = `${key}Interest`;
        label.innerHTML = `${i + 1} `;
        label.setAttribute("for", link);
        label.setAttribute("class", "subject-label");
        radio.type = "radio";
        radio.name = "subject";
        radio.id = link;
        radio.value = val;
        radio.name = name;
        radio.setAttribute("class", "subject-radio");
        li.appendChild(label);
        li.appendChild(radio);
    }
    skillsInterestUl.appendChild(li);

}


// Required Subjects
// for (let sub of keysSubject) {
//     let li = document.createElement("li");
//     li.className = "dropdown-item";
//     li.innerText = sub.replace(/_/g, " ");
//     li.addEventListener("click", function () {
//         setDropdownTitle(this.innerText, requiredTitle);
//     }
//     );
//     requiredUl.appendChild(li);
// }

// Wanted Subjects
// for (let sub of keysSubject) {
//     // Wanted Subjects Populate
//     const li = document.createElement("li");
//     li.className = "dropdown-item";
//     li.innerText = sub.replace(/_/g, " ");
//     // When clicked Set Wanted Subject Title to Current LI name
//     li.addEventListener("click", function () {
//         setDropdownTitle(this.innerText, wantedTitle);
//         // Reset wanted class drop down (title and options)
//         wantedClassTitle.innerText = "Wanted Classes";
//         wantedClassesUl.innerHTML = "";
//         // Populate wanted classes drop down
//         for (let clss of subjects[this.innerText]) {
//             const li = document.createElement("li");
//             li.className = "dropdown-item";
//             li.innerText = clss;
//             // When clicked update wanted class title to current LI name
//             li.addEventListener("click", function () {
//                 setDropdownTitle(this.innerText, wantedClassTitle);
//             });
//             wantedClassesUl.appendChild(li);
//         }
//     });
//     wantedUl.appendChild(li);
// }


function rangeSlider(value, id) {
    // rangeValueSpan.innerHTML = value;
    document.getElementById(id).innerHTML = value;
}

function setDropdownTitle(value, element) {
    element.innerText = value;
}

// ------------------------ Required Subjects ------------------------
let reqSubID = 1;
function getRequiredSubjectsSection() {
    let requiredClassSection = `
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelectReq${reqSubID}">Subjects</label>
        </div>
        <select class="custom-select" id="inputGroupSelectReq${reqSubID}" name="requiredSubjects">
            <option selected>Choose ...</option>
            <option value="Art">Art</option>
            <option value="Math">Math</option>
            <option value="Foreign Language">Foreign Language</option>
            <option value="History">History</option>
            <option value="Life Science">Life Science</option>
            <option value="Physical Science">Physical Science</option>
            <option value="Health">Health</option>
            <option value="PE">PE</option>
            <option value="Elective">Elective</option>
        </select>
        <span class="input-group-text" id="inputGroup-sizing-sm-lengthReq${reqSubID}">Length</span>
        <input type="text" name="requiredSubjectsLength" class="form-control"
            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm-lengthReq${reqSubID}"
            id="requiredSubjectsLength">
    </div>
    `;
    reqSubID++;
    return requiredClassSection;
}

function addRequiredSubjects() {
    let requiredClassSection = getRequiredSubjectsSection();
    const requiredSection_modal = document.getElementById("required-subjects__modal-body");
    requiredSection_modal.insertAdjacentHTML("beforeend", requiredClassSection);
}

addRequiredSubjects();
// ------------------------ Required Subjects ------------------------

// ------------------------ Wanted Subjects ------------------------
let wanSubID = 1;
function getWantedSubjectsSection() {
    let wantedSection = `
    <div class="input-group mb-3">
        <div class="input-group mb-1">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelectWanSub${wanSubID}">Subjects</label>
            </div>
            <select class="custom-select" id="inputGroupSelectWanSub${wanSubID}" name="wantedSubjects" onchange="populateWantedClasses(this.value, this.id)">
                <option selected>Choose ...</option>
                <option value="Art">Art</option>
                <option value="Math">Math</option>
                <option value="Foreign Language">Foreign Language</option>
                <option value="History">History</option>
                <option value="Life Science">Life Science</option>
                <option value="Physical Science">Physical Science</option>
                <option value="Health">Health</option>
                <option value="PE">PE</option>
                <option value="Elective">Elective</option>
            </select>
        </div>

        <div class="input-group mb-3">
        
            <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelectWanClass${wanSubID}">Classes</label>
            </div>

            <select class="custom-select" id="inputGroupSelectWanClass${wanSubID}" name="wantedClasses">
                <option selected>Choose ...</option>
            </select>
        </div>  
    </div>
    `;
    wanSubID++;
    return wantedSection;
}

function populateWantedClasses(value, id) {
    console.log(value);
    let subID = id.replace("inputGroupSelectWanSub", "");
    console.log(subID);
    const wantedClasses = document.getElementById("inputGroupSelectWanClass" + subID);
    value = value.replace(" ", "_");
    console.log(value);
    // Clear options
    wantedClasses.innerHTML = "<option selected>Choose ...</option>";
    for (let clss of subjects[value]) {
        const option = document.createElement("option");
        option.value = clss;
        option.innerText = clss;
        wantedClasses.appendChild(option);
    }
}

function addWantedSubjectClasses() {
    let wantedSection = getWantedSubjectsSection();
    const wantedSection_modal = document.getElementById("wanted-subjects__modal-body");
    wantedSection_modal.insertAdjacentHTML("beforeend", wantedSection);
}

addWantedSubjectClasses();



// ------------------------ Wanted Subjects ------------------------