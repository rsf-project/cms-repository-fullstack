package main

import (
	"cms-admin/_internal/delivery/api"
	"cms-admin/_internal/repository/postgres"
	"cms-admin/_internal/usecase"
	db "cms-admin/database"
	"cms-admin/routes"
)

func main() {
	db := db.Init()

	repository := postgres.NewRepository(db)
	usecase := usecase.NewUsecase(repository)
	delivery := api.NewHandler(usecase)
	echo := routes.GetRoutes(delivery)

	echo.Start(":8800")
}
