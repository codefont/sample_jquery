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
    $('#btn-toggle').click(function(){
        $('.target-list1').toggle();
    });

    // slidetoggle
    $('#btn-slidetoggle').click(function(){

        // 第一引数に fast,slowなど引数を渡すとスピードを変更可能 msで数値も渡せる
        $('.target-list2').slideToggle('fast');
    });


    // Ajax処理
    $('#btn-ajax').click(function(){
        
        $.getJSON("/api/webpages", function(data){
            $.each(data, function(key, val) {
                $('#webpages-list').append(`<li><a href="${val}">${key}</a></li>`);
            });
        });

    });

});