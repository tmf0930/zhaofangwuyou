var phonenumber;//输入的手机号码
var phonecode; //输入的验证码
var code;       //获取到的验证码
var t; //倒计时对象

//获取验证码
function getcode(e) {
    phonenumber = document.getElementById("phonenumber");
    if (phonenumber.value.length == 0) {
        alert("请输入手机号码");
    } else {
        if (!(/^1[34578]\d{9}$/.test(phonenumber.value))) {
            alert("手机号码有误，请重填")
        } else {
            //这里写死了 应该调用获取验证码的接口
            code = 000000;
            //按照指定的周期（以毫秒计）来调用函数或计算表达式。
            //最好是在ajax请求之后再调用函数
            t = setInterval(function () {
                countdown(e)
            }, 1000)
            alert("获取验证码成功");
            //获取验证码成功后调用倒计时函数
            countdown(e);
        }
    }
}

var time = 60;
function countdown(e) {
    if (time == 0) {
        //这里时设置当时间到0的时候重新设置点击事件，并且默认time修改为60
        e.setAttribute("onclick", "getcode(this)");
        document.getElementById("getcode").innerText = "获取验证码";
        time = 60;
        clearInterval(t);
    } else {
        //这里是显示时间倒计时的时候点击不生效
        e.setAttribute("onclick", '');
        document.getElementById("getcode").innerHTML = "重新发送" + time;
        time--;
    }
}