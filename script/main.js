// // =====================================================================
// //                          CONFIGURAÇÃO INICIAL
// // =====================================================================

// window.addEventListener('load', async function () {
//     console.log("Página e recursos externos carregados. Iniciando o carregamento de experiências.");

//     try {
//         await listaProfile()
//         await listaExperiencia(); // 1. Carrega e renderiza o JSON
//         await listaProjetos()

//         // 2. Inicializa a visibilidade (Esconde itens intermediários)
//         // Isso configura o botão "Mostrar mais" e a visibilidade inicial.
//         gerenciarVisibilidadeExperiencias(true);

//         gerenciarVisibilidadeProjetos(true)

//     } catch (error) {
//         console.error("Falha na inicialização da página:", error);
//     }
// });


// // =====================================================================
// //                          MANIPULAÇÃO DE EVENTO (Botão Mostrar Mais)
// // =====================================================================

// document.addEventListener('DOMContentLoaded', () => {
//     const mostrarMaisBtn = document.querySelector('#btn-sw-experiencias');
//     const mostrarMaisBtnProjetos = document.querySelector('#btn-sw-projetos');

//     if (mostrarMaisBtn) {
//         mostrarMaisBtn.addEventListener('click', function () {
//             // Obtém o estado atual e inverte para o próximo clique
//             const isCurrentlyHidden = this.getAttribute('fn') === 'true';
//             const nextStateIsHidden = !isCurrentlyHidden;

//             this.setAttribute('fn', nextStateIsHidden ? 'true' : 'false');

//             // Chama a função principal com o novo estado
//             gerenciarVisibilidadeExperiencias(nextStateIsHidden);

//         });
//     }

//     if (mostrarMaisBtnProjetos) {
//         mostrarMaisBtnProjetos.addEventListener('click', function () {
//             // Obtém o estado atual e inverte para o próximo clique
//             const isCurrentlyHidden2 = this.getAttribute('fn') === 'true';
//             const nextStateIsHidden2 = !isCurrentlyHidden2;

//             this.setAttribute('fn', nextStateIsHidden2 ? 'true' : 'false');

//             // Chama a função principal com o novo estado
//             gerenciarVisibilidadeProjetos(nextStateIsHidden2);
//         });
//     }

// });

// // =====================================================================
// //                          FUNÇÕES DE VISIBILIDADE E ORDENAÇÃO
// // =====================================================================

// function gerenciarPosicaoBotao(shouldReorder) {
//     const containerWork = document.querySelector('.work');
//     const mostrarMaisBtn = containerWork ? containerWork.querySelector('.row-item-not-it') : null;

//     if (!containerWork || !mostrarMaisBtn) return;

//     if (shouldReorder) {
//         // Encontra o segundo item de experiência para inserir o botão antes dele
//         const todosOsRowItems = containerWork.querySelectorAll('.row-item');

//         // Se houver pelo menos 2 itens (índice 1 é o segundo item)
//         if (todosOsRowItems.length > 1) {
//             const segundoRowItem = todosOsRowItems[1];

//             // Reordena o botão para a posição "Mostrar mais" (antes do segundo item)
//             containerWork.insertBefore(mostrarMaisBtn, segundoRowItem);
//             return;
//         }
//     }

//     // Padrão: move para o final (para "Mostrar Menos")
//     containerWork.appendChild(mostrarMaisBtn);
// }
// function gerenciarPosicaoBotaoProjetos(shouldReorder) {
//     const containerWork = document.querySelector('.side-projects');
//     const mostrarMaisBtn = containerWork ? containerWork.querySelector('.row-item-not-it-pj') : null;

//     if (!containerWork || !mostrarMaisBtn) return;

//     if (shouldReorder) {
//         // Encontra o segundo item de experiência para inserir o botão antes dele
//         const todosOsRowItems = containerWork.querySelectorAll('.row-item');

//         // Se houver pelo menos 2 itens (índice 1 é o segundo item)
//         if (todosOsRowItems.length > 1) {
//             const segundoRowItem = todosOsRowItems[1];

