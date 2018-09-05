   window.onload=function()
    {
      displaytable(TABLE_DATA);
    };
    //fn to clear table
    function cleartable(TABLE_DATA)
 {
    var child = document.getElementById('body');
    var i=child.getElementsByTagName('tr');
    var j=i.length;
    for( var x=j-1;x>-1;x--)
    {
    child.removeChild(i[x]);
 }  }
    //fn to display 
    function displaytable(TABLE_DATA)
    {
      var tab=document.getElementById('tab');
      var body=document.getElementById('body');
      for(var i=0;i<TABLE_DATA.length;i++)
      {
        var y=TABLE_DATA[i];
        var row=document.createElement('tr');
        var properties=['id','thumbnailUrl','name','price'];
        for (var j=0;j<properties.length;j++)
        {
          var column=document.createElement('td');
          column.innerHTML= y[properties[j]];
          row.appendChild(column);
        }
      body.appendChild(row);
      tab.appendChild(body);
    } }
    
    //fn to shuffle 
    function shuffle(array)
  {var i=array.length,j,temp;
    while(--i>0)
    {
      j=Math.floor(Math.random()*(i+1)); 
      temp=array[j];
      array[j]=array[i];
      array[i]=temp;
    }     
return array;
  }
  function startbutton()
  {
  cleartable();
  shuffle(TABLE_DATA);
  displaytable(TABLE_DATA);
   }
//fn for sorting
function sortingprice(a,b)
{
  return parseFloat(b.price)-parseFloat(a.price)
}
function sortingid(abc,xyz)
{
  abc.sort(xyz);
  abc.sort(function(a, b) {
  if(a.price==b.price)
  return parseFloat(a.id)-parseFloat(b.id)});
}
function sorts()
  {
  sortingid(TABLE_DATA,sortingprice);
  cleartable();
  displaytable(TABLE_DATA);
}