--Task 7(2)
CREATE PROCEDURE UpdateStudentAge
    @StudentID INT,
    @NewAge INT
AS
BEGIN
    UPDATE Students
    SET Age = @NewAge
    WHERE StudentID = @StudentID;
END;

SELECT * FROM Students