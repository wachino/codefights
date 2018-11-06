/*Please add ; after each select statement*/
CREATE PROCEDURE projectList()
BEGIN
	SELECT project_name, team_lead, income from Projects order by internal_id;
END