//             // Reordena o botão para a posição "Mostrar mais" (antes do segundo item)
//             containerWork.insertBefore(mostrarMaisBtn, segundoRowItem);
//             return;
//         }
//     }

//     // Padrão: move para o final (para "Mostrar Menos")
//     containerWork.appendChild(mostrarMaisBtn);
// }

// function gerenciarVisibilidadeExperiencias(shouldHide) {
//     const containerWork = document.querySelector('.work');
//     if (!containerWork) return;

//     // Acessa o DOM uma única vez para obter as referências
//     const todosOsRowItems = containerWork.querySelectorAll('.row-item');
//     const mostrarMaisBtn = containerWork.querySelector('.row-item-not-it');

//     const textomostra = document.querySelector('.txt-texto-ex');
//     const textototalmostrar = document.querySelector('.txt-cont-ex');
//     const infoqntmostra = document.querySelector('.info-cont-ex');

//     const totalExperiencias = todosOsRowItems.length;
//     const itensOcultados = totalExperiencias - 2;

//     // 1. Gerenciamento do Botão e Texto
//     if (shouldHide) {
//         gerenciarPosicaoBotao(true);
//         if (textomostra) textomostra.textContent = 'Mostrar mais';
//         if (infoqntmostra) infoqntmostra.style.display = '';
//         if (textototalmostrar) textototalmostrar.textContent = `${itensOcultados} item ocultado`;
//     } else {
//         gerenciarPosicaoBotao(false);
//         if (textomostra) textomostra.textContent = 'Mostrar menos';
//         if (infoqntmostra) infoqntmostra.style.display = 'none';
//         // Não é necessário atualizar textototalmostrar se ele estiver escondido
//     }

//     // 2. Gerenciamento da Visibilidade
//     if (mostrarMaisBtn) {
//         // Exibe o botão se houver mais de 2 itens, caso contrário, esconde.
//         mostrarMaisBtn.style.display = totalExperiencias > 2 ? '' : 'none';
//     }

//     // Se houver 2 ou menos itens, não precisa iterar.
//     if (totalExperiencias <= 2) return;

//     // Itera sobre todos os itens de experiência (row-item) e sua respectiva image-area
//     for (let i = 0; i < totalExperiencias; i++) {
//         const rowItem = todosOsRowItems[i];

//         // Ocultar itens intermediários (i > 0 e i < total - 1) se shouldHide for TRUE
//         const isIntermediario = i > 0 && i < totalExperiencias - 1;
//         const novoDisplay = isIntermediario && shouldHide ? 'none' : '';

//         // Aplica o display ao rowItem
//         rowItem.style.display = novoDisplay;

//         // Busca o próximo elemento que seja o image-area correspondente
//         let nextElement = rowItem.nextElementSibling;
//         while (nextElement && !nextElement.classList.contains('image-area')) {
//             nextElement = nextElement.nextElementSibling;
//         }

//         // Se encontrar o image-area, aplica o mesmo display
//         if (nextElement && nextElement.classList.contains('image-area')) {
//             nextElement.style.display = novoDisplay;
//         }
//     }
// }
// function gerenciarVisibilidadeProjetos(shouldHide) {
//     const containerWork = document.querySelector('.side-projects');
//     if (!containerWork) return;

//     // Acessa o DOM uma única vez para obter as referências
//     const todosOsRowItems = containerWork.querySelectorAll('.row-item');
//     const mostrarMaisBtn = containerWork.querySelector('.row-item-not-it-pj');

//     const textomostra = document.querySelector('.txt-texto-pj');
//     const textototalmostrar = document.querySelector('.txt-cont-pj');
//     const infoqntmostra = document.querySelector('.info-cont-pj');

//     const totalExperiencias = todosOsRowItems.length;
//     const itensOcultados = totalExperiencias - 2;

