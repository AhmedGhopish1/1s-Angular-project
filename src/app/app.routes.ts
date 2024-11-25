import { AboutComponent } from './../about/about.component';
import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PotfolioComponent } from '../potfolio/potfolio.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:"home",component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'portfolio',component:PotfolioComponent},
    {path:'contact',component:ContactComponent}
];
