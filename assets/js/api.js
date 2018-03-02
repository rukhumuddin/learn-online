// function to get parems value
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

function add3Dots(string, limit)
{
    var dots = "...";
    if (string.length > limit)
    {
        // you can also use substr instead of substring
        string = string.substring(0, limit) + dots;
    }

    return string;
}

// global base url for api
var globalAPIUrl = "http://52.232.102.59/NApi/api/";

// function to get hot courses list for index page
function hotcourses() {
    var htmlText = '';
    var url = "Nmcisweb/GetHotCourses";
    $.getJSON(globalAPIUrl + url, function (data) {
        //console.log(data);
        $.each(data.weekCourses, function (key, value) {
            //to access value
            //console.log(value.categoryId);
            htmlText += '<div class="col-sm-12 col-md-6  col-lg-4 g-mb-30">'
                    + '<article> <img class="img-fluid w-100" src="assets/img/1.jpg" alt="Image Description">'
                    + '<div class="g-width-80x g-bg-white g-pos-rel g-z-index-1 g-pa-20 g-mt-minus-50 mx-auto"> <span class="d-block g-color-gray-dark-v4 g-font-weight-600 g-font-size-12 text-uppercase mb-2">31 May 2017</span>'
                    + '<h2 class="h5 g-color-black g-font-weight-500 mb-3 h5title"> <a class="u-link-v5 g-color-black g-color-primary--hover g-cursor-pointer course-url" data-catid="' + value.categoryId + '" data-cid="' + value.courseId + '" href="javascript:void(0)"> ' + value.courseName + '</a> </h2>'
                    + '<p class="g-color-gray-dark-v4 g-line-height-1_6">' + value.description + '...</p>'
                    + '<a href="javascript:void(0)" class="g-font-size-13 course-url" data-catid="' + value.categoryId + '" data-cid="' + value.courseId + '" >Read more...</a> </div>'
                    + '</article>'
                    + '</div>';
        });
        $('#hotCourses').append(htmlText);
    });
}

// function to get commercial courses list
function comCourses() {
    var coursecCategory = '';

    var url = "Category/GetAll";
    $.getJSON(globalAPIUrl + url, function (data) {
        //console.log(data);
        $.each(data, function (key, value) {
            console.log(value);
            //to access value
            cstatus = value.status;
            coursecCategory += '<div class="col-lg-4 col-md-6 col-sm-12  g-mb-30">'
                    + '<article class="g-bg-white">'
                    + '<figure class="g-pos-rel"> <img class="img-fluid w-100" src="assets/images/' + value.categoryId + '.png" alt="Image Description">'
                    + '<figcaption class="g-pos-abs g-bottom-20 g-left-20"> <a class="btn btn-sm u-btn-black rounded-0" href="#">July 07, 2017</a> </figcaption>'
                    + '</figure>'
                    + '<div class="g-pa-30 cardContent">'
                    + '<h4 class="g-color-black g-font-weight-400 g-mb-15"> <a class="g-color-main g-color-black g-color-primary--hover g-cursor-pointer g-text-underline--none--hover category-url" data-catid="' + value.categoryId + '" href="javascript:void(0)">' + value.categoryName + '</a> </h4>'
                    + '<p class="ellipsesText" id="categoryDescription">' + value.description + '</p>'
                    + '</div>'
                    + '<div class="media g-font-size-12 g-brd-top g-brd-gray-light-v4 g-pa-15-30">'
                    + '<div class="media-body align-self-center readmore-btn"> <a class="g-color-main g-text-underline--none--hover read-btn category-url" data-catid="' + value.categoryId + '" href="javascript:void(0)">read more</a> </div>'
                    + '</div>'
                    + '</article>'
                    + '</div>';

        });
        if (cstatus == 'Active') {
            $('#course-categories').append(coursecCategory);
        }

        //$("p#categoryDescription").css({"white-space":"nowrap", "text-overflow":"ellipsis","overflow": "hidden"});
        $("#course-categories h3").css({"white-space": "nowrap", "text-overflow": "ellipsis", "overflow": "hidden"});

    });

}

/**
 * To send the contact form data
 * @returns {undefined}
 */
function sendContactFormData()
{
    var sMsg = "";
    var fMsg = "";
    $.ajax({
        type: "POST",
        url: globalAPIUrl + "Nmcisweb/WebEnquiry",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
            Name: $("#fullname").val(),
            Phone: $("#phone").val(),
            Email: $("#email").val(),
            Message: $("#comments").val(),
            ScheduleId: "0",
            CourseId: $("#course").val()

        }),
        success: function (response) {
            //console.log(response);
            $('.contactInputs').val('');
            $('#statusModal').modal('show');
            sMsg += '<h4 class="modalSuccessMsg">Success! We will contact you soon</h4>';
            $('#statusModal .modal-body').append(sMsg);
        },
        error: function (response) {
            //console.log(response);
            $('#statusModal').modal('show');
            fMsg += '<h4 class="modalErrorMsg">Waring! failed to receive you details</h4>';
            $('#statusModal .modal-body').append(fMsg);
        }
    });
}

