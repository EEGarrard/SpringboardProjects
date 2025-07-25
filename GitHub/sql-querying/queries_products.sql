-- Comments in SQL Start with dash-dash --
-- 1.	
insert into products (name, price, can_bae_returned) 
	values ('chair', 44.00, false)
			
-- 2.	
insert into products (name, price, can_be_returned)
	values ('stool', 25.99, true)
			
-- 3.	
insert into products (name, price, can_be_returned)
	values ('table', 124.00, false)
			
-- 4.	
select * from products

-- 5.	
select name from products

-- 6.	
select name, price from products

-- 7.	
insert into products (name, price, can_be_returned) 
	values ('bench', 150.00, true)
			
-- 8.	
select * from products 
	where can_be_returned = true
			
-- 9.	
select * from products 
	where price < 44.00
			
-- 10.	
select * from products 
	where price between 22.50 and 99.99
			
-- 11.	
update products 
	set price = price-20
			
-- 12.	
delete from products 
	where price < 25.00
			
-- 13.	
update products 
	set price = price+20

-- 14.	
update products
	set can_be_returned = true

