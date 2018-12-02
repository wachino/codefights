CREATE PROCEDURE testCheck()
    SELECT id, IF ( given_answer IS NULL, 'no answer', IF ( given_answer =correct_answer, 'correct', 'incorrect') ) AS checks
    FROM answers
    ORDER BY id;
