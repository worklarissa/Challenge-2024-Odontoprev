# OdontoPrev - Solução Integrada de Saúde Bucal

Solução tecnológica para a plataforma OdontoPrev visando reduzir fraudes e otimizar a gestão de sinistros através de acompanhamento diário de pacientes e análise preditiva com inteligência artificial.

## Índice
- [Sobre o Problema](#sobre-o-problema)
- [Nossa Solução](#nossa-solu%C3%A7%C3%A3o)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Arquitetura do Projeto](#arquitetura-do-projeto)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Instalação e Configuração](#instala%C3%A7%C3%A3o-e-configura%C3%A7%C3%A3o)
- [Como Executar](#como-executar)
- [Links Úteis](#links-%C3%BAteis)
- [Contribuição](#contribui%C3%A7%C3%A3o)
- [Licença](#licen%C3%A7a)
- [Equipe](#equipe)


## Sobre o Problema

A plataforma OdontoPrev está enfrentando desafios significativos relacionados à geração de sinistros. Tanto fraudes como a geração de sinistros considerados ruins têm gerado altos custos para a empresa que busca oferecer um serviço cada vez mais especializado. Um aumento no excesso de consultas, tratamentos desnecessários e fraudes reflete não apenas um problema interno, mas também uma mudança no padrão de atendimento aos pacientes.

## Nossa Solução

Desenvolvemos uma solução integrada ao aplicativo já existente da OdontoPrev que consiste em duas novas funcionalidades principais[^1]:

1. **Acompanhamento diário de pacientes**: Interface gamificada onde os pacientes respondem perguntas sobre seus hábitos alimentares, saúde geral e higiene bucal.
2. **Análise preditiva via IA**: Sistema de prognóstico baseado em Raio-X que o paciente pode enviar pelo aplicativo, onde uma inteligência artificial realiza predições sobre sua saúde bucal.

Estas funcionalidades permitem que o dentista já conheça os hábitos do paciente e tenha uma ideia prévia de possíveis problemas dentais antes mesmo da consulta.

## Funcionalidades

### Acompanhamento Diário Gamificado

- Interface interativa e descontraída para aumentar o engajamento
- Sistema de pontuação (check-in) para incentivar o uso frequente
- Questionários sobre hábitos alimentares e de higiene bucal
- Pontos acumulados podem ser trocados por premiações a escolha da empresa


### Análise Preditiva com IA

- Upload de Raio-X diretamente pelo aplicativo
- Análise automática através de inteligência artificial
- Prognóstico preliminar para orientar o dentista
- Integração com o histórico de hábitos do paciente
- Funcionalidade opcional com bonificação em pontos


## Tecnologias Utilizadas

### Frontend
- React Native
- Expo

### Backend
- Python 3
- AWS Chalice


### Banco de Dados

- Oracle


### Metodologias e Práticas

- TDD (Test-Driven Development)
- Princípios SOLID
- Modularização por blueprints


## Arquitetura do Projeto

A solução foi desenvolvida com arquitetura modular seguindo princípios SOLID para garantir escalabilidade e manutenibilidade[^3]. A integração entre os componentes é feita através de:

1. **Schemas**: Responsáveis pela validação de dados de entrada nos endpoints[^3]
2. **CLI**: Gerencia o setup da aplicação antes de inicialização[^3]
3. **Middlewares**: Realizam validações e aplicam regras de negócio[^3]
4. **Interfaces**:
    - Cursor para queries no banco de dados[^3]
    - Motor de regras para aplicação das regras de negócio[^3]
5. **Helpers**: Desacoplam e abstraem operações complexas frequentemente utilizadas[^3]
6. **Chalice Views**: Definem os endpoints e suas lógicas[^3]

### Diagrama de Sequência

O diagrama a seguir demonstra a integração do aplicativo com o banco de dados (Oracle) e com a IA que fará a análise dos exames[^1].

```
[Aplicativo Mobile] <---> [API Backend] <---> [Banco de Dados Oracle]
                            |
                            v
                        [IA Preditiva]
```


## Estrutura de Pastas

```
projeto/
├── .expo/                  # Configurações nativas do React Native
├── node_modules/           # Dependências do projeto
├── assets/                 # Armazenamento de imagens 
├── components/             # Componentes reutilizáveis
├── screens/                # Telas carregadas a partir das rotas
└── App.js                  # Arquivo principal com configuração de rotas
```

Os demais arquivos na raiz são arquivos de configuração do projeto[^1].

## Instalação e Configuração

### Pré-requisitos

- Python 3.8 ou superior[^3]
- Node.js e npm
- Git


### Passos para instalação

1. Clone o repositório:
```
git clone https://github.com/worklarissa/Challenge-2024-Odontoprev.git
cd Challenge-2024-Odontoprev
git checkout v2
```

2. Configure o ambiente virtual Python:
```
python3 -m venv venv
source venv/bin/activate  # Linux/MacOS
# ou
venv\Scripts\activate     # Windows
```

3. Instale as dependências:
```
pip install -r requirements.txt
```

4. Configure o ambiente React Native:
```
npm install
```


## Como Executar

1. Para iniciar o backend:
```
python app.py
```

2. Para iniciar o aplicativo React Native:
```
npm start
# ou
npx expo start
```

3. Utilize um emulador ou escaneie o QR code com o aplicativo Expo Go no seu dispositivo móvel.

## Links Úteis

- [Repositório GitHub](https://github.com/worklarissa/Challenge-2024-Odontoprev/tree/v2)[^1]
- [Protótipo no Figma](https://www.figma.com/design/u39dJA2gZ4DYeMUIWOeSI8/Challenge-2024?nodeid=47-143&t=ilXPSibQslYlONdV-1)[^1]


## Contribuição

Contribuições são bem-vindas! Siga estas etapas para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

Por favor, certifique-se de seguir nosso código de conduta e de escrever testes para novas funcionalidades.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE.md) - veja o arquivo LICENSE.md para detalhes.

## Equipe

- **Larissa Araújo Gama Alvarenga** - RM 96496 - 2TDSPS[^1]
- **Larissa Lopes Oliveira** - RM 552628 - 2TDSPC[^1]
- **Luna Faustino Lima** - RM 552473 - 2TDSPS[^1]

---

**Nota**: A aplicação se encontra na branch "v2" do repositório[^1].

<div style="text-align: center">⁂</div>

[^1]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/41700551/754ea5ef-8e03-4177-a0da-00c9d921dbf3/2TDSPS-2TDSPC-Challenge-OdontoPrev.docx

[^2]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/41700551/2aa84688-3ae0-42c8-99b0-77c13efe656d/README.md

[^3]: https://github.com/viniciusao/odontoprev_desafio

[^4]: https://www.escoladnc.com.br/blog/boas-praticas-no-github-como-construir-um-bom-readme/

[^5]: https://github.com/OpenOdonto/sco

[^6]: https://www.dio.me/articles/como-criar-um-bom-readmemd

[^7]: https://guia.dev/pt/pillars/software-architecture/technical-documentation.html

[^8]: https://blog.rocketseat.com.br/como-fazer-um-bom-readme/

[^9]: https://github.com/orgs/community/discussions/66495

[^10]: https://www.dio.me/articles/personalize-o-readme-no-github

[^11]: https://dev.to/erikaheidi/documentacao-tecnica-para-iniciantes-parte-1-criando-um-bom-readme-para-o-seu-projeto-3ebl

[^12]: https://github.com/AmandaAilin/ReadmeTutorial

[^13]: https://www.youtube.com/watch?v=rSXLctzf-Ds

[^14]: https://gist.github.com/Luferat/a21a59339f7ce0bf6dbc49acd57372e9

[^15]: https://packaging.python.org/pt-br/latest/tutorials/installing-packages/

[^16]: https://www.alura.com.br/artigos/ven-poetry-no-python

[^17]: https://docs.github.com/pt/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/setting-up-your-python-project-for-codespaces

[^18]: https://packaging.python.org/pt-br/latest/guides/distributing-packages-using-setuptools/

[^19]: https://www.youtube.com/watch?v=-M4pMd2yQOM

[^20]: https://www.freecodecamp.org/portuguese/news/como-funcionam-as-licencas-de-codigo-aberto-e-como-adiciona-las-a-seus-projetos-2/

[^21]: https://docs.github.com/pt/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository

[^22]: https://docs.github.com/pt/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors

[^23]: https://www.dio.me/articles/10-erros-para-evitar-na-hora-de-criar-seu-readme

[^24]: https://brasilpaisdigital.com.br/odontologia-e-tecnologia-odontoprev-lanca-desafio-em-hackathon/

[^25]: https://tiinside.com.br/13/09/2022/odontoprev-lanca-desafio-em-hackathon/

[^26]: https://www.freecodecamp.org/portuguese/news/como-escrever-um-bom-arquivo-readme-para-seu-projeto-do-github/

[^27]: https://www.youtube.com/watch?v=6BWlY9RqS7M

[^28]: https://gist.github.com/uqmessias/b79a8f3729f8d3d263a7eb872ff5f89f

[^29]: https://dev.to/github/leia-me-ou-te-devoro-como-escrever-um-bom-readme-5hl4

[^30]: https://www.ciadeestagios.com.br/vagas/odontoprev/

[^31]: https://github.com/odontoprev

[^32]: https://github.com/Epaminondaslage/Como-montar-seu-README/blob/master/README.md

[^33]: https://www.odontoprev.com.br/carreiras/programas

[^34]: https://loja.odontoprev.com.br

[^35]: https://www.tabnews.com.br/kevinmarquesp/boas-praticas-pra-documentos-em-markdown

[^36]: https://conexao.odontoprev.com.br/desafios-e-aprendizados/

[^37]: https://github.com/r94oliveira/sistema-dentistas

[^38]: https://www.alura.com.br/artigos/escrever-bom-readme

[^39]: https://99jobs.com/odontoprev/jobs

[^40]: https://www.odontoprev.com.br/planos

[^41]: https://www.dio.me/articles/criando-um-readmemd-padronizado-e-simplificado-em-seus-projetos-com-um-script-bash

[^42]: https://packaging.python.org/pt-br/latest/guides/making-a-pypi-friendly-readme/

[^43]: https://github.com/elsewhencode/project-guidelines/blob/master/README-pt-BR.md

[^44]: https://blog.cubos.academy/readme-de-projeto-no-github-template-gratuito-de-readme/

[^45]: https://www.youtube.com/watch?v=k4Rsy8GbKE0

[^46]: https://www.dio.me/articles/melhores-praticas-para-gerenciamento-de-repositorios-no-github-maximizando-eficiencia-e-colaboracao

[^47]: https://dev.to/acaverna/pt-br-redames-do-github-ideias-e-dicas-4p3d

[^48]: https://www.reddit.com/r/Python/comments/11ti68c/readmeai_automated_readme_creation_and_codebase/?tl=pt-br

[^49]: https://www.youtube.com/watch?v=jIa8R69pKh8

[^50]: https://blog.formacao.dev/entendendo-o-arquivo-readme-md-dos-repositorios-do-github/

[^51]: https://aleatorio.dev.br/posts/boas-praticas-git/

[^52]: https://gist.github.com/lohhans/f8da0b147550df3f96914d3797e9fb89

[^53]: https://docs.github.com/pt/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

[^54]: https://miro.com/pt/diagrama/arquitetura-software-online/

[^55]: https://zeev.it/blog/fluxograma-ia/

[^56]: https://www.lucidchart.com/blog/pt/como-fazer-diagramas-de-arquitetura-de-sistema

[^57]: https://clickup.com/pt-BR/blog/67899/software-de-diagrama

[^58]: https://aws.amazon.com/pt/what-is/architecture-diagramming/

[^59]: https://www.em.com.br/app/noticia/empresas/2022/10/19/interna-empresas,1409241/confira-quais-sao-os-8-melhores-softwares-para-criar-fluxogramas.shtml

[^60]: https://zup.com.br/blog/c4-model

[^61]: https://www.lucidchart.com/pages/pt

[^62]: https://www.escoladnc.com.br/blog/guia-completo-para-criar-um-readme-de-qualidade-no-github/

[^63]: https://www.youtube.com/watch?v=vYxjD6v-_PA

[^64]: https://blog.formacao.dev/dicas-para-um-bom-readme-de-perfil-no-github/

[^65]: https://www.microsoft.com/pt-br/microsoft-365/visio/flowchart-software

[^66]: https://www.cnj.jus.br/wp-content/uploads/2011/01/manualmoreq.pdf

[^67]: https://cepein.femanet.com.br/BDigital/arqTccs/1211321104.pdf

[^68]: https://arquip.prefeitura.sp.gov.br/Assets/pgdoc/Manual_de_Introducao_Gestao_Documental.pdf

[^69]: https://www.sea.sc.gov.br/wp-content/uploads/2023/01/Apostila-do-Curso-de-Capacitacao-em-Gestao-Doc-Versao-2019.pdf

[^70]: https://github.com/opensanca/trilha-python/blob/master/README.md

[^71]: https://tuliocalil.com/criando-readmes-incriveis/

[^72]: https://portal.pbdoc.pb.gov.br/multimidia/videos-recomendados/gestao-documental-introducao-a-gestao-documental

[^73]: https://github.com/pyladies-brazil/introducao-python/blob/main/README.md

[^74]: https://embarcados.com.br/o-que-escrever-num-readme/

[^75]: https://mba.eci.ufmg.br/downloads/if_arq/introd.pdf

[^76]: https://repositorio.enap.gov.br/bitstream/1/3942/1/Módulo 2 -Noções de Gestão de Documentação.pdf

[^77]: https://www.zoho.com/blog/pt-br/projects/como-a-tecnologia-potencializa-sua-gestao-de-projetos.html

[^78]: https://docs.github.com/pt/contributing/writing-for-github-docs/best-practices-for-github-docs

[^79]: https://ubistart.com/blog/como-definir-a-tecnologia-de-desenvolvimento-para-um-projeto/

[^80]: https://abmes.org.br/linc/coluna/detalhe/1983/a-importancia-da-tecnologia-na-otimizacao-da-metodologia-de-projetos

[^81]: https://www.tabnews.com.br/DomCapivaraJr/encontre-o-readme-perfeito-aqui

[^82]: https://www.sysmap.com.br/techblog/documentacao-eficiente-com-github-copilot/

[^83]: https://packaging.python.org/pt-br/latest/tutorials/packaging-projects/

[^84]: https://digital.formobile.com.br/artigos/tecnologias-no-desenvolvimento-de-projetos/

[^85]: https://dev.to/kauefraga/personalizando-o-readme-do-seu-projeto-51jm

[^86]: https://www.docusign.com/pt-br/blog/tecnologias-nas-empresas

[^87]: https://www.youtube.com/watch?v=ef-78uxqFig

[^88]: https://www.dio.me/articles/procedimentos-criacao-pacotes-python

[^89]: https://clickup.com/pt-BR/blog/69860/requisitos-do-projeto

[^90]: https://awari.com.br/python-como-instalar-os-requisitos/

[^91]: https://www.datacamp.com/pt/tutorial/python-uv

[^92]: https://learn.microsoft.com/pt-br/visualstudio/python/tutorial-working-with-python-in-visual-studio-step-01-create-project?view=vs-2022

[^93]: https://docs.aws.amazon.com/pt_br/elasticbeanstalk/latest/dg/python-development-environment.html

[^94]: https://python-guide-pt-br.readthedocs.io/pt-br/latest/writing/structure.html

[^95]: https://www.youtube.com/watch?v=xMTtdPVODwo

[^96]: https://docs.python.org/pt-br/3.13/tutorial/venv.html

[^97]: https://www.youtube.com/watch?v=wTsfYXBM9Zg

[^98]: https://apidog.com/pt/blog/api-documentation-guide-tool/

[^99]: https://www.tabnews.com.br/DomCapivaraJr/como-documentar-uma-codebase-python-automaticamente

[^100]: https://br.hubspot.com/blog/marketing/documentacao-de-api

[^101]: https://www.youtube.com/watch?v=dBZZ3I9GqLE

[^102]: https://docs.python.org/pt-br/3.13/library/pydoc.html

[^103]: https://www.docusign.com/pt-br/blog/documentacao-de-api

[^104]: https://github.com/luizalabs/tutorial-python-brasil/blob/main/projeto.md

[^105]: https://learn.microsoft.com/pt-br/visualstudio/python/defining-custom-python-project-commands?view=vs-2022

[^106]: https://clickup.com/pt-BR/blog/258938/como-escrever-a-documentacao-da-api

[^107]: https://www.datacamp.com/pt/tutorial/github-and-git-tutorial-for-beginners

[^108]: https://api.sistemagestaoonline.com.br/v2/index.html

[^109]: https://www.locaweb.com.br/blog/temas/codigo-aberto/codigo-aberto-codigo-fechado/

[^110]: https://docs.github.com/pt/enterprise-server@3.16/communities/setting-up-your-project-for-healthy-contributions

[^111]: https://git-scm.com/book/pt-br/v2/Fundamentos-de-Git-Gravando-Alterações-em-Seu-Repositório

[^112]: https://cursa.app/pt/pagina/licencas-open-source-e-o-github

[^113]: https://www.dio.me/articles/como-contribuir-em-um-projeto-open-source-no-github-um-guia-passo-a-passo

[^114]: https://docs.python.org/pt-br/3.7/distributing/index.html

[^115]: https://docs.github.com/pt/communities/setting-up-your-project-for-healthy-contributions

[^116]: https://www.alura.com.br/artigos/como-escolher-uma-licenca-para-seu-projeto

[^117]: https://dev.to/reginadiana/como-escrever-um-readme-md-sensacional-no-github-4509

[^118]: https://docs.github.com/pt/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github

[^119]: https://github.com/portabilis/i-educar/blob/2.9/CONTRIBUTING.md

[^120]: https://www.dio.me/articles/completude-na-qualidade-de-dados

[^121]: https://pt.smartsheet.com/content/design-review-checklist-templates

[^122]: https://www.producaoonline.org.br/rpo/article/viewFile/1012/966

[^123]: https://www.dio.me/articles/editando-facilmente-o-readmemd-em-seus-projetos

[^124]: https://balta.io/blog/documentacao-com-github

[^125]: https://zup.com.br/blog/documentacao-de-projeto

[^126]: https://aquare.la/4-metricas-fundamentais-para-qualidade-de-dados-em-analytics/

[^127]: https://github.com/Epaminondaslage/Como-montar-seu-README

[^128]: https://pt.linkedin.com/advice/3/what-techniques-can-you-use-ensure-testing-process-dynxf?lang=pt

[^129]: https://docs.github.com/pt/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists

[^130]: https://movti.com.br/2024/07/02/projetos-de-software/

[^131]: https://github.com/arthurspk/guiadevbrasil/blob/main/README.md

