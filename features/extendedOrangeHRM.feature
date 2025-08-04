Feature: Extended OrangeHRM Functionality

  Scenario: Successful login and navigation
    Given I am on the OrangeHRM login page
    When I enter username "Admin" and password "admin123"
    And I click the Login button
    Then I should see the banner containing "Nefertari s"
    When I click the "Upgrade" button
    Then I should see "Time at Work" visible
    When I click the "Admin" link
    Then the form should match the snapshot for the button "Search"
    When I click "Organization"
    Then the topbar menu list should contain "Nationalities233"
    When I click the first form icon
    And I select the option "ESS"
    Then the option should be selected successfully