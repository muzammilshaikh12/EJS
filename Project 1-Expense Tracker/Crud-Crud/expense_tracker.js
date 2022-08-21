let crud_crud_url =
  "https://crudcrud.com/api/10bf634745f64f3cb8b7596f2835e52e/mydata";

const savetoCrudstorage = async (event) => {
  event.preventDefault();
  let userDetails = {
    My_Expense_Amount: document.getElementById("amount").value,
    Description: document.getElementById("des").value,
    category: document.getElementById("cat").value,
  };

  try {
    let saveuser = await axios.post(crud_crud_url, userDetails);
    showNewUseronScreen(saveuser.data);
  } catch (err) {
    console.log(err);
  }
};

const DOMContentLoaded = async () => {
  try {
    let userDetails = await axios.get(crud_crud_url);
    for (let i = 0; i < userDetails.data.length; i++) {
      showNewUseronScreen(userDetails.data[i]);
    }
  } catch (err) {
    console.log(err);
  }
};

const UserOnScreen = window.addEventListener(
  "DOMContentLoaded",
  DOMContentLoaded()
);

const showNewUseronScreen = async (userDetails) => {
  document.getElementById("amount").value = "";
  document.getElementById("des").value = "";
  document.getElementById("cat").value = "";
  try {
    const d = document.getElementById("ul");

    const li = `<li id="${userDetails._id}"> ${userDetails.My_Expense_Amount}, ${userDetails.Description},  ${userDetails.category}
  <button onclick = "editUser('${userDetails.My_Expense_Amount}', '${userDetails.Description}','${userDetails.category}','${userDetails._id}')"> Edit </button>
  <button onclick = "deleteUser('${userDetails._id}')" style="color:white;background-color:rgb(24,31,46)"> Delete </button> 
   </li>`;
    d.innerHTML = d.innerHTML + li;
  } catch (err) {
    console.log(err);
  }
};

const deleteUser = async (userId) => {
  try {
    let del_user = await axios.delete(`${crud_crud_url}/${userId}`);
    removeUserfromScreen(userId);
  } catch (err) {
    console.log(err);
  }
};

const removeUserfromScreen = async (userId) => {
  try {
    let parent = document.getElementById("ul");

    let child = document.getElementById(userId);
    if (child) {
      parent.removeChild(child);
    }
  } catch (err) {
    console.log(err);
  }
};

const editUser = async (money, des, cat, userId) => {
  try {
    document.getElementById("amount").value = money;
    document.getElementById("des").value = des;
    document.getElementById("cat").value = cat;
    deleteUser(userId);
  } catch (err) {
    console.log(err);
  }
};
