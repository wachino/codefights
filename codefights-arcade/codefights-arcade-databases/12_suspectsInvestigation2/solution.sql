/*Please add ; after each select statement*/
CREATE PROCEDURE suspectsInvestigation2()
BEGIN
    SELECT id, name, surname FROM Suspect 
    WHERE height <= 170
    or SUBSTRING(name, 1, 1)<>'B'
    or surname NOT LIKE 'Gre_n'
    ORDER BY id;
END