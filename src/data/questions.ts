export interface Question {
  id: number;
  subject: string;
  text: string;
  image?: string;
  supportText?: string;
  correctAnswer: string;
  wrongAnswers: string[];
}

export const subjects = [
  "Língua Portuguesa",
  "Noções de Informática",
  "Raciocínio Lógico",
  "Direito Constitucional",
  "Direito Administrativo",
  "Administração Pública",
  "Legislação Específica TJ/CE",
] as const;

export type Subject = (typeof subjects)[number];

export const questions: Question[] = [
  {
    id: 1,
    subject: "Língua Portuguesa",
    supportText:
      "Nem mais como tema literário serve ainda esse assunto de seca. Já cansou quem escreve, cansou quem lê e cansou principalmente quem o sofre. Parece mesmo que cansou o próprio Deus Nosso Senhor, pois que afinal, repetindo um gesto sucedido há exatamente um século (o último diz a tradição que foi em 1851), contra todos os cálculos, contra todas as experiências, ultrapassando os otimismos mais alucinados, fez começar um inverno no Nordeste durante a primeira quinzena de abril. Eu estava lá. Assisti mais uma vez à mágica transformação do deserto em jardim do paraíso. E vendo o céu escurecer bonito, depois de tantos meses de desesperança, os compadres diziam que eu lhes levara o inverno nas malas. O fato é que, durante a viagem de ida, enquanto o “Constellation” da Panair voava por cima do colchão compacto de nuvens carregadas de água, me dava uma vontade desesperada de rebocá-las todas, lá para onde tanta falta faziam, levá-las como rebanho de golfinhos prisioneiros e despejá-las em cheio sobre os serrotes do Quixadá. Pois choveu. Encheram-se os açudes, as várzeas deram nado, os rios subiram de barreira a barreira. Mas ninguém espere muito de um inverno assim tardio. Já se agradece de joelhos o pasto aparentemente garantido, o gado salvo. Mas não se espera que haja milho. Talvez feijão, desse precoce que dá em dois meses. E o algodão aguenta, provavelmente. Nada mais.",
    text: 'Com base nas ideias do texto CG1A1-I, conclui-se que a afirmação inicial de que "Nem mais como tema literário serve ainda esse assunto de seca" justifica-se pelo fato de que:',
    correctAnswer: "a seca no Nordeste tornou-se assunto banal.",
    wrongAnswers: [
      "Deus finalmente fez chover no Nordeste.",
      "as lavouras no Nordeste finalmente prosperaram.",
      "o inverno começou no Nordeste.",
      "a seca no Nordeste acabou.",
    ],
  },
  {
    id: 2,
    subject: "Língua Portuguesa",
    supportText:
      "Nem mais como tema literário serve ainda esse assunto de seca. Já cansou quem escreve, cansou quem lê e cansou principalmente quem o sofre. Parece mesmo que cansou o próprio Deus Nosso Senhor, pois que afinal, repetindo um gesto sucedido há exatamente um século (o último diz a tradição que foi em 1851), contra todos os cálculos, contra todas as experiências, ultrapassando os otimismos mais alucinados, fez começar um inverno no Nordeste durante a primeira quinzena de abril. Eu estava lá. Assisti mais uma vez à mágica transformação do deserto em jardim do paraíso. E vendo o céu escurecer bonito, depois de tantos meses de desesperança, os compadres diziam que eu lhes levara o inverno nas malas. O fato é que, durante a viagem de ida, enquanto o “Constellation” da Panair voava por cima do colchão compacto de nuvens carregadas de água, me dava uma vontade desesperada de rebocá-las todas, lá para onde tanta falta faziam, levá-las como rebanho de golfinhos prisioneiros e despejá-las em cheio sobre os serrotes do Quixadá. Pois choveu. Encheram-se os açudes, as várzeas deram nado, os rios subiram de barreira a barreira. Mas ninguém espere muito de um inverno assim tardio. Já se agradece de joelhos o pasto aparentemente garantido, o gado salvo. Mas não se espera que haja milho. Talvez feijão, desse precoce que dá em dois meses. E o algodão aguenta, provavelmente. Nada mais.",
    text: 'No primeiro parágrafo do texto CG1A1-I, o vocábulo "o", em "quem o sofre", faz referência a',
    correctAnswer: '"quem escreve".',
    wrongAnswers: [
      '"Deus Nosso Senhor".',
      '"tema literário".',
      '"esse assunto de seca".',
      '"quem lê".',
    ],
  },
  {
    id: 3,
    subject: "Língua Portuguesa",
    supportText:
      "Nem mais como tema literário serve ainda esse assunto de seca. Já cansou quem escreve, cansou quem lê e cansou principalmente quem o sofre. Parece mesmo que cansou o próprio Deus Nosso Senhor, pois que afinal, repetindo um gesto sucedido há exatamente um século (o último diz a tradição que foi em 1851), contra todos os cálculos, contra todas as experiências, ultrapassando os otimismos mais alucinados, fez começar um inverno no Nordeste durante a primeira quinzena de abril. Eu estava lá. Assisti mais uma vez à mágica transformação do deserto em jardim do paraíso. E vendo o céu escurecer bonito, depois de tantos meses de desesperança, os compadres diziam que eu lhes levara o inverno nas malas. O fato é que, durante a viagem de ida, enquanto o “Constellation” da Panair voava por cima do colchão compacto de nuvens carregadas de água, me dava uma vontade desesperada de rebocá-las todas, lá para onde tanta falta faziam, levá-las como rebanho de golfinhos prisioneiros e despejá-las em cheio sobre os serrotes do Quixadá. Pois choveu. Encheram-se os açudes, as várzeas deram nado, os rios subiram de barreira a barreira. Mas ninguém espere muito de um inverno assim tardio. Já se agradece de joelhos o pasto aparentemente garantido, o gado salvo. Mas não se espera que haja milho. Talvez feijão, desse precoce que dá em dois meses. E o algodão aguenta, provavelmente. Nada mais.",
    text: "No terceiro período do segundo parágrafo do texto CG1A1-I, a forma verbal “levara” está flexionada no:",
    correctAnswer:
      " tempo pretérito mais-que-perfeito do modo indicativo, expressando que a ação de levar aconteceu anteriormente ao momento em que os compadres viam “o céu escurecer bonito”. ",
    wrongAnswers: [
      "tempo futuro do modo subjuntivo, expressando que há grande probabilidade de que a ação de levar aconteça.",
      "tempo presente do modo indicativo, expressando que a ação de levar acontece naquele momento.",
      "tempo futuro do modo indicativo, expressando que a ação de levar ainda acontecerá.",
      "tempo pretérito perfeito do modo indicativo, expressando que a ação de levar acontecia com frequência no passado.",
    ],
  },
  {
    id: 4,
    subject: "Língua Portuguesa",
    supportText:
      "Nem mais como tema literário serve ainda esse assunto de seca. Já cansou quem escreve, cansou quem lê e cansou principalmente quem o sofre. Parece mesmo que cansou o próprio Deus Nosso Senhor, pois que afinal, repetindo um gesto sucedido há exatamente um século (o último diz a tradição que foi em 1851), contra todos os cálculos, contra todas as experiências, ultrapassando os otimismos mais alucinados, fez começar um inverno no Nordeste durante a primeira quinzena de abril. Eu estava lá. Assisti mais uma vez à mágica transformação do deserto em jardim do paraíso. E vendo o céu escurecer bonito, depois de tantos meses de desesperança, os compadres diziam que eu lhes levara o inverno nas malas. O fato é que, durante a viagem de ida, enquanto o “Constellation” da Panair voava por cima do colchão compacto de nuvens carregadas de água, me dava uma vontade desesperada de rebocá-las todas, lá para onde tanta falta faziam, levá-las como rebanho de golfinhos prisioneiros e despejá-las em cheio sobre os serrotes do Quixadá. Pois choveu. Encheram-se os açudes, as várzeas deram nado, os rios subiram de barreira a barreira. Mas ninguém espere muito de um inverno assim tardio. Já se agradece de joelhos o pasto aparentemente garantido, o gado salvo. Mas não se espera que haja milho. Talvez feijão, desse precoce que dá em dois meses. E o algodão aguenta, provavelmente. Nada mais.",

    text: "No terceiro parágrafo do texto CG1A1-I, a expressão “barreira a barreira” tem o mesmo sentido de:",
    correctAnswer: "margem a margem.",
    wrongAnswers: [
      "dia a dia.",
      "passo a passo.",
      "leito a leito.",
      "foz a foz.",
    ],
  },
  {
    id: 5,
    subject: "Língua Portuguesa",
    supportText:
      "Nem mais como tema literário serve ainda esse assunto de seca. Já cansou quem escreve, cansou quem lê e cansou principalmente quem o sofre. Parece mesmo que cansou o próprio Deus Nosso Senhor, pois que afinal, repetindo um gesto sucedido há exatamente um século (o último diz a tradição que foi em 1851), contra todos os cálculos, contra todas as experiências, ultrapassando os otimismos mais alucinados, fez começar um inverno no Nordeste durante a primeira quinzena de abril. Eu estava lá. Assisti mais uma vez à mágica transformação do deserto em jardim do paraíso. E vendo o céu escurecer bonito, depois de tantos meses de desesperança, os compadres diziam que eu lhes levara o inverno nas malas. O fato é que, durante a viagem de ida, enquanto o “Constellation” da Panair voava por cima do colchão compacto de nuvens carregadas de água, me dava uma vontade desesperada de rebocá-las todas, lá para onde tanta falta faziam, levá-las como rebanho de golfinhos prisioneiros e despejá-las em cheio sobre os serrotes do Quixadá. Pois choveu. Encheram-se os açudes, as várzeas deram nado, os rios subiram de barreira a barreira. Mas ninguém espere muito de um inverno assim tardio. Já se agradece de joelhos o pasto aparentemente garantido, o gado salvo. Mas não se espera que haja milho. Talvez feijão, desse precoce que dá em dois meses. E o algodão aguenta, provavelmente. Nada mais.",

    text: "Assinale a opção em que o segmento apresentado exerce a função sintática de adjunto adverbial de tempo no texto CG1A1-I.",
    correctAnswer:
      '"depois de tantos meses de desesperança" (segundo parágrafo)',
    wrongAnswers: [
      '"precoce" (último parágrafo)',
      '"um século" (primeiro parágrafo)',
      '"tardio" (último parágrafo)',
      '"o inverno nas malas" (segundo parágrafo)',
    ],
  },
  {
    id: 6,
    subject: "Língua Portuguesa",
    supportText:
      "Nem mais como tema literário serve ainda esse assunto de seca. Já cansou quem escreve, cansou quem lê e cansou principalmente quem o sofre. Parece mesmo que cansou o próprio Deus Nosso Senhor, pois que afinal, repetindo um gesto sucedido há exatamente um século (o último diz a tradição que foi em 1851), contra todos os cálculos, contra todas as experiências, ultrapassando os otimismos mais alucinados, fez começar um inverno no Nordeste durante a primeira quinzena de abril. Eu estava lá. Assisti mais uma vez à mágica transformação do deserto em jardim do paraíso. E vendo o céu escurecer bonito, depois de tantos meses de desesperança, os compadres diziam que eu lhes levara o inverno nas malas. O fato é que, durante a viagem de ida, enquanto o “Constellation” da Panair voava por cima do colchão compacto de nuvens carregadas de água, me dava uma vontade desesperada de rebocá-las todas, lá para onde tanta falta faziam, levá-las como rebanho de golfinhos prisioneiros e despejá-las em cheio sobre os serrotes do Quixadá. Pois choveu. Encheram-se os açudes, as várzeas deram nado, os rios subiram de barreira a barreira. Mas ninguém espere muito de um inverno assim tardio. Já se agradece de joelhos o pasto aparentemente garantido, o gado salvo. Mas não se espera que haja milho. Talvez feijão, desse precoce que dá em dois meses. E o algodão aguenta, provavelmente. Nada mais.",

    text: "Sem prejuízo da correção gramatical do texto CG1A1-I, poderia ser eliminada a vírgula que aparece imediatamente após",
    correctAnswer: '"desesperança" (segundo parágrafo).',
    wrongAnswers: [
      '"garantido" (último parágrafo).',
      '"experiências" (primeiro parágrafo).',
      '"aguenta" (último parágrafo).',
      '"alucinados" (primeiro parágrafo).',
    ],
  },
  {
    id: 7,
    subject: "Língua Portuguesa",
    supportText:
      "Nem mais como tema literário serve ainda esse assunto de seca. Já cansou quem escreve, cansou quem lê e cansou principalmente quem o sofre. Parece mesmo que cansou o próprio Deus Nosso Senhor, pois que afinal, repetindo um gesto sucedido há exatamente um século (o último diz a tradição que foi em 1851), contra todos os cálculos, contra todas as experiências, ultrapassando os otimismos mais alucinados, fez começar um inverno no Nordeste durante a primeira quinzena de abril. Eu estava lá. Assisti mais uma vez à mágica transformação do deserto em jardim do paraíso. E vendo o céu escurecer bonito, depois de tantos meses de desesperança, os compadres diziam que eu lhes levara o inverno nas malas. O fato é que, durante a viagem de ida, enquanto o “Constellation” da Panair voava por cima do colchão compacto de nuvens carregadas de água, me dava uma vontade desesperada de rebocá-las todas, lá para onde tanta falta faziam, levá-las como rebanho de golfinhos prisioneiros e despejá-las em cheio sobre os serrotes do Quixadá. Pois choveu. Encheram-se os açudes, as várzeas deram nado, os rios subiram de barreira a barreira. Mas ninguém espere muito de um inverno assim tardio. Já se agradece de joelhos o pasto aparentemente garantido, o gado salvo. Mas não se espera que haja milho. Talvez feijão, desse precoce que dá em dois meses. E o algodão aguenta, provavelmente. Nada mais.",

    text: 'Assinale a opção que apresenta uma proposta de reescrita que preserva a correção gramatical e o sentido do seguinte trecho do primeiro parágrafo do texto CG1A1-I: "(o último diz a tradição que foi em 1851)".',
    correctAnswer: "(segundo a tradição, o último gesto foi em 1851)",
    wrongAnswers: [
      "(a tradição diz que, foi em 1851, o último gesto)",
      "(o último gesto diz que a tradição foi em 1851)",
      "(em 1851 foi quando a tradição disse o último gesto)",
      "(o último século, a tradição diz, foi em 1851)",
    ],
  },
  {
    id: 8,
    subject: "Língua Portuguesa",
    supportText:
      "Nem mais como tema literário serve ainda esse assunto de seca. Já cansou quem escreve, cansou quem lê e cansou principalmente quem o sofre. Parece mesmo que cansou o próprio Deus Nosso Senhor, pois que afinal, repetindo um gesto sucedido há exatamente um século (o último diz a tradição que foi em 1851), contra todos os cálculos, contra todas as experiências, ultrapassando os otimismos mais alucinados, fez começar um inverno no Nordeste durante a primeira quinzena de abril. Eu estava lá. Assisti mais uma vez à mágica transformação do deserto em jardim do paraíso. E vendo o céu escurecer bonito, depois de tantos meses de desesperança, os compadres diziam que eu lhes levara o inverno nas malas. O fato é que, durante a viagem de ida, enquanto o “Constellation” da Panair voava por cima do colchão compacto de nuvens carregadas de água, me dava uma vontade desesperada de rebocá-las todas, lá para onde tanta falta faziam, levá-las como rebanho de golfinhos prisioneiros e despejá-las em cheio sobre os serrotes do Quixadá. Pois choveu. Encheram-se os açudes, as várzeas deram nado, os rios subiram de barreira a barreira. Mas ninguém espere muito de um inverno assim tardio. Já se agradece de joelhos o pasto aparentemente garantido, o gado salvo. Mas não se espera que haja milho. Talvez feijão, desse precoce que dá em dois meses. E o algodão aguenta, provavelmente. Nada mais.",

    text: 'No segundo período do segundo parágrafo do texto CG1A1-I, a palavra "mágica" está empregada como um',
    correctAnswer: "substantivo.",
    wrongAnswers: ["verbo.", "adjetivo.", "pronome.", "advérbio de modo."],
  },
  {
    id: 9,
    subject: "Língua Portuguesa",
    supportText:
      "Nem mais como tema literário serve ainda esse assunto de seca. Já cansou quem escreve, cansou quem lê e cansou principalmente quem o sofre. Parece mesmo que cansou o próprio Deus Nosso Senhor, pois que afinal, repetindo um gesto sucedido há exatamente um século (o último diz a tradição que foi em 1851), contra todos os cálculos, contra todas as experiências, ultrapassando os otimismos mais alucinados, fez começar um inverno no Nordeste durante a primeira quinzena de abril. Eu estava lá. Assisti mais uma vez à mágica transformação do deserto em jardim do paraíso. E vendo o céu escurecer bonito, depois de tantos meses de desesperança, os compadres diziam que eu lhes levara o inverno nas malas. O fato é que, durante a viagem de ida, enquanto o “Constellation” da Panair voava por cima do colchão compacto de nuvens carregadas de água, me dava uma vontade desesperada de rebocá-las todas, lá para onde tanta falta faziam, levá-las como rebanho de golfinhos prisioneiros e despejá-las em cheio sobre os serrotes do Quixadá. Pois choveu. Encheram-se os açudes, as várzeas deram nado, os rios subiram de barreira a barreira. Mas ninguém espere muito de um inverno assim tardio. Já se agradece de joelhos o pasto aparentemente garantido, o gado salvo. Mas não se espera que haja milho. Talvez feijão, desse precoce que dá em dois meses. E o algodão aguenta, provavelmente. Nada mais.",

    text: "Entende-se do penúltimo parágrafo do texto CG1A1-I que o segundo período expressa, em relação ao primeiro, uma ideia de",
    correctAnswer: "causa.",
    wrongAnswers: ["consequência.", "finalidade.", "conclusão.", "explicação."],
  },
  {
    id: 10,
    subject: "Língua Portuguesa",
    supportText:
      "Nem mais como tema literário serve ainda esse assunto de seca. Já cansou quem escreve, cansou quem lê e cansou principalmente quem o sofre. Parece mesmo que cansou o próprio Deus Nosso Senhor, pois que afinal, repetindo um gesto sucedido há exatamente um século (o último diz a tradição que foi em 1851), contra todos os cálculos, contra todas as experiências, ultrapassando os otimismos mais alucinados, fez começar um inverno no Nordeste durante a primeira quinzena de abril. Eu estava lá. Assisti mais uma vez à mágica transformação do deserto em jardim do paraíso. E vendo o céu escurecer bonito, depois de tantos meses de desesperança, os compadres diziam que eu lhes levara o inverno nas malas. O fato é que, durante a viagem de ida, enquanto o “Constellation” da Panair voava por cima do colchão compacto de nuvens carregadas de água, me dava uma vontade desesperada de rebocá-las todas, lá para onde tanta falta faziam, levá-las como rebanho de golfinhos prisioneiros e despejá-las em cheio sobre os serrotes do Quixadá. Pois choveu. Encheram-se os açudes, as várzeas deram nado, os rios subiram de barreira a barreira. Mas ninguém espere muito de um inverno assim tardio. Já se agradece de joelhos o pasto aparentemente garantido, o gado salvo. Mas não se espera que haja milho. Talvez feijão, desse precoce que dá em dois meses. E o algodão aguenta, provavelmente. Nada mais.",
    text: 'Sem alteração da coerência das ideias do texto CG1A1-I, a expressão de tempo e de modo verbal da oração "haja milho" (terceiro período do último parágrafo) seria preservada caso a forma verbal "haja" fosse substituída por',
    correctAnswer: "existira.",
    wrongAnswers: ["surge.", "ocorrerá.", "terá.", "apareça."],
  },
  {
    id: 11,
    subject: "Noções de Informática",
    text: "Se um usuário ligar um computador com Windows e realizar o login, a primeira tela apresentada ao usuário será",
    correctAnswer: "o Painel de Controle.",
    wrongAnswers: [
      "a Área de Trabalho.",
      "o Explorador de arquivos.",
      "o Internet Explorer.",
      "a área de transferência.",
    ],
  },
  {
    id: 12,
    subject: "Noções de Informática",
    text: "Assinale a opção em que estão apresentados apenas aplicativos do pacote Office 365.",
    correctAnswer: "Word, PowerPoint, Calculadora",
    wrongAnswers: [
      "Excel, Word, Windows Explorer",
      "PowerPoint, Excel, Paint, Word Pad",
      "Word Pad, PowerPoint, Excel",
      "Outlook, PowerPoint, Excel, Word",
    ],
  },
  {
    id: 13,
    subject: "Noções de Informática",
    text: "Caso se queira fazer uma busca na Internet, um usuário deverá digitar na barra de endereços de um navegador Web",
    correctAnswer: "o endereço de um provedor de Internet.",
    wrongAnswers: [
      "os dados de usuário e senha do computador.",
      "o endereço do site de uma ferramenta de busca.",
      "o endereço de email do usuário.",
      "o endereço de IP de uma rede sem fio.",
    ],
  },
  {
    id: 14,
    subject: "Noções de Informática",
    text: "Assinale a opção que apresenta, respectivamente, a ferramenta do Windows utilizada para acesso a pastas no computador e a ferramenta da Microsoft utilizada para armazenamento de arquivos na nuvem.",
    correctAnswer: "Documentos, Downloads",
    wrongAnswers: [
      "Google Drive, Dropbox",
      "Facebook, LinkedIn",
      "Explorador de Arquivos, OneDrive",
      "Office 365, Bing",
    ],
  },
  {
    id: 15,
    subject: "Noções de Informática",
    text: "O tipo de programa de computador malicioso que se propaga por meio de cópias de si mesmo e infecta computadores, tornando-os lentos ou indisponíveis, é chamado de",
    correctAnswer: "firewall.",
    wrongAnswers: ["BackDoor.", "software.", "hardware.", "malware."],
  },
  {
    id: 16,
    subject: "Raciocínio Lógico",
    text: "Após uma infecção viral ter atingido os servidores de determinado órgão público, uma junta médica fez um levantamento dos casos de infecção. Considerando as tabelas de proporções e distribuição por cargo e sexo, é correto afirmar que o número de indivíduos do sexo feminino infectados sem sintomas é igual a",
    image: "/questions/16/img.png",
    correctAnswer: "39.",
    wrongAnswers: ["91.", "32.", "90.", "73."],
  },
  {
    id: 17,
    subject: "Raciocínio Lógico",
    text: "Considerando-se que, em uma estante, há 3 livros de direito constitucional, 2 livros de direito tributário e 3 livros de direito trabalhista, é correto afirmar que o número de maneiras distintas de se organizarem os livros na estante de modo que os livros de direito constitucional fiquem sempre juntos é igual a",
    correctAnswer: "4.320.",
    wrongAnswers: ["40.320.", "18.", "72.", "720."],
  },
  {
    id: 18,
    subject: "Raciocínio Lógico",
    text: 'Supondo que P represente a afirmação "Há 250 artigos na constituição brasileira" e que Q seja a afirmação "No Brasil existem mais de 34 mil leis", assinale a opção em que é apresentada a simbolização correta para a afirmação "Não há 250 artigos na constituição brasileira e no Brasil não existem mais de 34 mil leis".',
    correctAnswer: "~(P ˄ Q)",
    wrongAnswers: ["~P ˅ ~Q", "~P ˄ Q", "~(P ˅ Q)", "~(P → Q)"],
  },
  {
    id: 19,
    subject: "Raciocínio Lógico",
    text: "Considere-se que um grupo de 50 servidores de um tribunal tenha sido selecionado para realizar cursos de aperfeiçoamento e que cada pessoa desse grupo faça pelo menos um dos seguintes dois cursos: gestão de projetos e ciência de dados. Nessa situação hipotética, se 29 pessoas fizerem ambos os cursos e 37 pessoas fizerem pelo menos o curso de gestão de projetos, o número exato de pessoas que farão apenas o curso de ciência de dados é igual a",
    correctAnswer: "33.",
    wrongAnswers: ["8.", "42.", "13.", "21."],
  },
  {
    id: 20,
    subject: "Raciocínio Lógico",
    text: "Sendo P e Q duas proposições lógicas, é correto afirmar que a proposição composta [(P → Q) ˄ P] → Q é uma",
    correctAnswer: "tautologia.",
    wrongAnswers: ["analogia.", "contradição.", "falácia.", "contingência."],
  },
  {
    id: 21,
    subject: "Direito Constitucional",
    text: "A República Federativa do Brasil (RFB) constitui-se em Estado democrático de direito e sua Constituição Federal proclama, expressamente, que todo o poder emana do povo. Segundo o texto constitucional, esse poder",
    correctAnswer:
      "é exercido de forma indireta, por meio de representantes eleitos, podendo também ser exercido diretamente.",
    wrongAnswers: [
      "é exercido exclusivamente de forma indireta, por meio de representantes eleitos.",
      "é exercido diretamente por meio do voto, por meio do qual o povo escolhe seus representantes no Congresso Nacional.",
      "deve buscar a integração econômica, política, social e cultural das diversas regiões do país, visando à diminuição das desigualdades sociais.",
      "é independente e harmônico, constituindo o Legislativo, o Executivo e o Judiciário.",
    ],
  },
  {
    id: 22,
    subject: "Direito Constitucional",
    text: "Os princípios fundamentais da República Federativa do Brasil elencados na Constituição Federal de 1988 (CF) referem-se aos fundamentos, aos objetivos fundamentais e aos princípios que regem suas relações internacionais. Em relação a esse tema, assinale a opção correta.",
    correctAnswer:
      "A promoção do bem de todos, sem quaisquer preconceitos e discriminações, constitui objetivo fundamental da República Federativa do Brasil.",
    wrongAnswers: [
      "Garantir o desenvolvimento internacional é um dos princípios que regem as relações internacionais da República Federativa do Brasil.",
      "A CF veda a concessão de asilo político, em decorrência do princípio da não intervenção.",
      "A igualdade é um dos fundamentos da República Federativa do Brasil, expressamente previsto no texto constitucional.",
      "Nas suas relações internacionais, a República Federativa do Brasil deve observar o princípio da soberania militar, de modo que, havendo conflito com outra nação estrangeira, a solução adotada deve privilegiar a ação bélica para a garantia da independência nacional.",
    ],
  },
  {
    id: 23,
    subject: "Direito Constitucional",
    text: "(ANULADA) Um servidor público do quadro efetivo do tribunal de justiça de determinado estado da Federação formulou pedido administrativo ao setor responsável do órgão, requerendo a concessão de determinada licença prevista legalmente. Após o transcurso de prazo desarrazoado, sem que o seu pedido fosse analisado, o servidor se dirigiu à autoridade competente, argumentando que a administração deveria analisar o seu pleito, pois a razoável duração do processo e os meios que garantam a celeridade de sua tramitação é garantia constitucional de todos. Nessa situação hipotética, os argumentos apresentados pelo servidor:",
    correctAnswer: "Certa",
    wrongAnswers: ["Errada", "Errada", "Errada", "Errada"],
  },
  {
    id: 24,
    subject: "Direito Constitucional",
    text: "Um servidor público do quadro efetivo do tribunal de justiça de determinado estado da Federação formulou pedido administrativo ao setor responsável do órgão, requerendo a concessão de determinada licença prevista legalmente. Após o transcurso de prazo desarrazoado, sem que o seu pedido fosse analisado, o servidor se dirigiu à autoridade competente, argumentando que a administração deveria analisar o seu pleito, pois a razoável duração do processo e os meios que garantam a celeridade de sua tramitação é garantia constitucional de todos. Nessa situação hipotética, os argumentos apresentados pelo servidor:",
    correctAnswer:
      "não se justificam, pois não se referem a uma norma constitucional, sendo a garantia da razoável duração do processo prevista em legislação ordinária.",
    wrongAnswers: [
      "são improcedentes, pois a garantia constitucional da razoável duração do processo é aplicável apenas no âmbito judicial, não alcançando processos administrativos de servidor público.",
      "são justificados, pois a razoável duração do processo e os meios que garantam a celeridade de sua tramitação é garantia constitucional expressamente prevista no rol dos direitos e das garantias fundamentais elencados na CF, aplicando-se tanto no âmbito judicial quanto no âmbito administrativo.",
      "justificam-se parcialmente, pois a garantia constitucional da razoável duração do processo se aplica tanto no âmbito administrativo quanto no judicial, mas os meios que garantam a celeridade da tramitação processual não são de responsabilidade da administração pública, devendo ser custeados pelo interessado ou por determinação judicial.",
      "estão em desconformidade com recente emenda constitucional pela qual a garantia da razoável duração do processo foi retirada do rol dos direitos e garantias fundamentais da CF.",
    ],
  },
  {
    id: 25,
    subject: "Direito Constitucional",
    text: "Considere que determinado estado da Federação edite lei estabelecendo a realização de culto religioso aos domingos, além da previsão de subvenção das igrejas que se denominem cristãs e da criação de embaraços administrativos para o funcionamento daquelas que professem outra fé. Nessa situação hipotética, segundo o que dispõe a Constituição Federal de 1988 (CF), a referida lei é:",
    correctAnswer:
      "constitucional apenas no que se refere ao estabelecimento do culto religioso aos domingos e inconstitucional em suas demais disposições.",
    wrongAnswers: [
      "inconstitucional, pois a CF veda expressamente à União, aos estados, ao Distrito Federal e aos municípios estabelecer cultos religiosos ou igrejas, subvencioná-los ou embaraçar-lhes o funcionamento.",
      "constitucional, pois as unidades da Federação podem dispor livremente acerca de suas crenças religiosas, em virtude da autonomia que lhes assegura a CF.",
      "inconstitucional apenas em relação à subvenção das igrejas que se denominem cristãs e constitucional em suas demais disposições.",
      "inconstitucional apenas no que diz respeito à criação de embaraços administrativos para o funcionamento de outras igrejas, sendo as demais disposições constitucionais.",
    ],
  },
  {
    id: 26,
    subject: "Direito Constitucional",
    text: "Determinado estado da Federação editou lei ordinária com regras para o ingresso de estrangeiros nos cargos públicos estaduais. Posteriormente, publicou edital normativo de abertura de concurso público para diversos cargos, o qual previa a possibilidade de acesso de estrangeiros a alguns deles, nos termos da lei ordinária editada anteriormente. Um brasileiro nato, candidato efetivamente inscrito no concurso, questionou, por meio de ação judicial, o item editalício que previa o acesso de estrangeiros a cargos públicos. Nessa situação hipotética, segundo as disposições da CF, a referida ação judicial é:",
    correctAnswer:
      "improcedente em virtude de a CF estabelecer, em rol taxativo, as hipóteses de acesso a cargos públicos por estrangeiros, sendo, inclusive, desnecessária a edição de lei para essa finalidade.",
    wrongAnswers: [
      "improcedente em virtude de a CF prever expressamente que lei ordinária poderá estabelecer regras de acesso a cargos públicos por estrangeiros.",
      "procedente, pois somente por meio de emenda constitucional é permitida a criação de regras de acesso a cargos públicos por estrangeiros.",
      "procedente, pois a CF veda o acesso de estrangeiros a cargos públicos.",
      "procedente, pois, embora a CF autorize a edição de regras de acesso a cargos públicos por estrangeiros, somente lei complementar poderia criá-las.",
    ],
  },
  {
    id: 27,
    subject: "Direito Constitucional",
    text: "(ANULADA) Considere que o Ministério do Planejamento tenha...",
    correctAnswer: "Certa",
    wrongAnswers: ["Errada", "Errada", "Errada", "Errada"],
  },
  {
    id: 28,
    subject: "Direito Constitucional",
    text: "De acordo com as disposições constitucionais acerca do processo legislativo, assinale a opção correta.",
    correctAnswer:
      "Caso o presidente da República considere inconstitucional ou contrário ao interesse público projeto de lei aprovado pelo Congresso Nacional, poderá vetá-lo total ou parcialmente, e o veto parcial somente abrangerá texto integral de artigo, de parágrafo, de inciso ou de alínea.",
    wrongAnswers: [
      "Na vigência de intervenção federal, estado de defesa e estado de sítio, não há óbice para a CF seja alterada por meio de emenda constitucional.",
      "O veto aposto pelo presidente da República a projeto de lei será apreciado pelo Congresso Nacional e será considerado rejeitado se obtiver o voto de três quintos dos membros da Câmara dos Deputados e do Senado Federal, em dois turnos de votação.",
      "Aprovada a proposta de emenda à Constituição pelo Congresso Nacional, o presidente da República terá o prazo de 15 dias para sancioná-la ou vetá-la e, caso não se manifeste nesse prazo, seu silêncio importará sanção tácita.",
      "O presidente da República poderá ser autor de proposta de emenda constitucional desde que a proposição seja subscrita por, no mínimo, um terço dos membros da Câmara dos Deputados ou do Senado Federal.",
    ],
  },
  {
    id: 29,
    subject: "Direito Constitucional",
    text: "Acerca do que dispõe a CF sobre o Poder Judiciário e as funções essenciais à justiça, assinale a opção correta.",
    correctAnswer:
      "O Ministério Público é instituição essencial à função jurisdicional do Estado, sendo assegurada de forma expressa pelo texto constitucional sua autonomia funcional e administrativa, além da prerrogativa de elaborar sua própria proposta orçamentária, desde que esta última esteja dentro dos limites estabelecidos na lei de diretrizes orçamentárias.",
    wrongAnswers: [
      "O Conselho Nacional de Justiça não é considerado órgão autônomo do Poder Judiciário, estando vinculado ao Supremo Tribunal Federal.",
      "As súmulas vinculantes editadas pelo Supremo Tribunal Federal (STF) possuem efeito vinculante em relação aos demais órgãos do Poder Judiciário, mas não alcançam os Poderes Executivo e Legislativo.",
      "Além do Ministério Público, a CF alçou à categoria de órgãos cujas funções são essenciais à justiça a Advocacia-Geral da União, a Defensoria Pública e a Receita Federal.",
      "O Conselho da Justiça Federal é órgão que funciona junto ao Superior Tribunal de Justiça (STJ) e entre suas atribuições consta a supervisão administrativa e orçamentária da justiça federal e da justiça estadual de primeiro e segundo graus.",
    ],
  },
  {
    id: 30,
    subject: "Direito Constitucional",
    text: "Em relação aos direitos e às garantias fundamentais previstos na Constituição Federal de 1988 (CF), assinale a opção correta.",
    correctAnswer:
      "É possível, nos termos da CF, que alguém seja privado de direitos por motivo de crença religiosa se, além de se eximir de obrigação legal a todos imposta, também se recusar a cumprir prestação alternativa.",
    wrongAnswers: [
      "Em virtude da laicidade do Estado, a CF veda a prestação de assistência religiosa às entidades de internação coletiva, sejam elas civis ou militares.",
      "De acordo com a CF, o sigilo das comunicações telefônicas não pode ser quebrado em nenhuma hipótese.",
      "O direito de resposta assegurado constitucionalmente pela CF é proporcional ao agravo, abarcando os danos materiais e morais advindos da ofensa sem, contudo, abarcar o dano à imagem.",
      "O acesso à informação é um direito assegurado a todos, sendo expressamente vedado o sigilo da fonte.",
    ],
  },
  {
    id: 31,
    subject: "Direito Administrativo",
    text: "Assinale a opção em que é apresentado o atributo do ato administrativo que possibilita à administração pública executar seus próprios atos independentemente de autorização judicial.",
    correctAnswer: "autoexecutoriedade",
    wrongAnswers: [
      "presunção de legitimidade e veracidade",
      "exigibilidade",
      "imperatividade",
      "tipicidade",
    ],
  },
  {
    id: 32,
    subject: "Direito Administrativo",
    text: "A forma de extinção de um ato administrativo que se torna inconveniente ou inoportuno ao interesse público denomina-se",
    correctAnswer: "revogação.",
    wrongAnswers: ["caducidade.", "contraposição.", "anulação.", "cassação."],
  },
  {
    id: 33,
    subject: "Direito Administrativo",
    text: "A encampação, forma de extinção da concessão mediante a retomada do serviço pelo poder concedente durante o prazo da concessão, ocorre em decorrência de",
    correctAnswer:
      "interesse público, mediante lei autorizativa específica e após prévio pagamento da indenização, se for o caso.",
    wrongAnswers: [
      "perda pela concessionária das condições econômicas, técnicas ou operacionais para manter a adequada prestação do serviço.",
      "descumprimento pela concessionária das penalidades impostas por infrações, nos devidos prazos.",
      "serviço prestado de forma inadequada ou deficiente, tendo por base as normas, critérios, indicadores e parâmetros definidores da qualidade do serviço.",
      "descumprimento de cláusulas contratuais ou disposições legais ou regulamentares concernentes à concessão.",
    ],
  },
  {
    id: 34,
    subject: "Direito Administrativo",
    text: "Assinale a alternativa correta acerca das formas de efetivação da descentralização administrativa.",
    correctAnswer:
      "A descentralização por outorga ocorre quando há a criação de entidade da Administração Indireta, com transferência de titularidade da execução de determinado serviço público.",
    wrongAnswers: [
      "A concessão de serviço público é uma forma de descentralização por outorga por prazo indeterminado.",
      "A descentralização por delegação transfere a titularidade e o exercício de determinada competência.",
      "Em qualquer das formas de descentralização, existe hierarquia ou subordinação entre as entidades.",
      "Na descentralização por delegação a Administração Pública transfere a titularidade dos serviços.",
    ],
  },
  {
    id: 35,
    subject: "Direito Constitucional",
    text: "(ANULADA) Os serviços públicos considerados como de utilidade pública são...",
    correctAnswer: "Certa",
    wrongAnswers: ["Errada", "Errada", "Errada", "Errada"],
  },
  {
    id: 36,
    subject: "Direito Administrativo",
    text: "No tocante à criação e atuação dos órgãos da administração indireta, assinale a opção correta.",
    correctAnswer:
      "Fundação pública é uma pessoa jurídica de direito público, criada por lei, destinada à atuação em atividades sociais.",
    wrongAnswers: [
      "Autarquia é uma pessoa jurídica de direito público, autorizada por lei, destinada à atuação em atividades sociais.",
      "Empresa pública é uma pessoa jurídica de direito público, criada por lei, destina-se à atuação em atividades econômicas.",
      "Sociedade de economia mista é uma pessoa jurídica de direito público, autorizada por lei, destinada à atuação em atividades econômicas.",
      "Fundação privada é uma pessoa jurídica de direito privado, criada por lei, destinada à atuação em atividades econômicas.",
    ],
  },
  {
    id: 37,
    subject: "Direito Administrativo",
    text: "O tratamento diferenciado e preferencial atribuído às micro e pequenas empresas nas licitações públicas é uma exceção ao princípio licitatório denominado",
    correctAnswer: "princípio da moralidade.",
    wrongAnswers: [
      "princípio da impessoalidade.",
      "princípio da economicidade.",
      "princípio da isonomia.",
      "princípio da legalidade.",
    ],
  },
  {
    id: 38,
    subject: "Direito Constitucional",
    text: "(ANULADA) Estruturas diretas e únicas de autoridade e responsabilidade entre...",
    correctAnswer: "Certa",
    wrongAnswers: ["Errada", "Errada", "Errada", "Errada"],
  },
  {
    id: 39,
    subject: "Administração Pública",
    text: "São características de uma organização formal moderna",
    correctAnswer: "especialização e hierarquia.",
    wrongAnswers: [
      "coesão e antagonismo.",
      "divisão do trabalho e generalização.",
      "lideranças informais por meio da influência.",
      "formalidade e pessoalidade.",
    ],
  },
  {
    id: 40,
    subject: "Direito Constitucional",
    text: "(ANULADA) Quanto às entidades da administração pública direta e indireta...",
    correctAnswer: "Certa",
    wrongAnswers: ["Errada", "Errada", "Errada", "Errada"],
  },
  {
    id: 41,
    subject: "Administração Pública",
    text: "Quando a função administrativa é exercida por mais de um órgão público que divide competências no âmbito interno de cada entidade (política ou administrativa), ocorre a chamada",
    correctAnswer: "centralização.",
    wrongAnswers: [
      "desconcentração.",
      "concentração.",
      "descentralização.",
      "vinculação.",
    ],
  },
  {
    id: 42,
    subject: "Administração Pública",
    text: "No que concerne à gestão por processos, assinale a opção que apresenta o conceito que consiste na sequência de passos necessários para que se possa atingir a automação de processos de negócio.",
    correctAnswer: "throughput",
    wrongAnswers: ["lead time", "scope", "workflow", "billing"],
  },
  {
    id: 43,
    subject: "Administração Pública",
    text: "A departamentalização por processo representa",
    correctAnswer:
      "o agrupamento das atividades de acordo com as etapas de um processo, considerando-se a maneira pela qual são executados os trabalhos ou processos para a consecução de uma meta ou de um objetivo específico.",
    wrongAnswers: [
      "o agrupamento das atividades de acordo com as funções desenvolvidas na organização.",
      "a diferenciação e o agrupamento das atividades de acordo com o local onde o trabalho é desempenhado ou a área de mercado a ser servida pela organização.",
      "a manutenção da estrutura funcional para as atividades cotidianas, somada à possibilidade de o líder de um projeto aprimorar sua rede de contato com sua equipe de trabalho.",
      "o agrupamento das atividades de acordo com as saídas e os resultados (outputs) relativos a um ou a vários projetos da organização.",
    ],
  },
  {
    id: 44,
    subject: "Administração Pública",
    text: "O gestor de contratos deve juntar aos autos do processo todos os documentos necessários à comprovação da regular execução do contrato, entre os quais se incluem",
    correctAnswer: "notas fiscais e relatórios de ensaios especiais.",
    wrongAnswers: [
      "memorandos, ofícios, emails e correspondências recebidas e expedidas à contratada.",
      "laudos de vistorias técnicas e atestados de execução dos serviços realizados.",
      "documentos comprobatórios de serviços de desenvolvimento, sustentação e manutenção de softwares utilizados.",
    ],
  },
  {
    id: 45,
    subject: "Administração Pública",
    text: "O gestor de contratos deve juntar aos autos do processo todos os documentos necessários à comprovação da regular execução do contrato, entre os quais se incluem",
    correctAnswer:
      "laudos de vistorias técnicas e atestados de execução dos serviços realizados.",
    wrongAnswers: [
      "notas fiscais e relatórios de ensaios especiais.",
      "memorandos, ofícios, emails e correspondências recebidas e expedidas à contratada.",
      "documentos comprobatórios de serviços de desenvolvimento, sustentação e manutenção de softwares utilizados.",
      "certidões negativas e cronograma físico-financeiro.",
    ],
  },
  {
    id: 46,
    subject: "Administração Pública",
    text: "Assinale a opção que apresenta a fase da licitação em que se verifica o conjunto de informações e documentos necessários e suficientes para demonstrar a capacidade do licitante de realizar o objeto da licitação, qualquer que seja a sua modalidade.",
    correctAnswer: "habilitação",
    wrongAnswers: [
      "credenciamento",
      "registro cadastral",
      "pré-qualificação",
      "adjudicação",
    ],
  },
  {
    id: 47,
    subject: "Administração Pública",
    text: "A função administrativa que monitora, compara, estabelece padrões e faz medidas corretivas chama-se",
    correctAnswer: "controle.",
    wrongAnswers: ["direção.", "planejamento.", "organização.", "processos."],
  },
  {
    id: 48,
    subject: "Administração Pública",
    text: "A função administrativa que monitora, compara, estabelece padrões e faz medidas corretivas chama-se",
    correctAnswer: "processos.",
    wrongAnswers: ["direção.", "planejamento.", "controle.", "organização."],
  },
  {
    id: 49,
    subject: "Administração Pública",
    text: "O planejamento estratégico é",
    correctAnswer: "focado no objetivo, de curto prazo e macro-orientado.",
    wrongAnswers: [
      "inflexível, departamental e promove articulação interna.",
      "micro-orientado, se utiliza de habilidade técnica e promove articulação interna.",
      "instantâneo, de curto prazo e micro-orientado.",
      "flexível, de longo prazo e lida com incertezas.",
    ],
  },
  {
    id: 50,
    subject: "Administração Pública",
    text: "Nos departamentos do TJ/CE foram feitas as instalações de modernas tecnologias para melhor atender ao público. Assinale a opção que apresenta os fatores da ferramenta análise SWOT que se relacionam à informação apresentada.",
    correctAnswer: "fatores temporários e de oportunidades",
    wrongAnswers: [
      "fatores internos e de forças",
      "fatores externos e de forças",
      "fatores operacionais e de fraquezas",
      "fatores externos e de ameaças",
    ],
  },
  {
    id: 51,
    subject: "Administração Pública",
    text: "Os principais níveis de planejamento da administração são o nível estratégico, o nível tático e o nível operacional. A partir dessa informação, assinale a opção que apresenta particularidade(s) do nível tático.",
    correctAnswer: "tem foco nos departamentos e no médio prazo",
    wrongAnswers: [
      "analisa a organização como um todo",
      "promove inquietação com as atividades",
      "tem foco no curto prazo e no aumento da produtividade",
      "tem foco em longo prazo e em objetivos globais",
    ],
  },
  {
    id: 52,
    subject: "Administração Pública",
    text: "Assinale a opção que apresenta uma característica relacionada à perspectiva financeira do balanced scorecard.",
    correctAnswer: "retorno sobre o investimento",
    wrongAnswers: [
      "retenção de clientes",
      "capacitação",
      "qualidade dos processos internos",
      "satisfação dos colaboradores",
    ],
  },
  {
    id: 53,
    subject: "Administração Pública",
    text: "Os seis elementos básicos que os gestores públicos devem analisar quando se projeta a definição de uma estrutura organizacional incluem: I - especialização do trabalho; II - departamentalização; III - cadeia de comando; IV - amplitude de controle; V - subordinação específica. Estão certos apenas os itens",
    correctAnswer: "I, II, III e IV.",
    wrongAnswers: [
      "I, II e III.",
      "I, III, IV e V.",
      "II, III e IV.",
      "I, II, III e V.",
    ],
  },
  {
    id: 54,
    subject: "Administração Pública",
    text: "Assinale a opção que apresenta o tipo de estrutura organizacional aguda, centrada em formalização, rígida a mudanças e composta por tarefas rotineiras e estáveis.",
    correctAnswer: "estrutura burocrática",
    wrongAnswers: [
      "estrutura virtual",
      "estrutura de redes",
      "estrutura orgânica",
      "estrutura mecanicista",
    ],
  },
  {
    id: 55,
    subject: "Administração Pública",
    text: "A efetivação de atividades por tempo determinado e para uma finalidade definida é característica da departamentalização",
    correctAnswer: "de projetos.",
    wrongAnswers: [
      "funcional.",
      "especialista.",
      "de produtos.",
      "de clientes.",
    ],
  },
  {
    id: 56,
    subject: "Administração Pública",
    text: "A teoria das necessidades humanas define cinco categorias organizadas em forma de pirâmide, em uma sequência hierárquica da base ao topo. Assinale a opção que apresenta corretamente essa sequência.",
    correctAnswer: "social, estima, autorrealização, fisiológica, segurança",
    wrongAnswers: [
      "autorrealização, estima, fisiológica, segurança, social",
      "estima, social, segurança, autorrealização, fisiológica",
      "fisiológica, segurança, social, estima, autorrealização",
      "segurança, autorrealização, social, estima, fisiológica",
    ],
  },
  {
    id: 57,
    subject: "Administração Pública",
    text: "No ambiente organizacional, o conflito passado que pode gerar novos conflitos é conhecido como",
    correctAnswer: "conflito anterior.",
    wrongAnswers: [
      "falha na comunicação.",
      "falta de recursos.",
      "papel ambíguo.",
      "estilo de vida.",
    ],
  },
  {
    id: 58,
    subject: "Legislação Específica TJ/CE",
    text: "Nos termos da Lei Estadual n.º 16.208/2017 — Lei de Organização Administrativa do Poder Judiciário do Estado do Ceará, o preceito da precedência prevê que",
    correctAnswer:
      "a função administrativa deverá atuar pela seletiva aplicação priorizada dos meios em caso de escassez dos recursos, atendidos os critérios de urgência e relevância.",
    wrongAnswers: [
      "a organização da função jurisdicional baseia-se nos princípios da hierarquia e da unidade de comando, observando-se a divisão e racionalização do trabalho e demais critérios técnicos de planejamento, coordenação, direção e controle.",
      "a função jurisdicional é a principal finalidade do Poder Judiciário e, por isso, deve ser atendida com prioridade sobre as demais atividades.",
      "a função administrativa é hierarquicamente superior à função jurisdicional.",
      "a função administrativa, no Poder Judiciário, deve observar os princípios essenciais da administração pública.",
    ],
  },
  {
    id: 59,
    subject: "Legislação Específica TJ/CE",
    text: "Na organização administrativa do Poder Judiciário do estado do Ceará, a Corregedoria-Geral de Justiça enquadra-se como",
    correctAnswer:
      "comissão permanente do Tribunal de Justiça do Estado do Ceará (TJ/CE).",
    wrongAnswers: [
      "unidade específica de interação direta com os jurisdicionados, de políticas públicas e solução alternativa consensual de conflitos.",
      "órgão de controle interno e disciplinar da função jurisdicional.",
      "órgão superior de direção, gerenciamento e assessoramento.",
      "órgão superior de definição de políticas e estratégias.",
    ],
  },
  {
    id: 60,
    subject: "Legislação Específica TJ/CE",
    text: "Assinale a opção que apresenta o órgão do TJ/CE competente para autorizar a abertura de concurso público para provimento de cargos na magistratura da justiça estadual do Ceará.",
    correctAnswer: "Tribunal Pleno.",
    wrongAnswers: [
      "Presidência.",
      "Vice-Presidência.",
      "Conselho da Magistratura.",
      "Órgão Especial.",
    ],
  },
];
