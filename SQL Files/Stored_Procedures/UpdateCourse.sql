CREATE PROCEDURE UpdateCourse
    @CourseID INT,
    @CourseName VARCHAR(40)
AS
BEGIN
    UPDATE Courses
    SET CourseName = @CourseName
    WHERE CourseID = @CourseID;
END;