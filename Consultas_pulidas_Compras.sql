-- Compras (optimizacion)
use Compras
--6.- Listar los productos comprados que en promedio tardan entre 17 días o menos en llegar desde que se realizó el pedido de compra
select t1.ProductID,t1.Name,t1.ProductNumber,t1.ListPrice,t2.AverageLeadTime 
from Purchasing.ProductVendor t2 join LS_PRODUCCION.Produccion.Production.Product t1
on t1.ProductID=t2.ProductID
where AverageLeadTime<=17

CREATE NONCLUSTERED INDEX [index6]
ON [Purchasing].[ProductVendor] ([AverageLeadTime])
INCLUDE ([ProductID])

--7.- Listar las compras de productos que se esperen lleguen antes del 24 de febrero del 2014;
select t1.ProductID,t1.Name,t1.ProductNumber,t1.ListPrice,t2.DueDate
from Purchasing.PurchaseOrderDetail t2 join LS_PRODUCCION.Produccion.Production.Product t1
on t1.ProductID=t2.ProductID
where DueDate<'24-02-2014'

CREATE NONCLUSTERED INDEX [index7]
ON [Purchasing].[PurchaseOrderDetail] ([DueDate])
INCLUDE ([ProductID])


--9.- .- Listar los productos que compra la empresa de Adventure Works y le cuestan más de 40 dólares
select t1.ProductID,t1.Name,t1.ProductNumber,t1.ListPrice,t2.LastReceiptCost
from Purchasing.ProductVendor t2 join LS_PRODUCCION.Produccion.Production.Product t1
on t1.ProductID=t2.ProductID
where LastReceiptCost>40

CREATE NONCLUSTERED INDEX [index8]
ON [Purchasing].[ProductVendor] ([LastReceiptCost])
INCLUDE ([ProductID])