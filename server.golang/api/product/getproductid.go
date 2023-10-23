package product

import "github.com/gin-gonic/gin"

func GetProductId(c *gin.Context) {
	id := c.Param("id")
	c.JSON(200, gin.H{"productid": id, "message": "user test"})
}
