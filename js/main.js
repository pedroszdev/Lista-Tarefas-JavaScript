const input = document.querySelector("#add-tarefa");
const botaoEnviarTarefa = document.querySelector("#enviar-tarefa");
const listaTarefas = document.querySelector(".lista-tarefas");
const tarefas = document.querySelector(".tarefas");
let NotTarefa = document.querySelector(".not-tarefas");

botaoEnviarTarefa.addEventListener("click", function (event) {
  criarTarefa();
});

listaTarefas.addEventListener("click", function (event) {
  if (event.target.id === "apagar-tarefa") {
    apagarTarefa(event);
    if (listaTarefas.children.length === 0) {
      criarNotTarefa();
    }
  }

  if (event.target.id === "checkbox") {
    if (event.target.checked) {
      checkarTarefa(event);
    } else {
      tirarCheck(event);
    }
  }
});

function criarTarefa() {
  const novaTarefa = input.value;
  criarLi(novaTarefa);
  NotTarefa.remove();
  limpaInput();
}

function criarLi(texto) {
  const liNovo = document.createElement("li");
  liNovo.classList.add("tarefa");
  liNovo.innerHTML = `<input type="checkbox" name="" id="checkbox" />
                        ${texto}
                        <button type="submit" id="apagar-tarefa">Apagar</button>`;
  listaTarefas.appendChild(liNovo);
}

function apagarTarefa(event) {
  const liApagar = event.target.closest(".tarefa");
  liApagar.remove();
}

function limpaInput() {
  input.value = "";
  input.focus;
}

function criarNotTarefa() {
  NotTarefa = document.createElement("div");
  NotTarefa.classList.add("not-tarefas");
  NotTarefa.innerHTML =
    "<p><strong>Você ainda não tem tarefas cadastradas</strong></p><p>Crie tarefas e organize seus itens a fazer</p>";
  tarefas.appendChild(NotTarefa);
}

function checkarTarefa(event) {
  const liCheck = event.target.closest(".tarefa");
  liCheck.classList.add("checkado");
}

function tirarCheck(event) {
  const liTirarCheck = event.target.closest(".tarefa");
  liTirarCheck.classList.remove("checkado");
}
