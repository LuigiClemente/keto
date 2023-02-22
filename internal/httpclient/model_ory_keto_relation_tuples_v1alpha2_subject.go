/*
 * Ory Keto API
 *
 * Documentation for all of Ory Keto's REST APIs. gRPC is documented separately.
 *
 * API version: 1.0.0
 * Contact: hi@ory.sh
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package client

import (
	"encoding/json"
)

// OryKetoRelationTuplesV1alpha2Subject Subject is either a concrete subject id or a `SubjectSet` expanding to more Subjects.
type OryKetoRelationTuplesV1alpha2Subject struct {
	// A concrete id of the subject.
	Id  *string     `json:"id,omitempty"`
	Set *SubjectSet `json:"set,omitempty"`
}

// NewOryKetoRelationTuplesV1alpha2Subject instantiates a new OryKetoRelationTuplesV1alpha2Subject object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewOryKetoRelationTuplesV1alpha2Subject() *OryKetoRelationTuplesV1alpha2Subject {
	this := OryKetoRelationTuplesV1alpha2Subject{}
	return &this
}

// NewOryKetoRelationTuplesV1alpha2SubjectWithDefaults instantiates a new OryKetoRelationTuplesV1alpha2Subject object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewOryKetoRelationTuplesV1alpha2SubjectWithDefaults() *OryKetoRelationTuplesV1alpha2Subject {
	this := OryKetoRelationTuplesV1alpha2Subject{}
	return &this
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *OryKetoRelationTuplesV1alpha2Subject) GetId() string {
	if o == nil || o.Id == nil {
		var ret string
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *OryKetoRelationTuplesV1alpha2Subject) GetIdOk() (*string, bool) {
	if o == nil || o.Id == nil {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *OryKetoRelationTuplesV1alpha2Subject) HasId() bool {
	if o != nil && o.Id != nil {
		return true
	}

	return false
}

// SetId gets a reference to the given string and assigns it to the Id field.
func (o *OryKetoRelationTuplesV1alpha2Subject) SetId(v string) {
	o.Id = &v
}

// GetSet returns the Set field value if set, zero value otherwise.
func (o *OryKetoRelationTuplesV1alpha2Subject) GetSet() SubjectSet {
	if o == nil || o.Set == nil {
		var ret SubjectSet
		return ret
	}
	return *o.Set
}

// GetSetOk returns a tuple with the Set field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *OryKetoRelationTuplesV1alpha2Subject) GetSetOk() (*SubjectSet, bool) {
	if o == nil || o.Set == nil {
		return nil, false
	}
	return o.Set, true
}

// HasSet returns a boolean if a field has been set.
func (o *OryKetoRelationTuplesV1alpha2Subject) HasSet() bool {
	if o != nil && o.Set != nil {
		return true
	}

	return false
}

// SetSet gets a reference to the given SubjectSet and assigns it to the Set field.
func (o *OryKetoRelationTuplesV1alpha2Subject) SetSet(v SubjectSet) {
	o.Set = &v
}

func (o OryKetoRelationTuplesV1alpha2Subject) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Id != nil {
		toSerialize["id"] = o.Id
	}
	if o.Set != nil {
		toSerialize["set"] = o.Set
	}
	return json.Marshal(toSerialize)
}

type NullableOryKetoRelationTuplesV1alpha2Subject struct {
	value *OryKetoRelationTuplesV1alpha2Subject
	isSet bool
}

func (v NullableOryKetoRelationTuplesV1alpha2Subject) Get() *OryKetoRelationTuplesV1alpha2Subject {
	return v.value
}

func (v *NullableOryKetoRelationTuplesV1alpha2Subject) Set(val *OryKetoRelationTuplesV1alpha2Subject) {
	v.value = val
	v.isSet = true
}

func (v NullableOryKetoRelationTuplesV1alpha2Subject) IsSet() bool {
	return v.isSet
}

func (v *NullableOryKetoRelationTuplesV1alpha2Subject) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableOryKetoRelationTuplesV1alpha2Subject(val *OryKetoRelationTuplesV1alpha2Subject) *NullableOryKetoRelationTuplesV1alpha2Subject {
	return &NullableOryKetoRelationTuplesV1alpha2Subject{value: val, isSet: true}
}

func (v NullableOryKetoRelationTuplesV1alpha2Subject) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableOryKetoRelationTuplesV1alpha2Subject) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}