/**
 * To send the contact form data
 * @returns {undefined}
 */
function sendEquiryFormData(scheduleId, courseId)
{
    var sMsg = "";
    var fMsg = "";
    $.ajax({
        type: "POST",
        url: globalAPIUrl + "Nmcisweb/WebEnquiry",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
            Name: $("#fullname").val(),
            Phone: $("#phone").val(),
            Email: $("#email").val(),
            Message: $("#comments").val(),
            ScheduleId: scheduleId,
            CourseId: courseId

        }),
        success: function (response) {
            //console.log(response);
            $('.enquiryInputs').val('');
            sMsg += '<span class="modalSuccessMsg">Success! We will contact you soon</span>';
            $('#enquirypopup #statusMsg').append(sMsg);
        },
        error: function (response) {
            //console.log(response);
            fMsg += '<span class="modalErrorMsg">Waring! failed to receive you details</span>';
            $('#enquirypopup #statusMsg').append(fMsg);
        }
    });
}

// click event to for course details page
$('body').on('click', 'a.course-url', function () {
    var courseid = $(this).data("cid");
    var catgid = $(this).data("catid");
    //alert(catgid);
    if (courseid) {
        window.location = 'course-details.html?courseId=' + courseid + '&catId=' + catgid;
    }
});

// function for getting course details data
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

    $.getJSON(globalAPIUrl + url, function (data) {

        //console.log(data);
        var catgid = data.categoryInfo.categoryId;
        // to get schedules data related to course
        $.each(data.schedules, function (key, value) {
            canBook = value.canBook;
            schedulesData += '<tr>'
                    + '<td id="newdate" class="course-dated" data-dated="' + value.schID + '">' + value.dated + '</td>'
                    + '<td>' + value.places + '</td>'
                    + '<td class="course-price">' + value.price + '</td>'
                    + '<td class="booking"><a id="enquiryFormAction" href="javascript:void(0)" class="enquiryBtn">Enquiry</a><a href="javascript:void(0)" class="book-course">Book</a></td>'
                    + '<tr>';
        });
        if(data.schedules.length < 1){
          $("#scheduleTable").hide();
        }
        $('#course-data #schedules-data').append(schedulesData);
        // change button based on canBook status
        $(".enquiryBtn").hide();
        $(".book-course").hide();
        if (canBook == true) {
            $(".enquiryBtn").hide();
            $(".book-course").show();
        } else {
            $(".enquiryBtn").show();
            $(".book-course").hide();
        }

        // to get left side bar courses list
        $.each(data.courses, function (key, value) {

            courseList += '<li><a class="course-url" data-catid="' + catgid + '" data-cid="' + value.courseId + '"><i class="fa fa-caret-right" aria-hidden="true"></i> ' + value.name + '</a></li>';
        });

        $('#course-details #menu-content').append(courseList);
        //to access value
        //console.log(data.courseDetails.courseId);
        courseIntro += '<h3 class="course-mainHeading" data-catname="' + data.categoryInfo.name + '">Course Name:</h3>'
                + '<p class="course-name" data-courseid="' + data.courseDetails.courseId + '" data-csname="' + data.courseDetails.courseName + '">' + data.courseDetails.courseName + '</p>'
                + '<h3>Course Price:</h3>'
                + '<p>' + data.courseDetails.price + '</p>'
                + '<h3>Course Type:</h3>'
                + '<p>' + data.courseDetails.courseType + '</p>';
        courseFullDesc += '<h3>Full Description:</h3>'
                + '<p class="cdesc" data-cdesc="' + data.courseDetails.description + '">' + data.courseDetails.description + '</p>'
                + '<h3>The Lecturer</h3>'
                + '<p>' + data.courseDetails.trainerBio + '</p>';
        $('#course-details .courseIntroCon').append(courseIntro);
        $('#course-details .course-full-description').append(courseFullDesc);
    });

}

//click event to redirect to courses list for desired category
$('body').on('click', 'a.category-url', function () {
    var catid = $(this).data("catid");
    //alert(catid);
    if (catid) {
        window.location = 'category-courses.html?catId=' + catid;
    }
});

