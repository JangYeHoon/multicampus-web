/**********************************************************
*	SQL Query & Function Example2
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

/**
--Departments Table Columns
--DEPARTMENT_ID
--DEPARTMENT_NAME
--MANAGER_ID
--LOCATION_ID
**/

/**
50번 부서 월급의 평균ㅡ 최고, 최저, 인원수를 구하여 출력하라
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

/**
 부서번호, 부서명, 이름, 급여를 출력하라.
**/
select d.department_id 부서번호, d.department_name 부서명, e.first_name 이름, e.salary 급여
from departments d, employees e
where d.department_id = e.department_id;

/**
이름이 adam인 사원의 부서명을 출력하라.
**/
select d.department_name 부서명
from departments d, employees e
where e.first_name = 'Adam';

/**
employees테이블에 있는 employee_id와 manager_id를 이용하여 서로의 관계를 다음과 같이 출력하라
'smith'의 매니저는 'ford'이다.
**/
select e.first_name||'의 매니저는 '||m.first_name||'이다.' 관계
from employees e, employees m
where e.manager_id = m.employee_id;
/**
adam의 직무와 같은 직무를 갖는 사람의 이름, 부서명, 급여, 직무를 출력하라.
**/
select e.first_name 이름, d.department_name 부서명, e.salary 급여, e.job_id 직무
from employees e, departments d
where e.department_id = d.department_id
and e.job_id = (
				select job_id
				from employees
				where first_name = 'Adam'
				);

/**
전체 사원의 평균 임금보다 많은 사원의 사원번호, 이름, 부서명, 입사일, 지역, 급여를 출력하라.
**/
select e.employee_id 사원번호, e.first_name 이름, d.department_name 부서명, e.hire_date 입사일, d.location_id 지역, e.salary 급여
from employees e, departments d
where e.department_id = d.department_id
and e.salary > (
				select avg(salary)
				from employees
				);

/**
50번 부서사람들 중에서 30번 부서의 사원과 같은 업무를 하는 사원의 사원번호, 이름, 부서명, 입사일을 출력하라.
**/
select e.employee_id 사원번호, e.first_name 이름, d.department_name 부서명, e.hire_date 입사일
from employees e, departments d
where e.department_id = d.department_id
and e.job_id in (
				select   e.job_id
				from    employees e
				where   e.department_id = '30'
				) and   d.department_id = '50'

select department_id, job_id
from employees
where department_id = 30;

insert into employees(employee_id, first_name, last_name, email, phone_number, hire_date, job_id, salary, manager_id, department_id) values (1000, 'yehoon', 'jang', 'jkjk', '010.332.1546', '12/12/12', 'PU_MAN', 1000, 206, 50);
/**
급여가 30번 부서의 최고 급여보다 높은 사원의 사원번호, 이름, 급여를 출력하라.
**/
select employee_id 사원번호, first_name 이름, salary 급여가
from employees
where salary > ALL (
					select salary
					from employees
					where department_id = 30
					);