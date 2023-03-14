import { Component } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent {
evento:IEvent[]=[
{
  title: "Minecon",
  image: "assets/MINECON-Live-Logo-Wire-2.png",
  date: "2023-08-22",
  description: "lo del maincra",
  price: 30

},
{
  title: "esa cosa",
  image: "assets/Vortice.webp",
  date: "2024-03-30",
  description: "ya tu sabeh",
  price: 5
}
];

}
