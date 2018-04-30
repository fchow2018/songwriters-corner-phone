
function trips(id){
  console.log(id);
$.ajax({
  url:`/trips/${id}`,
  method:'get',
  success:function(ok){
    var trip=ok.trip;
  var content=$('#content .modal-body');
  content.empty()
  content.append(`
    <div class="card">


        <div class="view overlay">
            <img src= ' ${trip.image_start[0]} ' class="img-fluid" alt="">
            <a href="#">
                <div class="mask rgba-white-slight"></div>
            </a>
        </div>


        <div class="card-body">

            <h4 class="card-title"> ${trip.name}</h4>

            <p class="card-text"> ${trip.description}</p>

        </div>


    </div>
    `);
    ok.posts.forEach(function(post){
      content.append(`
        <div class="card">


            <div class="view overlay">
                <img src= ' ${post.images[0]} ' class="img-fluid" alt="">
                <a href="#">
                    <div class="mask rgba-white-slight"></div>
                </a>
            </div>


            <div class="card-body">

                <h4 class="card-title"> ${post.title}</h4>

                <p class="card-text"> ${post.description}</p>

            </div>


        </div>
        `);
    });
  $('#content').modal('show');
  },
  error:function(err){
    console.log(err)
  }
});
}
$(document).ready(function(){
$('.content').on('click','.more',function(e){
  e.preventDefault();
var id=$(this).attr('data-id');
console.log(id);
trips(id);
})


});
