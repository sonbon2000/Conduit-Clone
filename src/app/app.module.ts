import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article/article.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HeaderComponent } from './components/shared/layouts/header/header.component';
import { FooterComponent } from './components/shared/layouts/footer/footer.component';
import { EditorComponent } from './components/editor/editor.component';
import { CoreComponent } from './components/core/core.component';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ProfileComponent,
    HomeComponent,
    SettingsComponent,
    HeaderComponent,
    FooterComponent,
    EditorComponent,
    CoreComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
