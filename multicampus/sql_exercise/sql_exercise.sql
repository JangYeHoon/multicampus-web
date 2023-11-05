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

--�μ���ȣ�� 10���� �μ��� ��� �� �����ȣ, �̸�, ������ ����϶�
select employee_id �����ȣ, last_name||first_name ����̸�, salary ����
from employees
where department_id=10;

--�����ȣ�� 7369�� ��� �� �̸�, �Ի���, �μ� ��ȣ�� ����϶�.
select last_name||first_name �̸�, hire_date �Ի���, department_id �μ���ȣ
from employees
where employee_id=7396;

--�̸��� Ellen�� ����� ��� ������ ����϶�.
select *
from employees
where first_name='Ellen';

--�Ի����� 08/04/21�� ����� �̸�, �μ���ȣ, ������ ����϶�.
select first_name �̸�, department_id �μ���ȣ, salary ����
from employees
where hire_date='08/04/21';

--������ SA_MAN �ƴ� ����� ��� ������ ����϶�.
select *
from employees
where job_id != 'SA_MAN';

--�Ի����� 08/04/21 ���Ŀ� �Ի��� ����� ������ ����϶�.
select *
from employees
where hire_date > '08/04/21';

--�μ���ȣ�� 20,30���� ������ ��� ����� �̸�, �����ȣ, �μ���ȣ�� ����϶�.
select first_name �̸�, employee_id �����ȣ, department_id �μ���ȣ
from employees
where department_id != 20 and department_id != 30;

--�̸��� S�� �����ϴ� ����� �����ȣ, �̸�, �Ի���, �μ���ȣ�� ����϶�.
select employee_id �����ȣ, first_name �̸�, hire_date �Ի���, department_id �μ���ȣ
from employees
where first_name like 'S%';

--�̸��� s�� �����ϰ� ������ ���ڰ� t�� ����� ������ ����϶�.
select *
from employees
where first_name like 'S%t';

/**
employees ���̺��� �̸�, �޿�, ��, �Ѿ��� ���Ͽ� �Ѿ� ���� ������ ����϶� �� �󿩱��� NULL�� ����� ����
*/
select first_name �̸�, salary �޿�, commission_pct ��, (salary + commission_pct) �Ѿ�
from employees
where commission_pct is not null
order by 4 desc;

/**
10�� �μ��� ��� ����鿡�� �޿��� 13%�� ���ʽ��� �����ϱ�� �Ͽ���. �̸�, �޿�, ���ʽ��ݾ�, �μ���ȣ�� ����϶�.
**/
select first_name �̸�, salary �޿�, (0.13*salary) ���ʽ��ݾ�, department_id
from employees;

/**
30�� �μ��� ������ ����Ͽ� �̸�, �μ���ȣ, �޿�, ������ ����϶�. �� ������ �޿��� 150%�� ���ʽ��� �����Ѵ�.
   -- ���� = sal*12+(sal*1.5)
**/
select first_name �̸�, department_id �μ���ȣ, salary �޿�, (salary*12+(salary*1.5)) ����
from employees;

/**
�μ���ȣ�� 20�� �μ��� �ð��� �ӱ��� ����Ͽ� ����϶�. �� 1���� �ٹ��ϼ��� 12���̰� 1�� �ٹ��ð��� 5�ð��̴�.
��¾���� �̸�, �޿�, �ð��� �ӱ�(�Ҽ����� 1��° �ڸ����� �ݿø�)�� ����϶�.
   -- �ñ� = sal/�ϼ�/�ð�  -> sal/ 12/5 
   -- round(m, n) m�� �Ҽ��� n�ڸ����� �ݿø� 
**/
select first_name �̸�, salary �޿�, round(salary/12/5, 1) �ð����ӱ�
from employees
where department_id = 20;

/**
�޿��� 1500���� 3000������ ����� �޿��� 5%�� ȸ��� �����ϱ�� �Ͽ���. �̸� �̸�, �޿�, ȸ��(-2�ڸ����� �ݿø�)�� ����϶�.
	-- ȸ��  = sal * 0.05	
	-- -2�ڸ����� �ݿø� : ���� 2��° �ڸ����� �ݿø�.. 100������  
**/
select first_name �̸�, salary �޿�, round(salary * 0.05, 2) ȸ��
from employees
where salary between 1500 and 3000;
/**
�Ի��Ϻ��� ���ݱ����� ��¥���� ����϶�. �μ���ȣ, �̸�, �Ի���, ������, �ٹ��ϼ�(�Ҽ�����������), �ٹ����,
 �ٹ�����(30�� ����)�� ����϶�.
	-- ���� ��¥ : sysdate 
	-- �ٹ� �ϼ� : ���糯¥ - �Ի��� = sysdate - hire_date  -> ��¥ - ��¥ : �ϼ� ����
	-- �ٹ� ��� : to_char(sysdate,'YYYY')-to_char(hiredate,'YYYY')
	-- �ٹ� ���� : �ٹ��ϼ� / 1��(30��)
**/
select department_id �μ���ȣ, first_name �̸�, hire_date �Ի���, sysdate ������, (sysdate-hire_date) �ٹ��ϼ�, to_char(sysdate,'YYYY')-to_char(hire_date, 'YYYY') �ٹ����, ((sysdate-hire_date)/30) �ٹ�����
from employees;

/**
�Ի��Ϸκ��� ���ñ����� �ϼ��� ���Ͽ� �̸�, �Ի���, �ٹ��ϼ��� ����϶�.
--round(sysdate-hiredate,0) �ٹ��ϼ�
**/
select first_name �̸�, hire_date �Ի���, round(sysdate-hire_date, 0) �ٹ��ϼ�
from employees;

/**
�Ի����� 2012�� 7�� 5���� ���·� �̸�, �Ի����� ����϶�.
	-- ��¥ ���� �տ� fm �� ���� '0'�� ǥ������ �ʴ´ٴ� ��.. 
	-- 'fmYYYY"��" MM"��" DD"��' 
**/
select first_name �̸�, to_char(hire_date, 'fmYYYY"��" MM"��" DD"��') �Ի���
from employees;

/**
�̸�(first_name)�� ���ڼ��� 6���̻��� ����� �̸��� �տ��� 3�ڸ� ���Ͽ� �ҹ��ڷ� �̸����� ����϶�.
	-- substr(str, position, length) : str ���ڸ� positin ���� length���� ��ŭ ǥ��
	-- lower(str)  �ҹ��� ��ȯ
	-- length(str)  str�� ����
**/
select lower(substr(first_name, 0, 3)) �̸�
from employees
where length(first_name) >= 6;

/**
10�� �μ� ������ ��դ� �ְ�, ����, �ο����� ���Ͽ� ����϶�
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