
/* ==========================================
   GUILHERME TAVARES | LEGACY 2026
   JAVASCRIPT COMPLETO
========================================== */

// HISTÓRIA ESCOLAR

const escolas = [
  {
    nome: "Interagino",
    fase: "Jardim de Infância",
    historia: `Foi na Interagino que Guilherme começou sua trajetória escolar. Entre desenhos, brincadeiras no recreio, músicas e atividades em grupo, surgiram as primeiras amizades e descobertas. Era uma fase em que cada dia trazia algo novo: aprender as primeiras letras, participar das atividades e aproveitar os momentos de diversão.`
  },
  {
    nome: "Colégio Energia Ativa",
    fase: "Ensino Fundamental — até o 8º ano",
    historia: `O Colégio Energia Ativa marcou grande parte da infância de Guilherme. Foram anos de convivência com colegas, professores e amigos. Os recreios, as brincadeiras, os trabalhos em grupo e as conversas nos corredores fizeram parte da rotina. Também existiram provas difíceis, tarefas de casa e momentos de nervosismo antes das avaliações. Com o passar dos anos, as amizades ficaram mais fortes e as responsabilidades aumentaram. Foi uma fase de crescimento, aprendizado e muitas lembranças especiais.`
  },
  {
    nome: "Colégio Nossa Senhora de Fátima",
    fase: "9º ano — 3 meses",
    historia: `No 9º ano, Guilherme iniciou uma nova etapa no Colégio Nossa Senhora de Fátima. Apesar de ter permanecido apenas três meses, essa passagem representou uma experiência diferente. Novos colegas, professores e uma rotina desconhecida fizeram parte desse período. Foi uma oportunidade de aprender a se adaptar às mudanças e conhecer outras pessoas.`
  },
  {
    nome: "Colégio Estadual Inez Vicente Borocz",
    fase: "9º ano",
    historia: `Após sua passagem pelo Nossa Senhora de Fátima, Guilherme foi para o Colégio Estadual Inez Vicente Borocz. Mais uma mudança significava novos desafios, mas também novas oportunidades. Entre aulas, trabalhos escolares, amizades e momentos descontraídos, ele continuou sua caminhada e concluiu uma etapa importante do Ensino Fundamental.`
  },
  {
    nome: "Colégio Estadual Teobaldo",
    fase: "1º ano do Ensino Médio",
    historia: `O início do Ensino Médio trouxe novas matérias, responsabilidades e expectativas. No Colégio Estadual Teobaldo, Guilherme começou essa fase conhecendo uma rotina diferente. Os trabalhos, as provas e a convivência com os colegas contribuíram para seu amadurecimento e para uma nova maneira de enxergar o futuro.`
  },
  {
    nome: "Colégio Morelli",
    fase: "Ensino Médio — LEGACY 2026",
    historia: `A chegada ao Colégio Morelli representou mais um capítulo da trajetória de Guilherme. Depois de estudar em diferentes escolas e viver tantas experiências, ele chegou a essa etapa trazendo aprendizados e lembranças. O Morelli passou a fazer parte de sua história, com novos desafios, novas amizades e oportunidades para continuar evoluindo. O futuro ainda está sendo escrito, e cada conquista faz parte dessa construção.`
  }
];

// REDAÇÕES COMPLETAS

