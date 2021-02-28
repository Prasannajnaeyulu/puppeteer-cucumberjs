Feature: Disney World Parks and Tickets

    As a Diney world customer, I should able to search for Disney parks and tickets

Background: open the Disney world app
    Given alice visits a disney world app

Scenario: The one where alice can see all the themeparks
  When alice navigates to parks and tickets
  Then alice should see the following theme parks
    |Magic Kingdom|
    |Epcot|
    |Disney's Hollywood Studios|
    |Star Wars: Galaxy's Edge |
    |Disney's Animal Kingdom|

Scenario: The one where alice can see all the water parks
  When alice navigates to parks and tickets
  Then alice should see the following water parks
    |Disney's Typhoon Lagoon |
    |Disney's Blizzard Beach |