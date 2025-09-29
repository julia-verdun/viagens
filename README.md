PONTOS CRÍTICOS
1.Responsividade Limitada: Seu CSS usa medidas fixas em vários elementos (larguras e alturas em px). Isso faz com que o layout quebre em telas menores.
👉 O ideal é usar unidades relativas como %, em ou rem, além de media queries.

2.Imagens Sem Otimização: As imagens são pesadas e em formatos tradicionais (.jpg, .png). Isso prejudica o carregamento em conexões lentas.
👉 Converter para .webp e reduzir o tamanho mantendo qualidade.

3.Falta de Textos Alternativos (alt): As imagens do site não possuem atributo alt, o que prejudica acessibilidade e SEO.
👉 Adicionar descrições relevantes em todas as imagens.

4.Links e Navegação Inconsistentes: Nem todas as páginas têm cabeçalho/menu igual, e alguns links podem quebrar dependendo do caminho do servidor.
👉 Padronizar a barra de navegação e revisar os links relativos/absolutos.

5.Formulário de Contato Sem Validação: O contato.html não valida campos como e-mail ou telefone. Isso permite envio de dados inválidos.
👉 Implementar validação com JavaScript e mensagens de erro claras.

6.Busca de Voos/Hotéis Simples Demais: O campo de busca apenas redireciona sem validar os dados digitados.
👉 Melhorar lógica de busca, exibir mensagens quando não houver resultados e permitir filtros.

7.SEO Deficiente: Faltam metatags (description, keywords) e títulos otimizados nas páginas.
👉 Incluir tags no <head> de cada página para melhor indexação nos buscadores.

8.Pouca Interatividade nos Cards: Os cards de ofertas e destinos são estáticos e não chamam atenção do usuário.
👉 Adicionar efeitos de hover, animações suaves e botões de ação.

9.Acessibilidade por Teclado Ausente: O site não mostra foco visível ao navegar com Tab. Usuários sem mouse terão dificuldade.
👉 Adicionar estilos :focus no CSS para botões e links.

1o.Ausência de Feedback em Ações: Ao selecionar voo ou enviar formulário, não há mensagem clara de confirmação ou erro.
👉 Implementar mensagens de “enviado com sucesso” ou “ocorreu um erro”, além de estados de carregamento.