const redacoes = [
  {
    id: 1,
    titulo: "Cultura fitness: bem-estar ou busca por estética inatingível",
    texto: `A busca por saúde e bem-estar ganhou um espaço sem precedentes na sociedade moderna. Academias lotadas, alimentação equilibrada e a rotina de exercícios físicos são celebrados como pilares de uma vida longa e funcional. No entanto, existe uma linha tênue entre a cultura fitness voltada para o autocuidado e a obsessão pela busca de uma estética inatingível.

Impulsionada pelas redes sociais, a indústria do corpo perfeito frequentemente vende padrões irrealistas, moldados por filtros, ângulos estudados e, em muitos casos, procedimentos estéticos não revelados. Essa comparação constante transforma o cuidado com a saúde em uma fonte de frustração e ansiedade. Quando o valor de uma pessoa passa a ser medido pelo percentual de gordura ou pela definição muscular, o bem-estar físico e mental é comprometido.

A verdadeira cultura fitness deve focar na funcionalidade, na energia e na longevidade, respeitando a diversidade de corpos e limites de cada indivíduo. Cuidar de si mesmo é um ato de respeito ao próprio corpo, e não uma punição para alcançar um ideal fabricado. Encontrar o equilíbrio entre metas saudáveis e a aceitação pessoal é o único caminho sustentável para o real bem-estar.`
  },
  {
    id: 2,
    titulo: "Povos originários e direitos constitucionais: desafios para a efetivação da cidadania indígena no Brasil",
    texto: `A Constituição Federal de 1988 garante direitos aos povos indígenas, como a proteção de suas terras e culturas. Porém, muitos desses direitos ainda não são respeitados, dificultando a cidadania indígena no Brasil.

Um dos principais problemas é a invasão de terras indígenas, causada pelo garimpo ilegal e pelo desmatamento. Além disso, a falta de fiscalização do governo coloca em risco a vida dessas comunidades.

Outro desafio é o preconceito, que dificulta o acesso dos indígenas à educação, à saúde e a oportunidades. Isso mostra que ainda falta respeito e valorização de suas culturas.

Portanto, o Governo Federal, junto à Funai, deve aumentar a fiscalização das terras indígenas. Além disso, as escolas devem promover atividades sobre a cultura desses povos, para combater o preconceito e garantir seus direitos.`
  },
  {
    id: 3,
    titulo: "Consumo, mídia e cultura: como referências mediadas por algoritmos influenciam os modos de vida na sociedade contemporânea",
    texto: `Atualmente, as redes sociais influenciam cada vez mais o comportamento das pessoas. Por meio dos algoritmos, conteúdos são selecionados de acordo com os interesses dos usuários, afetando suas escolhas, opiniões e hábitos de consumo.

Um dos principais problemas é o consumo exagerado, pois as plataformas mostram constantemente produtos e estilos de vida que incentivam as pessoas a comprar coisas desnecessárias.

Além disso, os algoritmos podem limitar o acesso a diferentes opiniões, fazendo com que os usuários vejam apenas conteúdos semelhantes aos que já gostam. Isso pode prejudicar o pensamento crítico e a diversidade cultural.

Portanto, o Ministério da Educação deve promover aulas sobre o uso consciente das redes sociais, ensinando os jovens a identificar influências digitais. Assim, será possível desenvolver uma sociedade mais crítica e menos dependente dos algoritmos.`
  },
  {
    id: 4,
    titulo: "Espécies em extinção e equilíbrio ecológico: desafios para a conservação da fauna brasileira",
    texto: `A conservação da fauna brasileira é um desafio importante para a preservação do meio ambiente. Nesse sentido, o Brasil possui uma grande diversidade de espécies, porém muitas estão ameaçadas de extinção devido às ações humanas. Entre as principais causas desse problema estão o desmatamento e a caça ilegal, que prejudicam o equilíbrio ecológico e colocam em risco a biodiversidade.

Em primeiro lugar, o desmatamento é um dos principais fatores que ameaçam os animais brasileiros. A destruição de florestas para a expansão agropecuária e urbana reduz os habitats naturais, dificultando a sobrevivência de diversas espécies. Como consequência, ocorre a diminuição da biodiversidade e o desequilíbrio das cadeias alimentares, prejudicando o funcionamento dos ecossistemas.

Além disso, a caça ilegal e o tráfico de animais silvestres contribuem para o desaparecimento de espécies. A retirada desses animais da natureza afeta a reprodução e o controle das populações, causando impactos ambientais. Dessa forma, a falta de fiscalização e de conscientização da sociedade agrava o problema e dificulta a conservação da fauna brasileira.

Portanto, é necessário combater a extinção de espécies e preservar o equilíbrio ecológico. Para isso, o Governo Federal, por meio dos órgãos ambientais, deve ampliar a fiscalização e combater o desmatamento e o tráfico de animais. Além disso, as escolas e os meios de comunicação devem promover campanhas de conscientização sobre a importância da biodiversidade. Assim, será possível proteger a fauna brasileira e garantir a preservação dos ecossistemas para as futuras gerações.`
  },
  {
    id: 5,
    titulo: "Exploração espacial no século XXI: desafios para a conciliação entre avanço científico e responsabilidade social",
    texto: `Desde o início da corrida espacial, no século XX, a humanidade passou a ampliar seus conhecimentos sobre o Universo e a desenvolver tecnologias capazes de transformar a vida em sociedade. No século XXI, esse processo ganhou ainda mais força com o crescimento de empresas privadas e de novas missões espaciais. Entretanto, embora a exploração do espaço represente importantes avanços científicos, ela também apresenta desafios relacionados à desigualdade social e aos impactos ambientais. Dessa forma, torna-se necessário conciliar o progresso científico com a responsabilidade social.

Em primeiro lugar, é importante destacar que os investimentos na exploração espacial podem contribuir para o desenvolvimento tecnológico. Tecnologias criadas para missões espaciais podem posteriormente ser utilizadas em áreas como comunicação, meteorologia e monitoramento ambiental. Nesse sentido, o avanço científico pode trazer benefícios para a sociedade. Contudo, quando os investimentos são concentrados em projetos de alto custo enquanto problemas básicos, como pobreza, fome e falta de acesso à educação, permanecem, surge um questionamento sobre a distribuição dos recursos e das prioridades sociais.

Além disso, a intensificação das atividades espaciais gera impactos que não podem ser ignorados. O aumento do número de satélites e lançamentos contribui para a formação de detritos espaciais, que podem colocar outras missões em risco e dificultar a utilização sustentável da órbita terrestre. Assim, o desenvolvimento tecnológico precisa estar acompanhado de medidas de controle e cooperação internacional, evitando que a busca pelo conhecimento provoque novos problemas ambientais e tecnológicos.

Portanto, é fundamental buscar um equilíbrio entre exploração espacial e responsabilidade social. Para isso, governos e organizações internacionais devem estabelecer normas para controlar os impactos ambientais das atividades espaciais, além de fiscalizar empresas privadas do setor. Paralelamente, os investimentos científicos devem promover benefícios sociais, direcionando parte dos recursos e das tecnologias desenvolvidas para áreas como educação, comunicação e preservação ambiental. Dessa maneira, será possível garantir que a exploração espacial avance sem deixar de considerar as necessidades da sociedade e a preservação do planeta.`
  },
  {
    id: 6,
    titulo: "Migração e acolhimento: desafios da convivência em contextos globais",
    texto: `A migração é um fenômeno presente em diversos países e ocorre por motivos como guerras, crises econômicas e busca por melhores condições de vida. Nesse contexto, a Declaração Universal dos Direitos Himanos, criada pela Organização das Nações Unidas (ONU), estabelece que todos os indivíduos possuem direitos fundamentais, independentemente de sua origem. Entretanto, na sociedade contemporânea, muitos migrantes enfrentam dificuldades de acolhimento e preconceito nos países de destino. Dessa forma, a discriminação e a falta de políticas públicas eficientes representam desafios para a convivência em contextos globais.

Em primeiro lugar, o preconceito contra imigrantes dificulta sua integração social. Isso acontece porque muitos estrangeiros são vistos de maneira negativa devido às diferenças culturais, linguísticas e religiosas. Como consequência, essas pessoas podem sofrer exclusão social e encontrar obstáculos para conseguir emprego, moradia e acesso à educação. Assim, a intolerância prejudica tanto os migrantes quanto a construção de uma sociedade mais justa e respeitosa.

Além disso, a insuficiência de políticas públicas de acolhimento agrava essa situação. A falta de assistência governamental, de oportunidades de trabalho e de acesso aos serviços básicos dificulta a adaptação dos recém-chegados. Nesse sentido, é fundamental que os países desenvolvam medidas que garantam condições dignas de vida aos migrantes, contribuindo para sua inclusão e para a redução das desigualdades sociais.

Portanto, é necessário enfrentar os desafios relacionados à migração e ao acolhimento. Para isso, os governos devem ampliar as políticas públicas de assistência aos imigrantes, por meio da oferta de cursos de idiomas, oportunidades de emprego e acesso à educação e à saúde. Ademais, as escolas e os meios de comunicação devem promover campanhas de conscientização sobre o respeito às diferenças culturais. Dessa maneira, será possível construir uma sociedade mais acolhedora, na qual a diversidade seja valorizada e os direitos humanos sejam respeitados.`
  },
  {
    id: 7,
    titulo: "El Niño e mudanças climáticas: desafios para a preparação da sociedade diante de eventos extremos",
    texto: `As mudanças climáticas representam um dos maiores desafios da sociedade contemporânea. Nesse contexto, o fenômeno El Niño, caracterizado pelo aquecimento anormal das águas do Oceano Pacífico Equatorial, pode intensificar eventos climáticos extremos, como secas, enchentes e ondas de calor. No Brasil, esses acontecimentos afetam milhares de pessoas e evidenciam a falta de preparação da sociedade. Dessa forma, a ausência de infraestrutura adequada e a pouca conscientização da população dificultam o enfrentamento desses problemas.

Em primeiro lugar, a precariedade da infraestrutura urbana aumenta os impactos dos eventos climáticos extremos. Em diversas cidades brasileiras, a falta de sistemas eficientes de drenagem, o descarte irregular de lixo e a ocupação de áreas de risco contribuem para enchentes e deslizamentos. Como consequência, muitas famílias perdem suas casas e enfrentam dificuldades para reconstruir suas vidas. Assim, torna-se necessário ampliar os investimentos públicos em prevenção e planejamento urbano.

Além disso, a falta de educação ambiental também prejudica a preparação da sociedade. Muitas pessoas desconhecem os riscos relacionados às mudanças climáticas e não sabem como agir em situações de emergência. Nesse sentido, as escolas e os meios de comunicação possuem papel fundamental na divulgação de informações sobre prevenção, sustentabilidade e segurança. Portanto, conscientizar a população é essencial para diminuir os danos causados por esses fenômenos.

Diante disso, é fundamental que o Governo Federal, em parceria com estados e municípios, desenvolva políticas públicas de prevenção aos desastres climáticos. Para isso, devem ser realizados investimentos em infraestrutura, sistemas de alerta e fiscalização de áreas de risco. Além disso, o Ministério da Educação deve promover campanhas e projetos escolares sobre mudanças climáticas, por meio de palestras e atividades educativas. Dessa maneira, será possível construir uma sociedade mais preparada, consciente e segura diante dos eventos extremos.`
  },
  {
    id: 8,
    titulo: "Obsolescência tecnológica e descarte de resíduos eletrônicos: desafios para a sustentabilidade no Brasil",
    texto: `Atualmente, o avanço da tecnologia faz com que aparelhos eletrônicos sejam substituídos cada vez mais rápido. Entretanto, o descarte incorreto desses produtos causa problemas ambientais e dificulta a sustentabilidade no Brasil.

Um dos principais desafios é a obsolescência tecnológica, pois muitos aparelhos ficam ultrapassados em pouco tempo, incentivando o consumo de novos produtos. Isso aumenta a quantidade de lixo eletrônico produzido.

Além disso, a falta de informação sobre o descarte correto faz com que celulares, computadores e baterias sejam jogados no lixo comum, contaminando o solo e a água com substâncias tóxicas.

Portanto, o Governo Federal deve ampliar os pontos de coleta de resíduos eletrônicos e promover campanhas educativas nas escolas e nas redes sociais. Assim, será possível reduzir os impactos ambientais e incentivar um consumo mais consciente.`
  },
  {
    id: 9,
    titulo: "Redação 09 — Em breve",
    texto: ""
  },
  {
    id: 10,
    titulo: "Redação 10 — Em breve",
    texto: ""
  },
  {
    id: 11,
    titulo: "Redação 11 — Em breve",
    texto: ""
  },
  {
    id: 12,
    titulo: "Redação 12 — Em breve",
    texto: ""
  }
];

