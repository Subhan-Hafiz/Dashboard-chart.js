
$('#downloadPdf').click(function(event) {
   //donwload pdf from original canvas

    var canvas = document.querySelector('#myAreaChart');
    var canvas2 = document.querySelector('#myPieChart');
      //creates image
      var canvasImg = canvas.toDataURL("image/jpeg", 1.0);
      var canvasImg2 = canvas2.toDataURL("image/jpeg", 1.0);
    
      //creates PDF from img
      var doc = new jsPDF('landscape');
      doc.setFontSize(10);
      doc.text(200, 25, "Energy Consumption Trend");
      doc.text(200, 125, "Energy Consumption Units");
      doc.addImage(canvasImg, 'JPEG', 10, 10, 140, 75 );
      doc.addImage(canvasImg2, 'JPEG', 10, 100, 140, 75 );
      doc.save('canvas.pdf');
  }
    );
