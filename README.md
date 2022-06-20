## KHOÁ LUẬN TỐT NGHIỆP 

### 📝 Đề tài: Xây dựng website học tiếng Anh sử dụng MERN Stack

### Thành viên

+ Trần Phương Linh - 18110146

+ Võ Ngọc Phong - 18110174

### GVHD
  TS. Lê Văn Vinh

### Demo
  https://englishwebsite.herokuapp.com

-----------------------------------------------
### Giới thiệu

**💻 Công nghệ sử dụng**
+ Frontend: ReactJS, Material UI, Redux, Axios, React Hook Form, Yup
+ Backend: NodeJS, ExpressJS, JWT, Nodemailer, Mongoose
+ Database: MongoDB
+ Storage: Cloudinary
+ Deploy: Heroku

**✨ Các chức năng chính**
- Đăng ký, đăng nhập
- Xác thực bằng email, quên mật khẩu
- Nghe phát âm, từ vựng bằng biểu tượng Speaker
- Các cài đặt chung như voice, speed, custom theme
- Học bảng IPA (International Phonetic Alphabet)
- Học từ vựng theo chủ đề (Collection & Item)
- Học ngữ pháp theo cấp độ (Xem video, các điểm ngữ pháp & làm quiz)
- Học nghe theo chủ đề (Xem video & làm quiz)
- Chơi game ôn tập từ vựng
- Bảng xếp hạng so sánh kết quả với các người chơi khác
- Làm bài test
- Thay đổi thông tin người dùng
- Quản trị (Từ vựng, bài nghe, quiz, ngữ pháp & người dùng)
- Thống kê

**⚙ Cài đặt**

1. Clone project này

```
  git clone https://github.com/phongvn2611/LearningEnglishWebsite.git
```

2. Cài đặt thư viện ở Frontend và Backend

```
  npm install (hoặc yarn install)
```

3. Vào thư mục Backend, tạo file .env và cập nhật các thông số sau
```
  MONGODB_URL = Your MongoDB URL
  ACTIVATION_TOKEN_SECRET = Your Activation Token Secret
  ACCESS_TOKEN_SECRET = Your Access Token Secret
  REFRESH_TOKEN_SECRET = Your Refresh Token Secret
  CLIENT_URL = Your Client URL
  NODE_MAILER_USER = Your Email
  NODE_MAILER_PASSWORD = Your Email Password
  CLOUD_NAME = Your Cloudinary Name
  CLOUD_API_KEY = Your Cloudinary API Key
  CLOUD_API_SECRET = Your Cloudinary API Secret
  NODE_ENV = production
```
Các thông số liên quan đến token lấy tại https://passwordsgenerator.net/

4. Chạy project
```
  cd backend
  npm start (hoặc yarn dev để chạy môi trường dev)
```

```
  cd frontend
  npm start (yarn start)
```
