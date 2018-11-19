/*Please add ; after each select statement*/
CREATE PROCEDURE gradeDistribution()
BEGIN
	SELECT Name, ID FROM Grades WHERE Final > (Midterm1 + Midterm2)/2 AND Final > 
((Midterm1+Midterm2)/2 +Final)/2 ORDER BY SUBSTRING(Name, 1, 3), ID ASC;
END