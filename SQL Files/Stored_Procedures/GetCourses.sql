CREATE PROCEDURE GetAllCourse
AS
BEGIN
    SELECT CourseID,CourseName
    FROM Courses;
END;
