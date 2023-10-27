CREATE PROCEDURE AddCourse
    @CourseName VARCHAR(40)
AS
BEGIN
    INSERT INTO Courses (CourseName)
    VALUES (@CourseName);
END;