/* ==========================================
   ARMAZENAMENTO DAS EDIÇÕES
========================================== */

const STORAGE_KEY = "legacy2026_edicoes_v2";
let redacaoAtual = null;

function carregarEdicoes() {
  try {
    const dados = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "{}"
    );

    redacoes.forEach(redacao => {
      const edicao = dados[redacao.id];

      if (edicao && typeof edicao === "object") {
        if (typeof edicao.titulo === "string") {
          redacao.titulo = edicao.titulo;
        }

        if (typeof edicao.texto === "string") {
          redacao.texto = edicao.texto;
        }
      }
    });
  } catch (erro) {
    console.warn("Não foi possível carregar as edições.", erro);
  }
}

function salvarEdicao(redacao) {
  try {
    const dados = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "{}"
    );

    dados[redacao.id] = {
      titulo: redacao.titulo,
      texto: redacao.texto
    };

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(dados)
    );

    return true;
  } catch (erro) {
    console.error("Erro ao salvar:", erro);
    return false;
  }
}

/* ==========================================
   CRIAÇÃO DE ELEMENTOS
========================================== */

function elemento(tag, classe, conteudo) {
  const el = document.createElement(tag);

  if (classe) {
    el.className = classe;
  }

  if (conteudo !== undefined) {
    el.textContent = conteudo;
  }

  return el;
}

