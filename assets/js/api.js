var baseAPIUrl = "http://52.232.102.59/NApi/api/";
function hotcourses() {
  var htmlText = '';
  var url = "Course/GetAll";
        $.getJSON(baseAPIUrl+url, function (data) {
          //console.log(data);
          $.each(data, function(key, value) {
          //to access value
           //console.log(value.categoryId);
           htmlText += '<div class="col-sm-12 col-md-6  col-lg-4 g-mb-30">'
                          + '<article> <img class="img-fluid w-100" src="assets/img/1.jpg" alt="Image Description">'
                          +	'<div class="g-width-80x g-bg-white g-pos-rel g-z-index-1 g-pa-30 g-mt-minus-50 mx-auto"> <span class="d-block g-color-gray-dark-v4 g-font-weight-600 g-font-size-12 text-uppercase mb-2">31 May 2017</span>'
                          +	'<h2 class="h5 g-color-black g-font-weight-600 mb-3"> <a class="u-link-v5 g-color-black g-color-primary--hover g-cursor-pointer course-url" data-catid="'+ value.categoryId +'" data-id="'+ value.courseId +'" href="javascript:void(0)">An Introduction to '+ value.categoryId+ '</a> </h2>'
                          +	'<p class="g-color-gray-dark-v4 g-line-height-1_8">'+ value.description +'...</p>'
                          +	'<a href="javascript:void(0)" class="g-font-size-13 course-url" data-catid="'+ value.categoryId +'" data-cid="'+ value.courseId +'" >Read more...</a> </div>'
                          +'</article>'
                        +'</div>';
          });
          $('#hotCourses').append(htmlText);
        });
}


function comCourses(){
var coursecCategory = '';

var url = "Category/GetAll";
      $.getJSON(baseAPIUrl+url, function (data) {
         //console.log(data);
        $.each(data, function(key, value) {
         //console.log(value);
        //to access value
         cstatus = value.status;
         coursecCategory += '<div class="col-lg-4 col-md-6 col-sm-12  g-mb-30">'
                      +'<article class="g-bg-white">'
                      + '<figure class="g-pos-rel"> <img class="img-fluid w-100" src="assets/img/Petrochemical-C.jpg" alt="Image Description">'
                      +	'<figcaption class="g-pos-abs g-bottom-20 g-left-20"> <a class="btn btn-sm u-btn-black rounded-0" href="#">July 07, 2017</a> </figcaption>'
                      +  '</figure>'
                      +  '<div class="g-pa-30">'
                      +	'<h3 class="g-font-weight-300 g-mb-15"> <a class="g-color-main g-text-underline--none--hover" href="http://navcomelectronics.eu/NMCIS/petrochemical_courses.html">'+ value.categoryName +'</a> </h3>'
                      +	'<p id="categoryDescription">'+ value.description +'</p>'
                      +  '</div>'
                      +  '<div class="media g-font-size-12 g-brd-top g-brd-gray-light-v4 g-pa-15-30">'
                      +	'<div class="align-self-center msg-icon"> <a class=" g-text-underline--none--hover g-mr-10" href="#"> <i class="fa fa-comments-o" aria-hidden="true"></i> 24 </a> <a class=" g-text-underline--none--hover" href="#"> <i class="fa fa-eye" aria-hidden="true"></i> 108 </a> </div>'
                      +	'<div class="media-body align-self-center readmore-btn"> <a class="g-color-main g-text-underline--none--hover read-btn" href="http://navcomelectronics.eu/NMCIS/petrochemical_courses.html">read more</a> </div>'
                      +  '</div>'
                      +'</article>'
                    +'</div>';
        });
        if ( cstatus == 'Active' ){$('#course-categories').append(coursecCategory);}

        //$("p#categoryDescription").css({"white-space":"nowrap", "text-overflow":"ellipsis","overflow": "hidden"});
        $("#course-categories h3").css({"white-space":"nowrap", "text-overflow":"ellipsis","overflow": "hidden"});
      });
}

$('body').on('click', 'a.course-url', function() {
    var courseid = $(this).data("cid");
    var catgid = $(this).data("catid");
    //alert(catgid);
    var data = {
      courseId: courseid,
      catId: catgid
    };
    if (courseid) {
    window.location = 'course-details.html?courseId=' + courseid+'&catId=' + catgid;
    }
});


var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

function courseDetails() {

  var schedulesData = '';
  var courseList = '';
  var courseIntro = '';
  var courseFullDesc = '';
  var canBook = '';

  var data = {
    			  courseId: getUrlParameter('courseId'),
    			  catId: getUrlParameter('catId'),
    			};
  var baseurl = "Nmcisweb/GetCatCrsDetails?";
	var url = baseurl.replace(/\?.*$/, "") + "?" + jQuery.param(data);

  $.getJSON(baseAPIUrl+url, function (data) {
     //console.log(data);
     var catgid = data.categoryInfo.categoryId;

     $.each(data.schedules, function(key, value) {

      canBook = value.canBook;
      schedulesData +=  '<tr>'
                        +'<td id="newdate" class="course-dated" data-dated="'+ value.dated +'">'+ value.dated +'</td>'
                        +'<td>'+ value.places +'</td>'
                        +'<td class="course-price" data-price="'+ value.price +'">'+ value.price +'</td>'
                        +'<td class="booking"><a href="javascript:void(0)" class="enquiryBtn" data-toggle="modal" data-target="#enquirypopup">Enquiry</a><a href="javascript:void(0)" class="book-course">Book</a></td>'
                        +'<tr>';
     });
     $('#course-data #schedules-data').append(schedulesData);
     // change button based on canBook status
     $(".enquiryBtn").hide();
     $(".book-course").hide();
     if(canBook == true){
         $(".enquiryBtn").hide();
         $(".book-course").show();
       }else{
         $(".enquiryBtn").show();
         $(".book-course").hide();
       }

     $.each(data.courses, function(key, value) {

      courseList += '<li><a class="course-url" data-catid="'+ catgid +'" data-cid="'+ value.courseId +'"><i class="fa fa-caret-right" aria-hidden="true"></i> '+ value.name +'</a></li>';
     });
     $('#course-details #menu-content').append(courseList);
     //to access value
     //console.log(data.courseDetails.price);
     courseIntro += '<h3>Course Name:</h3>'
                +'<p class="course-name" data-cname="An Introduction to LNG">An Introduction to LNG</p>'
                +'<h3>Course Price:</h3>'
                +'<p>'+ data.courseDetails.price +'</p>'
                +'<h3>Course Type:</h3>'
                +'<p>'+ data.courseDetails.courseType +'</p>';
     courseFullDesc += '<h3>Full Description:</h3>'
               +'<p class="cdesc" data-cdesc="'+ data.courseDetails.description +'">'+ data.courseDetails.description +'</p>'
               +'<h3>The Lecturer</h3>'
               +'<p>'+ data.courseDetails.trainerBio +'</p>';
     $('#course-details .courseIntroCon').append(courseIntro);
     $('#course-details .course-full-description').append(courseFullDesc);
  });

}