//     // 1. Gerenciamento do Botão e Texto
//     if (shouldHide) {
//         gerenciarPosicaoBotaoProjetos(true);
//         if (textomostra) textomostra.textContent = 'Mostrar mais';
//         if (infoqntmostra) infoqntmostra.style.display = '';
//         if (textototalmostrar) textototalmostrar.textContent = `${itensOcultados} item ocultado`;
//     } else {
//         gerenciarPosicaoBotaoProjetos(false);
//         if (textomostra) textomostra.textContent = 'Mostrar menos';
//         if (infoqntmostra) infoqntmostra.style.display = 'none';
//         // Não é necessário atualizar textototalmostrar se ele estiver escondido
//     }

//     // 2. Gerenciamento da Visibilidade
//     if (mostrarMaisBtn) {
//         // Exibe o botão se houver mais de 2 itens, caso contrário, esconde.
//         mostrarMaisBtn.style.display = totalExperiencias > 2 ? '' : 'none';
//     }

//     // Se houver 2 ou menos itens, não precisa iterar.
//     if (totalExperiencias <= 2) return;

//     // Itera sobre todos os itens de experiência (row-item) e sua respectiva image-area
//     for (let i = 0; i < totalExperiencias; i++) {
//         const rowItem = todosOsRowItems[i];

//         // Ocultar itens intermediários (i > 0 e i < total - 1) se shouldHide for TRUE
//         const isIntermediario = i > 0 && i < totalExperiencias - 1;
//         const novoDisplay = isIntermediario && shouldHide ? 'none' : '';

//         // Aplica o display ao rowItem
//         rowItem.style.display = novoDisplay;

//         // Busca o próximo elemento que seja o image-area correspondente
//         let nextElement = rowItem.nextElementSibling;
//         while (nextElement && !nextElement.classList.contains('image-area')) {
//             nextElement = nextElement.nextElementSibling;
//         }

//         // Se encontrar o image-area, aplica o mesmo display
//         if (nextElement && nextElement.classList.contains('image-area')) {
//             nextElement.style.display = novoDisplay;
//         }
//     }
// }

// // =====================================================================
// //                          CARREGAMENTO DE DADOS (Otimizado)
// // =====================================================================

// async function listaProfile() {
//     const jsonFilePath = 'data/profile.json';
//     const container = document.getElementById('box-profile');

//     if (!container) {
//         console.error("Contêiner de listagem não encontrado.");
//         return;
//     }

//     try {
//         const response = await fetch(jsonFilePath);

//         if (!response.ok) {
//             throw new Error(`Erro: ${response.status} ${response.statusText}`);
//         }

//         const profileData = await response.json();

//         // Limpeza de DOM otimizada: usa o contêiner pai para buscar apenas os itens listados
//         const elementosParaRemover = container.querySelectorAll('.component-2');
//         elementosParaRemover.forEach(elemento => elemento.remove());

//         let htmlContent = '';

//         profileData.forEach(item => {
//             const textBlockHTML = `
//                 <div class="component-2 link-external" data-url="${item.url}"
//                     style="background: ${item.background_color}">
//                     <div class="text" style="color: ${item.text_color};">
//                         <img src="${item.icon_src}" alt="${item.icon_alt}" style="width: 15px;">
//                         ${item.text ? '&nbsp;&nbsp;' : ''}${item.text}
//                     </div>
//                 </div>
//             `;

//             htmlContent += textBlockHTML;
//         })

//         container.insertAdjacentHTML('beforeend', htmlContent);


//     } catch (error) {
//         console.error("Falha na função listaProfile:", error);
//         // Não é necessário o bloco catch vazio do código original (try {} catch(x){})
//     }

// }
// async function listaExperiencia() {
//     const jsonFilePath = 'data/experiencias.json';
//     const container = document.getElementById('listagem-dinamica-experiencias');

//     if (!container) {
//         console.error("Contêiner de listagem não encontrado.");
//         return;
//     }

//     try {
//         const response = await fetch(jsonFilePath);

//         if (!response.ok) {
//             throw new Error(`Erro: ${response.status} ${response.statusText}`);
//         }

