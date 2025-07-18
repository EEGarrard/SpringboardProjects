-- Comments in SQL Start with dash-dash --
--1.
	select * from analytics 
		where ID = 1880

--2.
	select ID, app_name from analytics 
		where last_updated = '2018-08-01'
	
--3.
	select category, count(*) from analytics 
		group by category
		
--4.
	select app_name, reviews from analytics 
		order by reviews desc 
		limit 5
		
--5.
	select app_name, reviews from analytics 
		where rating >= 4.8
		order by reviews desc 
		limit 1
		
--6
	select category, avg(rating) from analytics 
		group by category
		order by avg(rating) desc 

--7.
	select app_name, price, rating from analytics
		where rating < 3 
		and price = (select max(price) from analytics where rating < 3)
		
--8
	select app_name, min_installs, rating from analytics
		where min_installs < 50 
			and  rating is not null
		order by rating desc
		
--9
	select app_name, reviews from analytics
		where rating < 3
			and reviews >= 10000
			
--10
	select app_name, price, reviews from analytics
		where price BETWEEN 0.10 and 1.00
		order by reviews DESC
		limit 10
		
--11
	select app_name, last_updated from analytics
		order by last_updated asc
		limit 1
	
--12
	select app_name, price from analytics
		order by price desc
		limit 1

--13
	select sum(reviews) as total_reviews from analytics

--14
	select category, count(category) from analytics
		group by category
		having count(category) > 300
		
--15
	select app_name, reviews, min_installs, min_installs/reviews as proportion from analytics
		where min_installs >= 100000
		order by proportion DESC
		limit 1
		
--BONUS1
	WITH ranked_apps AS (
    SELECT 
        app_name,
        category,
        rating,
        min_installs,
        RANK() OVER (PARTITION BY category ORDER BY rating DESC) AS rank
    FROM analytics
    WHERE min_installs >= 50000
        AND rating IS NOT NULL
)
SELECT 
    app_name,
    category,
    rating
FROM ranked_apps
WHERE rank = 1
ORDER BY category;

--BONUS2
?

--BONUS3
?