// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: ory/keto/relation_tuples/v1alpha2/namespaces_service.proto

package rts

import (
	"bytes"
	"errors"
	"fmt"
	"net"
	"net/mail"
	"net/url"
	"regexp"
	"sort"
	"strings"
	"time"
	"unicode/utf8"

	"google.golang.org/protobuf/types/known/anypb"
)

// ensure the imports are used
var (
	_ = bytes.MinRead
	_ = errors.New("")
	_ = fmt.Print
	_ = utf8.UTFMax
	_ = (*regexp.Regexp)(nil)
	_ = (*strings.Reader)(nil)
	_ = net.IPv4len
	_ = time.Duration(0)
	_ = (*url.URL)(nil)
	_ = (*mail.Address)(nil)
	_ = anypb.Any{}
	_ = sort.Sort
)

// Validate checks the field values on ListNamespacesRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *ListNamespacesRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on ListNamespacesRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// ListNamespacesRequestMultiError, or nil if none found.
func (m *ListNamespacesRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *ListNamespacesRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if len(errors) > 0 {
		return ListNamespacesRequestMultiError(errors)
	}

	return nil
}

// ListNamespacesRequestMultiError is an error wrapping multiple validation
// errors returned by ListNamespacesRequest.ValidateAll() if the designated
// constraints aren't met.
type ListNamespacesRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m ListNamespacesRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m ListNamespacesRequestMultiError) AllErrors() []error { return m }

// ListNamespacesRequestValidationError is the validation error returned by
// ListNamespacesRequest.Validate if the designated constraints aren't met.
type ListNamespacesRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e ListNamespacesRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e ListNamespacesRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e ListNamespacesRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e ListNamespacesRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e ListNamespacesRequestValidationError) ErrorName() string {
	return "ListNamespacesRequestValidationError"
}

// Error satisfies the builtin error interface
func (e ListNamespacesRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sListNamespacesRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = ListNamespacesRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = ListNamespacesRequestValidationError{}

// Validate checks the field values on ListNamespacesResponse with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *ListNamespacesResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on ListNamespacesResponse with the rules
// defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// ListNamespacesResponseMultiError, or nil if none found.
func (m *ListNamespacesResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *ListNamespacesResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	for idx, item := range m.GetNamespaces() {
		_, _ = idx, item

		if all {
			switch v := interface{}(item).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, ListNamespacesResponseValidationError{
						field:  fmt.Sprintf("Namespaces[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, ListNamespacesResponseValidationError{
						field:  fmt.Sprintf("Namespaces[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return ListNamespacesResponseValidationError{
					field:  fmt.Sprintf("Namespaces[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	if len(errors) > 0 {
		return ListNamespacesResponseMultiError(errors)
	}

	return nil
}

// ListNamespacesResponseMultiError is an error wrapping multiple validation
// errors returned by ListNamespacesResponse.ValidateAll() if the designated
// constraints aren't met.
type ListNamespacesResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m ListNamespacesResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m ListNamespacesResponseMultiError) AllErrors() []error { return m }

// ListNamespacesResponseValidationError is the validation error returned by
// ListNamespacesResponse.Validate if the designated constraints aren't met.
type ListNamespacesResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e ListNamespacesResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e ListNamespacesResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e ListNamespacesResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e ListNamespacesResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e ListNamespacesResponseValidationError) ErrorName() string {
	return "ListNamespacesResponseValidationError"
}

// Error satisfies the builtin error interface
func (e ListNamespacesResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sListNamespacesResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = ListNamespacesResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = ListNamespacesResponseValidationError{}

// Validate checks the field values on Namespace with the rules defined in the
// proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *Namespace) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on Namespace with the rules defined in
// the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in NamespaceMultiError, or nil
// if none found.
func (m *Namespace) ValidateAll() error {
	return m.validate(true)
}

func (m *Namespace) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Name

	if len(errors) > 0 {
		return NamespaceMultiError(errors)
	}

	return nil
}

// NamespaceMultiError is an error wrapping multiple validation errors returned
// by Namespace.ValidateAll() if the designated constraints aren't met.
type NamespaceMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m NamespaceMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m NamespaceMultiError) AllErrors() []error { return m }

// NamespaceValidationError is the validation error returned by
// Namespace.Validate if the designated constraints aren't met.
type NamespaceValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e NamespaceValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e NamespaceValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e NamespaceValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e NamespaceValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e NamespaceValidationError) ErrorName() string { return "NamespaceValidationError" }

// Error satisfies the builtin error interface
func (e NamespaceValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sNamespace.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = NamespaceValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = NamespaceValidationError{}