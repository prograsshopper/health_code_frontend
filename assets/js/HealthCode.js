function change_model_form(type) {
  var model = $("#myModal")[0];

  $("#myModal").find('.change_model_div').each(function(index, item){
      var origin_text = $(this).html();
      var div_id  = $(this).attr('id');
      var change_text  = '<input type="text" style="height: 85%;" class="form-control"  value="" id="'+div_id+'_value'+'">';
      if(div_id =='program_info'){
         change_text  = '<textarea  cols="40" rows="8" style="height: 85%;" class="form-control"  value="" id="'+div_id+'_value'+'"> </textarea>';
      }

      $(this).html(change_text);
  })

  if(type=='user'){
    $("#user_modify_button").removeAttr('onclick');
    $("#user_modify_button").attr('onclick','modify_user()');
  }
  else{
    $("#program_modify_button").removeAttr('onclick');
    $("#program_modify_button").attr('onclick','modify_program()');
  }


}

function modify_user(){
  $("#myModal").modal("hide");
}

function modify_program(){
  alert("수정~");
}

function delete_user(){

  $("input[name=list_chk]:checked").each(function(index, item){

  })
}

function create_program(){
  alert("생성");
}

function get_user_list(offset){
  // $.ajax({
  //
  //                  type: 'GET',
  //
  //                  dataType: 'json',
  //
  //                  url: 'http://healthcode.mwcephhvha.ap-northeast-2.elasticbeanstalk.com/api/accounts/users/?limit=30&offset=0',
  //
  //
  //                  success:function(json) {
  //                     console.log(json);
  //                       $('.result').html(json.data.name);
  //
  //                  }
  //
  //             });
  jQuery.ajax({

           url:"http://healthcode.mwcephhvha.ap-northeast-2.elasticbeanstalk.com/api/accounts/users/?limit=30&offset="+offset,

           type: 'GET',

           dataType: 'json',
           success : function(data) {

                 // 통신이 성공적으로 이루어졌을 때 이 함수를 타게 된다.
                 console.log(data);
                 // TODO

                 var user_list = data.results;
                 var cnt = user_list.length;
                 var user_text = '';
                for(var i =0;i<cnt;i++){
                  user_text +='<tr>'+
                    '<td  class="col-md-1 text-center">'+
                    '<label class="custom-control custom-checkbox custom-control-blank" for="list_chk_youn">'+
                    '<input type="checkbox" id="list_chk_youn" value="youn" name="list_chk" class="custom-control-input">'+
                    '<span class="custom-control-indicator"></span>'+
                    '</label>'+
                    '</td>'+
                    '<td  class="col-md-1">'+user_list[i]['id']+'</td>'+
                    '<td  class="col-md-1" data-toggle="modal" data-target="#myModal" onclick = "set_user_model(\''+user_list[i]['id']+'\')">'+user_list[i]['name']+'</td>'+
                    '<td  class="col-md-2 hidden-xs">'+user_list[i]['phone']+'</td>'+
                    '<td  class="col-md-2 hidden-xs">'+user_list[i]['email']+'</td>'+
                    '<td  class="col-md-3 hidden-xs">'+user_list[i]['created_datetime'].substr(0,10)+'</td>'+
                    '<td  class="col-md-3 hidden-xs">'+user_list[i]['updated_datetime'].substr(0,10)+'</td>'+
                  '</tr>';
                }

                $("#user_list_body").empty().append(user_text);

           },

           complete : function(data) {

                 // 통신이 실패했어도 완료가 되었을 때 이 함수를 타게 된다.

                 // TODO

           },

           error : function(xhr, status, error) {

                 alert("에러발생");
                 console.log(error);
                 console.log(xhr);
                 console.log(status);

           }

     });


//   $.ajax({
//              url:"http://healthcode.mwcephhvha.ap-northeast-2.elasticbeanstalk.com/api/accounts/users/?limit=30&offset="+offset,
//
//     //url: 'https://www.googleapis.com/moderator/v1/series?key='+key,
//     // data: myData,
//     crossDomain: true,
//     dataType: 'jsonp',
//     jsonpCallback : "result",
//     success: function() { alert("Success"); },
//     error: function(a,x,v) { alert('Failed!');console.log(a);console.log(x);console.log(v); }
// });

}



function set_user_model(id){
  jQuery.ajax({

           url:"http://healthcode.mwcephhvha.ap-northeast-2.elasticbeanstalk.com/api/accounts/users/"+id,

           type: 'GET',

           dataType: 'json',
           success : function(data) {

                 // 통신이 성공적으로 이루어졌을 때 이 함수를 타게 된다.
                 console.log(data);
                 // TODO
                 $("#myModalLabel").text(id+'님의 정보');
                 console.log(data)
                 console.log(data.created_datetime);
                 $("#user_id label").text(id);
                 $("#user_name label").text(data.name);
                 $("#user_email label").text(data.email);
                 $("#user_phone label").text(data.phone);
                 $("#user_created_datetime label").text(data.created_datetime);
                 $("#user_updated_datetime label").text(data.updated_datetime);


                //$("#user_list_body").empty().append(user_text);

           },

           complete : function(data) {

                 // 통신이 실패했어도 완료가 되었을 때 이 함수를 타게 된다.

                 // TODO



           },

           error : function(xhr, status, error) {

                 alert("에러발생");
                 console.log(error);
                 console.log(xhr);
                 console.log(status);

           }

     });
}

