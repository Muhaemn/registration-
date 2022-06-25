const userName = document.getElementById("name");
const qrCheak = document.getElementById("qr-cheak");
const phone = document.getElementById("phone");
const qr = document.getElementById("qr-code");
const btn = document.getElementById("btn");
const btnCheak = document.getElementById("btn-cheak");
const btnStart = document.getElementById("btn-start");
const btnAddQr = document.getElementById("btn-add-qr");
const btnEditQr = document.getElementById("btn-edit-qr");
const btnDeleteQr = document.getElementById("btn-delete-qr");
const btnFind = document.getElementById("btn-find");
const btnChange = document.getElementById("btn-qr-change");
const btnDelete = document.getElementById("btn-qr-delete");
const btnDeleteAll = document.getElementById("btn-qr-delete-all");
const addQr = document.getElementById("add-qr");
const cheakQr = document.getElementById("cheak-qr");
const start = document.getElementById("start");
const findQR = document.getElementById("find-QR");
const changeQr = document.getElementById("change-qr");
const deleteQr = document.getElementById("delete-qr");
const form = document.querySelectorAll("form");
const Alert = document.getElementById("alert-login");
const AlertByPhone = document.getElementById("alert-qr-by-phone");
const AlertChange = document.getElementById("alert-change");
const AlertDelete = document.getElementById("alert-delete");
const findQr = document.getElementById("find-qr");
const qrName = document.getElementById("qr-name");
const qrCheake = document.getElementById("qr-cheake");
const qrPhone = document.getElementById("qr-phone");
const phoneName = document.getElementById("phone-name");
const phoneQr = document.getElementById("phone-qr");
const qrByPhone = document.getElementById("qr-by-phone");
const qrchange = document.getElementById("qr-change");
const phoneChange = document.getElementById("phone-change");
const phoneDelete = document.getElementById("phone-delete");
const addBack = document.getElementById("add-back");
const cheakBack = document.getElementById("cheak-back");
const findBack = document.getElementById("find-back");
const changeBack = document.getElementById("change-back");
const deleteBack = document.getElementById("delete-back");
const showBack = document.getElementById("show-back");
const AlertAdd = document.getElementById("alert-add");
const dis = document.getElementById("dis");
const Users = document.getElementById("btn-display-qr");
const UsersShow = document.getElementById("users-display");
let usersDisplay = "";
let cheaked = `<span class="cheaked">cheaked</span>`;

btnStart.addEventListener("click", (e) => {
  cheakQr.classList.remove("hidden");
  start.classList.add("hidden");
  addQr.classList.add("hidden");
});

btnAddQr.addEventListener("click", (e) => {
  cheakQr.classList.add("hidden");
  addQr.classList.remove("hidden");
  start.classList.add("hidden");
});

btnEditQr.addEventListener("click", (e) => {
  cheakQr.classList.add("hidden");
  addQr.classList.add("hidden");
  start.classList.add("hidden");
  changeQr.classList.remove("hidden");
});

btnDeleteQr.addEventListener("click", (e) => {
  cheakQr.classList.add("hidden");
  addQr.classList.add("hidden");
  start.classList.add("hidden");
  changeQr.classList.add("hidden");
  deleteQr.classList.remove("hidden");
});

findQr.addEventListener("click", () => {
  cheakQr.classList.add("hidden");
  findQR.classList.remove("hidden");
});

addBack.addEventListener("click", (e) => {
  cheakQr.classList.add("hidden");
  addQr.classList.add("hidden");
  start.classList.remove("hidden");
  changeQr.classList.add("hidden");
});

cheakBack.addEventListener("click", (e) => {
  cheakQr.classList.add("hidden");
  addQr.classList.add("hidden");
  start.classList.remove("hidden");
  changeQr.classList.add("hidden");
});

