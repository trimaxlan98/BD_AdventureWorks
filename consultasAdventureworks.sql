use AdventureWorks2019

-- 1.- Listar el total de dinero ganado en ventas por cada territorio
select st.Name, sum(so.OrderQty * so.UnitPrice) as total_vendido
from Sales.SalesOrderHeader sh
inner join Sales.SalesOrderDetail so
on sh.SalesOrderID = so.SalesOrderID
inner join Sales.SalesTerritory st
on st.TerritoryID = sh.TerritoryID
group by st.TerritoryID, st.Name
order by sum(so.OrderQty * so.UnitPrice) desc;

-- 2.- Mostrar a todos los empleados que se encuentran en el departamento de manufactura y de aseguramientode la calidad

select e.BusinessEntityID, e.*,
d.Name
from HumanResources.Employee e 
inner join 
HumanResources.EmployeeDepartmentHistory h
on e.BusinessEntityID = h.BusinessEntityID
inner join HumanResources.Department d
on d.DepartmentID = h.DepartmentID
and h.EndDate is null
and d.Name in ('Quality Assurance', 'Production');

-- 3.- Registrar un nuevo cambio de salario a un empleado de AdventureWorks que se le atribuya un pago quincenal

-- Ejemplo
Insert into HumanResources.EmployeeDepartmentHistory Values
(1,'2021-12-25 00:00:00.000',200.50,2);
-- 2 = pago quincenal

-- 4.- Listar a los empleados que han sufrido almenos un cambio de departamento

select distinct p.BusinessEntityID,p.Title,p.FirstName,p.MiddleName,p.LastName from Person.Person p join HumanResources.EmployeeDepartmentHistory h
on p.BusinessEntityID=h.BusinessEntityID
where h.EndDate is not null

-- 5.- Listar los empleados que tengan un segundo nombre

select distinct p.BusinessEntityID, p.PersonType, p.FirstName, p.MiddleName, p.LastName
from Person.Person p
where MiddleName is not NULL

-- 6.- Listar los nombre y los correos de los empleados que sean del departamento de Marketing (DepartmentID = 4)

select distinct p.BusinessEntityID, p.FirstName, p.MiddleName, p.LastName, pe.EmailAddress
from Person.Person p inner join HumanResources.EmployeeDepartmentHistory edh 
on p.BusinessEntityID = edh.BusinessEntityID
inner join Person.EmailAddress as pe on pe.BusinessEntityID = p.BusinessEntityID
where DepartmentID = 4

-- 7.- Listar a los empleados Hombres
select * from HumanResources.Employee H
where H.Gender='M'

-- 8.- Marcar a un empleado como despedido o como no disponible

--ejemplo
UPDATE HumanResources.Employee
SET CurrentFlag=0
WHERE BusinessEntityID=15;

-- 9.- Listar los nombre y los telefonos de los empleados que sean del departamento de Ingeniería (DepartmentID = 1)
-- Y que su número telefónico sea de celular (PhoneNumberTypeID = 1)
select distinct p.BusinessEntityID, p.FirstName, p.MiddleName, p.LastName, pn.PhoneNumber
from Person.Person p inner join HumanResources.EmployeeDepartmentHistory edh 
on p.BusinessEntityID = edh.BusinessEntityID
inner join Person.PersonPhone as pn on pn.BusinessEntityID = p.BusinessEntityID
where DepartmentID = 1 and PhoneNumberTypeID = 1;

-- 10 -- MOSTRAR LAS COMPRAS (ORDEN, FECHA CLIENTE, IMPORTE VENDIDO) Y EL VENDEDOR QUE LO REALIZAO LA VENTA
SELECT H.SalesOrderID AS 'N° Orden',H.OrderDate AS Fecha,H.CustomerID AS 
Cliente,H.SalesPersonID AS Vendedor,
SUM(D.OrderQty*D.UnitPrice) AS [Importe Vendido]
FROM Sales.SalesOrderHeader H
INNER JOIN Sales.SalesOrderDetail D 
ON H.SalesOrderID = D.SalesOrderID
GROUP BY H.SalesOrderID, H.OrderDate, H.CustomerID, H.SalesPersonID-- 11 -- MOSTRAR LOS 3 VENDEDORES QUE MAS HAN VENDIDOSELECT top 3 H.SalesPersonID AS Vendedor,
SUM(D.OrderQty*D.UnitPrice) AS [Importe Vendido]
FROM Sales.SalesOrderHeader H
INNER JOIN Sales.SalesOrderDetail D 
ON H.SalesOrderID = D.SalesOrderID
GROUP BY H.SalesOrderID, H.SalesPersonID-- 13 -- MOSTRAR LA ORDEN QUE MAS SE VENDIO EN UNA FECHASELECT top 1 H.SalesOrderID AS 'N° Orden', H.OrderDate AS
Fecha,SUM(D.OrderQty*D.UnitPrice) AS [Importe Vendido]
FROM Sales.SalesOrderHeader H
INNER JOIN Sales.SalesOrderDetail D ON H.SalesOrderID = D.SalesOrderID
GROUP BY H.SalesOrderID, H.OrderDate
order by [Importe Vendido] desc