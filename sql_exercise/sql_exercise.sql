/**********************************************************
*	SQL Query & Function Example1
**********************************************************/
/**
-- Employees Table Columns
-- EMPLOYEE_ID
-- FIRST_NAME
-- LAST_NAME
-- EMAIL
-- PHONE_NUMBER
-- HIRE_DATE
-- JOB_ID
-- SALARY
-- COMMISSION_PCT
-- MANAGER_ID
-- DEPARTMENT_ID
**/

--부서번호가 10번인 부서의 사람 중 사원번호, 이름, 월급을 출력하라
select employee_id 사원번호, last_name||first_name 사원이름, salary 월급
from employees
where department_id=10;

--사원번호가 7369인 사람 중 이름, 입사일, 부서 번호를 출력하라.
select last_name||first_name 이름, hire_date 입사일, department_id 부서번호
from employees
where employee_id=7396;

--이름이 Ellen인 사람의 모든 정보를 출력하라.
select *
from employees
where first_name='Ellen';

--입사일이 08/04/21인 사원의 이름, 부서번호, 월급을 출력하라.
select first_name 이름, department_id 부서번호, salary 월급
from employees
where hire_date='08/04/21';

--직무가 SA_MAN 아닌 사람의 모든 정보를 출력하라.
select *
from employees
where job_id != 'SA_MAN';

--입사일이 08/04/21 이후에 입사한 사원의 정보를 출력하라.
select *
from employees
where hire_date > '08/04/21';

--부서번호와 20,30번을 제외한 모든 사람의 이름, 사원번호, 부서번호를 출력하라.
select first_name 이름, employee_id 사원번호, department_id 부서번호
from employees
where department_id != 20 and department_id != 30;

--이름이 S로 시작하는 사원의 사원번호, 이름, 입사일, 부서번호를 출력하라.
select employee_id 사원번호, first_name 이름, hire_date 입사일, department_id 부서번호
from employees
where first_name like 'S%';

--이름이 s로 시작하고 마지막 글자가 t인 사람이 정보를 출력하라.
select *
from employees
where first_name like 'S%t';

/**
employees 테이블에서 이름, 급여, 상여, 총액을 구하여 총액 많은 순서로 출력하라 단 상여금이 NULL인 사람은 제외
*/
select first_name 이름, salary 급여, commission_pct 상여, (salary + commission_pct) 총액
from employees
where commission_pct is not null
order by 4 desc;

/**
10번 부서의 모든 사람들에게 급여의 13%를 보너스로 지불하기로 하였다. 이름, 급여, 보너스금액, 부서번호를 출력하라.
**/
select first_name 이름, salary 급여, (0.13*salary) 보너스금액, department_id
from employees;

/**
30번 부서의 연봉을 계산하여 이름, 부서번호, 급여, 연봉을 출력하라. 단 연말에 급여의 150%를 보너스로 지급한다.
   -- 연봉 = sal*12+(sal*1.5)
**/
select first_name 이름, department_id 부서번호, salary 급여, (salary*12+(salary*1.5)) 연봉
from employees;

/**
부서번호가 20인 부서의 시간당 임금을 계산하여 출력하라. 단 1달의 근무일수는 12일이고 1일 근무시간은 5시간이다.
출력양식은 이름, 급여, 시간당 임금(소수이하 1번째 자리에서 반올림)을 출력하라.
   -- 시급 = sal/일수/시간  -> sal/ 12/5 
   -- round(m, n) m을 소수점 n자리에서 반올림 
**/
select first_name 이름, salary 급여, round(salary/12/5, 1) 시간당임금
from employees
where department_id = 20;

/**
급여가 1500부터 3000사이의 사람은 급여의 5%를 회비로 지불하기로 하였다. 이를 이름, 급여, 회비(-2자리에서 반올림)를 출력하라.
	-- 회비  = sal * 0.05	
	-- -2자리에서 반올림 : 정수 2번째 자리에서 반올림.. 100단위로  
**/
select first_name 이름, salary 급여, round(salary * 0.05, 2) 회비
from employees
where salary between 1500 and 3000;
/**
입사일부터 지금까지의 날짜수를 출력하라. 부서번호, 이름, 입사일, 현재일, 근무일수(소수점이하절삭), 근무년수,
 근무월수(30일 기준)를 출력하라.
	-- 지금 날짜 : sysdate 
	-- 근무 일수 : 현재날짜 - 입사일 = sysdate - hire_date  -> 날짜 - 날짜 : 일수 나옴
	-- 근무 년수 : to_char(sysdate,'YYYY')-to_char(hiredate,'YYYY')
	-- 근무 월수 : 근무일수 / 1달(30일)
**/
select department_id 부서번호, first_name 이름, hire_date 입사일, sysdate 현재일, (sysdate-hire_date) 근무일수, to_char(sysdate,'YYYY')-to_char(hire_date, 'YYYY') 근무년수, ((sysdate-hire_date)/30) 근무월수
from employees;

/**
입사일로부터 오늘까지의 일수를 구하여 이름, 입사일, 근무일수를 출력하라.
--round(sysdate-hiredate,0) 근무일수
**/
select first_name 이름, hire_date 입사일, round(sysdate-hire_date, 0) 근무일수
from employees;

/**
입사일을 2012년 7월 5일의 형태로 이름, 입사일을 출력하라.
	-- 날짜 형시 앞에 fm 은 선행 '0'을 표현하지 않는다는 뜻.. 
	-- 'fmYYYY"년" MM"월" DD"일' 
**/
select first_name 이름, to_char(hire_date, 'fmYYYY"년" MM"월" DD"일') 입사일
from employees;

/**
이름(first_name)의 글자수가 6자이상인 사람의 이름을 앞에서 3자만 구하여 소문자로 이름만을 출력하라.
	-- substr(str, position, length) : str 문자를 positin 부터 length길이 만큼 표현
	-- lower(str)  소문자 변환
	-- length(str)  str의 길이
**/
select lower(substr(first_name, 0, 3)) 이름
from employees
where length(first_name) >= 6;

/**
10번 부서 월급의 평균ㅡ 최고, 최저, 인원수를 구하여 출력하라
**/
select avg(salary) 평균, max(salary) 최고, min(salary) 최저, count(*) 인원수
from employees
where department_id = 10;

/**
각 부서별 급여의 평균, 최고, 최저, 인원수를 구하여 출력하라.
**/
select department_id 부서, avg(salary) 평균, max(salary) 최고, min(salary) 최저, count(*) 인원수
from employees
group by department_id;

/**
각 부서별 같은 업무를 하는 사람의 인원수를 구하여 부서번호, 업무명, 인원수를 출력하라.
**/
select department_id 부서번호, job_id 업무명, count(*) 인원수
from employees
group by department_id, job_id;

/**
같은 업무를 하는 사람의 수가 4명 이상인 업무와 인원수를 출력하라.
**/
select department_id 부서번호, job_id 업무명, count(*) 인원수
from employees
group by department_id, job_id
having count(*) >= 4;

/**
각 부서별 평균월급, 전체월급, 최고월급, 최저월급,을 구하여 평균월급이 많은순으로 출력하라.
**/
select department_id 부서, avg(salary) 평균월급, sum(salary) 전체월급, max(salary) 최고월급, min(salary) 최저
from employees
group by department_id
order by avg(salary) desc;