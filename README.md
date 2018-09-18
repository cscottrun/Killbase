# Killbase
Exercises
Select all the assassins, sorted by number of kills.

Select all of the assassins older than 30 years old.

Select all of the contracts that can afford to pay Nikita Mears. (Budget >= her price)

Count the number of assassins that are capable of taking out Norman Stansfield. (Their rating >= his security level)

Get the total amount it would require to hire every available assassin.

Assign the following jobs to these assassins:

Jules Winnfield -> Butch Coolidge
The Jackal -> The Jaguar
John Wick -> The Jaguar
Leon -> Norman Stansfield
Pickle Rick -> Sonny Valerio
Jules Winnfield -> Santino D'Antonio
Nikita Mears -> Norman Stansfield
Ghost Dog -> Butch Coolidge
Count the number of currently contracted assassins.

Find the lowest total cost to complete all assigned contracts.

Add a new contract: Snake Plissken, New York, (find a photo), security 5, budget 35, Client is Marcellus Wallace.

Assign all assassins with a rate lower than the cost of the new contract to the new contract.

Complete these contracts: The Jaguar, by the Jackal; Butch Coolidge, by Ghost Dog; Snake Plissken, by Nikita Mears. (Be sure to increment the number of kills!)

Select all the completed contracts, showing only the assassins to be paid, and the amount paid to them. Then show the total cost of the completed contracts.

The Jackal has retired. Remove him from the database. (How can we do this while maintaining integrity on the contracts table?)

Ghost Dog and Nikita Mears have increased their rates by 5 and 10, respectively. Update their entries to reflect this.

The contract on Norman Stansfield has been rescinded. Remove it (and any associated data) from the database.

Winston has taken out a contract on John Wick! (Security 9, budget 100) We may have to rethink the way we're structuring our data. How can we refactor our database schema to allow a person to be an assassin, a client, or the target of a contract? Do that, then assign all assassins not already on a job to this new contract.

