package main

import (
	"fmt"
	"html/template"
	"log"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"golang.server/api/product"
	"golang.server/api/user"
)

var tpl = template.Must(template.ParseGlob("templates/*"))
var host = "127.0.0.1:5000"

func init() {
	err1 := godotenv.Load(".env")
	if err1 != nil {
		log.Fatalf("Error loading .env file")
	}
}

func main() {
	gin.SetMode(gin.ReleaseMode)
	router := gin.Default()

	router.Use(cors.New(cors.Config{
		AllowOrigins: []string{
			"http://localhost:5000"},
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "HEAD"},
		AllowHeaders:     []string{"Origin", "Content-Length", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	router.Use(static.Serve("/assets", static.LocalFile("./assets", true)))

	router.GET("/", func(c *gin.Context) {
		tpl.ExecuteTemplate(c.Writer, "index.html", map[string]interface{}{"MESSAGE": "WELCOME"})
	})

	// USERS API
	router.POST("/register", user.SignUp)
	router.POST("/login", user.SignIn)
	router.GET("/getuserbyid/:id", user.GetUserId)

	// PRODUCT API
	router.GET("/getproductbyid/:id", product.GetProductId)

	fmt.Println("GIN Server is listnening in host : " + host)
	err := router.Run(host)
	if err != nil {
		log.Println(err)
	}

}
