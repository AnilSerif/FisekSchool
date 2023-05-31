import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KurumsalComponent } from './Components/navbar/kurumsal/kurumsal.component';
import { HomeComponent } from './Components/home/home.component';
import { ContactComponent } from './Components/navbar/contact/contact.component';
import { EducationComponent } from './Components/navbar/education/education.component';
import { KampusComponent } from './Components/navbar/kampus/kampus.component';
import { AcademyComponent } from './Components/navbar/academy/academy.component';


const routes: Routes = [
{path:'',component:HomeComponent,pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{path:"kurumsal", component:KurumsalComponent},
{path:"success",component:AcademyComponent},
{path:"iletişim",component:ContactComponent},
{path:"kampüs",component:KampusComponent},
{path:"eğitim",component:EducationComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
