# Jogo da Palavra

Projeto de um jogo de adivinhação de palavras desenvolvido com **HTML,
CSS e JavaScript**. O objetivo do jogo é descobrir a palavra secreta
antes que as tentativas acabem.

------------------------------------------------------------------------

Regras do Jogo

-   O jogador deve descobrir uma **palavra secreta**.
-   A palavra aparece na tela com **\_ (traços)** representando cada
    letra.
-   O jogador digita **uma letra por vez**.
-   Se a letra existir na palavra:
    -   ela aparece na posição correta.
-   Se a letra não existir:
    -   o jogador perde uma tentativa.

O jogo termina quando:

-   o jogador **descobre toda a palavra**, ou
-   as **tentativas acabam**.

## Modos de Jogo

### Personalizada

-   Um jogador digita a palavra que será descoberta.
-   O número de tentativas é igual ao **tamanho da palavra**.

### Palavra do Dia

-   O jogo escolhe automaticamente uma palavra de uma lista.
-   A palavra muda **a cada dia**.

## Dificuldades

-   **Fácil:** 12 tentativas\
-   **Médio:** 7 tentativas\
-   **Difícil:** 4 tentativas

------------------------------------------------------------------------

# Lista de Variáveis

  -----------------------------------------------------------------------
  Variável                            Função
  ----------------------------------- -----------------------------------
  `palavra`                           Guarda a palavra secreta

  `palavraMostrada`                   Array que representa a palavra com
                                      letras descobertas

  `tentativas`                        Número de tentativas restantes

  `letrasUsadas`                      Guarda as letras que o jogador já
                                      tentou

  `palavrasDoDia`                     Lista de palavras usadas no modo
                                      "Palavra do Dia"

  `tentativaIN`                       Campo onde o jogador digita a letra

  `palavraDiv`                        Elemento que mostra a palavra na
                                      tela

  `mensagemFinal`                     Mostra a mensagem de vitória ou
                                      derrota

  `menu`                              Área do menu inicial

  `jogo`                              Área onde o jogo acontece
  -----------------------------------------------------------------------

------------------------------------------------------------------------

# Fluxo do Jogo

1.  O jogador escolhe o **modo de jogo**.
2.  O jogador escolhe a **dificuldade**.
3.  O jogador clica no botão **Começar**.
4.  O jogo define a palavra:
    -   digitada pelo jogador ou
    -   escolhida automaticamente.
5.  A palavra aparece na tela como `_ _ _ _`.
6.  O jogador digita uma letra.
7.  O jogo verifica se a letra existe na palavra.
8.  Se existir:
    -   a letra aparece na posição correta.
9.  Se não existir:
    -   o jogador perde uma tentativa.
10. O jogo verifica:
    -   se todas as letras foram descobertas → **Vitória**
    -   se as tentativas acabaram → **Derrota**

------------------------------------------------------------------------

#  Pseudocódigo

    INÍCIO

    quando clicar em "Começar":

        verificar modo de jogo

        SE modo for "Palavra do Dia"
            escolher palavra da lista baseada na data
        SENÃO
            usar palavra digitada

        definir número de tentativas

        criar array com "_" para cada letra da palavra

    ENQUANTO tentativas > 0

        jogador digita uma letra

        SE letra existir na palavra
            revelar letra na posição correta
        SENÃO
            diminuir tentativas

        SE palavra não tiver mais "_"
            jogador venceu
            encerrar jogo

    SE tentativas == 0
        jogador perdeu

    FIM

------------------------------------------------------------------------

# Tecnologias utilizadas

-   HTML
-   CSS
-   JavaScript

------------------------------------------------------------------------

# 👨‍💻 Autor

Projeto desenvolvido por **Thiago** para praticar lógica de programação
e manipulação do DOM em JavaScript.
