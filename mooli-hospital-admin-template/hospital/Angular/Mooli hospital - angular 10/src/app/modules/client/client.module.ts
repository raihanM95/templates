import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmailComponent } from './email/email.component';
import { ChatComponent } from './chat/chat.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSliderModule } from '@angular/material/slider';
import { ChartsComponent } from './charts/charts.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { ColumnChartComponent } from './charts/column-chart/column-chart.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SocialComponent } from './social/social.component';
import { BlogComponent } from './blog/blog.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FilemanagerComponent } from './filemanager/filemanager.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SettingsComponent } from './settings/settings.component';
import { FullcalenderComponent } from './fullcalender/fullcalender.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid';
import { WorldmapComponent } from './worldmap/worldmap.component';
import { AgmCoreModule } from '@agm/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CkeditorComponent } from './ckeditor/ckeditor.component';
import { ComposeEmailComponent } from './email/compose-email/compose-email.component';
import { ComposeEmailDetailsComponent } from './email/compose-email-details/compose-email-details.component';
import { PagesComponent } from './pages/pages.component';
import { PaymentsComponent } from './payments/payments.component';
import { AddpaymentsComponent } from './payments/addpayments/addpayments.component';
import { InvoicesComponent } from './payments/invoices/invoices.component';
import { InvoiceDetailComponent } from './payments/invoices/invoice-detail/invoice-detail.component';
import { DepartmentComponent } from './department/department.component';
import { OurCentersComponent } from './our-centers/our-centers.component';
import { OurStaffComponent } from './our-staff/our-staff.component';
import { RoomAllotmentComponent } from './room-allotment/room-allotment.component';
import { AllotedRoomsComponent } from './room-allotment/alloted-rooms/alloted-rooms.component';
import { AddAllotmentComponent } from './room-allotment/add-allotment/add-allotment.component';
import { PatientsComponent } from './patients/patients.component';
import { AllPatientsComponent } from './patients/all-patients/all-patients.component';
import { AddPatientComponent } from './patients/add-patient/add-patient.component';
import { PatientProfileComponent } from './patients/patient-profile/patient-profile.component';
import { PatientInvoicesComponent } from './patients/patient-invoices/patient-invoices.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AllDoctorsComponent } from './doctors/all-doctors/all-doctors.component';
import { AddDoctorsComponent } from './doctors/add-doctors/add-doctors.component';
import { DoctorsProfileComponent } from './doctors/doctors-profile/doctors-profile.component';
import { DoctorsScheduleComponent } from './doctors/doctors-schedule/doctors-schedule.component';
import { EventsComponent } from './doctors/doctors-schedule/events/events.component';
import { CovidComponent } from './dashboard/covid/covid.component';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin
]);

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    DragDropModule,
    MatSliderModule,
    NgApexchartsModule,
    ToastrModule.forRoot({
    }),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    AgmCoreModule.forRoot({
      apiKey: 'GOOGLE_API_KEY'
    }),
    FullCalendarModule,
    CKEditorModule
  ],
  declarations: [
    ClientRoutingModule.components,
    HeaderComponent,
    LeftmenuComponent,
    DashboardComponent,
    EmailComponent,
    ChatComponent,
    ChartsComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    ColumnChartComponent,
    SocialComponent,
    BlogComponent,
    ContactsComponent,
    FilemanagerComponent,
    TodoListComponent,
    SettingsComponent,
    FullcalenderComponent,
    WorldmapComponent,
    CkeditorComponent,
    ComposeEmailComponent,
    EventsComponent,
    ComposeEmailDetailsComponent,
    PagesComponent,
    InvoicesComponent,
    InvoiceDetailComponent,
    PaymentsComponent,
    AddpaymentsComponent,
    DepartmentComponent,
    OurCentersComponent,
    OurStaffComponent,
    RoomAllotmentComponent,
    AllotedRoomsComponent,
    AddAllotmentComponent,
    PatientsComponent,
    AllPatientsComponent,
    AddPatientComponent,
    PatientProfileComponent,
    PatientInvoicesComponent,
    AppointmentComponent,
    DoctorsComponent,
    AllDoctorsComponent,
    AddDoctorsComponent,
    DoctorsProfileComponent,
    DoctorsScheduleComponent,
    CovidComponent
  ],
  providers: [BsDatepickerModule]
})
export class ClientModule { }