import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FontAwesomeModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
