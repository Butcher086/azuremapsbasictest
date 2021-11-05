import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as atlas from 'azure-maps-control';
import { AzureMapsModule } from 'ng-azure-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AzureMapsModule.forRoot({
      authOptions: {
        authType: atlas.AuthenticationType.subscriptionKey,
        subscriptionKey: 'EtJQbIoVG-x2GXRqs4g_WbiTj5fo_1q7IUG-p731m_Y'
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
