$(document).ready(function() {

	  $('#calendar').fullCalendar({
   //      header: {
			
			// left: 'prev,next today',
			// center: 'title',
			// right: 'listDay,listWeek,listMonth'
			// },
			header: false,
			defaultView: 'listWeek',
			selectable: true,
			selectHelper: true,
			editable: true,
			eventLimit: true
    })



	   $('#calendar-list').fullCalendar({
        header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay',
			},
			selectable: true,
			selectHelper: true,
			editable: true,
			eventLimit: true
    })

});