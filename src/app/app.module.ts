import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { AboutComponent } from './about/about.component';
import { ProductosComponent } from './productos/productos.component';
import { MapsiteComponent } from './mapsite/mapsite.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarruselComponent,
    AboutComponent,
    ProductosComponent,
    MapsiteComponent,
    ContactComponent,
    FooterComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
