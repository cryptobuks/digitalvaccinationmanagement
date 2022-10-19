import '@fullcalendar/react/dist/vdom';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import lsitPlugin from '@fullcalendar/list';
// import React, {useState} from 'react';

const Calendar = () => {
      // const [selectedDate, setSelectedDate] = useState ('');
      
      return(
        <div className='justify-content-center w-96'> 
         <FullCalendar 
          initialView="timeGridWeek" 
          plugins={[timeGridPlugin, lsitPlugin,interactionPlugin]} 
          hiddenDays={[0,6]} 
          nowIndicator={true}
          selectable={true}
          eventClick={
              (args) =>{
                if(args.event.title === 'Booked'){
                  alert("This slote is booked, please choose the green ones "+args.event.title);
                }
                else{
                  alert(args.event.title +" is successfull booked.");
                  args.event.setTitle ="Booked"
                  args.event.setBackgroundColor="red";
                }
              }
          }
          events={[
            {title :'Booked', date: '2022-10-18 07:00:00',backgroundColor:'red'},
            {title :'Free', date: '2022-10-18 08:00:00',backgroundColor:'green'},
            {title :'Free', date: '2022-10-18 09:00:00',backgroundColor:'green'},
            {title :'Booked', date: '2022-10-18 10:00:00',backgroundColor:'red'},
            {title :'Free', date: '2022-10-18 11:00:00',backgroundColor:'green'},
            {title :'Green', date: '2022-10-18 12:00:00',backgroundColor:'green'},
            ]}
          
          // showNonCurrentDates={false}
          // slotMinTime={["12:30:00"]}
          // slotMaxTime={["16:30:00)"]}
         />
      
        </div>
      )

}

export default Calendar;