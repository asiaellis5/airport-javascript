# airport-javascript

## Overview

Simple JavaScript app that is run in the console to emulate an airport.

## How to run

Clone this repo, navigate into the jasmine file, right click on SpecRunner.html and paste the path into the browser of your choice

Once open in the browser you should see 18 specs all passing

To use the program open up the console and then create airports and planes and you can land and take off planes from the airport.(please see below for an example of this).

## Example

<img src="./public/images/example.png">

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct a plane to land at an airport

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy
```
