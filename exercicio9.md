# [M1S05] Ex 9 - Conceito do GitFlow

> Explique com suas palavras, o conceito do GitFlow e como ele é utilizado no controle de versão de um projeto.

> O Gitflow é um modelo com um conjunto de regras para versionar código via Git com o objetivo de organizar o fluxo de trabalho de um desenvolvedor trabalhando em conjunto com outras pessoas em diferentes branches em um projeto.

> A estrutura do Gitflow é composta da branch Main, Hotfix, Develop, Feature e Realease. A branch main, também chamada de master, é onde o código de produção está. Ela interage com a branch Hotfix e a Release. Multiplas branches Hotfix podem ser criadas para lidar com correções rápidas de bugs no código em produção. Após a correção, a branch Hotfix é mergeada com a Main e a Develop e excluida. A  branch Develop é uma linha do tempo com funcionalidade ainda não publicadas e que irão fazer merge com a branch release para ser testada (ambiente de homologação) antes de irem para a Main. cada funcionalidade específica em desenvolvimento é feita da branch feature. Quaundo finalizada, a branch feature é mergeada com a branch develop.

> Desenvolvi minha resposta com base no artigo da Alura: https://www.alura.com.br/artigos/git-flow-o-que-e-como-quando-utilizar?gclid=EAIaIQobChMI2PiJ8NHD_wIVHyjUAR3dXAOsEAAYASAAEgIIk_D_BwE 