deleteBack.addEventListener("click", (e) => {
  cheakQr.classList.add("hidden");
  addQr.classList.add("hidden");
  start.classList.remove("hidden");
  changeQr.classList.add("hidden");
  deleteQr.classList.add("hidden");
});
showBack.addEventListener("click", (e) => {
  cheakQr.classList.add("hidden");
  addQr.classList.add("hidden");
  start.classList.remove("hidden");
  changeQr.classList.add("hidden");
  deleteQr.classList.add("hidden");
  UsersShow.classList.add("hidden");
  usersDisplay = "";
});

findBack.addEventListener("click", (e) => {
  cheakQr.classList.remove("hidden");
  addQr.classList.add("hidden");
  start.classList.add("hidden");
  changeQr.classList.add("hidden");
  findQR.classList.add("hidden");
});

changeBack.addEventListener("click", (e) => {
  cheakQr.classList.add("hidden");
  addQr.classList.add("hidden");
  start.classList.remove("hidden");
  changeQr.classList.add("hidden");
});

let users = JSON.parse(localStorage.getItem("users"));

if (!localStorage.getItem("users")) {
  users = [];
}

let user;
let viled = true;
btn.addEventListener("click", (e) => {
  if (qr.value && userName.value && phone.value) {
    for (let i = 0; i < users.length; i++) {
      if (qr.value == users[i].Qr) {
        AlertAdd.textContent = "this QR is alrady used";
        viled = false;
        setTimeout(() => {
          AlertAdd.textContent = "";
        }, 5000);
        break;
      } else if (userName.value == users[i].Name) {
        AlertAdd.textContent = "this name is alrady used";
        viled = false;
        setTimeout(() => {
          AlertAdd.textContent = "";
        }, 5000);
        break;
      } else if (phone.value == users[i].Phone) {
        AlertAdd.textContent = "this phone number is alrady used";
        viled = false;
        setTimeout(() => {
          AlertAdd.textContent = "";
        }, 5000);
        break;
      } else {
        viled = true;
        AlertAdd.textContent = "";
      }
    }
    if (viled == true) {
      user = {
        Name: userName.value,
        Phone: phone.value,
        Qr: qr.value,
        Cheak: "",
      };
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      setTimeout(() => {
        qr.value = "";
        userName.value = "";
        phone.value = "";
      }, 1000);
      AlertAdd.textContent = "";
    }
  }
});

btnCheak.addEventListener("click", (e) => {
  for (let i = 0; i < users.length; i++) {
    if (qrCheak.value == users[i].Qr) {
      Alert.textContent = "";
      qrName.innerHTML = "Name : " + users[i].Name;
      qrCheake.innerHTML = users[i].Cheak;
      users[i].Cheak = cheaked;
      localStorage.setItem("users", JSON.stringify(users));
      if (users[i]["Phone"].length == 11) {
        qrPhone.textContent =
          "Phone number : " +
          users[i].Phone[0] +
          users[i].Phone[1] +
          users[i].Phone[2] +
          users[i].Phone[3] +
          " " +
          users[i].Phone[4] +
          users[i].Phone[5] +
          users[i].Phone[6] +
          " " +
          users[i].Phone[7] +
          users[i].Phone[8] +
          " " +
          users[i].Phone[9] +
          users[i].Phone[10];
      } else {
        qrPhone.textContent = "Phone number : " + users[i].Phone;
      }
      setTimeout(() => {
        qrCheak.value = "";
      }, 1000);
      break;
    } else if (!qrCheak.value) {
    } else {
      Alert.textContent = "there isn't any user with this QR code";
      setTimeout(() => {
        Alert.textContent = "";
      }, 5000);
      qrName.textContent = "";
      qrCheake.textContent = "";
      qrPhone.textContent = "";
    }
  }
});

btnFind.addEventListener("click", () => {
  for (let i = 0; i < users.length; i++) {
    if (qrByPhone.value == users[i].Phone) {
      AlertByPhone.textContent = " ";
      phoneName.innerHTML = "Name : " + users[i].Name;
      phoneQr.textContent = "QR code : " + users[i].Qr;
      setTimeout(() => {
        qrByPhone.value = "";
      }, 1000);
      break;
    } else if (!qrByPhone.value) {
    } else {
      AlertByPhone.textContent = "there is no QR code with this phone number";
      setTimeout(() => {
        AlertByPhone.textContent = "";
      }, 5000);
      phoneName.textContent = "";
      phoneQr.textContent = "";
    }
  }
});

