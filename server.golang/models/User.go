package models

import (
	"time"

	"github.com/golang-jwt/jwt"
)

type User struct {
	ID          int64     `json:"id"`
	Lastname    string    `json:"lastname"`
	Firstname   string    `json:"firstname"`
	Email       string    `json:"email"`
	Mobile      string    `json:"mobile"`
	Username    string    `json:"username"`
	Userpicture string    `json:"userpicture"`
	Role        string    `json:"role"`
	Password    string    `json:"password"`
	Isactivated int64     `json:"isactivated"`
	Mailtoken   string    `json:"mailtoken"`
	Otp         int64     `json:"otp"`
	Secretkey   string    `json:"secretkey"`
	Qrcode      string    `json:"qrcode"`
	Createdat   time.Time `json:"createdat"`
	Updatedat   time.Time `json:"updatedat"`
}

type UserRegistration struct {
	Lastname  string    `json:"lastname"`
	Firstname string    `json:"firstname"`
	Email     string    `json:"email"`
	Mobile    string    `json:"mobile"`
	Username  string    `json:"username"`
	Password  string    `json:"password"`
	Createdat time.Time `json:"createdat"`
	Updatedat time.Time `json:"updatedat"`
}

type Token struct {
	UserId uint
	jwt.StandardClaims
}

type TempUsers struct {
	ID          int64  `json:"id"`
	Lastname    string `json:"lastname"`
	Firstname   string `json:"firstname"`
	Email       string `json:"email"`
	Mobile      string `json:"mobile"`
	Username    string `json:"username"`
	Password    string `json:"password"`
	Userpicture string `json:"userpicture"`
	Role        string `json:"role"`
	Otp         int64  `json:"otp"`
	Qrcode      string `json:"qrcode"`
	Secretkey   string `json:"secretkey"`
	Isactivated int64  `json:"isactivated"`
	Mailtoken   string `json:"mailtoken"`
}

type UserLogin struct {
	UserName string `json:"username"`
	PassWord string `json:"password"`
}

type Mfa struct {
	ID        uint   `json:"id"`
	Username  string `json:"username"`
	Email     string `json:"email"`
	Otp       int64  `json:"otp"`
	Secretkey string `json:"secretkey"`
	Qrcode    string `json:"qrcode"`
}

type Mfaverify struct {
	Username    string `json:"username"`
	Userpicture string `json:"userpicture"`
	Secretkey   string `json:"secretkey"`
}

type Qcode struct {
	ID     uint   `json:"id"`
	Qrcode string `json:"qrcode"`
}
