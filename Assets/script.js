$(document).ready(function(){
    // display the current time/day on top of page
    $('#currentDay').text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    $('.saveBtn').on('click',function(){
        //store in localstorage
        var value = $(this).siblings('.description').val()
        var time = $(this).parent().attr('id')
        localStorage.setItem(time, value)
    })

    function hourUpdater(){
        var currentHour = moment().hour()
        $('.time-block').each(function(){
            var blockHour = parseInt($(this).attr('id').split('r')[1])
            if(currentHour > blockHour) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if(currentHour === blockHour) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else{
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })

    }
    hourUpdater()

    $('#hour9 .description').val(localStorage.getItem('hour9'))
    $('#hour10 .description').val(localStorage.getItem('hour10'))
    $('#hour11 .description').val(localStorage.getItem('hour11'))
    $('#hour12 .description').val(localStorage.getItem('hour12'))
    $('#hour1 .description').val(localStorage.getItem('hour13'))
    $('#hour2 .description').val(localStorage.getItem('hour14'))
    $('#hour3 .description').val(localStorage.getItem('hour15'))
    $('#hour4 .description').val(localStorage.getItem('hour16'))
    $('#hour5 .description').val(localStorage.getItem('hour17'))

}) 