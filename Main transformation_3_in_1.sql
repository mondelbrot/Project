CREATE TABLE "Project_main_tableou" AS
SELECT *, ROUND("salary_in_usd" / "Value") AS COMPARABLE_SALARY
FROM "ds_salaries"
LEFT JOIN "ISO-3166-Countries-with-Regional-Codes" ON "alpha_2" = "company_location"
INNER JOIN "NEWpricelevels" ON "Country" = "name"
;