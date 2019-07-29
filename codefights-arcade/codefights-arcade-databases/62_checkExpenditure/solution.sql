/*Please add ; after each select statement*/
CREATE PROCEDURE checkExpenditure()
BEGIN
	SELECT id, IF(SUM(expenditure_sum) > value, SUM(expenditure_sum) - value, 0) as loss
    FROM allowable_expenditure
        JOIN expenditure_plan ON 
            WEEK(monday_date, 7) <= right_bound AND
            WEEK(monday_date, 7) >= left_bound
    GROUP BY id, value;
END