// function to get courses list after redirected to category courses page
function categortyCourses() {
    var ccImgContainer = "";
    var ccHeadingBlock = "";
    var coursesLayout = "";

    var data = {
        catId: getUrlParameter('catId'),
    };
    var baseurl = "Nmcisweb/GetCategDetails?";
    var url = baseurl.replace(/\?.*$/, "") + "?" + jQuery.param(data);

    $.getJSON(globalAPIUrl + url, function (data) {
        //console.log(data);
        var strg = data.categoryInfo.description;
        var smallDesc = strg.split(".")[0];
        ccImgContainer += '<h3 class="h1 g-font-weight-600 text-uppercase mb-2">' + data.categoryInfo.name + '</h3>'
                + '<p class="g-font-weight-300 g-font-size-16 text-uppercase">' + smallDesc + '.</p>';
        $('#cc-image-slider').append(ccImgContainer);

        ccHeadingBlock += '<h1>' + data.categoryInfo.name + '</h1>'
                + '<p>' + data.categoryInfo.description + '</p>';
        $('#layout-contant').append(ccHeadingBlock);
        //console.log(data.courses.length);
        $("#courses-layout-top").hide();
        if (typeof data.courses.length !== 'undefined') {
            // the variable is defined
            $("#courses-layout-top").show();
        }
        $.each(data.courses, function (key, value) {

            coursesLayout += '<div class="col-lg-4 col-md-6 col-sm-12 g-mb-30">'
                    + '<article class="g-bg-white">'
                    + '<figure class="g-pos-rel"> <img class="img-fluid w-100" src="assets/img/Petrochemical-1.jpg" alt="Image Description">'
                    + '<div class="g-pa-30">'
                    + '<h4 class="g-font-weight-300 g-mb-15"> <a class="g-color-main g-text-underline--none--hover course-url" data-catid="' + data.categoryInfo.categoryId + '" data-cid="' + value.courseId + '" href="javascript:void(0)">' + value.name + '</a> </h4>'
                    + '<p>' + value.description + '</p>'
                    + '</div>'
                    + '<div class="media g-font-size-12 g-brd-top g-brd-gray-light-v4 g-pa-15-30">'
                    + '<div class="media-body align-self-center readmore-btn"> <a class="g-color-main g-text-underline--none--hover read-btn course-url" data-catid="' + data.categoryInfo.categoryId + '" data-cid="' + value.courseId + '" href="javascript:void(0)">read more</a> </div>'
                    + '</div>'
                    + '</article>'
                    + '</div>';
        });
        $('#courses-layout').append(coursesLayout);

    });

}


//Contact us Page
// function to get commercial courses list
function ContactCoursesList() {
    var coursecCategory = '';
    var url = "Category/GetAll";
    $.getJSON(globalAPIUrl + url, function (data) {
        //console.log(data);
        $.each(data, function (key, value) {
            coursecCategory += '<option value="' + value.categoryId + '">' + value.categoryName + '</option>';
        });
        $('#categoryListDropdown').append(coursecCategory);
    });
}

$('#statusModal').on('hidden.bs.modal', function () {
    $(".modalSuccessMsg").remove();
    $(".modalErrorMsg").remove();
})

// function to get commercial courses list
comCoursesListView();
function comCoursesListView() {
    var coursecCategoryList = '';
    var footerCatList = '';

    var url = "Category/GetAll";
    $.getJSON(globalAPIUrl + url, function (data) {
        //console.log(data);
        $.each(data, function (key, value) {
            //to access value
            cstatus = value.status;
            coursecCategoryList += '<li class="dropdown-submenu"><a class="category-url headerMainCatid dropdown-toggle" data-toggle="dropdown" data-catid="' + value.categoryId + '" href="javascript:void(0)">'+ value.categoryName +'</a><ul class="dropdown-menu" id="dropdown-menu-second-level"></ul></li>';
            if(key<5){
              footerCatList += '<li class="g-pos-rel g-brd-bottom g-brd-white-opacity-0_1 g-py-10">'
                              	+'<h4 class="h6 g-pr-20 mb-0">'
                              		+'<a class="g-color-white-opacity-0_8 g-color-white--hover category-url" href="#" data-catid="' + value.categoryId + '" href="javascript:void(0)">'+ value.categoryName +'</a>'
                              	+'</h4>'
                               '</li>';
            }
        });
        if (cstatus == 'Active') {
            $('#dropdown-menu').append(coursecCategoryList);
            $('#facilities-dropdown-menu').append(coursecCategoryList);
        }
        $('#footerCategoryLinks').append(footerCatList);
    });
}



// function to get courses list after redirected to category courses page
function dropdownCategortyCourses(selectcatid) {

  var url = "Nmcisweb/GetCategDetails?catId="+selectcatid;
  if(selectcatid) {
      $.ajax({
          url: globalAPIUrl + url,
          type: "GET",
          dataType: "json",
          success:function(data) {
            console.log(data);
            if(data.courses == null){
              $('select[name="course"]').hide();
            }
            $('select[name="course"]').empty();
            $.each(data.courses, function(key, value) {
                $('select[name="course"]').append('<option value="'+ value.courseId +'">'+ value.name +'</option>');
            });
          }
      });
  }else{
      $('select[name="course"]').empty();
  }
}

$("a.headerMainCatid").hover( function () {
  console.log("hello");
}, function() {
  alert("And we're out");
});
