package config

import (
	"log"
	"os"

	"github.com/go-pg/pg/v10"
)

var db *pg.DB

func ConnectDB() *pg.DB {

	var (
		opts *pg.Options
		err  error
	)

	opts, err = pg.ParseURL(os.Getenv("DATABASE_URL"))

	if err != nil {
		log.Print("*** Unable to connect to Postgres Database ***")
		return nil
	} else {
		log.Print("Connected to Postgres DAtabase........")
	}
	db := pg.Connect(opts)
	return db

}
