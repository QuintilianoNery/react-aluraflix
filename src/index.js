import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
//Importando configuração para DOM para funcionar como SPA
import { BrowserRouter, Switch, Route}  from  'react-router-dom';
import CadastroVideo from './pages/cadastro/video';

// Desafio master blaster na descrição
// Colocar um jogo nessa página: https://www.youtube.com/watch?v=jOAU81jdi-c :)
const Pagina404 = ( ) => (<div>Página 404</div>)

ReactDOM.render(
    <BrowserRouter>
      <Switch>
          <Route path="/" component= {Home}  exact />
          <Route path="/cadastro/video" component= {CadastroVideo} />
          <Route component= { Pagina404} />
      </Switch>
    </BrowserRouter>,

  document.getElementById('root')
);
