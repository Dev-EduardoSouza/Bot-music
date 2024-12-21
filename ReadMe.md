
# Bot de Música para Discord

Este é um bot de música para Discord que toca músicas armazenadas localmente a partir de uma pasta específica no seu computador. Ele permite que os usuários do servidor toquem músicas em canais de voz do Discord com comandos simples.

## Funcionalidades

- O bot pode tocar músicas em canais de voz do Discord a partir de arquivos de áudio locais.
- Ele suporta múltiplas listas de músicas (arrays) e você pode adicionar suas músicas preferidas ao arquivo de configuração.
- O bot se desconecta automaticamente após tocar todas as músicas em uma lista.

## Requisitos

Para rodar este bot, você precisará dos seguintes requisitos:

- Node.js (preferencialmente versão 16 ou superior)
- npm (gerenciador de pacotes do Node.js)
- Biblioteca `@discordjs/voice` para integração com canais de voz no Discord.
- Biblioteca `discord.js` para interagir com a API do Discord.

## Instalação

1. Clone este repositório para o seu ambiente local:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd Bot-music
   ```

2. Instale as dependências necessárias:

   ```bash
   npm install
   ```

3. Crie um arquivo `config.json` na raiz do projeto com o seguinte conteúdo (substitua `SEU_TOKEN_AQUI` pelo seu token do bot do Discord):

   ```json
   {
       "prefix": "!",
       "token": "SEU_TOKEN_AQUI"
   }
   ```

4. Adicione suas músicas na pasta `SoundTrack/Climax/` ou crie um novo diretório com as músicas que deseja que o bot toque. Certifique-se de que os arquivos de áudio estejam no formato `.mp3`.

5. O arquivo `musicArrays` no código contém a lista das músicas disponíveis para tocar. Você pode adicionar mais arrays de músicas com base na sua necessidade.

## Uso

1. **Inicie o bot**:

   Execute o comando abaixo para iniciar o bot:

   ```bash
   node index.js
   ```

2. **Comando de música**:

   O bot responde ao comando `!play <numero_da_lista_de_musicas>` onde `<numero_da_lista_de_musicas>` refere-se ao número do array de músicas configurado.

   Exemplo:
   - `!play 1` — Toca a primeira lista de músicas (`Climax`).

   **Exemplo de uso**:

   - O bot irá verificar se o usuário está em um canal de voz.
   - Se o usuário não estiver em um canal de voz, o bot avisará para entrar em um canal de voz.
   - O bot tocará as músicas listadas no array e se desconectará automaticamente quando terminar.

## Estrutura do Projeto

- `index.js`: Código principal do bot.
- `config.json`: Arquivo de configuração com o token do bot e o prefixo de comandos.
- `SoundTrack/Climax/`: Diretório onde você coloca suas músicas.
- `node_modules/`: Dependências do projeto.

## Problemas Comuns

1. **"Você precisa estar em um canal de voz para tocar música!"**
   - Isso acontece quando o usuário que enviou o comando não está em um canal de voz. Certifique-se de estar em um canal de voz ao usar o comando.

2. **"Número de array de música inválido!"**
   - Esse erro ocorre quando o número do array de músicas fornecido no comando não existe. Verifique a lista de arrays configurados no código.

## Contribuições

Sinta-se à vontade para contribuir com melhorias ou sugestões. Crie uma issue ou um pull request para discutir novas funcionalidades.

# Bot de Música para Discord

Este é um bot de música para Discord que toca músicas armazenadas localmente a partir de uma pasta específica no seu computador. Ele permite que os usuários do servidor toquem músicas em canais de voz do Discord com comandos simples.

## Funcionalidades

- O bot pode tocar músicas em canais de voz do Discord a partir de arquivos de áudio locais.
- Ele suporta múltiplas listas de músicas (arrays) e você pode adicionar suas músicas preferidas ao arquivo de configuração.
- O bot se desconecta automaticamente após tocar todas as músicas em uma lista.

## Requisitos

Para rodar este bot, você precisará dos seguintes requisitos:

- Node.js (preferencialmente versão 16 ou superior)
- npm (gerenciador de pacotes do Node.js)
- Biblioteca `@discordjs/voice` para integração com canais de voz no Discord.
- Biblioteca `discord.js` para interagir com a API do Discord.

## Instalação

1. Clone este repositório para o seu ambiente local:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd Bot-music
   ```

2. Instale as dependências necessárias:

   ```bash
   npm install
   ```

3. Crie um arquivo `config.json` na raiz do projeto com o seguinte conteúdo (substitua `SEU_TOKEN_AQUI` pelo seu token do bot do Discord):

   ```json
   {
       "prefix": "!",
       "token": "SEU_TOKEN_AQUI"
   }
   ```

4. Adicione suas músicas na pasta `SoundTrack/Climax/` ou crie um novo diretório com as músicas que deseja que o bot toque. Certifique-se de que os arquivos de áudio estejam no formato `.mp3`.

5. O arquivo `musicArrays` no código contém a lista das músicas disponíveis para tocar. Você pode adicionar mais arrays de músicas com base na sua necessidade.

## Uso

1. **Inicie o bot**:

   Execute o comando abaixo para iniciar o bot:

   ```bash
   node index.js
   ```

2. **Comando de música**:

   O bot responde ao comando `!play <numero_da_lista_de_musicas>` onde `<numero_da_lista_de_musicas>` refere-se ao número do array de músicas configurado.

   Exemplo:
   - `!play 1` — Toca a primeira lista de músicas (`Climax`).

   **Exemplo de uso**:

   - O bot irá verificar se o usuário está em um canal de voz.
   - Se o usuário não estiver em um canal de voz, o bot avisará para entrar em um canal de voz.
   - O bot tocará as músicas listadas no array e se desconectará automaticamente quando terminar.

## Estrutura do Projeto

- `index.js`: Código principal do bot.
- `config.json`: Arquivo de configuração com o token do bot e o prefixo de comandos.
- `SoundTrack/Climax/`: Diretório onde você coloca suas músicas.
- `node_modules/`: Dependências do projeto.

## Problemas Comuns

1. **"Você precisa estar em um canal de voz para tocar música!"**
   - Isso acontece quando o usuário que enviou o comando não está em um canal de voz. Certifique-se de estar em um canal de voz ao usar o comando.

2. **"Número de array de música inválido!"**
   - Esse erro ocorre quando o número do array de músicas fornecido no comando não existe. Verifique a lista de arrays configurados no código.

## Contribuições

Sinta-se à vontade para contribuir com melhorias ou sugestões. Crie uma issue ou um pull request para discutir novas funcionalidades.