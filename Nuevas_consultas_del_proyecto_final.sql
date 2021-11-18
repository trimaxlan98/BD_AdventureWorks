
--1.- Listar todos los productos que tengan un precio de venta mayor o igual a 40 dólares. 
select * from Production.Product
where ListPrice>=40

--2.- Listar la cantidad de productos que se venden para ensamblar en casa 
select * from Production.Product
where MakeFlag=1;

--3.- Listar los productos que les toma un día o más en ensamblar el producto 
select * from Production.Product
where DaysToManufacture>=1

--4.- Listar la cantidad de productos Amarillos 
select *from Production.Product 
where Color='Yellow'

--5.- Registrar una nueva orden de fabricación de 4 piezas de un mismo producto. 
select * from Production.WorkOrder
where OrderQty>=4

--11.- Listar las ordenes de producción que terminaron de fabricarse el 1 de enero del año 2013 
select * from Production.WorkOrder
where EndDate='2013-01-01'

--6.- Registrar una nueva transacción de tipo Venta 
select * from Production.TransactionHistory
where TransactionType='S'

--7.- Verificar que productos no cuentan con una oferta/descuento 
select * from Sales.SpecialOfferProduct
where SpecialOfferID=1

--8.- Listar la cantidad total de productos por el área en el que se encuentran dentro de la planta de producción. 
select LocationID, SUM(Quantity) as Cantidad from Production.ProductInventory
group by LocationID
order by LocationID

--9.- Comprobar que transacciones del tipo Venta han superado el costo del promedio de solo este tipo. 
select * from Production.TransactionHistory
where TransactionType='S'
and ActualCost>(select AVG(ActualCost) from Production.TransactionHistory
where TransactionType='S');

--10 .- Obtener la cantidad de productos que ya se encuentran en el área de ensamblaje final 
select sum(Quantity) from Production.ProductInventory
where LocationID=60

--12.- Listar las ordenes de manufactura que no cumplieron con su meta de stock 
select * from Production.WorkOrder
where ScrappedQty>0


