Histórias de Usuário no Formato BDD
Este projeto se baseia na no pequeno negócios de frangos localizado em são luís – MA.
História 1: Cadastro de Fornecedor
Cenário: Registro de um novo fornecedor
Dado que eu sou o dono da loja de frangos
Quando eu acesso o sistema de controle de estoque
E seleciono a opção para adicionar um novo fornecedor
E preencho as informações necessárias, como nome do fornecedor, contato e endereço
Então o sistema deve salvar as informações do fornecedor
E confirmar o salvamento com uma mensagem de sucesso
História 2: Cadastro de Produtos
Cenário: Registro de um novo produto

Dado que eu sou o dono da loja de frangos
Quando eu acesso o sistema de controle de estoque
E escolho a opção para adicionar um novo produto
E insiro as especificações do produto, como nome, descrição, e preço
Então o sistema deve registrar o produto no inventário
E exibir uma confirmação de que o produto foi adicionado
História 3: Associação de Fornecedor a Produto
Cenário: Associação de fornecedor a um produto

Dado que eu sou o dono da loja de frangos
E já tenho fornecedores e produtos cadastrados no sistema
Quando eu acesso a funcionalidade de associação de fornecedores a produtos
E seleciono um fornecedor e um produto para associá-los
Então o sistema deve estabelecer a relação entre o fornecedor e o produto selecionado
E notificar que essa associação foi feita com sucesso
1 - Entendimento das Necessidades do Usuário
A partir das histórias de usuário, podemos inferir algumas necessidades fundamentais:
Facilidade de Uso: O sistema deve ser intuitivo e fácil de usar, permitindo que os gerentes de loja cadastrem fornecedores e produtos com pouca dificuldade.
Precisão e Confirmação: O sistema deve garantir que as informações fornecidas são registradas com precisão e fornecer confirmações visíveis para cada ação realizada.
Rastreamento e Organização: Deve possibilitar associar fornecedores aos produtos de maneira que facilite o rastreamento e gere relatórios claros sobre a origem dos produtos.
Segurança e Confiabilidade: Assegurar que todas as operações, especialmente as que envolvem dados sensíveis, são realizadas de forma segura e os dados armazenados estejam protegidos.
Flexibilidade e Escalabilidade: O sistema deve permitir ajustes futuros e ser capaz de lidar com o crescimento do negócio, como, por exemplo, aumento no número de fornecedores ou diversificação de produtos.
