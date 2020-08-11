'use strict';
function entry() {

    $('#js-shopping-list-form').submit(function (event) {
        event.preventDefault();
        const inputitem = $('#shopping-list-entry').val();
        $('#shopping-list-entry').val("");
        //this clears the input that val is called "pushes an empty string " val()=extract value
        // let result=[];
        const result = `<li>
        <span class="shopping-item">${inputitem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;

        $(".shopping-list").append(result)
        $(buttons)
    })
}

function buttons(){
    $('.shopping-item-delete').on('click', function (event){
        $(this).closest('li').remove()
    })
    $('.shopping-item-toggle').on('click', function(event){
        $(this).closest('li').toggleClass('shopping-item').toggleClass('shopping-item__checked')
    })
}
$(entry) //invokefunction
$(button)
//ID starts with hash "#"
//Class starts with "."

//.shopping-item-toggle
//.shipping-item-delete

// 'use strict';
// function main() {
//     $('#js-shopping-list-form').submit(function (event) {
//         event.preventDefault();
//         const item = $('#shopping-list-entry').val()
//         //console.log('---- new run -----')
//         //console.log(item)
//         const x = `<li>
//     <span class="shopping-item">${item}</span>
//     <div class="shopping-item-controls">
//       <button class="shopping-item-toggle">
//         <span class="button-label">check</span>
//       </button>
//       <button class="shopping-item-delete">
//         <span class="button-label">delete</span>
//       </button>
//     </div>
//   </li>`;
//         $('.shopping-list').append(x)
//         $(buttons)
//     })
// }
// function buttons() {
//     $('.shopping-item-toggle').on('click', function (event) {
//         $(this).closest('li').find('span.shopping-item').toggleClass('shopping-item__checked')
//     })
//     $('.shopping-item-delete').on('click', function (event) {
//         $(this).closest('li').remove()
//     })
// }
// $(main)
// $(buttons)