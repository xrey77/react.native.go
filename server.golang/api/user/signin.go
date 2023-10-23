package user

import (
	"encoding/json"
	"log"

	"github.com/gin-gonic/gin"
	"golang.server/config"
	"golang.server/models"
)

func SignIn(c *gin.Context) {
	var user models.UserLogin
	err := json.NewDecoder(c.Request.Body).Decode(&user)
	if err != nil {
		log.Fatalf("Unable to decode the request body.  %v", err)
	}
	c.Header("Content-Type", "application/json charset=utf-8")

	db := config.ConnectDB()
	defer db.Close()

	c.JSON(200, gin.H{"user": user})
}
