CREATE PROCEDURE AddCourses
@CourseID INT,
@CourseName VARCHAR(50)
AS
BEGIN 
INSERT INTO Courses(CourseID, CourseName)
VALUES (@CourseID, @CourseName);
END;