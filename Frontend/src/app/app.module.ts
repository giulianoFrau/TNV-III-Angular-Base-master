import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './routes/add/add.component';
import { DetailsComponent } from './routes/details/details.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './routes/edit/edit.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterDoubleComponent } from './routes/filter-double/filter-double.component';
import { SortByComponent } from './routes/sort-by/sort-by.component';
import { ApiserviceService } from './services/apiservice.service';
import { ApiComponent } from './routes/api/api.component';
import { FiltronomevalutazionePipe } from './pipes/filtronomevalutazione.pipe';
import { LoginService } from './services/login.service';
import { LoginComponent } from './routes/login/login.component';
import { RegistrazioneComponent } from './routes/registrazione/registrazione.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddComponent,
    DetailsComponent,
    EditComponent,
    HeaderComponent,
    FooterComponent,
    FilterDoubleComponent,
    SortByComponent,
    ApiComponent,
    FiltronomevalutazionePipe,
    LoginComponent,
    RegistrazioneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataService, 
    ApiserviceService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
