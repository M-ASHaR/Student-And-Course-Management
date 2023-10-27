INSERT INTO Courses(CourseID,CourseName)
VALUES (504, 'Computer Networks'),
	   (503, 'Linear Aljebra'),
	   (502, 'Machine Learning'),
	   (501, 'Data Structures'),
	   (500, 'Digital Logic Design');
	   
INSERT INTO Courses(CourseID,CourseName)
VALUES (506, 'Programming Fundaments'),
	   (509, 'INtroduction to Computing');

SELECT * from courses


INSERT INTO Students(StudentID,FirstName,LastName,Age,CourseID)
VALUES (19, 'Fakhar', 'zaman', 29, 502),
	   (31, 'Abdullah','Ibrahim',23,504),
	   (28, 'Ashar','Zubair',22,501),
	   (27,'Hassan','Asim',23,502),
	   (30,'Noman','Qayyum',24,501),
	   (17,'Anas','Aslam',23,500),
	   (20,'Fazeel','Shahid',23,501),
	   (22,'Waleed','Farrukh',22,502),
	   (37,'Zeeshan','Aslam',23,503),
	   (21, 'Babar','Azam', 28, 503);
	
INSERT INTO Students(StudentID,FirstName,LastName,Age,CourseID)
VALUES (12, 'Hamza', 'Akhtar', 29,Null );	

SELECT * from Students