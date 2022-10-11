# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

As We have Agents table already, we all add a Column of AgentUserId, this AgentUserId will be unique key. It can be thrir National Identity Card Number (NID) or combination of characters with NID. Example in one of our project we created user ID by their Department Acronym plus 00 plus getting middle 7 digits of NID. Example, a user whose NID is 4007-1234567-1 and is belong to Department of Plant Protection so his user id will be DPP-00-1234567. In a unique case if middle 7 digits are same for 2 users the second user will get the user id DPP-01-1234567. This middle 00 series will also helps you if you want to create a child user of agent that perform some task on behalf of agent so it will be incremental and can be uniquely identifiable.

Break Down 1
So whenever we create agent in our system we will create Agent User Id and store it in AgentUserId column of Agents table.

Breakdown 2
We can store AgentUserId as reference Id in Facilities table while storing Facilities so when generate Report we get the AgentUserId from query.

Breakdown 3 
We can skip breakdown 2 and while generating report can create a join from our Facilities table to Agents table on AgentId and get AgenctUserId from there.