/* ==========================================
   LINHA DO TEMPO
========================================== */

function mostrarEscolas() {
  const timeline = document.getElementById("timeline");

  if (!timeline) return;

  timeline.innerHTML = "";

  escolas.forEach((escola, indice) => {
    const card = elemento(
      "article",
      "timeline-item reveal"
    );

    const numero = elemento(
      "span",
      "timeline-number",
      String(indice + 1).padStart(2, "0")
    );

    const conteudo = elemento(
      "div",
      "timeline-content"
    );

    const fase = elemento(
      "span",
      "timeline-phase",
      escola.fase
    );

    const titulo = elemento(
      "h3",
      "",
      escola.nome
    );

    const historia = elemento(
      "p",
      "",
      escola.historia
    );

    conteudo.append(fase, titulo, historia);
    card.append(numero, conteudo);
    timeline.appendChild(card);
  });
}

/* ==========================================
   CARTÕES DAS REDAÇÕES
========================================== */

function mostrarRedacoes(filtro = "") {
  const grid = document.getElementById("essayGrid");
  const contador = document.getElementById("essayCount");

  if (!grid) return;

  grid.innerHTML = "";

  const termo = filtro
    .toLocaleLowerCase("pt-BR")
    .trim();

  const lista = redacoes.filter(redacao => {
    const conteudo = (
      redacao.titulo + " " + redacao.texto
    ).toLocaleLowerCase("pt-BR");

    return conteudo.includes(termo);
  });

  if (contador) {
    contador.textContent = `${lista.length} de 12 redações`;
  }

  if (lista.length === 0) {
    grid.appendChild(
      elemento(
        "p",
        "empty-state",
        "Nenhuma redação encontrada."
      )
    );
    return;
  }

  lista.forEach(redacao => {
    const card = elemento(
      "button",
      "essay-card reveal visible"
    );

    card.type = "button";

    const numero = elemento(
      "span",
      "essay-num",
      `REDAÇÃO ${String(redacao.id).padStart(2, "0")}`
    );

    const titulo = elemento(
      "h3",
      "",
      redacao.titulo
    );

    const resumo = elemento(
      "p",
      "",
      redacao.texto
        ? redacao.texto.slice(0, 145) +
          (redacao.texto.length > 145 ? "..." : "")
        : "Este espaço está reservado para uma nova redação."
    );

    const abrir = elemento(
      "span",
      "essay-open",
      redacao.texto
        ? "LER REDAÇÃO ↗"
        : "ADICIONAR REDAÇÃO +"
    );

    card.append(numero, titulo, resumo, abrir);

    card.addEventListener("click", () => {
      abrirRedacao(redacao.id);
    });

    grid.appendChild(card);
  });
}

