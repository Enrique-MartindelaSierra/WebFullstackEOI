import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventFilterPipe } from './pipes/event-filter.pipe';
import { EventItemComponent } from './event-item/event-item.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EventosService } from './servicios/eventos.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor } from './interceptores/base-url.interceptor';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventFilterPipe,
    EventItemComponent,
    EventFormComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers:[
    EventosService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: BaseUrlInterceptor,
    multi: true,
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
