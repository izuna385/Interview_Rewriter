

$('p').each(function(){
  var txt = $(this).html();
  $(this).html(
    txt.replace(/面談/g,'選考面接')
       .replace(/カジュアル/g,'真剣')
       .replace(/気軽/g,'真剣')
  );
});

$('div').each(function(){
  var txt = $(this).html();
  $(this).html(
    txt.replace(/面談/g,'選考面接')
       .replace(/カジュアル/g,'真剣')
       .replace(/気軽/g,'真剣')
  );
});

$('h').each(function(){
  var txt = $(this).html();
  $(this).html(
    txt.replace(/面談/g,'選考面接')
       .replace(/カジュアル/g,'真剣')
       .replace(/気軽/g,'真剣')
  );
});
