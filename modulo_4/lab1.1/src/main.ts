import { enableProdMode } from '@angular/core'; //importa un modulo de servicio 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // paquete que lo hace visible en los navegadores

import { AppModule } from './app/app.module'; // modulo de configuracion de la aplicacion 
import { environment } from './environments/environment'; // si el ambiente es produccion o desarrollo

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule); //donde arranca la aplicacion aqui se le define el parametro de arranque
