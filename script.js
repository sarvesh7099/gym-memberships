let members = JSON.parse(localStorage.getItem("members")) || [];

displayMembers();

function addMember() {

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const plan = document.getElementById("plan").value;

    if(name === "" || age === ""){
        alert("Please fill all fields");
        return;
    }

    const member = {
        id: Date.now(),
        name,
        age,
        plan
    };

    members.push(member);

    localStorage.setItem(
        "members",
        JSON.stringify(members)
    );

    displayMembers();

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
}

function displayMembers(){

    const memberList =
        document.getElementById("memberList");

    memberList.innerHTML = "";

    members.forEach(member => {

        memberList.innerHTML += `
        <tr>
            <td>${member.name}</td>
            <td>${member.age}</td>
            <td>${member.plan}</td>
            <td>
                <button onclick="deleteMember(${member.id})">
                    Delete
                </button>
            </td>
        </tr>
        `;
    });
}

function deleteMember(id){

    members = members.filter(
        member => member.id !== id
    );

    localStorage.setItem(
        "members",
        JSON.stringify(members)
    );

    displayMembers();
}
