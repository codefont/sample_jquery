// 初期処理の宣言
$(function () {

    // id指定
    // ボタン押下処理
    $('#btn1').click(function () {
        // クリックした後の処理を記載する

        $('#text-red').css('color', 'red');
        // $('#text-red').css('font-size','200%');
        // $('#text-red').css('display','none');
    });

    // javascriptで記載した場合
    // document.getElementById('btn1').addEventListener('click',function(){
    //     document.getElementById('text-red').style.color = 'red';
    // });

    // クラス指定
    $('.list')
        .mouseover(function () {
            // マウスオーバーした後の処理を書く        
            $(this).css('opacity', '0.5');
        })
        .mouseout(function () {
            // マウスアウトした後の処理を書く        
            $(this).css('opacity', '1.0');
        });


    // for文
    // ボタン押下処理
    $('#btn2').click(function () {

        var sum = 0;
        var cnt = 0;

        $('ul.cnt-word > li').each(function (index, elem) {

            cnt = $(elem).text().indexOf('a');

            if (cnt > -1) {
                sum += cnt;
            }

        });

        window.alert(`"a"という文字は全部で${sum}個あります`);
        sum = 0;
        cnt = 0;
    });

    // toggle
    $('#btn-toggle').click(function () {
        $('.target-list1').toggle();
    });

    // slidetoggle
    $('#btn-slidetoggle').click(function () {

        // 第一引数に fast,slowなど引数を渡すとスピードを変更可能 msで数値も渡せる
        $('.target-list2').slideToggle('fast');
    });


    // Ajax処理
    $('#btn-ajax').click(function () {

        $.ajax({
            type: 'GET',
            url: '/api/webpages',
            dataType: 'json',
            success: function (data) {
                $.each(data, function (key, val) {
                    $('#webpages-list').append(`<li><a href="${val}">${key}</a></li>`);
                });
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log("XMLHttpRequest : " + XMLHttpRequest.status);
                console.log("textStatus : " + XMLHttpRequest.textStatus);
                console.log("errorThrown : " + XMLHttpRequest.errorThrown);
            }
        });

    });

    // Ajax処理
    $('#btn-ajax2').click(function () {

        var param = "";

        // チェックボックスの中で選択している項目のバリューを取得
        for (var item of $('[name=web]')) {
            if (item.checked === true) {
                param = item.value;
            }
        }

        if (param === undefined) {
            window.alert("何か選択してださい");
            // break;
        }
        console.log(param);

        $.ajax({
            type: 'GET',
            url: '/api/webpages/key/?pagekey=' + param,
            dataType: 'json',
            success: function (data) {
                $.each(data, function (key, val) {
                    $('#result').html(`<a href="${val}">${val}</a>`);
                    // $('#webpages-list').append(`<li><a href="${val}">${key}</a></li>`);
                });
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log("XMLHttpRequest : " + XMLHttpRequest.status);
                console.log("textStatus : " + XMLHttpRequest.textStatus);
                console.log("errorThrown : " + XMLHttpRequest.errorThrown);
            }
        });

    });

    // Ajax処理
    // input#emailにキーボード入力があった場合に発火
    $('#email').keyup(function () {

        // emailの入力内容を取得
        var param_email = $('#email').val();

        $.ajax({
            type: 'POST',
            url: '/api/email',
            // POSTするデータ
            data: {
                'email': param_email
            },
            // サーバーから返却されるデータの種類
            dataType: 'json',
            // 成功時の処理
            success: function (data) {
                $("#help-email").css("display","inline");
                if (data.isSuccess === false) {
                    $("#help-email").css("color","#F44336");                    
                    $("#help-email").text(data.msg);
                } else {
                    $("#help-email").css("color","#4CAF50");
                    $("#help-email").text(data.msg);                    
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log("XMLHttpRequest : " + XMLHttpRequest.status);
                console.log("textStatus : " + XMLHttpRequest.textStatus);
                console.log("errorThrown : " + XMLHttpRequest.errorThrown);
            }
        });
    });

});