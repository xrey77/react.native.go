package product

import (
	"github.com/gin-gonic/gin"
	"golang.server/config"
)

func UpdateProduct(c *gin.Context) {
	id := c.Param("id")

	db := config.ConnectDB()
	defer db.Close()

	c.JSON(200, gin.H{"userid": id, "message": "user test"})
}