//         const professionalExperienceData = await response.json();

//         // Limpeza de DOM otimizada: usa o contêiner pai para buscar apenas os itens listados
//         const elementosParaRemover = container.querySelectorAll('.work.list-rm');
//         elementosParaRemover.forEach(elemento => elemento.remove());

//         // Geração de HTML: Usando um Array para acumular e innerHTML no final (mais eficiente)
//         let htmlContent = '';

//         professionalExperienceData.forEach(item => {
//             // Utilização de <a> com target="_blank" é mais semântico para links
//             const textBlockHTML = `
//                 <div class="row-item list-rm">
//                     <div class="date">${item.date}</div>
//                     <div class="contents">
//                         <a class="link" href="${item.link}" target="_blank" style="text-decoration: none;">
//                             <div class="line-1-text">${item.texto}</div>
//                             <img class="open-new-tab-icon" src="./svg/OpenNewTabIcon.svg" />
//                         </a>
//                         <div class="line-2">${item.empresa}</div>
//                     </div>
//                 </div>
//             `;

//             const imageAreaHTML = item.imgs.map(src => `
//                 <div class="image2">
//                     <img class="image3" src="${src}" alt="Imagem de ${item.empresa}">
//                 </div>
//             `).join('');

//             const imageBlockHTML = `
//                 <div class="image-area list-rm">
//                     ${imageAreaHTML}
//                 </div>
//             `;

//             htmlContent += textBlockHTML;
//             htmlContent += imageBlockHTML;
//         });

//         // Injeta o HTML completo no DOM em uma única operação.
//         container.insertAdjacentHTML('beforeend', htmlContent);

//     } catch (error) {
//         console.error("Falha na função listaExperiencia:", error);
//         // Não é necessário o bloco catch vazio do código original (try {} catch(x){})
//     }
// }
// async function listaProjetos() {
//     const jsonFilePath = 'data/projetos.json';
//     const container = document.getElementById('listagem-dinamica-projetos');

//     if (!container) {
//         console.error("Contêiner de listagem não encontrado.");
//         return;
//     }

//     try {
//         const response = await fetch(jsonFilePath);

//         if (!response.ok) {
//             throw new Error(`Erro: ${response.status} ${response.statusText}`);
//         }

//         let professionalExperienceData = await response.json();

//         professionalExperienceData.sort((a, b) => {
//             // Se 'a' é 200 e 'b' não é (ex: 404), 'a' sobe (-1).
//             if (a.status === 200 && b.status !== 200) {
//                 return -1;
//             }
//             // Se 'b' é 200 e 'a' não é (ex: 404), 'b' sobe (1).
//             if (b.status === 200 && a.status !== 200) {
//                 return 1;
//             }
//             // Mantém a ordem se os status forem iguais (ex: 200 vs 200 ou 404 vs 404).
//             return 0;
//         });
//         // 🛑 FIM DA MUDANÇA

//         // Limpeza de DOM otimizada: usa o contêiner pai para buscar apenas os itens listados
//         const elementosParaRemover = container.querySelectorAll('.side-projects.row-item');
//         elementosParaRemover.forEach(elemento => elemento.remove());

//         // Geração de HTML: Usando um Array para acumular e innerHTML no final (mais eficiente)
//         let htmlContent = '';

//         professionalExperienceData.forEach(item => {
//             // Utilização de <a> com target="_blank" é mais semântico para links
//             const status = item.status;
//             const textBlockHTML = `
//                 <div class="row-item pj-${item.id}">
//                     <div class="date" style="cursor: default;">
//                         <div class="${item.item_linha.status_icon}"></div>
//                         ${item.item_linha.status}
//                     </div>
//                     <div class="contents link-external-projeto" style="cursor: ${status === 200 ? 'pointer' : 'no-drop'};" data-url="${item.item_linha.conteudo.url}">
//                         <div class="link">
//                             <div class="line-1-text">${item.item_linha.conteudo.titulo}</div>
//                             <img class="open-new-tab-icon" src="${item.item_linha.conteudo.icone_link_src}" style="display: ${status === 200 ? '' : 'none'};"/>
//                         </div>
//                     </div>
//                 </div>
//             `;

