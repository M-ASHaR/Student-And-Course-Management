CREATE Table Students (
	StudentID INT PRIMARY KEY,
	FirstName VARCHAR(50),
	LastName VARCHAR(50),
	Age INT,
	CourseID INT,
	FOREIGN KEY(CourseID) REFERENCES Courses(CourseID)
);
