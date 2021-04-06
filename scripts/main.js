const board = document.querySelector("#board");
const funcoes = document.querySelectorAll("[data-menu]");

funcoes.forEach((funcao) => funcao.addEventListener("click", getPage));

function getPage() {
  isActive(this);

  const page = this.getAttribute("title");

  fetch(`${window.location.href}/pages/${page}.html`)
    .then((res) => res.text())
    .then((html) => (board.innerHTML = html));
}

function isActive(self) {
  const divs = self.parentNode.querySelectorAll("div");
  divs.forEach((e) => e.classList.remove("active"));

  self.classList.add("active");
}

//

function clock() {
  const display = document.querySelector(".display-relogio");

  const clock = setInterval(() => {
    const hora = `${
      new Date().getHours() < 10
        ? "0" + new Date().getHours()
        : new Date().getHours()
    } : ${
      new Date().getMinutes() < 10
        ? "0" + new Date().getMinutes()
        : new Date().getMinutes()
    } : ${
      new Date().getSeconds() < 10
        ? "0" + new Date().getSeconds()
        : new Date().getSeconds()
    }`;

    display.textContent = hora;
  }, 1000);
}

clock();
