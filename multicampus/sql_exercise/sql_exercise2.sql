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
50�� �μ� ������ ��դ� �ְ�, ����, �ο����� ���Ͽ� ����϶�
**/
select avg(salary) ���, max(salary) �ְ�, min(salary) ����, count(*) �ο���
from employees
where department_id = 10;

/**
�� �μ��� �޿��� ���, �ְ�, ����, �ο����� ���Ͽ� ����϶�.
**/
select department_id �μ�, avg(salary) ���, max(salary) �ְ�, min(salary) ����, count(*) �ο���
from employees
group by department_id;

/**
�� �μ��� ���� ������ �ϴ� ����� �ο����� ���Ͽ� �μ���ȣ, ������, �ο����� ����϶�.
**/
select department_id �μ���ȣ, job_id ������, count(*) �ο���
from employees
group by department_id, job_id;

/**
���� ������ �ϴ� ����� ���� 4�� �̻��� ������ �ο����� ����϶�.
**/
select department_id �μ���ȣ, job_id ������, count(*) �ο���
from employees
group by department_id, job_id
having count(*) >= 4;

/**
�� �μ��� ��տ���, ��ü����, �ְ����, ��������,�� ���Ͽ� ��տ����� ���������� ����϶�.
**/
select department_id �μ�, avg(salary) ��տ���, sum(salary) ��ü����, max(salary) �ְ����, min(salary) ����
from employees
group by department_id
order by avg(salary) desc;

/**
 �μ���ȣ, �μ���, �̸�, �޿��� ����϶�.
**/
select d.department_id �μ���ȣ, d.department_name �μ���, e.first_name �̸�, e.salary �޿�
from departments d, employees e
where d.department_id = e.department_id;

/**
�̸��� adam�� ����� �μ����� ����϶�.
**/
select d.department_name �μ���
from departments d, employees e
where e.first_name = 'Adam';

/**
employees���̺� �ִ� employee_id�� manager_id�� �̿��Ͽ� ������ ���踦 ������ ���� ����϶�
'smith'�� �Ŵ����� 'ford'�̴�.
**/
select e.first_name||'�� �Ŵ����� '||m.first_name||'�̴�.' ����
from employees e, employees m
where e.manager_id = m.employee_id;
/**
adam�� ������ ���� ������ ���� ����� �̸�, �μ���, �޿�, ������ ����϶�.
**/
select e.first_name �̸�, d.department_name �μ���, e.salary �޿�, e.job_id ����
from employees e, departments d
where e.department_id = d.department_id
and e.job_id = (
				select job_id
				from employees
				where first_name = 'Adam'
				);

/**
��ü ����� ��� �ӱݺ��� ���� ����� �����ȣ, �̸�, �μ���, �Ի���, ����, �޿��� ����϶�.
**/
select e.employee_id �����ȣ, e.first_name �̸�, d.department_name �μ���, e.hire_date �Ի���, d.location_id ����, e.salary �޿�
from employees e, departments d
where e.department_id = d.department_id
and e.salary > (
				select avg(salary)
				from employees
				);

/**
50�� �μ������ �߿��� 30�� �μ��� ����� ���� ������ �ϴ� ����� �����ȣ, �̸�, �μ���, �Ի����� ����϶�.
**/
select e.employee_id �����ȣ, e.first_name �̸�, d.department_name �μ���, e.hire_date �Ի���
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
�޿��� 30�� �μ��� �ְ� �޿����� ���� ����� �����ȣ, �̸�, �޿��� ����϶�.
**/
select employee_id �����ȣ, first_name �̸�, salary �޿���
from employees
where salary > ALL (
					select salary
					from employees
					where department_id = 30
					);