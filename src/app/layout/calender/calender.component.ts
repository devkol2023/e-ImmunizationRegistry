import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core/index.js';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.scss'
})
export class CalenderComponent {
  showPopup = false;
  popupTitle: string | null = null;
  popupDate: string | null = null;
  popupTime: string | null = null;
  popupEndTime: string | null = null;
  popupLocation: string | null = null;
  popupDescription: string | null = null;
  popupAttendees: string[] | null = null;

  events = [
    {
      title: 'COVID-19 Vaccination - Clinic A',
      start: new Date(new Date().setHours(9, 0)),  
      end: new Date(new Date().setHours(11, 0)),  
      location: 'Health Center 1',
      description: 'COVID-19 booster shots for registered patients.',
      attendees: ['Dr. Smith', 'Nurse Lisa'],
      editable: true
    },
    {
      title: 'Flu Shots - Local Pharmacy',
      start: new Date(new Date().setHours(14, 0)),  
      end: new Date(new Date().setHours(16, 0)),  
      location: 'Downtown Pharmacy',
      description: 'Annual flu shots for senior citizens.',
      attendees: ['Dr. John', 'Nurse Kate'],
      editable: true
    }
  ];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    editable: true,
    selectable: true,
    events: this.events,    
    eventClick: this.handleEventClick.bind(this),
    eventContent: (eventInfo: any) => {
      const start = new Date(eventInfo?.event?.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const end = new Date(eventInfo?.event?.end).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      return {
        html: `
          <div class="event-tooltip">
            <b>${eventInfo.event.title}</b>
            <div>${start} - ${end}</div>
          </div>
        `
      }
    }
  };

  handleEventClick(arg: any): void {
    this.popupTitle = arg.event.title;
    this.popupDate = arg.event.start.toISOString().split('T')[0];
    this.popupTime = arg.event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    this.popupEndTime = arg.event.end?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) || 'N/A';
    this.popupLocation = arg.event.extendedProps.location;
    this.popupDescription = arg.event.extendedProps.description;
    this.popupAttendees = arg.event.extendedProps.attendees;
    this.showPopup = true;
  }

  closePopup(): void {
    this.showPopup = false;
  }
}
