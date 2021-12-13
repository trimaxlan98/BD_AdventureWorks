--1--
go
create procedure Consulta1
@ListPrice money = 40 as begin 
select ProductID,Name,ProductNumber,ListPrice from Production.Product
where ListPrice>=@ListPrice
end 
--2--
go
create procedure Consulta2
@MakeFlag bit = 1 as begin 
select count(ProductID) as [Total de productos] from Production.Product
where MakeFlag=@MakeFlag;
end
--3--
go
create procedure Consulta3
@DaysToManufacture int = 1 as begin
select ProductID,Name,ProductNumber,ListPrice from Production.Product
where DaysToManufacture>=@DaysToManufacture
end
--4--
go
create procedure Consulta4
@Color nvarchar(15) = 'Yellow' as begin
select count(ProductID) as [Total de productos] from Production.Product 
where Color=@Color
end
--10--
go
create procedure Consulta10
@LocationID smallint = 60 as begin
select sum(Quantity) as [Total de productos] from Production.ProductInventory
where LocationID=60
end
--11--
go
create procedure Consulta11
@EndDate datetime = '2013-01-01' as begin
select WorkOrderID,ProductID,OrderQty,EndDate from Production.WorkOrder
where EndDate=@EndDate
end
--12--
go
create procedure Consulta12
@ScrappedQty smallint = 0 as begin
select  WorkOrderID,ProductID,OrderQty,StockedQty,ScrappedQty from Production.WorkOrder
where ScrappedQty!=0
end