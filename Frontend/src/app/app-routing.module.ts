import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './routes/dashboard/dashboard.component'
import { AddComponent } from './routes/add/add.component';
import { DetailsComponent } from './routes/details/details.component';
import { EditComponent } from './routes/edit/edit.component';
import { FilterDoubleComponent } from './routes/filter-double/filter-double.component';
import { SortByComponent } from './routes/sort-by/sort-by.component';
import { ApiComponent } from './routes/api/api.component';
import { LoginComponent } from './routes/login/login.component';
import { RegistrazioneComponent } from './routes/registrazione/registrazione.component';


const routes: Routes = [
  { path: "", redirectTo : '/login', pathMatch: 'full' },
  { path: "dashboard", component : DashboardComponent },
  { path: "add", component : AddComponent },
  { path: "details/:id", component : DetailsComponent },
  { path: "edit/:id", component: EditComponent },
  { path: "filterdouble", component: FilterDoubleComponent},
  { path: "sortBy", component: SortByComponent},
  { path: "apicorona", component:ApiComponent},
  { path: "login", component: LoginComponent},
  { path: "registrazione", component:RegistrazioneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
