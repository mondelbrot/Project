SELECT *
FROM "ds_salaries"
LIMIT 10
;

SELECT COUNT(*)
FROM "ds_salaries";


DESCRIBE TABLE "ds_salaries";

SELECT *
FROM "ds_salaries"
WHERE "job_title" IS NULL
;

SELECT *
FROM "ds_salaries"
WHERE "salary_in_usd" IS NULL
;

select count(*)
from "ISO-3166-Countries-with-Regional-Codes"
left join "NEWpricelevels" on "NEWpricelevels"."Country" = "ISO-3166-Countries-with-Regional-Codes"."name"
where "Country" is null;
