function search() {
    // htmlのul要素（id = 'messages'）を呼び出し
    var messageList = $('#messages');
  
    // openweathermap（天気予報API）に接続
    var request = new XMLHttpRequest();
    
    // 都市の緯度と経度の情報
    var cities = {
      "tokyo": {
          "lat": 35.709,
          "lon": 139.7319,
      },
      "seattle": {
        "lat": 47.626353,
        "lon": -122.333144,
      },
      "london": {
        "lat": 51.5073,
        "lon": -0.1277,
      }
    }
    // ダミーパブリックキー
    var STRIPE_PUBLIC_KEY = propcess.env.STRIPE_PUBLIC_KEY
    // ダミーシークレットキー
    var STRIPE_SECRET_KEY = propcess.env.STRIPE_SECRET_KEY
  
    // 選択されている都市を取得
    var selected_city = $('select.weather option:selected').attr('value');
    
    // APIKey
    var owmApiKey = "111643793037a778a62d66e2a7d7d372";
    var owmURL = "https://api.openweathermap.org/data/2.5/weather?lat="+ cities[selected_city]["lat"] + "&lon=" + cities[selected_city]["lon"] + "&appid="+ owmApiKey + "&lang=ja" + "";
    console.log(owmURL);
    
    // request送信の準備
    request.open('GET', owmURL, true);
    
    // 結果をjson型で受け取る
    request.responseType = 'json';
    
    request.onload = function () {
     var data = this.response;
     console.log(data);
     var messageElement = $(selected_city + "の天気：" + data["weather"][0]["description"]);
     // HTMLに取得したデータを追加する
     messageList.append(messageElement);
    };
    
    // requestの送信
    request.send();
  }
  