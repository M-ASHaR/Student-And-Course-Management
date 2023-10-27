
--Task 7(1)
CREATE PROCEDURE AddStudent
    @StudentID INT,
    @FirstName VARCHAR(50),
    @LastName VARCHAR(50),
	@Age INT,
	@CourseID INT
AS
BEGIN
INSERT INTO Students(StudentID,FirstName,LastName,Age,CourseID)
VALUES (@StudentID, @FirstName, @LastName, @Age, @CourseID);
END;


