const usuarios = {
    "admin": "1234",
    "operador1": "1234",
    "operador2": "1234",
    "operador3": "1234",
    "carregador1": "1234",
    "carregador2": "1234",
    "carregador3": "1234",
    "joao": "1234"
};

let pedidos = [
    { id: 10532, cliente: "Metalúrgica Central", status: "Aguardando separação", endereco: "Rua teste, 123 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Chapa: ["CHAPA 1/8", "CHAPA GALVANIZADA", "CHAPA INOX 304"], Tubo: ["TUBO RETANGULAR 40x20", "TUBO REDONDO 1 1/2", "TUBO QUADRADO 20x20"], Viga: ["VIGA U 1/4", "VIGA I 200"] } },   
    { id: 10533, cliente: "Construtora Brasil", status: "Aguardando separação", endereco: "Av. Exemplo, 456 - Vila Velha, ES", embarque: "Vila Velha", motorista: null, produtos: { Chapa: ["CHAPA 3/16", "CHAPA XADREZ 1/4"], Tubo: ["TUBO REDONDO 2", "TUBO SCHEDULE 40"] } },
    { id: 10534, cliente: "Ferro e Aço LTDA", status: "Aguardando separação", endereco: "Rua das Indústrias, 1010 - Cariacica, ES", embarque: "Cariacica", motorista: null, produtos: { Viga: ["VIGA W 2", "VIGA H 150"], Chapa: ["CHAPA XADREZ 5/16", "CHAPA LISA 1/2"], Tubo: ["TUBO QUADRADO 50x50", "TUBO REDONDO 3"] } },
    { id: 10535, cliente: "ConstruAço", status: "Aguardando separação", endereco: "Rodovia Norte-Sul, 999 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Tubo: ["TUBO QUADRADO 50x50", "TUBO RETANGULAR 60x40", "TUBO CONDUITE 3/4"], Viga: ["VIGA H 200", "VIGA U 5", "VIGA LAMINADA 150"] } },
    { id: 10536, cliente: "Montagens Gerais", status: "Aguardando separação", endereco: "Rua Projetada, 789 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Chapa: ["CHAPA PRETA 1/4", "CHAPA FINO QUENTE 1/8", "CHAPA DE PISO ALUMÍNIO"], Tubo: ["TUBO INDUSTRIAL 3", "TUBO INOX SANITÁRIO"], Viga: ["VIGA I 300", "VIGA SOLDADA 250", "VIGA LAMINADA 200"] } },
    { id: 10537, cliente: "Aço Forte", status: "Aguardando separação", endereco: "Av. Atlântica, 321 - Vila Velha, ES", embarque: "Vila Velha", motorista: null, produtos: { Chapa: ["CHAPA ALUMÍNIO 2mm", "CHAPA GALVANIZADA TRAPEZOIDAL"], Viga: ["VIGA SOLDADA 600", "VIGA WIDE FLANGE 800"] } },
    { id: 10538, cliente: "Metal Capixaba", status: "Aguardando separação", endereco: "Rua dos Ferroviários, 12 - Vitória, ES", embarque: "Vitória", motorista: null, produtos: { Tubo: ["TUBO ZINCADO 1", "TUBO ESTRUTURAL 100x100"], Viga: ["VIGA SOLDADA 200", "VIGA I 150"] } },
    { id: 10539, cliente: "Engemetal", status: "Aguardando separação", endereco: "Rua Industrial, 88 - Linhares, ES", embarque: "Linhares", motorista: null, produtos: { Chapa: ["CHAPA LISA 1/2", "CHAPA CORTEN 3mm"], Tubo: ["TUBO REDONDO 3", "TUBO ELETRODUTO 1"] } },
    { id: 10540, cliente: "Ferroleste", status: "Aguardando separação", endereco: "Avenida Norte, 999 - Colatina, ES", embarque: "Colatina", motorista: null, produtos: { Viga: ["VIGA U 5", "VIGA METÁLICA TRELIÇADA"], Chapa: ["CHAPA ANTIDERRAPANTE", "CHAPA EXPANDIDA ALUMÍNIO"] } },
    { id: 10541, cliente: "Metalúrgica União", status: "Aguardando separação", endereco: "Rod. do Contorno, 400 - Vila Velha, ES", embarque: "Vila Velha", motorista: null, produtos: { Tubo: ["TUBO QUADRADO 40x40", "TUBO RETANGULAR 80x40", "TUBO DE CONDUÇÃO 2"], Chapa: ["CHAPA GALVANIZADA", "CHAPA PERFURADA 3mm"] } },
    { id: 10542, cliente: "Construmetais", status: "Aguardando separação", endereco: "Rua das Oficinas, 77 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Viga: ["VIGA I 250", "VIGA U 6"], Chapa: ["CHAPA LISA 3/8", "CHAPA DE AÇO CARBONO", "CHAPA DE LIGA LEVE"] } },
    { id: 10543, cliente: "Alfa Engenharia", status: "Aguardando separação", endereco: "Rua das Palmeiras, 10 - Cariacica, ES", embarque: "Cariacica", motorista: null, produtos: { Tubo: ["TUBO REDONDO 1 1/2", "TUBO DE PRECISÃO", "TUBO OVAL"], Chapa: ["CHAPA EXPANDIDA", "CHAPA DE LATÃO"] } },
    { id: 10544, cliente: "Beta Construções", status: "Aguardando separação", endereco: "Av. Beira Mar, 2000 - Vitória, ES", embarque: "Vitória", motorista: null, produtos: { Viga: ["VIGA U 3", "VIGA DE ALUMÍNIO"], Chapa: ["CHAPA LISA 1/4", "CHAPA DE CHUMBO"] } },
    { id: 10545, cliente: "Gama Ferragens", status: "Aguardando separação", endereco: "Rua do Comércio, 50 - Linhares, ES", embarque: "Linhares", motorista: null, produtos: { Chapa: ["CHAPA GALVANIZADA", "CHAPA FRISADA"], Tubo: ["TUBO RETANGULAR 20x10", "TUBO INDUSTRIAL 4", "TUBO COM COSTURA"] } },
    { id: 10546, cliente: "Delta Estruturas", status: "Aguardando separação", endereco: "BR-101 Sul, KM 25 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Viga: ["VIGA H 150", "VIGA I 100"], Chapa: ["CHAPA PRETA 3/16", "CHAPA GROSSA 1/2"] } },
    { id: 10547, cliente: "Épsilon Indústria", status: "Aguardando separação", endereco: "Av. Central, 300 - Vila Velha, ES", embarque: "Vila Velha", motorista: null, produtos: { Tubo: ["TUBO REDONDO 3/4", "TUBO DE COBRE 1/2"], Chapa: ["CHAPA INOX 1mm", "CHAPA ESCOVADA"] } },
    { id: 10548, cliente: "Zeta Metalúrgica", status: "Aguardando separação", endereco: "Rua Norte, 15 - Colatina, ES", embarque: "Colatina", motorista: null, produtos: { Viga: ["VIGA I 100", "VIGA W 3"], Tubo: ["TUBO QUADRADO 30x30", "TUBO RETANGULAR 50x25"] } },
    { id: 10549, cliente: "Ômega Comércio", status: "Aguardando separação", endereco: "Praça da Matriz, 7 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Chapa: ["CHAPA PERFURADA", "CHAPA DE ZINCO"], Viga: ["VIGA SOLDADA 400", "VIGA DE TRELIÇA"] } },
    { id: 10550, cliente: "Ícaro Soldas", status: "Aguardando separação", endereco: "Rua da Paz, 123 - Cariacica, ES", embarque: "Cariacica", motorista: null, produtos: { Tubo: ["TUBO INDUSTRIAL 2", "TUBO REDONDO 5"], Chapa: ["CHAPA FINA FRIA", "CHAPA CROMADA"] } },
    { id: 10551, cliente: "Fênix Construções", status: "Aguardando separação", endereco: "Av. da República, 500 - Vitória, ES", embarque: "Vitória", motorista: null, produtos: { Viga: ["VIGA W 4", "VIGA PRÉ-MOLDADA"], Tubo: ["TUBO PVC 100mm", "TUBO ESGOTO 150mm"] } },
    { id: 10552, cliente: "Grifo Metais", status: "Aguardando separação", endereco: "Rua do Sol, 888 - Linhares, ES", embarque: "Linhares", motorista: null, produtos: { Chapa: ["CHAPA POLICARBONATO", "CHAPA ACRÍLICA"], Viga: ["VIGA LAMINADA 200", "VIGA DE CONCRETO PRÉ-FABRICADO"] } },
    { id: 10553, cliente: "Draco Montagens", status: "Aguardando separação", endereco: "Rodovia do Café, KM 5 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Tubo: ["TUBO OBLONGO", "TUBO DE VENTILAÇÃO"], Chapa: ["CHAPA GALVANIZADA", "CHAPA DE COBRE"] } },
    { id: 10554, cliente: "Pegasus Engenharia", status: "Aguardando separação", endereco: "Rua das Rosas, 77 - Vila Velha, ES", embarque: "Vila Velha", motorista: null, produtos: { Viga: ["VIGA CAIXÃO", "VIGA DE MADEIRA LAMINADA"], Tubo: ["TUBO DE AÇO INOX", "TUBO DE ALUMÍNIO"] } },
    { id: 10555, cliente: "Centauro Indústria", status: "Aguardando separação", endereco: "Av. Brasil, 1100 - Colatina, ES", embarque: "Colatina", motorista: null, produtos: { Chapa: ["CHAPA DE COBRE", "CHAPA DE BRONZE"], Viga: ["VIGA U 8", "VIGA H 250"] } },
    { id: 10556, cliente: "Harpia Estruturas", status: "Aguardando separação", endereco: "Rua da Serra, 45 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Tubo: ["TUBO SCH 40", "TUBO DE FERRO FUNDIDO"], Chapa: ["CHAPA GROSSA", "CHAPA DE TITÂNIO"] } },
    { id: 10557, cliente: "Minotauro Construções", status: "Aguardando separação", endereco: "Estrada Velha, 22 - Cariacica, ES", embarque: "Cariacica", motorista: null, produtos: { Viga: ["VIGA I 400", "VIGA WIDE FLANGE 600"], Tubo: ["TUBO SEM COSTURA", "TUBO COM FLANGE"] } },
    { id: 10558, cliente: "Sereia Naval", status: "Aguardando separação", endereco: "Rua do Porto, 33 - Vitória, ES", embarque: "Vitória", motorista: null, produtos: { Chapa: ["CHAPA NAVAL", "CHAPA DE AÇO MARÍTIMO"], Viga: ["VIGA CAIXÃO GRANDE", "VIGA GERAL"] } },
    { id: 10559, cliente: "Tritão Ferro e Aço", status: "Aguardando separação", endereco: "Av. dos Navegantes, 150 - Linhares, ES", embarque: "Linhares", motorista: null, produtos: { Tubo: ["TUBO QUADRADO 100x100", "TUBO RETANGULAR 120x60"], Chapa: ["CHAPA DE PISO", "CHAPA ANTI-ABRASIVA"] } },
    { id: 10560, cliente: "Atlas Construções", status: "Aguardando separação", endereco: "Rua Principal, 55 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Viga: ["VIGA H 300", "VIGA DE PONTE"], Chapa: ["CHAPA CORTEN", "CHAPA DE PAREDE"] } },
    { id: 10561, cliente: "Titã Fundições", status: "Aguardando separação", endereco: "Rodovia das Árvores, 99 - Vila Velha, ES", embarque: "Vila Velha", motorista: null, produtos: { Chapa: ["CHAPA DE BRONZE", "CHAPA DE LIGA METÁLICA"], Tubo: ["TUBO FUNDIDO", "TUBO DE CONCRETO"] } },
    { id: 10562, cliente: "Olimpo Metais", status: "Aguardando separação", endereco: "Av. do Contorno, 1001 - Colatina, ES", embarque: "Colatina", motorista: null, produtos: { Viga: ["VIGA LAMINADA 300", "VIGA ARMADA"], Chapa: ["CHAPA DE CHUMBO", "CHAPA DE ALUMÍNIO COMPOSTO"] } },
    { id: 10563, cliente: "União Metálica", status: "Aguardando separação", endereco: "Rua das Flores, 45 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Chapa: ["CHAPA PRETA 1/2", "CHAPA GALVANIZADA 2mm"], Tubo: ["TUBO REDONDO 4", "TUBO QUADRADO 70x70"], Viga: ["VIGA I 350", "VIGA U 10"] } },
    { id: 10564, cliente: "Expresso Cargas", status: "Aguardando separação", endereco: "BR-101 Norte, KM 50 - Aracruz, ES", embarque: "Aracruz", motorista: null, produtos: { Tubo: ["TUBO RETANGULAR 50x30", "TUBO ZINCADO 2"], Viga: ["VIGA H 220", "VIGA LAMINADA 250"] } },
    { id: 10565, cliente: "Soluções em Aço", status: "Aguardando separação", endereco: "Rua do Progresso, 200 - Guarapari, ES", embarque: "Guarapari", motorista: null, produtos: { Chapa: ["CHAPA INOX 430", "CHAPA XADREZ 3/8"], Viga: ["VIGA CAIXÃO PEQUENA"] } },
    { id: 10566, cliente: "Estrutura Forte", status: "Aguardando separação", endereco: "Av. das Américas, 100 - Linhares, ES", embarque: "Linhares", motorista: null, produtos: { Tubo: ["TUBO REDONDO 1", "TUBO INDUSTRIAL 5"], Chapa: ["CHAPA PRETA 1/8"] } },
    { id: 10567, cliente: "Cia. do Metal", status: "Aguardando separação", endereco: "Rua das Acácias, 10 - São Mateus, ES", embarque: "São Mateus", motorista: null, produtos: { Viga: ["VIGA U 4", "VIGA I 120"], Chapa: ["CHAPA GALVANIZADA 1mm"] } },
    { id: 10568, cliente: "Norte Aço", status: "Aguardando separação", endereco: "Rodovia ES-010, KM 5 - Fundão, ES", embarque: "Fundão", motorista: null, produtos: { Tubo: ["TUBO QUADRADO 60x60"], Chapa: ["CHAPA FINA FRIA 0.5mm", "CHAPA DE BRONZE"] } },
    { id: 10569, cliente: "Leste Ferro", status: "Aguardando separação", endereco: "Rua Central, 30 - Cachoeiro de Itapemirim, ES", embarque: "Cachoeiro de Itapemirim", motorista: null, produtos: { Viga: ["VIGA H 100"], Chapa: ["CHAPA ANTIDERRAPANTE 3mm"] } },
    { id: 10570, cliente: "Centro Metal", status: "Aguardando separação", endereco: "Av. Getúlio Vargas, 15 - Castelo, ES", embarque: "Castelo", motorista: null, produtos: { Tubo: ["TUBO REDONDO 2 1/2", "TUBO ESTRUTURAL 80x80"], Chapa: ["CHAPA LISA 1/8", "CHAPA PERFURADA 5mm"] } },
    { id: 10571, cliente: "Metalúrgica do Aço", status: "Aguardando separação", endereco: "Rua do Sol, 10 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Chapa: ["CHAPA 1/4", "CHAPA INOX 316"], Viga: ["VIGA I 100"] } },
    { id: 10572, cliente: "Construções Modernas", status: "Aguardando separação", endereco: "Av. da Praia, 50 - Vila Velha, ES", embarque: "Vila Velha", motorista: null, produtos: { Tubo: ["TUBO REDONDO 1", "TUBO INDUSTRIAL 2"], Chapa: ["CHAPA GALVANIZADA 3mm"] } },
    { id: 10573, cliente: "Estruturas Metálicas", status: "Aguardando separação", endereco: "Rua da Paz, 200 - Cariacica, ES", embarque: "Cariacica", motorista: null, produtos: { Viga: ["VIGA U 6", "VIGA H 200"], Tubo: ["TUBO QUADRADO 30x30"] } },
    { id: 10574, cliente: "Galvanização Brasil", status: "Aguardando separação", endereco: "Rodovia do Ferro, 700 - Linhares, ES", embarque: "Linhares", motorista: null, produtos: { Chapa: ["CHAPA GALVANIZADA 1/2"], Tubo: ["TUBO RETANGULAR 40x20"] } },
    { id: 10575, cliente: "Tubos e Conexões", status: "Aguardando separação", endereco: "Rua do Comércio, 120 - Colatina, ES", embarque: "Colatina", motorista: null, produtos: { Tubo: ["TUBO REDONDO 2", "TUBO SCHEDULE 80"], Viga: ["VIGA I 200"] } }
];

function produtosParaTexto(produtos) {
    let arr = [];
    for (let categoria in produtos) {
        let itens = produtos[categoria].join(", ");
        arr.push(`${categoria}: ${itens}`);
    }
    return arr.join(" | ");
}

let usuarioLogado = null;
let isMotoristaLogado = false;

function handleEnterSeparador(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // evita comportamento padrão (ex: submit)
      fazerLogin(); // chama a função do login do separador
    }
  }

  // Função para "escutar" o Enter na tela de Carregamento
function handleEnterCarregamento(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      fazerLoginMotorista(); // chama a função do login do motorista
    }
  }

  // Adiciona os eventos após o DOM carregar
  window.addEventListener('DOMContentLoaded', () => {
    // Tela do separador
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    username.addEventListener('keydown', handleEnterSeparador);
    password.addEventListener('keydown', handleEnterSeparador);

    // Tela do carregamento
    const driverUsername = document.getElementById('driverUsername');
    const driverPassword = document.getElementById('driverPassword');
    driverUsername.addEventListener('keydown', handleEnterCarregamento);
    driverPassword.addEventListener('keydown', handleEnterCarregamento);
});

const localStorageDadosPesoKey = "dadosPesagemGlobal";
const localStorageCertificadoKey = "dadosCertificadoGlobal";
const localStorageSetorEnviadoKey = "pedidoEnviadoPorSetor";
const localStoragePedidoStatusKey = "pedidoStatus";
const localStoragePedidoCarregadoKey = "pedidoCarregadoStatus";
const localStorageObservacaoCarregamentoKey = "observacaoCarregamento";
const localStoragePedidoMotoristaKey = "pedidoMotoristaDestino";

const localStorageNotaFiscalKey = "pedidoNotaFiscalNumero";

function getNotaFiscal(pedidoId) {
    const pedido = pedidos.find(p => p.id === pedidoId);
    const stored = localStorage.getItem(`${localStorageNotaFiscalKey}_${pedidoId}`);
    if (stored) {
        if (pedido) pedido.notaFiscal = parseInt(stored, 10);
        return parseInt(stored, 10);
    }
    return pedido && pedido.notaFiscal ? pedido.notaFiscal : null;
}

function setNotaFiscal(pedidoId, numero) {
    localStorage.setItem(`${localStorageNotaFiscalKey}_${pedidoId}`, String(numero));
    const pedidoIndex = pedidos.findIndex(p => p.id === pedidoId);
    if (pedidoIndex !== -1) {
        pedidos[pedidoIndex].notaFiscal = numero;
    }
}

function inicializarNotasFiscais() {
    let current = NF_RANGE_START;
    for (let i = 0; i < pedidos.length; i++) {
        const pid = pedidos[i].id;
        if (getNotaFiscal(pid) == null) {
            if (current > NF_RANGE_END) {
                console.warn("Intervalo de NF esgotado: alguns pedidos ficarão sem NF.");
                break;
            }
            setNotaFiscal(pid, current);
            current++;
        } else {
            const existing = getNotaFiscal(pid);
            if (existing >= NF_RANGE_START && existing <= NF_RANGE_END) {
                if (existing >= current) {
                    current = existing + 1;
            }
        }
    }
}
}

const NF_RANGE_START = 222000;
const NF_RANGE_END = 223000; 

let globalFiltroPedido = "";
let globalFiltroRota = "todas";
let globalFiltroStatus = "todas";
let pedidoUnicoVisualizado = null;

let previousGlobalFiltroRota = "todas";
let previousGlobalFiltroStatus = "todas";

let globalFiltroMaterial = "Todos";

let globalFiltroCarregamento = "todos";
let globalFiltroMotoristaDestino = null;

function getPedidoStatus(id) {
    return localStorage.getItem(`${localStoragePedidoStatusKey}_${id}`) ||
        (pedidos.find(p => p.id === id) ? pedidos.find(p => p.id === id).status : "Aguardando separação");
}

function setPedidoStatus(id, status) {
    localStorage.setItem(`${localStoragePedidoStatusKey}_${id}`, status);

    const pedidoIndex = pedidos.findIndex(p => p.id === id);
    if (pedidoIndex !== -1) {
        pedidos[pedidoIndex].status = status;
    }

    if (document.getElementById("filterScreen").style.display === "flex") {
        exibirResumoEmbarques();
    }
    if (document.getElementById("mainApp").style.display === "block") {
        renderizarPedidosPorSetor(pedidoUnicoVisualizado);
        exibirCotasPorEmbarque(pedidoUnicoVisualizado);
    }
    if (document.getElementById("loaderOrdersScreen").style.display === "flex") {
        renderizarPedidosCarregamento();
    }
}

function getPedidoCarregadoStatus(id) {
    return localStorage.getItem(`${localStoragePedidoCarregadoKey}_${id}`) || "pendente";
}

function setPedidoCarregadoStatus(id, status) {
    localStorage.setItem(`${localStoragePedidoCarregadoKey}_${id}`, status);
    renderizarPedidosCarregamento();
}

function getObservacaoCarregamento(id) {
    return localStorage.getItem(`${localStorageObservacaoCarregamentoKey}_${id}`) || "";
}

function setObservacaoCarregamento(id, observacao) {
    localStorage.setItem(`${localStorageObservacaoCarregamentoKey}_${id}`, observacao);
}

function getPedidoMotoristaDestino(id) {
    const pedido = pedidos.find(p => p.id === id);
    return localStorage.getItem(`${localStoragePedidoMotoristaKey}_${id}`) || (pedido ? pedido.motorista : null);
}

function setPedidoMotoristaDestino(id, motorista) {
    localStorage.setItem(`${localStoragePedidoMotoristaKey}_${id}`, motorista);
    const pedidoIndex = pedidos.findIndex(p => p.id === id);
    if (pedidoIndex !== -1) {
        pedidos[pedidoIndex].motorista = motorista;
    }
    renderizarPedidosCarregamento();
}

function getDadosPesoPedido(id) {
    return JSON.parse(localStorage.getItem(`${localStorageDadosPesoKey}_${id}`)) || {};
}

function setDadosPesoPedido(id, dados) {
    localStorage.setItem(`${localStorageDadosPesoKey}_${id}`, JSON.stringify(dados));
}

function gerarProximaNotaFiscal() {
    let maxNF = NF_RANGE_START - 1;
    for (let i = 0; i < pedidos.length; i++) {
        const nf = getNotaFiscal(pedidos[i].id);
        if (nf !== null && nf >= NF_RANGE_START && nf <= NF_RANGE_END) {
            if (nf > maxNF) maxNF = nf;
        }
    }
    const proxima = maxNF + 1;
    return (proxima <= NF_RANGE_END) ? proxima : null;
}

const _setDadosPesoPedidoOriginal = setDadosPesoPedido;
setDadosPesoPedido = function(id, dados) {
    _setDadosPesoPedidoOriginal(id, dados);
    const novaNF = gerarProximaNotaFiscal();
    if (novaNF !== null) {
        setNotaFiscal(id, novaNF);
    } else {
        console.warn("Faixa de NF esgotada ao redefinir pesos.");
    }
};



function getDadosCertificadoPedido(id) {
    return JSON.parse(localStorage.getItem(`${localStorageCertificadoKey}_${id}`)) || {};
}

function setDadosCertificadoPedido(id, dados) {
    localStorage.setItem(`${localStorageCertificadoKey}_${id}`, JSON.stringify(dados));
}

function isSetorEnviado(id, setor) {
    return localStorage.getItem(`${localStorageSetorEnviadoKey}_${id}_${setor.toLowerCase()}`) === "true";
}

function setSetorEnviado(id, setor) {
    localStorage.setItem(`${localStorageSetorEnviadoKey}_${id}_${setor.toLowerCase()}`, "true");
}

function verificarTodosSetoresEnviados(pedidoId) {
    const pedido = pedidos.find(p => p.id === pedidoId);
    if (!pedido) {
        return false;
    }

    for (const setor in pedido.produtos) {
        if (Object.prototype.hasOwnProperty.call(pedido.produtos, setor)) {
            if (!isSetorEnviado(pedidoId, setor)) {
                return false;
            }
        }
    }
    return true;
}

function showUserSelectionPage() {
    document.getElementById("userSelectionPage").style.display = "flex";
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("driverLoginPage").style.display = "none";
    document.getElementById("filterScreen").style.display = "none";
    document.getElementById("mainApp").style.display = "none";
    document.getElementById("materialSelectionPage").style.display = "none";
    document.getElementById("loaderOrdersScreen").style.display = "none";
    isMotoristaLogado = false;
    selectedUserType = null;
}

let selectedUserType = null;
let selectedMaterialType = null;

function selectUserType(type) {
    selectedUserType = type;
    document.querySelectorAll('#userSelectionPage .user-option').forEach(option => {
        option.classList.remove('selected');
    });
    document.querySelector(`#userSelectionPage .user-option[data-user-type="${type}"]`).classList.add('selected');
}

function continueToNextScreen() {
    if (selectedUserType === 'operador') {
        showOperatorLoginPage();
    } else if (selectedUserType === 'motorista') {
        showDriverLoginPage();
    } else {
        showModal("Atenção", "Por favor, selecione seu tipo de serviço para continuar.", `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
    }
}

function showUserSelectionPage() {
    hideAllScreens();
    document.getElementById("userSelectionPage").style.display = "flex";
}

function showOperatorLoginPage() {
    hideAllScreens();
    document.getElementById("loginPage").style.display = "flex";
}

function showDriverLoginPage() {
    hideAllScreens();
    document.getElementById("driverLoginPage").style.display = "flex";
}

function showMaterialSelectionPage() {
    hideAllScreens();
    document.getElementById("materialSelectionPage").style.display = "flex";
    selectedMaterialType = null;
    document.querySelectorAll('#materialSelectionPage .user-option').forEach(option => {
        option.classList.remove('selected');
    });
}

function showFilterScreen() {
    hideAllScreens();
    document.getElementById("filterScreen").style.display = "flex";
}

function showMainApp() {
    hideAllScreens();
    document.getElementById("mainApp").style.display = "block";
}

function hideAllScreens() {
    document.getElementById("userSelectionPage").style.display = "none";
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("driverLoginPage").style.display = "none";
    document.getElementById("filterScreen").style.display = "none";
    document.getElementById("mainApp").style.display = "none";
    document.getElementById("materialSelectionPage").style.display = "none";
    const rolePage = document.getElementById("operatorRoleSelectionPage");
    if (rolePage) rolePage.style.display = "none";
    const loaderPage = document.getElementById("loaderOrdersScreen");
    if (loaderPage) loaderPage.style.display = "none";
}

function fazerLogin() {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();
    const erro = document.getElementById("loginErro");

    const userIsOperator = ["admin", "operador1", "operador2", "operador3", "joao"].includes(user);

    if (usuarios[user] && usuarios[user] === pass && userIsOperator) {
        usuarioLogado = user;
        isMotoristaLogado = false;
        document.getElementById("loginPage").style.display = "none";

        if (usuarioLogado === "admin") {
            document.getElementById("resetDataButton").style.display = "block";
        } else {
            document.getElementById("resetDataButton").style.display = "none";
        }

        exibirResumoEmbarques();
        showFilterScreen();
        showMaterialSelectionPage();
    } else {
        erro.textContent = "Usuário ou senha incorretos ou não é um operador.";
    }
}

function fazerLoginMotorista() {
    const user = document.getElementById("driverUsername").value.trim();
    const pass = document.getElementById("driverPassword").value.trim();
    const erro = document.getElementById("driverLoginErro");

    const userIsDriver = ["carregador1", "carregador2", "carregador3"].includes(user);

    if (usuarios[user] && usuarios[user] === pass && userIsDriver) {
        usuarioLogado = user;
        isMotoristaLogado = true;
        document.getElementById("driverLoginPage").style.display = "none";
        document.getElementById("resetDataButton").style.display = "none";
        showLoadingOrdersScreen();
    } else {
        erro.textContent = "Usuário ou senha incorretos ou não é um Operador de Carregamento.";
    }
}

function selectMaterialType(type) {
    selectedMaterialType = type;
    document.querySelectorAll('#materialSelectionPage .user-option').forEach(option => {
        option.classList.remove('selected');
    });
    document.querySelector(`#materialSelectionPage .user-option[data-material-type="${type}"]`).classList.add('selected');
}

function continueToFilterScreen() {
    if (!selectedMaterialType) {
        showModal("Atenção", "Por favor, selecione um tipo de material para continuar.", `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
        return;
    }
    globalFiltroMaterial = selectedMaterialType;
    document.getElementById("materialSelectionPage").style.display = "none";
    showFilterScreen();
}

window.onload = showUserSelectionPage;

function showMainAppScreen() {
    document.getElementById("filterScreen").style.display = "none";
    document.getElementById("mainApp").style.display = "block";
    document.getElementById("welcomeMessage").textContent = `Bem-vindo, ${usuarioLogado}!`;
    document.getElementById("mainAppStatusFilters").style.display = isMotoristaLogado ? "none" : "flex";
    document.getElementById("backToAllOrdersButton").style.display = (pedidoUnicoVisualizado !== null) ? "block" : "none";

    renderizarPedidosPorSetor(pedidoUnicoVisualizado);

    const statusButtons = document.querySelectorAll('#mainAppStatusFilters button');
    statusButtons.forEach(button => {
        if (button.dataset.statusFilter === globalFiltroStatus) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

}

function showFilterScreen() {
    document.getElementById("mainApp").style.display = "none";
    document.getElementById("filterScreen").style.display = "flex";
    exibirResumoEmbarques();
    document.getElementById("backToAllOrdersButton").style.display = "none";
    document.getElementById("quotationsByEmbarque").style.display = "none";

    const summaryTitle = document.querySelector("#filterScreen h2");
    summaryTitle.textContent = isMotoristaLogado ? `Olá, ${usuarioLogado.toUpperCase()}!` : "Visualizar Pedidos";
}

function logout() {
    usuarioLogado = null;
    selectedUserType = null;
    isMotoristaLogado = false;
    globalFiltroPedido = "";
    globalFiltroRota = "todas";
    globalFiltroStatus = "todas";
    globalFiltroMaterial = "Todos";
    selectedMaterialType = null;
    pedidoUnicoVisualizado = null;
    globalFiltroCarregamento = "todos";
    globalFiltroMotoristaDestino = null;
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("loginErro").textContent = "";
    document.getElementById("driverUsername").value = "";
    document.getElementById("driverPassword").value = "";
    document.getElementById("driverLoginErro").textContent = "";
    showUserSelectionPage();
}

function renderizarPedidosPorSetor(idPedidoEspecifico = null) {
    const pedidosPorSetorDiv = document.getElementById("pedidosPorSetor");
    pedidosPorSetorDiv.innerHTML = "";

    let pedidosFiltrados = pedidos.filter(pedido => {
        const statusCorresponde = globalFiltroStatus === "todas" || getPedidoStatus(pedido.id) === globalFiltroStatus;
        const rotaCorresponde = globalFiltroRota === "todas" || pedido.embarque === globalFiltroRota;
        const pedidoCorresponde = !idPedidoEspecifico || pedido.id === idPedidoEspecifico;

        const pertenceAoOperador = ["admin", "operador1", "operador2", "operador3", "joao"].includes(usuarioLogado.toLowerCase());

        const materialCorresponde = globalFiltroMaterial === "Todos" ||
            (globalFiltroMaterial === "Chapa" && pedido.produtos["Chapa"]) ||
            (globalFiltroMaterial === "Viga" && pedido.produtos["Viga"]) ||
            (globalFiltroMaterial === "Tubo" && pedido.produtos["Tubo"]);

        return statusCorresponde && rotaCorresponde && pedidoCorresponde && pertenceAoOperador && materialCorresponde;
    });

    if (pedidosFiltrados.length === 0) {
        pedidosPorSetorDiv.innerHTML = "<p style='text-align: center; color: var(--text-secondary); padding: 20px;'>Nenhum pedido encontrado com os filtros aplicados.</p>";
        return;
    }

    pedidosFiltrados.forEach(pedido => {
        const statusAtual = getPedidoStatus(pedido.id);
        const isPedidoSeparado = statusAtual === "Pedido separado";

        let statusClass;
        if (statusAtual === "Aguardando separação") {
            statusClass = "status-aguardando-separacao";
        } else if (statusAtual === "Em separação") {
            statusClass = "status-em-separacao";
        } else if (statusAtual === "Pedido separado") {
            statusClass = "status-pedido-separado";
        } else {
            statusClass = "";
        }

        const pedidoCard = document.createElement("div");
        pedidoCard.classList.add("card");
        pedidoCard.setAttribute("data-pedido-id", pedido.id);
        pedidoCard.innerHTML = `
            <div class="pedido-header">
                <h3>COT_${pedido.id} - ${pedido.cliente}</h3>
                <p>Endereço: ${pedido.endereco}</p>
                <p>NF-e: ${getNotaFiscal(pedido.id) ?? "—"}</p>
                <p>Embarque: ${pedido.embarque}</p>
                <p class="status-pedido ${statusClass}">Status: ${statusAtual}</p>
            </div>
        `;

        const sortedSectors = Object.keys(pedido.produtos).sort();

        const isAdmin = usuarioLogado.toLowerCase() === "admin";
        sortedSectors.forEach(setor => {
            const isUserSetor = usuarioLogado.toLowerCase() === setor.toLowerCase();
            const isSetorAlreadySent = isSetorEnviado(pedido.id, setor);

            if (globalFiltroMaterial !== "Todos" && setor !== globalFiltroMaterial) {
                return;
            }

            const userCanViewSetor = true;

            if (!userCanViewSetor) {
                return;
            }

            const setorDiv = document.createElement("div");
            setorDiv.innerHTML = `<h4>Setor: ${setor}</h4>`;

            pedido.produtos[setor].forEach(produto => {
                const peso = getDadosPesoPedido(pedido.id)[produto] !== undefined ? getDadosPesoPedido(pedido.id)[produto] : '';
                const certificado = getDadosCertificadoPedido(pedido.id)[produto] !== undefined ? getDadosCertificadoPedido(pedido.id)[produto] : '';
                const botoesDesabilitados = statusAtual !== "Em separação";
                const fardosExistem = localStorage.getItem(`fardos_${pedido.id}_${setor}_${produto}`) &&
                                      JSON.parse(localStorage.getItem(`fardos_${pedido.id}_${setor}_${produto}`)).length > 0;

                setorDiv.innerHTML += `
                    <div class="item">
                        <span>${produto}:</span>
                        <div>
                            <input
                                type="number"
                                step="5"
                                placeholder="Peso (kg)*"
                                value="${peso}"
                                id="peso-${pedido.id}-${setor}-${produto.replace(/\s/g, '-')}"
                                ${isPedidoSeparado || isSetorAlreadySent || statusAtual !== "Em separação" ? 'disabled' : ''}
                            />
                            <input
                                type="text"
                                placeholder="Certificado*"
                                value="${certificado}"
                                id="certificado-${pedido.id}-${setor}-${produto.replace(/\s/g, '-')}"
                                ${isPedidoSeparado || isSetorAlreadySent || statusAtual !== "Em separação" ? 'disabled' : ''}
                                style="margin-left: 10px; width: 220px;"
                            />
                            
                            <button style="margin-left:5px; padding: 8px 12px; border: none; border-radius: 4px; background-color: #3498db; color: white; cursor: pointer; font-weight: 500;" 
                                    onclick="abrirTelaFatiarFardos(${pedido.id}, '${setor}', '${produto}')"
                                    ${botoesDesabilitados ? 'disabled' : ''}>Fatiar Fardos</button>
                            
                            <button style="margin-left:5px; padding: 8px 12px; border: none; border-radius: 4px; background-color: #2ecc71; color: white; cursor: pointer; font-weight: 500;" 
                                    onclick="imprimirEtiquetasFardos(${pedido.id}, '${setor}', '${produto}')"
                                    ${botoesDesabilitados || !fardosExistem ? 'disabled' : ''}>Imprimir Fardos</button>
                        </div>
                    </div>
                `;
            });

            const buttonRow = document.createElement("div");
            buttonRow.classList.add("buttons-row");

            const btnIniciarSeparacao = document.createElement("button");
            btnIniciarSeparacao.textContent = `Iniciar Separação (${setor})`;
            btnIniciarSeparacao.classList.add("btn-iniciar-separacao");
            btnIniciarSeparacao.disabled = isPedidoSeparado || isSetorAlreadySent || statusAtual !== "Aguardando separação";
            btnIniciarSeparacao.onclick = () => {
                confirmarAcao(
                    `Iniciar Separação para ${setor}?`,
                    `Você está prestes a iniciar a separação do setor de ${setor} para a COT_${pedido.id}. O status do pedido será atualizado para "Em separação". Confirma?`,
                    () => {
                        setPedidoStatus(pedido.id, "Em separação");
                        renderizarPedidosPorSetor(idPedidoEspecifico);
                    }
                );
            };
            buttonRow.appendChild(btnIniciarSeparacao);

            const btnSalvarPesos = document.createElement("button");
            btnSalvarPesos.textContent = `Salvar Pesos (${setor})`;
            btnSalvarPesos.classList.add("btn-salvar-peso");
            btnSalvarPesos.disabled = isPedidoSeparado || isSetorAlreadySent || statusAtual !== "Em separação";
            btnSalvarPesos.onclick = () => salvarTodosPesosDoSetor(pedido.id, setor, pedido.produtos[setor], idPedidoEspecifico);
            buttonRow.appendChild(btnSalvarPesos);

            const btnEnviar = document.createElement("button");
            btnEnviar.textContent = `Enviar (${setor})`;
            btnEnviar.classList.add("btn-enviar");
            btnEnviar.disabled = isPedidoSeparado || isSetorAlreadySent || statusAtual !== "Em separação";
            btnEnviar.onclick = () => {
                let allWeightsEntered = true;
                pedido.produtos[setor].forEach(produto => {
                    const pesoInput = document.getElementById(`peso-${pedido.id}-${setor}-${produto.replace(/\s/g, '-')}`);
                    const certificadoInput = document.getElementById(`certificado-${pedido.id}-${setor}-${produto.replace(/\s/g, '-')}`);
                    if (pesoInput && (pesoInput.value === '' || parseFloat(pesoInput.value) <= 0)) {
                        allWeightsEntered = false;
                    }
                    if (certificadoInput && certificadoInput.value.trim() === '') {
                        allWeightsEntered = false;
                    }
                });

                if (!allWeightsEntered) {
                    showModal(
                        "Erro de Validação",
                        "Por favor, preencha o peso e o certificado para todos os produtos antes de enviar o setor.",
                        `<button class="modal-button ok" onclick="closeModal()">OK</button>`
                    );
                    return;
                }

                confirmarAcao(
                    `Confirmar Envio para ${setor}?`,
                    `Você está prestes a finalizar o envio do setor de ${setor} para a COT_${pedido.id}. Confirma?`,
                    () => {
                        setSetorEnviado(pedido.id, setor);
                        if (verificarTodosSetoresEnviados(pedido.id)) {
                            setPedidoStatus(pedido.id, "Pedido separado");

                            showModal(
                                "Pedido Completo!",
                                `Todos os setores da COT_${pedido.id} foram enviados, e o status foi atualizado para "Pedido Separado".`,
                                `<button class="modal-button ok" onclick="closeModal()">OK</button>`
                            );
                        } else {
                            showModal(
                                "Setor Enviado!",
                                `O setor de ${setor} da COT_${pedido.id} foi marcado como enviado. Outros setores ainda estão pendentes.`,
                                `<button class="modal-button ok" onclick="closeModal()">OK</button>`
                            );
                        }
                        renderizarPedidosPorSetor(idPedidoEspecifico);
                    }
                );
            };
            buttonRow.appendChild(btnEnviar);
            setorDiv.appendChild(buttonRow);
            pedidoCard.appendChild(setorDiv);
        });


        if (isPedidoSeparado) {
             const btnImprimirEtiquetas = document.createElement("button");
             btnImprimirEtiquetas.textContent = "Imprimir Etiquetas";
             btnImprimirEtiquetas.classList.add("btn-print-etiqueta");
             btnImprimirEtiquetas.onclick = () => imprimirEtiquetas(pedido.id);
             pedidoCard.appendChild(btnImprimirEtiquetas);
         }

        pedidosPorSetorDiv.appendChild(pedidoCard);
    });
    document.getElementById("pedidosPorSetor").scrollTop = 0;
}

function salvarTodosPesosDoSetor(pedidoId, setor, produtosDoSetor, idPedidoEspecifico) {
    let dadosPeso = getDadosPesoPedido(pedidoId);
    let dadosCertificado = getDadosCertificadoPedido(pedidoId);
    let inputsAtualizados = 0;
    let validationError = false;

    produtosDoSetor.forEach(produto => {
        const pesoInput = document.getElementById(`peso-${pedidoId}-${setor}-${produto.replace(/\s/g, '-')}`);
        const certificadoInput = document.getElementById(`certificado-${pedidoId}-${setor}-${produto.replace(/\s/g, '-')}`);

        if (pesoInput && !pesoInput.disabled) {
            const peso = parseFloat(pesoInput.value);
            if (isNaN(peso) || peso <= 0) {
                validationError = true;
            }
            if (dadosPeso[produto] === undefined || dadosPeso[produto] !== peso) {
                dadosPeso[produto] = peso;
                inputsAtualizados++;
            }
        }

        if (certificadoInput && !certificadoInput.disabled) {
            const certificado = certificadoInput.value.trim();
            if (certificado === '') {
                validationError = true;
            }
            if (dadosCertificado[produto] === undefined || dadosCertificado[produto] !== certificado) {
                dadosCertificado[produto] = certificado;
                inputsAtualizados++;
            }
        }
    });

    if (validationError) {
        showModal(
            "Erro de Validação",
            "Por favor, insira um peso válido (número maior que zero) e um certificado para todos os produtos antes de salvar.",
            `<button class="modal-button ok" onclick="closeModal()">OK</button>`
        );
        return;
    }

    if (inputsAtualizados > 0) {
        setDadosPesoPedido(pedidoId, dadosPeso);
        setDadosCertificadoPedido(pedidoId, dadosCertificado);
        showModal(
            "Pesos Salvos!",
            `Os pesos e certificados para o setor ${setor} da COT_${pedidoId} foram salvos com sucesso.`,
            `<button class="modal-button ok" onclick="closeModal()">OK</button>`
        );
    } else {
        showModal(
            "Nenhuma Alteração!",
            "Nenhum peso ou certificado foi alterado ou não há inputs para salvar neste setor.",
            `<button class="modal-button ok" onclick="closeModal()">OK</button>`
        );
    }
    renderizarPedidosPorSetor(idPedidoEspecifico);
}

function exibirResumoEmbarques() {
    const embarqueSummaryDiv = document.getElementById("embarqueSummary");
    embarqueSummaryDiv.innerHTML = "";
    const resumo = {};

    let pedidosFiltrados;
    pedidosFiltrados = pedidos.filter(p => true);

    const regionColors = {
        'Cariacica, ES': 'red',
        'Fundão, ES': 'red',
        'Guarapari, ES': 'red',
        'Serra, ES': 'red',
        'Vitória, ES': 'red',
        'Vila Velha, ES': 'red',
        'Viana, ES': 'red',
        'Linhares, ES': 'blue',
        'Colatina, ES': 'green',
        'Aracruz, ES': 'yellow',
        'São Mateus, ES': 'teal',
        'Cachoeiro de Itapemirim, ES': 'cyan',
        'Castelo, ES': 'indigo'
    };

    pedidosFiltrados.forEach(pedido => {
        const status = getPedidoStatus(pedido.id);
        const materialCorresponde = globalFiltroMaterial === "Todos" || Object.keys(pedido.produtos).includes(globalFiltroMaterial);

        if (status !== "Pedido separado" && materialCorresponde) {
            const embarque = pedido.embarque;
            if (!resumo[embarque]) {
                resumo[embarque] = { count: 0, color: '' };

                for (const [region, color] of Object.entries(regionColors)) {
                    if (pedido.endereco.includes(region)) {
                        resumo[embarque].color = color;
                        break;
                    }
                }

                if (!resumo[embarque].color) {
                    const defaultColors = ['blue', 'green', 'yellow', 'teal', 'pink', 'purple', 'orange', 'cyan'];
                    resumo[embarque].color = defaultColors[Object.keys(resumo).length % defaultColors.length];
                }
            }
            resumo[embarque].count++;
        }
    });

    const embarquesOrdenados = Object.keys(resumo).sort();

    if (embarquesOrdenados.length === 0) {
        embarqueSummaryDiv.innerHTML = "<p style='text-align: center; color: var(--text-secondary);'>Nenhum pedido pendente por localidade.</p>";
        document.querySelector('.summary-section .filter-box-button-bottom').style.display = 'none';
        return;
    } else {
        document.querySelector('.summary-section .filter-box-button-bottom').style.display = 'block';
    }

    embarquesOrdenados.forEach(embarque => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("summary-item");

        const colorClass = `embarque-${resumo[embarque].color}`;
        itemDiv.classList.add(colorClass);

        itemDiv.innerHTML = `
            <span>Rota ${embarque}: ${resumo[embarque].count} pedidos</span>
            <button onclick="viewPedidosFromSummary('${embarque}')"
                    style="padding: 8px 16px; border-radius: 4px; border: none;
                          font-weight: 500; cursor: pointer; transition: all 0.3s ease;">
                Ver Pedidos
            </button>
        `;
        embarqueSummaryDiv.appendChild(itemDiv);
    });
}

function viewPedidosFromSummary(embarque) {
    globalFiltroRota = (embarque === '') ? "todas" : embarque;
    globalFiltroStatus = "todas";
    pedidoUnicoVisualizado = null;

    showMainAppScreen();
}

function goBackToFilterScreen() {
    showFilterScreen();
}

function viewSingleOrder(pedidoId) {
    pedidoUnicoVisualizado = pedidoId;
    globalFiltroRota = "todas";
    globalFiltroStatus = "todas";
    showMainAppScreen();
}

function goBackToAllOrders() {
    pedidoUnicoVisualizado = null;
    globalFiltroRota = previousGlobalFiltroRota;
    globalFiltroStatus = previousGlobalFiltroStatus;
    showMainAppScreen();
}

function showModal(title, message, buttonsHtml) {
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalMessage").innerHTML = message;
    document.getElementById("modalButtons").innerHTML = buttonsHtml;
    document.getElementById("modalOverlay").classList.add("active");
}

function closeModal() {
    document.getElementById("modalOverlay").classList.remove("active");
}

function confirmarAcao(title, message, onConfirm) {
    window._onConfirmAction = onConfirm;
    showModal(
        title,
        message,
        `
        <button class="modal-button cancel" onclick="closeModal()">Cancelar</button>
        <button class="modal-button confirm" onclick="closeModal(); window._onConfirmAction();">Confirmar</button>
        `
    );
}

function aplicarFiltroStatusPrincipal(status, clickedButton) {
    globalFiltroStatus = status;
    const buttons = document.querySelectorAll('#mainAppStatusFilters button');
    buttons.forEach(button => button.classList.remove('active'));
    clickedButton.classList.add('active');
    renderizarPedidosPorSetor(pedidoUnicoVisualizado);
}

function exibirCotasPorEmbarque(pedidoId = null) {
    const quotationsSection = document.getElementById("quotationsByEmbarque");
    const quotationListDiv = document.getElementById("quotationList");
    quotationListDiv.innerHTML = "";

    if (!pedidoId || pedidoId === null) {
        quotationsSection.style.display = "none";
        return;
    }

    const pedido = pedidos.find(p => p.id === pedidoId);
    if (!pedido) {
        quotationsSection.style.display = "none";
        return;
    }

    quotationsSection.style.display = "none";
}

function confirmResetAllData() {
    showModal(
        "Zerar Todos os Dados?",
        "Esta ação irá reiniciar todos os pesos lançados, status de separação e envio por setor para TODOS os pedidos. Deseja realmente prosseguir?",
        `
        <button class="modal-button cancel" onclick="closeModal()">Cancelar</button>
        <button class="modal-button confirm" style="background-color: var(--red-error);" onclick="resetAllOrderData()">Sim, Zerar Tudo</button>
        `
    );
}

function resetAllOrderData() {
    closeModal();

    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith(localStorageDadosPesoKey) ||
            key.startsWith(localStorageCertificadoKey) ||
            key.startsWith(localStorageSetorEnviadoKey) ||
            key.startsWith(localStoragePedidoStatusKey) ||
            key.startsWith(localStoragePedidoCarregadoKey) ||
            key.startsWith(localStorageObservacaoCarregamentoKey) ||
            key.startsWith(localStoragePedidoMotoristaKey)) {
            keysToRemove.push(key);
        }
    }
    keysToRemove.forEach(key => localStorage.removeItem(key));

    pedidos.forEach(p => {
        p.status = "Aguardando separação";
        const originalPedido = pedidos.find(op => op.id === p.id);
        if (originalPedido) {
            p.motorista = originalPedido.motorista;
        }
    });

    showModal(
        "Dados Zerados!",
        "Todos os dados de peso, envio por setor e status de separação foram reiniciados. Você será redirecionado para a tela de filtros.",
        `<button class="modal-button ok" onclick="closeModal(); goBackToFilterScreen();">Ok</button>`
    );
}

document.addEventListener("DOMContentLoaded", () => {
    inicializarNotasFiscais();
    showUserSelectionPage();
});

function showLoadingOrdersScreen() {
    hideAllScreens();
    document.getElementById("loaderOrdersScreen").style.display = "flex";
    renderizarPedidosCarregamento();
}

function aplicarFiltroCarregamento(filtro, clickedButton) {
    globalFiltroCarregamento = filtro;
    const buttons = document.querySelectorAll('#loaderOrdersScreen .loader-status-filters button');
    buttons.forEach(button => button.classList.remove('active'));
    clickedButton.classList.add('active');
    renderizarPedidosCarregamento();
}

function renderizarPedidosCarregamento() {
    const listDiv = document.getElementById("loadingOrdersList");
        listDiv.innerHTML = "";

    let pedidosParaCarregar = pedidos.filter(p => {
        const pedidoStatus = getPedidoStatus(p.id);
        const carregadoStatus = getPedidoCarregadoStatus(p.id);
        const motoristaDestino = getPedidoMotoristaDestino(p.id);

        if (globalFiltroCarregamento === 'todos') {
            return true;
        } else if (globalFiltroCarregamento === 'meus') {
            return motoristaDestino === usuarioLogado;
        }
            return false;
    });

        if (pedidosParaCarregar.length === 0) {
            listDiv.innerHTML = "<p style='text-align:center; color:var(--text-secondary)'>Nenhum pedido encontrado com os filtros aplicados.</p>";
            return;
        }

        const pedidosPorEmbarque = pedidosParaCarregar.reduce((acc, pedido) => {
            if (!acc[pedido.embarque]) {
                acc[pedido.embarque] = [];
            }
            acc[pedido.embarque].push(pedido);
            return acc;
        }, {});

        const embarquesOrdenados = Object.keys(pedidosPorEmbarque).sort();

        embarquesOrdenados.forEach(embarque => {
            const embarqueGroupDiv = document.createElement("div");
            embarqueGroupDiv.classList.add("embarque-group");
            embarqueGroupDiv.innerHTML = `<h3>Embarque: ${embarque}</h3>`;

            pedidosPorEmbarque[embarque].forEach(pedido => {
                const pedidoCarregadoStatus = getPedidoCarregadoStatus(pedido.id);
                const observacaoCarregamento = getObservacaoCarregamento(pedido.id);
                const pedidoStatus = getPedidoStatus(pedido.id);
                const motoristaDestino = getPedidoMotoristaDestino(pedido.id);

                let statusClass = '';
                let statusText = '';

                if (pedidoStatus === "Aguardando separação" || pedidoStatus === "Em separação") {
                    statusClass = "status-aguardando-separacao";
                    statusText = pedidoStatus;
                } else if (pedidoCarregadoStatus === 'carregado') {
                    statusClass = 'status-carregado';
                    statusText = 'Carregado';
                } else if (pedidoCarregadoStatus === 'nao-carregado') {
                    statusClass = 'status-nao-carregado';
                    statusText = 'Não Carregado';
                } else {
                    statusClass = 'status-pedido-separado';
                    statusText = 'Aguardando carregamento';
                }

                const card = document.createElement("div");
                card.classList.add("card");
                card.setAttribute("data-pedido-id", pedido.id);
                card.innerHTML = `
                    <div class="pedido-header">
                        <h3>COT_${pedido.id} - ${pedido.cliente}</h3>
                        <p>Endereço: ${pedido.endereco}</p>
                <p>NF-e: ${getNotaFiscal(pedido.id) ?? "—"}</p>
                        <p>Destinado a: ${motoristaDestino ? motoristaDestino.toUpperCase() : 'Não Destinado'}</p>
                        <p class="status-pedido ${statusClass}">Status: ${statusText}</p>
                    </div>
                `;

                Object.keys(pedido.produtos).forEach(setor => {
                    const setorDiv = document.createElement("div");
                    setorDiv.innerHTML = `<h4>Setor: ${setor}</h4>`;
                    pedido.produtos[setor].forEach(item => {
                        const itemId = `item-${pedido.id}-${setor}-${item.replace(/\s/g, '-')}`;
                        const isChecked = localStorage.getItem(itemId) === 'true';
                        setorDiv.innerHTML += `
                            <div class="item">
                                <span>${item}</span>
                                <input type="checkbox" id="${itemId}" ${isChecked ? 'checked' : ''}
                                    ${pedidoCarregadoStatus !== 'pendente' || pedidoStatus !== "Pedido separado" ? 'disabled' : ''}>
                            </div>
                        `;
                    });
                    card.appendChild(setorDiv);
                });

                const loaderButtonsDiv = document.createElement("div");
                loaderButtonsDiv.classList.add("loader-buttons");

                if (usuarioLogado === "carregador1") {
                    const btnDestinar = document.createElement("button");
                    btnDestinar.textContent = "Destinar Cotação para carregamento.";
                    btnDestinar.classList.add("btn-destinar");
                    btnDestinar.onclick = () => showDestinarCarregamentoModal(pedido.id);
                    loaderButtonsDiv.appendChild(btnDestinar);
                }

                if (pedidoStatus === "Pedido separado" && (motoristaDestino === usuarioLogado || !motoristaDestino)) {
                    const btnCarregado = document.createElement("button");
                    btnCarregado.textContent = "Marcar como Carregado";
                    btnCarregado.classList.add("btn-carregado");
                    btnCarregado.disabled = pedidoCarregadoStatus !== 'pendente';
                    btnCarregado.onclick = () => marcarPedidoCarregado(pedido.id);
                    loaderButtonsDiv.appendChild(btnCarregado);

                    const btnNaoCarregado = document.createElement("button");
                    btnNaoCarregado.textContent = "Marcar como Não Carregado";
                    btnNaoCarregado.classList.add("btn-nao-carregado");
                    btnNaoCarregado.disabled = pedidoCarregadoStatus !== 'pendente';
                    btnNaoCarregado.onclick = () => showObservacaoModal(pedido.id);
                    loaderButtonsDiv.appendChild(btnNaoCarregado);
                } else if (pedidoStatus !== "Pedido separado") {
                    const infoText = document.createElement("p");
                    infoText.textContent = "Aguardando separação para carregamento.";
                    infoText.style.color = "var(--text-secondary)";
                    infoText.style.fontSize = "14px";
                    infoText.style.textAlign = "center";
                    loaderButtonsDiv.appendChild(infoText);
                }

                if (pedidoCarregadoStatus === 'carregado') {
                    const btnImprimir = document.createElement("button");
                    btnImprimir.textContent = "Imprimir Pedido";
                    btnImprimir.classList.add("btn-print");
                    btnImprimir.onclick = () => gerarPDF(pedido.id);
                    loaderButtonsDiv.appendChild(btnImprimir);
                }

                card.appendChild(loaderButtonsDiv);

                if (pedidoCarregadoStatus === 'nao-carregado' && observacaoCarregamento) {
                    const obsDiv = document.createElement("div");
                    obsDiv.classList.add("observacao-nao-carregado");
                    obsDiv.style.display = 'block';
                    obsDiv.innerHTML = `<p><strong>Observação:</strong> ${observacaoCarregamento}</p>`;
                    card.appendChild(obsDiv);
                }

                embarqueGroupDiv.appendChild(card);
        });
            listDiv.appendChild(embarqueGroupDiv);
    });
}

function toggleItemCarregado(pedidoId, setor, itemSlug) {
    const itemId = `item-${pedidoId}-${setor}-${itemSlug}`;
    const checkbox = document.getElementById(itemId);
    localStorage.setItem(itemId, checkbox.checked ? 'true' : 'false');
}

function marcarPedidoCarregado(pedidoId) {
    const pedido = pedidos.find(p => p.id === pedidoId);
    let allItemsChecked = true;
    if (pedido) {
        for (const setor in pedido.produtos) {
            pedido.produtos[setor].forEach(item => {
                const itemId = `item-${pedido.id}-${setor}-${item.replace(/\s/g, '-')}`;

                const checkbox = document.getElementById(itemId);
                if (checkbox && !checkbox.enabled && localStorage.getItem(itemId) !== 'true') {
                    allItemsChecked = false;
                }
            });
        }
    }

    confirmarAcao(
        "Confirmar Carregamento?",
        `Você está prestes a marcar a COT_${pedidoId} como "Carregado". Confirma?`,
        () => {
            setPedidoCarregadoStatus(pedidoId, "carregado");
            setObservacaoCarregamento(pedidoId, "");
            showModal("Sucesso", `Pedido COT_${pedidoId} marcado como "Carregado".`, `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
        }
    );
}

function showObservacaoModal(pedidoId) {
    const currentObs = getObservacaoCarregamento(pedidoId);
    showModal(
        "Motivo Não Carregado",
        `
        <p>Por favor, informe o motivo pelo qual a COT_${pedidoId} não foi carregada:</p>
        <textarea id="observacaoNaoCarregado" placeholder="Descreva o motivo..." rows="4">${currentObs}</textarea>
        `,
        `
        <button class="modal-button cancel" onclick="closeModal()">Cancelar</button>
        <button class="modal-button confirm" onclick="salvarObservacaoNaoCarregado(${pedidoId})">Salvar</button>
        `
    );
}

function salvarObservacaoNaoCarregado(pedidoId) {
    const observacao = document.getElementById("observacaoNaoCarregado").value.trim();
    if (observacao === "") {
        showModal("Atenção", "Por favor, preencha o motivo para não carregamento.", `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
        return;
    }
    setObservacaoCarregamento(pedidoId, observacao);
    setPedidoCarregadoStatus(pedidoId, "nao-carregado");
    closeModal();
    showModal("Sucesso", `Pedido COT_${pedidoId} marcado como "Não Carregado" com observação.`, `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
}

function showDestinarCarregamentoModal(pedidoId) {
    const motoristasCarregamento = Object.keys(usuarios).filter(user => user.startsWith('carregador'));
    let optionsHtml = motoristasCarregamento.map(motorista => `<option value="${motorista}">${motorista.toUpperCase()}</option>`).join('');

    const currentMotorista = getPedidoMotoristaDestino(pedidoId);

    showModal(
        "Destinar Carregamento",
        `
        <p>Selecione o Carregador para destinar o carregamento da COT_${pedidoId}:</p>
        <select id="selectMotoristaDestino" style="width: 100%; padding: 10px; margin-top: 15px; border-radius: 5px; border: 1px solid var(--medium-gray);">
            <option value="">Não Destinado</option>
            ${optionsHtml}
        </select>
        `,
        `
        <button class="modal-button cancel" onclick="closeModal()">Cancelar</button>
        <button class="modal-button confirm" onclick="destinarCarregamento(${pedidoId})">Destinar</button>
        `
    );

    if (currentMotorista) {
        document.getElementById('selectMotoristaDestino').value = currentMotorista;
    }
}

function destinarCarregamento(pedidoId) {
    const selectElement = document.getElementById('selectMotoristaDestino');
    const motoristaSelecionado = selectElement.value;

    setPedidoMotoristaDestino(pedidoId, motoristaSelecionado);
    closeModal();
    showModal("Sucesso", `Carregamento da COT_${pedidoId} destinado a ${motoristaSelecionado ? motoristaSelecionado.toUpperCase() : 'Ninguém'}.`, `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
}

function gerarPDF(pedidoId) {
    const pedido = getPedidoById(pedidoId);
    if (!pedido) {
        showModal("Erro", "Pedido não encontrado.", `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
        return;
    }

    const dadosPeso = getDadosPesoPedido(pedidoId);
    const dadosCertificado = getDadosCertificadoPedido(pedidoId);

    let content = `
        <h1>Relatório de Carregamento - COT_${pedido.id}</h1>
        <p><strong>Cliente:</strong> ${pedido.cliente}</p>
        <p><strong>NF-e:</strong> ${getNotaFiscal(pedido.id) ?? "—"}</p>
        <p><strong>Endereço:</strong> ${pedido.endereco}</p>
        <hr>
        <h2>Materiais Carregados:</h2>
    `;

    for (const setor in pedido.produtos) {
        content += `<h3>Setor: ${setor}</h3><ul>`;
        pedido.produtos[setor].forEach(produto => {
            const peso = dadosPeso[produto] || 'Não registrado';
            const certificado = dadosCertificado[produto] || 'Não aplicável';
            content += `
                <li>
                    <strong>${produto}</strong><br>
                    - Peso: ${peso} Kg<br>
                    - Certificado: ${certificado}
                </li>
            `;
        });
        content += `</ul>`;
    }

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
            <head>
                <title>Relatório COT_${pedido.id}</title>
                <style>
                    body { font-family: Arial; margin: 20px; }
                    h1 { color: #2c3e50; }
                    h2 { border-bottom: 1px solid #eee; padding-bottom: 5px; }
                    ul { list-style-type: none; padding-left: 0; }
                    li { margin-bottom: 10px; padding: 8px; background: #f9f9f9; }
                </style>
            </head>
            <body>${content}</body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

function getPedidoById(pedidoId) {
    return pedidos.find(p => p.id === pedidoId);
}

function salvarDadosPesoCertificado(pedidoId, produto, peso, certificado) {
    const pesos = JSON.parse(localStorage.getItem('pesosPedidos')) || {};
    const certificados = JSON.parse(localStorage.getItem('certificadosPedidos')) || {};

    if (!pesos[pedidoId]) pesos[pedidoId] = {};
    if (!certificados[pedidoId]) certificados[pedidoId] = {};

    pesos[pedidoId][produto] = peso;
    certificados[pedidoId][produto] = certificado;

    localStorage.setItem('pesosPedidos', JSON.stringify(pesos));
    localStorage.setItem('certificadosPedidos', JSON.stringify(certificados));
}

function imprimirEtiquetas(pedidoId) {
    const baseUrl = "https://github.com/arthurbritol/etiquetas/visualizador.html";


    const pedido = getPedidoById(pedidoId);
    if (!pedido) {
        showModal("Erro", "Pedido não encontrado.", '<button class="modal-button ok" onclick="closeModal()">OK</button>');
        return;
    }

    const dadosPeso = getDadosPesoPedido(pedidoId);
    const dadosCertificado = getDadosCertificadoPedido(pedidoId);
    const notaFiscalNumero = getNotaFiscal(pedido.id) ?? "—";

    let totalItens = 0;
    for (const setor in pedido.produtos) {
        totalItens += pedido.produtos[setor].length;
    }

    const qrCodeData = [];

    let etiquetaHTML = `
        <html>
        <head>
            <title>Etiquetas COT_${pedido.id}</title>
            <script src="https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js"><\/script>
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
                .etiqueta {
                    width: 101.6mm; height: 76.2mm; border: 1.5px solid black; padding: 2mm; box-sizing: border-box;
                    page-break-inside: avoid; margin-bottom: 5mm; display: grid;
                    grid-template-columns: 1.2fr 1.3fr 0.8fr; grid-template-rows: auto auto auto auto 1fr auto;
                    gap: 1.5mm; font-size: 8pt;
                }
                .box { border: 1px solid black; padding: 1mm; }
                .label { font-weight: bold; }
                .cliente { grid-column: 1 / 3; grid-row: 1; font-size: 22pt; font-weight: bold; align-self: end; }
                .itens { grid-column: 3; grid-row: 1; text-align: center; font-size: 9pt; height: min-content; align-self: end;}
                .local-entrega { grid-column: 1 / 4; grid-row: 2; }
                .tipo-material { grid-column: 1 / 4; grid-row: 3; font-size: 9pt; }
                .nf-peso-stack { grid-column: 1 / 3; grid-row: 4; display: flex; gap: 1.5mm; }
                .nf-peso-stack > div { flex-grow: 1; text-align: center; font-size: 11pt; font-weight: bold; }
                .qr-code { grid-column: 1; grid-row: 5; display: flex; align-items: center; justify-content: center; overflow: hidden; }
                .qr-code img, .qr-code canvas { width: 100%; height: 100%; object-fit: contain; }
                .details-stack { grid-column: 2; grid-row: 5; display: flex; flex-direction: column; gap: 1.5mm; font-size: 8pt; }
                .logo { grid-column: 3; grid-row: 4 / 6; display: flex; align-items: center; justify-content: center; }
                .logo img { width: 165%; transform: rotate(90deg); }
                .slogan { grid-column: 1 / 4; grid-row: 6; text-align: center; font-weight: bold; padding-top: 1mm; font-size: 9pt; }
            </style>
        </head>
        <body>
    `;

    let contadorItens = 0;
    for (const setor in pedido.produtos) {
        pedido.produtos[setor].forEach(produto => {
            contadorItens++;
            const volumeString = `${String(contadorItens).padStart(3, '0')}/${String(totalItens).padStart(3, '0')}`;
            const peso = dadosPeso[produto] !== undefined ? dadosPeso[produto] : 'N/A';
            const certificado = dadosCertificado[produto] !== undefined ? dadosCertificado[produto] : 'N/A';

            const params = new URLSearchParams();
            params.append('cotacao', pedido.id);
            params.append('cliente', pedido.cliente);
            params.append('nf', notaFiscalNumero);
            params.append('volume', volumeString);
            params.append('produto', produto);
            params.append('peso', `${peso} kg`);
            params.append('certificado', certificado);

            const qrUrl = `${baseUrl}?${params.toString()}`;
            
            const qrCodeId = `qrcode-${contadorItens}`;

            qrCodeData.push({ id: qrCodeId, text: qrUrl });

            etiquetaHTML += `
                <div class="etiqueta">
                    <div class="cliente">${pedido.cliente}</div>
                    <div class="itens box"><span class="label">Itens</span><br>${volumeString}</div>
                    <div class="local-entrega"><span class="label">Local de entrega:</span> ${pedido.endereco}</div>
                    <div class="tipo-material box"><span class="label">Tipo Material:</span> ${produto}</div>
                    <div class="nf-peso-stack">
                        <div class="nf-box box">NF =${notaFiscalNumero}</div>
                        <div class="peso-box box">Peso: ${peso} kg</div>
                    </div>
                    <div class="qr-code box" id="${qrCodeId}"></div>
                    <div class="details-stack">
                        <div class="box"><span class="label">Cotação / Ordem de compra:</span><br>COT_${pedido.id}</div>
                        <div class="box"><span class="label">Descarga:</span><br>DOCA 45, GALPÃO 14</div>
                        <div class="box"><span class="label">Razão Social:</span><br>Cedisa Central de AÇO S A<br><span class="label">Unidade:</span> Matriz</div>
                    </div>
                    <div class="logo">
                        <img alt="Logo da Empresa" src="COLE_SUA_IMAGEM_BASE64_AQUI" />
                    </div>
                    <div class="slogan">O BRASIL TODO COMPRA NA CEDISA</div>
                </div>
            `;
        });
    }

    etiquetaHTML += `
        </body>
        <script>
            try {
                const dataForQR = ${JSON.stringify(qrCodeData)};
                dataForQR.forEach(function(data) {
                    const el = document.getElementById(data.id);
                    if (el) {
                        new QRCode(el, {
                            text: data.text,
                            width: 128,
                            height: 128,
                            correctLevel : QRCode.CorrectLevel.L
                        });
                    }
                });
                setTimeout(function() { window.print(); }, 500);
            } catch (e) {
                console.error('Erro ao gerar QR Code:', e);
            }
        <\/script>
    </html>`;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(etiquetaHTML);
    printWindow.document.close();
}

const agora = new Date();

const dia = agora.getDate();
const mes = agora.getMonth() + 1;
const ano = agora.getFullYear();
const hora = agora.getHours();
const minuto = agora.getMinutes();
const segundo = agora.getSeconds();

const adicionaZero = numero => numero < 10 ? '0' + numero : numero;

const diaFormatado = adicionaZero(dia);
const mesFormatado = adicionaZero(mes);
const horaFormatada = adicionaZero(hora);
const minutoFormatado = adicionaZero(minuto);
const segundoFormatado = adicionaZero(segundo);

function abrirTelaFatiarFardos(pedidoId, setor, produto) {
    const pesoTotalEl = document.getElementById(`peso-${pedidoId}-${setor}-${produto.replace(/\s/g, '-')}`);
    const pesoTotal = parseFloat(pesoTotalEl.value);

    if (isNaN(pesoTotal) || pesoTotal <= 0) {
        showModal("Erro", "Defina primeiro o peso total do produto antes de fatiar.", '<button class="modal-button ok" onclick="closeModal()">OK</button>');
        return;
    }

    const modalTitle = "Fatiar Fardos";
    const modalMessage = `
        <p>Informe a quantidade de fardos para o produto <strong>${produto}</strong>.</p>
        <p>Peso Total: <strong>${pesoTotal.toFixed(2)} kg</strong></p>
        <input type="number" id="fatiarQtdFardos" class="modal-input" value="1" min="1" placeholder="Quantidade de fardos">
    `;
    const modalButtons = `
        <button class="modal-button cancel" onclick="closeModal()">Cancelar</button>
        <button class="modal-button confirm" onclick="abrirModalPesosFardos(${pedidoId}, '${setor}', '${produto}', ${pesoTotal})">Avançar</button>
    `;

    showModal(modalTitle, modalMessage, modalButtons);
}

function abrirModalPesosFardos(pedidoId, setor, produto, pesoTotal) {
    const qtdFardosInput = document.getElementById('fatiarQtdFardos');
    const qtdFardos = parseInt(qtdFardosInput.value, 10);
    const limiteInferior = pesoTotal * 0.90;
    const limiteSuperior = pesoTotal * 1.10;

    if (isNaN(qtdFardos) || qtdFardos <= 0) {
        qtdFardosInput.style.border = '1px solid red';
        return;
    }

let inputsHTML = '';
    const pesoDistribuido = (pesoTotal / qtdFardos).toFixed(2);

    for (let i = 0; i < qtdFardos; i++) {
        inputsHTML += `
            <div class="fardo-input-group">
                <label for="pesoFardo_${i}">Peso Fardo ${i + 1}:</label>
                <input type="number" id="pesoFardo_${i}" class="modal-input peso-fardo" value="${pesoDistribuido}" step="0.01" oninput="atualizarSomaPesosFatiados(${qtdFardos}, ${pesoTotal}, ${limiteInferior}, ${limiteSuperior})">
            </div>
        `;
    }

    const modalTitle = "Distribuição de Pesos";
    const modalMessage = `
        <p>Distribua o peso total (<strong>${pesoTotal.toFixed(2)} kg</strong>) entre os <strong>${qtdFardos}</strong> fardos.</p>
        <p style="font-size: 0.9em; color: var(--text-secondary);">Tolerância permitida: de <strong>${limiteInferior.toFixed(2)} kg</strong> a <strong>${limiteSuperior.toFixed(2)} kg</strong>.</p>
        <div id="fatiarInputsContainer">${inputsHTML}</div>
        <div id="somaPesosContainer" style="margin-top: 15px; font-weight: bold;">
            Soma dos Fardos: <span id="somaPesosFatiados">${pesoTotal.toFixed(2)}</span> kg
        </div>
        <div id="fatiarErro" class="modal-error"></div>
    `;

    const modalButtons = `
        <button class="modal-button cancel" onclick="closeModal()">Cancelar</button>
        <button class="modal-button confirm" onclick="salvarPesosFatiados(${pedidoId}, '${setor}', '${produto}', ${qtdFardos}, ${pesoTotal}, ${limiteInferior}, ${limiteSuperior})">Salvar Fardos</button>
    `;

    showModal(modalTitle, modalMessage, modalButtons);

    atualizarSomaPesosFatiados(qtdFardos, pesoTotal, limiteInferior, limiteSuperior);
}

function atualizarSomaPesosFatiados(qtdFardos, pesoTotal, limiteInferior, limiteSuperior) {
    let somaAtual = 0;
    for (let i = 0; i < qtdFardos; i++) {
        const pesoFardo = parseFloat(document.getElementById(`pesoFardo_${i}`).value) || 0;
        somaAtual += pesoFardo;
    }

    const somaSpan = document.getElementById('somaPesosFatiados');
    somaSpan.textContent = somaAtual.toFixed(2);

    if (somaAtual >= limiteInferior && somaAtual <= limiteSuperior) {
        somaSpan.style.color = 'var(--green-success)';
        document.getElementById('fatiarErro').textContent = '';
    } else {
        somaSpan.style.color = 'var(--red-error)';
        document.getElementById('fatiarErro').textContent = `A soma dos fardos deve estar entre ${limiteInferior.toFixed(2)} kg e ${limiteSuperior.toFixed(2)} kg.`;
    }
}

function salvarPesosFatiados(pedidoId, setor, produto, qtdFardos, pesoTotal, limiteInferior, limiteSuperior) {
    const fardosPesos = [];
    let somaFinal = 0;

    for (let i = 0; i < qtdFardos; i++) {
        const pesoFardo = parseFloat(document.getElementById(`pesoFardo_${i}`).value);
        if (isNaN(pesoFardo) || pesoFardo <= 0) {
            document.getElementById('fatiarErro').textContent = `Peso inválido para o fardo ${i + 1}.`;
            return;
        }
        fardosPesos.push(pesoFardo);
        somaFinal += pesoFardo;
    }

    if (somaFinal < limiteInferior || somaFinal > limiteSuperior) {
        document.getElementById('fatiarErro').textContent = `A soma dos fardos (${somaFinal.toFixed(2)} kg) está fora da tolerância permitida.`;
        return;
    }

    const key = `fardos_${pedidoId}_${setor}_${produto}`;
    localStorage.setItem(key, JSON.stringify(fardosPesos));
    
    renderizarPedidosPorSetor(pedidoUnicoVisualizado);

    closeModal();
    showModal("Sucesso", `${qtdFardos} fardos foram salvos com sucesso!`, '<button class="modal-button ok" onclick="closeModal()">OK</button>');
}

function imprimirEtiquetasFardos(pedidoId, setor, produto) {
    const fardos = JSON.parse(localStorage.getItem(`fardos_${pedidoId}_${setor}_${produto}`) || "[]");
    if (!fardos.length) {
        showModal("Erro", "Nenhum fardo registrado para este produto.", '<button class="modal-button ok" onclick="closeModal()">OK</button>');
        return;
    }

    const pedido = getPedidoById(pedidoId);
    const notaFiscalNumero = getNotaFiscal(pedido.id) ?? "—";

    let etiquetaHTML = `
        <html>
        <head>
            <title>Etiquetas Fardos COT_${pedido.id}</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
                .etiqueta {
                    width: 101.6mm;
                    height: 76.2mm;
                    border: 1.5px solid black;
                    padding: 2mm;
                    box-sizing: border-box;
                    page-break-inside: avoid;
                    margin-bottom: 5mm;
                    display: grid;
                    grid-template-columns: 1.2fr 1.3fr 0.8fr;
                    grid-template-rows: auto auto auto auto 1fr auto;
                    gap: 1.5mm;
                    font-size: 8pt;
                }
                .box { border: 1px solid black; padding: 1mm; }
                .label { font-weight: bold; }

                .cliente { grid-column: 1 / 3; grid-row: 1; font-size: 22pt; font-weight: bold; align-self: end; }
                .itens { grid-column: 3; grid-row: 1; text-align: center; font-size: 9pt; height: min-content; align-self: end;}
                
                .local-entrega { grid-column: 1 / 4; grid-row: 2; }
                .tipo-material { grid-column: 1 / 4; grid-row: 3; font-size: 9pt; }
                
                .nf-peso-stack { grid-column: 1 / 3; grid-row: 4; display: flex; gap: 1.5mm; }
                .nf-peso-stack > div { flex-grow: 1; text-align: center; font-size: 11pt; font-weight: bold; }
                
                .qr-code { grid-column: 1; grid-row: 5; display: flex; align-items: center; justify-content: center; font-size: 8pt; }
                
                .details-stack { grid-column: 2; grid-row: 5; display: flex; flex-direction: column; gap: 1.5mm; font-size: 8pt; }
                
                .logo { 
                    grid-column: 3;
                    grid-row: 4 / 6;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .logo img {
                    width: 165%;
                    transform: rotate(90deg);
                }

                .slogan { grid-column: 1 / 4; grid-row: 6; text-align: center; font-weight: bold; padding-top: 1mm; font-size: 9pt; }
            </style>
        </head>
        <body>
    `;

    fardos.forEach((peso, i) => {
        const volumeString = `${String(i + 1).padStart(3, '0')}/${String(fardos.length).padStart(3, '0')}`;
        
        etiquetaHTML += `
            <div class="etiqueta">
                <div class="cliente">${pedido.cliente}</div>
                <div class="itens box"><span class="label">Fardos</span><br>${volumeString}</div>
                
                <div class="local-entrega"><span class="label">Local de entrega:</span> ${pedido.endereco}</div>
                <div class="tipo-material box"><span class="label">Tipo Material:</span> ${produto}</div>
                
                <div class="nf-peso-stack">
                    <div class="nf-box box">NF =${notaFiscalNumero}</div>
                    <div class="peso-box box">Peso: ${peso} kg</div>
                </div>
                
                <div class="qr-code box">[QR-CODE]</div>
                
                <div class="details-stack">
                    <div class="box"><span class="label">Cotação / Ordem de compra:</span><br>COT_${pedido.id}</div>
                    <div class="box"><span class="label">Descarga:</span><br>DOCA 45, GALPÃO 14</div>
                    <div class="box"><span class="label">Razão Social:</span><br>Cedisa Central de AÇO S A<br><span class="label">Unidade:</span> Matriz</div>
                </div>

                <div class="logo">
                    <img alt="" src="data:image/png;base64,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" />
                </div>

                <div class="slogan">O BRASIL TODO COMPRA NA CEDISA</div>
            </div>
        `;
    });

    etiquetaHTML += `</body></html>`;

    const win = window.open("", "_blank");
    win.document.write(etiquetaHTML);
    win.document.close();
}