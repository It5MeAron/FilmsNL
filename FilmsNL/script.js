function changeShow(){
    const check = document.getElementById('short');
    var obj = check.classList.contains('show');
    if(obj){
      document.getElementById('short').className='collapse';
      document.getElementById('spantext').innerHTML='Shorter synopsis:';
    }else{
      document.getElementById('short').className='collapse show';
      document.getElementById('spantext').innerHTML='Detailed synopsis:';
    }
  }
  
  function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }