import React from "react";
import './App.css';
import Header from "./components/header";
import Section from "./components/section";

function App() {
  return (
    <div className="app">
      <Header/> {/*utilizando o componente do header*/}
      <main>
        <Section 
          title= "Meus Jogos"
          subtitle="Os games que eu mais curto jogar"/>
        <Section 
          title= "Canais e Streamers"
          subtitle="Lista de canais de transmissão "/>
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

*/