function get_program_list(offset){
  jQuery.ajax({

           url:"http://healthcode.mwcephhvha.ap-northeast-2.elasticbeanstalk.com/api/centers/2868/programs/?limit=30&offset=0"+offset,

           type: 'GET',

           dataType: 'json',
           success : function(data) {

                 // 통신이 성공적으로 이루어졌을 때 이 함수를 타게 된다.
                 console.log(data);
                 // TODO

                 var user_list = data.results;
                 var cnt = user_list.length;
                 var user_text = '';
                for(var i =0;i<cnt;i++){
                  user_text +='<tr>'+
                    '<td  class="col-md-1 text-center">'+
                    '<label class="custom-control custom-checkbox custom-control-blank" for="list_chk_youn">'+
                    '<input type="checkbox" id="list_chk_youn" value="youn" name="list_chk" class="custom-control-input">'+
                    '<span class="custom-control-indicator"></span>'+
                    '</label>'+
                    '</td>'+
                    '<td  class="col-md-2" data-toggle="modal" data-target="#myModal" onclick="set_program_model(\''+user_list[i]['id']+'\')">'+user_list[i]['name']+'</td>'+
                    '<td  class="col-md-1 hidden-xs" >'+user_list[i]['quota']+'명</td>'+
                    '<td  class="col-md-1 ">'+(user_list[i]['is_active'] == true ? '가능':'불가능')+'</td>'+
                    '<td  class="col-md-2 hidden-xs">'+user_list[i]['program_schedule']+'</td>'+
                    '<td  class="col-md-2 hidden-xs">'+Math.floor(user_list[i]['price'])+'원</td>'+
                    '<td  class="col-md-3 hidden-xs">'+user_list[i]['created_datetime'].substr(0,10)+'</td>'+
                  '</tr>';

                }

                $("#program_list_body").empty().append(user_text);

           },

           complete : function(data) {

                 // 통신이 실패했어도 완료가 되었을 때 이 함수를 타게 된다.

                 // TODO

           },

           error : function(xhr, status, error) {

                 alert("에러발생");
                 console.log(error);
                 console.log(xhr);
                 console.log(status);

           }

     });

}

function set_program_model(id){
  jQuery.ajax({

           url:"http://healthcode.mwcephhvha.ap-northeast-2.elasticbeanstalk.com/api/programs/"+id,

           type: 'GET',

           dataType: 'json',
           success : function(data) {

                 // 통신이 성공적으로 이루어졌을 때 이 함수를 타게 된다.
                 console.log(data);
                 // TODO
                 $("#myModalLabel").text(data.name+' 프로그램 상세 정보');
                 $("#program_title label").text(data.name);
                 $("#program_day label").text(data.program_schedule);
                 $("#program_people label").text(data.quota+'명');
                 $("#program_able label").text((data.is_active == true ? '가능':'불가능'));
                 $("#program_price label").text(Math.floor(data.price)+'원');
                 $("#program_created_datetime label").text(data.created_datetime);
                 $("#program_updated_datetime label").text(data.updated_datetime);
                 $("#program_description label").text(data.description);

                //$("#user_list_body").empty().append(user_text);

           },

           complete : function(data) {

                 // 통신이 실패했어도 완료가 되었을 때 이 함수를 타게 된다.

                 // TODO



           },

           error : function(xhr, status, error) {

                 alert("에러발생");
                 console.log(error);
                 console.log(xhr);
                 console.log(status);

           }

     });


}

function get_gym(){
  jQuery.ajax({

           url:"http://healthcode.mwcephhvha.ap-northeast-2.elasticbeanstalk.com/api/centers/2868/",

           type: 'GET',

           dataType: 'json',
           success : function(data) {

                 // 통신이 성공적으로 이루어졌을 때 이 함수를 타게 된다.
                 console.log(data);
                 // TODO

                 $("#company").val(data.name);
                 $("#gym_address").val(data.address);
                 $("#latitude").val(data.latitude);
                 $("#longitude").val(data.longitude);
                 $("#description").val(data.description);
                 $("#image_main").attr("src", data.main_image);
                 $("#image_h4").text(data.name);

           },

           complete : function(data) {

                 // 통신이 실패했어도 완료가 되었을 때 이 함수를 타게 된다.

                 // TODO

           },

           error : function(xhr, status, error) {

                 alert("에러발생");
                 console.log(error);
                 console.log(xhr);
                 console.log(status);

           }

     });

}