//             htmlContent += textBlockHTML;
//         });

//         // Injeta o HTML completo no DOM em uma única operação.
//         container.insertAdjacentHTML('beforeend', htmlContent);

//     } catch (error) {
//         console.error("Falha na função listaExperiencia:", error);
//         // Não é necessário o bloco catch vazio do código original (try {} catch(x){})
//     }
// }

// =====================================================================
//                          CONFIGURAÇÃO E SELETORES
// =====================================================================

// Centralização de todos os seletores do DOM para Experiências e Projetos
const Selectors = {
    EXPERIENCIAS: {
        container: '.work',
        btnClass: '.row-item-not-it', // Seletor do botão que fica dentro do container
        btnId: '#btn-sw-experiencias', // ID do botão usado para o listener
        txtTexto: '.txt-texto-ex',
        txtCont: '.txt-cont-ex',
        infoCont: '.info-cont-ex',
        hasImageArea: true // Diferença lógica: Experiências têm image-area
    },
    PROJETOS: {
        container: '.side-projects',
        btnClass: '.row-item-not-it-pj', // Seletor do botão que fica dentro do container
        btnId: '#btn-sw-projetos', // ID do botão usado para o listener
        txtTexto: '.txt-texto-pj',
        txtCont: '.txt-cont-pj',
        infoCont: '.info-cont-pj',
        hasImageArea: false
    }
};

/**
 * Registra um event listener para um botão, invertendo o estado 'fn' e a visibilidade.
 * @param {string} selector - ID do botão para o listener.
 * @param {Function} managerFn - Função de gerenciamento de visibilidade (gerenciarVisibilidadeExperiencias/Projetos).
 */
function setupToggleListener(selector, managerFn) {
    const btn = document.querySelector(selector);
    if (!btn) return;

    btn.addEventListener('click', function () {
        const isCurrentlyHidden = this.getAttribute('fn') === 'true';
        const nextStateIsHidden = !isCurrentlyHidden;

        this.setAttribute('fn', nextStateIsHidden ? 'true' : 'false');
        managerFn(nextStateIsHidden);
    });
}

// Inicialização da página
window.addEventListener('load', async function () {
    console.log("Página e recursos externos carregados. Iniciando o carregamento.");
    try {
        await listaProfile();
        await listaExperiencia();
        await listaProjetos();
        await listaFormacao();

        // 2. Inicializa a visibilidade
        gerenciarVisibilidadeExperiencias(true);
        gerenciarVisibilidadeProjetos(true);

    } catch (error) {
        console.error("Falha na inicialização da página:", error);
    }
});

// Configuração dos Listeners após o carregamento do DOM e garantindo que os elementos existam.
document.addEventListener('DOMContentLoaded', () => {
    setupToggleListener(Selectors.EXPERIENCIAS.btnId, gerenciarVisibilidadeExperiencias);
    setupToggleListener(Selectors.PROJETOS.btnId, gerenciarVisibilidadeProjetos);
});

// =====================================================================
//                          FUNÇÕES AUXILIARES (DRY)
// =====================================================================

/**
 * Lógica de posicionamento do botão (compartilhada entre Projetos e Experiências).
 */
function gerenciarPosicaoBotao(containerSelector, btnClass, shouldReorder) {
    const container = document.querySelector(containerSelector);
    const mostrarMaisBtn = container ? container.querySelector(btnClass) : null;

    if (!container || !mostrarMaisBtn) return;

    if (shouldReorder) {
        const todosOsRowItems = container.querySelectorAll('.row-item');
        if (todosOsRowItems.length > 1) {
            // Reordena o botão para a posição "Mostrar mais" (antes do segundo item)
            container.insertBefore(mostrarMaisBtn, todosOsRowItems[1]);
            return;
        }
    }

    // Padrão: move para o final (para "Mostrar Menos")
    container.appendChild(mostrarMaisBtn);
}

