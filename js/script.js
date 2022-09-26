var valor = " ";
var total = 0;
var casos;

const max = 4;

operadores = new Array(max);
numeros = new Array(max);

var topo_operadores = 0;
var topo_numeros = 0;

function inserir(num) {

  if (isNaN(num) == false) {

    valor = valor + num;

    var numer = document.getElementById('resultado').textContent;
    document.getElementById('resultado').textContent = numer + num;

    var nume = document.getElementById('visualizar').textContent;
    document.getElementById('visualizar').textContent = nume + num;

  } else if (num != '=') {

    numeros[topo_numeros] = valor;
    topo_numeros++;
    valor = " ";

    operadores[topo_operadores] = num;

    document.getElementById('resultado').textContent = " ";

    var nume = document.getElementById('visualizar').textContent;
    document.getElementById('visualizar').textContent = nume + "\n" + num + "\n";

    calcular();

  } else {

    numeros[topo_numeros] = valor;
    valor = " ";

    igual();
  }
}

function calcular() {

  if (topo_operadores >= 1) {

    if ((operadores[0] == '*') || (operadores[0] == '/') || (operadores[0] == '%')) {

      casos = operadores[0];

      operacoes();
      substituir();

    } else {

      if ((operadores[1] == '+') || (operadores[1] == '-')) {

        casos = operadores[0];
        operacoes();
        substituir();

      } else {

        precedencia();

      }
    }
  } else {

    topo_operadores++;

  }
}

function precedencia() {

  if (topo_operadores > 1) {

    var amz = operadores[topo_operadores];
    operadores[topo_operadores] = null;
    topo_operadores--;

    casos = operadores[topo_operadores];

    operacoes();

    operadores[topo_operadores] = amz;

    calcular();

  } else {

    topo_operadores++;

  }
}

function igual() {

  topo_operadores--;

  if (topo_operadores == 0) {

    casos = operadores[topo_operadores];

    topo_numeros++;

    operacoes();

    topo_numeros--;
    total = numeros[topo_numeros];

  } else {

    calc();

  }

  var b = document.getElementById('resultado').textContent;
  document.getElementById('resultado').textContent = " = " + total;

  var nume = document.getElementById('visualizar').textContent;
  document.getElementById('visualizar').textContent = total;

}

function calc() {

  casos = operadores[topo_operadores];

  topo_numeros++;
  operacoes();

  operadores[topo_operadores] = null;
  topo_numeros--;

  igual();

}

function operacoes() {

  switch (casos) {
    case '*':

      topo_numeros--;
      var n1 = numeros[topo_numeros];

      topo_numeros--;
      var n2 = numeros[topo_numeros];

      var r = parseInt(n2) * parseInt(n1);
      numeros[topo_numeros] = r;
      topo_numeros++;

      break;

    case '/':

      topo_numeros--;
      var n1 = numeros[topo_numeros];

      topo_numeros--;
      var n2 = numeros[topo_numeros];

      var r = parseInt(n2) / parseInt(n1);
      numeros[topo_numeros] = r;
      topo_numeros++;

      break

    case '%':

      topo_numeros--;
      var n1 = numeros[topo_numeros];

      topo_numeros--;
      var n2 = numeros[topo_numeros];

      var r = parseInt(n2) % parseInt(n1);
      numeros[topo_numeros] = r;
      topo_numeros++;

      break

    case '+':

      topo_numeros--;
      var n1 = numeros[topo_numeros];

      topo_numeros--;
      var n2 = numeros[topo_numeros];

      var r = parseInt(n2) + parseInt(n1);
      numeros[topo_numeros] = r;
      topo_numeros++;

      break

    case '-':

      topo_numeros--;
      var n1 = numeros[topo_numeros];

      topo_numeros--;
      var n2 = numeros[topo_numeros];

      var r = parseInt(n2) - parseInt(n1);
      numeros[topo_numeros] = r;
      topo_numeros++;

      break

  }
}

function substituir() {

  var subs = operadores[topo_operadores];
  operadores[topo_operadores] = null;
  topo_operadores--;

  operadores[topo_operadores] = subs;
  topo_operadores++;

}

function limpar() {

  for (cont = 0; cont <= max; cont++) {

    numeros[topo_numeros] = null;
    topo_numeros--;

    operadores[topo_operadores] = null;
    topo_operadores--

  }

  document.getElementById('resultado').textContent = "";
  document.getElementById('visualizar').textContent = "";

}