/* ==========================================
   JANELA DE LEITURA
========================================== */

function abrirRedacao(id) {
  const redacao = redacoes.find(r => r.id === id);
  const dialog = document.getElementById("essayDialog");

  if (!redacao || !dialog) return;

  redacaoAtual = id;

  document.getElementById("dialogNumber").textContent =
    `REDAÇÃO ${String(id).padStart(2, "0")}`;

  document.getElementById("dialogTitle").textContent =
    redacao.titulo;

  document.getElementById("dialogText").textContent =
    redacao.texto ||
    "Esta redação ainda não foi adicionada.";

  document.getElementById("essayTitle").value =
    redacao.titulo;

  document.getElementById("essayText").value =
    redacao.texto;

  document.getElementById("saveStatus").textContent = "";

  modoEdicao(false);

  if (!dialog.open) {
    dialog.showModal();
  }
}

function modoEdicao(ativo) {
  const titulo = document.getElementById("dialogTitle");
  const texto = document.getElementById("dialogText");
  const editor = document.getElementById("editorArea");
  const editar = document.getElementById("editEssay");
  const salvar = document.getElementById("saveEssay");

  titulo.hidden = ativo;
  texto.hidden = ativo;
  editor.hidden = !ativo;
  editar.hidden = ativo;
  salvar.hidden = !ativo;
}

