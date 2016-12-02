// 初期処理の宣言
$(function () {

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

    $('.list')
        .mouseover(function () {
            // マウスオーバーした後の処理を書く        
            $(this).css('opacity', '0.5');
        })
        .mouseout(function () {
            // マウスアウトした後の処理を書く        
            $(this).css('opacity', '1.0');
        });


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



});