/**
 * Lógica de visibilidade e texto (compartilhada entre Projetos e Experiências).
 */
function gerenciarVisibilidade(shouldHide, config) {
    const container = document.querySelector(config.container);
    if (!container) return;

    const todosOsRowItems = container.querySelectorAll('.row-item');
    const mostrarMaisBtn = container.querySelector(config.btnClass);

    // Elementos de contagem/texto (assumindo que estão fora do container ou são globais)
    const textomostra = document.querySelector(config.txtTexto);
    const textototalmostrar = document.querySelector(config.txtCont);
    const infoqntmostra = document.querySelector(config.infoCont);

    const totalItens = todosOsRowItems.length;
    // Lógica original: oculta todos, exceto o primeiro e o último (total - 2)
    const itensOcultados = totalItens - 2;

    // 1. Gerenciamento do Botão e Texto
    gerenciarPosicaoBotao(config.container, config.btnClass, shouldHide);

    if (textomostra) textomostra.textContent = shouldHide ? 'Mostrar mais' : 'Mostrar menos';
    if (infoqntmostra) infoqntmostra.style.display = shouldHide ? '' : 'none';

    if (shouldHide && textototalmostrar) {
        const itemText = itensOcultados === 1 ? 'item' : 'itens';
        textototalmostrar.textContent = `${itensOcultados} ${itemText} ocultado${itensOcultados === 1 ? '' : 's'}`;
    }

    // 2. Exibe o botão se houver mais de 2 itens, caso contrário, esconde.
    if (mostrarMaisBtn) {
        mostrarMaisBtn.style.display = totalItens > 2 ? '' : 'none';
    }

    if (totalItens <= 2) return;

    // 3. Itera e aplica a visibilidade (lógica original)
    for (let i = 0; i < totalItens; i++) {
        const rowItem = todosOsRowItems[i];

        // Ocultar itens intermediários (i > 0 E i < total - 1) se shouldHide for TRUE
        const isIntermediario = i > 0 && i < totalItens - 1;
        const novoDisplay = isIntermediario && shouldHide ? 'none' : '';

        rowItem.style.display = novoDisplay;

        // Se for Experiência, busca e oculta o image-area.
        if (config.hasImageArea) {
            let nextElement = rowItem.nextElementSibling;
            while (nextElement && !nextElement.classList.contains('image-area')) {
                nextElement = nextElement.nextElementSibling;
            }
            if (nextElement && nextElement.classList.contains('image-area')) {
                nextElement.style.display = novoDisplay;
            }
        }
    }
}

// Wrappers para manter a assinatura das funções originais
function gerenciarVisibilidadeExperiencias(shouldHide) {
    gerenciarVisibilidade(shouldHide, Selectors.EXPERIENCIAS);
}
function gerenciarVisibilidadeProjetos(shouldHide) {
    gerenciarVisibilidade(shouldHide, Selectors.PROJETOS);
}

// =====================================================================
//                          CARREGAMENTO DE DADOS
// =====================================================================

/**
 * Abstrai a lógica repetitiva de fetch, remoção de itens e injeção de HTML.
 */
async function loadDataAndRender({ url, containerId, itemSelector, renderFn, dataPreProcessor }) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Contêiner ${containerId} não encontrado.`);
        return;
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro ${response.status}: ${response.statusText}`);
        }

        let data = await response.json();

        // 1. Pré-processamento (ex: ordenação)
        if (dataPreProcessor) {
            data = dataPreProcessor(data);
        }

        // 2. Limpeza de DOM
        container.querySelectorAll(itemSelector).forEach(el => el.remove());

        // 3. Geração de HTML
        const htmlContent = data.map(renderFn).join('');

        // 4. Injeção no DOM
        container.insertAdjacentHTML('beforeend', htmlContent);

    } catch (error) {
        console.error(`Falha no carregamento de dados para ${containerId}:`, error);
    }
}

