// Code generated by MockGen. DO NOT EDIT.
// Source: ./internal/delivery/api/init.go

// Package mock_api is a generated GoMock package.
package mock_api

import (
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"
	echo "github.com/labstack/echo/v4"
)

// MockDeliveryHandler is a mock of DeliveryHandler interface.
type MockDeliveryHandler struct {
	ctrl     *gomock.Controller
	recorder *MockDeliveryHandlerMockRecorder
}

// MockDeliveryHandlerMockRecorder is the mock recorder for MockDeliveryHandler.
type MockDeliveryHandlerMockRecorder struct {
	mock *MockDeliveryHandler
}

// NewMockDeliveryHandler creates a new mock instance.
func NewMockDeliveryHandler(ctrl *gomock.Controller) *MockDeliveryHandler {
	mock := &MockDeliveryHandler{ctrl: ctrl}
	mock.recorder = &MockDeliveryHandlerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockDeliveryHandler) EXPECT() *MockDeliveryHandlerMockRecorder {
	return m.recorder
}

// DeleteArticle mocks base method.
func (m *MockDeliveryHandler) DeleteArticle(ctx echo.Context) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DeleteArticle", ctx)
	ret0, _ := ret[0].(error)
	return ret0
}

// DeleteArticle indicates an expected call of DeleteArticle.
func (mr *MockDeliveryHandlerMockRecorder) DeleteArticle(ctx interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DeleteArticle", reflect.TypeOf((*MockDeliveryHandler)(nil).DeleteArticle), ctx)
}

// DeleteCategory mocks base method.
func (m *MockDeliveryHandler) DeleteCategory(ctx echo.Context) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DeleteCategory", ctx)
	ret0, _ := ret[0].(error)
	return ret0
}

// DeleteCategory indicates an expected call of DeleteCategory.
func (mr *MockDeliveryHandlerMockRecorder) DeleteCategory(ctx interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DeleteCategory", reflect.TypeOf((*MockDeliveryHandler)(nil).DeleteCategory), ctx)
}

// GetArticleDetails mocks base method.
func (m *MockDeliveryHandler) GetArticleDetails(ctx echo.Context) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetArticleDetails", ctx)
	ret0, _ := ret[0].(error)
	return ret0
}

// GetArticleDetails indicates an expected call of GetArticleDetails.
func (mr *MockDeliveryHandlerMockRecorder) GetArticleDetails(ctx interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetArticleDetails", reflect.TypeOf((*MockDeliveryHandler)(nil).GetArticleDetails), ctx)
}

// GetArticles mocks base method.
func (m *MockDeliveryHandler) GetArticles(ctx echo.Context) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetArticles", ctx)
	ret0, _ := ret[0].(error)
	return ret0
}

// GetArticles indicates an expected call of GetArticles.
func (mr *MockDeliveryHandlerMockRecorder) GetArticles(ctx interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetArticles", reflect.TypeOf((*MockDeliveryHandler)(nil).GetArticles), ctx)
}

// GetCategoryDetails mocks base method.
func (m *MockDeliveryHandler) GetCategoryDetails(ctx echo.Context) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetCategoryDetails", ctx)
	ret0, _ := ret[0].(error)
	return ret0
}

// GetCategoryDetails indicates an expected call of GetCategoryDetails.
func (mr *MockDeliveryHandlerMockRecorder) GetCategoryDetails(ctx interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetCategoryDetails", reflect.TypeOf((*MockDeliveryHandler)(nil).GetCategoryDetails), ctx)
}

// GetCategoryTree mocks base method.
func (m *MockDeliveryHandler) GetCategoryTree(ctx echo.Context) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetCategoryTree", ctx)
	ret0, _ := ret[0].(error)
	return ret0
}

// GetCategoryTree indicates an expected call of GetCategoryTree.
func (mr *MockDeliveryHandlerMockRecorder) GetCategoryTree(ctx interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetCategoryTree", reflect.TypeOf((*MockDeliveryHandler)(nil).GetCategoryTree), ctx)
}

// InsertArticle mocks base method.
func (m *MockDeliveryHandler) InsertArticle(ctx echo.Context) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "InsertArticle", ctx)
	ret0, _ := ret[0].(error)
	return ret0
}

// InsertArticle indicates an expected call of InsertArticle.
func (mr *MockDeliveryHandlerMockRecorder) InsertArticle(ctx interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "InsertArticle", reflect.TypeOf((*MockDeliveryHandler)(nil).InsertArticle), ctx)
}

// InsertCategory mocks base method.
func (m *MockDeliveryHandler) InsertCategory(ctx echo.Context) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "InsertCategory", ctx)
	ret0, _ := ret[0].(error)
	return ret0
}

// InsertCategory indicates an expected call of InsertCategory.
func (mr *MockDeliveryHandlerMockRecorder) InsertCategory(ctx interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "InsertCategory", reflect.TypeOf((*MockDeliveryHandler)(nil).InsertCategory), ctx)
}

// LoginUser mocks base method.
func (m *MockDeliveryHandler) LoginUser(ctx echo.Context) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "LoginUser", ctx)
	ret0, _ := ret[0].(error)
	return ret0
}

// LoginUser indicates an expected call of LoginUser.
func (mr *MockDeliveryHandlerMockRecorder) LoginUser(ctx interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "LoginUser", reflect.TypeOf((*MockDeliveryHandler)(nil).LoginUser), ctx)
}

// UpdateArticle mocks base method.
func (m *MockDeliveryHandler) UpdateArticle(ctx echo.Context) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "UpdateArticle", ctx)
	ret0, _ := ret[0].(error)
	return ret0
}

// UpdateArticle indicates an expected call of UpdateArticle.
func (mr *MockDeliveryHandlerMockRecorder) UpdateArticle(ctx interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdateArticle", reflect.TypeOf((*MockDeliveryHandler)(nil).UpdateArticle), ctx)
}

// UpdateCategory mocks base method.
func (m *MockDeliveryHandler) UpdateCategory(ctx echo.Context) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "UpdateCategory", ctx)
	ret0, _ := ret[0].(error)
	return ret0
}

// UpdateCategory indicates an expected call of UpdateCategory.
func (mr *MockDeliveryHandlerMockRecorder) UpdateCategory(ctx interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdateCategory", reflect.TypeOf((*MockDeliveryHandler)(nil).UpdateCategory), ctx)
}
