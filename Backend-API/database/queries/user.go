package database

const (
	INSERT_USER = `INSERT INTO cms_user (phone, name, role, password) 
                        VALUES ($1, $2, $3, $4)`
	GET_USER = `SELECT phone, name, role, password 
                        FROM cms_user WHERE phone = $1`
)
