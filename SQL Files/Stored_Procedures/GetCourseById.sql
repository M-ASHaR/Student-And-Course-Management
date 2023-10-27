CREATE PROCEDURE GetCourseById
    @CourseID INT
AS
BEGIN
    SELECT CourseID, CourseName
    FROM Courses
    WHERE CourseID = @CourseID;
END;
