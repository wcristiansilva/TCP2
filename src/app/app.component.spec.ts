importação { TestBed } de '@angular/core/testing';
importação { AppComponent } de './app.component';

descrever('AppComponent', () => {
  antesEach(async  () => {
    aguarde TestBed. configurareTestingModule({
      declarações: [
        AppComponent
      ],
    }). . compilarcomponentes();
  });

  ele('deve criar o aplicativo', () => {
    const -  TestBed. criarComponente(AppComponent);
    aplicativo const  = fixação. componentesInstância;
    esperar(app). toBeTruthy();
  });

  ele('deve ter como título 'primeiro2021'', () => {
    const -  TestBed. criarComponente(AppComponent);
    aplicativo const  = fixação. componentesInstância;
    esperar(app. título). toEqual('primeiro2021');
  });

  ele('deve render título', () => {
    const -  TestBed. criarComponente(AppComponent);
    luminária. detectar Alterações();
    const compilado = luminária. NativoElement;
    esperar(compilado. consultaSelector('.conteúdo span').  textContent). toContain('primeiro aplicativo2021 está em execução!');
  });
});
