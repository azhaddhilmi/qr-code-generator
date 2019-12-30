function generateQR(event){
    $('#qrcode canvas').remove();
    event.preventDefault();
    var event = $('#event').val();
    var level = $('#category').val();
    var date = $('#date').val();
    var point = $('#point').val();
    
    var result = {
        event: event,
        level : level,
        date: date,
        point : point,

    };
    $('#qrcode').qrcode('{\"event\": \"'+event+'\",\"category\": \"'+level+'\", \"date\": \"'+date+'\",\"point\": \"'+point+'\"}');
}



