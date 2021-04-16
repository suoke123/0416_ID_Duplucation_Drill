$(function(){

    $("button[type=button]").click(function(){

        var inputUID = $("#uID").val().trim();   // form화면에서 입력한 ID
        var regIDList = ["test01", "guest", "member03", "member04"];   // 가입된 ID를 의미
        // regIDList라는 배열은 인덱스번호가 0, 1, 2로 구성됨

        var idUseChk = true;

        $.each(regIDList, function(i, v){

            if(inputUID == v) {
                idUseChk = false;
            }

        });

        var msg;   // message => var msg = "";랑 같음
        if(idUseChk) {
            msg = "사용가능"
        } else {
            msg = "사용중인 ID"
        }

        var spanChk = $("#uID").next().is("span");
        // span 요소 유무체크
        if(spanChk) {
            $("span#idChkMsg").remove();
        }

        $("<span id='idChkMsg'>" + msg + "</span>").insertAfter("#uID");
        // $("A").insertAfter("B"); 요소A를 요소B 뒤로 이동하세요
    });

    $("button[type=reset]").click(function(){

        $("span#idChkMsg").remove();

    });

});
