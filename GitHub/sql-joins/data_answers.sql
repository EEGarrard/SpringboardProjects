--first query
SELECT * FROM owners o 
  FULL OUTER JOIN vehicles v 
    ON o.id=v.owner_id;
--second query
select
  o.first_name,
  o.last_name,
  count(make)
from
  owners as o
  JOIN vehicles as v on o.id = v.owner_id
  group by o.last_name, o.first_name
  order by count

  --third query
select
    o.first_name,
    o.last_name,
  round(avg(v.price)::numeric) as price,
  count(make)
from
    owners as o
    JOIN vehicles as v on o.id = v.owner_id
group by
    o.last_name,
    o.first_name
having
    count(make) > 1
    and avg(price) > 10000
order by
    first_name desc

