Feature: OrangeHRM Login

  Scenario: Successful login with valid credentials
    Given I am on the OrangeHRM login page
    When I enter username "Admin" and password "admin123"
    And I click the Login button
    Then I should be logged in successfully