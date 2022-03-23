import React from 'react';
import styled from 'styled-components';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import FiraSans from './fonts/FiraSans-Regular.ttf';


const Global = styled.div`
  @font-face {
    font-family: "Fira Sans";
    src: url(${FiraSans}) format(truetype);
  }
  
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;

`;

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  span {
    display: none;
  }

  a {
    cursor: pointer;
  }

`;

const SectionDiv = styled.div`
  width: 40vw;
  margin: 10px 0;

  h2 {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

`;

function exibirDados() {
  var elemento = document.getElementById('ocultar');
  if (elemento.style.display == 'initial') {
    elemento.style.display = 'none';
  }
  else
    elemento.style.display = 'initial';
}


function App() {
  return (
    <Global>
      <AppDiv>
        <SectionDiv>
          <h2>Dados pessoais</h2>
          <CardGrande
            imagem="https://avatars.githubusercontent.com/u/98936943?v=4"
            nome="Douglas Joziel Bitencourt Freitas"
            descricao="Licenciatura plena em Matemática (UNISC), mestrado e doutorado em Modelagem Matemática (UNIJUÍ)"
          />
          <br />
          <a onClick={exibirDados}>
            <ImagemButton
              imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png"
              texto="Ver mais"
            />
          </a>
        </SectionDiv>
        <span id='ocultar'>
          <SectionDiv>

            <h2>Contato</h2>


            <CardPequeno
              imagem="http://cdn.onlinewebfonts.com/svg/img_413790.png"
              nome="Endereço"
              descricao="Av. Hagatte Emmelle, 5 - CSS, JS"
            />

            <CardPequeno
              imagem="https://w7.pngwing.com/pngs/1011/641/png-transparent-message-logo-yahoo-mail-email-address-webmail-email-icon-miscellaneous-angle-triangle.png"
              nome="E-mail"
              descricao="douglas@douglas.me"
            />

            <CardPequeno
              imagem="http://cdn.onlinewebfonts.com/svg/img_413790.png"
              nome="Telefone"
              descricao="+00 00 98765-4321"
            />
          </SectionDiv>

          <SectionDiv>
            <br />
            <h2>Formação acadêmica</h2>
            <CardGrande
              imagem="https://scontent.fria3-1.fna.fbcdn.net/v/t1.18169-9/10537037_659315134151874_9208931288338556607_n.png?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=SAyOKB-zEy4AX8tXDCi&_nc_ht=scontent.fria3-1.fna&oh=00_AT8QnUbHnHeBqHekeMeV2wbzRPibIFsLq5CVVvnIU8DzHQ&oe=626182B0"
              nome="UNIJUÍ | 2015-2021"
              descricao="Doutorado em Modelagem Matemática"
            />

            <CardGrande
              imagem="https://scontent.fria3-1.fna.fbcdn.net/v/t1.18169-9/10537037_659315134151874_9208931288338556607_n.png?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=SAyOKB-zEy4AX8tXDCi&_nc_ht=scontent.fria3-1.fna&oh=00_AT8QnUbHnHeBqHekeMeV2wbzRPibIFsLq5CVVvnIU8DzHQ&oe=626182B0"
              nome="UNIJUÍ | 2014-2015"
              descricao="Mestrado em Modelagem Matemática"
            />

            <CardGrande
              imagem="https://scontent.fria3-1.fna.fbcdn.net/v/t1.6435-9/73404071_2419377404765648_869043562413555712_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=R7-CSOS11lsAX-Ff4c7&_nc_ht=scontent.fria3-1.fna&oh=00_AT-QtIYMxK12H0PVBgzOAaon4-SD7zayBiEr1MuuZPLBpg&oe=62615485"
              nome="UNISC | 2011-2013"
              descricao="Licenciatura plena em Matemática"
            />
          </SectionDiv>

          <SectionDiv>
            <br />
            <h2>Formação complementar</h2>
            <CardGrande
              imagem="http://www.devmedia.com.br/favicon.png"
              nome="DevMedia | 2022"
              descricao="Programador Full Stack e Mobile"
            />

            <CardGrande
              imagem="https://scontent.fria3-1.fna.fbcdn.net/v/t1.6435-9/99296127_575260363119101_713037980717023232_n.png?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=wmqazJCIjHIAX8eFNH-&_nc_ht=scontent.fria3-1.fna&oh=00_AT9CQPjVeLQC-3mw7t2-GueBAuPiIjJBlKXLrTUFbdZFIg&oe=625F3808"
              nome="Labenu | 2022"
              descricao="Curso Dev Full Stack"
            />
          </SectionDiv>

          <SectionDiv>
            <br />
            <h2>Experiências profissionais</h2>
            <CardGrande
              imagem="https://scontent.fria3-1.fna.fbcdn.net/v/t1.18169-9/10537037_659315134151874_9208931288338556607_n.png?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=SAyOKB-zEy4AX8tXDCi&_nc_ht=scontent.fria3-1.fna&oh=00_AT8QnUbHnHeBqHekeMeV2wbzRPibIFsLq5CVVvnIU8DzHQ&oe=626182B0"
              nome="UNIJUÍ | 2014-2021"
              descricao="Pesquisador em nível de pós-graduação, bolsista da CAPES/PROSUP e integrante do GAIC/DCEEng"
            />

            <CardGrande
              imagem="https://scontent.fria3-1.fna.fbcdn.net/v/t1.6435-9/73404071_2419377404765648_869043562413555712_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=R7-CSOS11lsAX-Ff4c7&_nc_ht=scontent.fria3-1.fna&oh=00_AT-QtIYMxK12H0PVBgzOAaon4-SD7zayBiEr1MuuZPLBpg&oe=62615485"
              nome="UNISC | 2011-2013"
              descricao="Pesquisador em nível de graduação, bolsista do PROUNI e integrante do PIBID/Matemática"
            />
          </SectionDiv>

          <SectionDiv>
            <br />
            <h2>Minhas redes sociais</h2>
            <ImagemButton
              imagem="https://sites.ufpe.br/ceerma/wp-content/uploads/sites/73/2020/09/Lattes-logo.png"
              link="http://lattes.cnpq.br/9842842262519033"
              texto="Lattes"
            />

            <ImagemButton
              imagem="https://w7.pngwing.com/pngs/972/654/png-transparent-social-media-computer-icons-linkedin-social-networking-service-social-media-blue-company-text.png"
              link="https://www.linkedin.com/in/douglasjoziel/"
              texto="LinkedIn"
            />
          </SectionDiv>
        </span>
      </AppDiv>
    </Global >
  );
}

export default App;
