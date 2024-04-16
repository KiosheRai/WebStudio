import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";
import { LoginPageComponent } from './admin/pages/login-page/login-page.component';
import { AuthGuard } from './admin/services/auth.guard';
import { DashboardPageComponent } from './admin/pages/dashboard-page/dashboard-page.component';

const routes: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: 'login', component: LoginPageComponent },
	{ path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard] },
	{ path: '**', component: NotFoundPageComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
