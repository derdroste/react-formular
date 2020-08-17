#Prym Frontend Application Template

##Sign Up Page
The following requirements MUST be implemented with React.

###It MUST contain:
* "Last name" input of type text
* "First name" input of type text
* "Nick name" input of type text
* "Email" input of type
* "Password" password input of type password
* "Repeat password" input of type password
* "Show Address" input of type checkbox
* "Street" input of type text
* "House/Apartment" input of type text
* "ZIP" input of type number
* "City" input of type number
* All address related fields MUST only be visible if the "Show Address" checkbox is checked.
* "Additional information" textarea field for additional information.
* The Redux store
* A submit button

* All form values MUST be connected to the redux store.
* All form values MUST be persisted in to the localStorage and prefilled after a page reload.
* You SHOULD NOT use any external packages except testing related.
* The application SHOULD be extendable.

###The form MUST submit the information only when the following requirements are met:
* "Last name" input field MUST be at least 2 characters long.
* "First name" input field MUST be at least 2 characters long.
* "Password" MUST be at least 6 characters long and contain at least 2 numbers.
* "Password" and "Repeat password" fields MUST contain the same value.
* "Nick name" input field MAY be empty.
* "Street" input field MUST be at least 4 characters long.
* "City" input field MUST be at least 4 characters long.
* "Additional information" area MAY be empty.
* "Email" input field MUST be a valid email.
* "ZIP" input field MUST be 5 characters long and all characters MUST be decimal numbers.
* Submit button SHOULD be disabled when all the input requirements are not met.
* Your implementation SHOULD contain test with a framework of your choice.

* You MAY implement design of some sort.
 

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL
NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and
"OPTIONAL" in this document are to be interpreted as described in
[RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).