# Redis vs Rabbitmq
+ redis cloud server
+ rabbitmq cloud server

+ rabbitmq
-----------------------------
+ Giải quyết khi tràn msg do msg bị lỗi nhưng vẫn nằm trong queue thì hẹn time chờ rồi xóa: expiration: "10000"
+ Giải quyết mất data khi reset server thì sẽ lấy lại trong cache hoặc dis : durable:true; (get data) persisent: true; (save data)
+ Mô hình Publish Subscribe : Gửi msg cho exchange rồi exchange những queue subscribe và tự động del queue trong list queue nếu bị die
+ TOPIC : Tùy chọn để sen msg cho 1 số người trong nhiều người đăng kí



+ redis
------------------------------
+ Api get,set data
