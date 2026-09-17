/* =====================================================
   ENGINEERING MINDS - STUDY HUB

   HOW TO ADD A RESOURCE:

   {
       subject: "📐 Mathematics-I",
       unit: "Unit 1",
       name: "Matrices Notes",
       type: "PDF",
       icon: "📄",
       important: true,
       link: "YOUR LINK HERE"
   }

   ===================================================== */


const resources = [

    /* =================================================
       MATHEMATICS-I
       ================================================= */

    {
        subject: "📐 Mathematics-I",
        unit: "Unit 1",
        name: "Matrices – Notes",
        type: "PDF",
        icon: "📄",
        important: true,
        link: "#"
    },

    {
        subject: "📐 Mathematics-I",
        unit: "Unit 1",
        name: "Matrices – Important Questions",
        type: "Questions",
        icon: "📝",
        important: true,
        link: "#"
    },

    {
        subject: "📐 Mathematics-I",
        unit: "Unit 2",
        name: "Sequence and Series – Notes",
        type: "PDF",
        icon: "📄",
        important: false,
        link: "#"
    },

    {
        subject: "📐 Mathematics-I",
        unit: "Unit 2",
        name: "Sequence and Series – Important Questions",
        type: "Questions",
        icon: "📝",
        important: true,
        link: "#"
    },


    /* =================================================
       FUNDAMENTALS OF ELECTRONICS ENGINEERING
       ================================================= */

    {
        subject: "⚡Fundamentals of Electronics Engineering",
        unit: "Unit 1",
        name: "Semiconductors – Notes",
        type: "PDF",
        icon: "📄",
        important: true,
        link: "#"
    },

    {
        subject: "⚡Fundamentals of Electronics Engineering",
        unit: "Unit 1",
        name: "Semiconductors – Important Questions",
        type: "Questions",
        icon: "📝",
        important: true,
        link: "#"
    },

    {
        subject: "⚡Fundamentals of Electronics Engineering",
        unit: "Unit 2",
        name: "Digital Electronics – Notes",
        type: "PDF",
        icon: "📄",
        important: false,
        link: "https://drive.google.com/file/d/1GfvytPtvyHptmwD_9HEW700HFQJzYwkd/view?usp=sharing"
    },

    {
        subject: "⚡Fundamentals of Electronics Engineering",
        unit: "Unit 2",
        name: "Digital Electronics – Important Questions",
        type: "Questions",
        icon: "📝",
        important: true,
        link: "#"
    },


    /* =================================================
       ESSENTIALS OF AI
       ================================================= */

    {
        subject: "🤖 Essentials of AI",
        unit: "Unit 1",
        name: "Introduction to Artificial Intelligence",
        type: "PDF",
        icon: "📄",
        important: true,
        link: "#"
    },

    {
        subject: "🤖 Essentials of AI",
        unit: "Unit 2",
        name: "Python Programming for AI",
        type: "PDF",
        icon: "🐍",
        important: true,
        link: "#"
    },


    /* =================================================
       ENVIRONMENTAL CHEMISTRY
       ================================================= */

    {
        subject: "🧪 Environmental Chemistry",
        unit: "Unit 1",
        name: "Water Technology",
        type: "PDF",
        icon: "📄",
        important: true,
        link: "#"
    },

    {
        subject: "🧪 Environmental Chemistry",
        unit: "Unit 2",
        name: "Electrochemistry in Environment",
        type: "PDF",
        icon: "📄",
        important: false,
        link: "#"
    },


    /* =================================================
       MECHANICAL ENGINEERING
       ================================================= */

    {
        subject: "⚙️ Fundamentals of Mechanical Engineering",
        unit: "Unit 1",
        name: "Mechanics",
        type: "PDF",
        icon: "📄",
        important: true,
        link: "#"
    },

    {
        subject: "⚙️ Fundamentals of Mechanical Engineering",
        unit: "Unit 2",
        name: "Introduction to Solid Mechanics",
        type: "PDF",
        icon: "📄",
        important: false,
        link: "#"
    }

];


/* =====================================================
   IMPORTANT RESOURCES
   ===================================================== */

function displayImportantResources() {

    const container =
        document.getElementById("important-resources");

    const important =
        resources.filter(resource => resource.important);


    container.innerHTML = `
        <div class="important-grid">

            ${important.map(resource => `

                <a
                    href="${resource.link}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="important-card"
                >

                    <div class="important-icon">
                        ${resource.icon}
                    </div>

                    <div class="important-info">

                        <strong>
                            ${resource.name}
                        </strong>

                        <small>
                            ${resource.subject} • ${resource.unit}
                        </small>

                    </div>

                    <div class="arrow">
                        ↗
                    </div>

                </a>

            `).join("")}

        </div>
    `;
}


/* =====================================================
   ALL RESOURCES
   ===================================================== */

function displayResources(list = resources) {

    const container =
        document.getElementById("resources-container");

    const noResults =
        document.getElementById("no-results");


    container.innerHTML = "";


    if (list.length === 0) {

        noResults.style.display = "block";

        return;
    }


    noResults.style.display = "none";


    /* Group by subject */

    const subjects = {};


    list.forEach(resource => {

        if (!subjects[resource.subject]) {

            subjects[resource.subject] = {};

        }


        if (!subjects[resource.subject][resource.unit]) {

            subjects[resource.subject][resource.unit] = [];

        }


        subjects[resource.subject][resource.unit].push(resource);

    });


    /* Create subject cards */

    Object.keys(subjects).forEach(subject => {

        const section =
            document.createElement("section");

        section.className = "subject";


        let totalResources = 0;

        Object.values(subjects[subject]).forEach(unit => {

            totalResources += unit.length;

        });


        section.innerHTML = `

            <div class="subject-header">

                <h2 class="subject-title">
                    ${subject}
                </h2>

                <span class="resource-count">
                    ${totalResources} resources
                </span>

            </div>

        `;


        /* Units */

        Object.keys(subjects[subject]).forEach(unitName => {

            const unit =
                document.createElement("div");

            unit.className = "unit";


            unit.innerHTML = `

                <div class="unit-title">
                    ${unitName}
                </div>

            `;


            const resourceList =
                document.createElement("div");

            resourceList.className = "resources";


            subjects[subject][unitName].forEach(resource => {

                const link =
                    document.createElement("a");


                link.className = "resource";


                link.href = resource.link;


                link.target = "_blank";


                link.rel = "noopener noreferrer";


                link.innerHTML = `

                    <div class="resource-icon">
                        ${resource.icon}
                    </div>

                    <div class="resource-info">

                        <strong>
                            ${resource.name}
                        </strong>

                        <small>
                            ${resource.type}
                        </small>

                    </div>

                    <div class="open">
                        ↗
                    </div>

                `;


                resourceList.appendChild(link);

            });


            unit.appendChild(resourceList);

            section.appendChild(unit);

        });


        container.appendChild(section);

    });

}


/* =====================================================
   SEARCH
   ===================================================== */

function searchResources() {

    const query =
        document
            .getElementById("search")
            .value
            .toLowerCase()
            .trim();


    if (query === "") {

        displayResources(resources);

        displayImportantResources();

        return;
    }


    const filtered =
        resources.filter(resource => {

            return (

                resource.name
                    .toLowerCase()
                    .includes(query)

                ||

                resource.subject
                    .toLowerCase()
                    .includes(query)

                ||

                resource.unit
                    .toLowerCase()
                    .includes(query)

                ||

                resource.type
                    .toLowerCase()
                    .includes(query)

            );

        });


    displayResources(filtered);

}


/* =====================================================
   START
   ===================================================== */

displayImportantResources();

displayResources();