let qrViled = "true";

btnChange.addEventListener("click", () => {
  for (let i = 0; i < users.length; i++) {
    if (qrchange.value == users[i].Qr) {
      qrViled = "false";
      break;
    } else {
      qrViled = "true";
    }
  }
  if (phoneChange.value && qrchange.value) {
    for (let i = 0; i < users.length; i++) {
      if (
        phoneChange.value == users[i].Phone ||
        phoneChange.value == users[i].Name
      ) {
        if (qrViled == "true") {
          users[i].Qr = qrchange.value;
          localStorage.setItem("users", JSON.stringify(users));
          AlertChange.classList.add("coreect");
          AlertChange.textContent = `the QR code for ${users[i].Name} changed successfully`;
          setTimeout(() => {
            AlertChange.textContent = "";
          }, 5000);
        } else {
          AlertChange.classList.remove("coreect");
          AlertChange.textContent = "this QR is already used";
          setTimeout(() => {
            AlertChange.textContent = "";
          }, 5000);
        }
        break;
      } else {
        AlertChange.classList.remove("coreect");
        AlertChange.textContent = "Wrong number or name";
        setTimeout(() => {
          AlertChange.textContent = "";
        }, 5000);
      }
    }
  }
});

btnDelete.addEventListener("click", () => {
  if (phoneDelete.value) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].Phone == phoneDelete.value) {
        users = users.filter((e) => e.Phone != phoneDelete.value);
        localStorage.setItem("users", JSON.stringify(users));
        AlertDelete.classList.add("coreect");
        AlertDelete.textContent = "user deleted successfully";
        setTimeout(() => {
          AlertDelete.textContent = "";
        }, 5000);
        setTimeout(() => {
          phoneDelete.value = "";
        }, 1000);
        break;
      } else if (users[i].Name == phoneDelete.value) {
        users = users.filter((e) => e.Name != phoneDelete.value);
        localStorage.setItem("users", JSON.stringify(users));
        AlertDelete.classList.add("coreect");
        AlertDelete.textContent = "user deleted successfully";
        setTimeout(() => {
          AlertDelete.textContent = "";
        }, 5000);
        setTimeout(() => {
          phoneDelete.value = "";
        }, 1000);
        break;
      } else {
        AlertDelete.classList.remove("coreect");
        AlertDelete.textContent =
          "there is't any user with this phone number or name to delete";
        setTimeout(() => {
          AlertDelete.textContent = "";
        }, 5000);
      }
    }
  }
});

Users.addEventListener("click", () => {
  for (let i = 0; i < users.length; i++) {
    usersDisplay += `
    <li>
    <br>
     <ul>
      <li>${i + 1}</li>
      <li>${users[i].Cheak}</li>
      <li>Name : ${users[i].Name}</li>
      <li>phone number : ${users[i].Phone}</li>
      <li>QR code : ${users[i].Qr}</li>
     </ul>
     <br>
    </li>`;
    dis.innerHTML = usersDisplay;
    cheakQr.classList.add("hidden");
    addQr.classList.add("hidden");
    start.classList.add("hidden");
    changeQr.classList.add("hidden");
    deleteQr.classList.add("hidden");
    UsersShow.classList.remove("hidden");
  }
});
btnDeleteAll.addEventListener("dblclick", () => {
  localStorage.clear();
  users = [];
  if (users) {
    AlertDelete.classList.add("coreect");
    AlertDelete.textContent = "All users deleted successfully";
    setTimeout(() => {
      AlertDelete.textContent = "";
    }, 5000);
  }
});

form.forEach((e) => (e.onsubmit = () => false));
console.log(10%10)