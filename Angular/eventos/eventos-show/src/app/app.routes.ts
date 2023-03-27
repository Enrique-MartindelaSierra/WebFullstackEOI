import { Route } from '@angular/router';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EventsListComponent } from './events-list/events-list.component';

export const APP_ROUTES: Route[] = [
  { path: 'eventos', component: EventsListComponent },
  { path: 'eventos/add', component: EventFormComponent },
  { path: 'eventos/:id', component: EventDetailComponent },
    // Ruta por defecto (vacía) -> Redirigir a /welcome
    { path: '', redirectTo: '/eventos', pathMatch: 'full' },

    // Ruta que no coincide con ninguna de las anteriores
    { path: '**', redirectTo: '/eventos', pathMatch: 'full' }
];
