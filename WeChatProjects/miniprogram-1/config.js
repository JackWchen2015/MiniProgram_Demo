var appurl = "http://localhost:8081"
var appid = "xxxxxxxxxxxxxxxx官网申请的那个"
var config = {
  appurl,
  appid,
  userUrl: `${appurl}/index/` //一定要使用tab键上面那个点,不要用英文单引号'** 
    };
module.exports = config //有了这句话，就代表着，这个页面的内容可以被外部引用，很关键的哦。