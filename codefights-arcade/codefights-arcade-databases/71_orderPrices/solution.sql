DROP FUNCTION IF EXISTS get_total;
CREATE FUNCTION get_total(items VARCHAR(45)) RETURNS INT DETERMINISTIC
BEGIN
  SET @next = '';
  SET @nextLen = 0;
  SET @ret = 0;
    iterator:
LOOP
  IF LENGTH(items) = 0 OR items IS NULL THEN
    LEAVE iterator;
  END IF;

  SET @next = SUBSTRING_INDEX(items,';',1);
  SET @nextLen = LENGTH(@next);
  
  SELECT @ret+price INTO @ret FROM item_prices WHERE id=@next LIMIT 1;
  
  SET items = INSERT(items,1,@nextLen + 1,'');
END LOOP;
  RETURN @ret;
END;

CREATE PROCEDURE orderPrices()
BEGIN
    SELECT id, buyer, get_total(items) AS total_price
    FROM orders
    ORDER BY id;
END;
