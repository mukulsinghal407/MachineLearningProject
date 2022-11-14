# MachineLearningProject
Based on the choices and preferences of students of different branches in our college, the ratonas project authored by us, predicts the likeness of the character that matches/ meets the interests of all the batchmates from a confined character set.

The students choose their respective branches and movie preferences followed by selecting one or more characters from the chosen movie via a google form where all the information is stored in the form of a CSV file.

The data is then pre-processed for the ease of computation by handling null values in a row as per the structure of the csv and the chosen characters are selected into a single unified column with the movie name.

The physical appearance of the characters integrated into one csv for processing is then used to provide every entry with the desired attributes according to its character(s) entry which is then used to find a single closest character batchwise.

Further the applied model predicts the most likely traits for the character that must be assigned to the branch.

These selected traits are then fed to the API -> http://avatars.dicebear.com and the final character is presented on the web application along with the basic predicted character traits and the most preferred character out of the character set. 
