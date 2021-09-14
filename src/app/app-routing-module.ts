import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StartPageComponent} from './start-page/start-page.component';
import {MainComponent} from './main/main.component';
import {UserDataComponent} from './user-data/user-data.component';
import {SummaryPageComponent} from './summary-page/summary-page.component';
import {ContactComponent} from './contact/contact.component';
import {ReservationsComponent} from './reservations/reservations.component';

const routes: Routes = [
  {path: '', redirectTo: '/start', pathMatch: 'full'},
  {path: 'start', component: StartPageComponent},
  {path: 'booking', component: MainComponent},
  {path: 'booking/userData', component: UserDataComponent},
  {path: 'booking/userData/summary', component: SummaryPageComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'reservations', component: ReservationsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
