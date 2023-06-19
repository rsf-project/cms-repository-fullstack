package database

import (
	"cms-admin/config"
	"database/sql"
	"fmt"
	"log"
	"net/url"

	_ "github.com/lib/pq"
)

func Init() *sql.DB {
	psqlInfo := fmt.Sprintf("postgres://%s:%s@%s:%s/%s?sslmode=%s&search_path=%s", url.QueryEscape(config.POSTGRE_USER), url.QueryEscape(config.POSTGRE_PASSWORD), url.QueryEscape(config.POSTGRE_HOST), url.QueryEscape(config.POSTGRE_PORT), url.QueryEscape(config.POSTGRE_DATABASE), url.QueryEscape(config.POSTGRE_SSLMODE), url.QueryEscape(config.POSTGRE_SCHEMA))
	db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		log.Println(err)
		return nil
	}

	err = db.Ping()
	if err != nil {
		log.Println("[Database] can't connect to database: ", err.Error())
		return nil
	}

	log.Println("[Database] successfully connected")
	return db
}
