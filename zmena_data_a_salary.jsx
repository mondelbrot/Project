CREATE OR REPLACE TABLE "zmena_data_a_salary" AS
SELECT * exclude ("date_start", "date_end"), 
 TRY_TO_DATE("date_start") AS "date_start",
 TRY_TO_DATE("date_end") AS "date_end",
 CAST(NULLIF("CZK_salary_from", '') AS INT) AS "salary_from",
 CAST(NULLIF("CZK_salary_to", '') AS INT) AS "salary_to"
FROM "Output_jobs_cz"
;