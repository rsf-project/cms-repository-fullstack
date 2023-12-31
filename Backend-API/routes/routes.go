package routes

import (
	"cms-admin/_internal/delivery/api"
	"cms-admin/utils"
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func GetRoutes(handler api.DeliveryHandler) *echo.Echo {
	e := echo.New()
	useMiddlewares(e)

	g := e.Group("/admin/v1")
	g.POST(utils.PATH_LOGIN, handler.LoginUser)

	g.GET(utils.PATH_ARTICLES, handler.GetArticles)
	g.GET(utils.PATH_ARTICLE, handler.GetArticleDetails)
	g.POST(utils.PATH_ARTICLE, handler.InsertArticle)
	g.PATCH(utils.PATH_ARTICLE, handler.UpdateArticle)
	g.DELETE(utils.PATH_ARTICLE, handler.DeleteArticle)

	g.GET(utils.PATH_CATEGORIES, handler.GetCategoryTree)
	g.GET(utils.PATH_CATEGORY, handler.GetCategoryDetails)
	g.POST(utils.PATH_CATEGORY, handler.InsertCategory)
	g.PATCH(utils.PATH_CATEGORY, handler.UpdateCategory)
	g.DELETE(utils.PATH_CATEGORY, handler.DeleteCategory)

	return e
}
func useMiddlewares(e *echo.Echo) {
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{http.MethodGet, http.MethodPost, http.MethodDelete, http.MethodPatch},
	}))
}
