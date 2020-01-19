/*Please add ; after each select statement*/
CREATE PROCEDURE bugsInComponent()
BEGIN
	SELECT bug_title, component_title, bugs_in_component FROM (SELECT c.id AS comp_id, b.num AS bug_id, b.title AS bug_title, c.title AS component_title, (SELECT COUNT(*) FROM BugComponent bc2 JOIN  Component c2 ON bc2.component_id = c2.id GROUP BY c2.id HAVING c2.id = c.id) AS bugs_in_component, (SELECT COUNT(*) FROM
    BugComponent bc3 GROUP BY bug_num HAVING bc3.bug_num = b.num) AS num_of_bugs
    FROM Bug b JOIN BugComponent bc ON b.num = bc.bug_num
    JOIN Component c ON c.id = bc.component_id) t
    WHERE t.num_of_bugs > 1
    ORDER BY bugs_in_component DESC, t.comp_id, t.bug_id;
END