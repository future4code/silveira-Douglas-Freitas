import './App.css';
import logoLabtube from './img/logo-labtube.png';
import logoCanal from './img/logo-canal.jpg';

function App() {

   function reproduzVideo() {
      alert("O vídeo está sendo reproduzido!");
   }

   return (
      <div className='App'>

         {/* Cabeçalho */}
         <header className='cabecalho'>
            <div className='cabecalho-esquerda'>
               <span className='material-icons'>menu</span>
               <img src={logoLabtube} alt='null' />
            </div>

            <div className='cabecalho-centro'>
               <form action=''>
                  <input type='search' placeholder='Pesquisar' />
                  <button type='button'><span className='material-icons'>search</span></button>
               </form>
            </div>

            <div className='cabecalho-direita'>
               <span className='material-icons'>videocam</span>
               <span className='material-icons'>apps</span>
               <span className='material-icons'>notifications</span>
               <span className='material-icons'>account_circle</span>
            </div>
         </header>

         {/* Conteúdo principal */}
         <main className='principal'>

            {/* Menu lateral */}
            <aside className='menu-lateral'>
               <div className='menu-lateral-lista'>
                  <div className='categoria'>
                     <span className='material-icons'>home</span>
                     <i>Início</i>
                  </div>
                  <div className='categoria'>
                     <span class="material-icons">local_fire_department</span>
                     <i>Em alta</i>
                  </div>
                  <div className='categoria'>
                     <span className='material-icons'>subscriptions</span>
                     <i>Inscrições</i>
                  </div>
               </div>
               <hr />
               <div className='menu-lateral-lista'>
                  <div className='categoria'>
                     <span class="material-icons">smart_display</span>
                     <i>Originais</i>
                  </div>
                  <div className='categoria'>
                     <span class="material-icons">history</span>
                     <i>Histórico</i>
                  </div>
               </div>
            </aside>

            {/* Vídeos recomendados */}
            <section className='videos-recomendados'>
               <h1>Recomendados</h1>

               {/* Grade de vídeos */}
               <div className='videos-recomendados-grade'>
                  <div className='video'>
                     <div className='capa-video'>
                        <img src="https://picsum.photos/400/400?a=1" alt="null" onClick={reproduzVideo} />
                     </div>
                     <div className='detalhes-video'>
                        <div className='avatar-canal'>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>
                              <img src={logoCanal} alt="null" />
                           </a>
                        </div>
                        <div className='titulo-video'>
                           <h3 onClick={reproduzVideo}>Título do Vídeo</h3>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>Labenu</a>
                           <i>22 mil visualizações • há 1 ano</i>
                        </div>
                     </div>
                  </div>

                  <div className='video'>
                     <div className='capa-video'>
                        <img src="https://picsum.photos/400/400?a=2" alt="null" onClick={reproduzVideo} />
                     </div>
                     <div className='detalhes-video'>
                        <div className='avatar-canal'>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>
                              <img src={logoCanal} alt="null" />
                           </a>
                        </div>
                        <div className='titulo-video'>
                           <h3 onClick={reproduzVideo}>Título do Vídeo</h3>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>Labenu</a>
                           <i>22 mil visualizações • há 1 ano</i>
                        </div>
                     </div>
                  </div>

                  <div className='video'>
                     <div className='capa-video'>
                        <img src="https://picsum.photos/400/400?a=3" alt="null" onClick={reproduzVideo} />
                     </div>
                     <div className='detalhes-video'>
                        <div className='avatar-canal'>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>
                              <img src={logoCanal} alt="null" />
                           </a>
                        </div>
                        <div className='titulo-video'>
                           <h3 onClick={reproduzVideo}>Título do Vídeo</h3>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>Labenu</a>
                           <i>22 mil visualizações • há 1 ano</i>
                        </div>
                     </div>
                  </div>

                  <div className='video'>
                     <div className='capa-video'>
                        <img src="https://picsum.photos/400/400?a=4" alt="null" onClick={reproduzVideo} />
                     </div>
                     <div className='detalhes-video'>
                        <div className='avatar-canal'>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>
                              <img src={logoCanal} alt="null" />
                           </a>
                        </div>
                        <div className='titulo-video'>
                           <h3 onClick={reproduzVideo}>Título do Vídeo</h3>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>Labenu</a>
                           <i>22 mil visualizações • há 1 ano</i>
                        </div>
                     </div>
                  </div>

                  <div className='video'>
                     <div className='capa-video'>
                        <img src="https://picsum.photos/400/400?a=5" alt="null" onClick={reproduzVideo} />
                     </div>
                     <div className='detalhes-video'>
                        <div className='avatar-canal'>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>
                              <img src={logoCanal} alt="null" />
                           </a>
                        </div>
                        <div className='titulo-video'>
                           <h3 onClick={reproduzVideo}>Título do Vídeo</h3>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>Labenu</a>
                           <i>22 mil visualizações • há 1 ano</i>
                        </div>
                     </div>
                  </div>

                  <div className='video'>
                     <div className='capa-video'>
                        <img src="https://picsum.photos/400/400?a=6" alt="null" onClick={reproduzVideo} />
                     </div>
                     <div className='detalhes-video'>
                        <div className='avatar-canal'>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>
                              <img src={logoCanal} alt="null" />
                           </a>
                        </div>
                        <div className='titulo-video'>
                           <h3 onClick={reproduzVideo}>Título do Vídeo</h3>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>Labenu</a>
                           <i>22 mil visualizações • há 1 ano</i>
                        </div>
                     </div>
                  </div>

                  <div className='video'>
                     <div className='capa-video'>
                        <img src="https://picsum.photos/400/400?a=7" alt="null" onClick={reproduzVideo} />
                     </div>
                     <div className='detalhes-video'>
                        <div className='avatar-canal'>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>
                              <img src={logoCanal} alt="null" />
                           </a>
                        </div>
                        <div className='titulo-video'>
                           <h3 onClick={reproduzVideo}>Título do Vídeo</h3>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>Labenu</a>
                           <i>22 mil visualizações • há 1 ano</i>
                        </div>
                     </div>
                  </div>

                  <div className='video'>
                     <div className='capa-video'>
                        <img src="https://picsum.photos/400/400?a=8" alt="null" onClick={reproduzVideo} />
                     </div>
                     <div className='detalhes-video'>
                        <div className='avatar-canal'>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>
                              <img src={logoCanal} alt="null" />
                           </a>
                        </div>
                        <div className='titulo-video'>
                           <h3 onClick={reproduzVideo}>Título do Vídeo</h3>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>Labenu</a>
                           <i>22 mil visualizações • há 1 ano</i>
                        </div>
                     </div>
                  </div>

                  <div className='video'>
                     <div className='capa-video'>
                        <img src="https://picsum.photos/400/400?a=9" alt="null" onClick={reproduzVideo} />
                     </div>
                     <div className='detalhes-video'>
                        <div className='avatar-canal'>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>
                              <img src={logoCanal} alt="null" />
                           </a>
                        </div>
                        <div className='titulo-video'>
                           <h3 onClick={reproduzVideo}>Título do Vídeo</h3>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>Labenu</a>
                           <i>22 mil visualizações • há 1 ano</i>
                        </div>
                     </div>
                  </div>

                  <div className='video'>
                     <div className='capa-video'>
                        <img src="https://picsum.photos/400/400?a=10" alt="null" onClick={reproduzVideo} />
                     </div>
                     <div className='detalhes-video'>
                        <div className='avatar-canal'>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>
                              <img src={logoCanal} alt="null" />
                           </a>
                        </div>
                        <div className='titulo-video'>
                           <h3 onClick={reproduzVideo}>Título do Vídeo</h3>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>Labenu</a>
                           <i>22 mil visualizações • há 1 ano</i>
                        </div>
                     </div>
                  </div>

                  <div className='video'>
                     <div className='capa-video'>
                        <img src="https://picsum.photos/400/400?a=11" alt="null" onClick={reproduzVideo} />
                     </div>
                     <div className='detalhes-video'>
                        <div className='avatar-canal'>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>
                              <img src={logoCanal} alt="null" />
                           </a>
                        </div>
                        <div className='titulo-video'>
                           <h3 onClick={reproduzVideo}>Título do Vídeo</h3>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>Labenu</a>
                           <i>22 mil visualizações • há 1 ano</i>
                        </div>
                     </div>
                  </div>

                  <div className='video'>
                     <div className='capa-video'>
                        <img src="https://picsum.photos/400/400?a=12" alt="null" onClick={reproduzVideo} />
                     </div>
                     <div className='detalhes-video'>
                        <div className='avatar-canal'>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>
                              <img src={logoCanal} alt="null" />
                           </a>
                        </div>
                        <div className='titulo-video'>
                           <h3 onClick={reproduzVideo}>Título do Vídeo</h3>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>Labenu</a>
                           <i>22 mil visualizações • há 1 ano</i>
                        </div>
                     </div>
                  </div>

                  <div className='video'>
                     <div className='capa-video'>
                        <img src="https://picsum.photos/400/400?a=13" alt="null" onClick={reproduzVideo} />
                     </div>
                     <div className='detalhes-video'>
                        <div className='avatar-canal'>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>
                              <img src={logoCanal} alt="null" />
                           </a>
                        </div>
                        <div className='titulo-video'>
                           <h3 onClick={reproduzVideo}>Título do Vídeo</h3>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>Labenu</a>
                           <i>22 mil visualizações • há 1 ano</i>
                        </div>
                     </div>
                  </div>

                  <div className='video'>
                     <div className='capa-video'>
                        <img src="https://picsum.photos/400/400?a=14" alt="null" onClick={reproduzVideo} />
                     </div>
                     <div className='detalhes-video'>
                        <div className='avatar-canal'>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>
                              <img src={logoCanal} alt="null" />
                           </a>
                        </div>
                        <div className='titulo-video'>
                           <h3 onClick={reproduzVideo}>Título do Vídeo</h3>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>Labenu</a>
                           <i>22 mil visualizações • há 1 ano</i>
                        </div>
                     </div>
                  </div>

                  <div className='video'>
                     <div className='capa-video'>
                        <img src="https://picsum.photos/400/400?a=15" alt="null" onClick={reproduzVideo} />
                     </div>
                     <div className='detalhes-video'>
                        <div className='avatar-canal'>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>
                              <img src={logoCanal} alt="null" />
                           </a>
                        </div>
                        <div className='titulo-video'>
                           <h3 onClick={reproduzVideo}>Título do Vídeo</h3>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>Labenu</a>
                           <i>22 mil visualizações • há 1 ano</i>
                        </div>
                     </div>
                  </div>

                  <div className='video'>
                     <div className='capa-video'>
                        <img src="https://picsum.photos/400/400?a=16" alt="null" onClick={reproduzVideo} />
                     </div>
                     <div className='detalhes-video'>
                        <div className='avatar-canal'>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>
                              <img src={logoCanal} alt="null" />
                           </a>
                        </div>
                        <div className='titulo-video'>
                           <h3 onClick={reproduzVideo}>Título do Vídeo</h3>
                           <a href='https://www.youtube.com/c/Labenu' target='_blank'>Labenu</a>
                           <i>22 mil visualizações • há 1 ano</i>
                        </div>
                     </div>
                  </div>

               </div>

            </section>

         </main>

      </div>
   );
};

export default App;
