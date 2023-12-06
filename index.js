const { jsPDF } = window.jspdf;

function createRandomFirstName() {
    const names = [
        "Peter",
        "Julian",
        "Phil",
        "Emma",
        "Liam",
        "Olivia",
        "Noah",
        "Ava",
        "Sophia",
        "Jackson",
        "Isabella",
        "Lucas",
        "Mia",
        "Aiden",
        "Harper",
        "Ethan",
        "Amelia",
        "Logan",
        "Evelyn",
        "Oliver",
        "Abigail",
        "Elijah",
        "Charlotte",
        "Caleb",
        "Grace",
        "Mason",
        "Lily",
        "Samuel",
    ]
    const random = Math.floor(Math.random() * names.length);
    return names[random]
}

function createRandomLastName() {
    const names = [
        "Lewis",
        "Edmunds",
        "Buckland",
        "Smith",
        "Johnson",
        "Williams",
        "Jones",
        "Brown",
        "Davis",
        "Miller",
        "Wilson",
        "Moore",
        "Taylor",
        "Anderson",
        "Thomas",
        "Jackson",
        "White",
        "Harris",
        "Martin",
        "Thompson",
        "Garcia",
        "Martinez",
        "Robinson",
        "Clark",
        "Lewis",
        "Lee",
        "Walker",
        "Hall",
    ]
    const random = Math.floor(Math.random() * names.length);
    return names[random]
}


function gen() {
    const random = `${Math.floor(Math.random() * 20)}${Math.floor(Math.random() * 20)}${Math.floor(Math.random() * 20)}`;
    const firstName = document.getElementById('pdf-first-name').value;
    const lastName = document.getElementById('pdf-last-name').value;
    const url = document.getElementById('pdf-link').value;
    const doc = new jsPDF({
        unit: "in",
        format: [8.5, 11]
    });

    doc.setFontSize(32);
    doc.text("English Study Guide Unit 3", 1, 1);
    doc.setFontSize(22);
    const first = createRandomFirstName();
    const last = createRandomLastName();
    doc.text(`Name: ${firstName ? firstName : first}, ${lastName ? lastName : last}`, 1, 1.5);
    doc.text(`Date: ${new Date().toLocaleString()}`, 1, 2);
    doc.setFontSize(16);
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    //   const splitTitle = doc.splitTextToSize(text, 180);
    const lines = doc.splitTextToSize(text, 6)
    let line = 3
    for (let i = 0; i < lines.length; i++) {
        doc.text(`${lines[i]}`, 1, line)
        line += 0.5
    }
    doc.text(`${lines.length}`, 1, 5)
    doc.setFontSize(10);
    doc.text(`This PDF was automacticly genarated by Kami`, 1, 10)
    doc.textWithLink("https://www.kamiapp.com/", 6, 10, {
        url: "https://google.com"
    });
    doc.save(`English_Study_Guide_Unit_3_${firstName ? firstName : first}_${lastName ? lastName : last}-${random}.pdf`);
};