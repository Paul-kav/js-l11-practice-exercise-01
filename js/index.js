const selectUserNumber;
const randomFolks = document.querySelector(".random-peeps");
const getData = async function (numUsers){
    const usersRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`);
    const data = await usersRequest.json();
    const userResults = data.results; //array of 
    displayUsers(userResults);
};
getData(1);

const displayUsers = function (usersResults) {
    randomFolks.innerHTML = ""; // Clear the random folks element

   for (const user of userResults) {
    const country = user.location.country;
    const name = user.name.first;
    const imageUrl = user.picture.medium;
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
        <h3>${name}</h3>
        <p>${country}</p>
        <img src=${imageUrl} alt="User avatar" />
    `;
    randomFolks.append(userDiv);
   }
};

selectUserNumber.addEventListner("change", function (e) { // (e) parameter works with the event
    const numUsers = e.target.value;
    getData(numUsers);
});