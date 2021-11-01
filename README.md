# UFOs

## Overview of Project: 

The webpage contains a record UFO sightings at different locations. Visitors are given the option of filtering out fields with information that they are interested in. 

## Results: 

The page has five (5) query fields for filtering out data:
- Date
- City
- State
- Country
- Shape

All the fields are optional, when no choice is made as it is when you first arrive at the page, it shows all the data [sample](static/images/screenshot-initial-page.png). A visitor can specify a property in the appropriate and the page will list all the rows that contain the property or all the properties specified. 
- [Sample](static/images/screenshot-fl-fireball.png) with filters 'State' = 'fl' and 'Shape' = 'fireball'
- [Sample](static/images/screenshot-ca-light-date.png) with filters 'State' = 'ca', 'Shape' = 'light' and 'Date' = '1/1/2010'  

The form does not have a submit button so your query is sent back to the server when the 'Enter' key is pressed. The server returns a response that modifies the page to contain the fields that meet requirements of the visitor.


## Summary:

The current page would work better with a submit button even though this design has less clutter. 
