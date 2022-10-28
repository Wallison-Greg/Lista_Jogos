import React from "react";
import './App.css';
import Header from "./components/header";
import Section from "./components/section";
import ListItem from "./components/lista";

//estrutura de dados
const games = [
  {
    href:"https://www.twitch.tv/directory/game/League%20of%20Legends",
    src:"https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg", 
    ault:"Imagem do jogo League of Legends" 
  },
  {
    href:"https://www.twitch.tv/directory/game/VALORANT",
    src:"https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg", 
    ault:"Imagem do jogo Valorant"
  },
  {
    href:"https://www.twitch.tv/directory/game/Minecraft",
    src:"https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg", 
    ault:"Imagem do jogo Minecraft"
  },
  {
    href:"https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    src:"https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg", 
    ault:"Imagem do jogo TFTs"
  }
];

const streamers =[
  {
    href:"https://www.twitch.tv/maykbrito",
    src:"https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png", 
    ault:"Imagem de Mayk Brito" 
  },
  {
    href:"https://www.twitch.tv/alanzoka",
    src:"https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-150x150.png", 
    ault:"Imagem de Alanzoka" 
  },
  {
    href:"https://www.twitch.tv/cellbit",
    src:"https://static-cdn.jtvnw.net/jtv_user_pictures/cb885149-f7f7-48f0-99ae-fe0a386ed3e2-profile_image-150x150.png", 
    ault:"Imagemd de Cellbit" 
  }
]

//template sistem
function App() {
  return (
    <div className="app">
      <Header/> {/*utilizando o componente do header*/}
      <main>
        <Section title= "Meus Jogos" subtitle="Os games que eu mais curto jogar" className= "games-list">
          {/* passando os valores para o componente do arquivo "lista.js"*/}
          {
            //passando os valores da estrutura de dados "games" para dentro do componente "ListItem" via "map"
            games.map((item)=>{
              return (
                <ListItem
                  //passando os valores pros atributos do componente
                  href={item.href} 
                  src={item.src}
                  ault={item.ault}
                />
              )
            })
          }
        </Section>

        <Section title= "Canais e Streamers" subtitle="Lista de canais de transmissão " className= "channel-list">
          {
            streamers.map((item) => {
              return (
                <ListItem
                  //passando os valores pros atributos do componente
                  href={item.href} 
                  src={item.src}
                  ault={item.ault}
                />
              )
            })
          }
        </Section>
      </main>
    </div>
  )
}

export default App;

/*Para trabalharmos com React e nescessario baixar as dependencias dele via terminal utilizando o seguinte codigo 
cod: caso ja tenha um arquivo criado "npx create-react-app ."  
cod: caso queira criar um novo arquivo "npx create-react-app nome-arquivo"

Apos instalar as dependencias do react o seu ambiente ja esta pronto para ser utilizado 

O react na parte visual utiliza-se estruturas similar ao html que são chamados de "jsx" ou seja basicamente iremos trabalhar com tags dentro do proprio javascript, essa estrutura "jsx" e definida dentro do arquivo "App.js" que e importado para o arquivo "index.js" 

Dento do arquivo App.js definimos os nossos elementos da view, esses elementos são definidos dentro de blocos ou seja não podemos ter 2 tags no mesmo elemento pai nesse caso cada tag deve ser indexada dentro de um bloco sendo assim gerando uma estrutura hierarquica

utilizamos o react pelo fato do reuso do codigo sem ter a nescessidade de utilizar o famoso "Ctrl + C" e "Ctrl + V" nesse caso definios os componenetes a serem aplicados na view em um arquivo externo que sera exportado para dentro do arquivo "app.js" para assim serem utilizados 

Nesse caso au utilizarmos o mesmo componente mais de uyma vez ele vira com suas informações definidas dentro do seu arquivo repitidas ou seja para alterar esses valores e nescessario colocarmos atributos dentro dos componentes impordados dentro do arquivo app.js e colocar os valores que deseja ser alterado assim como esta sendo feito dentro do componente "section" nesse caso tamos colocando os atributos ("title" e "subtitle") como valores diferentes para cada componente para assim eles serem alterados 

Contudo para isso ser validado e nescessario passarmos como parametro o valor "props" para dentro da função do componente que deseja-se realizae a alteração e no lugar do valor que a tag desse componete iria receber passaremos os atributos definidos como valores assim como foi aplicado no arquivo "section.js"

Caso voce defina um novo componente detro de uma tag e nescessario o definir como componente filho utilizando o metodo "porps.children" assim como foi feito nos arquivos ("lista.js", "section.js" e "app.js"), nesse caso no arquivo "lista.js" definios o escopo do componente que foi importado par o arquivo "app.js" que recebeu os valores nescesarios e foi passado para o arquivo "section.js" que representa o template pai da aplicação ou seja criamos o componente filho da tag "section" em um arquivo externo, passmos os valores dele em outro arquivo e o inserimos novamente ele na sua tag pai 

em casos de multiplos componentes com a mesma funcionalidade podemos armazenar os seus valores dentro de estruturas de dados como "array ou object" para facilitar na chamada desse valores sem ouver a nescessidade de utilizarmos o "Ctrl + C" e "Ctrl + V" assim como esta sendo feito na variavel constante "games"

basicamente estamos passando os valores que foram armazendos na estrutura de dados "games" para dentro do componente "ListItem" utilizando o metodo "map" para podermos passar por todos os valores contidos dentro da estruturade dados, sendo essim ele ira fazer um loop lendos os valores e passando para os atributos do componente 
*/
