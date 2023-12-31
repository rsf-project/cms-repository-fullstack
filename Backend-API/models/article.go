package models

type Article struct {
	Id          int    `json:"id" form:"id"`
	Title       string `json:"title" form:"title"`
	Slug        string `json:"slug" form:"slug"`
	HtmlContent string `json:"htmlcontent" form:"htmlcontent"`
	CategoryID  int    `json:"categoryid" form:"categoryid"`
	CreatedAt   string `json:"created_at" form:"created_at"`
	UpdatedAt   string `json:"updated_at" form:"updated_at"`
}

type ResArticle struct {
	Id            int         `json:"id"`
	Title         string      `json:"title"`
	Slug          string      `json:"slug"`
	HtmlContent   string      `json:"htmlcontent"`
	TitleCategory string      `json:"titlecategory"`
	IdCategory    int         `json:"idcategory"`
	ResCategory   ResCategory `json:"category"`
	CreatedAt     string      `json:"created_at"`
	UpdatedAt     string      `json:"updated_at"`
}

type MetaData struct {
	Title       string   `json:"meta_title"`
	Description string   `json:"meta_description"`
	Author      string   `json:"meta_author"`
	Keywords    []string `json:"meta_keywords"`
	Robots      []string `json:"meta_robots"`
}
