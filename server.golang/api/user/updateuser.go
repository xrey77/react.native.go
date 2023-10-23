package user

import (
	"github.com/gin-gonic/gin"
	"golang.server/config"
)

func UpdateUser(c *gin.Context) {
	id := c.Param("id")

	db := config.ConnectDB()
	defer db.Close()

	c.JSON(200, gin.H{"userid": id, "message": "user test"})
}
