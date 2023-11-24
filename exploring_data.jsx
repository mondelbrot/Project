

----------------------------------exploring data from Apify------------------------------


DESCRIBE TABLE "it_inzeraty_jobs-cz";


SELECT DISTINCT "county"
FROM "it_inzeraty_jobs-cz"
;


SELECT DISTINCT "name"
FROM "it_inzeraty_jobs-cz"
;

SELECT *
FROM "it_inzeraty_jobs-cz"
;


SELECT "name",
  IFNULL("name", 'Unknown') AS NAME_NONULLS
 FROM "it_inzeraty_jobs-cz"
WHERE "name" is NULL or "name" = 'Unknown' order by "name" NULLS FIRST;


SELECT *
FROM "it_inzeraty_jobs-cz"
WHERE "name" IS NULL
;


SELECT DISTINCT "Kategorie_by_Czechitas"
FROM "it_inzeraty_jobs-cz"
;


SELECT COUNT(CAST("CZK_salary_to" AS INTEGER)), "Kategorie_by_Czechitas" 
FROM "it_inzeraty_jobs-cz"
GROUP BY "Kategorie_by_Czechitas";


SELECT "Kategorie_by_Czechitas", SUM(CAST("CZK_salary_to" AS INTEGER)) AS "total_salary"
FROM "it_inzeraty_jobs-cz"
GROUP BY "Kategorie_by_Czechitas";KEBOOLA_17137.WORKSPACE_54403956."it_inzeraty_jobs-cz"KEBOOLA_17137.WORKSPACE_54403956."it_inzeraty_jobs-cz"

SELECT "Kategorie_by_Czechitas", COUNT(*) AS count
FROM "it_inzeraty_jobs-cz"
GROUP BY "Kategorie_by_Czechitas"
ORDER BY count DESC
;


SELECT SUM(CAST("CZK_salary_to" AS DECIMAL)) AS total_salary, "Kategorie_by_Czechitas"
FROM "it_inzeraty_jobs-cz"
GROUP BY "Kategorie_by_Czechitas";


SELECT "CZK_salary_from"
FROM "it_inzeraty_jobs-cz"
where "CZK_salary_from" is not null and "CZK_salary_from" != ''
;

SELECT DISTINCT "name"
FROM "it_inzeraty_jobs-cz"
where "name" ilike '%dat%' or  "name" ilike '%anal%'
;



CREATE TABLE "jobs-cz" AS
SELECT * exclude ("CZK_salary_from", "CZK_salary_to"), 
 CAST(NULLIF("CZK_salary_from", '')  AS INT) AS "salary_from",
 CAST(NULLIF("CZK_salary_to", '') AS INT) AS "salary_to"
FROM KEBOOLA_17137.WORKSPACE_54403956."it_inzeraty_jobs-cz"
;



SELECT "salary_from", "salary_to"
FROM KEBOOLA_17137.WORKSPACE_54403956."jobs-cz"
;

SELECT "salary_from", "salary_to"
FROM KEBOOLA_17137.WORKSPACE_54403956."jobs-cz";

SELECT "name", "category", "Kategorie_by_Czechitas"
FROM KEBOOLA_17137.WORKSPACE_54403956."jobs-cz"
;

SELECT COUNT(*)
FROM KEBOOLA_17137.WORKSPACE_54403956."jobs-cz"
WHERE "Kategorie_by_Czechitas" != 'Data analyst / BI' AND "name" ILIKE '%DAT%'
;

SELECT COUNT(*)
FROM KEBOOLA_17137.WORKSPACE_54403956."jobs-cz"
WHERE "Kategorie_by_Czechitas" = 'Data analyst / BI';

SELECT DISTINCT "Kategorie_by_Czechitas"
FROM KEBOOLA_17137.WORKSPACE_54403956."jobs-cz"
;


SELECT COUNT(*)
FROM KEBOOLA_17137.WORKSPACE_54403956."jobs-cz"
WHERE "Kategorie_by_Czechitas" = 'Data analyst / BI' AND "category" IN 
(
'Datový analytik',
'Databázový administrátor',
'Databázový specialista',
'Data scientist',
'Data Governance specialista',
'Business analytik',
'Business Intelligence Specialist',
'Specialista reportingu',
'Statistik',
'Analytik prodeje',
'IT analytik' ,
'Machine Learning Engineer',
'Oracle vývojář'
)
AND ("name" ILIKE '%MANAG%' OR "name" ILIKE '%LEAD%')
;