// Implementações das funções de carregamento

async function listaProfile() {
    await loadDataAndRender({
        url: 'data/profile.json',
        containerId: 'box-profile',
        itemSelector: '.component-2',
        renderFn: item => `
            <div class="component-2 link-external" data-url="${item.url}" style="background: ${item.background_color}">
                <div class="text" style="color: ${item.text_color};">
                    <img src="${item.icon_src}" alt="${item.icon_alt}" style="width: 15px;">
                    ${item.text ? '&nbsp;&nbsp;' : ''}${item.text}
                </div>
            </div>
        `
    });
}

async function listaExperiencia() {
    await loadDataAndRender({
        url: 'data/experiencias.json',
        containerId: 'listagem-dinamica-experiencias',
        // Assumindo que .work.list-rm era a forma de selecionar itens de experiência no container
        itemSelector: '.work.list-rm, .image-area.list-rm',
        renderFn: item => {
            const imageAreaHTML = item.imgs.map(src => `
                <div class="image2"><img class="image3" src="${src}" alt="Imagem de ${item.empresa}"></div>
            `).join('');

            return `
                <div class="row-item list-rm">
                    <div class="date">${item.date}</div>
                    <div class="contents">
                        <a class="link" href="${item.link}" target="_blank" style="text-decoration: none;">
                            <div class="line-1-text">${item.texto}</div>
                            <img class="open-new-tab-icon" src="./svg/OpenNewTabIcon.svg" />
                        </a>
                        <div class="line-2">${item.empresa}</div>
                    </div>
                </div>
                <div class="image-area list-rm">${imageAreaHTML}</div>
            `;
        }
    });
}

async function listaProjetos() {
    const dataPreProcessor = data => data.sort((a, b) => {
        if (a.status === 200 && b.status !== 200) return -1;
        if (b.status === 200 && a.status !== 200) return 1;
        return 0;
    });

    await loadDataAndRender({
        url: 'data/projetos.json',
        containerId: 'listagem-dinamica-projetos',
        itemSelector: '.row-item', // Seleciona apenas os itens gerados (aqui assumimos a classe mais simples)
        dataPreProcessor: dataPreProcessor, // Aplica a ordenação
        renderFn: item => {
            const status = item.status;
            const isActive = status === 200;

            return `
                <div class="row-item pj-${item.id}">
                    <div class="date" style="cursor: default;">
                        <div class="${item.item_linha.status_icon}"></div>
                        ${item.item_linha.status}
                    </div>
                    <div class="contents link-external-projeto" style="cursor: ${isActive ? 'pointer' : 'no-drop'};" data-url="${item.item_linha.conteudo.url}">
                        <div class="link">
                            <div class="line-1-text">${item.item_linha.conteudo.titulo}</div>
                            <img class="open-new-tab-icon" src="${item.item_linha.conteudo.icone_link_src}" style="display: ${isActive ? '' : 'none'};"/>
                        </div>
                    </div>
                </div>
            `;
        }
    });
}

async function listaFormacao() {
    const dataPreProcessor = data => data.sort((a, b) => {
        if (a.status === 200 && b.status !== 200) return -1;
        if (b.status === 200 && a.status !== 200) return 1;
        return 0;
    });

    await loadDataAndRender({
        url: 'data/formacao.json',
        containerId: 'listagem-dinamica-formacao',
        itemSelector: '.row-item', // Seleciona apenas os itens gerados (aqui assumimos a classe mais simples)
        dataPreProcessor: dataPreProcessor, // Aplica a ordenação
        renderFn: item => {
            const status = item.status;
            const isActive = status === 200;

            return `
                <div class="row-item">
                    <div class="date2">
                        <div class="${item.status_icon}"></div>
                        ${item.status_text}
                    </div>
                    <div class="contents">
                        <div class="link">
                            <div class="line-1-text">
                                ${item.titulo}
                            </div>
                        </div>
                        <div class="line-22">${item.local}</div>
                    </div>
                </div>
            `;
        }
    });
}