var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem );
// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');

 // Add class
  li.className = 'list-group-item';

  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  
 var newdes =  document.getElementById('item1').value

 var newdiv=document.createElement('div')
 newdiv.className='div2'

 newdiv.appendChild(document.createTextNode(newdes))

 li.appendChild(newdiv)
  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
itemList.addEventListener('click', removeItem)
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }
 

//  filter event

var filter=document.getElementById('filter')
filter.addEventListener('keyup', filterItem)

// Filter Items
function filterItem(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    var item1 = itemList.getElementsByClassName('div2');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
       
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  

  Array.from(item1).forEach(function(item1){
    var text = e.target.value.toLowerCase();
var itemName1 = item1.firstChild.textContent;

if(itemName1.toLowerCase().indexOf(text) != -1) {
  item1.style.display = 'block';
} else {
  item1.style.display = 'none';
}

  })
}
//   //   adding edit button
// var allitems=document.getElementsByTagName('li')
// var list= document.getElementsByClassName("div")
// for(let i=0;i<=list.length;i++){
// var editbtn =  document.createElement('button')
// editbtn.class="editbtn"
//   // Append text node
//   editbtn.appendChild(document.createTextNode('edit'));
 
//   list[i].appendChild(editbtn)
// }

//   allitems.appendChild(list)