function fecharRedacao() {
  const dialog = document.getElementById("essayDialog");

  if (dialog && dialog.open) {
    dialog.close();
  }

  redacaoAtual = null;
}

function salvarRedacao() {
  const redacao = redacoes.find(
    r => r.id === redacaoAtual
  );

  if (!redacao) return;

  const titulo = document
    .getElementById("essayTitle")
    .value.trim();

  const texto = document
    .getElementById("essayText")
    .value;

  const status = document.getElementById("saveStatus");

  if (!titulo) {
    status.textContent = "Digite um título.";
    return;
  }

  const anterior = {
    titulo: redacao.titulo,
    texto: redacao.texto
  };

  redacao.titulo = titulo;
  redacao.texto = texto;

  if (!salvarEdicao(redacao)) {
    redacao.titulo = anterior.titulo;
    redacao.texto = anterior.texto;
    status.textContent =
      "Não foi possível salvar neste navegador.";
    return;
  }

  const pesquisa = document.getElementById("search");

  mostrarRedacoes(pesquisa ? pesquisa.value : "");

  document.getElementById("dialogTitle").textContent =
    redacao.titulo;

  document.getElementById("dialogText").textContent =
    redacao.texto || "Redação vazia.";

  modoEdicao(false);

  status.textContent = "Redação salva neste navegador!";
}

/* ==========================================
   MENU DO CELULAR
========================================== */

function configurarMenu() {
  const botao = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");

  if (!botao || !nav) return;

  botao.addEventListener("click", () => {
    const aberto = nav.classList.toggle("open");

    botao.setAttribute(
      "aria-expanded",
      String(aberto)
    );
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      botao.setAttribute("aria-expanded", "false");
    });
  });
}

/* ==========================================
   ANIMAÇÕES
========================================== */

function configurarAnimacoes() {
  const itens = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    itens.forEach(item => item.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    entradas => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
          observer.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  itens.forEach(item => observer.observe(item));
}

/* ==========================================
   BARRA DE PROGRESSO
========================================== */

function configurarProgresso() {
  const barra = document.getElementById("progress");

  if (!barra) return;

  function atualizar() {
    const maximo =
      document.documentElement.scrollHeight -
      window.innerHeight;

    const percentual = maximo > 0
      ? (window.scrollY / maximo) * 100
      : 0;

    barra.style.width = `${percentual}%`;
  }

  window.addEventListener(
    "scroll",
    atualizar,
    { passive: true }
  );

  atualizar();
}

/* ==========================================
   INICIAR SITE
========================================== */

function iniciarSite() {
  carregarEdicoes();

  mostrarEscolas();
  mostrarRedacoes();

  configurarMenu();
  configurarAnimacoes();
  configurarProgresso();

  const pesquisa = document.getElementById("search");

  if (pesquisa) {
    pesquisa.addEventListener("input", () => {
      mostrarRedacoes(pesquisa.value);
    });
  }

  document.getElementById("closeDialog")
    ?.addEventListener("click", fecharRedacao);

  document.getElementById("cancelDialog")
    ?.addEventListener("click", fecharRedacao);

  document.getElementById("editEssay")
    ?.addEventListener("click", () => {
      modoEdicao(true);
    });

  document.getElementById("saveEssay")
    ?.addEventListener("click", salvarRedacao);

  const dialog = document.getElementById("essayDialog");

  if (dialog) {
    dialog.addEventListener("click", evento => {
      if (evento.target === dialog) {
        fecharRedacao();
      }
    });
  }

  console.log("LEGACY 2026 — Site iniciado.");
  console.log("6 escolas e 12 redações carregadas.");
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    iniciarSite
  );
} else {
  iniciarSite();
}
