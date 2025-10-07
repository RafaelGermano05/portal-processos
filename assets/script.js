// Dados dos processos - substitua com os processos reais da sua empresa
        const processos = [
            {
                titulo: "Onboarding",
                descricao: "Processo de integração de novos colaboradores",
                imagem: "assets/img/Sun-Academy.jpeg",
                url: "https://drive.google.com/drive/folders/1kS7iYwKMNpFEZXQemcxRzV1fuX870z58?usp=drive_link",
            },
            {
                titulo: "Solicitação de Máquina",
                descricao: "Formulário para solicitar equipamentos",
                imagem: "assets/img/solicitacao-maquinas.jpg",
                url: "https://solicitar-maquina.vercel.app/"
            },
            {
                titulo: "Avanço de Máquina",
                descricao: "Formulário para avançar equipamento para consultor",
                imagem: "assets/img/Catalogo-de-produtos-na-maquininha-de-cartao-Mercado-Pago.webp",
                url: "https://controle-estoque-fortsun.vercel.app/"
            },
            {
                titulo: "Relatório de Acompanhamento BI",
                descricao: "BI de relatórios de performance",
                imagem: "assets/img/POWER BI.jpg",
                url: "https://fortsun-bi.up.railway.app/"
            },
            {
                titulo: "Troca de Vendas",
                descricao: "Sistema de troca e devolução de vendas",
                imagem: "/assets/img/operacao-fast.jpg",
                url: "https://operacao-fast.vercel.app"
            },
            {
                titulo: "Credenciamento de Vendas",
                descricao: "CRM para envio de credenciamento",
                imagem: "assets/img/controle-vendas.png",
                url: "https://controle-vendas-fortsun.vercel.app/"
            },
            {
                titulo: "Acompanhamento Rota",
                descricao: "Formulário de acompanhamento rota",
                imagem: "/assets/img/acompanhamento-rota.webp",
                url: "https://forms.gle/y6wnXPitG7VBtTiV7"
            },
            {
                titulo: "POP",
                descricao: "Padrões de Operações e Processos",
                imagem: "/assets/img/pop.png",
                url: "https://docs.google.com/document/d/1mD6wSUuACPNE38nCJBRXyeX-N2EDazh3U0_7zhgcdgw/edit?tab=t.0"
            }
        ];

        // Função para renderizar os cards de processo
        function renderizarProcessos(processosParaRenderizar) {
            const galeria = document.getElementById('galeria');
            galeria.innerHTML = '';
            
            processosParaRenderizar.forEach(processo => {
                const card = document.createElement('div');
                card.className = 'card-processo';
                card.innerHTML = `
                    <div class="imagem-processo">
                        <img src="${processo.imagem}" alt="${processo.titulo}">
                        <div class="sobreposicao">
                            <button class="btn-rapido" onclick="window.open('${processo.url}', '_blank')">Acessar Rápido</button>
                        </div>
                    </div>
                    <div class="card-conteudo">
                        <div>
                            <h3 class="card-titulo">${processo.titulo}</h3>
                            <p class="card-descricao">${processo.descricao}</p>
                        </div>
                        <button class="btn-acessar" onclick="window.open('${processo.url}', '_blank')">Acessar Sistema</button>
                    </div>
                `;
                galeria.appendChild(card);
            });
        }

        // Função de pesquisa
        document.getElementById('pesquisa').addEventListener('input', function(e) {
            const termo = e.target.value.toLowerCase();
            const processosFiltrados = processos.filter(processo => 
                processo.titulo.toLowerCase().includes(termo) || 
                processo.descricao.toLowerCase().includes(termo)
            );
            renderizarProcessos(processosFiltrados);
        });

        // Inicializar a galeria
        renderizarProcessos(processos);
