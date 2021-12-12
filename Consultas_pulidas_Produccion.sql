-- Produccion (Optimizacion)
 use Produccion

 select *from Production.Product
--1.- Listar todos los productos que tengan un precio de venta mayor o igual a 40 dólares. 
select ProductID,Name,ProductNumber,ListPrice from Production.Product
where ListPrice>=40
--consulta forzada a ejecutarse con indice
select ProductID,Name,ProductNumber,ListPrice from Production.Product with (index(PK_Product_ProductID))
where ListPrice>=40
--indice
create nonclustered index index1
on Production.Product(ListPrice)
INCLUDE(ProductID,Name, ProductNumber)

--2.- Listar la cantidad de productos que se venden para ensamblar en casa 
select count(ProductID) as [Total de productos] from Production.Product
where MakeFlag=1;
--consulta forzada a ejecutarse con indice
select count(ProductID) as [Total de productos] from Production.Product with (index(PK_Product_ProductID))data:image/pjpeg;base64,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
where MakeFlag=1;
--indice
create nonclustered index index2
on Production.Product(MakeFlag)
INCLUDE(ProductID)

--3.- Listar los productos que les toma un día o más en ensamblar el producto 
select ProductID,Name,ProductNumber,ListPrice from Production.Product
where DaysToManufacture>=1
--consulta forzada a ejecutarse con indice
select ProductID,Name,ProductNumber,ListPrice from Production.Product with (index(PK_Product_ProductID))
where DaysToManufacture>=1
--indice
create nonclustered index index3
on Production.Product(DaysToManufacture)
INCLUDE(ProductID,Name,ProductNumber,ListPrice)

--4.- Listar la cantidad de productos Amarillos 
select count(ProductID) as [Total de productos] from Production.Product 
where Color='Yellow'
--consulta forzada a ejecutarse con indice
select count(ProductID) as [Total de productos] from Production.Product with (index(PK_Product_ProductID))
where Color='Yellow'
--indice
create nonclustered index index4
on Production.Product(Color)
INCLUDE(ProductID)

--5.- Registrar una nueva orden de fabricación de 4 piezas de un mismo producto. 
insert into [Production].[WorkOrder](
            [ProductID]
            ,[OrderQty]
            ,[ScrappedQty]
            ,[StartDate]
            ,[EndDate]
            ,[DueDate]
			,[ScrapReasonID])
values ( 730
		,4
		,0
		,CONVERT(DATE, GETDATE(),120)
		,NULL
		,DATEADD(day,11,CONVERT(DATE, GETDATE(),120))
		,NULL);

--8.- Listar la cantidad total de productos por el área en el que se encuentran dentro de la planta de producción. 
select t1.LocationID,t2.Name, SUM(Quantity) as Cantidad 
from Production.ProductInventory t1 join
Production.Location t2
on t1.LocationID=t2.LocationID
group by t1.LocationID,t2.Name


--10 .- Obtener la cantidad de productos que ya se encuentran en el área de ensamblaje final 
select sum(Quantity) as [Total de productos] from Production.ProductInventory
where LocationID=60

select sum(Quantity) as [Total de productos] from Production.ProductInventory with (index(PK_ProductInventory_ProductID_LocationID))
where LocationID=60

create nonclustered index index10
on Production.ProductInventory(LocationID)
INCLUDE(Quantity)

--11.- Listar las ordenes de producción que terminaron de fabricarse el 1 de enero del año 2013 
select WorkOrderID,ProductID,OrderQty,EndDate from Production.WorkOrder
where EndDate='2013-01-01'

select WorkOrderID,ProductID,OrderQty,EndDate from Production.WorkOrder with(index(PK_WorkOrder_WorkOrderID))
where EndDate='2013-01-01'

create nonclustered index index11
on Production.WorkOrder(EndDate)
INCLUDE(WorkOrderID,ProductID,OrderQty)

--12.- Listar las ordenes de manufactura que no cumplieron con su meta de stock 
select  WorkOrderID,ProductID,OrderQty,StockedQty,ScrappedQty from Production.WorkOrder
where ScrappedQty!=0

select  WorkOrderID,ProductID,OrderQty,StockedQty,ScrappedQty from Production.WorkOrder with(index(PK_WorkOrder_WorkOrderID))
where ScrappedQty!=0

create nonclustered index index12
on Production.WorkOrder(ScrappedQty)
INCLUDE(WorkOrderID,ProductID,OrderQty,StockedQty)

-- 13 Agregar 666 registros a un estante tipo 4 a un estante R en un compartimiento de almacenamiento 100
insert into [Production].[ProductInventory](
            [ProductID]
            ,[LocationID]
            ,[Shelf]
            ,[Bin]
            ,[Quantity])
values ( 4
		,5
		,'R'
		,100
		,666);
		select *from Production.ProductInventory 