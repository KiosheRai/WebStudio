import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BannerComponent } from './components/banner/banner.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FooterOneComponent } from './components/footer-one/footer-one.component';
import { FooterTwoComponent } from './components/footer-two/footer-two.component';
import { SliderComponent } from './components/slider/slider.component';
import { CardComponent } from './components/card/card.component';
import { HowToStartComponent } from './components/how-to-start/how-to-start.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderBannerComponent } from './components/header-banner/header-banner.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { FractionsPageComponent } from './pages/fractions-page/fractions-page.component';
import { TilesComponent } from './components/tiles/tiles.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { FeaturesComponent } from './components/features/features.component';
import { StartWithComponent } from './components/start-with/start-with.component';
import { LoginPageComponent } from './admin/pages/login-page/login-page.component';
import { AuthGuard } from './admin/services/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardPageComponent } from './admin/pages/dashboard-page/dashboard-page.component';
import { AlertComponent } from './admin/components/alert/alert.component';
import { SearchPipe } from './admin/pipes/search.pipe';
import { AuthInterceptor } from './auth.interceptor';
import { ImageTextComponent } from './components/image-text/image-text.component';

const INTERCEPTOR_PROVIDER: Provider = {
	provide: HTTP_INTERCEPTORS,
	multi: true,
	useClass: AuthInterceptor
}

@NgModule({
	declarations: [
		AppComponent,
		NavMenuComponent,
		BannerComponent,
		AboutUsComponent,
		FooterOneComponent,
		FooterTwoComponent,
		SliderComponent,
		CardComponent,
		HowToStartComponent,
		HomePageComponent,
		HeaderBannerComponent,
		ListItemsComponent,
		FractionsPageComponent,
		TilesComponent,
		NotFoundPageComponent,
		FeaturesComponent,
		StartWithComponent,
		LoginPageComponent,
		DashboardPageComponent,
		AlertComponent,
		SearchPipe,
		ImageTextComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		FontAwesomeModule
	],
	providers: [AuthGuard, INTERCEPTOR_PROVIDER],
	bootstrap: [AppComponent]
})
export class AppModule { }
