import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StartPageComponent} from './start-page/start-page.component';
import {MainComponent} from './main/main.component';
import {UserDataComponent} from './user-data/user-data.component';
import {SummaryPageComponent} from './summary-page/summary-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/start', pathMatch: 'full'},
  {path: 'start', component: StartPageComponent},
  {path: 'booking', component: MainComponent},
  {path: 'booking/userData', component: UserDataComponent},
  {path: 'booking/userData/summary', component: SummaryPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
